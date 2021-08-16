document.querySelector('#card').addEventListener('click', () => {
    document.querySelector('#card').classList.add('myClass');
  }); 
document.querySelector('#card1').addEventListener('click', () => {
    document.querySelector('#card1').classList.add('myClass');
  }); 
document.querySelector('#card2').addEventListener('click', () => {
    document.querySelector('#card2').classList.add('myClass');
  }); 
document.querySelector('#card3').addEventListener('click', () => {
    document.querySelector('#card3').classList.add('myClass');
  }); 
document.querySelector('#card4').addEventListener('click', () => {
    document.querySelector('#card4').classList.add('myClass');
  }); 
document.querySelector('#card5').addEventListener('click', () => {
    document.querySelector('#card5').classList.add('myClass');
  }); 
document.querySelector('#card6').addEventListener('click', () => {
    document.querySelector('#card6').classList.add('myClass');
  }); 
document.querySelector('#card7').addEventListener('click', () => {
    document.querySelector('#card7').classList.add('myClass');
  }); 
document.querySelector('#card8').addEventListener('click', () => {
    document.querySelector('#card8').classList.add('myClass');
  });
  let list = document.getElementById("section_card");
let item = document.getElementById("card_box_right");{
  let listElem = document.createElement("li");
  listElem.classList.add("num");
  list.appendChild(listElem);
}
list.onclick = function addToMyFavoriteSongsList(e) {
  item.innerHTML += e.target.outerHTML;
}
var json = JSON.parse($.getJSON({'url': "http://spoonertuner.com/projects/test/test.json", 'async': false}).responseText);              