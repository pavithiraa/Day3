// For the given JSON iterate over all for loops (for, for in, for of, forEach)

let array = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

let obj = {
  id: 5968,
  uid: "d92fd7bd-c2c8-46f9-9aa5-c0a9c2a10c0a",
  password: "pINsi@n",
  first_name: "Damon",
  last_name: "SAlvatore",
  username: "damon@24",
  email: "salvatore1864@gmail.cpm",
  phone_number: "+256 1-828-679-4740 x24096",
  social_insurance_number: "496109291",
  employment: {
    title: "Manager",
    key_skill: "Organisation",
  },
  date_of_birth: "1864-09-01",
};

console.log("for loop");
for (let i = 0; i < array.length; i++) {
  console.log(i, array[i]);
}

console.log("for of - gives values in array");
for (let item of array) {
  console.log(item);
}

console.log("for in - gives index in array");
for (let index in array) {
  console.log(index);
}

console.log("for each array method");
array.forEach((element) => {
  console.log(element);
});

console.log("for in - gives keys of object");
for (let item in obj) {
  console.log(item, "-", obj[item]);
}