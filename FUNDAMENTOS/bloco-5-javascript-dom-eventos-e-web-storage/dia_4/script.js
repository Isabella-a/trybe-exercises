window.onload = function() {

  function changeBackground(color) {
    let getMainDiv = document.querySelector('#main-content');
    getMainDiv.style.backgroundColor = color;
    localStorage.setItem('backgroundcolor', color);
  };

  function changeColorText(color) {
    let getP = document.querySelectorAll('p');
    for (let index = 0; index < getP.length; index += 1) {
      getP[index].style.color = color;
      localStorage.setItem('colorText', color);
    };
  };

  function changeTextSize(size) {
    let getP = document.querySelectorAll('p');
    for (let index = 0; index < getP.length; index += 1) {
      getP[index].style.fontSize = size + 'px';
      localStorage.setItem('textSize', size);
    };
  };

  let getBackgroundBtn = document.querySelectorAll('#background-color>button');
  for (let index = 0; index < getBackgroundBtn.length; index += 1) {
    getBackgroundBtn[index].addEventListener('click', function(event) {
      changeBackground(event.target.innerHTML);
    });
  };

  let getBtnColorText = document.querySelectorAll('#color-text>button');
  for (let index = 0; index < getBtnColorText.length; index =+ 1) {
    getBtnColorText[index].addEventListener('click', function(event) {
      changeColorText(event.target.innerHTML);
    });
  };

  let getInputTextSize = document.querySelector('input[name = "font-size"]');
  getInputTextSize.addEventListener('change', function() {
    changeTextSize(getInputTextSize.value);
  });


};
