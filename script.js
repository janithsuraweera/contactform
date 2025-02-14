document.getElementById('profile-img').addEventListener('mouseover', function() {
    this.style.transition = 'transform 1s ease-in-out';
    this.style.transform = 'translateX(180%) rotate(180deg)';
});
document.getElementById('profile-img').addEventListener('mouseleave', function() {
    this.style.transition = 'transform 1s ease-in-out';
    this.style.transform = 'translateX(0) rotate(0deg)';
});