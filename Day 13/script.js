var promise = new Promise((res, rej) => {
  let a = 1 + 1;
  if (a == 2) {
    res();
  } else {
    rej();
  }
});

promise
  .then(() => console.log("Promise resolved"))
  .catch(() => console.log("not resolved"));
