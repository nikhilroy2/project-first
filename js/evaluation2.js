// it's for localstorage attemps..
var evaluation2attamps = 0;

function submitAnswers() {
  // This is the total of questions so we can loop through all of thems and at the end show a result.
    var totalQuestions = 4;
    
    // Score 0 to display the puntuation, each correct answer adds 1.
    var score = 0;
    
    // Array of all the answers in order of the questions from top to bottom.
    var answers = ['a', 'c'];
    
    // Takes the value of the selected radio button with the  name q1, q2, q3 from the form 'form'.
    var q1 = document.forms['form']['q1'].value;
    var q2 = document.forms['form']['q2'].value;
    var q3 = document.forms['form']['q3'].value;
    var q4 = document.querySelector('option[value="volvo"]');
    var optionScore;
    if (q4.selected == true) {
        optionScore = 1;
    } else {
        optionScore = 0;
    }
    
    
    // Loops through all the answers
    for (var i = 1; i < totalQuestions+1; i++) {
      //Evaluates if q1, q2, q3 is null or empty
      if (eval('q'+i) == null || eval('q'+i) == '') {
        alert('You did not answer the question number ' + i);
        // Returns false so the form is not send.
        return false;
        // if is not null or empty
      } else {
        // Evaluates if the selection is the same as the answer inside the array of the answers.
        if (eval('q'+i) === answers[i-1]) {
          // If correct then adds 1 to the score.
          score += 1;
        };
      };
    };


    
    var scoreResult = optionScore +  score + 1;
    // web storage the answer..
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('evaluation2Score', scoreResult);
      evaluation2attamps++
      localStorage.setItem('evaluation2attamps', evaluation2attamps);
    } 
    // important for web storage above statement.
    // variable declare
    var txtFieldScore;
    var qr3AnsState = document.querySelector('.qr3Answer');
    if ((qr3AnsState.value == 'clean water') || (qr3AnsState.value == 'drug') || (qr3AnsState.value == 'economic') || (qr3AnsState.value == 'food')) {
      qr3AnsState.style.background = 'blue';
      qr3AnsState.style.color = 'white';
      txtFieldScore = 1;
    } else {
      qr3AnsState.style.background = 'red';
      qr3AnsState.value = 'clean water';
      txtFieldScore = 0;

    }
    // Alerts how many correct answers you got.
    alert('Your score is: ' + (scoreResult - 1 + txtFieldScore) + ' out of ' + totalQuestions + '\n' + 
            'Wrong Answer : ' + (totalQuestions - (scoreResult - 1 + txtFieldScore)));
            

            //


            
      var wrong_label = document.querySelectorAll('.wrong_label');
      for (var i = 0; i < wrong_label.length; i++) {
        wrong_label[i].classList.toggle('ans_item');
      };
      var qrResult = document.querySelectorAll('.qrResult');
    
      for (var i = 0; i < qrResult.length; i++) {
        qrResult[i].classList.toggle('qrResultShow');
   
      };

      // need time............


      
      // for yes and no select option.........
      var optionSelectYes = document.querySelector('option[value="volvo"]'); 
     // var optionSelectNo = document.querySelector('option[value="saab"]');
      var parentSelect = document.querySelector('.qr4Answer');
      console.log(parentSelect);
      var qr3Anstoggle = document.querySelector('.qr3Answer');
      
      if (optionSelectYes.selected == true) {
        parentSelect.classList.toggle('qrResultShow');
        qr3Anstoggle.classList.toggle('qr3Anstoggle')
      } 
      else {
        parentSelect.classList.toggle('ans_item');

      }
      
            //

            //

  
    return false;
    
  };

    var btnStyleCreate = document.createElement('style');
    btnStyleCreate.innerHTML = '.ans_item{opacity: .4; pointer-event: none; user-select: none; text-decoration: line-through;} \
                                 .qrResultShow{background: blue; color: white;}'

    document.head.appendChild(btnStyleCreate);
    
    //toggle show answer..

 // reset button
 function resetBtn(){
  localStorage.removeItem('evaluation2attamps');

  var wrong_label = document.querySelectorAll('.wrong_label');
  for (var i = 0; i < wrong_label.length; i++) {
    wrong_label[i].classList.remove('ans_item');
  };
  var qrResult = document.querySelectorAll('.qrResult');

  for (var i = 0; i < qrResult.length; i++) {
    qrResult[i].classList.remove('qrResultShow');

  };
  document.querySelector('.qr3Answer').style.background = 'transparent';
  document.querySelector('.qr4Answer').style.background = 'transparent';
   return confirm('Are you sure to delete all information?')
 }

 // only type input letter
 function letterinputFunction(inputletter){
   var ltrinput= /[^a-z ]/gi
   inputletter.value = inputletter.value.replace(ltrinput, '');
 }