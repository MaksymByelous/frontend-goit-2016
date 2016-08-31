function Model(data) {
  var self = this;

  self.data = data;
  self.addItem = function (item) {
    if (item == 0) {
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

  self.editItem = function (item){
      $('button').attr('disabled',true);
      var index = self.data.indexOf(item);
      if (index ===-1) {
          return;
      }
      return [self.data[index],index];
  };
  self.saveItem = function (item,index){
      if (item.length === 0){
          return;
      }
      $('button').removeAttr('disabled');
      self.data.splice(index,0,item);
  };
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
  view.elements.listContainer.on('click', '.item-edit', editItem)
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

  function editItem() {
    var item = $(this).attr('data-value');
    var editText = $('<input type="text">');
    var saveButton = $('<input type="button" class="item-save" value="Save">');
    var element =model.editItem(item);
    editText.val(element[0]);
    model.removeItem(item);
    $(this).parent().empty().append(editText).append(saveButton);
    $('.item-save').on('click', function() {
        if($('input:text')[0].value) {
            model.saveItem($('input:text')[0].value,element[1]);
            view.renderList(model.data);
          }
    })
  }
}

$(document).ready(function () {
  var todolist = ['learn JS', 'learn jquery', 'learn AngularJS'];

  var model =  new Model (todolist);
  var view = new View(model);
  var controller = new Controller(model, view);
});
