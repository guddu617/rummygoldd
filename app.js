// app.js
document.addEventListener('DOMContentLoaded', function() {
  // Enhanced download button functionality
  const downloadBtn = document.querySelector('.cta-button');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Create a modal instead of simple alert
      const modal = document.createElement('div');
      modal.className = 'download-modal';
      modal.innerHTML = `
        <div class="modal-content">
          <h3>Download Options</h3>
          <p>Choose your preferred platform:</p>
          <div class="platform-options">
            <button class="platform-btn android-btn">Android APK</button>
            <button class="platform-btn ios-btn">iOS Coming Soon</button>
          </div>
          <button class="close-modal">&times;</button>
        </div>
      `;
      
      document.body.appendChild(modal);
      
      // Add event listeners for modal buttons
      document.querySelector('.android-btn').addEventListener('click', function() {
        // Simulate download progress
        const progressBar = document.createElement('div');
        progressBar.className = 'download-progress';
        progressBar.innerHTML = '<div class="progress-bar"></div>';
        document.querySelector('.modal-content').appendChild(progressBar);
        
        // Animate progress
        const bar = document.querySelector('.progress-bar');
        let width = 0;
        const interval = setInterval(() => {
          if (width >= 100) {
            clearInterval(interval);
            modal.innerHTML = `
              <div class="modal-content">
                <h3>Download Complete!</h3>
                <p>Your download should start automatically. If not, <a href="#" class="manual-download">click here</a>.</p>
                <button class="close-modal">&times;</button>
              </div>
            `;
            document.querySelector('.close-modal').addEventListener('click', () => {
              document.body.removeChild(modal);
            });
          } else {
            width++;
            bar.style.width = width + '%';
          }
        }, 20);
      });
      
      document.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
      });
    });
  }
  
  // Add animation to cards when they come into view
  const infoCards = document.querySelectorAll('.info-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  infoCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
  
  // Add hover effect to footer links
  const footerLinks = document.querySelectorAll('.footer-nav a');
  footerLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.color = '#00b8d4';
    });
    link.addEventListener('mouseleave', function() {
      this.style.color = '#bdbdbd';
    });
  });
});