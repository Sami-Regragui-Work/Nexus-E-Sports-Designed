function copyRightYear() {
    const timeTag = document.getElementsByTagName('time')[0];
    const currentYear = new Date().getFullYear();
    timeTag.textContent = currentYear;
    timeTag.setAttribute('datetime', currentYear);
}

copyRightYear();