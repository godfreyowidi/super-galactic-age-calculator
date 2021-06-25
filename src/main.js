import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { 
  monthCodeGenerator, 
  yearCodeGenerator,
  tabulate
} from './date.js';

$(document).ready(function() { 
  $('#weekDay').submit(function(event) {

    event.preventDefault();
    let inputtedDay = parseInt($("#day").val());
    let inputtedMonth = $("#month").val();
    let inputtedYear = $("#year").val();

    let month = monthCodeGenerator(inputtedMonth, inputtedYear);
    let year = yearCodeGenerator(inputtedYear);

    let dayOfTheWeek = tabulate(inputtedDay, month, year);
    $(".card").show();
    $("#dayOfTheWeek").empty();
    $("#dayOfTheWeek").append(`<h5 class="card-title">${dayOfTheWeek}</h5`);

    inputtedDay = $("#day").val('');
    inputtedMonth = $("#month").val('');
    inputtedYear = $("#year").val('');
  });
});