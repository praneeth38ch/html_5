let aish=document.createElement("p");
aish.textContent="I'm Chitti";
aish.innerHTML="Memory 1 tera Byte";
aish.style.color="blue";
aish.style.fontSize="20px";
document.getElementById("vasi").appendChild(aish);
let sana = document.getElementsByClassName("list")[0];
    if (sana) {
        sana.remove();
    }
setTimeout(() => {
    let praja = document.getElementsByClassName("list")[2];
    if (praja) {
        praja.remove();
    }
}, 2000);

