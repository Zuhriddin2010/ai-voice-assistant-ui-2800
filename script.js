const btn = document.getElementById("btn");

let active = false;

btn.addEventListener("click", () => {

  active = !active;

  const waves = document.querySelectorAll(".wave-container span");
  const orb = document.querySelector(".orb");

  if(active){

    btn.innerText = "Listening...";

    waves.forEach(wave => {
      wave.style.animationDuration = "0.4s";
    });

    orb.style.boxShadow = `
      0 0 30px #00e5ff,
      0 0 80px #6a00ff,
      0 0 120px #00e5ff
    `;

  }else{

    btn.innerText = "Activate AI";

    waves.forEach(wave => {
      wave.style.animationDuration = "1s";
    });

    orb.style.boxShadow = `
      0 0 20px #00e5ff,
      0 0 60px #6a00ff
    `;

  }

});

document.addEventListener("mousemove", (e) => {

  const x = (window.innerWidth / 2 - e.pageX) / 30;
  const y = (window.innerHeight / 2 - e.pageY) / 30;

  document.querySelector(".container").style.transform =
    `rotateY(${x}deg) rotateX(${-y}deg)`;

});