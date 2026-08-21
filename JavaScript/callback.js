// function sum(a,b){
//     return a+b;
// }
// function sumWithMsg(clbk, msg){
//     const result = clbk(20,30);
//     const fresult = "Hi! " + msg + ", your score is: "+ result;
//     console.log(fresult);
// }
// sumWithMsg(sum, "Mr. Deepak");

function authorize(name, password){
    if (name==="Aditya" && password==="admin123"){
        return "authorized";
    } else {
        return "unauthorized";
    }
}

function authorizeWithMsg(clbk, msg){
    const result = clbk("Rohit", "admin123");
    
    const finalresult = "Hi! " + msg + ", "+ result;
    console.log(finalresult);
}
authorizeWithMsg(authorize, "You are");