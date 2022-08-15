
{/* // <![CDATA[ */}
    !function(e,t,a){function n(){c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),o(),r()}function r(){for(var e=0;e<d.length;e++)d[e].alpha<=0?(t.body.removeChild(d[e].el),d.splice(e,1)):(d[e].y--,d[e].scale+=.004,d[e].alpha-=.013,d[e].el.style.cssText="left:"+d[e].x+"px;top:"+d[e].y+"px;opacity:"+d[e].alpha+";transform:scale("+d[e].scale+","+d[e].scale+") rotate(45deg);background:"+d[e].color+";z-index:99999");requestAnimationFrame(r)}function o(){var t="function"==typeof e.onclick&&e.onclick;e.onclick=function(e){t&&t(),i(e)}}function i(e){var a=t.createElement("div");a.className="heart",d.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:s()}),t.body.appendChild(a)}function c(e){var a=t.createElement("style");a.type="text/css";try{a.appendChild(t.createTextNode(e))}catch(t){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)}function s(){return"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}var d=[];e.requestAnimationFrame=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}}(),n()}(window,document);
    {/* // ]]> */}
    const icon1 = document.getElementById("heart1");
    const icon2 = document.getElementById("heart2");
    const icon3 = document.getElementById("heart3");
    const icon4 = document.getElementById("heart4");
    const icon5 = document.getElementById("heart5");
    const icon6 = document.getElementById("heart6");
    const icon7 = document.getElementById("heart7");
    const icon8 = document.getElementById("heart8");
    const icon9 = document.getElementById("heart9");
    const icon10 = document.getElementById("heart10");
    const icon11 = document.getElementById("heart11");
    const icon12 = document.getElementById("heart12");
    const icon13 = document.getElementById("heart13");
    const icon14 = document.getElementById("heart14");
    const icon15 = document.getElementById("heart15");
    const icon16 = document.getElementById("heart16");
    const icon17 = document.getElementById("heart17");
    const icon18 = document.getElementById("heart18");
    function change(){       
         if(icon1.style.color=="red"){
            icon1.style.color = "grey";
            icon2.style.color = "grey";
            icon3.style.color = "grey";
            icon4.style.color = "grey";
            icon5.style.color = "grey";
            icon6.style.color = "grey";
            icon7.style.color = "grey";
            icon8.style.color = "grey";
            icon9.style.color = "grey";
            icon10.style.color = "grey";
            icon11.style.color = "grey";
            icon12.style.color = "grey";
            icon13.style.color = "grey";
            icon14.style.color = "grey";
            icon15.style.color = "grey";
            icon16.style.color = "grey";
            icon17.style.color = "grey";
            icon18.style.color = "grey";
        }else{
            icon1.style.color = "red";
            icon1.style.color = "red";
            icon2.style.color = "red";
            icon3.style.color = "red";
            icon4.style.color = "red";
            icon5.style.color = "red";
            icon6.style.color = "red";
            icon7.style.color = "red";
            icon8.style.color = "red";
            icon9.style.color = "red";
            icon10.style.color = "red";
            icon11.style.color = "red";
            icon12.style.color = "red";
            icon13.style.color = "red";
            icon14.style.color = "red";
            icon15.style.color = "red";
            icon16.style.color = "red";
            icon17.style.color = "red";
            icon18.style.color = "red";
            }
    };
    

    var arrSlide = ["tcc.jpg","tc1.jpg",];
      var arrSlide1 = ["td2.jpg","td3.jpg", "tdhome.jpg",];
      var i = 0;
      var t, d;
      var vSlide = document.getElementById("mySlide");
      var vSlide_1 = document.getElementById("mySlide_1");
      function fNext() {
        i++;
        if (i >= arrSlide.length) i = 0;
        vSlide.src = "./img/" + arrSlide[i];
      }
      function fNext_1(){
        i++;
        if(i>=arrSlide1.length) i=0;
        vSlide_1.src = "./img/" + arrSlide1[i];
      }

        function fStart(){
        t = window.setInterval(fNext, 1000),
        d = window.setInterval(fNext_1, 1500);
          
        }


    function send(){
        var email = document.getElementById("email-box");
        if(email.length>0){
            alert("This function is being developed .-._.-.");
        }
    }
    