//ajax 加载CSS
getCSS.onclick=()=>{
    const request=new XMLHttpRequest()//1、创建对象 XMLHttpRequest()
    request.open('GET','/style.css')//2、调用open()方法，readyState=1
// 3、监听onload/onerror事件
request.onreadystatechange=()=>{
    //下载完成，但不知道下载的是不是正确的事件，成功状态码2xx,失败4xx 5xx
    if(request.readyState===4){  //readyState=4下载完成
        if(request.status>=200&& request.status<300){
             // 创建style标签
             const style=document.createElement('style')
            //填写style内容
             style.innerHTML=request.response
             //插到网页头里面
             document.head.appendChild(style)
        }else{
            alert('加载CSS失败')
        }
    }
}
request.send()//4、发送请求，调用send方法
}
// ajax 加载JS
getJS.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
               const script=document.createElement('script')
                script.innerHTML=request.response
                document.body.appendChild(script)
            }else{
                alert('JS加载出错')
            }
        }
    }
    request.send()
}
// ajax 加载HTML
getHTML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                const div=document.createElement('div')
               div.innerHTML =request.response
               document.body.appendChild(div)
            }else{
                alert('加载HTML失败')
            }
        }
    }
    request.send()
}
//ajax 加载xml
getXML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
            //    const dom=request.responseXML
            //    const text=dom.getElementsByTagName('warning')[0].textContent
            //    console.log(text.trim())//trim()去掉回车，空格
               const message=document.createElement('message')
               message.innerHTML=request.response
               document.body.appendChild(message)
            }
        }

    }
   request.send() 
}
//ajax 加载JSON
getJSON.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
                console.log(request.response)
               const object=JSON.parse(request.response)//JSON.parse()支持符合JSON语法的字符串转变成相应的对象
               myName.textContent=object.name
               console.log(object)
            }else{
                alert('加载JSON出错')
            }
        }
    }
    request.send()
}
// 请求下一页
let n=1
getPage.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 &&request.status<300){
                // console.log(request.response)
                const array=JSON.parse(request.response)
               array.forEach(item => {
                    const li=document.createElement('li')
                    li.textContent=item.id
                    xxx.appendChild(li)
                });
                n+=1
            }else{
                alert('分页加载出错')
            }
        }
    }
    request.send()
}