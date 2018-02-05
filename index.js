document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello! I am loaded');


  const button = document.querySelector('.clickme');
  button.addEventListener('click', () => {
    console.log('clicked');
  });

  const liButton = document.querySelector('.newli');
  //save the involved element (or elements) as a let or const
  liButton.addEventListener('click', () => {
  //add a event listener to added element^
    const newli = document.createElement('LI');
  //give js the ability to create new elements
    const newcontent = document.createTextNode('Ive been added');
  //add text
    newli.appendChild(newcontent);
  //append new text to the li 
    document.querySelector('.ultest').appendChild(newli);
  //append the li to the ul
    const makeblue = document.querySelector('.makeblue')
  });
});