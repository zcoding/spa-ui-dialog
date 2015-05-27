/* spa-ui-dialog by zcoding, MIT license, 2015-05-27 version: 0.1.2 */
(function(factory) {
  if (typeof define === 'function' && define.cmd) {
    define(function(require, exports, module) {
      factory(exports);
    });
  } else {
    factory(window)
  }
}(function(exports) {

var dialog = exports.dialog = function() {};

var dprtt = dialog.prototype;
dialog.tips = function() {};

dialog.alert = function() {};

dialog.confirm = function() {};

dialog.modalTips = function() {};

dprtt.title = function() {};

}));