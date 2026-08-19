const petals = document.getElementById("petals");
const flowerChars = ["♡","✿","❀","✾","♥","✧"];

function spawnPetal(){
  const p=document.createElement("span");
  p.className="petal";
  p.textContent=flowerChars[Math.floor(Math.random()*flowerChars.length)];
  p.style.left=Math.random()*100+"vw";
  p.style.setProperty("--drift",(Math.random()*220-110)+"px");
  p.style.animationDuration=(7+Math.random()*9)+"s";
  p.style.fontSize=(11+Math.random()*17)+"px";
  petals.appendChild(p);
  setTimeout(()=>p.remove(),17000);
}
setInterval(spawnPetal,900);
for(let i=0;i<7;i++) setTimeout(spawnPetal,i*300);

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));


const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const musicText = document.getElementById("musicText");

let musicPlaying = false;

// Start at a gentle volume
bgMusic.volume = 0.35;

musicToggle.addEventListener("click", async () => {

    if (!musicPlaying) {

        try {
            await bgMusic.play();

            musicPlaying = true;
            musicToggle.classList.add("playing");
            musicText.textContent = "Celeste is playing";

        } catch (error) {
            console.error("Music could not play:", error);
        }

    } else {

        bgMusic.pause();

        musicPlaying = false;
        musicToggle.classList.remove("playing");
        musicText.textContent = "play our song";

    }

});

document.getElementById("beginBtn").addEventListener("click",()=>{
  document.getElementById("memories").scrollIntoView({behavior:"smooth"});
  if (!musicPlaying) {
    bgMusic.play();
    musicPlaying = true;
    musicToggle.classList.add("playing");
    musicText.textContent = "Celeste is playing";
}
});

const letters={
  letter1:{
    title:"When you need to feel loved",
    body:[
      "Yeoboo, if you opened this one, then maybe you need to hear something that I should probably say more often.",
      "You don't have to do anything to deserve my love. You don't have to be having a good day. You don't have to be the best version of yourself.",
      "I love you as you are. The soft parts, the stubborn parts, the sleepy parts, the silly parts, and all the little pieces of you that make you, you.",
      "So whenever you forget, let this letter remind you for me: you are deeply, genuinely, ridiculously loved.",
      "And yes, by me. Always."
    ]
  },
  letter2:{
    title:"When you miss me",
    body:[
      "If I could step through this screen right now, I would.",
      "I'd probably annoy you first, make you laugh somehow, and then stay beside you for a while without needing to say much.",
      "Until I can do that, keep these little memories close. They're proof of the moments we've already had, and proof that there are still so many more moments I want with you.",
      "So if you miss me, just know that there's a very good chance I'm missing you too.",
      "Come back here whenever you want, yeoboo. I'll always be somewhere in these words."
    ]
  },
  letter3:{
    title:"When today feels heavy",
    body:[
      "Hey. Slow down for a second.",
      "You don't need to fix everything today. You don't need to pretend you're okay just because the world expects you to be.",
      "Rest if you need to. Cry if you need to. Be quiet if you need to.",
      "Your bad days don't make you any less lovable to me.",
      "I hope you remember that you are allowed to be a person, not a perfect version of one.",
      "And if today is one of those days where everything feels too much, borrow a little of my strength until yours comes back.",
      "I'm proud of you, yeoboo."
    ]
  }
};

const modal=document.getElementById("letterModal");
const content=document.getElementById("letterContent");
document.querySelectorAll(".envelope").forEach(env=>{
  env.addEventListener("click",()=>{
    const l=letters[env.dataset.letter];
    content.innerHTML=`<h3>${l.title}</h3>`+l.body.map(p=>`<p>${p}</p>`).join("");
    modal.showModal();
  });
});
document.getElementById("closeModal").addEventListener("click",()=>modal.close());
modal.addEventListener("click",e=>{if(e.target===modal)modal.close()});

const reasons=[
  "because you make ordinary moments feel like they belong in my memory forever.",
  "because I like the person I am when I'm with you.",
  "because even the smallest things about you somehow stay in my head.",
  "because your smile can change the whole mood of a day.",
  "because I don't just want the big moments with you. I want the boring ones too.",
  "because somehow, after everything, my heart still says \"her\".",
  "because being beside you feels familiar in a way I can't really explain.",
  "because I want more pictures, more stories, more stupid little memories with you.",
  "because you are my favorite person to come home to.",
  "because you're my yeoboo. And honestly, that's reason enough."
];
let ri=0;
const heart=document.getElementById("reasonHeart");
heart.addEventListener("click",()=>{
  document.getElementById("reasonText").textContent=reasons[ri];
  ri=(ri+1)%reasons.length;
  heart.classList.remove("pop");void heart.offsetWidth;heart.classList.add("pop");
  for(let i=0;i<8;i++)setTimeout(spawnPetal,i*45);
});

const surprise=document.getElementById("surpriseOverlay");
document.getElementById("surpriseBtn").addEventListener("click",()=>{
  surprise.classList.add("show");
  surprise.setAttribute("aria-hidden","false");
  for(let i=0;i<28;i++)setTimeout(spawnPetal,i*50);
});
document.getElementById("closeSurprise").addEventListener("click",()=>{
  surprise.classList.remove("show");
  surprise.setAttribute("aria-hidden","true");
});
