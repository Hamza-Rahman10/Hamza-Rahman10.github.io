document.addEventListener("DOMContentLoaded", function () {
    // Shows the initial section
    navigateTo('About me');
});
  
function navigateTo(sectionId) {
    // Hides all sections
    document.querySelectorAll('section').forEach(section => {
      section.style.display = 'none';
    });
  
    // Shows the selected section
    document.getElementById(sectionId).style.display = 'block';
  
    // Update active link indicator
    updateActiveLink(sectionId);
}
  
function updateActiveLink(sectionId) {
    // Remove 'active' class from all links
    document.querySelectorAll('nav a').forEach(link => {
      link.classList.remove('active');
    });
  
    // Add 'active' class to the clicked link
    const activeLink = document.querySelector(`nav a[href="#"][onclick*="${sectionId}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
}