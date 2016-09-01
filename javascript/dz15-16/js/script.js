'use strict';
function GoogleCallback(jqueryObj,data){
    if(data.results.length) {
    for (var i = 0; i<data.results.length; i++) {
        $('body').append('<div class="search"><a href="'
            + data.results[i].url+ '">'+data.results[i].title+'</a>'+
                '<p class="link">'+data.results[i].url+'</p>'+
                '<p class="content">'+data.results[i].content +'</p>'+
            '</div>');
    }} else {$('body').append('<div class="search">Ничего не найдено!</div>')}
  };
$(document).ready(function () {
  var string = '';
  function googleSearch(e){
          $.ajax({
          url:'https://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+e+'&callback=GoogleCallback&context=?',
          dataType: 'jsonp'
  });
};
  $('input:button')[0].addEventListener('click', function(e){
          e.preventDefault();
          string =  $('input:text')[0].value;
          googleSearch(string);
          $('.search').remove();
      });
  $('input:text')[0].addEventListener('keydown', function(e){
      if (e.keyCode == 13){
          e.preventDefault();
          string = $('input:text')[0].value;
          googleSearch(string);
          $('.search').remove();
        };
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
