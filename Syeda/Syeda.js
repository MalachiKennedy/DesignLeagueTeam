//Loader
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.setAttribute ('style', 'opacity: 0;');
  }, 500);
  setTimeout(() => {
    loader.parentNode.removeChild(loader);
    document.body.style.overflow = 'initial';
  }, 1000);
});

const coinSfx = new Sfx('sfx/Mario Coin.wav'); 
const pipeSfx = new Sfx('sfx/Mario Pipe.wav');
const powerUpSfx = new Sfx('sfx/Mario Powerup.wav')

function Sfx(src) {
  this.sound = doucment.createElement('audio');
  this.sound.src = src;
  this.sound.setAttribute('preload', 'auto');
  this.sound.setAttribute('controls', 'none');
  this.sound.style.display = 'none';
  document-body.appendChild((this.sound);
  this.play = function() {
    this.sound.play();
  };
}

function Ninjas(name, age, height, color) {
  this.name = name;
  this.age = age; 
  this.height = height; 
  this.color = color;

  this.coin = () => {
    //audio
    coinSfx.play();
  }
}





























































