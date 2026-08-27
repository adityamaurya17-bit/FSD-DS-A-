function wakeUp(callback) {
  setTimeout(() => {
    console.log("Step 1: Wake up");
    callback();
  }, 1000);
}

function brushTeeth(callback) {
  setTimeout(() => {
    console.log("Step 2: Brush teeth");
    callback();
  }, 1000);
}

function eatBreakfast(callback) {
  setTimeout(() => {
    console.log("Step 3: Eat breakfast");
    callback();
  }, 1000);
}

function goToWork(callback) {
  setTimeout(() => {
    console.log("Step 4: Go to work");
    callback();
  }, 1000);
}

// Nested callbacks (callback hell)
wakeUp(() => {
  brushTeeth(() => {
    eatBreakfast(() => {
      goToWork(() => {
        console.log("Morning routine completed");
      });
    });
  });
});
