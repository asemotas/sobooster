function contentOpen() {
let overlay = document.querySelector('.pl__content');
overlay.style.display = 'flex';
overlay.classList.add('pl__animated', 'pl__bounceInDown', 'pl__delay-0s')
}
contentOpen()





  let closeSb = document.querySelector('.pl__closelink');
  let overlay = document.querySelector('.pl__content');
  closeSb.onclick = function() {
      overlay.style.display = 'none';
    };
