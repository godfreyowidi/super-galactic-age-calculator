import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { 
  mercuryAge, 
  venusAge,
  marsAge,
  jupiterAge
} from './age.js';

import {
  lifeExpectancyBasedOnAge,
  lifeExpectancyBasedOnSex,
  tabulate
} from './life.js';

$(document).ready(function() { 
  $('#weekDay').submit(function(event) {

    event.preventDefault();
    let inputtedAge = $("").val();
    let inputtedSex = $("").val();

    let age = 

    $("#lifeExpectancy").empty();
    $("#lifeExpectancy").append(`<h5>${lifeExpectancy}</h5`);
  });
});