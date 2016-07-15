$(document).ready(function () {
'use strict';
  // callback function
  function GoogleCallback (func, data) {
      window[func](data);
  };

  $.getJSON('http://ajax.googleapis.com/ajax/services/search/web?v=1.0?key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=PHP&callback=GoogleCallback&context=?',
  function(data){
      var ul = document.createElement("ul");
      $.each(data.results, function(i, val){
              var li = document.createElement("li");
              li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;
              ul.appendChild(li);
      });
      $('body').html(ul);
  });

// ------------objects -- prototypes
function Human()  {
        this.name = 'Jeka';
        this.age = 33;
        this.sex = 'male';
        this.height = 170;
        this.weight = 70;
}
var newHuman = new Human();

function  Worker() {
    this.workAt = 'Frontend';
    this.salary = 30000;
    this.work = function () {
        alert('I am working');
    }
}
function Student()  {
    this.studyAt= 'GoIT';
    this.scholarship= 1000;
    this.watchSerials = function () {
        alert('I am watching serial!');
    }
}
Worker.prototype = newHuman;
Student.prototype = newHuman;
var worker1 = new Worker();
worker1.height = 192;
var student1 = new Student();
console.log(worker1);
console.log(student1);

console.log('worker1 height: ', worker1.height);
console.log('student1 height: ', student1.height);



});


// $.ajax({
//   url:
//   'https://ajax.googleapis.com/ajax/services/search/web?v=1.0&hl=ru&rsz=large&q='+'test'+'&callback=GoogleCallback&context=?',
//   datatype: 'jsonp',
//   method: 'POST',
//   success: function () {
//   },
//   error: function () {
//   }
// });
