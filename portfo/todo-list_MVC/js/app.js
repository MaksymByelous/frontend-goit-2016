requirejs.config({
  baseUrl: 'js',
  paths: {
    'jQuery': [
      'https://code.jquery.com/jquery-1.12.4.min'
    ],
    'lodash': [
      'lodash'
    ]
  },
  shim: {
    'jQuery': {
      exports: 'jQuery'
    },
    'lodash': {
      exports: 'lodash'
    }
  }
});
require(['jQuery',
'model',
'view',
'controller',
'lodash'], function ($, Model, View, Controller) {
  $(function () {
    var todoList = ['Learn JS','Learn Angular JS'];
    var model = new Model(todoList);
    var view = new View(model);
    var controller = new Controller(model, view);
  });

});
