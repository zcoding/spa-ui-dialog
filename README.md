# spa-ui-dialog
dialog module for spa-ui project

##demo
```javascript
var d = dialog({
  title: 'title here',
  content: 'content(html or text) here'
});
d.show()
  .ok(function(evt, btnEle) {
    // click `ok` button
    this.title = 'waiting...';
    var self = this;
    $.post('/path/to/submit')
      .done(function(res) {
        self.close().remove();
      });
    return false; // don't close until ajax done
  })
  .on('open', function(evt) {
    // when dialog opens
  })
  .on('close', function(evt) {
    // when dialog closes
  });
```
##options
+ `title`
<p>`title`表示填充对话框标题的普通字符串（非HTML），默认为空字符串（即无标题），也可以通过`.title()`方法设置或者改变当前的标题</p>
+ `content`
<p>`content`表示填充对话框主要内容的HTML字符串，可以是字符串或者一个返回字符串的回调函数（必须是同步的，异步情况下不会立即显示）</p>
+ `ok`
<p>`ok`的值可以设置为`true`|`false`|`callback(evt)`，`false`为默认，表示禁止关闭对话框，`true`表示关闭对话框，`callback(evt)`是点击确定时的回调函数，该函数如果返回`false`则不关闭对话框，返回其它值（包括`null`|`undefined`）都会关闭对话框</p>
+ `cancel`
<p>`cancel`的值可以设置为`true`|`false`|`callback(evt)`，`true`为默认，表示关闭对话框，`false`表示禁止关闭对话框，`callback(evt)`则是点击取消时的回调函数，该函数如果返回`false`则不关闭对话框，返回其他值（包括`null`|`undefined`）都会关闭对话框</p>
+ `buttons`
<p>这是用来给简单对话框添加按钮的配置。</p>

##functions
###`dialog.configure([options])`
全局配置
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
###`dialog.alert(text, [okHandler])`
```javascript
dialog.alert("it's ok", function(evt) {
  console.log('all right.');
});
```
###`dialog.confirm(text, [okHandler], [cancelHandler])`
```javascript
dialog.confirm('are you ok?', function(evt) {
  console.log('yes, i\'m.');
  return true; // close the dialog, the same as `this.close().remove();`
});
```
##methods
###`.configure(options)`
###`.on(event, handler)`
###`.show()`
###`.showModal()`
###`.ok(handler)`
###`.cancel(handler)`
###`.open([afterOpend])`
###`.close([afterClosed])`
###`.remove([afterRemoved])`
###`.title([value])`
###`.content([value])`

##events
###`.on('open', handler)`/`.open(handler)`
```javascript
var d = dialog({
  title: 'are you ok?'
});
d.on('open', function(evt) {
  this.title('change title when dialog open');
});
```
###`.on('close', handler)`/`.close(handler)`
```javascript
var d = dialog.tips('are you ok?');
d.on('close', function(evt) {
  // tips done
});
```
###`.on('ok', handler)`/`.ok(handler)`
```javascript
var d = dialog.confirm('are you ok?');
d.on('ok', function(evt) {
  // what?
});
```

##develop
###如何开发
1. 安装`grunt-cli`工具：`npm i -g grunt-cli`
2. 安装`grunt`及插件：`npm install`
3. 运行`grunt`，修改src里的js源文件，在build目录会实时生成spa-ui-dialog.js，spa-ui-dialog.min.js和spa-ui-dialog.min.map文件
4. 运行`grunt style`，修改src里的less源文件，在build目录实时生成spa-ui-dialog.css文件
5. 运行`grunt build`，生成js和css文件，但不会继续监控
6. 运行`npm --no-git-tag-version version patch`更新package.version（build时更新版本号）

###定制皮肤
1. 在`src/less`目录添加一个less文件，命名为`skin-皮肤名.less`
2. 运行`grunt skin:皮肤名`
3. 在`build/skin`目录可以找到生成的皮肤样式文件，名称为`skin-皮肤名.css`
4. 继续修改less文件，保存时grunt任务会自动生成一个新的css文件
