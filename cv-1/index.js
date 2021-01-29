var box = document.querySelector("#box")
var list = document.querySelector("#list")
var styleC = document.querySelector("#styleC")
let content = `/**
 * 你好，我是佳佳，现在我们开始画一个图
 * 首先画一个圆圈
*/
.cirlce {
    width: 200px;
    height: 200px;
    box-shadow: -1px 0 2px #666;
    border-left: 100px solid white;
    border-right: 100px solid black;
    border-radius: 50%;

}
/**
 * 然后呢，再变啊变，变出两个小球
 * 你看看就知道了
 */
.up,.down {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
}
.up {
    background-color: black;
}
.down {
    background-color: white;
    bottom: 0;
}

/**
 * 还差最后一步，就是加两个小点
*/
.up >.dot {
    top: 25px;
    background-color: #fff;
}
.down >.dot {
    bottom: 25px;
    background-color:black;
}

/**
 * 这样的图形就完成了，
 * 是我们可爱的方方老师教我们做的
*/
`
let lenNumber = 0
let string2 =``

// 设置定时器
var fn = function (){
    setTimeout(()=>{
        // 添加内容到页面
        if(lenNumber<=content.length){
            string2 += content.substring(lenNumber,lenNumber+1)
            console.log(string2)
            if (content[lenNumber]==' ')string2 +=`&nbsp;`
            if (content[lenNumber]== '\n') string2+=`<br>`
            list.innerHTML=string2
            styleC.innerHTML = content.substring(0,lenNumber)
            lenNumber+=1;
            window.scrollTo(0, 99999);
            list.scrollTo(0, 99999);
            fn()
        }
 
    },3)
}
fn()