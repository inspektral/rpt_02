
window.global = window;
import Hydra from 'hydra-synth';

const hydra = new Hydra({
  canvas: document.getElementById('hydra-canvas'),
  detectAudio: false,
  width: window.innerWidth,
  height: window.innerHeight
});

window.addEventListener('resize', () => {
  hydra.setResolution(window.innerWidth, window.innerHeight);
});



hydra.setResolution(window.innerWidth, window.innerHeight);
noise(4, 0.3).modulateScale(o0).modulateScrollY(o0).mult(osc(5).kaleid(20)).out(o0)
