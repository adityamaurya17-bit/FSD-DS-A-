// function wakeUp(callback) {
//   setTimeout(() => {
//     console.log("Step 1: Wake up");
//     callback();
//   }, 1000);
// }

// function brushTeeth(callback) {
//   setTimeout(() => {
//     console.log("Step 2: Brush teeth");
//     callback();
//   }, 1000);
// }

// function eatBreakfast(callback) {
//   setTimeout(() => {
//     console.log("Step 3: Eat breakfast");
//     callback();
//   }, 1000);
// }

// function goToWork(callback) {
//   setTimeout(() => {
//     console.log("Step 4: Go to work");
//     callback();
//   }, 1000);
// }

// // Nested callbacks (callback hell)
// wakeUp(() => {
//   brushTeeth(() => {
//     eatBreakfast(() => {
//       goToWork(() => {
//         console.log("Morning routine completed");
//       });
//     });
//   });
// });

function test1(cb) {
  setTimeout(() => {
    console.log("task1");
    cb();
  }, 4000);
}

function test2(cb) {
  setTimeout(() => {
    console.log("task2");
    cb();
  }, 2000);
}

function test3(cb) {
  setTimeout(() => {
    console.log("task3");
    cb();
  }, 200);
}

function test4(cb) {
  setTimeout(() => {
    console.log("task4");
    cb();
  }, 100);
}

test1(() => {
  test2(() => {
    test3(() => {
      test4(() => {
        console.log("All tasks done");
      });
    });
  });
});