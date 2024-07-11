document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.accordion-link');
  
    links.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const content = document.querySelector(this.getAttribute('href'));
  
        links.forEach(lnk => {
          if (lnk !== link) {
            const otherContent = document.querySelector(lnk.getAttribute('href'));
            otherContent.style.display = 'none';
          }
        });
  
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    });
  });