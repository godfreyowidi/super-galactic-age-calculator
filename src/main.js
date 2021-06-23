import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './date.js';

$(document).ready(function() { 
  $('#date').submit(function(event){

    event.preventDefault();
  });
});