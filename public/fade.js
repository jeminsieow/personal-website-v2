const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-show');
      }
      // else {
      //   entry.target.classList.remove('fade-show');
      // }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.fade-hidden');
  hiddenElements.forEach((el) => observer.observe(el));
