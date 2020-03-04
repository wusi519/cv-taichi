let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string = `
/*你好我叫小徐
我是一名前端工程师
接下来我要给我的字体加样式了-字体变色*/
body{
  color:#4822DD;
}
/*接下来我要演示一下如何画一个太极
*首先我要准备一个div
*/
#div1{
  width:200px;
  height:200px;
}
/*接下来我要演示一下如何画一个太极
*首先把div变成一个圆*/

#div1{
  border-radius: 50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5)
  border:none;
}
/*八卦是阴阳形成的
*一黑一白*/
#div1{
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
/*接着加两个小圆球*/
#div1::before {
  width:100px;
  height:100px;
  border-radius: 50%;
  top:0;
  left:50%;
  transform:translateX(-50%);
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
 }
#div1::after {
  width:100px;
  height:100px;
  border-radius: 50%;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
 }
`
let string2 = ""
let n = 0

html.innerHTML = string2
style.innerHTML = string2
let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      //如果是回车就不照搬
      string2 += "<br>"
    } else if (string[n] === " ") {
      string2 += "&nbsp;"
    } else {
      string2 += string[n]
    }
    html.innerHTML = string2
    style.innerHTML = string.substring(0, n)
    window.scrollTo(0, 99999)
    html.scrollTo(0, 99999)
    if (n < string.length - 1) {
      n += 1
      step()
    }
  }, 50)
}
step()
