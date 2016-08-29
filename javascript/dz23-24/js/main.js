function Model(data) {
  var self = this;

  self.data = data;
  self.addItem = function (item) {
    if (item.lenght === 0) {
      return;
    };
    self.data.push(item);
    return self.data;
  };

  self.removeItem = function (item) {
    var index = self.data.indexOf(item);
    if (index === -1) {
      return;
    }
    self.data.splice(index, 1);
    return self.data;
  };

  // self.editItem = function (item) {

  // };
}

function View(model) {
  var self = this;
  function init() {
    var wrapper = _.template($('#wrapper-template').html());
    $('body').append(wrapper);
    self.elements = {
      input: $('.item-value'),
      addBtn: $('.item-add'),
      listContainer: $('.item-list')
    };
    self.renderList(model.data);
  };
  self.renderList = function (data) {
    var litemplate = $('#list-template').html();
    var list = _.template(litemplate)({data: data});
    self.elements.listContainer.html(list);
  };
  init();
}

function Controller(model, view) {
  var self = this;
  view.elements.addBtn.on('click', addItem);
  view.elements.listContainer.on('click', '.item-delete', removeItem);
  function addItem() {
    var newItem = view.elements.input.val();
    model.addItem(newItem);
    view.renderList(model.data);
    view.elements.input.val('');
  }
  function removeItem() {
    var item = $(this).attr('data-value');
    model.removeItem(item);
    view.renderList(model.data);
  }
}

$(document).ready(function () {
  var todolist = ['learn JS', 'learn jquery', 'learn AngularJS'];

  var model =  new Model (todolist);
  var view = new View(model);
  var controller = new Controller(model, view);

});
