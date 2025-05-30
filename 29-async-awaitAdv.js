console.log("==== START of the Program =====");

async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Successfully fetched the data...");

      reject("Failed to fetch the data.....");
    }, 5000);
  });
}

async function main() {
  try {
    const promiseResolve = await fetchData();

    console.log(promiseResolve);
  } catch (error) {
    console.log(`----- Inside catch block ---------`);

    console.log(error);
  }

  console.log("===== main END ======");
}

main();

console.log("==== END of the Program =====");

console.log("===== fetch() API =======");

const responseData = await fetch("https://fakestoreapi.com/products");

const products = await responseData.json();

for (const product of products) {
  console.log(
    `ID: ${product.id}, Title: ${product.title}, Price: ${product.price}, Count: ${product.rating.count}`
  );
}
