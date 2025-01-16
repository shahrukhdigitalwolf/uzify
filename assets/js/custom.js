const openNavbar = document.getElementById("openNav");
const closeNavbar = document.getElementById("closeNav");
const navbar = document.getElementById("navbar");

openNavbar.addEventListener("click",()=>{
    navbar.classList.remove("translate-x-[100%]")
    navbar.classList.add("translate-x-[0%]")
});
closeNavbar.addEventListener("click",()=>{
    navbar.classList.add("translate-x-[100%]")
    navbar.classList.remove("translate-x-[0%]")
});


document.querySelectorAll('.dropdown-button').forEach((dropdownBtn) => {
    dropdownBtn.addEventListener('click', () => {
        const dropdownMenu = dropdownBtn.nextElementSibling;
        const icon = document.querySelector(".dropdown-icon");
        // Check if the dropdown is currently expanded
        if (dropdownMenu.style.maxHeight) {
            dropdownMenu.style.maxHeight = null; // Collapse the menu
            icon.style.rotate = '0deg'
        } else {
            dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 'px'; // Expand the menu to the full content height
            icon.style.rotate = '180deg'
        }
    });
});



function animateCounter(element) {
    const target = parseInt(element.textContent, 10);
    const duration = 4000;
    const startTime = performance.now();

    function animate(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentValue = Math.ceil(progress * target);

      element.textContent = currentValue;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.count');
        counters.forEach(animateCounter);
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  }, { threshold: 0.5 }); // Adjust threshold to control when the animation triggers

  // Select all sections (or elements) you want to observe
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => observer.observe(section)); 