document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const moreInfo = this.nextElementSibling;
            if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
                moreInfo.style.display = 'block';
                this.textContent = 'Show Less';
            } else {
                moreInfo.style.display = 'none';
                this.textContent = 'Show More';
            }
        });
    });
});
