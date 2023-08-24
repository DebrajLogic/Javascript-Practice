const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const blue = document.querySelector("#blue");
const green = document.querySelector("#green");

const play = document.querySelector("#play-btn");
const restart = document.querySelector("#restart-btn");
const done = document.querySelector("#done-btn");

const scoreboard = document.querySelector("#score");
const message = document.querySelector("#message");

const array = [red, yellow, blue, green];

let score = 0;

let values = [];
let userInputs = [];

let flag;

let index;

let level = 2000;

function Start() {
  const loop = setInterval(display, 1000);

  setTimeout(() => {
    clearInterval(loop);
    play.removeAttribute("disabled");
    storeUserInput();
  }, level);
}

function display() {
  setTimeout(() => {
    index = parseInt(Math.random() * array.length);

    array[index].classList.remove("off");

    values.push(array[index].id);
    console.log(array[index].id);

    setTimeout(() => {
      array[index].classList.add("off");
    }, 500);
  }, 500);
}

// function display() {
//

//   //   console.log(array[index]);

//   setTimeout(function () {
//     array[index].classList.add("off");
//     values.push(array[index]);
//   }, 500);
// }
restart.addEventListener("click", () => {
  score = 0;
  scoreboard.innerText = 0;
  console.log(values);
  level = 2000;
});

play.addEventListener("click", () => {
    message.innerText = 'Focus on the lights, Remerber the Pattern';
  values.length = 0;
  Start();
  level += 1000;
  play.setAttribute("disabled", true);
  userInputs.length = 0;
});

function storeUserInput() {
  const lightsInputs = document.querySelectorAll(".lights");
  lightsInputs.forEach((light) => {
    // Check if the event listener is already attached
    if (!light.dataset.listenerAttached) {
      light.addEventListener("click", (event) => {
        setTimeout(function () {
          light.classList.remove("off");
          setTimeout(function () {
            light.classList.add("off");
          }, 100);
        }, 100);
        userInputs.push(light.id);
        console.log("input = ", light.id);
        // Optional: stop event propagation if needed
        // event.stopPropagation();
      });
      // Mark the element as having an event listener attached
      light.dataset.listenerAttached = "true";
    }
  });
}

// function storeUserInput() {
//   const lightsInputs = document.querySelectorAll(".lights");
//   lightsInputs.forEach((light) => {
//     light.addEventListener("click", () => {
//       userInputs.push(light.id);
//       console.log("input = ", light.id);
//     });
//   });
// }

done.addEventListener("click", validateInput);

function validateInput() {
  if (values.length === userInputs.length) {
    flag = true;
    for (let i = 0; i < values.length; i++) {
      if (values[i] === userInputs[i]) {
        continue;
      } else {
        flag = false;
      }
    }
  } else {
    flag = false;
  }

  if (flag) {
    score++;
    scoreboard.innerText = `${score}`;
    message.innerText = "!! YOU WIN !!";
    message.style.color = "green";
    console.log("!!! YOU WIN !!!");
    console.log("Score : ", score);
    userInputs.length = 0;
  } else {
    message.innerText = "!! TRY AGAIN !!";
    message.style.color = "red";
    console.log("TRY AGAIN!!!");
    userInputs.length = 0;
  }
}
