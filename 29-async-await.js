// async

// await
async function fetchAPI() {
  const fullName = "Jenny Gates";

  return fullName;
}

const per = fetchAPI();

console.log(per);

per
  .then((success) => {
    console.log(`Inside then....`);

    console.log(success);
  })
  .catch((failure) => {
    console.log(failure);
  });

// When we return the promise from the async function then it simply return that promise as it is

async function fetchData() {
  const promise = new Promise((success, reject) => {
    success("==== Promise Fulfilled====");
  });

  return promise;
}

fetchData()
  .then((success) => {
    console.log(success);
  })
  .catch((failure) => {
    console.log(failure);
  });
