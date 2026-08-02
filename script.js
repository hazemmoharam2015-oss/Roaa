// ===== تاريخ البداية =====
const startDate = new Date("2025-07-24T00:00:00");

function updateCounter(){
  const now = new Date();
  let diff = now - startDate;

  if(diff < 0) diff = 0;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCounter();
setInterval(updateCounter, 1000);

// ===== شاشة البداية بالباسورد =====
const loader = document.getElementById("loader");
const enterBtn = document.getElementById("enterBtn");
const passInput = document.getElementById("passInput");
const lockBox = document.querySelector(".lock-box");

const correctPassword = "love";

function tryUnlock(){
  const value = passInput.value.trim().toLowerCase();

  if(value === correctPassword.toLowerCase()){
    loader.classList.add("hide");
    document.body.style.overflow = "auto";
  } else {
    lockBox.classList.remove("shake");
    void lockBox.offsetWidth;
    lockBox.classList.add("shake");
    passInput.value = "";
    passInput.focus();
  }
}

enterBtn.addEventListener("click", tryUnlock);

passInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    tryUnlock();
  }
});

// ===== Popup الهدية =====
const giftBtn = document.getElementById("giftBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");

giftBtn.addEventListener("click", () => {
  popup.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");
});

popup.addEventListener("click", (e) => {
  if(e.target === popup){
    popup.classList.remove("show");
  }
});

// ===== خلفية الورد المتساقط =====
const petalsContainer = document.getElementById("petals");
const petalSymbols = ["🌸", "🌹", "❤️", "💮"];

function createPetal(){
  const petal = document.createElement("span");
  petal.classList.add("petal");
  petal.textContent = petalSymbols[Math.floor(Math.random() * petalSymbols.length)];

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = (0.9 + Math.random() * 1.2) + "rem";

  const duration = 8 + Math.random() * 8;
  petal.style.animationDuration = duration + "s";

  petalsContainer.appendChild(petal);

  setTimeout(() => petal.remove(), duration * 1000);
}

setInterval(createPetal, 700);
for(let i = 0; i < 10; i++){
  setTimeout(createPetal, i * 300);
}