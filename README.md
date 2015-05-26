# spa-ui-dialog
dialog module for spa-ui project

##use
```javascript
var d = dialog({
  title: 'title here',
  content: 'content(html or text) here',
  buttons: {
    ok: 'OK value'
    cancel: 'Cancel value'
  }
});
d.show()
  .ok(function(evt, btnEle) {
    // click `ok` button
    this.title = 'waiting...';
    var self = this;
    $.post('/path/to/submit')
      .done(function(res) {
        self.close();
      });
    return false; // don't close until ajax done
  })
  .cancel(function(evt) {
    // click `cancel` button
    return true; // close
  });

d.on('open', function(evt) {
  // when dialog opens
});
d.on('close', function(evt) {
  // when dialog closes
});
```
##options
+ `title`
+ `content`
+ `buttons`
  - `ok`
  - `cancel`

##functions
###`dialog.configure([options])`
global configuration
###`dialog.tips(text, [timeout])`
```javascript
dialog.tips('show tips and auto close'); // default timeout: 1000ms
dialog.tips('show tips and auto close', 3000);
```
###`dialog.modalTips(text, [timeout])`
```javascript
dialog.modalTips('show tips and auto close'); // default timeout: 1000ms
dialog.modalTips('show tips and auto close', 3000);
```
##methods
###`.configure(options)`
###`.on(event, handler)`
###`.show()`
###`.showModal()`
###`.ok(handler)`
###`.cancel(handler)`
###`.open([handler])`
###`.close([handler])`
###`.remove()`
###`.title([value])`
###`.content([value])`

##develop
###定制皮肤
1. 在`src/less`目录添加一个less文件，命名为`skin-皮肤名.less`
2. 运行`grunt skin:皮肤名`
3. 在`build/skin`目录可以找到生成的皮肤样式文件，名称为`skin-皮肤名.css`
4. 继续修改less文件，保存时grunt任务会自动生成一个新的css文件
