// creating 5 block jS

var body = document.getElementsByTagName('body')[0];

for (var i = 0, max = 5; i < max; i++) {

 var div = document.createElement('div');

 div.className = "items";

 div.setAttribute('style', 'width: 100%; height: 60px; margin-bottom: 30px; background-color: #000; cursor: pointer')

 body.appendChild(div)

}

var items = document.querySelectorAll('.items');