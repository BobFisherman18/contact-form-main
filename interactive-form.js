const enquiryField = document.getElementById('gen-enquiry-field');
const enquiry = document.getElementById('gen-enquiry');
const requestField = document.getElementById('s-request-field');
const request = document.getElementById('s-request');
const inputs = document.querySelectorAll('input, textarea')
const errors = document.getElementsByClassName('errorStates');
const queryField = document.getElementById('q-type-field');
const consentBox = document.getElementById('consentBox');
const ErrorFlags = {
  nameError: true,
  emailError: true,
  queryError: true,
  messageError: true,
  consentError: true
}
//console.log(Object.values(ErrorFlags));

const noErrors = new Map([
  ["errorDisplay", "none"],
  ["inputBorder", "hsl(186, 15%, 59%)"],
  ["inputMB", "20px"],
  ["inputRadio&checkbox", "0"],
  ["inputMBText", "35px"],
  ["inputMBCheckbox", "30px"]
]);

const errorStates = new Map([
  ["inputBorderColor", "hsl(0, 66%, 54%)"],
  ["errorDisplayBlock", "block"],
  ["errorDisplay", "inline-block"],
  ["inputMBError", "5px"],
  ["nameErrorText", "Name cannot contain numbers!"],
  ["nameErrorLength", "Name cannot have one letter!"],
  ["emailErrorAt", "Email must contain an @ symbol!"],
  ["emailErrorLength", "Email address cannot have one letter!"]
]);

window.addEventListener('resize', function () {
  if(screen.width < 768){
      //console.log("hi");
      message.setAttribute('rows', "10");
  }else {
      //console.log("no");
      message.setAttribute('rows', "5");
  }
});

//console.log(errors);

function queryClicked() {

var query = document.querySelector('input[name="query"]:checked');
let queryValue = query.value;

switch (queryValue) {
    case "gen-enquiry":
        enquiryField.style.backgroundColor = "hsl(148, 38%, 91%)";
        enquiryField.style.borderColor = "hsl(169, 82%, 27%)";

        requestField.style.backgroundColor = " hsl(0, 100%, 100%)";
        requestField.style.borderColor = "hsl(186, 15%, 59%)";
        break;
      case "s-request":
        requestField.style.backgroundColor = "hsl(148, 38%, 91%)";
        requestField.style.borderColor = "hsl(169, 82%, 27%)";

        enquiryField.style.backgroundColor = " hsl(0, 100%, 100%)";
        enquiryField.style.borderColor = "hsl(186, 15%, 59%)";
        break;
}


}

function checkInputFields() {
  const inputTypesSorted = {};
  for (let x of inputs) {
    //console.log(x);
    let inputTypes = x.type;
    //console.log(inputTypes);
    switch (inputTypes) {
      case "text":
        const textInputs = [];
        textInputs.push(x);
        textInputs.push(inputs[0]);
        //console.log(textInputs); 
        inputTypesSorted.text = textInputs;   
        break;
      case "email":
        inputTypesSorted.email = x;
        break;
      case "radio":
        const radioInputs = [];
        radioInputs.push(x);
        radioInputs.push(inputs[3]);
        //console.log(radioInputs); 
        inputTypesSorted.radio = radioInputs;   
        break;
      case "textarea":
        inputTypesSorted.textarea = x;
        break;
      case "checkbox":
        inputTypesSorted.checkbox = x;
        break;
    }
  }
  return inputTypesSorted;
}
let inputFields = checkInputFields();
//console.log(inputFields);

let convertErrors = Array.from(errors);

//console.log(convertErrors);

function checkNames() {
  const names = inputFields.text;
  //slice() method creates new array!
  let reverseNames = names.slice().reverse();
  //console.log(reverseNames);
  let nameErrorFields = convertErrors.slice(0, 2);
  //console.log(nameErrorFields);
  
  for (let y in reverseNames) {
    //console.log(names[y]);
    //console.log(names.length);
    
    let values = reverseNames[y].value;
    let txtLength = values.length;
    //console.log(values);

    if (values == "") {
      //console.log(reverseNames);
      //console.log(values);
      reverseNames[y].style.borderColor = errorStates.get("inputBorderColor");
      reverseNames[y].style.marginBottom = errorStates.get('inputMBError');
      nameErrorFields[y].style.display = errorStates.get('errorDisplay');
      ErrorFlags.nameError = true;
    }
    
    else if (txtLength == 1) {
      reverseNames[y].style.borderColor = errorStates.get("inputBorderColor");
      nameErrorFields[y].style.display = errorStates.get('errorDisplay');
      nameErrorFields[y].textContent = errorStates.get('nameErrorLength');
      reverseNames[y].style.marginBottom = errorStates.get('inputMBError');
      ErrorFlags.nameError = true;
    }
    
    else {
      const pattern = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/igm;
      let txtError = pattern.test(values);
      //console.log(txtError);
      if (txtError == false) {
          reverseNames[y].style.borderColor = errorStates.get('inputBorderColor');
          nameErrorFields[y].style.display = errorStates.get('errorDisplay');
          nameErrorFields[y].textContent = errorStates.get('nameErrorText');
          reverseNames[y].style.marginBottom = errorStates.get('inputMBError');
          ErrorFlags.nameError = true;
      }
      else {
        reverseNames[y].style.borderColor = noErrors.get('inputBorder');
        nameErrorFields[y].style.display = noErrors.get('errorDisplay');
        reverseNames[y].style.marginBottom = noErrors.get('inputMB');
        ErrorFlags.nameError = false;
      }
    }
    
  } 
}
function checkEmail() {
  const email = inputFields.email;
  let values = email.value;
  let txtLength = values.length;
  let emailErrorField = convertErrors.slice(2, 3);

  if (values == "") {
    email.style.borderColor = errorStates.get('inputBorderColor');
    emailErrorField[0].style.display = errorStates.get('errorDisplay');
    email.style.marginBottom = errorStates.get('inputMBError');
    ErrorFlags.emailError = true;
  }
  else if (txtLength == 1){
    email.style.borderColor = errorStates.get('inputBorderColor');
    emailErrorField[0].style.display = errorStates.get('errorDisplay');
    emailErrorField[0].textContent = errorStates.get('emailErrorLength');
    email.style.marginBottom = errorStates.get('inputMBError');
    ErrorFlags.emailError = true;
  }
  else { 
    //console.log(inputs[i]);
    const pattern = /@/igm;
    let txtError = pattern.test(values);
    //console.log(txt);
    if (txtError == false) {
        //console.log(txtError);
        email.style.borderColor = errorStates.get('inputBorderColor');
        emailErrorField[0].style.display = errorStates.get('errorDisplay');
        emailErrorField[0].textContent = errorStates.get('emailErrorAt');
        email.style.marginBottom = errorStates.get('inputMBError');
        ErrorFlags.emailError = true;
    }
    else {
        email.style.borderColor = noErrors.get('inputBorder');
        emailErrorField[0].style.display = noErrors.get('errorDisplay');
        email.style.marginBottom = noErrors.get('inputMB');
        ErrorFlags.emailError = false;
    }
  }
}

function checkQuery() {
  const queries = inputFields.radio;
  //console.log(queries);
  //slice() method creates new array!
  let reverseQueries = queries.slice().reverse();
  //console.log(reverseQueries);
  let queryErrorFields = convertErrors.slice(3, 4);
  //console.log(queryErrorFields);
  for (let z in reverseQueries) {
    //console.log(reverseQueries[z].checked);

    if (reverseQueries[0].checked == false && reverseQueries[1].checked == false) {
      queryErrorFields[0].style.display = errorStates.get("errorDisplayBlock");
      queryField.style.marginBottom = errorStates.get('inputMBError');
      ErrorFlags.queryError = true;
    }
    else {
      queryErrorFields[0].style.display = noErrors.get('errorDisplay');
      queryField.style.marginBottom = noErrors.get("inputMB");
      ErrorFlags.queryError = false;
    }
  }
}
function checkMessage() {
  const message = inputFields.textarea;
  let values = message.value;
  let messageErrorFields = convertErrors.slice(4,5);
  if (values == "") {
    message.style.borderColor = errorStates.get('inputBorderColor');
    message.style.marginBottom = errorStates.get("inputMBError");
    messageErrorFields[0].style.display = errorStates.get('errorDisplay');
    ErrorFlags.messageError = true;
  }
  else {
    message.style.borderColor = noErrors.get('inputBorder');
    message.style.marginBottom = noErrors.get('inputMBText');
    messageErrorFields[0].style.display = noErrors.get('errorDisplay');
    ErrorFlags.messageError = false;
  }
}

function checkConsent() {
  const consent = inputFields.checkbox;
  let consentErrorField = convertErrors.slice(5, 6);

  if (consent.checked == false) {
    consentBox.style.marginBottom = errorStates.get('inputMBError');
    consentErrorField[0].style.display = errorStates.get("errorDisplay");
    ErrorFlags.consentError = true;
  }
  else {
    consentErrorField[0].style.display = noErrors.get('errorDisplay');
    consentBox.style.marginBottom = noErrors.get("inputMBCheckbox");
    ErrorFlags.consentError = false;
  }

}
//console.log(ErrorFlags);
//checkConsent();
//checkMessage();
//checkQuery();
//checkEmail();
//checkNames();


// Example starter JavaScript for disabling form submissions if there are invalid fields

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('form')
  console.log(forms);
  /*
  function checkErrors(error) {
    return error == false;
  }
    */
 
  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        checkNames();
        checkEmail();
        checkQuery();
        checkMessage();
        checkConsent();
      } else {
        const toastLiveExample = document.getElementById('liveToast');

        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    
        toastBootstrap.show();
        console.log('input received!');
      }
  
      
      /*
      const errorFlagValues = Object.values(ErrorFlags);
      console.log(errorFlagValues);

      let errorFinal = errorFlagValues.every(checkErrors);
      console.log(errorFinal);
        if (errorFinal == true) {
          form.addEventListener('click', submitForm);
        }
        */
      //form.classList.add('was-validated')
    })
  })
  
})()

  