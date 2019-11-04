import _ from 'lodash';
import './style.css';
import img from './switzer.jpg'
import Data from './data.xml';

function component() {
	let element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');
	var myIcon = new Image();
	myIcon.src = img;

	element.appendChild(myIcon);

	console.log(Data)

	return element;
  }

  document.body.appendChild(component());