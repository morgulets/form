
//--------------- полифил для метода forEach для интернетЕксплорер----------------

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
      }
  };
}

// -------------------------------------js для select-----------------------------------

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper){

  const btn = dropDownWrapper.querySelector('.dropdown__button')
  const dropdownList = dropDownWrapper.querySelector('.dropdown__list')
  const dropdownListItem = dropDownWrapper.querySelectorAll('.dropdown__list-item')
  const inputHidden = dropDownWrapper.querySelector('.dropdown__input-hidden')
  const checkBox = document.getElementById('checkbox')
  const blockTemperature = document.getElementById('temperature')

  checkBox.addEventListener('click', function(){
    if(this.checked){
      blockTemperature.style.display = 'block'
    }else{
      blockTemperature.style.display = 'none'
    }
  })
 


  dropdownListItem.forEach(function(listItem){
  
    listItem.addEventListener('click',function(e){
      e.stopPropagation()
      btn.innerHTML = listItem.innerHTML
      btn.classList.add('dropdown__button--color')
      inputHidden.value = listItem.dataset.value
      close()
  
    })
  })
  // функция для закрытия
  function close(){
    dropdownList.classList.remove('dropdown__list--visible')
  }
  
  btn.addEventListener('click',function(){
    dropdownList.classList.toggle('dropdown__list--visible')
    this.classList.add('dropdown__button--active')
  })
  
  document.addEventListener('click',function(e){
     if(e.target !== btn ){
       close()
       btn.classList.remove('dropdown__button--active')
     }
  })

  document.addEventListener('keydown',function(e){
     if(e.key === 'Tab' || 'Escape'){
      btn.classList.remove('dropdown__button--active')
      close()
     }
  })
})