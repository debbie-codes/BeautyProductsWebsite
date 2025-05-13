document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.new-p-heading li');
    const productCards = document.querySelectorAll('.product-card');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        const filter = this.getAttribute('data-filter');
  
        // Toggle active class
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
  
        // Filter cards
        productCards.forEach(card => {
          if (filter === 'all' || card.classList.contains(filter)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });