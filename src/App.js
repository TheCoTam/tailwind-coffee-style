const topMenu = document.getElementById('top-menu');
const toggleTopMenuItems = document.getElementById('toggle-top-menu-items');

document.addEventListener('click', (e) => {
    if (toggleTopMenuItems.contains(e.target)) {
        // clicked toggleTopMenuItems
        topMenu.classList.toggle('hidden');
        topMenu.classList.toggle('top-menu-expanded');
    } else {
        // clicked outside toggleTopMenuItems
        // if (topMenu.classList.contains('top-menu-expanded')) {
            topMenu.classList.remove('top-menu-expanded');
            topMenu.classList.add('hidden');
        // }
    }
});
