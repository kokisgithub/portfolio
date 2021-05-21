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
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -30px',
  };

  const observer = new IntersectionObserver(callback, options);
  
  targets.forEach(target => {
    observer.observe(target);
  });
  
}