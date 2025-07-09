function toggleNode() {
    const html = document.documentElement;
    const aaaaa = html.classList.toggle('light');

    const img = document.querySelector('#profile img');
    if (aaaaa) {
        img.src = 'assets/avatar-light.png';
    } else {
        img.src = 'assets/avatar.png';
    }
}