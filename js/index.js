//30no2 2017-08-06
var menuBtn = document.querySelector('.menu-btn');
var btn = document.querySelector('.menu-btn-icon');
var menu = document.querySelector('.nav-container-list');
var menuIsCollapse = false;
// menu.style.display = 'none';

menuBtn.onclick = function(){
    menuIsCollapse =!menuIsCollapse;
    if(menuIsCollapse){
        menu.style.display = 'block';
        btn.classList.remove('icon-menu');
        btn.classList.add('icon-cross');
    }else{
        menu.style.display = 'none';
        btn.classList.remove('icon-cross');
        btn.classList.add('icon-menu');

    }
}

//对于不支持的matchMedia的浏览器采用监听resize的事件
if(window.matchMedia){
    var mql = window.matchMedia("(min-width:480px)");
    mql.addListener(mediaChangeHandler);
    mediaChangeHandler(mql);
}else{
    window.addEventListener('resize',function(){
        var innerWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
        mediaChangeHandler(
            innerWidth >= 480 ? {matches:true} : {matches:false}
        )
    },false);
}

function mediaChangeHandler(mql){
    if(mql.matches){
        menu.style.display = '';
    }else{
        if(menuIsCollapse){
            menu.style.display = 'none';
        }else{
            menu.style.display = '';
        }
    }
}