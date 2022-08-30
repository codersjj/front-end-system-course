# Day09 作业布置

## 一. 完成课堂所有的代码

见 `Learn_HTML_CSS`

## 二. 总结绝对定位是相对于谁的以及常见的解决方案

- 绝对定位是相对于其最邻近的定位祖先元素，如果这样的祖先元素没找到，则相对于视口（但需要注意的是，如果文档能滚动，那么设置了 `position: absolute;` 的元素会随着它一起滚动，只要该元素不是固定定位或粘性定位元素的后代，都是这样）
- 常见的设置绝对定位的方案有：
  - 子绝父相
  - 子绝父绝
  - 子绝父固

## 三. 总结浮动常见的规则内容

- 浮动元素会脱离标准流
  - 浮动元素会向左或向右方向移动，直到自己的边界紧贴着包含块的内边界或者其它浮动元素的边界为止
  - 定位元素会层叠在浮动元素上面
- 如果元素是向左（右）浮动，其左（右）外边界不能超过其包含块的左（右）内边界
- 浮动元素之间不能层叠
  - 如果一个元素浮动，另一个浮动元素已经在那个位置了，后浮动的元素将紧贴着前一个浮动元素（左浮找左浮，右浮找右浮）
  - 如果水平方向剩余空间不够显示浮动元素，浮动元素将向下移动，直到有充足的空间为止
- 浮动元素不能与行内级内容层叠，行内级内容将会被浮动元素推出
  - 比如行内级元素、`inline-block` 元素、块级元素的文字内容
- 行内级元素、`inline-block` 元素浮动后，其顶部将与所在行的顶部对齐
  - 浮动只能左右浮动，不能超出本行的高度

## 四. 通过浮动练习页面布局方案（自己找一个布局案例）

比如网易云音乐首页的“热门推荐”：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    /* 重置样式 */
    body {
      background-color: #f5f5f5;
    }

    a {
      text-decoration: none;
      color: #333;
    }

    /* 公共样式 */
    .sprite_01 {
      display: inline-block;
      background-image: url("./images/music_sprite_01.png");
    }

    .sprite_02 {
      display: inline-block;
      background-image: url("./images/music_sprite_02.png");
    }

    .sprite_02_icon_music {
      width: 14px;
      height: 11px;
      background-position: 0 -24px;
    }

    .sprite_02_icon_play {
      width: 16px;
      height: 17px;
      background-position: 0 0;
    }

    /* 布局样式 */
    /* 整体 */
    .box {
      margin: 0 auto;
      padding-top: 20px;
      width: 729px;
      height: 468px;
      background-color: #fff;
    }

    .item {
      float: left;
      margin: 0 21px 48px 21px;
      width: 140px;
      /* background-color: skyblue; */
    }

    /* 上半部分 */
    .item .top {
      position: relative;

      background-color: red;
    }

    .item .top img {
      /* 将图片下方多出来的几像素去除 */
      /* vertical-align: top; */
      /* 也可以通过设置为 block 元素来去除 */
      display: block;
    }

    .item .top .cover {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      /* width: 140px;
      height: 140px; */
      /* width: 100%;
      height: 100%; */
      /* background-color: rgba(102, 193, 140, .8); */
      background-image: url("./images/music_sprite_01.png");
      background-position: 0 0;
    }

    .item .top .info {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;

      padding-left: 8px;

      /* width: 100%; */
      height: 27px;
      /* background-color: #B0D5DF; */
      background: url("./images/music_sprite_01.png") 0 -537px;
      line-height: 27px;
      font-size: 12px;
      color: #ccc;
    }

    .item .top .info .icon-music {
      position: relative;
      top: 1px;
    }

    .item .top .info .count {
      margin-left: 4px;
    }

    .item .top .info .icon-play {
      /* 绝对定位 + 上下 margin auto 实现在父元素中右侧居中 */
      position: absolute;
      top: 0;
      bottom: 0;
      right: 10px;
      margin: auto 0;
    }

    .item .top .info .icon-play:hover {
      background-position: 0 -60px;
      cursor: pointer;
    }

    /* 下半部分 */
    .item .bottom {
      display: block;
      margin-top: 8px;
      font-size: 14px;
      color: #000;
    }

    .item .bottom:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <div class="box">
    <div class="item">
      <div class="top">
        <img src="./images/music_album01.jpg" alt="歌单封面">
        <a class="cover" href="#"></a>
        <div class="info">
          <i class="sprite_02 sprite_02_icon_music icon-music"></i>
          <span class="count">62万</span>
          <i class="sprite_02 sprite_02_icon_play icon-play"></i>
        </div>
      </div>
      <a class="bottom" href="#">
        天气好的话，把耳机分给我一半吧
      </a>
    </div>
    <div class="item">
      <div class="top">
        <img src="./images/music_album01.jpg" alt="歌单封面">
        <a class="cover" href="#"></a>
        <div class="info">
          <i class="sprite_02 sprite_02_icon_music icon-music"></i>
          <span class="count">62万</span>
          <i class="sprite_02 sprite_02_icon_play icon-play"></i>
        </div>
      </div>
      <a class="bottom" href="#">
        天气好的话，把耳机分给我一半吧
      </a>
    </div>
    <div class="item">
      <div class="top">
        <img src="./images/music_album01.jpg" alt="歌单封面">
        <a class="cover" href="#"></a>
        <div class="info">
          <i class="sprite_02 sprite_02_icon_music icon-music"></i>
          <span class="count">62万</span>
          <i class="sprite_02 sprite_02_icon_play icon-play"></i>
        </div>
      </div>
      <a class="bottom" href="#">
        天气好的话，把耳机分给我一半吧
      </a>
    </div>
    <div class="item">
      <div class="top">
        <img src="./images/music_album01.jpg" alt="歌单封面">
        <a class="cover" href="#"></a>
        <div class="info">
          <i class="sprite_02 sprite_02_icon_music icon-music"></i>
          <span class="count">62万</span>
          <i class="sprite_02 sprite_02_icon_play icon-play"></i>
        </div>
      </div>
      <a class="bottom" href="#">
        天气好的话，把耳机分给我一半吧
      </a>
    </div>
    <div class="item">
      <div class="top">
        <img src="./images/music_album01.jpg" alt="歌单封面">
        <a class="cover" href="#"></a>
        <div class="info">
          <i class="sprite_02 sprite_02_icon_music icon-music"></i>
          <span class="count">62万</span>
          <i class="sprite_02 sprite_02_icon_play icon-play"></i>
        </div>
      </div>
      <a class="bottom" href="#">
        天气好的话，把耳机分给我一半吧
      </a>
    </div>
    <div class="item">
      <div class="top">
        <img src="./images/music_album01.jpg" alt="歌单封面">
        <a class="cover" href="#"></a>
        <div class="info">
          <i class="sprite_02 sprite_02_icon_music icon-music"></i>
          <span class="count">62万</span>
          <i class="sprite_02 sprite_02_icon_play icon-play"></i>
        </div>
      </div>
      <a class="bottom" href="#">
        天气好的话，把耳机分给我一半吧
      </a>
    </div>
    <div class="item">
      <div class="top">
        <img src="./images/music_album01.jpg" alt="歌单封面">
        <a class="cover" href="#"></a>
        <div class="info">
          <i class="sprite_02 sprite_02_icon_music icon-music"></i>
          <span class="count">62万</span>
          <i class="sprite_02 sprite_02_icon_play icon-play"></i>
        </div>
      </div>
      <a class="bottom" href="#">
        天气好的话，把耳机分给我一半吧
      </a>
    </div>
    <div class="item">
      <div class="top">
        <img src="./images/music_album01.jpg" alt="歌单封面">
        <a class="cover" href="#"></a>
        <div class="info">
          <i class="sprite_02 sprite_02_icon_music icon-music"></i>
          <span class="count">62万</span>
          <i class="sprite_02 sprite_02_icon_play icon-play"></i>
        </div>
      </div>
      <a class="bottom" href="#">
        天气好的话，把耳机分给我一半吧
      </a>
    </div>
  </div>

</body>
</html>
```

## 五. 完成下面的案例练习

- 提示：可以不用上面的图标
- 可以在 `iconfont` 上找到对应的图标
  - 练习字体图标
  - 直接 `png`

![image-20220406230906517](https://tva1.sinaimg.cn/large/e6c9d24egy1h10ekm9jenj207h06hq33.jpg)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./css/reset.css">
  <style>
    /* 重置样式 */
    a {
      /* display: inline-block; */
      display: block;
    }

    i {
      font-style: normal;
    }

    /* 公共样式 */
    .icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      /* background-color: #000; */
    }

    .icon_video_play_count {
      background-image: url("./images/video-play-count.svg");
    }

    .icon_video_danmaku {
      background-image: url("./images/video-danmaku.svg");
    }

    /* 布局样式 */
    .item {
      margin: 100px auto;
      width: 270px;
    }

    .item .album a {
      position: relative;
    }

    .item .album img {
      display: block;
      border-radius: 6px;
      width: 100%;
    }

    .item .album .cover {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 0 0 6px 6px;
      padding: 16px 8px 6px;
      /* background-color: #f66; */
      background-image: linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,.8) 100%);
      color: #fff;
      font-size: 13px;
    }

    .item .cover .video-play-count,
    .item .cover .video-danmaku {
      display: inline-block;
      margin-right: 10px;
    }

    .item .video-play-count .icon,
    .item .video-danmaku .icon {
      position: relative;
      top: 4px;
    }

    .item .cover .duration {
      position: absolute;
      right: 8px;
    }

    .item .info a {
      /* width: 100%; */
    }

    .item .info .title {
      margin-top: 8px;
      font-size: 15px;
      color: #18191c;

      /* 文本显示一行（有一个前提：当前元素的宽度需要固定下来），显示不完的内容用省略号代替 */
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      /* 文本显示两行，显示不完的内容用省略号代替 */
      /* display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical; */
    }

    .item .info .owner {
      margin-top: 5px;
    }

    .item .owner a {
      color: #9499a0;
      font-size: 13px;
    }

    .item .owner img {
      position: relative;
      top: 3px;
      width: 16px;
      height: 16px;
      color: #9499a0;
    }

    .item .owner .widget-up {
      position: relative;
      top: 3px;
      display: inline-block;
      width: 16px;
      height: 16px;
      background-image: url(./images/widget-up.svg);
      background-repeat: no-repeat;
      background-position: 0 2px;
      /* background-color: red; */
    }

    .item .owner .author::before {
      position: relative;
      top: 1px;
      display: inline-block;
      margin-right: 2px;
      width: 16px;
      height: 16px;
      content: url("./images/widget-up.svg");
    }
  </style>
</head>
<body>

  <div class="item">
    <div class="album">
      <a href="https://www.bilibili.com/video/BV1gT4y1i7Lc?vd_source=8b9417088af38c747028c141d420e38b" target="_blank">
        <!-- img 元素设置 referrerpolicy 属性解决图片获取不到的问题，参考资料：https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-referrerpolicy -->
        <img src="https://i2.hdslb.com/bfs/archive/9c763bf06b7765462eac62cc0a9a34b260d3f9c8.jpg@672w_378h_1c.webp" alt="懒羊羊图片" referrerpolicy="no-referrer">
        <div class="cover">
          <div class="video-play-count">
            <i class="icon icon_video_play_count"></i>
            <span>3万</span>
          </div>
          <div class="video-danmaku">
            <i class="icon icon_video_danmaku"></i>
            <span>128</span>
          </div>
          <span class="duration">23:54</span>
        </div>
      </a>
    </div>
    <div class="info">
      <a href="#">
        <h3 class="title" title="萌化了！谁会不喜欢毛茸茸的小懒懒呢？萌化了！谁会不喜欢毛茸茸的小懒懒呢？萌化了！谁会不喜欢毛茸茸的小懒懒呢？萌化了！谁会不喜欢毛茸茸的小懒懒呢？萌化了！谁会不喜欢毛茸茸的小懒懒呢？">萌化了！谁会不喜欢毛茸茸的小懒懒呢？萌化了！谁会不喜欢毛茸茸的小懒懒呢？萌化了！谁会不喜欢毛茸茸的小懒懒呢？萌化了！谁会不喜欢毛茸茸的小懒懒呢？萌化了！谁会不喜欢毛茸茸的小懒懒呢？</h3>
      </a>
      <p class="owner">
        <a href="#">
          <!-- <img src="./images/widget-up.svg" alt="up主小图标"> -->
          <!-- <span class="widget-up"></span> -->
          <span class="author">Muxi慕喜咩</span>
          <span class="date"> · 3-20</span>
        </a>
      </p>
    </div>
  </div>

</body>
</html>
```















