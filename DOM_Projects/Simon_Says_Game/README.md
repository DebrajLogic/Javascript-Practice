# Simon Says Game

## Challeges / Learnings

### Event Bubbling

- I used this function to detect the clicks from the user and then sore it in the userInputs array.

- But every time I clicked, it registered the click twice

```
// function storeUserInput() {
//   const lightsInputs = document.querySelectorAll(".lights");
//   lightsInputs.forEach((light) => {
//     light.addEventListener("click", () => {
//       userInputs.push(light.id);
//       console.log("input = ", light.id);
//     });
//   });
// }

```

Soled by this modification:

```

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
```
