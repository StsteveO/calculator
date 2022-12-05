console.log('Hello world!');

let plus=(a,b)=>{
    let arr=[a,b];
    let sum= arr.reduce((prev, curr)=>{
        return prev+curr;
    });
    return sum;
};
//
let minus=(a,b)=>{
    let arr=[a,b];
    let diff= arr.reduce((prev, curr)=>{
        return prev-curr;
    });
    return diff;
};
//
let multiply=(a,b)=>{
    let arr=[a,b];
    let prod= arr.reduce((prev, curr)=>{
        return prev*curr;
    });
    return prod;
};
//
let divide=(a,b)=>{
    let arr=[a,b];
    let quo= arr.reduce((prev, curr)=>{
        return (prev/curr);
    });
    return quo;
};
//
let operate=(num1,operator,num2)=>{
    if(operator==='+'){
        return plus(num1,num2);
    }else if(operator==='-'){
        return minus(num1,num2);
    }else if(operator==='*'){
        return multiply(num1,num2)
    }else if(operator==='/'){
        if(num2===0){
            return 'Error'; 
        }else{
            return divide(num1,num2)
        };
    };
};
console.log(operate(75,'/',0));

let equationScreen= document.querySelector('.equation-screen');

window.addEventListener('click', function(e){
    let readOut=(e.path[0].localName); //ex. 'button'
    if(readOut!=='button'){
        return
    }else{
        equationScreen.textContent=(e.target.outerText); //ex. '6'
    };
});