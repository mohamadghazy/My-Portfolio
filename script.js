function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function showText(logo) {
  const infoBox = document.getElementById('infoBox');
  const infoText = document.getElementById('infoText');

  if (logo === 'google') {
    infoText.textContent = "I am Certified Data Analytics Professional from Google";
    infoBox.style.animation = 'none';
  } else if (logo === 'postgrad') {
    infoText.textContent = "Currently pursuing my M.Sc in Information Systems from Ain-Shams University Faculty of Computer Science";
    infoBox.style.animation = 'none';
  } else if (logo === 'eva-pharma') {
    infoText.textContent = "I have 4+ years of experience in Data Analytics at Eva Pharma, one of the fastest-growing pharmaceutical company in the region.";
    infoBox.style.animation = 'none';
  } else if (logo === 'must') {
    infoText.textContent = "I got my B.Sc. in Biotechnology from Misr University for Science and Technology (MUST) with GPA 3.89 (Excellent with Honors)";
    infoBox.style.animation = 'none';
  }
}


const projectImg = document.getElementById('project-img');
const overlay = document.getElementById('overlay');

// When the mouse enters the image area, show the popup effect and dim the background
projectImg.addEventListener('mouseenter', function() {
    const gifSource = projectImg.getAttribute('data-gif');  // Get GIF URL from data attribute
    projectImg.src = gifSource;  // Set the src to the GIF

    // Add 'popup' class to enlarge and center the image
    projectImg.classList.add('popup');

    // Show the overlay (dimmed background)
    overlay.style.opacity = '1';
    overlay.style.visibility = 'visible';
});

// When the mouse leaves the image area, remove the popup effect and restore the image
projectImg.addEventListener('mouseleave', function() {
    const staticImageSource = './assets/project-1.png';  // Static image fallback
    projectImg.src = staticImageSource;  // Reset the image to static

    // Remove 'popup' class to return the image to normal
    projectImg.classList.remove('popup');

    // Hide the overlay
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
});