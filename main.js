
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  var valueText = answerPTagWithValue.textContent;
  var valueNumber = parseInt(valueText);
  var doubleValue = valueNumber * 2;
  answerPTagWithValue.innerHTML = doubleValue;

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #3
  var circle = document.querySelector('.circle-red');
  var height = circle.offsetHeight;
  var width = circle.offsetWidth;
  circle.style.height = height * 2 + "px";
  circle.style.width = width * 2 + "px";
  if(height === 320 && width === 320){
    circle.style.height = "40px";
    circle.style.width = "40px";
  }

})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #4
  var userList = document.querySelector("#user-list");
  var removedList = document.querySelectorAll('.inactive');
  removedList.forEach(function(list){
    userList.removeChild(list);
  });
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #5
  var squareArray = [];
  var container = document.querySelector('#squares-box');
  var squares = document.querySelectorAll('.square');
  squares.forEach(function(square) {
    squareArray.push(square);
    square.remove();
  })

  squareArray.reverse().forEach(function (square) {
    container.appendChild(square);
  })
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #6
  // var textReverse = [];
  // var container = document.querySelector('#tasks');
  var listItems = document.querySelectorAll('#tasks li')

  listItems.forEach(function(li) {
    var word = li.innerHTML;
    var wordReverse = word.split("").reverse().join("");
    // textReverse.push(wordReverse);
    // item.remove();
    li.innerHTML = wordReverse;
  })
/*
  textReverse.forEach(function (text) {
    var li = document.createElement('li');
    li.innerHTML = text;
    container.appendChild(li);
  })
*/
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #7
})
