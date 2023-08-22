document.addEventListener('DOMContentLoaded', function () {
    const menuContainer = document.getElementById('menuContainer');
    const menuHTML = generateMenuIndex();
    menuContainer.innerHTML = menuHTML;

    const FooterContainer = document.getElementById('footerContainer');
    const FooterHTML = generateFooter();
    FooterContainer.innerHTML = FooterHTML;


  });