document.querySelector('.backg').addEventListener('mousemove', function(e) {
    this.style.setProperty('--x', e.clientX + 'px');
    this.style.setProperty('--y', e.clientY + 'px');
  });