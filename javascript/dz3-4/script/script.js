var test = {
  name: 'Test of development skills',
  question: ['question №1' , 'question №2' ,' question №3'],
  answer: ['answer option №11','answer option №12', 'answer option №13',
          'answer option №21','answer option №22', 'answer option №23',
          'answer option №31','answer option №32', 'answer option №33'],
  submit: 'CHECK RESULTS',
  letsTest: function () {
    var row = document.createElement('div');
      row.classList.add('row');
      var body = document.querySelector('body');
      body.appendChild(row);
    var col = document.createElement('div');
      col.classList.add('col');
      col.classList.add('col-md-12');
      var row = document.querySelector('.row');
      row.appendChild(col);
    var topH1 = document.createElement('h1');
      topH1.classList.add('text-center');
      topH1.innerHTML = this.name;
      var col = document.querySelector('.col');
      col.appendChild(topH1);
    var testForm = document.createElement('form');
      var col = document.querySelector('.col');
      col.appendChild(testForm);
    var questionIterator = 0;
    for (var y = 0; y < 3; y++) {
      var formGroup = document.createElement('div');
        formGroup.classList.add('form-group');
        var form = document.querySelector('form');
        form.appendChild(formGroup);
      var formH2 = document.createElement('h2');
        formH2.innerHTML = this.question[y];
        var formGroup = document.querySelectorAll('.form-group');
        formGroup[y].appendChild(formH2);
      var divCheckBox = document.createElement('div');
        divCheckBox.classList.add('checkbox');
        var formGroup = document.querySelectorAll('.form-group');
        formGroup[y].appendChild(divCheckBox);
      for (var i = 1; i < 4; i++) {
       var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = 'answer' + i;
        checkbox.id ='answer' + (+y + 1) + i;
        var divCheckBox = document.querySelectorAll('.checkbox');
        divCheckBox[y].appendChild(checkbox);
       var label = document.createElement('label');
        label.innerHTML = this.answer[i - 1 + questionIterator];
        label.htmlFor = 'answer' + (+y + 1) + i;
        var divCheckBox = document.querySelectorAll('.checkbox');
        divCheckBox[y].appendChild(label);
      }
      questionIterator += 3;
    }
    var button = document.createElement('button');
      button.classList.add('btn');
      button.classList.add('btn-success');
      button.classList.add('btn-lg');
      button.innerHTML = this.submit;
      var form = document.querySelector('form');
      form.appendChild(button);
  }
}
test.letsTest();
