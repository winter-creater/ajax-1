//ajax 加载CSS

getCSS.onclick=()=>{
    const request=new XMLHttpRequest()//1、创建对象 XMLHttpRequest()
    request.open('GET','/style.css')//2、调用open()方法
// 3、监听onload/onerror事件
request.onload=()=>{
    console.log('request.response')
    console.log(request.response)
    // 创建style标签
    const style=document.createElement('style')
   //填写style内容
    style.innerHTML=request.response
    //插到网页头里面
    document.head.appendChild(style)
}
request.onerror=()=>{
    console.log('失败了')
}
request.send()//4、发送请求，调用send方法
}
// ajax 加载JS
getJS.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload=()=>{
        console.log('request.response')
        console.log(request.response)
        // 创建script标签
        const script=document.createElement('script')
        script.innerHTML=request.response
        document.body.appendChild(script)
    }
    request.onerror=()=>{
        console.log("出错了")
    }
    request.send()
}
//ajax 加载HTML
getHTML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload=()=>{
        console.log('request.response')
        console.log(request.response)
        const div=document.createElement('div')
        div.innerHTML=request.response
        document.body.appendChild(div)
    }
    request.onerror=()=>{
        console.log('出错了')
    }
    request.send()

}
//ajax 加载xml