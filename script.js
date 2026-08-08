// ---------- Matrix digital rain background (light, low-opacity) ----------
(function initMatrixRain(){
  const canvas = document.getElementById('matrix-bg');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const chars = 'アイウエオカキクケコサシスセソタチツテト0123456789ABCDEFWONGKEBUMEN';
  let cols, drops, fontSize = 15;

  function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cols = Math.floor(canvas.width / fontSize);
    drops = new Array(cols).fill(1);
  }
  window.addEventListener('resize', resize);
  resize();

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduceMotion) return;

  function draw(){
    ctx.fillStyle = 'rgba(255,255,255,0.12)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#087f3f';
    ctx.font = fontSize + 'px monospace';
    for(let i=0; i<drops.length; i++){
      const text = chars[Math.floor(Math.random()*chars.length)];
      ctx.fillText(text, i*fontSize, drops[i]*fontSize);
      if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  setInterval(draw, 55);
})();

// ---------- subtle glitch effect on hero name (hover) ----------
(function initGlitch(){
  const el = document.querySelector('.glitch');
  if(!el) return;
  const original = el.textContent;
  const glitchChars = '!<>-_\\/[]{}—=+*^?#';

  el.addEventListener('mouseenter', () => {
    let iterations = 0;
    const maxIterations = 8;
    const interval = setInterval(() => {
      el.textContent = original
        .split('')
        .map((ch, idx) => {
          if(ch === ' ') return ' ';
          if(idx < iterations) return original[idx];
          return glitchChars[Math.floor(Math.random()*glitchChars.length)];
        })
        .join('');
      iterations += 1;
      if(iterations > original.length){
        clearInterval(interval);
        el.textContent = original;
      }
    }, 35);
  });
})();
