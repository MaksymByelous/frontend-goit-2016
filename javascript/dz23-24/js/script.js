function Model(data){
  var self = this;
  self.data = data;
  self.addItem = function (item){
    if (item.length === 0){
        return;
    }
    self.data.push(item);
  };
  self.removeItem = function (item){
    var index = self.data.indexOf(item);
    if (index ===-1) {
        return;
    }
    self.data.splice(index, 1);
    return self.data;
  };
  self.editItem = function (item) {
    var index = self.data.indexOf(item);
    $('span').attr('disabled',true);
    if (index ===-1) {
        return;
    };
    return [self.data[index], index];
  };
  self.saveItem = function (item, index) {
    if (item.length === 0){
      return;
    };
    $('span').removeAttr('disabled');
    self.data.splice(index, 0, item)
  };
};

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
  self.renderList(model.data);
  };
  init();
};

function Controller(model, view) {
  var self = this;
  view.elements.addBtn.on('click', addItem);
  view.elements.listContainer.on('click', '.item-delete', removeItem);
  view.elements.listContainer.on('click', '.item-edit', editItem );
  function addItem() {
    var newItem = view.elements.input.val();
    model.addItem(newItem);
    view.renderList(model.data);
    view.elements.input.val('');
  };
  function removeItem() {
    var item = $(this).attr('data-value');
    model.removeItem(item);
    view.renderList(model.data);
  };
  function editItem() {
    var item = $(this).attr('data-value');
    var editText = $('<input type="text">');
    var saveButton = $('<button class="item-save">Save</button>');
    var element =model.editItem(item);
    editText.val(element[0]);
    model.removeItem(item);
    $(this).parent().empty().append(editText).append(saveButton);
    $('.item-save').on('click', function() {
        if($('input:text')[0].value) {
            model.saveItem($('input:text')[0].value,element[1]);
            view.renderList(model.data);
          };
    });
  };
};
$(function () {
  var firstToDoList = ['learn javascript', 'learn html', 'make coffe'];
  var model = new Model(firstToDoList);
  var view = new View(model);
  var controller = new Controller(model, view);
});
