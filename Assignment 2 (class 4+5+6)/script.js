console.log ("--------------------------------QUESTION # 1--------------------------------")

                // function createAdder(closureNum) {
                //     function addNum(num) {
                //       return num + closureNum;
                //     }
                //     return addNum;
                //   }
                //   const add5 = createAdder(5);
                //   const add10 = createAdder(10);
                //   console.log(add5(3));  
                //   console.log(add10(7)); 

let sum = function(a){
        let c = 6
        return function (b){
            return a+b+c
        }
    }
    let store = sum (9)
    console.log(store(5))


console.log ("--------------------------------QUESTION # 2--------------------------------")

function searchArray(arr, value) {
    if (arr.length === 0) {
      return false; 
    }
    if (arr[0] === value) {
      return true; 
    }
    return searchArray(arr.slice(1), value); 
  }
  // Applying
  const arr = [2, 4, 6, 8, 10];
  console.log(searchArray(arr, 6)); 
  console.log(searchArray(arr, 5)); 


console.log ("--------------------------------QUESTION # 3--------------------------------")

function addParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    document.body.appendChild(paragraph);
  }
  function addNewParagraph() {
    const text = "This is a new paragraph.";
    addParagraph(text);
  }
  console.log ("Press button to add paragraph")

  
console.log ("--------------------------------QUESTION # 4--------------------------------")

function addListItem(text) {
    const listItem = document.createElement("li");
    listItem.textContent = text;
    const ul = document.getElementById("myList");
    ul.appendChild(listItem);
  }
  function addNewListItem() {
    const text = "New List Item";
    addListItem(text);
  }
  console.log ("Press button to add new item")


console.log ("--------------------------------QUESTION # 5--------------------------------")

function changeColor() {
    let element = document.getElementById("myElement");
    element.style.backgroundColor = "blue";
  }
  console.log ("Press button to change red color to blue")
  

console.log ("--------------------------------QUESTION # 6--------------------------------")

function saveObjectToLocalStorage(key, obj) {
    const jsonString = JSON.stringify(obj);
    localStorage.setItem(key, jsonString);
}
// Applying
const myObject = { name: "KAIF", age: 20, city: "Faisalabad" };
saveObjectToLocalStorage("myKey", myObject);
  console.log ("Check Local Storage for Results")


console.log ("--------------------------------QUESTION # 7--------------------------------")

function getObjectFromLocalStorage(key) {
    const jsonString = localStorage.getItem(key);
    const obj = JSON.parse(jsonString);
    return obj;
  }
  // Applying
const myKey = 'myKey';
const retrievedObject = getObjectFromLocalStorage(myKey);
console.log(retrievedObject); 


console.log ("--------------------------------QUESTION # 8--------------------------------")

function saveObjectPropertiesToLocalStorage(obj) {
    for (const prop in obj) {
      if (typeof obj[prop] !== "function") {
        localStorage.setItem(prop, JSON.stringify(obj[prop]));
      }
    }
    const retrievedObj = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      retrievedObj[key] = value;
    }
    return retrievedObj;
  }
// Applying
const myObject1 = { name: "KAIF", age: 20, city: "Faisalabad" };
const retrievedObject1 = saveObjectPropertiesToLocalStorage(myObject);
console.log(retrievedObject); 