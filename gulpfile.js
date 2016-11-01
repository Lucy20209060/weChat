var gulp = require('gulp');
//webserver服务器
var webserver = require('gulp-webserver');


gulp.task('webserver', function() {
  gulp.src('www')
    .pipe(webserver({
      livereload: true,//自动刷新
      directoryListing: false,
      open: true,
      port: 8888//设置端口号，如果被占用


      //实现我们的Mock数据它的原理是
      //1.用户在浏览器里输入url地址，比如说http://localhost/queryList
      //2.系统通过判断，获取到url的地址参数，即queryList
      //3.通过url的地址参数queryList，去查找相对应的json文件，比如说queryList.json
      //4.读取(read)queryList.json文件，并将这个文件的内容写到(write)我们的浏览器上
      

    }));
});

gulp.task('copy-index',function(){
  return gulp.src('./src/index.html')
  .pipe(gulp.dest('./www'));
})
gulp.task('cssTask',function(){
  return gulp.src('./src/css/*.*')
  .pipe(gulp.dest('./www/css'));
})
gulp.task('fontsTask',function(){
  return gulp.src('./src/fonts/*.*')
  .pipe(gulp.dest('./www/fonts'));
})
gulp.task('jsTask',function(){
  return gulp.src('./src/js/*.*')
  .pipe(gulp.dest('./www/js'));
})
gulp.task('htmlTemplateTask',function(){
  return gulp.src('./src/template/*.*')
  .pipe(gulp.dest('./www/template'));
})
gulp.task('images',function(){
  return gulp.src('./src/img/**').pipe(gulp.dest('www/img'));
})
gulp.task('watch',function(){
	gulp.watch('./src/index.html',['copy-index']);
	gulp.watch('./src/css/*.*',['cssTask']);
	gulp.watch('./src/js/*.*',['jsTask']);
  gulp.watch('./src/template/*.*',['htmlTemplateTask']);

})


//设置默认任务
gulp.task("default",['webserver','watch']);