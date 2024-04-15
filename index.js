// Your code here
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      moveDodgerLeft();
    } else if (e.key === 'ArrowRight') { // New condition for right arrow key
      moveDodgerRight();
    }
  });
  
  function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left);
    
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left);
    const rightEdge = window.innerWidth - 40; // Subtract dodger width
    
    if (left < rightEdge) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  