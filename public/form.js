const buttonSend = document.getElementById('button-send');
buttonSend.addEventListener('click', () => {
  let inputEmail = document.getElementById('input-mail').value;
  let regexpEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
  let resultEmail = regexpEmail.test(inputEmail);
  let inputName = document.getElementById('input-name').value;
  let regexpName =  /^([a-zа-яё]+)$/i;
  let resultName = regexpName.test(inputName);
  let inputPhone = document.getElementById('input-phone').value;
  let regexpPhone = /\+7\(?\d{3}\)?\d{3}-?\d{4}/;
  let resultPhone = regexpPhone.test(inputPhone);
  if (resultEmail != true || resultName != true || resultPhone != true) {
    console.log('Error');
  } else {
    console.log('The message has been send');
  }
})

// const buttonSend = document.getElementById('button-send');
// buttonSend.addEventListener('click', () => {
//   let inputEmail = document.getElementById('input-mail').value;
//   console.log(inputEmail);
//   let regexpEmail = new RegExp("^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$");
//   let resultEmail = inputEmail.match(regexpEmail);
//   console.log(resultEmail);
//   if (resultEmail === null) {
//     console.log('Error');
//   } else {
//     console.log('The message has been send');
//   }
// })

// buttonSend.addEventListener('click', () => {
//   let inputName = document.getElementById('input-name').value;
//   console.log(inputName);
//   let regexpName =  /^([a-zа-яё]+)$/i;
//   let resultName = regexpName.test(inputName);
//   console.log(resultName);
//   if (resultName != true) {
//     console.log('Error');
//   } else {
//     console.log('The message has been send');
//   }
// })

// buttonSend.addEventListener('click', () => {
//   let inputPhone = document.getElementById('input-phone').value;
//   let regexpPhone = /\+7\(?\d{3}\)?\d{3}-?\d{4}/;
//   let resultPhone = regexpPhone.test(inputPhone);
//   console.log(resultPhone);
//   if (resultPhone != true) {
//     console.log('Error');
//   } else {
//     console.log('The message has been send');
//   }
// })
