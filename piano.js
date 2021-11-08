const qKey = document.getElementById("qKey");
const wKey = document.getElementById("wKey");
const eKey = document.getElementById("eKey");
const rKey = document.getElementById("rKey"); 

qKey.addEventListener("click", () => {
    document.getElementById("c").pause();
    document.getElementById("c").currentTime = 0;
    document.getElementById("c").play();
});
document.addEventListener("keydown",  (event) => {
    if(event.key == 'q'){
    document.getElementById("c").pause();
    document.getElementById("c").currentTime = 0;
    document.getElementById("c").play();
    }
});

wKey.addEventListener("click", () =>{
    document.getElementById("d").pause();
    document.getElementById("d").currentTime = 0;
    document.getElementById("d").play();
});
    
document.addEventListener("keydown",  (event) => {
    if(event.key == 'w'){
    document.getElementById("d").pause();
    document.getElementById("d").currentTime = 0;
    document.getElementById("d").play();
    }
});
eKey.addEventListener("click", () => {
    document.getElementById("e").pause();
    document.getElementById("e").currentTime = 0;
    document.getElementById("e").play();
})
document.addEventListener("keydown",  (event) => {
    if(event.key == 'e'){
    document.getElementById("e").pause();
    document.getElementById("e").currentTime = 0;
    document.getElementById("e").play();
    }
});
rKey.addEventListener("click", () => {
    document.getElementById("f").pause();
    document.getElementById("f").currentTime = 0;
    document.getElementById("f").play();
});
document.addEventListener("keydown",  (event) => {
    if(event.key == 'r'){
    document.getElementById("f").pause();
    document.getElementById("f").currentTime = 0;
    document.getElementById("f").play();
    }
});
pKey.addEventListener("click", () => {
    // document.getElementById("c").pause();
    document.getElementById("c").currentTime = 0;
    document.getElementById("c").play();
});
document.addEventListener("keydown",  (event) => {
    if(event.key == 'p'){
    document.getElementById("c").pause();
    document.getElementById("c").currentTime = 0;
    document.getElementById("c").play();
    }
});
oKey.addEventListener("click", () => {
    document.getElementById("b").pause();
    document.getElementById("b").currentTime = 0;
    document.getElementById("b").play();
});
document.addEventListener("keydown",  (event) => {
    if(event.key == 'o'){
    document.getElementById("b").pause();
    document.getElementById("b").currentTime = 0;
    document.getElementById("b").play();
}
});
iKey.addEventListener("click", () => {
    document.getElementById("a").pause();
    document.getElementById("a").currentTime = 0;
    document.getElementById("a").play();
});
document.addEventListener("keydown",  (event) => {
    if(event.key == 'i'){
    document.getElementById("a").pause();
    document.getElementById("a").currentTime = 0;
    document.getElementById("a").play();
}
});
uKey.addEventListener("click", () => {
    document.getElementById("g").pause();
    document.getElementById("g").currentTime = 0;
    document.getElementById("g").play();
});
document.addEventListener("keydown",  (event) => {
    if(event.key == 'u'){
    document.getElementById("u").pause();
    document.getElementById("u").currentTime = 0;
    document.getElementById("u").play();
}
});
