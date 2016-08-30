define( 'controller', ['jquery', 'model', 'view'], function (model, view) {

  function Controller(model, view) {
    var self = this;
    var addBtn = $('.add-item');
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
return new Controller(model, view);

}
);
