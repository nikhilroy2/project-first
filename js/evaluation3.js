//it's for evaluation3 attamps;
var evaluation3attamps = 0;
function showScore() {
 


  // This is the total of questions so we can loop through all of thems and at the end show a result.
  var totalQuestions = 5;
  
  // Score 0 to display the puntuation, each correct answer adds 1.
  var score = 0;
  


  

// question 1

  var qrScore1 = 0;
  var qr1R0 = document.forms['form']['q1'][0];  // right answer
  var qr1R1 = document.forms['form']['q1'][1]; //wrong answer
  var qr1R2 = document.forms['form']['q1'][2]; // right answer

  // false  && true && true;
  if (!(qr1R1.checked) && qr1R0.checked && qr1R2.checked){
    qrScore1 = 1;
  }
  else if(!(document.forms['form']['q1'][0]).checked && !(document.forms['form']['q1'][1]).checked && !(document.forms['form']['q1'][2]).checked){
    alert('You did not answer the question number 1');
    return false;
  } else {
    qrScore1 = 0;
  }

//question 2

  var qrScore2 = 0;
  var qr2rr = document.forms['form']['q2'];
  if (qr2rr.value == 'root'){
    qr2rr.style.background = 'blue';
    qrScore2 = 1;
  }
 else if(qr2rr.value =='') {
    alert('You did not answer the question number 2');
    return false;
  } 
  else {
    qr2rr.style.background = 'red';
    qr2rr.value = 'root'
    qrScore2 = 0;
  }
 
 

//question 3
  var qrScore3 = 0;
  var qr3rr = document.forms['form']['q3'];
  for (var i = 0; i < qr3rr.length; i++) {
    if (qr3rr[i].checked) {
      qrScore3 = 1;
    }
    else if(!(document.forms['form']['q3'][0]).checked && !(document.forms['form']['q3'][1]).checked && !(document.forms['form']['q3'][2]).checked && !(document.forms['form']['q3'][3]).checked) {
      alert('You did not answer the question number 3');
      return false;

    } 
    else {
      qrScore3 = 0;
    }
  }
//question 4

//  var qrScore4 = '';
//  var qr4rr = document.forms['form']['q4'];
//  if (qr4rr.value == 'stem'){
//    qrScore4 = 1;
//  } 
//  else if(qr4rr.value == '') {
//    alert('You did not answer the question number 4');
//    return false;
//  }
//  else {
//    qrScore4 = 0;
//  }

//question 4
var qrScore4 = 0;
var qr4rr = document.forms['form']['q4'];

if (qr4rr.value == 'stem'){
  qr4rr.style.background = 'blue';
  qrScore4 = 1;
}
else if(qr4rr.value =='') {
  alert('You did not answer the question number 4');
  return false;
} 
else {
  qr4rr.style.background = 'red';
  qr4rr.value = 'stem'
  qr4core4 = 0;
}




 //question 5
 var qrScore5 = 0;
 var qr5rr = document.forms['form']['q5'][0];
 if (qr5rr.checked) {
   qrScore5 = 1;
 }
 else if(!(document.forms['form']['q5'][0].checked) && !(document.forms['form']['q5'][1].checked)){
   alert('You did not answer the question number 5');
   return false;
 } else {
   qrScore5 = 0;
 }


  var scoreResult =  (qrScore1 + qrScore2 + qrScore3 + qrScore4 + qrScore5);
  // web storage the answer..
  if (typeof(Storage) !== 'undefined') {
    localStorage.setItem('evaluation3Score', scoreResult);
    evaluation3attamps++
    localStorage.setItem('evaluation3attamps', evaluation3attamps);
  } 
  // important for web storage above statement.
  
  // Alerts how many correct answers you got.
  alert('Your score is: ' + scoreResult + ' out of ' + totalQuestions + '\n' + 
          'Wrong Answer : ' + (totalQuestions - scoreResult));
          

          
          // 

          
  var wrong_label = document.querySelectorAll('.wrong_label');
  for (var i = 0; i < wrong_label.length; i++) {
    wrong_label[i].classList.toggle('ans_item');
  };
  var qrResult = document.querySelectorAll('.qrResult');
  for (var i = 0; i < qrResult.length; i++) {
    qrResult[i].classList.toggle('qrResultShow');
    
  };




          //

          //

      


  return false;
  
};

  

// show Answer function...


var btnStyleCreate = document.createElement('style');
btnStyleCreate.innerHTML = '.ans_item{opacity: .4; pointer-event: none; user-select: none; text-decoration: line-through;} \
                             .qrResultShow{background: blue; color: white;}'
document.head.appendChild(btnStyleCreate);

//toggle show answer..


// reset button
function resetBtn(){
  localStorage.removeItem('evaluation3attamps');

  var wrong_label = document.querySelectorAll('.wrong_label');
  for (var i = 0; i < wrong_label.length; i++) {
    wrong_label[i].classList.remove('ans_item');
  };

  var qrResult = document.querySelectorAll('.qrResult');
  for (var i = 0; i < qrResult.length; i++) {
    qrResult[i].classList.remove('qrResultShow');
    
  };

  // question 2 reset
  document.forms['form']['q2'].style.background = 'transparent'
  // question 4 reset
  document.forms['form']['q4'].style.background = 'transparent';


  return confirm('Are you sure to delete all information?')
}
// input text only
function inputTextOnly(){
  if (isNaN('qr2rr')) {
    qr2rr
  }
}

// type letter only function input text
function letterinputFunction(inputletter){
  var ltrinput = /[^a-z ]/gi;
  inputletter.value = inputletter.value.replace(ltrinput, '');
}