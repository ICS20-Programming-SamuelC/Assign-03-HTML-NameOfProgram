// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates gold handicap index.
 */
function calculate () {
  // input best score
  let score1 = parseInt(document.getElementById('score1').value)
  // input second best score
  let score2 = parseInt(document.getElementById('score2').value)
  // input third best score
  let score3 = parseInt(document.getElementById('score3').value)
  // input fourth best score
  let score4 = parseInt(document.getElementById('score4').value)
  // input fifth best score
  let score5 = parseInt(document.getElementById('score5').value)
  // input sixth best score
  let score6 = parseInt(document.getElementById('score6').value)
  // input seventh best score
  let score7 = parseInt(document.getElementById('score7').value)
  // input eighth best score
  let score8 = parseInt(document.getElementById('score8').value)
  // process formula to calculate handicap index
  const handicap = (score1+score2+score3+score4+score5+score6+score7+score8)/8-72

  // output display users handicap index
  document.getElementById('handicap').innerHTML = 'You have a ' + handicap.toFixed(2) + ' golf handicap index. '
}