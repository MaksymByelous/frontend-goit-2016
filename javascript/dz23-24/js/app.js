requirejs.config({
  paths: {
    'jquery': ['https://code.jquery.com/jquery-1.12.4.min'],
    'lodash': ['lodash']
  },
  shim: {
    'jquery': {
      exports: 'jquery'},
    'lodash': {
      exports: 'lodash'}
    }
});

require(
  ['jquery', 'lodash', 'model', 'view', 'controller'],
  function () {

});
