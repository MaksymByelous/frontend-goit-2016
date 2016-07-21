
define ('model',['jquery'],function(data){

function Model(data){
  var self = this;
  self.data = ['learn javascript', 'learn html', 'make coffe'];
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
  return new Model();

});
