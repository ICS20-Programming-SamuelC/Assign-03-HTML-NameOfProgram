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
  const radius = parseInt(document.getElementById('radius').value)
  // process
  const volume = 4/3 * 3.141 * radius ** 3

  // output
  document.getElementById('volume').innerHTML = 'The volume of a sphere is ' + volume.toFixed(3) + ' cm cubed. '
}