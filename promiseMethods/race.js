function delay(value, ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Resolved: ${value}`);
      resolve(value);
    }, ms);
  });
}

function fail(value, ms) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      console.log(`Rejected: ${value}`);
      reject(`${value} failed`);
    }, ms);
  });
}

Promise.race([
  delay("B", 500),
  fail("C", 200),
   delay("A", 1000)
])
.then(results => {
  console.log("Promise.all results:", results);
})
.catch(error => {
  console.error("Promise.all error:", error);
});

