import _ from 'lodash';
// import './style.css';
// import img from './switzer.jpg'
// import Data from './data.xml';
import printMe from './print';

function component() {
	let element = document.createElement('div');
	var btn = document.createElement('button');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	btn.innerHTML = '点击这里，然后可以查看 console！';
	btn.onclick = printMe;
	// element.classList.add('hello');
	// var myIcon = new Image();
	// myIcon.src = img;

	// element.appendChild(myIcon);

	// console.log(Data)
	element.appendChild(btn);

	return element;
  }

  document.body.appendChild(component());