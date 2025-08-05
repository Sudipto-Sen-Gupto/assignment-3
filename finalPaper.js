/** Problem -01 ( Divide the Asset ) */
// console.clear();
var area = 800;
//write your code here
console.log(area/2);


/** Problem -02 ( Cycle or Laptop ) */
// console.clear();
var money = 10000;
//write your code here
    if(money>=25000){
        console.log("Laptop");
    }
    else if(money>=10000){
        console.log("Cycle");
    }
    else{
        if(money<=0)
        {
            console.log("No money yet.");
        }
        else
        console.log("Chocolate");
    }


/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
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


/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
if(fileName.startsWith("#")|| fileName.endsWith(".pdf")|| fileName.endsWith(".docx")){
  console.log("Store");
}
else{
    console.log("Delete");
}


/** Problem 05 - ( PH Email Generator )  */
var student=  { name: "jhanku" , roll:1014,department:"cse"};
//write your code here
console.log(student.name.concat(student.roll).concat(".").concat(student.department).concat("@ph.ac.bd"));

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
console.log((startingSalary*(1+(5/100))**experience).toFixed(2));