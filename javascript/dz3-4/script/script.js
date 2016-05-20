//how many questions do you want
var questionNumber = 3;
//how many options of answers do you need
var optionNumber = 3;

var test = {
  createTest: function () {
    test.createRow();
    test.createCol();
    test.createH1();
    test.createForm();
    test.createQuesion(questionNumber);
    test.createButton();
  },
  createQuesion: function (k) {
    for (var j = 0; j < k; j++) {
      test.createFormGroup();
      test.createFormH2(j);
      test.createDivCheckbox(j);
      // test.createCheckbox(1, j);
      // test.createLabel(1, j);
      // test.createCheckbox(2, j);
      // test.createLabel(2, j);
      // test.createCheckbox(3, j);
      // test.createLabel(3, j);
      test.createInputGroup(optionNumber, j);
    }
  },
  createInputGroup: function (l, j) {
    for (var i = 1; i <= l; i++) {
      test.createCheckbox(i, j);
      test.createLabel(i, j);
    }
  },
  createRow: function () {
    var row = document.createElement('div');
    row.classList.add('row');
    var body = document.querySelector('body');
    body.appendChild(row);
  },
  createCol: function () {
    var col = document.createElement('div');
    col.classList.add('col');
    col.classList.add('col-md-12');
    var row = document.querySelector('.row');
    row.appendChild(col);
  },
  createH1: function () {
    var topH1 = document.createElement('h1');
    topH1.classList.add('text-center');
    topH1.innerHTML = 'Test of development skills';
    var col = document.querySelector('.col');
    col.appendChild(topH1);
  },
  createForm: function () {
    var testForm = document.createElement('form');
    var col = document.querySelector('.col');
    col.appendChild(testForm);
  },
  createFormGroup: function () {
    var formGroup = document.createElement('div');
    formGroup.classList.add('form-group');
    var form = document.querySelector('form');
    form.appendChild(formGroup);
  },
  createFormH2: function (i) {
    var formH2 = document.createElement('h2');
    formH2.innerHTML = 'question ' + (+i + 1);
    var formGroup = document.querySelectorAll('.form-group');
    formGroup[i].appendChild(formH2);
  },
  createDivCheckbox: function (i) {
    var divCheckBox = document.createElement('div');
    divCheckBox.classList.add('checkbox');
    var formGroup = document.querySelectorAll('.form-group');
    formGroup[i].appendChild(divCheckBox);
  },
  createCheckbox: function (i, y) {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = 'answer' + i;
    checkbox.id ='answer' + (+y + 1) + i;
    var divCheckBox = document.querySelectorAll('.checkbox');
    divCheckBox[y].appendChild(checkbox);
  },
  createLabel: function (i, f) {
    var label = document.createElement('label');
    label.innerHTML = 'option ' + i;
    label.htmlFor = 'answer' + (+f + 1) + i;
    var divCheckBox = document.querySelectorAll('.checkbox');
    divCheckBox[f].appendChild(label);
  },
  createButton: function () {
    var button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add('btn-success');
    button.classList.add('btn-lg');
    button.innerHTML = 'CHECK RESULTS';
    var form = document.querySelector('form');
    form.appendChild(button);
  },
}

//lets create our test
test.createTest();
