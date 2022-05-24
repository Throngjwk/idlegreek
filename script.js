let points = 0;
let translatedmulit = Math.log10(points) + 1;
let persecond = 1;
let code = 0;
let cps = translatedmulit;
let costcode1 = 500;
let currently1 = 2;
let costcode2 = 10 ** 6;
let currently2 = 3;
let titlename = "idle greek";
let description = "?";
let id = "idle_greek";
let authors = "Karen";
let joindiscordserver = "no link";
let costcode3 = 100000;
let costcode4 = 1e60;
let endgame = "false";

document.getElementById('tick').onclick = () => {
    points = points + persecond;
    document.getElementById('points').innerText = points;
    document.getElementById('persecond').innerText = persecond;
    translatedmulit = Math.log10(points) + 1;
    document.getElementById('translated').innerText = "Having your boosts points get translated to x" + translatedmulit;
    code = code + cps;
    cps = translatedmulit * (currently1 - 1);
    document.getElementById('codes').innerText = "You Have " + code + " Codes.";
    if (code > 1e80) {
        endgame = "true";
    }
}

document.getElementById('resetcode').onclick = () => {
    code = 0;
    document.getElementById('codes').innerText = "You Have " + code + " Codes.";
}

document.getElementById('buy1').onclick = () => {
    if (code > costcode1) {
        code = code - costcode1;
        currently1 = currently1 * 2;
        costcode1 = costcode1 * 2.4;
        document.getElementById('buy1').innerText = "Power of Two Gain \nCost:" + costcode1;
        document.getElementById('codes').innerText = "You Have " + code + " Codes.";
    }
}

document.getElementById('buy2').onclick = () => {
    if (code > costcode2) {
        code = code - costcode2;
        currently2 = currently2 * 3;
        costcode2 = costcode2 * 4;
        document.getElementById('buy2').innerText = "Power of Three Gain \nCost:" + costcode1;
        document.getElementById('codes').innerText = "You Have " + code + " Codes.";
    }
}

document.getElementById('buy3').onclick = () => {
    if (code > costcode3) {
        code = code - costcode3;
        persecond = persecond + 1;
        costcode3 = costcode3 * 3;
        document.getElementById('buy3').innerText = "Per Second By 1 \nCost:" + costcode1;
        document.getElementById('codes').innerText = "You Have " + code + " Codes.";
    }
}

document.getElementById('buy4').onclick = () => {
    if (code > costcode4) {
        code = code - costcode4;
        persecond = persecond + 99999999;
        costcode4 = costcode4 * Math.floor(Math.log10(points));
        document.getElementById('buy4').innerText = "Per Second By 99999999 \nCost:" + costcode1;
        document.getElementById('codes').innerText = "You Have " + code + " Codes.";
    }
}

if (endgame = "true") {
    alert("You Win!!!!!!!!")
    alert("Going to Beyond Endgame?")
    endgame = "false";
}

document.getElementById('testendgamealert').onclick = () => {
    alert("You Win!!!!!!!!")
    alert("Going to Beyond Endgame?")
}