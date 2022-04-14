//객체야 안녕?
const user ={
    name : "John",
    surname : "Smith"
}

user.name = "Pete";
delete user.name;

//객체가 비어있는지 확인하기
let schedule ={};

function isEmpty(obj){
    if(obj.key === undefined){
        return true;
    }
    else{
        return false;
    }
}

// function isEmpty(obj) {
//     for (let key in obj) {
//       // if the loop has started, there is a property
//       return false;
//     }
//     return true;
//   }

console.log(isEmpty(schedule));

//변하지 않는 객체?
const person ={
    name : "John"
};
person.name = 'Pete';
    //변할 수 있다. 그 안에 있는 내용도 const가 되는 건 아님

//프로퍼티 합계 구하기
let salaries ={
    John :100,
    Ann: 160,
    Pete: 130
}

const sum = salaries.John + salaries.Ann + salaries.Pete;
let sum2 = 0;
for (let key in salaries){
    sum2 += salaries[key];
}

//프로퍼티 값 두배로 불리기
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function mulitplyNumeric(obj){
      for(let key in obj){
        if(typeof(obj[key]===Number)){
         obj[key] *= 2
          }
        return obj
    }
 }
  

  console.log(mulitplyNumeric(menu));