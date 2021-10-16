const wel = document.getElementById('wel');
const data = document.getElementById('data');
const arrow = document.getElementById('arrow');

function fadeIn() {
    const participant =  JSON.parse(localStorage.getItem('participant'));
    data.innerHTML = 'Hello, ' + participant;
    data.style.opacity = '1';
}

setTimeout(function(){
    data.style.opacity = '0';
    setTimeout(function(){
        wel.style.opacity = '1';
        setTimeout(function(){
            arrow.style.opacity = '1';
        },3000);
    },500);
},5000);
