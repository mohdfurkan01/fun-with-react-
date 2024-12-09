let myPromise = new Promise((resolve, reject) => {
  let learn = true;

  if (learn) {
    resolve("I am learning ");
  } else {
    reject("Not learning");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
