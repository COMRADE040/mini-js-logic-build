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