export default function Modal(){


    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

   cancelButton.addEventListener("click", close)

    function open(){
        //function to set active class for the modal
        modalWrapper.classList.add("active")
    }
    function close(){
        //function to remove active class from modal
        modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}