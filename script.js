document.addEventListener('DOMContentLoaded', () => {
    console.log("Neon Red & Blue Theme Active!");

    (MouseEnter & MouseLeave)
    const btns = document.querySelectorAll('.btn-watch');
    btns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.background = '#00d4ff';
            btn.style.boxShadow = '0 0 20px #00d4ff';
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.background = '#ff0000';
            btn.style.boxShadow = '0 0 10px #ff0000';
        });
    });

     Login
    const loginForm = document.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); 

    
            localStorage.setItem('isLoggedIn', 'true');

        
            window.location.href = 'index.html'; 
        });
    }
});
