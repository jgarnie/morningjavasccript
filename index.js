'use strict'


let seatNumber = prompt('insert your number');
let totalRows = 10;
let totalColumn = 10;


let row = Math.floor((seatNumber)/10);
let column = (seatNumber)%10;

document.write('your seat is the: '+String.fromCharCode(65+row), column+' from a total of '+totalRows+' rows and ' + totalColumn +' seats each row');