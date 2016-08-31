define("view", [
  'jQuery',
  'lodash'
], function ($) {

return  function View(model) {
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
      var list = _.template(litemplate) ({
        data: data
      });
      self.elements.listContainer.html(list);
    };
    init();
  }
});
