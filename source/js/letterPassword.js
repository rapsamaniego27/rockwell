// require ('bootstrap');

class Password {
  constructor(password, submit) {
    this.password = password;
    this.submit = submit;
    this.modalFormImg = document.querySelector('#modalFormImg');
    this.rightPassword = 'raprapiscool';

  }

  // Properties
  validatePassword() {
  
   const passwordValue = this.password.value;
   const errorClass = 'modal-form__error--show';
   const successClass = 'modal-form__success--show';
   const messageSpan = document.querySelector('#formMessage');
   /* Span Messages */
   const messageSuccess = 'Galing mo! <br> Redirect ko lang ...';
   const messageError = 'Mali password mo rockwell!';
   


   /* if Password is not equal to the right password */
   if(passwordValue != this.rightPassword) {
     this.setMessage(messageSpan, messageError, errorClass);

    /* Changes Hello Kitty's mood */
    this.modalFormImg.src = './images/angry-killua.png';

    this.neutralizeKitty(messageSpan, errorClass);
     
   }else{
     
    this.setMessage(messageSpan, messageSuccess, successClass);

    setTimeout(() => {
      messageSpan.classList.remove(successClass);

      /* removes the blur effect of container */
      const letterContainer = document.querySelector('#letterContainer');
      letterContainer.classList.remove('letter--blur');

      const girl = document.querySelector('.girl-img');
      girl.classList.remove('letter--blur');

      /* removes the modal */
      const modal = document.querySelector('#modalFormOverlay');
      modal.classList.add('modal--hide');


      //Handles Netlify
     let myForm = document.getElementById("form");
     let formData = new FormData(myForm);
  
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
      
    }, 2000);
    

    

   }
   /* End of Statement */

   
   
  }

  submitPassword(){
    const form = document.querySelector('#form');

    
    form.addEventListener('submit', (e)=> {   
      e.preventDefault();
     this.validatePassword();

     
          
    });


  }

  checkField(){
    this.password.addEventListener('keyup', () => {
         
         const passwordValue = this.password.value;
         const errorClass = 'modal-form__error--show';
         const successClass = 'modal-form__success--show';
         const messageSpan = document.querySelector('#formMessage');

         const messageError = 'Mali ka rockwell! Haha!';
         console.log(passwordValue);

         if (passwordValue != this.rightPassword){
           this.setMessage(messageSpan, messageError, errorClass);

           /* Changes Hello Kitty's mood */
           this.modalFormImg.src = './images/angry-killua.png';
           
           
         }else{

            messageSpan.classList.remove(errorClass);

            this.setMessage(messageSpan, 'Try mo nga rockwell', successClass);

            this.modalFormImg.src = './images/happy-killua.png';
         }





    });
  }
  
  setMessage(target, message, classname){

      target.classList.add(classname);
      target.innerHTML = message;


  }

  neutralizeKitty(target, errorClass){
    setTimeout(() => {
      target.classList.remove(errorClass);
      this.modalFormImg.src = './images/happy-killua.png';
    }, 3000);

  }

}




