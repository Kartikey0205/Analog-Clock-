setInterval(() => {
    d= new Date();
    hourhand=d.getHours();
    minutehand=d.getMinutes();
    secondhand=d.getSeconds();
    hourhand_rotation=30*hourhand+minutehand/2;
    minutehand_rotation=6*minutehand;
    secondhand_rotation=6*secondhand;

hour.style.transform=`rotate(${hourhand_rotation}deg)`;
min.style.transform=`rotate(${minutehand_rotation}deg)`;
sec.style.transform=`rotate(${secondhand_rotation}deg)`;
}, 1000);