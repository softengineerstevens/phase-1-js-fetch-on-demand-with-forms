// Add event listener to hearts
document.querySelectorAll('.heart').forEach(heart => {
    heart.addEventListener('click', () => {
      // Check if the heart is empty or full
      if (heart.classList.contains('activated-heart')) {
        // Handle click on a full heart (turn it back to empty)
        heart.classList.remove('activated-heart');
      } else {
        // Handle click on an empty heart (simulate server call)
        mimicServerCall()
          .then(() => {
            // On success, change heart to full
            heart.classList.add('activated-heart');
          })
          .catch(() => {
            // On failure, show error modal
            const errorModal = document.querySelector('#error-modal');
            errorModal.classList.remove('hidden');
            // Hide error modal after 3 seconds
            setTimeout(() => {
              errorModal.classList.add('hidden');
            }, 3000);
          });
      }
    });
  });
  
  // Mimic server call function (provided)
  function mimicServerCall() {
    // Simulate server call with random success/failure
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolve("success") : reject("fail");
      }, 1000);
    });
  }
  