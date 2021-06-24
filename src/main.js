import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './date.js';

$(document).ready(function() { 
  $('#date').submit(function(event){

    event.preventDefault();
    const inputtedMonth = $("#month-input").val();
    const inputtedYear = $("#year-input").val();
    const inputtedDate = $("date-input").val();

    let date = new Date(inputtedMonth, inputtedYear, inputtedDate);
    let Month = monthCodeGenerator(inputtedMonth);
    let Year = yearCodeGenerator(inputtedYear);
    let dayOfTheWeek = date.tabulate();
    $("#dayOfTheWeek").append()
  });
});