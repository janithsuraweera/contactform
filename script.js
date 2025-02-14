document.getElementById('profile-img').addEventListener('mouseover', function() {
    this.style.transition = 'transform 1s ease-in-out';
    this.style.transform = 'translateX(150%) rotate(360deg)';
});
document.getElementById('profile-img').addEventListener('mouseleave', function() {
    this.style.transition = 'transform 1s ease-in-out';
    this.style.transform = 'translateX(0) rotate(0deg)';
});