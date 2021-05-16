'use strict';
{
  const targets = document.querySelectorAll('#scroll');
    
  function callback(entries, obs) {
    console.log(entries);     

    entries.forEach(entry => {
      if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add('appear');
        obs.unobserve(entry.target);
      });
  }

  const options = {
    threshold: 0.5,
    rootMargin: '0px 0px -80px',
  };

  const observer = new IntersectionObserver(callback, options);
  
  targets.forEach(target => {
    observer.observe(target);
  });
  
}