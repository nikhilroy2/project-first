//
var log = console.log;
//
//
//form action...
var form_action = document.querySelector('#form_action');
// Submit Button....
var submitBtn = document.createElement('button');
var submitBtnTxt = document.createTextNode('Submit Now');
submitBtn.appendChild(submitBtnTxt);
var submitAttrName = ['type', 'style'];
var submitAttrValue = ['submit', 'cursor: pointer;']
for (var i = 0; i < submitAttrName.length; i++) {
    submitBtn.setAttribute(submitAttrName[i], submitAttrValue[i])
}
form_action.appendChild(submitBtn);
// Reset Button........
var resetBtn = document.createElement('button');
var resetBtnTxt = document.createTextNode('Reset Now');
resetBtn.appendChild(resetBtnTxt);
var resetAttrName = ['type', 'style'];
var resetAttrValue = ['reset', 'margin-left: 5px; cursor: pointer;'];
for (var i = 0; i < resetAttrName.length; i++) {
    resetBtn.setAttribute(resetAttrName[i], resetAttrValue[i])
}
form_action.appendChild(resetBtn);
//data-required......
var requi = document.querySelectorAll('[data-required="true"]');
for (var i = 0; i < requi.length; i++) {
    requi[i].setAttribute('required','true')
}
// //

// age input extra added...
var ageP = document.createElement('p');
form_action.insertBefore(ageP, submitBtn)
ageP.innerHTML = 'Age: ' + ' <input required type="number" id="ageInput" >'

//
//

// submit and reset button alert create;;;;


// submit button onclick event...
// var fileFInput = document.querySelector('[type="file"]');
var nameFInput = document.querySelector('[type="text"]');
var dateFInput = document.querySelector('[type="date"]');
var genderFInput = document.querySelector('select[name="gender"]');
var ageFInput = document.querySelector('input[id="ageInput"]')


submitBtn.onclick = function() {
    // if (fileFInput.value === '') {
    //     alert('Please Enter Your Profile Picture')
    // } 
     if (nameFInput.value === '') {
        alert('Please Enter Your Name')
    } 
    else if (dateFInput.value === '') {
        alert('Please Enter Your Date of Birth')
    } 
    else if (genderFInput.value === '') {
        alert('Please Enter Your Gender')
    } 
    else if (ageFInput.value === '') {
        alert('Please Enter Your Age')
    }  
   
    
}

// reset button  onclick event...

resetBtn.onclick = function() {
    return confirm('Are you Sure to Delete all Information?')
}

// localstore to sessionstore inside table
//evaluation1Score
var evaluation1Score = document.querySelector('#evaluation1Score');
if(evaluation1Score.innerHTML == '') {
    evaluation1Score.innerHTML = 0 + '/' + 5
} else {
    evaluation1Score.innerHTML; 
}
//evaluation2Score
var evaluation2Score = document.querySelector('#evaluation2Score');
if(evaluation2Score.innerHTML == '') {
    evaluation2Score.innerHTML = 0 + '/' + 4
} else {
    evaluation2Score.innerHTML; 
}
//evaluation3Score
var evaluation3Score = document.querySelector('#evaluation3Score');
if(evaluation3Score.innerHTML == null +'/' +'5') {
    evaluation3Score.innerHTML = '0' + '/' + 5
} else {
    evaluation3Score.innerHTML; 
}
//result the score
evaluation1Score.innerHTML = localStorage.getItem("evaluation1Score") / 5;
evaluation2Score.innerHTML = localStorage.getItem("evaluation2Score") / 4;
evaluation3Score.innerHTML = localStorage.getItem("evaluation3Score") / 5;



// evaluation attamps..
//evaluation1..
var evaluation1attamps = document.querySelector('#evaluation1attempts');
evaluation1attamps.innerHTML = localStorage.getItem('evaluation1attamps');
if(evaluation1attamps.innerHTML < 1) {
    evaluation1attamps.innerHTML = 0;
} else {
    evaluation1attamps.innerHTML;
}
//evaluation2..
var evaluation2attamps = document.querySelector('#evaluation2attempts');
evaluation2attamps.innerHTML = localStorage.getItem('evaluation2attamps');
if(evaluation2attamps.innerHTML < 1) {
    evaluation2attamps.innerHTML = 0;
} else {
    evaluation2attamps.innerHTML;
}
//evaluation3..
var evaluation3attamps = document.querySelector('#evaluation3attempts');
evaluation3attamps.innerHTML = localStorage.getItem('evaluation3attamps');
if(evaluation3attamps.innerHTML < 1) {
    evaluation3attamps.innerHTML = 0;
} else {
    evaluation3attamps.innerHTML;
}
// letter input function to restrict number and letter only

function letterinputFunction(input) {
    var ltr = /[^a-z ]/gi;
    input.value = input.value.replace(ltr, '');
}

/*
//
//
// input to oninput inside table show....

//for name value
nameFInput.oninput = function(event) {
    document.querySelector('#nameValue').innerHTML = event.target.value;
}
// for date of birth

dateFInput.oninput = function(event) {
    document.querySelector('#birthValue').innerHTML = event.target.value;
}

// for gender ...

genderFInput.oninput = function(event) {
    document.querySelector('#genderValue').innerHTML = event.target.value;
}
// for age 

ageFInput.oninput = function(event) {
    document.querySelector('#ageValue').innerHTML = event.target.value;
}
// for web storage question score declare.
var qrScore = document.querySelector('span#qrScore');
qrScore.innerHTML = localStorage.getItem('totalScore')

*/
