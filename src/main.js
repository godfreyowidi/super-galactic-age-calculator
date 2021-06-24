import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { 
  monthCodeGenerator, 
  yearCodeGenerator,
  tabulate
} from './date.js';

/*
alternate way!
// dateStuff can be changed
import * as date from './date.js';

dateStuff.monthCodeGenerator()
dateStuff.yearCodeGenerator()
*/

$(document).ready(function() { 
  $('#weekDay').submit(function(event) {

    event.preventDefault();
    let inputtedDay = parseInt($("#day").val());
    let inputtedMonth = $("#month").val();
    let inputtedYear = $("#year").val();

    //inputtedDay = $("#day").val('');
    //inputtedMonth = $("#month").val('');
    //inputtedYear = $("#year").val('');

    let month = monthCodeGenerator(inputtedMonth, inputtedYear);
    let year = yearCodeGenerator(inputtedYear);

    let dayOfTheWeek = tabulate(inputtedDay, month, year);
    $("#dayOfTheWeek").empty();
    $("#dayOfTheWeek").append(`<p>${dayOfTheWeek}</p>`);
  });
});