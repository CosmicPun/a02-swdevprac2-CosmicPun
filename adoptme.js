document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('button[type="submit"]');

    submitBtn.addEventListener('click', (event) => {
        const firstName = document.getElementById('firstName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const petCountStr = document.getElementById('petCount').value.trim();
        const agreement = document.getElementById('agreement').checked;

        if (!firstName) {
            alert('โปรดกรอกชื่อและนามสกุลของคุณ');
            event.preventDefault();
            return;
        }

        if (!phone) {
            alert('โปรดกรอกหมายเลขโทรศัพท์ของคุณ');
            event.preventDefault();
            return;
        }

        if (!petCountStr) {
            alert('โปรดกรอกจำนวนสัตว์เลี้ยง');
            event.preventDefault();
            return;
        }

        const petCount = Number(petCountStr);
        if (isNaN(petCount) || petCount < 0 || petCount > 100) {
            alert('จำนวนสัตว์เลี้ยงต้องอยู่ในช่วง 0 - 100');
            event.preventDefault();
            return;
        }

        if (!agreement) {
            alert('โปรดยอมรับนโยบาย');
            event.preventDefault();
            return;
        }
    });
});
