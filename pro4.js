function findAddress(obj) {
    if (typeof obj !== "object") {
        return "Please, provide me a valid object!";
    }
    else {
        const street = obj.street || "No Information";
        const house = obj.house || "No Information";
        const society = obj.society || "No Information";
        return `${street}, ${house}, ${society}`;
    }


}


const obj = {
    street: 10,
    house: "15A",
    society: "Earth Perfect",
}
const output = findAddress(obj);
console.log(output);






function findAddress(obj) {
    if (typeof obj !== "object") {
        return "Please, provide me a valid object!";
    }
    else {
        const street = obj.street || "No Information";
        const house = obj.house || "_";
        const society = obj.society || "No Information";
        return `${street}, ${house}, ${society}`;
    }
}


const obj = {
    street: 10,
    society: "Earth Perfect",
}
const output = findAddress(obj);
console.log(output);





function findAddress(obj) {
    if (typeof obj !== "object") {
        return "Please, provide me a valid object!";
    }
    else {
        const street = obj.street || "No Information";
        const house = obj.house || "_";
        const society = obj.society || "_";
        return `${street}, ${house}, ${society}`;
    }
}


const obj = {
    street: 10,
}
const output = findAddress(obj);
console.log(output);






function findAddress(obj) {
    if (typeof obj !== "object") {
        return "Please, provide me a valid object!";
    }
    else {
        const street = obj.street || "No Information";
        const house = obj.house || "_";
        const society = obj.society || "_";
        console.log (street, house, society);
    }

}


const obj = {
    street: 10,
}
const output = findAddress(obj);
console.log(output);












function findAddress(obj) {
    const output = [obj.street, obj.house, obj.society];
    return output;
  }

  // Example usage:
  const input = { street: 10, house: "15A", society: "Earth Perfect" };
  const output = findAddress(input);
  console.log(output);



function findAddress(obj) {
    const output = [obj.street, obj.house, obj.society];
    return output;
  }

  // Example usage:
  const input = { street: 10, house: "-", society: "Earth Perfect" };
  const output = findAddress(input);
  console.log(output);



function findAddress(obj) {
    const output = [obj.street, obj.house, obj.society];
    return output;
}

// Example usage:
const input = { street: 10, house: "-", society: "-" };
const output = findAddress(input);
console.log(output);






function findAddress(obj) {
    for (const property in obj) {
        console.log(`${obj[property]}`);
    }
}

const object = { street: 10, house: "15A", society: "Earth Perfect" };

findAddress(object);
function findAddress(obj) {
    for (const property in obj) {
        console.log(`${obj[property]}`);
    }
}

const object = { street: 10, house: "-", society: "Earth Perfect" };
findAddress(object);



function findAddress(obj) {
    for (const property in obj) {
        console.log(`${obj[property]}`);
    }
}

const object = { street: 10, house: "-", society: "-" };
findAddress(object);
