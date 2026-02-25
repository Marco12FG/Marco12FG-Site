document.addEventListener("DOMContentLoaded",()=>{

const body=document.body;

const darkBtn=document.getElementById("darkBtn");
const lightBtn=document.getElementById("lightBtn");
const snakeBtn=document.getElementById("snakeBtn");

/* Theme Load */

if(localStorage.getItem("theme")==="light"){
    body.classList.add("light");
}

/* Particle System (GENERALE) */

function spawnParticles(x,y){

    const color=body.classList.contains("light")
        ? "#111"
        : "#1db954";

    for(let i=0;i<20;i++){

        const p=document.createElement("div");
        p.className="particle";

        p.style.background=color;

        document.body.appendChild(p);

        const dx=(Math.random()-0.5)*150;
        const dy=(Math.random()-0.5)*120;

        p.style.left=(x+dx)+"px";
        p.style.top=(y+dy)+"px";

        setTimeout(()=>p.remove(),1300);
    }
}

/* Theme Toggle */

function themeClick(e){

    spawnParticles(e.clientX,e.clientY);

    if(e.target.id==="lightBtn"){
        body.classList.add("light");
        localStorage.setItem("theme","light");
    }

    if(e.target.id==="darkBtn"){
        body.classList.remove("light");
        localStorage.setItem("theme","dark");
    }
}

darkBtn?.addEventListener("click",themeClick);
lightBtn?.addEventListener("click",themeClick);

/* Snake Button */

if(snakeBtn){

    snakeBtn.addEventListener("click",e=>{

        spawnParticles(e.clientX,e.clientY);

        body.classList.add("page-transition");

        setTimeout(()=>{
            window.location="snake.html";
        },600);

    });

}

/* Page transition links */

document.querySelectorAll("a").forEach(link=>{

    if(link.hostname===window.location.hostname){

        link.addEventListener("click",e=>{

            e.preventDefault();

            spawnParticles(e.clientX,e.clientY);

            body.classList.add("page-transition");

            setTimeout(()=>{
                window.location=link.href;
            },600);

        });

    }

});

});