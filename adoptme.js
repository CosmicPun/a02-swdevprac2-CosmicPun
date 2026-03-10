document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('button[type="submit"]');

    submitBtn.addEventListener('click', (event) => {
        const firstName = document.getElementById('firstName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const petCountStr = document.getElementById('petCount').value.trim();
        const agreement = document.getElementById('agreement').checked;

        if (!firstName) {
            alert('Please enter your name');
            event.preventDefault();
            return;
        }

        if (!phone) {
            alert('Please enter your telephone number');
            event.preventDefault();
            return;
        }

        if (!petCountStr) {
            alert('Please enter the number of pets');
            event.preventDefault();
            return;
        }

        const petCount = Number(petCountStr);
        if (isNaN(petCount) || petCount < 0 || petCount > 100) {
            alert('must be in range 0 - 100');
            event.preventDefault();
            return;
        }

        if (!agreement) {
            alert('Please accept the policy');
            event.preventDefault();
            return;
        }
    });
});
