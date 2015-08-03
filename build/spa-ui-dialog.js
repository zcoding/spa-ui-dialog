/* spa-ui-dialog by zcoding, MIT license, 2015-06-02 version: 0.1.3 */
(function(factory) {
  if (typeof define === 'function' && define.cmd) {
    define(function(require, exports, module) {
      factory(exports);
    });
  } else {
    factory(window)
  }
}(function(exports) {

/**
 * Get uuid
 */
var uuid = function() {};

/**
 * extend object
 */
var extend = function() {};

var dialog = exports.dialog = function() {};

var dprtt = dialog.prototype;
dialog.tips = function() {};

dialog.alert = function() {};

dialog.confirm = function() {};

dialog.modalTips = function() {};

dprtt.title = function() {};

}));