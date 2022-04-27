class Letter {
  constructor(modalHugOverlay) {
    this.modalHugOverlay = modalHugOverlay;
  }



  // Properties
  showHug() {
    const hugButton = document.querySelector('#btnHug');

    /* hugButton.addEventListener('click', (e)=> {
      e.preventDefault();
      this.modalHugOverlay.classList.remove('modal--hide');


    }); */

    const handleSubmit = (e) => {
      e.preventDefault();
      this.modalHugOverlay.classList.remove('modal--hide');
      let myForm = document.getElementById(".formHug");
      let formData = new FormData(myForm);
      console.log(formData);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
    };

    document.querySelector(".formHug").addEventListener("submit", handleSubmit);

    

  }

  closeHug(){
    const closeButton = document.querySelector('.modal-hug__close');
    
    closeButton.addEventListener('click', (e) => {
      e.preventDefault();

      this.modalHugOverlay.classList.add('modal--hide');

    });

  }

}

