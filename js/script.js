const logo = document.getElementById('logo');
const body = document.body;

function changeBackgroundColor() {
  // Generate random RGB values for the background color
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`;
  
  // Change the background color
  body.style.backgroundColor = randomColor;
}

function checkBoundary() {
  const rect = logo.getBoundingClientRect();

  console.log(rect.bottom)

  if (
    rect.left <= 0 ||
    rect.right >= window.innerWidth ||
    rect.top <= 0 ||
    rect.bottom >= window.innerHeight ||

    rect.right <= 0 ||
    rect.left >= window.innerWidth ||
    rect.bottom >= 950 ||
    rect.bottom >= window.innerHeight
  ) {
    changeBackgroundColor();
  }
}

// Attach the checkBoundary function to requestAnimationFrame for continuous checking
function animate() {
  checkBoundary();
  requestAnimationFrame(animate);
}

// Start the animation loop
animate();
