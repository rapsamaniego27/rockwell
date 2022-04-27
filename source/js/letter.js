class Letter {
  constructor(modalHugOverlay) {
    this.modalHugOverlay = modalHugOverlay;
  }



  // Properties
  showHug() {
    const hugButton = document.querySelector('#btnHug');

    hugButton.addEventListener('click', (e)=> {
      e.preventDefault();
      this.modalHugOverlay.classList.remove('modal--hide');


      document.querySelector(".hug").addEventListener("submit", handleSubmit);

      const handleSubmit = (e) => {
        e.preventDefault();
        let myForm = document.getElementById(".hug");
        let formData = new FormData(myForm);
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => console.log("Form successfully submitted"))
          .catch((error) => alert(error));
      };
      
    });

  }

  closeHug(){
    const closeButton = document.querySelector('.modal-hug__close');
    
    closeButton.addEventListener('click', (e) => {
      e.preventDefault();

      this.modalHugOverlay.classList.add('modal--hide');

    });

  }

}

