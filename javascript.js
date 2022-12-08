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
    }else if(operator==='x'){
        return multiply(num1,num2)
    }else if(operator==='/'){
        if(num2==='0'){
            return 'Error'; 
        }else{
            return divide(num1,num2)
        };
    };
};
let equationScreen= document.querySelector('.equation-screen');
let answerScreen=document.querySelector('.answer-screen');
let equationArr=[];

window.addEventListener('click', function(e){
    let sectionClicked=(e.path[0].localName); //ex. 'button'
    if(sectionClicked!=='button'){
        return
    }
    let buttonClicked=e.target.outerText; //ex. '6', text of button
    equationArr.push(buttonClicked);//pushed clicked buttons into array

    console.log(equationArr);/////////

    let checkForSign=(button)=>{
        return (button==='+'||button==='-'||button==='x'||button==='/');
    };

    let joinedNumbers= equationArr.join('');//joins numbers to make string
    equationScreen.textContent= joinedNumbers;

    let indexOfSign= equationArr.findIndex(checkForSign);//returns index of first operator  
    if(indexOfSign<0){
        return
    };
    let operatorClicked=equationArr[indexOfSign];//operator sign clicked on
    let number1Clicked= Number((equationArr.slice(0,(indexOfSign))).join(''));
    let number2Clicked= Number((equationArr.slice((indexOfSign+1),(equationArr.length-1))).join(''));
    let solution=(operate(number1Clicked,operatorClicked,number2Clicked));



    if(buttonClicked==='='){
        equationScreen.textContent=(`${number1Clicked} ${operatorClicked} ${number2Clicked} = ${solution}`);
        answerScreen.textContent=solution;
        equationArr.splice(0,(equationArr.length-1),solution);
        equationArr.pop();
    };

    let equalFreq= (equalButtonNew)=>{
        return (equalButtonNew==='=')
    };
    
    let buttonFreq= (buttonNew)=>{
        return (buttonNew==='+'||buttonNew==='-'||buttonNew==='x'||buttonNew==='/')
    };
    let operatorFreqArr= equationArr.filter(buttonFreq);
    let operatorFreqLength= operatorFreqArr.length;

    if ((buttonClicked==='+'||buttonClicked==='-'||buttonClicked==='x'||buttonClicked==='/')&& (operatorFreqLength>1)){
        equationArr.splice(0,(equationArr.length-1),solution);
        equationScreen.textContent=(`${solution} ${buttonClicked}`);
        answerScreen.textContent=solution;
    };

    // console.log(number1Clicked);
    // console.log(operatorClicked);


    
});

//when user clicks operator, seperate the array between number-operator-number.
//find out which operator user clicked
//put it in readout form
//plug it into operation() function

//operate(number1Clicked,(operatorClicked), number2Clicked)