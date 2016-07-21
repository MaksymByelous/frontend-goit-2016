
define ('view',['jquery', 'model', 'tmpl'], function(model){

function View(model) {
  var self = this;
  function init() {
  var wrapper = tmpl($('#wrapper-template').html());
  $('body').append(wrapper);
  self.elements = {
    input: $('.task-value'),
    addBtn: $('.task-add'),
    listContainer: $('.item-list')
  };
  self.renderList = function (data) {
    var list = tmpl($('#list-tamplate').html(), {data:data});
    self.elements.listContainer.html(list);
  };
  model.data = ['learn javascript', 'learn html', 'make coffe'];
  self.renderList(model.data);
  };
  init();
};

return new View(model);
});
