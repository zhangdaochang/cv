let cvshow = document.querySelector('#cvShow')

let cv = document.querySelector('#cv')

let yinyang = document.querySelector('#yinyang')

let str = `
面试官 您好，我是张鑫豪

毕业于南开大学现代远程教育学院，计算机大专学历。

会css3 html5 es6

踩坑踩得多 ， 经验足

接下来 展示一下我的前端功底。

那先来个 div
%
画一个太极吧
emmm...
先  一生二
%
然后该让阴阳鱼出来了
%
最后呢


转起来  就有意境了......
%
`
let yinyangCss = [`
    #yinyang{
        border-radius:50%;
        width:400px;
        height:400px;
        position: fixed;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        -moz-box-shadow:0 0 3px rgba(0,0,0,0.5); -webkit-box-shadow:0 0 3px rgba(0,0,0,0.5); box-shadow:0 0 3px rgba(0,0,0,0.5);
    }
    @media(max-width:450px){
        #cvShow{
            height: 50vh;
            overflow: auto;
            padding:10px
        }
        #yinyang{
            top: 65vh;
            bottom: 50px;
            width: 200px;
            height: 200px;
        }
    }
`,`
    #yinyang{
        background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
    }

`,`
    #yinyang:before {
        position: absolute;
        content: '';
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        width: 200px;
        height: 200px;
        border-radius:50%;
        background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 50%);
    }
    #yinyang:after {
        position: absolute;
        content: '';
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        width: 200px;
        height: 200px;
        border-radius:50%;
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 50%);    }
    @media(max-width:450px){
        #yinyang::before{
            width: 100px;
            height: 100px;
        }
        #yinyang::after{
            width: 100px;
            height: 100px;
        }
    }
`,`
    #yinyang{
        transform-origin: center;
        animation: yinyang 2s infinite linear;
    }
`]
let i = 0
function next() {
    let strCache = str.substring(0,i).replace(/\n/g, '<br>')
    
    let cssLengh = strCache.split("%").length-1

    cvshow.innerHTML = strCache.replace( /%/g, '')
    cv.innerHTML = yinyangCss.slice(0,cssLengh).join('')
    cvshow.scrollTo(0,9999)
    if (i<str.length){
        setTimeout(() => {
            next()
            i++
        }, 150);
    }else{
        cvshow.innerHTML = str.replace( /%/g, '').replace(/\n/g, '<br>') + `<br><br><a href="mailto:2051525775@qq.com">我的邮箱：2051525775@qq.com</a><br><a href="https://github.com/zhangdaochang" target="_self">我的github: github.com/zhangdaochang</a>`
        cvshow.scrollTo(0,9999)
    }
    
}

next()