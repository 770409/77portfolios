const cursor = document.querySelector('.cucursor');

const icon = document.querySelector('.cucursor_icon');
// 游標

window.onload = function () {
    var arrIcon = ["🦥", "🌹", "🌻", "🦝", "🌺", "🍼"]
    var num = 0;
    function iconChang() {
        num++;
        if (num > arrIcon.length - 1) {
            num = 0;
        }
        icon.textContent = arrIcon[num];
    }
    setInterval(iconChang, 10000)
}

document.addEventListener('mousemove', c => {
    icon.setAttribute("style", "top:" + (c.pageY - 30) + "px;" + "left:" + (c.pageX + 30) + "px;");
})




function getMousePosition(event) {
    var x = 0;
    var y = 0;
    
    doc = document.documentElement;
    
    body = document.body;
    
    if (!event) event = window.event;
    
    if (window.pageYoffset) {
        x = window.pageXOffset;
        y = window.pageYOffset;
    } else {
        x = (doc && doc.scrollLeft || body && body.scrollLeft || 0)
            - (doc && doc.clientLeft || body && body.clientLeft || 0);
        y = (doc && doc.scrollTop || body && body.scrollTop || 0)
            - (doc && doc.clientTop || body && body.clientTop || 0);
    }
    
    x += event.clientX;
    y += event.clientY;

    return { 'x': x, 'y': y };
}
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}
document.onmousedown = function (event) {

    var styleImg = document.createElement("div");
    
    var r = randomNum(1, 6);
    switch (r) {
        case 1:
            styleImg.innerHTML = "<img src='./img/11.png' style='width: 30px;height: auto;'/>"
            break;
        case 2:
            styleImg.innerHTML = "<img src='./img/12.png' style='width: 40px;height: auto;'/>"
            break;
        case 3:
            styleImg.innerHTML = "<img src='./img/13.png' style='width: 30px;height: auto;'/>"
            break;
        case 4:
            styleImg.innerHTML = "<img src='./img/14.png' style='width: 30px;height: auto;'/>"
            break;
        case 5:
            styleImg.innerHTML = "<img src='./img/15.png' style='width: 40px;height: auto;'/>"
            break;
        case 6:
            styleImg.innerHTML = "<img src='./img/16.png' style='width: 30px;height: auto;'/>"
            break;

    }
    styleImg.style.position = 'absolute'
    var x = getMousePosition(event).x;
    var y = getMousePosition(event).y;
    styleImg.style.top = y + "px";
    styleImg.style.left = x + "px";
    var testDiv = document.querySelector("body");
    testDiv.appendChild(styleImg);
    testDiv.style.overflow = 'hidden';
    testDiv.appendChild(styleImg);
    var count = 0;
    
    setTimeout(function () {
        
        testDiv.removeChild(styleImg);
    }, 3000)
}