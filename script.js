document.getElementById('burger-menu').addEventListener('click', function() {
    if(this.classList.contains('active')) {
        // closes menu
        this.classList.remove('active');
        document.getElementById('resp-menu').classList.remove('active')
    } else {
        // opens menu
        this.classList.add('active');
        document.getElementById('resp-menu').classList.add('active')
    }
});