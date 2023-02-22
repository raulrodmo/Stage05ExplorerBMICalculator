export const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  mensage: document.querySelector('.modal .title span'),
  ButtonClose: document.querySelector('.modal .close'),

  open(){
    Modal.wrapper.classList.add('open')
  },
  close(){
    Modal.wrapper.classList.remove('open')
  }
}

Modal.ButtonClose.onclick = function() {
  Modal.close()
}

window.addEventListener('keydown', handleKeydown)
function handleKeydown(event){
  if(event.key === 'Escape'){
    Modal.close()
  }
}