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
    let inputtedAge = $("#age").val();
    let inputtedSex = $("input:radio[name=sex]:checked").val();
    let inputtedPlanet =$("#planet :selected").val();

    let age = new Age(inputtedAge);
    let sex = lifeExpectancyBasedOnSex(inputtedSex);
    let mercury = age.mercuryAge();

    $("#lifeExpectancy").empty();
    $("#lifeExpectancy").append(`<h5>${lifeExpectancy}</h5`);
  });
});