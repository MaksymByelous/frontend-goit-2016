define("model", [
  'jQuery'
], function ($) {

return  function Model(data) {
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
      if (index === - 1) {
        return;
      }
      self.data.splice(index, 1);
      return self.data;
    };
    self.editItem = function (item) {
      $('button').attr('disabled', true);
      var index = self.data.indexOf(item);
      if (index === - 1) {
        return;
      }
      return [self.data[index],
      index];
    };
    self.saveItem = function (item, index) {
      if (item.length === 0) {
        return;
      }
      $('button').removeAttr('disabled');
      self.data.splice(index, 0, item);
    };
  };
});
