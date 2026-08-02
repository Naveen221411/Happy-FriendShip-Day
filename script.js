// =============================
// script.js
// =============================

// -----------------------------
// Custom Cursor
// -----------------------------

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// -----------------------------
// Dark / Light Theme
// -----------------------------

const themeBtn = document.getElementById("theme-btn");

let dark = true;

themeBtn.addEventListener("click", () => {

    if (dark) {

        document.body.style.background = "#f6f6f6";
        document.body.style.color = "#111";

        document.querySelectorAll("p").forEach(p => {
            p.style.color = "#444";
        });

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        document.body.style.background = "#060818";
        document.body.style.color = "#fff";

        document.querySelectorAll("p").forEach(p => {
            p.style.color = "";
        });

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

    dark = !dark;

});

// -----------------------------
// Friendship Wishes
// -----------------------------

const wishes = {

    "Best Friend": [
        "You're the family I chose. Happy Friendship Day ❤️",
        "Life is better because you're in it.",
        "Thanks for staying through every chapter."
    ],

    "Childhood Friend": [
        "From playground memories to lifelong stories.",
        "We grew up, but our friendship never grew old.",
        "You know every version of me."
    ],

    "College Friend": [
        "Assignments disappeared, memories stayed.",
        "Best lectures happened outside classrooms.",
        "Thanks for making college unforgettable."
    ],

    "Office Friend": [
        "You made Mondays easier.",
        "Every coffee break became a memory.",
        "Work became fun because of you."
    ],

    "Long Distance Friend": [
        "Distance changes maps, not hearts.",
        "Miles can't weaken real friendship.",
        "Still my favourite notification."
    ]

};

// -----------------------------
// Generate Wish
// -----------------------------

const btn = document.getElementById("generate");

btn.addEventListener("click", () => {

    const name =
        document.getElementById("name").value.trim();

    const relation =
        document.getElementById("relation").value;

    if (name === "") {

        alert("Please enter your friend's name.");

        return;

    }

    const list = wishes[relation];

    const random =
        list[Math.floor(Math.random() * list.length)];

    document.getElementById("wishName").innerHTML =
        "Dear " + name + " ❤️";

    document.getElementById("wishText").innerHTML =
        random;

});

// -----------------------------
// Copy Button
// -----------------------------

const copyBtn =
document.getElementById("copy");

copyBtn.addEventListener("click", () => {

    const text =
        document.getElementById("wishText").innerText;

    navigator.clipboard.writeText(text);

    copyBtn.innerHTML = "Copied ✔";

    setTimeout(() => {

        copyBtn.innerHTML = "Copy";

    },2000);

});

// -----------------------------
// Scroll Animation
// -----------------------------

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(
".story,.generator,.gallery,.stats,.card,.wish-card"
).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// -----------------------------
// CSS Classes for Animation
// -----------------------------

const style = document.createElement("style");

style.innerHTML = `

.hidden{

opacity:0;

transform:translateY(80px);

transition:1s;

}

.show{

opacity:1;

transform:translateY(0);

}

`;

document.head.appendChild(style);

// -----------------------------
// Floating Cards Animation
// -----------------------------

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) scale(1.04)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// -----------------------------
// Button Ripple Effect
// -----------------------------

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const x=e.offsetX;

const y=e.offsetY;

circle.style.left=x+"px";
circle.style.top=y+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

const rippleStyle=document.createElement("style");

rippleStyle.innerHTML=`

button{

position:relative;

overflow:hidden;

}

.ripple{

position:absolute;

width:15px;

height:15px;

background:rgba(255,255,255,.7);

border-radius:50%;

transform:scale(0);

animation:ripple .6s linear;

pointer-events:none;

}

@keyframes ripple{

to{

transform:scale(18);

opacity:0;

}

}

`;

document.head.appendChild(rippleStyle);

// -----------------------------
// Hero Typing Animation
// -----------------------------

const title =
document.querySelector(".hero h1");

const original = title.innerHTML;

title.innerHTML="";

let i=0;

function type(){

if(i<original.length){

title.innerHTML+=original.charAt(i);

i++;

setTimeout(type,30);

}

}

setTimeout(type,500);

// -----------------------------
// Smooth Navbar Highlight
// -----------------------------

const links=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let fromTop=window.scrollY+100;

links.forEach(link=>{

let section=document.querySelector(link.hash);

if(

section.offsetTop<=fromTop &&
section.offsetTop+section.offsetHeight>fromTop

){

link.style.color="#ff73b7";

}else{

link.style.color="#fff";

}

});

});

// -----------------------------
// Console Message
// -----------------------------

console.log(
"%cHappy Friendship Day ❤️",
"color:#ff4da6;font-size:24px;font-weight:bold;"
);