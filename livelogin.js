const nameParticipant = document.getElementById('name');
const logButt = document.getElementById('login-butt');

setInterval(() => {
    if (nameParticipant.value != '' ) {
        logButt.style.opacity = '1';
    } else {
        logButt.style.opacity = '0';
    }
}, 500);

logButt.addEventListener('click', function(){
    localStorage.setItem('participant', JSON.stringify(nameParticipant.value));
    window.location.href = './index.html';
})