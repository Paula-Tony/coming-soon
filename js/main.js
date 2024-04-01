let submitBtn = document.querySelector('button');
let emailInput = document.querySelector('.email-input input');
let errorMsg = document.querySelector('.email-input span');

submitBtn.addEventListener('click', function(e) {  
  let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!regEx.test(emailInput.value)) {
    e.preventDefault();
    emailInput.classList.add('error');
    errorMsg.style.opacity = '1';
  }
})