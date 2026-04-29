document.addEventListener('DOMContentLoaded', () => {
    console.log("Neon Red & Blue Theme Active!");
    
    const btns = document.querySelectorAll('.btn-watch');
    btns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.background = '#00d4ff'; // يقلب أزرق لما الماوس ييجي عليه
            btn.style.boxShadow = '0 0 20px #00d4ff';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.background = '#ff0000'; // يرجع أحمر لما الماوس يبعد
            btn.style.boxShadow = '0 0 10px #ff0000';
        });
    });
});