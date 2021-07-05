import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Age from './age.js';

$(document).ready(function() { 
  $('#formFields').submit(function(event) {
    event.preventDefault();
    $("#age").val();
    let input = parseInt($("#age").val());
    let planet = $("#planet :selected").val();

    console.log("check the planet log", planet);
    console.log("why is this so stubborn", input);

    if (planet === "Mercury") {
      let age = new Age(input);
      let mercury = age.mercuryAge(input);
      let life_expectancy = age.lifeExpect(input);
      $("#mercury-age").text(mercury);
      $("#life-expectancy").text("Oops! Your life expectancy: " + life_expectancy);
    } else if (planet === "Venus") {
      let age = new Age(input);
      let venus = age.venusAge(input);
      let life_expectancy = age.lifeExpect(input);
      $("#venus-age").text(venus);
      $("#life-expectancy").text("Oops! Your life expectancy: " + life_expectancy);
    } else if (planet === "Mars") {
      let age = new Age(input);
      let mars = age.marsAge(input);
      let life_expectancy = age.lifeExpect(input);
      $("#mars-age").text(mars);
      $("#life-expectancy").text("Oops! Your life expectancy: " + life_expectancy);
    } else if (planet === "Jupiter") {
      let age = new Age(input);
      let jupiter = age.jupiterAge(input);
      let life_expectancy = age.lifeExpect(input);
      $("#jupiter-age").text(jupiter);
      $("#life-expectancy").text("Oops! Your life expectancy: " + life_expectancy);
    } else {
      $("input").text(input);
    }
  });
});