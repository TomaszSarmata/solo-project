const promiseA = new Promise((res, rej) => {
  res("A");
});

const getPromiseA = () => {
  return promiseA;
};

// let x = getPromiseA;
// console.log(x);

const promiseB = new Promise((res, rej) => {
  setTimeout(() => {
    res("B");
  }, 3000);
});

const getPromiseB = () => {
  return promiseB;
};

// let x = getPromiseB;
// console.log(x);

// const x = getPromiseB().then((answer) => {
//   console.log(answer);
// });

// console.log(x);

async function demoAsyncAwait() {
  const promiseC = new Promise((res, rej) => {
    setTimeout(() => {
      res("c");
    }, 3000);
  });
  const getPromiseC = () => {
    return promiseC;
  };
  const x = getPromiseC().then((answer) => console.log("answer", answer));
  console.log("x", x);

  const y = await getPromiseC();
  console.log("y", y);
}

demoAsyncAwait();
