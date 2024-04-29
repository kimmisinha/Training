function changedbackgroundcolor(){
  let button=document.querySelector('.cutom-button')
  var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  // Change the button's background color
    button.style.backgroundColor = randomColor;
  


}