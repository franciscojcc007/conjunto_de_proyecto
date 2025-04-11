const cube = document.getElementById('cube');
const body = document.body; // Referencia al fondo de la página

cube.addEventListener('click', () => {
  const randomFace = Math.floor(Math.random() * 6) + 1;

  const rotations = {
    1: 'rotateX(0deg) rotateY(0deg)',
    2: 'rotateX(90deg) rotateY(0deg)',
    3: 'rotateX(0deg) rotateY(-90deg)',
    4: 'rotateX(0deg) rotateY(90deg)',
    5: 'rotateX(-90deg) rotateY(0deg)',
    6: 'rotateX(0deg) rotateY(180deg)',
  };

  let currentRotationX = Math.floor(Math.random() * 360);
  let currentRotationY = Math.floor(Math.random() * 360);

  body.classList.add("animate-background");

  let rotationInterval = setInterval(() => {
    currentRotationX += Math.floor(Math.random() * 20) + 10; 
    currentRotationY += Math.floor(Math.random() * 20) + 10; 

    cube.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;
  }, 100);

  setTimeout(() => {
    clearInterval(rotationInterval);
    cube.style.transition = 'transform 1.5s cubic-bezier(0.25, 1, 0.5, 1)';
    cube.style.transform = rotations[randomFace];

  
    setTimeout(() => {
      body.classList.remove("animate-background");
    }, 500);
  }, 1000);
});
