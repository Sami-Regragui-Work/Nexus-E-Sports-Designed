function copyRightYear() {
    const timeTag = document.getElementsByTagName('time')[0];
    const currentYear = new Date().getFullYear();
    timeTag.textContent = currentYear;
    timeTag.setAttribute('datetime', currentYear);
}

copyRightYear();

function updateSelectedMenuItem() {
    const menuItemsFullPaths = document.getElementsByTagName('nav')[0].getElementsByTagName('a');
    // const menuItems = Array.from(menuItemsFullPaths).map(item => item.getAttribute('href'));
    const selected = window.location.pathname.split('/').pop();

    // console.log('Menu items:', menuItems);
    // console.log('Selected path:', selected);

    if (selected === '' || selected === '/') {
        // console.log('[0]' + menuItems[0]);
        menuItemsFullPaths[0].classList.add('selected');
        return;
    }

    for (let item of menuItemsFullPaths) {
        if (item.getAttribute('href') === selected) {
            console.log('Selected menu item:', item.getAttribute('href'));
            item.classList.add('selected');
        }
        else {
            item.classList.remove('selected');
        }
    }

    // console.log('END');
}

updateSelectedMenuItem();
