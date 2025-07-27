/** 
 * BMI LOGIC CREATED BY ME 
 * FORMULA Research From Google or Help For Chatgpt
*/


const user_input_weight = prompt('Enter Your Weight in Valid Number');
const user_input_Height = prompt('Enter Your Height in Centimeter valid Number');
const height_divide = user_input_Height / 100;

if(isNaN(user_input_Height) && isNaN(user_input_weight)){
    console.log("You Entered invalid weight or height Plz Enter Your Valid Height or Weight");
}
else if(user_input_weight > 25){
    const result_Bmi = user_input_weight / (height_divide * height_divide);
    console.log('Your BMI Result : ' + result_Bmi.toFixed(1))
}
else{
    console.log("Enter Your Acceptable Input")
}









