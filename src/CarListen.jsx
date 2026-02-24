import { useState, useRef, useEffect, useCallback } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

export default function CarListen() {
  const mountRef = useRef(null);
  const [inLobby, setInLobby] = useState(true);
  const [tracks, setTracks] = useState([]); // [{name, url, audio, source}] max 3
  const [trackIdx, setTrackIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState("day");
  const [sceneryTheme, setSceneryTheme] = useState("forest");
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [alive, setAlive] = useState(true);
  const [flash, setFlash] = useState(null);
  const audioCtxRef = useRef(null);
  const animRef = useRef(null);
  const sceneRef = useRef({});
  const clockRef = useRef(new THREE.Clock());
  const keysRef = useRef({});
  const carRef = useRef({ speed: 0, steering: 0, posX: 0, angle: 0 });
  const scoreRef = useRef(0);
  const aliveRef = useRef(true);
  const hiRef = useRef(0);
  const shakeRef = useRef(0);
  const tracksRef = useRef([]);

  // --- Spatial Audio: car cabin speaker chain + SFX ---
  const initAudioCtx = () => {
    if (audioCtxRef.current) return audioCtxRef.current;
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const rate = ctx.sampleRate;

    // Cabin impulse response (short reverb for small enclosed space)
    const len = Math.floor(rate * 0.35);
    const impulse = ctx.createBuffer(2, len, rate);
    for (let ch = 0; ch < 2; ch++) {
      const d = impulse.getChannelData(ch);
      for (let i = 0; i < len; i++) { const t = i / rate; d[i] = (Math.random() * 2 - 1) * Math.exp(-t * 12) * (i < rate * 0.02 ? 0.6 : 1) * 0.4; }
    }
    const convolver = ctx.createConvolver(); convolver.buffer = impulse;

    // Music chain: bass boost → cabin LPF → stereo panners with delay → dry mix
    const bassBoost = ctx.createBiquadFilter(); bassBoost.type = "peaking"; bassBoost.frequency.value = 80; bassBoost.gain.value = 6; bassBoost.Q.value = 1.2;
    const cabinLPF = ctx.createBiquadFilter(); cabinLPF.type = "lowpass"; cabinLPF.frequency.value = 8000; cabinLPF.Q.value = 0.7;
    // Speaker distance delays (L speaker slightly closer = ~0.3ms, R speaker ~0.6ms from driver)
    const delayL = ctx.createDelay(0.01); delayL.delayTime.value = 0.0003;
    const delayR = ctx.createDelay(0.01); delayR.delayTime.value = 0.0006;
    const panL = ctx.createStereoPanner(); panL.pan.value = -0.6;
    const panR = ctx.createStereoPanner(); panR.pan.value = 0.6;
    const dryGain = ctx.createGain(); dryGain.gain.value = 0.7;
    const wetGain = ctx.createGain(); wetGain.gain.value = 0.35;
    const masterGain = ctx.createGain(); masterGain.gain.value = 1.0;
    // Permanent downstream chain
    bassBoost.connect(cabinLPF);
    cabinLPF.connect(delayL).connect(panL).connect(dryGain);
    cabinLPF.connect(delayR).connect(panR).connect(dryGain);
    dryGain.connect(masterGain);
    convolver.connect(wetGain); wetGain.connect(masterGain);
    masterGain.connect(ctx.destination);

    // === ROAD NOISE (low rumble, tire texture) ===
    const noiseNode = ctx.createBufferSource();
    const noiseBuf = ctx.createBuffer(1, Math.floor(rate * 2), rate);
    const nd = noiseBuf.getChannelData(0); for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
    noiseNode.buffer = noiseBuf; noiseNode.loop = true;
    const noiseLPF = ctx.createBiquadFilter(); noiseLPF.type = "lowpass"; noiseLPF.frequency.value = 250; noiseLPF.Q.value = 0.5;
    const noiseGain = ctx.createGain(); noiseGain.gain.value = 0;
    noiseNode.connect(noiseLPF).connect(noiseGain).connect(ctx.destination); noiseNode.start();

    // === ENGINE DRONE (oscillator-based, pitches up with speed) ===
    const engOsc1 = ctx.createOscillator(); engOsc1.type = "sawtooth"; engOsc1.frequency.value = 35;
    const engOsc2 = ctx.createOscillator(); engOsc2.type = "triangle"; engOsc2.frequency.value = 70;
    const engLPF = ctx.createBiquadFilter(); engLPF.type = "lowpass"; engLPF.frequency.value = 120; engLPF.Q.value = 1.5;
    const engGain = ctx.createGain(); engGain.gain.value = 0;
    engOsc1.connect(engLPF); engOsc2.connect(engLPF);
    engLPF.connect(engGain).connect(ctx.destination);
    engOsc1.start(); engOsc2.start();

    // === WIND NOISE (high-freq hiss, increases with speed) ===
    const windNode = ctx.createBufferSource();
    const windBuf = ctx.createBuffer(1, Math.floor(rate * 2), rate);
    const wd = windBuf.getChannelData(0); for (let i = 0; i < wd.length; i++) wd[i] = Math.random() * 2 - 1;
    windNode.buffer = windBuf; windNode.loop = true;
    const windHPF = ctx.createBiquadFilter(); windHPF.type = "highpass"; windHPF.frequency.value = 2500; windHPF.Q.value = 0.3;
    const windLPF = ctx.createBiquadFilter(); windLPF.type = "lowpass"; windLPF.frequency.value = 6000; windLPF.Q.value = 0.5;
    const windGain = ctx.createGain(); windGain.gain.value = 0;
    windNode.connect(windHPF).connect(windLPF).connect(windGain).connect(ctx.destination); windNode.start();

    audioCtxRef.current = { ctx, convolver, bassBoost, noiseGain, engOsc1, engOsc2, engLPF, engGain, windGain, activeSource: null };
    return audioCtxRef.current;
  };

  // === SFX: Record collect (coin ping) ===
  const playCollectSFX = () => {
    const ac = audioCtxRef.current; if (!ac) return;
    const ctx = ac.ctx, t = ctx.currentTime;
    // Bright ascending double-ping (like a coin)
    const osc1 = ctx.createOscillator(); osc1.type = "sine";
    osc1.frequency.setValueAtTime(988, t);       // B5
    osc1.frequency.setValueAtTime(1319, t + 0.07); // E6
    const osc2 = ctx.createOscillator(); osc2.type = "sine";
    osc2.frequency.setValueAtTime(1568, t + 0.04); // G6 shimmer
    const g1 = ctx.createGain();
    g1.gain.setValueAtTime(0.18, t);
    g1.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
    const g2 = ctx.createGain();
    g2.gain.setValueAtTime(0.001, t);
    g2.gain.linearRampToValueAtTime(0.1, t + 0.04);
    g2.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
    osc1.connect(g1).connect(ctx.destination);
    osc2.connect(g2).connect(ctx.destination);
    osc1.start(t); osc1.stop(t + 0.25);
    osc2.start(t + 0.03); osc2.stop(t + 0.25);
  };

  // === SFX: Label crash (impact + noise) ===
  const playHitSFX = () => {
    const ac = audioCtxRef.current; if (!ac) return;
    const ctx = ac.ctx, t = ctx.currentTime;
    // Low impact thud
    const osc = ctx.createOscillator(); osc.type = "sawtooth";
    osc.frequency.setValueAtTime(90, t);
    osc.frequency.exponentialRampToValueAtTime(20, t + 0.35);
    // Noise burst (crunch)
    const nBuf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.4), ctx.sampleRate);
    const nD = nBuf.getChannelData(0); for (let i = 0; i < nD.length; i++) nD[i] = Math.random() * 2 - 1;
    const noise = ctx.createBufferSource(); noise.buffer = nBuf;
    const bpf = ctx.createBiquadFilter(); bpf.type = "bandpass"; bpf.frequency.value = 900; bpf.Q.value = 1.5;
    // Distortion waveshaper for crunch
    const dist = ctx.createWaveShaper();
    const curve = new Float32Array(256);
    for (let i = 0; i < 256; i++) { const x = (i / 128) - 1; curve[i] = (Math.PI + 3.5) * x / (Math.PI + 3.5 * Math.abs(x)); }
    dist.curve = curve;
    // Mix
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.35, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.45);
    osc.connect(g).connect(ctx.destination);
    noise.connect(bpf).connect(dist).connect(g);
    osc.start(t); osc.stop(t + 0.5);
    noise.start(t); noise.stop(t + 0.45);
  };

  const connectTrack = (track) => {
    const ac = initAudioCtx();
    if (ac.activeSource) { try { ac.activeSource.disconnect(); } catch (e) { /* ok */ } }
    if (!track.source) { track.source = ac.ctx.createMediaElementSource(track.audio); }
    track.source.connect(ac.bassBoost);
    track.source.connect(ac.convolver);
    ac.activeSource = track.source;
  };

  const addTrack = (file) => {
    if (tracksRef.current.length >= 3) return;
    const audio = new Audio(URL.createObjectURL(file));
    audio.crossOrigin = "anonymous";
    const t = { name: file.name.replace(/\.[^/.]+$/, ""), audio, source: null };
    // Auto-advance to next track when song ends
    audio.addEventListener("ended", () => {
      const all = tracksRef.current;
      const idx = all.indexOf(t);
      if (idx >= 0 && idx < all.length - 1) { playTrack(idx + 1); }
      else if (all.length > 0) { playTrack(0); }
    });
    tracksRef.current = [...tracksRef.current, t];
    setTracks([...tracksRef.current]);
  };

  const removeTrack = (idx) => {
    const all = tracksRef.current;
    if (all[idx]?.audio) { all[idx].audio.pause(); if (all[idx].source) try { all[idx].source.disconnect(); } catch (e) {} }
    tracksRef.current = all.filter((_, i) => i !== idx);
    setTracks([...tracksRef.current]);
    if (trackIdx >= tracksRef.current.length) setTrackIdx(Math.max(0, tracksRef.current.length - 1));
    if (tracksRef.current.length === 0) setIsPlaying(false);
  };

  const playTrack = (idx) => {
    const all = tracksRef.current;
    if (!all.length) return;
    all.forEach(t => t.audio.pause());
    const t = all[idx % all.length];
    connectTrack(t);
    const ac = audioCtxRef.current;
    if (ac && ac.ctx.state === "suspended") ac.ctx.resume();
    t.audio.currentTime = 0; t.audio.play();
    setTrackIdx(idx % all.length);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    const all = tracksRef.current;
    if (!all.length) return;
    const ac = audioCtxRef.current;
    if (ac && ac.ctx.state === "suspended") ac.ctx.resume();
    const t = all[trackIdx];
    if (!t) return;
    if (isPlaying) { t.audio.pause(); setIsPlaying(false); }
    else { if (!ac?.activeSource || ac.activeSource !== t.source) connectTrack(t); t.audio.play(); setIsPlaying(true); }
  };

  const nextTrack = () => { const all = tracksRef.current; if (all.length < 2) return; playTrack((trackIdx + 1) % all.length); };
  const prevTrack = () => { const all = tracksRef.current; if (all.length < 2) return; playTrack((trackIdx - 1 + all.length) % all.length); };

  const startGame = () => { initAudioCtx(); setInLobby(false); if (tracksRef.current.length > 0) playTrack(0); };

  const restart = () => { const s = sceneRef.current; aliveRef.current = true; setAlive(true); scoreRef.current = 0; setScore(0); carRef.current = { speed: 0, steering: 0, posX: 0, angle: 0 }; if (s.records) s.records.forEach((r, i) => { r.visible = true; r.position.z = -40 - i * 35; r.position.x = (Math.random() - 0.5) * 10; }); if (s.labels) s.labels.forEach((m, i) => { m.visible = true; m.position.z = -60 - i * 50; m.position.x = (Math.random() - 0.5) * 10; }); if (s.explosion) s.explosion.visible = false; if (s.roadGroup) s.roadGroup.position.x = 0; };

  // Scenery factories (PBR materials)
  const mkTree = (x, z) => { const g = new THREE.Group(); g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.5, 5), new THREE.MeshStandardMaterial({ color: 0x5c3a1e, roughness: 0.9 }))); [0x1a6b3c, 0x22874a, 0x0f5132].forEach((c, i) => { const l = new THREE.Mesh(new THREE.ConeGeometry(2.5 - i * 0.6, 4, 7), new THREE.MeshStandardMaterial({ color: c, roughness: 0.8 })); l.position.y = 3.5 + i * 2.2; l.castShadow = true; g.add(l); }); g.position.set(x, 2.5, z); g.scale.setScalar(0.8 + Math.random() * 0.8); return g; };
  const mkRock = (x, z) => { const m = new THREE.Mesh(new THREE.DodecahedronGeometry(1 + Math.random() * 2, 1), new THREE.MeshStandardMaterial({ color: 0x777777, roughness: 0.85, metalness: 0.05 })); m.position.set(x, 0.5, z); m.rotation.set(Math.random(), Math.random(), 0); return m; };
  const mkMtn = (x, z, sz) => { const s = sz || (30 + Math.random() * 60); const m = new THREE.Mesh(new THREE.ConeGeometry(s, s * 1.5, 8), new THREE.MeshStandardMaterial({ color: 0x556b55, roughness: 0.9 })); m.position.set(x, s * 0.6, z); m.userData = { isMountain: true, radius: s }; return m; };
  const mkSakura = (x, z) => { const g = new THREE.Group(); g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.3, 4), new THREE.MeshStandardMaterial({ color: 0x4a2a15, roughness: 0.85 }))); for (let i = 0; i < 4; i++) { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.1, 2.5, 6), new THREE.MeshStandardMaterial({ color: 0x4a2a15, roughness: 0.85 })); b.position.set(Math.sin(i * 1.6) * 0.8, 2.5 + i * 0.3, Math.cos(i * 1.6) * 0.8); b.rotation.z = Math.sin(i * 1.6) * 0.6; g.add(b); } [0xffb7c5, 0xff91a4, 0xffc0cb, 0xffa0b4, 0xffb7c5, 0xff91a4, 0xffc0cb].forEach(c => { const bl = new THREE.Mesh(new THREE.SphereGeometry(1.2 + Math.random() * 1.5, 8, 7), new THREE.MeshStandardMaterial({ color: c, roughness: 0.6, transparent: true, opacity: 0.85 })); bl.position.set((Math.random() - 0.5) * 3.5, 3.5 + Math.random() * 3, (Math.random() - 0.5) * 3.5); g.add(bl); }); g.position.set(x, 2, z); g.scale.setScalar(0.7 + Math.random() * 0.7); return g; };
  const mkTorii = (x, z) => { const g = new THREE.Group(); const r = new THREE.MeshStandardMaterial({ color: 0xcc2222, roughness: 0.4, metalness: 0.1 }); [-1.5, 1.5].forEach(s => { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 7, 8), r); p.position.set(s, 3.5, 0); g.add(p); }); const t1 = new THREE.Mesh(new THREE.BoxGeometry(5, 0.35, 0.35), r); t1.position.y = 7; g.add(t1); const t2 = new THREE.Mesh(new THREE.BoxGeometry(4, 0.25, 0.25), r); t2.position.y = 6; g.add(t2); g.position.set(x, 0, z); return g; };
  const mkBldg = (x, z) => { const g = new THREE.Group(); const bw = 4 + Math.random() * 8, bh = 10 + Math.random() * 50, bd = 4 + Math.random() * 8; g.add((() => { const b = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, bd), new THREE.MeshStandardMaterial({ color: [0x556677, 0x445566, 0x667788, 0x334455][Math.floor(Math.random() * 4)], roughness: 0.7, metalness: 0.3 })); b.position.y = bh / 2; b.castShadow = true; return b; })()); const wOn = new THREE.MeshStandardMaterial({ color: 0xffeeaa, emissive: 0xffdd88, emissiveIntensity: 0.6, roughness: 0.3 }); const wOff = new THREE.MeshStandardMaterial({ color: 0x223344, roughness: 0.8 }); for (let r = 0; r < Math.floor(bh / 2.5); r++) for (let c = 0; c < Math.floor(bw / 1.8); c++) { const w = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 1.2), Math.random() > 0.35 ? wOn : wOff); w.position.set(-bw / 2 + 1 + c * (bw / Math.floor(bw / 1.8)), 2 + r * 2.5, bd / 2 + 0.01); g.add(w); const w2 = w.clone(); w2.position.z = -bd / 2 - 0.01; w2.rotation.y = Math.PI; g.add(w2); } g.position.set(x, 0, z); g.userData = { isMountain: true, radius: Math.max(bw, bd) }; return g; };
  const mkSLight = (x, z) => { const g = new THREE.Group(); const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 8, 8), new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.4, metalness: 0.6 })); pole.position.y = 4; g.add(pole); const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.5, 6), new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.4, metalness: 0.6 })); arm.rotation.z = Math.PI / 2; arm.position.set(x > 0 ? -1.2 : 1.2, 8, 0); g.add(arm); const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 6), new THREE.MeshStandardMaterial({ color: 0xffffaa, emissive: 0xffdd66, emissiveIntensity: 0.8 })); bulb.position.set(x > 0 ? -2 : 2, 7.8, 0); g.add(bulb); g.position.set(x, 0, z); return g; };

  const spawnScenery = useCallback((scene, theme, pool, range) => {
    pool.forEach(o => scene.remove(o)); pool.length = 0;
    const rng = () => Math.random() > 0.5 ? 1 : -1;
    if (theme === "forest") { for (let i = 0; i < 200; i++) { const s = rng(); pool.push((Math.random() < 0.7 ? mkTree : mkRock)(s * (14 + Math.random() * 80), -Math.random() * range)); } for (let i = 0; i < 40; i++) { const s = rng(); const sz = 30 + Math.random() * 60; pool.push(mkMtn(s * (sz + 25 + Math.random() * 120), -Math.random() * range, sz)); } }
    else if (theme === "sakura") { for (let i = 0; i < 200; i++) pool.push(mkSakura(rng() * (12 + Math.random() * 70), -Math.random() * range)); for (let i = 0; i < 10; i++) pool.push(mkTorii(rng() * (9 + Math.random() * 6), -i * 90 - 30)); for (let i = 0; i < 20; i++) { const sz = 40 + Math.random() * 50; const m = mkMtn(rng() * (sz + 40 + Math.random() * 100), -Math.random() * range, sz); m.material.color.set(0x6677aa); pool.push(m); } }
    else if (theme === "city") { for (let i = 0; i < 120; i++) pool.push(mkBldg(rng() * (12 + Math.random() * 60), -Math.random() * range)); for (let i = 0; i < 50; i++) pool.push(mkSLight(rng() * 9, -i * 20)); }
    pool.forEach(o => scene.add(o));
  }, []);

  const mkRecord = () => { const g = new THREE.Group(); g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.05, 24), new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.15, metalness: 0.3 }))); [0.3, 0.5, 0.65].forEach(r => { const gr = new THREE.Mesh(new THREE.TorusGeometry(r, 0.008, 4, 24), new THREE.MeshBasicMaterial({ color: 0x222222 })); gr.rotation.x = Math.PI / 2; g.add(gr); }); g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.06, 16), new THREE.MeshStandardMaterial({ color: 0xff4444, roughness: 0.3, metalness: 0.1 }))); g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.08, 8), new THREE.MeshBasicMaterial({ color: 0x000000 }))); const glow = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.04, 8, 24), new THREE.MeshStandardMaterial({ color: 0xffdd00, emissive: 0xffaa00, emissiveIntensity: 0.8, transparent: true, opacity: 0.7 })); glow.rotation.x = Math.PI / 2; g.add(glow); return g; };

  const mkLabel = () => {
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.6, 0.3), new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.3, metalness: 0.2 }));
    body.position.y = 0.8; g.add(body);
    const plate = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.02), new THREE.MeshStandardMaterial({ color: 0xcc9900, roughness: 0.15, metalness: 0.85 }));
    plate.position.set(0, 0.9, 0.17); g.add(plate);
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.15, 0.32), new THREE.MeshStandardMaterial({ color: 0xcc0000, roughness: 0.4, metalness: 0.1 }));
    stripe.position.set(0, 1.65, 0); g.add(stripe);
    [-0.7, 0.7].forEach(sx => { for (let i = 0; i < 3; i++) { const lk = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.02, 6, 8), new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.15, metalness: 0.9 })); lk.position.set(sx, 0.4 + i * 0.25, 0); lk.rotation.y = Math.PI / 2; lk.rotation.x = i % 2 === 0 ? 0 : Math.PI / 2; g.add(lk); } });
    const glow = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 6), new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0xff0000, emissiveIntensity: 1.0 }));
    glow.position.set(0, 1.85, 0); g.add(glow);
    g.userData = { type: "label", light: glow }; return g;
  };

  const mkExplosion = () => { const g = new THREE.Group(); const cols = [0xff4400, 0xff8800, 0xffcc00, 0xff2200]; for (let i = 0; i < 12; i++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.5 + Math.random() * 1.5, 8, 6), new THREE.MeshBasicMaterial({ color: cols[i % 4], transparent: true, opacity: 0.8 })); b.position.set((Math.random() - .5) * 3, Math.random() * 3, (Math.random() - .5) * 3 - 3); b.userData.speed = 1 + Math.random() * 2; g.add(b); } for (let i = 0; i < 6; i++) { const sm = new THREE.Mesh(new THREE.SphereGeometry(1 + Math.random(), 6, 5), new THREE.MeshBasicMaterial({ color: 0x333333, transparent: true, opacity: 0.5 })); sm.position.set((Math.random() - .5) * 4, 1 + Math.random() * 2, (Math.random() - .5) * 4 - 3); g.add(sm); } g.visible = false; return g; };

  // --- Custom post-processing shaders ---
  const VignetteShader = {
    uniforms: { tDiffuse: { value: null }, darkness: { value: 0.4 }, offset: { value: 1.1 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `uniform sampler2D tDiffuse; uniform float darkness; uniform float offset; varying vec2 vUv;
      void main(){ vec4 c=texture2D(tDiffuse,vUv); vec2 uv=(vUv-0.5)*2.0; float vig=1.0-dot(uv,uv)*darkness*0.35; c.rgb*=clamp(vig,0.0,1.0); gl_FragColor=c; }`
  };
  const FilmGrainShader = {
    uniforms: { tDiffuse: { value: null }, time: { value: 0 }, intensity: { value: 0.0 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `uniform sampler2D tDiffuse; uniform float time; uniform float intensity; varying vec2 vUv;
      float rand(vec2 co){ return fract(sin(dot(co,vec2(12.9898,78.233)))*43758.5453); }
      void main(){ vec4 c=texture2D(tDiffuse,vUv); float g=rand(vUv+fract(time))*2.0-1.0; c.rgb+=vec3(g*intensity); gl_FragColor=c; }`
  };
  const ChromaticAberrationShader = {
    uniforms: { tDiffuse: { value: null }, amount: { value: 0.0003 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `uniform sampler2D tDiffuse; uniform float amount; varying vec2 vUv;
      void main(){ vec2 d=(vUv-0.5)*amount; float r=texture2D(tDiffuse,vUv+d).r; float g=texture2D(tDiffuse,vUv).g; float b=texture2D(tDiffuse,vUv-d).b; gl_FragColor=vec4(r,g,b,1.0); }`
  };
  const ColorGradeShader = {
    uniforms: { tDiffuse: { value: null }, warmth: { value: 0.02 }, contrast: { value: 1.04 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `uniform sampler2D tDiffuse; uniform float warmth; uniform float contrast; varying vec2 vUv;
      void main(){ vec4 c=texture2D(tDiffuse,vUv); c.rgb=(c.rgb-0.5)*contrast+0.5; c.r+=warmth*0.5; c.g+=warmth*0.2; c.b-=warmth*0.15; gl_FragColor=c; }`
  };
  const SpeedLinesShader = {
    uniforms: { tDiffuse: { value: null }, intensity: { value: 0 }, time: { value: 0 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `uniform sampler2D tDiffuse; uniform float intensity; uniform float time; varying vec2 vUv;
      void main(){
        vec4 c=texture2D(tDiffuse,vUv);
        if(intensity>0.01){
          vec2 center=vec2(0.5,0.5); vec2 dir=vUv-center; float dist=length(dir);
          float radialBlur=dist*intensity*0.015;
          vec2 blurDir=normalize(dir)*radialBlur;
          vec4 sum=c;
          sum+=texture2D(tDiffuse,vUv-blurDir*0.25);
          sum+=texture2D(tDiffuse,vUv-blurDir*0.5);
          sum+=texture2D(tDiffuse,vUv-blurDir*0.75);
          sum+=texture2D(tDiffuse,vUv-blurDir);
          c=sum/5.0;
        }
        gl_FragColor=c;
      }`
  };

  const buildScene = useCallback((container) => {
    const w = container.clientWidth, h = container.clientHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setSize(w, h); renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(68, w / h, 0.1, 2000);
    camera.position.set(0, 3.5, 0.5); camera.lookAt(0, 2.5, -50);

    // === POST-PROCESSING PIPELINE ===
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 0.15, 0.4, 0.92);
    composer.addPass(bloomPass);
    const vignettePass = new ShaderPass(VignetteShader); composer.addPass(vignettePass);
    const chromaPass = new ShaderPass(ChromaticAberrationShader); // Added but disabled — no addPass
    // Film grain pass removed for clean image
    const colorPass = new ShaderPass(ColorGradeShader); composer.addPass(colorPass);
    const speedLinesPass = new ShaderPass(SpeedLinesShader); composer.addPass(speedLinesPass);
    composer.addPass(new OutputPass());

    // === SKY: gradient hemisphere shader ===
    const skyC = { day: 0x87CEEB, sunset: 0xFF6B35, night: 0x0a0a2e, retro: 0x1a0033 };
    const fogC = { day: 0xc8e6f5, sunset: 0xff8855, night: 0x050520, retro: 0x220044 };
    const ambC = { day: 0x8899aa, sunset: 0x553322, night: 0x111133, retro: 0x660088 };
    const dirC = { day: 0xfffff0, sunset: 0xff7733, night: 0x223355, retro: 0xff00ff };
    const skyGeo = new THREE.SphereGeometry(900, 32, 16);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false,
      uniforms: { topColor: { value: new THREE.Color(0x4488cc) }, midColor: { value: new THREE.Color(0x87CEEB) }, bottomColor: { value: new THREE.Color(0xc8e6f5) }, sunColor: { value: new THREE.Color(0xffffee) }, sunDir: { value: new THREE.Vector3(0.3, 0.4, -0.8).normalize() }, sunSize: { value: 0.04 } },
      vertexShader: `varying vec3 vWorldPos; void main(){ vec4 wp=modelMatrix*vec4(position,1.0); vWorldPos=wp.xyz; gl_Position=projectionMatrix*viewMatrix*wp; }`,
      fragmentShader: `uniform vec3 topColor; uniform vec3 midColor; uniform vec3 bottomColor; uniform vec3 sunColor; uniform vec3 sunDir; uniform float sunSize; varying vec3 vWorldPos;
        void main(){ vec3 d=normalize(vWorldPos); float y=d.y;
          vec3 c=y>0.0?mix(midColor,topColor,pow(y,0.6)):mix(midColor,bottomColor,pow(-y,0.4));
          float sunDot=max(dot(d,sunDir),0.0); c+=sunColor*pow(sunDot,256.0/sunSize)*0.8;
          c+=sunColor*pow(sunDot,8.0)*0.15; gl_FragColor=vec4(c,1.0); }`
    });
    const sky = new THREE.Mesh(skyGeo, skyMat); scene.add(sky);
    scene.fog = new THREE.Fog(fogC.day, 80, 600);

    // === LIGHTING ===
    const amb = new THREE.AmbientLight(ambC.day, 0.7); scene.add(amb);
    const dir = new THREE.DirectionalLight(dirC.day, 1); dir.position.set(30, 50, -30); dir.castShadow = true;
    dir.shadow.mapSize.width = 2048; dir.shadow.mapSize.height = 2048;
    dir.shadow.camera.near = 1; dir.shadow.camera.far = 200;
    dir.shadow.camera.left = -30; dir.shadow.camera.right = 30;
    dir.shadow.camera.top = 30; dir.shadow.camera.bottom = -30;
    dir.shadow.bias = -0.001;
    scene.add(dir);
    const fillL = new THREE.PointLight(0x4466aa, 0.4, 10); fillL.position.set(0, 4, -1); scene.add(fillL);
    const dashL = new THREE.PointLight(0xffffff, 0.2, 6); dashL.position.set(0, 2.5, -1.5); scene.add(dashL);
    // Hemisphere light for natural ambient fill
    const hemiL = new THREE.HemisphereLight(0x88bbff, 0x445522, 0.3); scene.add(hemiL);

    // === ROAD with procedural asphalt texture ===
    const roadGroup = new THREE.Group(); scene.add(roadGroup);
    // Procedural asphalt: smooth blended texture
    const roadCanvas = document.createElement("canvas"); roadCanvas.width = 512; roadCanvas.height = 512;
    const rCtx = roadCanvas.getContext("2d");
    rCtx.fillStyle = "#333333"; rCtx.fillRect(0, 0, 512, 512);
    // Soft large-scale variation (not pixel noise)
    for (let i = 0; i < 200; i++) {
      const rx = Math.random() * 512, ry = Math.random() * 512, rs = 8 + Math.random() * 24;
      const v = Math.floor(42 + Math.random() * 20);
      rCtx.fillStyle = `rgba(${v},${v},${v},0.15)`;
      rCtx.beginPath(); rCtx.arc(rx, ry, rs, 0, Math.PI * 2); rCtx.fill();
    }
    // Extra soft mid-scale variation for depth
    for (let i = 0; i < 100; i++) {
      const rx = Math.random() * 512, ry = Math.random() * 512, rs = 4 + Math.random() * 12;
      const v = Math.floor(36 + Math.random() * 22);
      rCtx.fillStyle = `rgba(${v},${v},${v},0.1)`;
      rCtx.beginPath(); rCtx.arc(rx, ry, rs, 0, Math.PI * 2); rCtx.fill();
    }
    // Subtle cracks
    rCtx.strokeStyle = "rgba(25,25,25,0.15)"; rCtx.lineWidth = 0.8;
    for (let i = 0; i < 5; i++) {
      rCtx.beginPath(); rCtx.moveTo(Math.random() * 512, Math.random() * 512);
      for (let j = 0; j < 4; j++) rCtx.lineTo(rCtx.canvas.width * Math.random(), rCtx.canvas.height * Math.random());
      rCtx.stroke();
    }
    const roadTex = new THREE.CanvasTexture(roadCanvas);
    roadTex.wrapS = THREE.RepeatWrapping; roadTex.wrapT = THREE.RepeatWrapping;
    roadTex.repeat.set(4, 200);
    roadTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    roadTex.minFilter = THREE.LinearMipmapLinearFilter; roadTex.magFilter = THREE.LinearFilter;
    const roadMat = new THREE.MeshStandardMaterial({ map: roadTex, roughness: 0.85, metalness: 0.02 });
    const road = new THREE.Mesh(new THREE.PlaneGeometry(14, 4000), roadMat);
    road.rotation.x = -Math.PI / 2; road.position.set(0, 0.01, -1900); road.receiveShadow = true; roadGroup.add(road);

    // Lane dashes with slight worn look
    const DC = 60, DS = 12, dashes = [];
    const dashMat = new THREE.MeshStandardMaterial({ color: 0xddddcc, roughness: 0.6, metalness: 0 });
    for (let i = 0; i < DC; i++) { const mk = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 4), dashMat); mk.rotation.x = -Math.PI / 2; mk.position.set(0, 0.02, -i * DS); roadGroup.add(mk); dashes.push(mk); }
    const edgeMat = new THREE.MeshStandardMaterial({ color: 0xccccbb, roughness: 0.5 });
    for (let s of [-6.8, 6.8]) { const ln = new THREE.Mesh(new THREE.PlaneGeometry(0.15, 4000), edgeMat); ln.rotation.x = -Math.PI / 2; ln.position.set(s, 0.02, -1900); roadGroup.add(ln); }

    // Road shoulders (gravel transition)
    const shoulderCanvas = document.createElement("canvas"); shoulderCanvas.width = 256; shoulderCanvas.height = 256;
    const shCtx = shoulderCanvas.getContext("2d");
    shCtx.fillStyle = "#6a5d4a"; shCtx.fillRect(0, 0, 256, 256);
    // Soft blended patches
    for (let i = 0; i < 120; i++) { const v = 70 + Math.random() * 35; const rs = 6 + Math.random() * 16; shCtx.fillStyle = `rgba(${v+15},${v+8},${v},0.2)`; shCtx.beginPath(); shCtx.arc(Math.random()*256, Math.random()*256, rs, 0, Math.PI*2); shCtx.fill(); }
    // Extra mid-scale patches
    for (let i = 0; i < 60; i++) { const v = 68 + Math.random() * 30; const rs = 4 + Math.random() * 10; shCtx.fillStyle = `rgba(${v+12},${v+6},${v},0.12)`; shCtx.beginPath(); shCtx.arc(Math.random()*256, Math.random()*256, rs, 0, Math.PI*2); shCtx.fill(); }
    const shoulderTex = new THREE.CanvasTexture(shoulderCanvas);
    shoulderTex.wrapS = THREE.RepeatWrapping; shoulderTex.wrapT = THREE.RepeatWrapping;
    shoulderTex.repeat.set(3, 200);
    shoulderTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    shoulderTex.minFilter = THREE.LinearMipmapLinearFilter; shoulderTex.magFilter = THREE.LinearFilter;
    const shoulderMat = new THREE.MeshStandardMaterial({ map: shoulderTex, roughness: 0.95, metalness: 0 });
    for (let sx of [-9.5, 9.5]) {
      const sh = new THREE.Mesh(new THREE.PlaneGeometry(5, 4000), shoulderMat);
      sh.rotation.x = -Math.PI / 2; sh.position.set(sx, 0.005, -1900); sh.receiveShadow = true; roadGroup.add(sh);
    }

    // Ground with grass texture
    const gndCanvas = document.createElement("canvas"); gndCanvas.width = 256; gndCanvas.height = 256;
    const gCtx = gndCanvas.getContext("2d");
    gCtx.fillStyle = "#3d7030"; gCtx.fillRect(0, 0, 256, 256);
    // Soft color variation patches
    for (let i = 0; i < 150; i++) { const g = 50 + Math.random() * 45; const rs = 8 + Math.random() * 20; gCtx.fillStyle = `rgba(${g-5},${g+25},${g-10},0.18)`; gCtx.beginPath(); gCtx.arc(Math.random()*256, Math.random()*256, rs, 0, Math.PI*2); gCtx.fill(); }
    // Extra mid-scale variation
    for (let i = 0; i < 80; i++) { const g = 48 + Math.random() * 40; const rs = 5 + Math.random() * 14; gCtx.fillStyle = `rgba(${g-3},${g+20},${g-8},0.12)`; gCtx.beginPath(); gCtx.arc(Math.random()*256, Math.random()*256, rs, 0, Math.PI*2); gCtx.fill(); }
    const gndTex = new THREE.CanvasTexture(gndCanvas);
    gndTex.wrapS = THREE.RepeatWrapping; gndTex.wrapT = THREE.RepeatWrapping;
    gndTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    gndTex.minFilter = THREE.LinearMipmapLinearFilter; gndTex.magFilter = THREE.LinearFilter;
    gndTex.repeat.set(80, 80);
    const gndMat = new THREE.MeshStandardMaterial({ map: gndTex, roughness: 0.95, metalness: 0 });
    const gnd = new THREE.Mesh(new THREE.PlaneGeometry(4000, 4000), gndMat); gnd.rotation.x = -Math.PI / 2; gnd.receiveShadow = true; roadGroup.add(gnd);

    // Retro
    const retroSun = new THREE.Mesh(new THREE.CircleGeometry(60, 32), new THREE.ShaderMaterial({ vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`, fragmentShader: `varying vec2 vUv;void main(){float y=vUv.y;vec3 c=mix(vec3(1.,0.,0.5),vec3(1.,0.9,0.),y);float l=step(0.5,fract(y*12.));float m=y<0.5?mix(1.,l,1.-y*2.):1.;gl_FragColor=vec4(c*m,m>0.01?1.:0.);}`, transparent: true, side: THREE.DoubleSide }));
    retroSun.position.set(0, 40, -800); retroSun.visible = false; scene.add(retroSun);
    const retroGrid = new THREE.Mesh(new THREE.PlaneGeometry(800, 800, 40, 40), new THREE.MeshBasicMaterial({ color: 0xff00ff, wireframe: true, transparent: true, opacity: 0.25 }));
    retroGrid.rotation.x = -Math.PI / 2; retroGrid.position.set(0, 0.05, -350); retroGrid.visible = false; scene.add(retroGrid);

    // === STARS ===
    const starGeo = new THREE.BufferGeometry();
    const starArr = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) { starArr[i * 3] = (Math.random() - 0.5) * 1200; starArr[i * 3 + 1] = 30 + Math.random() * 200; starArr[i * 3 + 2] = -100 - Math.random() * 800; }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starArr, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.8, transparent: true, opacity: 0.8 });
    const stars = new THREE.Points(starGeo, starMat); stars.visible = false; scene.add(stars);

    // === CLOUDS ===
    const clouds = [];
    for (let i = 0; i < 20; i++) {
      const cg = new THREE.Group();
      for (let p = 0; p < 3 + Math.floor(Math.random() * 4); p++) {
        const pf = new THREE.Mesh(new THREE.SphereGeometry(3 + Math.random() * 5, 8, 6), new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 }));
        pf.position.set((Math.random() - 0.5) * 8, Math.random() * 2, (Math.random() - 0.5) * 4);
        pf.scale.y = 0.4 + Math.random() * 0.3; cg.add(pf);
      }
      cg.position.set((Math.random() - 0.5) * 600, 40 + Math.random() * 60, -100 - Math.random() * 500);
      cg.userData.drift = 2 + Math.random() * 4;
      scene.add(cg); clouds.push(cg);
    }

    // === PARTICLES ===
    const pCount = 40;
    const pGeo = new THREE.BufferGeometry();
    const pArr = new Float32Array(pCount * 3);
    const pVel = [];
    for (let i = 0; i < pCount; i++) {
      pArr[i * 3] = (Math.random() - 0.5) * 60; pArr[i * 3 + 1] = 2 + Math.random() * 15; pArr[i * 3 + 2] = -5 - Math.random() * 50;
      pVel.push({ x: (Math.random() - 0.5) * 1.5, y: -0.3 - Math.random() * 0.8, z: Math.random() * 0.3, ph: Math.random() * Math.PI * 2 });
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pArr, 3));
    const pMat = new THREE.PointsMaterial({ color: 0xffb7c5, size: 1.2, transparent: true, opacity: 0.5, sizeAttenuation: true });
    const ptcls = new THREE.Points(pGeo, pMat); scene.add(ptcls);

    // === SHOOTING STARS ===
    const shooters = [];
    for (let i = 0; i < 3; i++) {
      const vts = []; for (let j = 0; j < 8; j++) vts.push(j * -2, j * -0.3, 0);
      const sg = new THREE.BufferGeometry(); sg.setAttribute("position", new THREE.BufferAttribute(new Float32Array(vts), 3));
      const sl = new THREE.Line(sg, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 }));
      sl.position.set((Math.random() - 0.5) * 400, 80 + Math.random() * 100, -200 - Math.random() * 400);
      sl.userData = { timer: Math.random() * 500, interval: 300 + Math.random() * 600, on: false, spd: 80 + Math.random() * 120 };
      scene.add(sl); shooters.push(sl);
    }

    // === BIRDS ===
    const birds = [];
    for (let i = 0; i < 8; i++) {
      const bg = new THREE.Group();
      const wL = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.15), new THREE.MeshBasicMaterial({ color: 0x222222, side: THREE.DoubleSide }));
      wL.position.x = -0.5; wL.rotation.z = 0.3; bg.add(wL);
      const wR = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.15), new THREE.MeshBasicMaterial({ color: 0x222222, side: THREE.DoubleSide }));
      wR.position.x = 0.5; wR.rotation.z = -0.3; bg.add(wR);
      bg.position.set((Math.random() - 0.5) * 200, 25 + Math.random() * 40, -50 - Math.random() * 300);
      bg.userData = { fs: 8 + Math.random() * 12, wp: Math.random() * Math.PI * 2, wL: wL, wR: wR, baseY: bg.position.y };
      scene.add(bg); birds.push(bg);
    }

    // === HEADLIGHT CONES (volumetric light on road) ===
    const hlConeMat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, side: THREE.DoubleSide,
      uniforms: { intensity: { value: 0 } },
      vertexShader: `varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `uniform float intensity; varying vec3 vPos;
        void main(){ float d=length(vPos.xz)*0.03; float a=max(0.0,1.0-d)*0.12*intensity; float fade=1.0-smoothstep(0.0,40.0,abs(vPos.z)); gl_FragColor=vec4(1.0,1.0,0.85,a*fade); }`
    });
    const hlConeL = new THREE.Mesh(new THREE.PlaneGeometry(8, 80), hlConeMat.clone());
    hlConeL.rotation.x = -Math.PI / 2; hlConeL.position.set(-1.5, 0.08, -42); scene.add(hlConeL);
    const hlConeR = new THREE.Mesh(new THREE.PlaneGeometry(8, 80), hlConeMat.clone());
    hlConeR.rotation.x = -Math.PI / 2; hlConeR.position.set(1.5, 0.08, -42); scene.add(hlConeR);

    // === SPEED LINES PARTICLE SYSTEM ===
    const slCount = 80;
    const slGeo = new THREE.BufferGeometry();
    const slPos = new Float32Array(slCount * 6); // pairs of points (start+end) for lines
    const slGeo2 = new THREE.BufferGeometry();
    for (let i = 0; i < slCount; i++) {
      const x = (Math.random() - 0.5) * 30, y = Math.random() * 8, z = -Math.random() * 60;
      slPos[i * 6] = x; slPos[i * 6 + 1] = y; slPos[i * 6 + 2] = z;
      slPos[i * 6 + 3] = x; slPos[i * 6 + 4] = y; slPos[i * 6 + 5] = z + 2;
    }
    slGeo.setAttribute("position", new THREE.BufferAttribute(slPos, 3));
    const slMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
    const speedLines = new THREE.LineSegments(slGeo, slMat);
    scene.add(speedLines);

    // === CAR INTERIOR (PBR materials) ===
    const interior = new THREE.Group(); scene.add(interior);
    const mB = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.8, metalness: 0.05 });
    const mD = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9, metalness: 0.02 });
    const mS = new THREE.MeshStandardMaterial({ color: 0x181818, roughness: 0.6, metalness: 0.1 });
    const mC = new THREE.MeshStandardMaterial({ color: 0xbbbbbb, roughness: 0.15, metalness: 0.9 });
    const mG = new THREE.MeshStandardMaterial({ color: 0x334455, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.18 });

    // Dashboard
    const db = new THREE.Mesh(new THREE.BoxGeometry(5.8, 0.7, 2.2), mB); db.position.set(0, 1.5, -2.6); interior.add(db);
    const dt2 = new THREE.Mesh(new THREE.BoxGeometry(5.6, 0.12, 1.8), mS); dt2.position.set(0, 1.9, -2.5); interior.add(dt2);
    const df = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 5.6, 16, 1, true, 0, Math.PI), mB); df.rotation.z = Math.PI / 2; df.rotation.x = Math.PI / 2; df.position.set(0, 1.15, -3.1); interior.add(df);
    const ch = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.9, 0.15), mD); ch.position.set(-0.88, 2.18, -2.32); ch.rotation.x = -0.25; interior.add(ch);

    // Stereo
    const sGrp = new THREE.Group(); sGrp.position.set(0.5, 1.85, -2.35);
    sGrp.add(new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.85, 0.12), mB));
    const sCanvas = document.createElement("canvas"); sCanvas.width = 256; sCanvas.height = 64;
    const sCtx = sCanvas.getContext("2d"); sCtx.fillStyle = "#020a04"; sCtx.fillRect(0, 0, 256, 64); sCtx.fillStyle = "#0a6"; sCtx.font = "bold 16px monospace"; sCtx.textAlign = "center"; sCtx.fillText("NO DISC", 128, 38);
    const sTex = new THREE.CanvasTexture(sCanvas);
    const sSc = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.55, 0.01), new THREE.MeshBasicMaterial({ map: sTex })); sSc.position.set(0, 0.06, 0.07); sGrp.add(sSc);
    [-0.62, 0.62].forEach(sx => { const k = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 10), mC); k.position.set(sx, -0.05, 0.07); sGrp.add(k); });
    for (let i = 0; i < 4; i++) { const bt = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.02, 10), mC); bt.rotation.x = Math.PI / 2; bt.position.set(-0.3 + i * 0.2, -0.32, 0.07); sGrp.add(bt); }
    interior.add(sGrp);

    // Console + armrest
    const cn = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.5, 3.2), mB); cn.position.set(0, 1.25, 0); interior.add(cn);
    const ar = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.15, 1.1), mS); ar.position.set(0, 1.58, 0.8); interior.add(ar);

    // Steering wheel
    const wGrp = new THREE.Group();
    wGrp.add(new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.035, 16, 36), mS));
    const fb = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.04, 0.04), mC); fb.position.y = -0.40; wGrp.add(fb);
    [-0.8, 0, 0.8].forEach(a => { const sp = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.025, 0.38, 8), mB); sp.position.set(Math.sin(a) * 0.19, Math.cos(a) * 0.19, 0); sp.rotation.z = -a; wGrp.add(sp); });
    wGrp.add(new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.04, 20), mB));
    wGrp.add(new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.005, 8, 24), mC));
    [-0.5, 0.5].forEach(sx => { const p = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.035, 0.1), mC); p.position.set(sx, 0.08, -0.06); wGrp.add(p); });
    wGrp.position.set(-0.85, 2.1, -1.8); wGrp.rotation.x = -0.38; interior.add(wGrp);

    // === SPEEDOMETER GAUGE ===
    const speedoGrp = new THREE.Group();
    // Gauge backing (dark circle)
    const gaugeBack = new THREE.Mesh(new THREE.CircleGeometry(0.38, 32), new THREE.MeshPhongMaterial({ color: 0x0a0a0a, shininess: 40 }));
    speedoGrp.add(gaugeBack);
    // Chrome ring
    const gaugeRing = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.02, 12, 32), mC);
    speedoGrp.add(gaugeRing);
    // Tick marks and number labels
    const speedoCanvas = document.createElement("canvas");
    speedoCanvas.width = 256; speedoCanvas.height = 256;
    const spCtx = speedoCanvas.getContext("2d");
    spCtx.clearRect(0, 0, 256, 256);
    const cx = 128, cy = 128, r = 105;
    // Draw tick marks and labels for 0-120 MPH
    for (let mph = 0; mph <= 120; mph += 10) {
      const frac = mph / 120;
      const ang = Math.PI * 0.75 + frac * Math.PI * 1.5; // 225 to 495 degrees
      const cos = Math.cos(ang), sin = Math.sin(ang);
      const isMajor = mph % 20 === 0;
      const inner = isMajor ? r - 20 : r - 12;
      spCtx.strokeStyle = isMajor ? "#ffffff" : "#888888";
      spCtx.lineWidth = isMajor ? 2.5 : 1.2;
      spCtx.beginPath();
      spCtx.moveTo(cx + inner * cos, cy + inner * sin);
      spCtx.lineTo(cx + r * cos, cy + r * sin);
      spCtx.stroke();
      if (isMajor) {
        spCtx.fillStyle = "#ffffff";
        spCtx.font = "bold 16px monospace";
        spCtx.textAlign = "center";
        spCtx.textBaseline = "middle";
        spCtx.fillText(String(mph), cx + (r - 32) * cos, cy + (r - 32) * sin);
      }
    }
    // "MPH" label
    spCtx.fillStyle = "#4ade80";
    spCtx.font = "bold 10px monospace";
    spCtx.textAlign = "center";
    spCtx.fillText("MPH", cx, cy + 40);
    const speedoTex = new THREE.CanvasTexture(speedoCanvas);
    const speedoFace = new THREE.Mesh(new THREE.CircleGeometry(0.36, 32), new THREE.MeshBasicMaterial({ map: speedoTex, transparent: true }));
    speedoFace.position.z = 0.005;
    speedoGrp.add(speedoFace);
    // Needle
    const needleGrp = new THREE.Group();
    const needleMesh = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.28, 0.008), new THREE.MeshStandardMaterial({ color: 0xff3333, emissive: 0x440000, roughness: 0.3, metalness: 0.5 }));
    needleMesh.position.y = 0.12;
    needleGrp.add(needleMesh);
    // Center cap
    needleGrp.add(new THREE.Mesh(new THREE.CircleGeometry(0.03, 12), new THREE.MeshStandardMaterial({ color: 0xcc0000, roughness: 0.2, metalness: 0.8 })));
    needleGrp.position.z = 0.01;
    speedoGrp.add(needleGrp);
    // Position on dashboard, left of steering column (driver's instrument cluster)
    speedoGrp.position.set(-0.88, 2.18, -2.25);
    speedoGrp.rotation.x = -0.25;
    interior.add(speedoGrp);

    // Mirror
    const mg = new THREE.Group();
    const ma = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.03, 0.45, 8), mB); ma.position.y = 0.25; mg.add(ma);
    mg.add(new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.28, 0.06), mB));
    const mgl = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.24, 0.01), new THREE.MeshStandardMaterial({ color: 0x1a2a3a, roughness: 0.05, metalness: 0.95, transparent: true, opacity: 0.75 })); mgl.position.z = 0.035; mg.add(mgl);
    mg.position.set(0, 4.6, -2.0); interior.add(mg);

    // Pillars + roof + doors
    [-2.6, 2.6].forEach(s => { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.06, 3.2, 10), mB); p.position.set(s, 3.5, -2.2); p.rotation.z = s > 0 ? -0.2 : 0.2; interior.add(p); });
    const rf = new THREE.Mesh(new THREE.BoxGeometry(5.8, 0.08, 4.0), mD); rf.position.set(0, 5.2, -0.5); interior.add(rf);
    [-2.75, 2.75].forEach(s => {
      const f = s > 0 ? 1 : -1;
      const pn = new THREE.Mesh(new THREE.BoxGeometry(0.08, 2.2, 2.8), mB); pn.position.set(s, 2.3, -0.8); interior.add(pn);
      const up = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.5, 2.4), mS); up.position.set(s > 0 ? s - 0.04 : s + 0.04, 3.0, -0.8); interior.add(up);
      const da = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.1, 1.2), mS); da.position.set(s > 0 ? s - 0.08 : s + 0.08, 2.4, -0.6); interior.add(da);
      const dh = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.035, 0.35), mC); dh.position.set(s > 0 ? s - 0.05 : s + 0.05, 2.55, -0.5); interior.add(dh);
      const wn = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 1.5), mG); wn.position.set(s > 0 ? s - 0.01 : s + 0.01, 3.8, -0.8); wn.rotation.y = (Math.PI / 2) * f; interior.add(wn);
      const st = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.015, 2.4), new THREE.MeshBasicMaterial({ color: 0x2244aa, transparent: true, opacity: 0.5 })); st.position.set(s > 0 ? s - 0.03 : s + 0.03, 1.9, -0.8); interior.add(st);
    });

    // Headlights
    const hlL = new THREE.SpotLight(0xffffcc, 0, 80, 0.4, 0.5); hlL.position.set(-1.5, 2, -3); hlL.target.position.set(-2, 0, -80); scene.add(hlL); scene.add(hlL.target);
    const hlR = new THREE.SpotLight(0xffffcc, 0, 80, 0.4, 0.5); hlR.position.set(1.5, 2, -3); hlR.target.position.set(2, 0, -80); scene.add(hlR); scene.add(hlR.target);

    // Game objects
    const records = []; for (let i = 0; i < 15; i++) { const r = mkRecord(); r.position.set((Math.random() - 0.5) * 10, 1.2, -40 - i * 35); r.rotation.x = Math.PI / 2; r.userData.bobPhase = Math.random() * Math.PI * 2; scene.add(r); records.push(r); }
    const labels = []; for (let i = 0; i < 10; i++) { const l = mkLabel(); l.position.set((Math.random() - 0.5) * 10, 0, -60 - i * 50); scene.add(l); labels.push(l); }
    const explosion = mkExplosion(); scene.add(explosion);

    const pool = [];
    sceneRef.current = {
      renderer, composer, scene, camera, sceneryPool: pool, spawnRange: 1000,
      amb, dir, hemiL, skyC, fogC, ambC, dirC, wGrp, hlL, hlR, interior,
      sCanvas, sCtx, sTex, gndMat, roadMat, retroSun, retroGrid, fillL, dashL,
      records, labels, explosion, roadGroup, dashes, DS,
      stars, starMat, clouds, ptcls, pGeo, pVel, pMat, shooters, birds,
      speedoNeedle: needleGrp,
      // Visual upgrade refs
      skyMat, bloomPass, chromaPass, colorPass, speedLinesPass, vignettePass,
      hlConeL, hlConeR, speedLines, slGeo, slMat
    };
    return renderer;
  }, []);

  useEffect(() => { const d = e => { keysRef.current[e.code] = true; }; const u = e => { keysRef.current[e.code] = false; }; window.addEventListener("keydown", d); window.addEventListener("keyup", u); return () => { window.removeEventListener("keydown", d); window.removeEventListener("keyup", u); }; }, []);

  useEffect(() => {
    if (!mountRef.current) return;
    const el = mountRef.current, renderer = buildScene(el), s = sceneRef.current;
    spawnScenery(s.scene, sceneryTheme, s.sceneryPool, s.spawnRange);
    const onR = () => { const nw = el.clientWidth, nh = el.clientHeight; s.camera.aspect = nw / nh; s.camera.updateProjectionMatrix(); renderer.setSize(nw, nh); s.composer.setSize(nw, nh); };
    window.addEventListener("resize", onR);
    let dashOff = 0;

    const animate = () => {
      animRef.current = requestAnimationFrame(animate);
      const dt = Math.min(clockRef.current.getDelta(), 0.05);
      const k = keysRef.current, car = carRef.current, now = Date.now();

      // Update grain time every frame

      if (!aliveRef.current) {
        if (s.explosion && s.explosion.visible) s.explosion.children.forEach(ch => { ch.position.y += (ch.userData.speed || 2) * dt; ch.scale.multiplyScalar(1 + dt * 0.5); if (ch.material.opacity > 0.01) ch.material.opacity -= dt * 0.4; });
        s.composer.render(); return;
      }

      // Physics
      if (k.ShiftLeft || k.ShiftRight) car.speed = Math.min(car.speed + 40 * dt, 120);
      else if (k.Space) car.speed = Math.max(car.speed - 80 * dt, 0);
      else car.speed = Math.max(car.speed - 10 * dt, 0);
      const stT = (k.KeyA || k.ArrowLeft) ? -0.6 : (k.KeyD || k.ArrowRight) ? 0.6 : 0;
      car.steering += (stT - car.steering) * 5 * dt;
      const latSpd = car.steering * (car.speed / 60) * 15;
      const latD = latSpd * dt;
      car.posX = Math.max(-20, Math.min(20, car.posX + latD));
      car.angle += (car.steering * 0.08 - car.angle) * 4 * dt;
      setCurrentSpeed(Math.round(car.speed));
      const spd = car.speed;

      // Road
      s.roadGroup.position.x = -car.posX;
      dashOff += spd * dt; if (dashOff >= s.DS) dashOff -= s.DS;
      s.dashes.forEach((d, i) => { d.position.z = -(i * s.DS) + dashOff; });

      // Scenery
      s.sceneryPool.forEach(o => { o.position.z += spd * dt; o.position.x -= latD; if (o.position.z > 60) { o.position.z -= s.spawnRange; const sd = Math.random() > 0.5 ? 1 : -1; const mt = o.userData.isMountain; o.position.x = sd * ((mt ? (o.userData.radius || 50) + 20 : 14) + Math.random() * (mt ? 120 : 80)) - car.posX; } });

      // Records
      s.records.forEach(rec => { if (!rec.visible) return; rec.position.z += spd * dt; rec.position.x -= latD; rec.rotation.z += dt * 3; rec.position.y = 1.2 + Math.sin(now * 0.003 + rec.userData.bobPhase) * 0.3; if (rec.position.z > 30) { rec.position.z = -300 - Math.random() * 200; rec.position.x = (Math.random() - 0.5) * 10 - car.posX; rec.visible = true; } if (Math.abs(rec.position.x) < 1.8 && Math.abs(rec.position.z) < 2.5) { rec.visible = false; scoreRef.current += 100; setScore(scoreRef.current); playCollectSFX(); setFlash("record"); setTimeout(() => setFlash(null), 300); setTimeout(() => { rec.visible = true; rec.position.z = -300 - Math.random() * 200; rec.position.x = (Math.random() - 0.5) * 10 - car.posX; }, 2000); } });

      // Labels
      s.labels.forEach(lbl => { if (!lbl.visible) return; lbl.position.z += spd * dt; lbl.position.x -= latD; lbl.rotation.y += dt * 1.5; if (lbl.userData.light) lbl.userData.light.material.opacity = Math.sin(now * 0.01) > 0 ? 1 : 0.2; if (lbl.position.z > 30) { lbl.position.z = -350 - Math.random() * 250; lbl.position.x = (Math.random() - 0.5) * 10 - car.posX; lbl.visible = true; } if (Math.abs(lbl.position.x) < 1.5 && Math.abs(lbl.position.z) < 2) { aliveRef.current = false; setAlive(false); setFlash("boom"); if (scoreRef.current > hiRef.current) { hiRef.current = scoreRef.current; setHighScore(scoreRef.current); } if (s.explosion) { s.explosion.position.copy(lbl.position); s.explosion.visible = true; s.explosion.children.forEach(ch => { ch.material.opacity = 0.8; ch.scale.set(1, 1, 1); }); } lbl.visible = false; car.speed = 0; shakeRef.current = 0.12; playHitSFX(); } });

      // Retro grid
      if (s.retroGrid && s.retroGrid.visible) s.retroGrid.position.x = -car.posX;

      // === BACKGROUND ANIMATIONS ===
      // Clouds
      s.clouds.forEach(c => { c.position.x += c.userData.drift * dt; if (c.position.x > 350) c.position.x = -350; });

      // Particles
      const pa = s.pGeo.attributes.position.array;
      for (let i = 0; i < s.pVel.length; i++) {
        const v = s.pVel[i];
        pa[i * 3] += (v.x + Math.sin(now * 0.001 + v.ph) * 0.5) * dt;
        pa[i * 3 + 1] += v.y * dt;
        pa[i * 3 + 2] += spd * dt * 0.3 + v.z * dt;
        if (pa[i * 3 + 1] < 0 || pa[i * 3 + 2] > 20) { pa[i * 3] = (Math.random() - 0.5) * 80 - car.posX; pa[i * 3 + 1] = 5 + Math.random() * 20; pa[i * 3 + 2] = -20 - Math.random() * 80; }
      }
      s.pGeo.attributes.position.needsUpdate = true;

      // Shooting stars
      s.shooters.forEach(ss => { ss.userData.timer += dt * 60; if (!ss.userData.on && ss.userData.timer > ss.userData.interval) { ss.userData.on = true; ss.userData.timer = 0; ss.position.set((Math.random() - 0.5) * 400, 80 + Math.random() * 80, -200 - Math.random() * 300); ss.material.opacity = 1; } if (ss.userData.on) { ss.position.x += ss.userData.spd * dt; ss.position.y -= ss.userData.spd * 0.3 * dt; ss.material.opacity -= dt * 0.8; if (ss.material.opacity <= 0) { ss.userData.on = false; ss.userData.interval = 300 + Math.random() * 600; ss.material.opacity = 0; } } });

      // Birds
      s.birds.forEach(b => { b.position.x += b.userData.fs * dt; b.position.y = b.userData.baseY + Math.sin(now * 0.002 + b.userData.wp) * 2; b.position.z += spd * dt * 0.1; const flap = Math.sin(now * 0.008 + b.userData.wp); if (b.userData.wL) b.userData.wL.rotation.z = 0.3 + flap * 0.4; if (b.userData.wR) b.userData.wR.rotation.z = -0.3 - flap * 0.4; if (b.position.x > 250 || b.position.z > 50) { const newY = 25 + Math.random() * 40; b.userData.baseY = newY; b.position.set(-200 - Math.random() * 100, newY, -50 - Math.random() * 300); } });

      // Car interior
      if (s.wGrp) s.wGrp.rotation.z = car.steering * 1.2 + Math.sin(now * 0.001) * 0.008;
      const bob = car.speed / 120;
      s.camera.position.y = 3.5 + Math.sin(now * 0.004) * 0.02 * bob;
      s.camera.position.x = 0;
      s.camera.rotation.y = car.angle * 0.5;
      if (shakeRef.current > 0.001) { shakeRef.current *= Math.exp(-8 * dt); } else { shakeRef.current = 0; }
      s.camera.rotation.z = car.angle * -0.15 + Math.sin(now * 0.002) * 0.003 * bob + (Math.sin(now * 0.03) * shakeRef.current);
      if (s.interior) s.interior.rotation.y = car.angle * 0.5;

      // Speedometer needle with inertia: smooth lerp toward target
      if (s.speedoNeedle) {
        const frac = Math.min(car.speed / 120, 1);
        const targetAngle = (Math.PI * 0.75) - frac * (Math.PI * 1.5);
        s.speedoNeedle.rotation.z += (targetAngle - s.speedoNeedle.rotation.z) * (1 - Math.exp(-6 * dt));
      }

      // === DRIVING AUDIO (all framerate-independent) ===
      if (audioCtxRef.current) {
        const ac = audioCtxRef.current;
        const sf = Math.min(car.speed / 120, 1); // speed fraction 0-1
        const smooth = 1 - Math.exp(-5 * dt);
        // Road noise: tire rumble increases with speed
        ac.noiseGain.gain.value += (sf * 0.05 - ac.noiseGain.gain.value) * smooth;
        // Engine drone: pitch sweeps 35→115Hz, volume ramps up, LPF opens with speed
        const engFreq = 35 + sf * 80;
        ac.engOsc1.frequency.value += (engFreq - ac.engOsc1.frequency.value) * smooth;
        ac.engOsc2.frequency.value += (engFreq * 2 - ac.engOsc2.frequency.value) * smooth;
        ac.engGain.gain.value += ((0.012 + sf * 0.035) - ac.engGain.gain.value) * smooth;
        ac.engLPF.frequency.value += ((80 + sf * 200) - ac.engLPF.frequency.value) * smooth;
        // Wind noise: silent until ~30mph, ramps up above that
        const windVol = Math.max(0, (sf - 0.25) / 0.75) * 0.04;
        ac.windGain.gain.value += (windVol - ac.windGain.gain.value) * smooth;
      }

      // === SPEED-DEPENDENT VISUAL EFFECTS ===
      const sf = Math.min(car.speed / 120, 1);
      // Speed lines: fade in above 60mph
      if (s.speedLinesPass) {
        s.speedLinesPass.uniforms.intensity.value = Math.max(0, (sf - 0.6) * 2.5) * 0.5;
        s.speedLinesPass.uniforms.time.value = now * 0.001;
      }
      // Speed line geometry
      if (s.slMat) s.slMat.opacity = Math.max(0, (sf - 0.75) * 4) * 0.15;
      if (s.slGeo && sf > 0.4) {
        const sa = s.slGeo.attributes.position.array;
        for (let i = 0; i < sa.length / 6; i++) {
          sa[i * 6 + 2] += spd * dt * 1.5;
          sa[i * 6 + 5] += spd * dt * 1.5;
          if (sa[i * 6 + 2] > 10) {
            const x = (Math.random() - 0.5) * 30, y = Math.random() * 8, z = -30 - Math.random() * 40;
            sa[i * 6] = x; sa[i * 6 + 1] = y; sa[i * 6 + 2] = z;
            sa[i * 6 + 3] = x; sa[i * 6 + 4] = y; sa[i * 6 + 5] = z + 1 + sf * 3;
          }
        }
        s.slGeo.attributes.position.needsUpdate = true;
      }
      // Chromatic aberration increases with speed
      if (s.chromaPass) s.chromaPass.uniforms.amount.value = 0.0003 + sf * 0.001;
      // Bloom increases slightly at high speed
      if (s.bloomPass) s.bloomPass.strength = 0.12 + sf * 0.12;
      // Headlight cone intensity
      if (s.hlConeL) s.hlConeL.material.uniforms.intensity.value = s.hlL.intensity > 0 ? 1 : 0;
      if (s.hlConeR) s.hlConeR.material.uniforms.intensity.value = s.hlR.intensity > 0 ? 1 : 0;

      s.composer.render();
    };
    animate();
    return () => { window.removeEventListener("resize", onR); cancelAnimationFrame(animRef.current); if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement); renderer.dispose(); };
  }, [buildScene, spawnScenery]);

  useEffect(() => { const s = sceneRef.current; if (!s.scene) return; spawnScenery(s.scene, sceneryTheme, s.sceneryPool, s.spawnRange); if (s.gndMat) s.gndMat.color.set({ forest: 0x4a7a3a, sakura: 0x5a8a4a, city: 0x3a3a3a }[sceneryTheme] || 0x4a7a3a); }, [sceneryTheme, spawnScenery]);

  useEffect(() => {
    const s = sceneRef.current; if (!s.scene) return;
    s.scene.fog.color.set(s.fogC[timeOfDay]);
    s.amb.color.set(s.ambC[timeOfDay]); s.dir.color.set(s.dirC[timeOfDay]);
    s.dir.intensity = { day: 1, sunset: 0.6, night: 0.2, retro: 0.4 }[timeOfDay];
    s.amb.intensity = { day: 0.7, sunset: 0.5, night: 0.25, retro: 0.35 }[timeOfDay];
    const on = timeOfDay !== "day"; s.hlL.intensity = on ? 2 : 0; s.hlR.intensity = on ? 2 : 0;
    const hc = timeOfDay === "retro" ? 0xff00ff : 0xffffcc; s.hlL.color.set(hc); s.hlR.color.set(hc);
    // Update sky shader colors per time of day
    if (s.skyMat) {
      const skyConfigs = {
        day:    { top: 0x2266aa, mid: 0x87CEEB, bottom: 0xc8e6f5, sun: 0xfffff0, sunDir: [0.3, 0.5, -0.8], sunSize: 0.04 },
        sunset: { top: 0x1a1040, mid: 0xff6b35, bottom: 0xff8855, sun: 0xffdd44, sunDir: [0.0, 0.08, -1.0], sunSize: 0.08 },
        night:  { top: 0x020818, mid: 0x0a0a2e, bottom: 0x0a1020, sun: 0x8888cc, sunDir: [0.5, -0.3, -0.8], sunSize: 0.01 },
        retro:  { top: 0x0a0030, mid: 0x1a0033, bottom: 0x220044, sun: 0xff00ff, sunDir: [0.0, 0.2, -1.0], sunSize: 0.06 },
      };
      const sc = skyConfigs[timeOfDay];
      s.skyMat.uniforms.topColor.value.set(sc.top);
      s.skyMat.uniforms.midColor.value.set(sc.mid);
      s.skyMat.uniforms.bottomColor.value.set(sc.bottom);
      s.skyMat.uniforms.sunColor.value.set(sc.sun);
      s.skyMat.uniforms.sunDir.value.set(...sc.sunDir).normalize();
      s.skyMat.uniforms.sunSize.value = sc.sunSize;
    }
    // Color grading per time of day
    if (s.colorPass) {
      const cg = { day: { warmth: 0.02, contrast: 1.04 }, sunset: { warmth: 0.06, contrast: 1.06 }, night: { warmth: -0.02, contrast: 1.1 }, retro: { warmth: 0.01, contrast: 1.15 } };
      s.colorPass.uniforms.warmth.value = cg[timeOfDay].warmth;
      s.colorPass.uniforms.contrast.value = cg[timeOfDay].contrast;
    }
    // Bloom per time of day
    if (s.bloomPass) s.bloomPass.threshold = { day: 0.92, sunset: 0.85, night: 0.78, retro: 0.7 }[timeOfDay];
    // Hemisphere light
    if (s.hemiL) {
      const hemiConfigs = { day: [0x88bbff, 0x445522, 0.3], sunset: [0xff8844, 0x332211, 0.25], night: [0x112244, 0x111111, 0.1], retro: [0x660088, 0x110022, 0.2] };
      const hc2 = hemiConfigs[timeOfDay]; s.hemiL.color.set(hc2[0]); s.hemiL.groundColor.set(hc2[1]); s.hemiL.intensity = hc2[2];
    }
    // Tone mapping exposure
    if (s.renderer) s.renderer.toneMappingExposure = { day: 1.1, sunset: 1.0, night: 0.85, retro: 0.95 }[timeOfDay];
    if (s.gndMat) s.gndMat.color.set(timeOfDay === "retro" ? 0x0a0020 : ({ forest: 0x4a7a3a, sakura: 0x5a8a4a, city: 0x3a3a3a })[sceneryTheme] || 0x4a7a3a);
    if (s.roadMat) s.roadMat.color.set(timeOfDay === "retro" ? 0x110022 : 0x333333);
    if (s.retroSun) s.retroSun.visible = timeOfDay === "retro";
    if (s.retroGrid) s.retroGrid.visible = timeOfDay === "retro";
    if (s.fillL) { s.fillL.intensity = { day: 0.4, sunset: 0.3, night: 0.5, retro: 0.6 }[timeOfDay]; s.fillL.color.set(timeOfDay === "retro" ? 0x6600aa : 0x4466aa); }
    if (s.dashL) s.dashL.intensity = { day: 0.2, sunset: 0.15, night: 0.3, retro: 0.2 }[timeOfDay];
    // Background vis
    if (s.stars) { s.stars.visible = timeOfDay === "night" || timeOfDay === "retro"; s.starMat.color.set(timeOfDay === "retro" ? 0xff88ff : 0xffffff); }
    if (s.clouds) s.clouds.forEach(c => { c.visible = timeOfDay === "day" || timeOfDay === "sunset"; c.children.forEach(p => { if (timeOfDay === "sunset") { p.material.color.set(0xffaa77); p.material.opacity = 0.6; } else { p.material.color.set(0xffffff); p.material.opacity = 0.7; } }); });
    if (s.shooters) s.shooters.forEach(ss => { ss.visible = timeOfDay === "night"; });
    if (s.birds) s.birds.forEach(b => { b.visible = timeOfDay === "day" || timeOfDay === "sunset"; });
    if (s.pMat) {
      if (sceneryTheme === "sakura") { s.pMat.color.set(0xffb7c5); s.pMat.size = 0.5; s.pMat.opacity = 0.8; }
      else if (sceneryTheme === "city") { s.pMat.color.set(timeOfDay === "retro" ? 0xff44ff : 0xaaaaaa); s.pMat.size = 0.2; s.pMat.opacity = 0.4; }
      else { s.pMat.color.set(timeOfDay === "night" ? 0x88ffaa : timeOfDay === "retro" ? 0xff44ff : 0x99cc77); s.pMat.size = timeOfDay === "night" ? 0.3 : 0.25; s.pMat.opacity = timeOfDay === "night" ? 0.7 : 0.3; }
    }
  }, [timeOfDay, sceneryTheme]);

  useEffect(() => {
    const s = sceneRef.current; if (!s.sCtx) return;
    const ctx = s.sCtx, cw = s.sCanvas.width, ch = s.sCanvas.height; let fid;
    const currentName = tracks[trackIdx]?.name || "";
    const draw = () => {
      ctx.fillStyle = "#020a04"; ctx.fillRect(0, 0, cw, ch);
      if (!currentName) { ctx.fillStyle = "#0a6"; ctx.font = "bold 16px monospace"; ctx.textAlign = "center"; ctx.fillText("NO DISC", cw / 2, ch / 2 + 5); }
      else { const p = isPlaying, glow = p ? `rgb(${40 + Math.sin(Date.now() * 0.004) * 20},${220 + Math.sin(Date.now() * 0.003) * 35},80)` : "#0a6"; ctx.fillStyle = glow; ctx.font = "bold 14px monospace"; const t = currentName.toUpperCase(), tw = ctx.measureText(t).width; if (tw > cw - 20 && p) { ctx.textAlign = "left"; ctx.fillText(t, cw - (Date.now() * 0.03) % (tw + 80), 22); } else { ctx.textAlign = "center"; ctx.fillText(t.length > 18 ? t.slice(0, 18) + "…" : t, cw / 2, 22); } ctx.fillStyle = "#073"; ctx.font = "9px monospace"; ctx.textAlign = "left"; ctx.fillText(`${trackIdx + 1}/${tracks.length}`, 6, 46); ctx.fillStyle = p ? "#0f4" : "#073"; ctx.font = "11px monospace"; ctx.textAlign = "center"; ctx.fillText(p ? "▶ PLAYING" : "❚❚ PAUSED", cw / 2, 46); if (p) { const bt = Date.now() * 0.004; for (let i = 0; i < 8; i++) { ctx.fillStyle = glow; const bh = 4 + (Math.sin(bt * (1.2 + i * 0.4) + i * 1.8) * 0.5 + 0.5) * 12 + Math.sin(bt * (0.7 + i * 0.3) + i * 2.5) * 2; ctx.fillRect(cw - 18 - i * 6, ch - 4 - bh, 4, bh); } } }
      if (s.sTex) s.sTex.needsUpdate = true; fid = requestAnimationFrame(draw);
    }; draw(); return () => cancelAnimationFrame(fid);
  }, [tracks, trackIdx, isPlaying]);

  const curName = tracks[trackIdx]?.name || "";
  const lobbyBtnBase = { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, color: "#fff", cursor: "pointer", transition: "all 0.2s" };

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#000", position: "relative", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
        @keyframes lobbyGlow { 0%,100%{text-shadow:0 0 20px rgba(74,222,128,0.3),0 0 60px rgba(74,222,128,0.1)} 50%{text-shadow:0 0 40px rgba(74,222,128,0.6),0 0 100px rgba(74,222,128,0.2)} }
        @keyframes lobbyPulse { 0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(74,222,128,0.4)} 50%{transform:scale(1.03);box-shadow:0 0 30px 4px rgba(74,222,128,0.15)} }
        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes floatVinyl { 0%,100%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
        @keyframes gradientShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes scoreFlash { 0%{transform:scale(1)} 50%{transform:scale(1.15)} 100%{transform:scale(1)} }
        @keyframes glowPulse { 0%,100%{box-shadow:0 0 8px rgba(74,222,128,0.2)} 50%{box-shadow:0 0 20px rgba(74,222,128,0.4),0 0 40px rgba(74,222,128,0.1)} }
        @keyframes hudSlideIn { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
        * { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
      `}</style>
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />

      {/* ===== LOBBY SCREEN ===== */}
      {inLobby && <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "radial-gradient(ellipse at 50% 40%, rgba(10,20,30,0.85) 0%, rgba(0,0,0,0.95) 100%)", backdropFilter: "blur(6px)", zIndex: 10 }}>
        {/* Animated background gradient bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #4ade80, #60a5fa, #a78bfa, #f472b6, #4ade80)", backgroundSize: "200% 100%", animation: "gradientShift 4s ease infinite" }} />

        {/* Title */}
        <div style={{ animation: "fadeSlideUp 0.8s ease both", textAlign: "center", marginBottom: 8 }}>
          <div style={{ fontSize: 14, letterSpacing: 6, color: "rgba(255,255,255,0.3)", fontWeight: 500, marginBottom: 8 }}>WELCOME TO</div>
          <div style={{ fontSize: "clamp(36px, 7vw, 64px)", fontWeight: 900, letterSpacing: 3, color: "#fff", animation: "lobbyGlow 3s ease-in-out infinite", lineHeight: 1.1 }}>AERA CAR TESTER</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", marginTop: 8, letterSpacing: 2 }}>SPATIAL AUDIO DRIVING EXPERIENCE</div>
        </div>

        {/* Description cards */}
        <div style={{ display: "flex", gap: 16, marginTop: 28, flexWrap: "wrap", justifyContent: "center", maxWidth: 600, padding: "0 16px" }}>
          {[
            { icon: "💿", text: "Collect records, avoid Labels", color: "#ffdd00", delay: "0.3s" },
            { icon: "📝", text: "Avoid getting Signed", color: "#ff6b6b", delay: "0.5s" },
            { icon: "🔊", text: "Test your track with spatial audio", color: "#4ade80", delay: "0.7s" },
          ].map(({ icon, text, color, delay }) => (
            <div key={text} style={{ animation: `fadeSlideUp 0.7s ease ${delay} both`, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "12px 18px", display: "flex", alignItems: "center", gap: 10, minWidth: 170 }}>
              <span style={{ fontSize: 22 }}>{icon}</span>
              <span style={{ fontSize: 13, color, fontWeight: 600 }}>{text}</span>
            </div>
          ))}
        </div>

        {/* Track upload area */}
        <div style={{ animation: "fadeSlideUp 0.7s ease 0.9s both", marginTop: 36, textAlign: "center" }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: "rgba(255,255,255,0.3)", marginBottom: 12 }}>LOAD YOUR TRACKS (UP TO 3)</div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {[0, 1, 2].map(i => {
              const t = tracks[i];
              return (
                <div key={i} style={{ width: 160, height: 80, borderRadius: 14, border: t ? "1px solid rgba(74,222,128,0.3)" : "2px dashed rgba(255,255,255,0.12)", background: t ? "rgba(74,222,128,0.06)" : "rgba(255,255,255,0.02)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", transition: "all 0.3s" }}>
                  {t ? (<>
                    <div style={{ fontSize: 11, color: "#4ade80", fontWeight: 700, maxWidth: 130, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", textAlign: "center" }}>{t.name}</div>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>Track {i + 1}</div>
                    <button onClick={() => removeTrack(i)} style={{ position: "absolute", top: 4, right: 6, background: "none", border: "none", color: "rgba(255,255,255,0.3)", fontSize: 14, cursor: "pointer", padding: 0, lineHeight: 1 }}>x</button>
                  </>) : (
                    <label style={{ cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, width: "100%", height: "100%", justifyContent: "center" }}>
                      <div style={{ fontSize: 22, opacity: 0.3 }}>+</div>
                      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.25)" }}>Add Track</div>
                      <input type="file" accept="audio/*" onChange={e => { if (e.target.files[0]) addTrack(e.target.files[0]); e.target.value = ""; }} style={{ display: "none" }} />
                    </label>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* START button */}
        <button onClick={startGame} style={{ animation: "fadeSlideUp 0.7s ease 1.1s both, lobbyPulse 2.5s ease-in-out 2s infinite", marginTop: 36, background: "linear-gradient(135deg, rgba(74,222,128,0.15), rgba(96,165,250,0.15))", border: "1px solid rgba(74,222,128,0.3)", borderRadius: 16, padding: "16px 56px", color: "#4ade80", fontSize: 20, fontWeight: 800, cursor: "pointer", letterSpacing: 4 }}
          onMouseEnter={e => { e.target.style.background = "linear-gradient(135deg, rgba(74,222,128,0.3), rgba(96,165,250,0.3))"; e.target.style.borderColor = "rgba(74,222,128,0.6)"; }}
          onMouseLeave={e => { e.target.style.background = "linear-gradient(135deg, rgba(74,222,128,0.15), rgba(96,165,250,0.15))"; e.target.style.borderColor = "rgba(74,222,128,0.3)"; }}
        >START</button>
        <div style={{ animation: "fadeSlideUp 0.7s ease 1.3s both", fontSize: 10, color: "rgba(255,255,255,0.2)", marginTop: 12 }}>Tracks are optional — you can drive without music</div>
      </div>}

      {/* ===== IN-GAME HUD ===== */}
      {!inLobby && <>
        {/* Flash overlay with radial gradient for more cinematic feel */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: flash === "record" ? "radial-gradient(circle at 50% 50%, rgba(255,215,0,0.35), rgba(255,215,0,0) 70%)" : flash === "boom" ? "radial-gradient(circle at 50% 60%, rgba(255,0,0,0.5), rgba(255,0,0,0) 70%)" : "transparent", opacity: flash ? 1 : 0, transition: "opacity 0.3s ease-out" }} />

        {/* Score display — top center with glass panel */}
        <div style={{ position: "absolute", top: 16, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 12, alignItems: "center", animation: "hudSlideIn 0.5s ease both" }}>
          <div style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(20px) saturate(1.4)", borderRadius: 16, padding: "10px 22px", color: "#fff", border: "1px solid rgba(255,255,255,0.08)", textAlign: "center", boxShadow: "0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 9, opacity: 0.4, letterSpacing: 3, fontWeight: 600 }}>SCORE</div>
            <div style={{ fontSize: 30, fontWeight: 800, fontFamily: "'Inter', monospace", color: "#ffdd00", textShadow: "0 0 20px rgba(255,221,0,0.3)", letterSpacing: 1, lineHeight: 1.1 }}>{score}</div>
          </div>
          {highScore > 0 && <div style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(20px) saturate(1.4)", borderRadius: 16, padding: "10px 16px", color: "#fff", border: "1px solid rgba(255,215,0,0.12)", textAlign: "center", boxShadow: "0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 9, opacity: 0.4, letterSpacing: 3, fontWeight: 600 }}>BEST</div>
            <div style={{ fontSize: 24, fontWeight: 800, fontFamily: "'Inter', monospace", color: "#ff8800", textShadow: "0 0 15px rgba(255,136,0,0.3)", lineHeight: 1.1 }}>{highScore}</div>
          </div>}
        </div>

        {/* Death screen with enhanced visuals */}
        {!alive && <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "radial-gradient(ellipse at 50% 45%, rgba(40,0,0,0.7), rgba(0,0,0,0.8))", backdropFilter: "blur(6px)", animation: "fadeSlideUp 0.4s ease both" }}>
          <div style={{ fontSize: "clamp(48px, 8vw, 72px)", fontWeight: 900, color: "#ff3333", textShadow: "0 0 40px rgba(255,0,0,0.6), 0 0 80px rgba(255,0,0,0.2)", letterSpacing: 6 }}>SIGNED</div>
          <div style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", marginTop: 8, fontWeight: 500, letterSpacing: 1 }}>The label got you...</div>
          <div style={{ fontSize: 22, color: "#fff", marginTop: 16, fontWeight: 600 }}>Score: <span style={{ color: "#ffdd00", fontWeight: 800, textShadow: "0 0 15px rgba(255,221,0,0.4)" }}>{score}</span></div>
          {score >= highScore && score > 0 && <div style={{ fontSize: 16, color: "#ff8800", marginTop: 8, fontWeight: 700, textShadow: "0 0 20px rgba(255,136,0,0.4)", animation: "glowPulse 1.5s ease infinite" }}>NEW HIGH SCORE!</div>}
          <button onClick={restart} style={{ marginTop: 28, background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "14px 40px", color: "#fff", fontSize: 17, fontWeight: 700, cursor: "pointer", letterSpacing: 3, transition: "all 0.25s ease", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }} onMouseEnter={e => { e.target.style.background = "rgba(255,255,255,0.18)"; e.target.style.transform = "scale(1.05)"; e.target.style.boxShadow = "0 6px 30px rgba(0,0,0,0.4)"; }} onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.08)"; e.target.style.transform = "scale(1)"; e.target.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)"; }}>RESTART</button>
        </div>}

        {/* Bottom-left: playlist controls with frosted glass */}
        {tracks.length > 0 && <div style={{ position: "absolute", bottom: 16, left: 16, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(20px) saturate(1.4)", borderRadius: 14, padding: "10px 16px", color: "#fff", display: "flex", alignItems: "center", gap: 10, maxWidth: 300, border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)", animation: "hudSlideIn 0.5s ease 0.2s both" }}>
          {tracks.length > 1 && <button onClick={prevTrack} style={{ background: "none", border: "none", color: "#fff", fontSize: 14, cursor: "pointer", padding: "2px 4px", opacity: 0.5, transition: "opacity 0.2s" }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.5}>⏮</button>}
          <button onClick={togglePlay} style={{ background: "rgba(255,255,255,0.08)", border: "none", color: "#fff", fontSize: 16, cursor: "pointer", padding: "4px 8px", borderRadius: 8, transition: "background 0.2s" }} onMouseEnter={e => e.target.style.background = "rgba(255,255,255,0.18)"} onMouseLeave={e => e.target.style.background = "rgba(255,255,255,0.08)"}>{isPlaying ? "⏸" : "▶"}</button>
          {tracks.length > 1 && <button onClick={nextTrack} style={{ background: "none", border: "none", color: "#fff", fontSize: 14, cursor: "pointer", padding: "2px 4px", opacity: 0.5, transition: "opacity 0.2s" }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.5}>⏭</button>}
          <div style={{ flex: 1, minWidth: 0, marginLeft: 4 }}>
            <div style={{ fontSize: 11, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontWeight: 700, letterSpacing: 0.3 }}>{curName}</div>
            <div style={{ fontSize: 9, opacity: 0.3, fontWeight: 500 }}>Track {trackIdx + 1} of {tracks.length}</div>
          </div>
        </div>}

        {/* Top-right: speed + settings with enhanced glassmorphism */}
        <div style={{ position: "absolute", top: 16, right: 16, display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end", animation: "hudSlideIn 0.5s ease 0.1s both" }}>
          <div style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(20px) saturate(1.4)", borderRadius: 16, padding: "12px 20px", color: "#fff", textAlign: "center", border: "1px solid rgba(255,255,255,0.08)", minWidth: 95, boxShadow: "0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 36, fontWeight: 800, fontFamily: "'Inter', monospace", color: currentSpeed > 80 ? "#ff6b6b" : "#4ade80", textShadow: currentSpeed > 80 ? "0 0 20px rgba(255,107,107,0.4)" : "0 0 15px rgba(74,222,128,0.3)", transition: "color 0.3s ease, text-shadow 0.3s ease", letterSpacing: -1, lineHeight: 1 }}>{currentSpeed}</div>
            <div style={{ fontSize: 9, opacity: 0.35, letterSpacing: 3, fontWeight: 600, marginTop: 2 }}>MPH</div>
          </div>
          <div style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(20px) saturate(1.4)", borderRadius: 12, padding: "5px 6px", color: "#fff", display: "flex", gap: 2, border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 2px 15px rgba(0,0,0,0.2)" }}>
            {[{ k: "day", i: "☀️" }, { k: "sunset", i: "🌅" }, { k: "night", i: "🌙" }, { k: "retro", i: "🌆" }].map(({ k, i }) => (<button key={k} onClick={() => setTimeOfDay(k)} style={{ background: timeOfDay === k ? "rgba(255,255,255,0.15)" : "transparent", border: "none", borderRadius: 8, padding: "5px 10px", color: "#fff", fontSize: 15, cursor: "pointer", transition: "all 0.2s ease" }} onMouseEnter={e => { if (timeOfDay !== k) e.target.style.background = "rgba(255,255,255,0.08)"; }} onMouseLeave={e => { if (timeOfDay !== k) e.target.style.background = "transparent"; }}>{i}</button>))}
          </div>
          <div style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(20px) saturate(1.4)", borderRadius: 12, padding: "5px 6px", color: "#fff", display: "flex", gap: 2, border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 2px 15px rgba(0,0,0,0.2)" }}>
            {[{ k: "forest", i: "🌲", l: "Forest" }, { k: "sakura", i: "🌸", l: "Sakura" }, { k: "city", i: "🏙️", l: "City" }].map(({ k, i, l }) => (<button key={k} onClick={() => setSceneryTheme(k)} style={{ background: sceneryTheme === k ? "rgba(255,255,255,0.15)" : "transparent", border: "none", borderRadius: 8, padding: "5px 10px", color: "#fff", fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 4, fontWeight: 600, transition: "all 0.2s ease" }} onMouseEnter={e => { if (sceneryTheme !== k) e.target.style.background = "rgba(255,255,255,0.08)"; }} onMouseLeave={e => { if (sceneryTheme !== k) e.target.style.background = "transparent"; }}><span style={{ fontSize: 15 }}>{i}</span>{l}</button>))}
          </div>
        </div>

        {/* Bottom-right: controls help with polished style */}
        <div style={{ position: "absolute", bottom: 16, right: 16, background: "rgba(0,0,0,0.45)", backdropFilter: "blur(16px) saturate(1.3)", borderRadius: 12, padding: "8px 14px", color: "#fff", border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 2px 15px rgba(0,0,0,0.2)", animation: "hudSlideIn 0.5s ease 0.3s both" }}>
          <div style={{ fontSize: 11, opacity: 0.5, lineHeight: 1.6, fontWeight: 500, letterSpacing: 0.3 }}>
            <span style={{ color: "#4ade80", fontWeight: 700 }}>SHIFT</span> go · <span style={{ color: "#fbbf24", fontWeight: 700 }}>SPACE</span> brake · <span style={{ color: "#60a5fa", fontWeight: 700 }}>A/D</span> steer
          </div>
        </div>
      </>}
    </div>
  );
}