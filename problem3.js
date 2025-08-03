/** Problem -03 ( Medicine Planner ) */
var lastDay = 6 ;
//write your code here
var i=1;

while(i<=lastDay){
    if(i%3===0){
        console.log(i,"- medicine");
    }
    else{
        console.log(i,"- rest");
    }
   i++;
}
