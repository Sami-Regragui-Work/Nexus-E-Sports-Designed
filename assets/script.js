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
            // console.log('Selected menu item:', item.getAttribute('href'));
            item.classList.add('selected');
        }
        else {
            item.classList.remove('selected');
        }
    }

    // console.log('END');
}

updateSelectedMenuItem();

function messageSent() {
    if (!document.getElementById('contactUs')) {
        return;
    }
    const form = document.getElementById('contactUs');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const fname = document.getElementsByName('fname')[0].value;
        const lname = document.getElementsByName('lname')[0].value;
        const message = document.getElementsByName('message')[0].value;
        alert("Thank you " + fname + " " + lname + "! Your message '" + message + "' has been sent.");
        form.reset();
    });
}

messageSent();

function signUp() {
    if (!document.getElementById('contactUs--signup')) {
        return;
    }
    const form = document.getElementById('contactUs--signup');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const fname = document.getElementsByName('fname')[0].value;
        const lname = document.getElementsByName('lname')[0].value;
        const password = document.getElementsByName('password')[0].value;
        const confirmPassword = document.getElementsByName('confirm-password')[0].value;
        if (password !== confirmPassword) {
            alert("Error: Passwords do not match.");
            return;
        }
        alert(fname + " " + lname + " has successfully signed up.");
        form.reset();
    });
}

signUp();

function logIn() {
    if (!document.getElementById('contactUs--login')) {
        return;
    }
    const form = document.getElementById('contactUs--login');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementsByName('email')[0].value;
        alert(email + " has successfully logged in.");
        form.reset();
    });
}

logIn();
