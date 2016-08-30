requirejs.config({
  baseUrl: 'js',
  paths: {
    'jquery': [
      'https://code.jquery.com/jquery-1.12.4.min'
    ],
    'lodash': [
      'lodash'
    ]
  },
  shim: {
    'jquery': {
      exports: 'jquery'
    },
    'lodash': {
      exports: 'lodash'
    }
  }
});
require(['model',
'view',
'controller',
'jquery',
'lodash'], function () {
});
