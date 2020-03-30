/*
 * @Prd: 
 * @Link: 
 * @Author: xjl
 * @Email: xujl@weipaitang.com
 * @Date: 2020-03-20 15:32:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-28 14:00:46
 */
window.theme = 'rui-';


// 给所有类似size的class添加宽高
(function(){
    const patt = /^window.theme-?/gi;

    console.log(document.querySelectorAll(patt))
})();