
window.global = window;
import Hydra from 'hydra-synth';

const hydra = new Hydra({
  canvas: document.getElementById('hydra-canvas'),
  detectAudio: false
});

osc().out()
