document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello! I am loaded');

  const button = document.querySelector('.clickme');
  button.addEventListener('click', () => {
    console.log('clicked MUAHAHAHHA I AM SECRETLY NOT A WASTE OF TIME');
  });

  const liButton = document.querySelector('.newli');
  const userinput = document.querySelector('.userinput');
    liButton.addEventListener('click', () => {
    //const saveddata = localStorage.setItem('userinput.value', JSON.stringify(userinput.value));
    //const retreiveddata = localStorage.getItem('userinput.value')
    const newli = document.createElement('LI');
    //newli.appendcontent(retreiveddata);
    const newcontent = document.createTextNode(userinput.value);
    newli.appendChild(newcontent);
    document.querySelector('.ultest').appendChild(newli);
  });

  const turnblue = document.querySelector('.level1');
  document.querySelector('.level2');
  document.querySelector('.level3');
  document.querySelector('.makeblue');
});


// line 1: before we load anything we ensure the HTML content is loaded first to avoid errors (critical)
// line 2: since I'm playing around I am just consolelogging to confirm it loads before anything else - in production console.logs are not encouraged.

// line 9: We save the imput element as a const or a let (usually a const)
// line 10: Event Listener is added to the new imput element
// line 11:We then give JS the ability to create a new element in conjunction with the listener which in this case listens for a click.
// line 12: we add the text we desire
// line 13: we append the newtext to the li which is custom text since we call userinput.value(the value refers to custom inputs)
// line 14: li is appended to the ul

// notice that everything happens within the event listener? (the original 'click') because all functions run on that one click.

