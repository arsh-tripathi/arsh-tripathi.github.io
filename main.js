document.getElementById("hex1").addEventListener("click", ()=>{window.open('Resume L.pdf')}); // resume
document.getElementById("hex2").addEventListener("click", (e)=>{handleClick(e.clientX, e.clientY, "rgb(255, 128, 0)", "contact_me");});
document.getElementById("hex3").addEventListener("click", (e)=>{handleClick(e.clientX, e.clientY, "rgb(157, 0, 255)", "projects");});
document.getElementById("hex4").addEventListener("click", (e)=>{handleClick(e.clientX, e.clientY, "rgb(0, 217, 255)", "work");});
document.getElementById("hex5").addEventListener("click", (e)=>{handleClick(e.clientX, e.clientY, "rgb(12, 208, 2)", "working_on");});
document.getElementById("hex6").addEventListener("click", (e)=>{handleClick(e.clientX, e.clientY, "rgb(255, 0, 93)", "about_me");});
document.getElementById("bck_btn").addEventListener("click", (e)=>{
    document.getElementById("bck_btn").classList.remove("visible");
    var circle = document.createElement("div");
    circle.setAttribute("class", "circle");
    circle.setAttribute("style", "position: fixed; background-color: black; top: " + e.clientY + "px; left: " + e.clientX + "px; animation: growandshrink 4s");
    document.body.appendChild(circle);
    setTimeout(()=>{
        location.href = "#";
    }, 2000);
    setTimeout(()=>{
        document.body.removeChild(circle);
    }, 4000);
})

function handleClick(x, y, colour, destination) {
    var circle = document.createElement("div");
    circle.setAttribute("class", "circle");
    circle.setAttribute("style", "position: absolute; background-color: " + colour +";top: " + y + "px; left: " + x + "px; animation: grow 2s");
    document.body.appendChild(circle);
    document.getElementById(destination + "_hex").classList.remove("animated");
    perform(document.getElementsByClassName("arrow"), (e) => {e.classList.remove("visible")});
    perform(document.getElementsByClassName("contact"), (el)=>{el.classList.remove("visible");})
    if (document.getElementById(destination + "_content")) document.getElementById(destination + "_content").classList.remove("animationadded");
    setTimeout(()=>{
        location.href = "#" + destination;
        document.body.removeChild(circle);
        document.getElementById(destination + "_hex").classList.add("animated");
        perform(document.getElementsByClassName("arrow"), (e) => {e.classList.add("visible")});
        perform(document.getElementsByClassName("contact"), (el)=>{el.classList.add("visible");})
        if (document.getElementById(destination + "_content")) document.getElementById(destination + "_content").classList.add("animationadded");
        document.getElementById("bck_btn").classList.add("visible");
    }, 2000);  
    console.log(x,y);  
}


perform(document.getElementsByClassName("abtmearr"), (el) => {el.addEventListener("click", (e)=>{handleClick(e.pageX, e.pageY, "rgb(255, 0, 93)", "about_me");})})
perform(document.getElementsByClassName("wrkarr"), (el) => {el.addEventListener("click", (e)=>{handleClick(e.pageX, e.pageY, "rgb(0, 217, 255)", "work");})})
perform(document.getElementsByClassName("prjarr"), (el) => {el.addEventListener("click", (e)=>{handleClick(e.pageX, e.pageY, "rgb(157, 0, 255)", "projects");})})
perform(document.getElementsByClassName("wrkingonarr"), (el) => {el.addEventListener("click", (e)=>{handleClick(e.pageX, e.pageY, "rgb(12, 208, 2)", "working_on");})})
perform(document.getElementsByClassName("ctcmearr"), (el) => {el.addEventListener("click", (e)=>{handleClick(e.pageX, e.pageY, "rgb(255, 128, 0)", "contact_me");})})

function perform(list, func) {
    for (var i = 0; i < list.length; ++i) func(list[i]);
}

var test = (a,b) => {console.log(a+b);}
test(1,2);

class Tile {
    constructor (
        ol
    ) {
        this.current = 0;
        this.list = ol.getElementsByTagName("li");
        this.size = this.list.length;
        this.counter = ol.getElementsByClassName("counter_wrapper")[0];
        ol.getElementsByClassName("left_arrow")[0].addEventListener("click", () => {this.decrement()});
        ol.getElementsByClassName("right_arrow")[0].addEventListener("click", () => {this.increment()});
    }
    increment() {
        this.list[this.current].style.display = "none";
        if (this.current === this.size - 1) this.current = 0;
        else this.current++;
        this.list[this.current].style.display = "block"
        this.counter.innerHTML = (this.current + 1) + " / " + this.size;
        console.log("Incremented")
    }
    decrement() {
        this.list[this.current].style.display = "none";
        if (this.current === 0) this.current = this.size - 1;
        else this.current--;
        this.list[this.current].style.display = "block"
        this.counter.innerHTML = (this.current + 1) + " / " + this.size;
    }
}

const abtme = new Tile(document.getElementById("about_me_text"));
const work = new Tile(document.getElementById("work_text"));
const pjcts = new Tile(document.getElementById("projects_text"));
const wrkingon = new Tile(document.getElementById("working_on_text"));