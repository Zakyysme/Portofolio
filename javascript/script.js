let banner = document.querySelector('.banner');
let menutoggle = document.querySelector('.toggle');
menutoggle.onclick = function(){
    menutoggle.classList.toggle('active');
    banner.classList.toggle('active');
}

function myFunction(){
    alert("Terimakasih Telah Menghubungi Saya");
}

window.setTimeout("times()", 1000);
function times(){
    var times = new Date();
    setTimeout("times()", 1000);
    document.getElementById("jam").innerHTML = times.getHours();
    document.getElementById("menit").innerHTML = times.getMinutes();
    document.getElementById("detik").innerHTML = times.getSeconds();
}