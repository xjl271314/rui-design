/**
 * 对添加了waves样式名的按钮进行事件监听实现类似material design的水波纹效果
 * xjl
 * 2020-03-20
 */

    document.addEventListener('load', function () {
        var duration = 1000;
        console.log('DOMContentLoaded')
        // 样式string拼凑
        var forStyle = function (position) {
            var cssStr = '';
            for (var key in position) {
                if (position.hasOwnProperty(key)) cssStr += key + ':' + position[key] + ';';
            };
            return cssStr;
        }

        // 获取鼠标点击位置
        var forRect = function (target) {
            var position = {
                    top: 0,
                    left: 0
                },
                ele = document.documentElement;
            'undefined' != typeof target.getBoundingClientRect && (position = target.getBoundingClientRect());
            return {
                top: position.top + window.pageYOffset - ele.clientTop,
                left: position.left + window.pageXOffset - ele.clientLeft
            }
        }
        var show = function (event) {
            var pDiv = event.target,
                cDiv = document.createElement('div');
            pDiv.appendChild(cDiv);
            var rectObj = forRect(pDiv),
                _height = event.pageY - rectObj.top,
                _left = event.pageX - rectObj.left,
                _scale = 'scale(' + pDiv.clientWidth / 100 * 10 + ')';
            var position = {
                top: _height + 'px',
                left: _left + 'px'
            };
            cDiv.className = cDiv.className + " waves-animation";
            cDiv.setAttribute("style", forStyle(position));
            position.transform = _scale;
            position.opacity = "1";
            position["transition-duration"] = duration + "ms";
            position["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)";
            cDiv.setAttribute("style", forStyle(position));
            var finishStyle = {
                opacity: 0,
                "-webkit-transition-duration": duration + "ms", // 过渡时间
                "-moz-transition-duration": duration + "ms",
                "-o-transition-duration": duration + "ms",
                "transition-duration": duration + "ms",
                "-webkit-transform": _scale,
                "-moz-transform": _scale,
                "-ms-transform": _scale,
                "-o-transform": _scale,
                top: _height + "px",
                left: _left + "px",
            };
            setTimeout(function () {
                cDiv.setAttribute("style", forStyle(finishStyle));
                setTimeout(function () {
                    pDiv.removeChild(cDiv);
                }, duration);
            }, 100)
        }
        document.querySelector('.waves').addEventListener('click', function (e) {
            show(e);
        }, !1);
    }, !1);
// }());

// canvas 方案
// var canvas = {},
//   centerX = 0,
//   centerY = 0,
//   color = '',
//   containers = document.getElementsByClassName('material-design')
//   context = {},
//   element = {},
//   radius = 0,
//   // 根据callback生成requestAnimationFrame动画
//   requestAnimFrame = function () {
//    return (
//     window.requestAnimationFrame    || 
//     window.mozRequestAnimationFrame  || 
//     window.oRequestAnimationFrame   || 
//     window.msRequestAnimationFrame   || 
//     function (callback) {
//      window.setTimeout(callback, 1000 / 60);
//     }
//    );
//   } (),
//   // 为每个指定元素生成canves
//   init = function () {
//    containers = Array.prototype.slice.call(containers);
//    for (var i = 0; i < containers.length; i += 1) {
//     canvas = document.createElement('canvas');
//     canvas.addEventListener('click', press, false);
//     containers[i].appendChild(canvas);
//     canvas.style.width ='100%';
//     canvas.style.height='100%';
//     canvas.width = canvas.offsetWidth;
//     canvas.height = canvas.offsetHeight;
//    }
//   },
//   // 点击并且获取需要的数据，如点击坐标、元素大小、颜色
//   press = function (event) {
//    color = event.toElement.parentElement.dataset.color;
//    element = event.toElement;
//    context = element.getContext('2d');
//    radius = 0;
//    centerX = event.offsetX;
//    centerY = event.offsetY;
//    context.clearRect(0, 0, element.width, element.height);
//    draw();
//   },
//   // 绘制圆形，并且执行动画
//   draw = function () {
//    context.beginPath();
//    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
//    context.fillStyle = color;
//    context.fill();
//    radius += 2;
//    // 通过判断半径小于元素宽度，不断绘制 radius += 2 的圆形
//    if (radius < element.width) {
//     requestAnimFrame(draw);
//    }
//   };
 
// init();