/**
 * BMI LOGIC CREATED BY ME
 * FORMULA Research From Google or Help For Chatgpt
 */

{
  const user_input_weight = prompt('Enter Your Weight in Valid Number');
  const user_input_Height = prompt('Enter Your Height in Centimeter valid Number');
  const height_divide = user_input_Height / 100;
  if(isNaN(user_input_Height) && isNaN(user_input_weight)){
      console.log("You Entered invalid weight or height Plz Enter Your Valid Height or Weight");
  }
  else if(user_input_weight > 25){
      const result_Bmi = user_input_weight / (height_divide * height_divide);
      if(result_Bmi < 18.5){
        console.log("You Are UnderWeight.")
        console.log('Your BMI Result : ' + result_Bmi.toFixed(1))
      }else if(result_Bmi >= 18.5 && result_Bmi <= 24.9){
          console.log("You are Normal")
        console.log('Your BMI Result : ' + result_Bmi.toFixed(1))
      }
      else if(result_Bmi >= 25 && result_Bmi <= 29.9){
        console.log("You are OverWeight")
        console.log('Your BMI Result : ' + result_Bmi.toFixed(1))
      }
      else{
        console.log("You are Obsessed")
          console.log('Your BMI Result : ' + result_Bmi.toFixed(1))
      }
  }
  else{
      console.log("Enter Your Acceptable Input")
  }



}








/**
 * School/ College Valid Grading System
 * 
 */
{

    const result = Number(prompt("Enter Your result"));
    if(result >= 101){
        console.log('Enter Valid Number')
    }
    else if(result >= 90){
        console.log("A+")
    }
    else if(result >= 80){
        console.log("A")
    }
    else if(result >= 70){
        console.log("B")
    }
    else if(result >= 60){
        console.log("C")
    }
    else if(result >= 50){
        console.log("D")
    }
    else if(result >= 40){
        console.log("E")
    }
    else{
        console.log("You Are Failed")
    }


}







/**
 * Nested if Else
 * 
 */

{

    const mark = 50;
    const friendMark = 30;
    
    if(mark >= 80){
        if(friendMark >= 80){
            console.log('Eksathe Lunch Korba')
        }else if(friendMark >= 60){
            console.log('good Luck')
        }
        else if(friendMark >= 40){
            console.log("unseen Message")
        }
        else{
            console.log("BLOCK MY FRIEND")
        }
    }else{
        console.log("I am sad")
    }
    
}










/**
 * Ternary Operator
 * 
 */

{

    let num1 = 40;
    let num2 = 20;
    
    let result;
    result = num1 >= num2 ? console.log(num1 * 2) : console.log(num1 + num2)
    
    
}





/**
 * Ticket fare Calculator
 * nested if else
 */
{

    
    const age = 50;
    const isStudent = false
    const tickePrice = 800;
    
    
    if(age <= 10){
        console.log("Your Ticket was free")
    }
    else if(isStudent){
        const discountAmount = tickePrice * 50 / 100
        const payAmount = tickePrice - discountAmount
        console.log(payAmount)
    }
    else if(age > 60){
        const discountAmount = tickePrice * 15 / 100
        const payAmount = tickePrice - discountAmount
        console.log(payAmount)
    }
    
    else{
        console.log(tickePrice)
    }
    
}



let x = 10
if(x < 15){
    console.log('5-15')
}






//While Loop



let num = 81;
let sum = 0

while(num <= 131){
    if(num % 2 === 1){
        console.log("Odd Number: ", num)
        sum = sum + num;
        console.log(sum)
    }
    num++
}




let number = 206;
let total = 0;
while(number <= 311){
    if(number % 2 === 0){
        console.log('Even: ', number)
        total = total + number
        console.log(total)
    }
    number++
}

let multiply = 1;
for(let i = 1; i <= 10; i++){
    while(multiply <= 50){
        
        if(multiply % 5 === 0){
            
        }
        multiply++
    }
    console.log("5", "X", i, "=", multiply)
}












// loop using break, continue, if else, do while, while




for(let i = 0; i < 20; i++){
    console.log(i)
    if(i >= 10){
        break;
    }
}



let n = 54;

while(n > 30){
    console.log(n)
    if(n <= 35){
        break
    }
    n--
}



for (let i = 1; i < 20; i++){
    console.log(i)
    if(i >= 5){
        break;
    }

}



let v = 100;
do{
    console.log(v)
    v++
}while(v <= 110)




    let century = 1;
    let sums = 0
    while(century <= 4){
        console.log(century)
        if(sums > 5){
            break;
        }
        sums = sums + century
        console.log(sums)
        century++
    }




    let z = 0;
while(z < 100){
    z++;
   if(z % 5 !== 0){
    if(z !== 85 && z !== 55){
        continue;
    }
   } 
   console.log(z)
}


for(let i = 1; i < 40; i++){
    if(i % 2 !== 0){
        continue
    }
    console.log(i)
}



for(let i = 55; i <= 85; i++){
    if(i % 5 === 0){
        continue
    }
    console.log(i)
}