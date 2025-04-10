function showModal() {
    document.getElementById('modal').classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-touch');
    const openBtn = document.querySelector('.touch__button');
    const closeBtn = document.getElementById('modal-touch-close');
    
    openBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});