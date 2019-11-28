// showScore function will show the score inside alert


// it's for localstorage attemps;
var evaluation1attamps = 0;


function showScore() {
    var totalQuestions = 5; //total question
    
    var score = 0; // score default
 


    // question 1;
    var qr1Score = 0;
    var qr1Scorerr = document.querySelector('.sun');
    if (qr1Scorerr.checked) {
      qr1Score = 1;
    }
      // alert question 1;
      else if(!(document.forms['form']['q1'][0].checked) && !(document.forms['form']['q1'][1].checked) && !(document.forms['form']['q1'][2].checked)){
        alert('You did not answer the question number 1');
        return false;
  
      }
    else {
      qr1Score = 0;
    }

    //question 2
    var qr2Score = 0;
    var qr2rr0 = document.forms['form']['q2'][0]; //right answer
    var qr2rr1 = document.forms['form']['q2'][1]; //wrong answer
    var qr2rr2 = document.forms['form']['q2'][2]; //right answer
   
    //false && true && true;
     if ( !(qr2rr1.checked) && qr2rr0.checked && qr2rr2.checked ) {
      qr2Score = 1;
    } 
    // alert question 2;
    else if(!(document.forms['form']['q2'][0].checked) && !(document.forms['form']['q2'][1].checked) && !(document.forms['form']['q2'][2].checked)){
      alert('You did not answer the question number 2');
      return false;

    }
     else {
      qr2Score = 0;
    }


    // question 3;
    var qr3Score = 0;
    var qr3Scorerr = document.querySelector('.celluloser');
    if (qr3Scorerr.checked) {
      qr3Score = 1;
    }
  // alert question 3;
  else if(!(document.forms['form']['q3'][0].checked) && !(document.forms['form']['q3'][1].checked) && !(document.forms['form']['q3'][2].checked)){
    alert('You did not answer the question number 3');
    return false;

  }
   else {
      qr3Score = 0;
    }
     // question 4;
     var qr4Score = 0;
     var qr4Scorerr = document.querySelector('.nucleus');
     if (qr4Scorerr.checked) {
       qr4Score = 1;
     }
      // alert question 1;
      else if(!(document.forms['form']['q4'][0].checked) && !(document.forms['form']['q4'][1].checked) && !(document.forms['form']['q4'][2].checked)){
        alert('You did not answer the question number 4');
        return false;
  
      } else {
       qr4Score = 0;
     }
      // question 5;
    var qr5Score = 0;
    var qr5Scorerr = document.querySelector('.drayer');
    if (qr5Scorerr.checked) {
      qr5Score = 1;
    } 
     // alert question 1;
     else if(!(document.forms['form']['q5'][0].checked) && !(document.forms['form']['q5'][1].checked) && !(document.forms['form']['q5'][2].checked)){
      alert('You did not answer the question number 5');
      return false;

    }
    else {
      qr5Score = 0;
    }

    var scoreResult = qr1Score +  qr2Score + qr3Score + qr4Score + qr5Score;
    // web storage the answer..
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('evaluation1Score', scoreResult);
      evaluation1attamps++
        localStorage.setItem('evaluation1attamps', evaluation1attamps);
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
      qrResult[i].classList.toggle('qrResultShow')
    };

            //

            //

    return false;
    
  };


  // show question result with answer mark/
  
  var btnStyleCreate = document.createElement('style');
  btnStyleCreate.innerHTML = '.ans_item{opacity: .4; pointer-event: none; user-select: none; text-decoration: line-through; } \
                               .qrResultShow{background: blue; color: white;}'
  document.head.appendChild(btnStyleCreate);
  
  //toggle show answer..

 //
 //reset button
 function resetBtn() {
   localStorage.removeItem('evaluation1attamps');
   var wrong_label = document.querySelectorAll('.wrong_label');
   for (var i = 0; i < wrong_label.length; i++) {
     wrong_label[i].classList.remove('ans_item');
   };
   var qrResult = document.querySelectorAll('.qrResult');
   for (var i = 0; i < qrResult.length; i++) {
     qrResult[i].classList.remove('qrResultShow')
   };
  return confirm('Are you Sure to Delete all Information?');

 }