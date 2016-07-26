$(document).ready(function () {
'use strict';
//----------create object with Q and A
let test = {
  name: 'Test of development skills',
  question: [
          {
          title: 'question №1',
          checkboxName: ['one', 'two', 'three'],
          id: ['11', '12', '13'],
          answers: ['answer option №1', 'answer option №2', 'answer option №3'],
          correct: 11
          },
          {
          title: 'question №2',
          checkboxName: ['four','five','six'],
          id: ['21', '22', '23'],
          answers: ['answer option №1', 'answer option №2', 'answer option №3'],
          correct: 22
          },
          {
          title: 'question №3',
          checkboxName: ['seven','eight','nine'],
          id: ['31', '32', '33'],
          answers: ['answer option №1', 'answer option №2', 'answer option №3'],
          correct: 33
          }
        ],
  submit: 'CHECK RESULTS'
};
//-----------save object in local storage
// let testInStore = JSON.stringify(test);
localStorage.setItem("test", JSON.stringify(test));
let testFromStore = JSON.parse(localStorage.getItem("test"));
//----------create html
let html = $('#test').html();
let content = _.template( html)(test);
  $('body').append(content);

//-------result test checking
  let button = $('input:submit')[0];
  button.addEventListener('click', function(e){
      e.preventDefault();
      let checkedBoxes = $('input:checkbox:checked');
      let checkedAnswers = [];
      for (let i = 0; i < testFromStore.question.length; i++) {
        checkedAnswers[i] = Number(checkedBoxes[i].id);
      };
      let correctAnswers =[];
      for (let i=0;i<testFromStore.question.length; i++) {
          correctAnswers[i]=testFromStore.question[i].correct;
      };
      let result = '';
      (JSON.stringify(checkedAnswers) === JSON.stringify(correctAnswers)) ? (result = 'Правильно!') : (result = 'Неправильно!');
      $('body').append('<div class="modal-overlay"><div class="modal"><h1>Результаты теста</h1><h2>' +
          result +'</h2><input type="button" value="OK" id="okbutton" class="btn btn-primary btn-sm"></div></div>');
      $('#okbutton')[0].addEventListener('click', function(e) {
          e.preventDefault();
          $(checkedBoxes).prop('checked', false);
          $('.modal-overlay').remove();
          });
  });
});
