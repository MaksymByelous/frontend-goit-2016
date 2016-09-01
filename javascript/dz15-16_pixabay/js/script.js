'use strict';
$(function(){
    $('form').submit(function(){

var urlFull = 'https://pixabay.com/api/?key=3216836-503ab328840d9e6573343da2a&q=' + encodeURIComponent(jQuery('#textField').val()) + '&image_type=photo';

        $.ajax({
            // AJAX-specified URL
           url: urlFull,
           dataType : "jsonp",
           // Handle the success event
           success: function (data, textStatus) {

             console.log(data.hits);

             var ol = document.createElement("ol");
                     // build results set
                     $.each(data.hits,
                   function(i, val) {
                     var li = document.createElement("li");
                         li.innerHTML = '<a href="'+val.pageURL+'" title="'+val.pageURL
                         +'" target="_blank">' +'<figure><img src="' + val.previewURL + '"/></figure>' + '</a>';
                         ol.appendChild(li);
                   }
                 );
             $('#results').html(ol);
        }
    });
        return false;
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
