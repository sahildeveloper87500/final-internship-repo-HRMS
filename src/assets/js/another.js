
  var inputField = document.querySelectorAll(".label-animation input" )
  inputField.forEach(element => {
    element.addEventListener('focusout', (e)=> {
      if(e.target.value != ""){
        element.classList.add('input-not-empty')
      }else {
        element.classList.remove('input-not-empty')
      }
    })
  })
