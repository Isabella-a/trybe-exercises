function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//EXERCÍCIO 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let listDaysUl = document.getElementById('days');

function createDays() {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let daysMonth = dezDaysList[index];
    let dayListMonth = document.createElement('li');
    listDaysUl.appendChild(dayListMonth);
    dayListMonth.innerText = daysMonth;
    dayListMonth.classList = 'day';

    if (daysMonth === 24 | daysMonth === 31) {
      dayListMonth.classList.add('holiday');
    } else if (daysMonth === 4 | daysMonth === 11 | daysMonth === 18) {
      dayListMonth.classList.add('friday');
    } else if (daysMonth === 25) {
      dayListMonth.classList.add('holiday');
      dayListMonth.classList.add('friday');
    }
  }
}
createDays();

//EXERCÍCIO 2
function createBtnHoliday(string) {
  let holidayBtn = document.createElement('button');
  let divBtn = document.getElementsByClassName('buttons-container');
  divBtn[0].appendChild(holidayBtn);
  holidayBtn.innerHTML = string;
  holidayBtn.id = 'btn-holiday';
};

createBtnHoliday('Feriados');

//EXERCÍCIO 3
function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayHolidays();

//EXERCÍCIO 4(
function createBtnFriday(string) {
  let btnFriday = document.createElement('button');
  btnFriday.id = 'btn-friday';
  let divBtnContainer = document.getElementsByClassName('buttons-container');
  divBtnContainer[0].appendChild(btnFriday);
  btnFriday.innerText = string;
}
createBtnFriday('Sexta-feira');

//EXERCÍCIO 5
function createFridayDays() {
  let arrayFriday = [4, 11, 18, 25];
  let getFridays = document.querySelectorAll('.friday');
  let fridayBtn = document.querySelector('#btn-friday');
  fridayBtn.addEventListener('click', function() {
    for (let index = 0; index < getFridays.length; index += 1) {
      if (getFridays[index].innerHTML !== 'Sextou!') {
        getFridays[index].innerHTML = 'Sextou!';
      } else {
        getFridays[index].innerHTML = arrayFriday[index];
      };
    };
  });
};

createFridayDays();

//EXERCÍCIO 6
function zoomInDays() {
  let getDays = document.querySelector('#days');
  getDays.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });
};

function zoomOutDays() {
  let getDays = document.querySelector('#days');
  getDays.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
};

zoomInDays();
zoomOutDays();

//EXERCÍCIO 7
// function newElement(string) {
//   let newTask = document.createElement('span');
//   let getDiv = document.getElementsByClassName('my-tasks');
//   getDiv[0].appendChild(newTask);
//   newTask.innerHTML = string;
// };

// newElement('Tarefa');

//EXERCÍCIO 8


//EXERCÍCIO 9


//EXERCÍCIO 10
