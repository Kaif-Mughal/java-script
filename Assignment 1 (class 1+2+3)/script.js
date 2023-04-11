console.log ("--------------------------------QUESTION # 1--------------------------------")

        let num1 = prompt ("Give number-1 for comparison");
        let num2 = prompt ("Give number-2 for comparison");
        if (num1 > num2) {
            console.log (num1 + " is greater than " + num2)
        } else if (num2 > num1) {
            console.log (num2 + " is greater than " + num1)
        } else {
            console.log (num2 + " is equal to " + num1)
        }


console.log ("--------------------------------QUESTION # 2--------------------------------")

             // let integer = +prompt ("Enter a +ive or -ive number")
             // if (integer * -1 === integer) {
             //     console.log("The sign is -")
             // } else {
             //     console.log("The sign is +")
             // }

        let integer = +prompt ("Enter a +ive or -ive number")
        if (integer >= 0) {
            console.log("The sign is +")
        } else {
            console.log("The sign is -")
        }
        

console.log ("--------------------------------QUESTION # 3--------------------------------")

        let numb1 = prompt ("enter number-1");
        let numb2 = prompt ("enter number-2");
        let numb3 = prompt ("enter number-3");
        let numb4 = prompt ("enter number-4");
        let numb5 = prompt ("enter number-5");

        let largest = Math.max (numb1, numb2, numb3, numb4, numb5)
        console.log(largest + " is largest among " +numb1, numb2, numb3, numb4, numb5)


console.log ("--------------------------------QUESTION # 4--------------------------------")

        for (let i = 0; i <= 15; i++) {
                if (i % 2 === 0) {
                        console.log(i + " is even")
                } else {
                        console.log(i + " is odd")
                }
        }

console.log ("--------------------------------QUESTION # 5--------------------------------")

        let value = prompt ("Enter your numbers out of 100")
        if (value < 60) {
                console.log ("F Grade")
        }
        else if (value < 70) {
                console.log ("D Grade")
        }
        else if (value < 80) {
                console.log ("C Grade")
        }
        else if (value < 90) {
                console.log ("B Grade")
        }
        else if (value <= 100) {
                console.log ("A Grade")
        } else {
                console.log("Enter your correct numbers")
        }


console.log ("--------------------------------QUESTION # 6--------------------------------")

        for (let i = 0; i <= 100; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                        console.log("FizzBuzz")
                } else if (i % 3 === 0) {
                        console.log("Fizz")
                }else if (i % 5 === 0) {
                        console.log("Bizz")
                }else {
                        console.log(i)
                }
        }


console.log ("--------------------------------QUESTION # 7--------------------------------")

        for (let i = 1; i <=5; i++) {
                let row ="";
                for (let j = 1; j <= i; j++) {
                        row += "*  "
                }
                console.log (row)
        }
