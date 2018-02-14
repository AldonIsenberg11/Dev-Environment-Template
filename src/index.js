import './index.css';
import numeral from 'numeral';

const myValue = numeral(1000).format('$0,0.00');
// debugger;
console.log(`You should pay ${myValue} for my services!`);
