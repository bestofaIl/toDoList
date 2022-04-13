
const date = new Date();

const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
const weekDays = ['SATURDAY','MONDAY','TUESDAY','THURSDAY','FRIDAY','SUNDAY'];

const numberDay = date.getDate();
const numberOfMonth = date.getMonth();
const month = months[numberOfMonth];
const year = date.getFullYear();
const numberDayWeek = date.getDay();
const weekDay = weekDays[numberDayWeek];



const divDay = document.querySelector('.numberDay');
divDay.innerHTML = numberDay;

const divMonth = document.querySelector('.month');
divMonth.innerHTML = month;

const divYear = document.querySelector('.year');
divYear.innerHTML = year;

const divWeekDay = document.querySelector('.weekDay');
divWeekDay.innerHTML = weekDay;


const buttonAdd = document.querySelector('.add');
const modalBtn = document.querySelector('.modalButton');
const closeButton = document.querySelector('.close');
const modalInput = document.querySelector('.modalInput');
const parent = document.querySelector('.tasks');
const modalW = document.querySelector('.modal');


function addExtra() {
    this.previousElementSibling.classList.toggle('opacity');
    this.classList.toggle('completed');
}


function makeModalVisible() {
    modalW.style.visibility = 'visible';
}


function makeModalHidden() {
    modalW.style.visibility = 'hidden';
}

function checkInput(input) {
    if (input.value === '') {
        makeModalHidden(modalW);
        return false;
    } return 1
}

function updateButtons() {
    let buttons = document.getElementsByClassName('btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = addExtra;
    }
}

function createTaskStructure() {
    if (!checkInput(modalInput)) {
        return 1
    } else {
        let pDiv = document.createElement('div');
        pDiv.classList.add('task');
        let childDiv = document.createElement('div');
        childDiv.innerHTML = modalInput.value;
        modalInput.value = '';
        let childBtn = document.createElement('button');
        childBtn.classList.add('btn');
        pDiv.appendChild(childDiv);
        pDiv.appendChild(childBtn);
        parent.appendChild(pDiv);
        makeModalHidden(modalW);
        updateButtons();
    }
}


function newTask() {
    makeModalVisible(modalW);
    closeButton.onclick = makeModalHidden;
    modalBtn.onclick = createTaskStructure;
}


buttonAdd.onclick = newTask;















