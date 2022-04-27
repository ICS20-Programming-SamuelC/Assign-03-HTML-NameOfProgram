// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the area of a trapazoid.
 */
function calculate () {
  // input
  let score1 = parseInt(document.getElementById('score1').value)
  // input
  let score2 = parseInt(document.getElementById('score2').value)
  // input
  let score3 = parseInt(document.getElementById('score3').value)
  // input
  let score4 = parseInt(document.getElementById('score4').value)
  // input
  let score5 = parseInt(document.getElementById('score5').value)
  // input
  let score6 = parseInt(document.getElementById('score6').value)
  // input
  let score7 = parseInt(document.getElementById('score7').value)
  // input
  let score8 = parseInt(document.getElementById('score8').value)
  // process
  const handicap = (score1+score2+score3+score4+score5+score6+score7+score8)/8-72

  // output
  document.getElementById('handicap').innerHTML = 'You have a ' + handicap.toFixed(2) + ' golf handicap index. '
}