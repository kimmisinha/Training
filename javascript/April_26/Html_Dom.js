function changedbackgroundcolor(){
  let button=document.querySelector('.cutom-button')
  var randomColor =  Math.floor(Math.random()*126);
  var randomColor2 =  Math.floor(Math.random()*126);
  var randomColor3 =  Math.floor(Math.random()*126);
  finacolor=`rgb(${randomColor},${randomColor2},${randomColor3})`

  console.log(finacolor)

  // Change the button's background color
    button.style.backgroundColor = finacolor;
  


}