/**
 * Toolkit JavaScript
 */
import Vue from 'vue'
import Accordion from './vue/components/accordion.vue'


import React from 'React';
import ReactDOM from 'react-dom';
import ReactAccordion from './react/components/react-accordion.jsx';

import './polymer/components/accordion.js';


import $ from 'jquery';

import jQueryAccordion from './jquery/components/accordion.js';

import BasicAccordion from './vanilla/accordion.js';



new Vue({
   el: "#app",
   components: {'vue-accordion': Accordion}
});


const reactAccordion = document.getElementById('react-accordion');
ReactDOM.render(<ReactAccordion/>, reactAccordion);

$(document).ready(() => {

  const jqA = new jQueryAccordion('.jq-accordion');

});

const vanillaAccordions = document.querySelectorAll('.js-accordion .panel');
vanillaAccordions.forEach((value, index) => {
  const vAcc = new BasicAccordion(value, index);
})
