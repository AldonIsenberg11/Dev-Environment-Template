import './index.css';
import numeral from 'numeral';

/* eslint-disable no-debugger    */
/* eslint-disable no-console     */

const myValue = numeral(1000).format('$0,0.00');
debugger; //https://github.com/AldonIsenberg11/Dev-Environment-Template/issues/23
console.log(`You should pay ${myValue} for my services!`);