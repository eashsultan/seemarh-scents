// Web Audio API Ambient Sound Generator for Seemarh Scents
// Creates a warm, luxurious, serene harmonic ambient soundscape

class AmbientSoundEngine {
  constructor() {
    this.ctx = null;
    this.oscillators = [];
    this.gainNode = null;
    this.isPlaying = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  play() {
    this.init();
    if (this.isPlaying) return;

    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.gainNode.gain.exponentialRampToValueAtTime(0.07, this.ctx.currentTime + 3);

    // Warm low-pass filter
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(380, this.ctx.currentTime);

    // Minor/Lydian ethereal luxury chords (C3, G3, D4, E4)
    const baseFreqs = [130.81, 196.00, 293.66, 329.63];

    this.oscillators = baseFreqs.map((freq) => {
      const osc = this.ctx.createOscillator();
      const pan = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Subtle LFO vibrato
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.12 + Math.random() * 0.1, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(1.5, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start();

      if (pan) {
        pan.pan.setValueAtTime((Math.random() - 0.5) * 0.6, this.ctx.currentTime);
        osc.connect(pan);
        pan.connect(filter);
      } else {
        osc.connect(filter);
      }

      osc.start();
      return osc;
    });

    filter.connect(this.gainNode);
    this.gainNode.connect(this.ctx.destination);
    this.isPlaying = true;
  }

  stop() {
    if (!this.isPlaying || !this.gainNode) return;
    const currTime = this.ctx.currentTime;
    this.gainNode.gain.linearRampToValueAtTime(0.001, currTime + 1.5);
    setTimeout(() => {
      this.oscillators.forEach(osc => {
        try { osc.stop(); } catch(e) {}
      });
      this.oscillators = [];
      this.isPlaying = false;
    }, 1600);
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }
}

export const soundEngine = new AmbientSoundEngine();
