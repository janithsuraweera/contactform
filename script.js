document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.15)';
        link.style.transition = 'transform 0.3s ease';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
});
