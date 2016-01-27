window.onload=function(){//注意：所有的代码哦度要写在这两个大括号内
var body = document.getElementById('body');
var back = document.getElementById('back'),chongzhi=document.getElementsByClassName('chongzhi')
;

var $=function(str){
	return document.getElementsByClassName(str);
}
var $i=function(str){
	return document.getElementById(str);
}
var 
top  = 20 , 
left = 300 ,
poke ,
index = 10 ;
var drow = function(){
	for(var i = 0 ; i < 7 ; i++){
		for(j = 0 ; j<i+1 ; j++){
			poke = document.createElement('div');
			poke.setAttribute('class','poke');
			poke.setAttribute('id',i+'_'+j);
			back.appendChild(poke);
			poke.style.top = top +'px';
			poke.style.left= (6-i)*60 + j*120 +10+'px';
			poke.style.zIndex = index ; 
		}
		top += 50 ;
		index++;
	}
	var poke  = document.getElementsByClassName('poke');
	return poke;
} 
drow();
var poke  = document.getElementsByClassName('poke');
//创建右侧---------------------------------
var aa,dd;
var drow2 = function(){
	var you = document.createElement('div');
	back.appendChild(you);
	you.setAttribute('class','mmmove');
	you.setAttribute('id','you');
	you.style.top = 470 +'px';
	you.style.left=  120*5 +10+'px';
	you.style.zIndex = 500 ;
	you.style.backgroundImage = 'url(./images/da/flower.png)'; 
	top += 1 ;
	you = document.getElementById('you');
	for(var p = 0 ; p< 24 ; p++){
		poket = document.createElement('div');
		poket.setAttribute('class','poket zuo');
		poket.setAttribute('id',12+'_'+p);
		poket.style.zIndex = index ; 
		poket.style.position='absolute';
		index++;
		
		back.appendChild(poket);
	}
	var poket = $('poket');
	mmmove = document.getElementsByClassName('mmmove');
	return poket , mmmove ; 
}
drow2();
var poket = document.getElementsByClassName('poket');
var zuo   = document.getElementsByClassName('zuo');

for(i=0;i<2;i++){
	var qiepai = document.createElement('div');
	back.appendChild(qiepai);
	qiepai.setAttribute('class','qiepai');
	qiepai.setAttribute('id','qiepai'+'_'+i);
	qiepai.style.left   = 3*120+10+'px';
	qiepai = document.getElementsByClassName('qiepai');
}

qiepai[0].style.bottom = '80px';
qiepai[1].style.bottom = '10px';
 
qiepai[0].innerHTML = 'NEXT';
qiepai[1].innerHTML = 'Again';

var previous = null;
var firstnumber='',secendnumber='';
var diyi='',dier='',right = 100 ,defact = 3 ,time;
clearInterval(time);
back.onclick= function(e){
	clearInterval(time);
	var ss = e.target ;
	if(ss == this)return ; 
	if(previous !== null ){
		previous.style.border = 'none';
	}
	var el = ss ,x,y; 
	previous = el ;
	var id = el.getAttribute('id');
	if(id == 'qiepai_0'){
		clearInterval(time);
		if( zuo.length <= 0 ) return ;
		zuo[zuo.length-1].style.zIndex = right ; 
		zuo[zuo.length-1].setAttribute('class','poket you');
	}
	if(id == 'qiepai_1'){
		var you = document.getElementsByClassName('you');
		var puke_m = 0;
		if(you.length <= 0 ){
			 return ;
		}
		defact-=1;

		var yoyo =  you.length;
		for(i = 0 ; i <= yoyo ; i++){
			if(yoyo <= 0 ){
				clearInterval(time);
			}
			console.log(0);
			if(you[0]){
				var yoo =  you[0]; 
				yoo.setAttribute('class','poket zuo');
			}else{
				clearInterval(time);
			}
		}
		right = 100 ;
		if(defact === -1 ){
			alert('你输了 ！');
			location.reload();
			return;
		}
		qiepai[1].innerHTML = "剩余机会: "+defact ; 
	}
	if(String(id).length<3)return;
	x = Number(id.split('_')[0]);
	y = Number(id.split('_')[1]);
	
	var da1 = document.getElementById( (x+1) +'_'+ (y  ) );
	var da2 = document.getElementById( (x+1) +'_'+ (y+1) );
	if(da1 || da2 ){return;}
	el.style.border = '2px solid rgba(234, 25, 73, 0.43)' ; 
	if(firstnumber==''){
			firstnumber = ss.innerHTML ;
			diyi = id ; 
			var yi = document.getElementById(diyi);
			if( ss.innerHTML == 'J' ){
				firstnumber  =  '11' ; 
			} 
			if( ss.innerHTML == 'Q' ){
				firstnumber  =  '12' ; 
			} 
			if( ss.innerHTML == 'K' ){
				yi.style.webkitTransform='translate3d(-'+Math.floor(Math.random()*100)+'px,'
				+1+'px,'+Math.floor(Math.random()*300)+'px) rotateX(360deg)';
				setTimeout(function(){
					back.removeChild(yi);
				},800);
				firstnumber = '' ;secendnumber='';
				diyi='',dier=''; 
			} 
			if( ss.innerHTML == 'A' ){
				firstnumber  =  '1' ; 
			} 
	}else{
		secendnumber= ss.innerHTML ;
		dier = id ;
		var er = document.getElementById(dier);

		if( ss.innerHTML == 'J' ){
			secendnumber  =  '11' ; 
		} 
		if( ss.innerHTML == 'Q' ){
			secendnumber  =  '12' ; 
		} 
		if( ss.innerHTML == 'K' ){
			er.style.webkitTransform='translate3d('+Math.floor(Math.random()*100)+'px,'
				+1+'px,-'+Math.floor(Math.random()*300)+'px) rotateX(360deg)';
			setTimeout(function(){
				back.removeChild(er);
			},800);
			firstnumber='';secendnumber='';
			diyi='',dier=''; 
		} 
		if( ss.innerHTML == 'A' ){
			secendnumber  =  '1' ; 
		} 
		var jjj = true ;
	}
	var dahe = Number(firstnumber) + Number(secendnumber); 
	if( jjj ){
		if( dahe == 13 ){
			yi = document.getElementById(diyi);
			er = document.getElementById(dier);
			yi.style.webkitTransform='translate3d(-'+100+'px,'
				+1+'px,'+Math.floor(Math.random()*300)+'px) rotateX(360deg)';
			
			er.style.webkitTransform='translate3d('+100+'px,'
				+1+'px,-'+Math.floor(Math.random()*300)+'px) rotateX(360deg)';
			setTimeout(function(){
				back.removeChild(yi);
				back.removeChild(er);
			},800);
			firstnumber = '' ; 
			secendnumber = '' ;
			return; 
		}else{
			firstnumber = '' ; secendnumber = '' ;
			diyi='',dier=''; 
		}
	}
	if(poke.length <= 2 ){
		alert('你赢了！');
	}
}
var dict = {
	1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',
	7:'7',8:'8',9:'9',10:'10',11:'J',12:'Q',13:'K'
}
//写一个函数。生成一个 1 - 13 的随机数
var arr = [];
var shu = function(){
	for(var i=0 ; i<13 ;i++){
		var num = Math.floor(Math.random()*13+1);
		arr.push(num);
	}
	for( i=0 ; i<arr.length ; i++){
	}
	return arr;
};
shu();
//写一个函数，生成一付混乱的  poke 
var shengcheng = function(){
	var huase = ['red' ,  'mas','black' , 'fk' ] ;   
	var poker = [] ;
	var pai = {huase:'',number:''},zidian={};
	while(poker.length!=52){
		var hs    = huase[Math.floor(Math.random()*4)];
		var shuzi = dict [Math.floor(Math.random()*13+1)];
		pai = {huase:hs,number: shuzi};
		if( ! zidian[hs+shuzi] ){
			poker.push(pai);
			zidian[hs+shuzi] = true ;
		}
	}
	return poker;
}
shengcheng();
var fuzhi = function(){
	var poker = shengcheng(); 
	for( i = 0 ; i < poke.length ; i++){
		poke[i].innerHTML = poker[i].number ;
		if(poker[i].huase == 'mas'){
			poke[i].style.backgroundImage = 'url(./images/da/mmm.png)' ; 
		}
		if(poker[i].huase == 'red'){
			poke[i].style.backgroundImage = 'url(./images/da/red.png)' ;
			poke[i] .style.color='red';
		} 
		if(poker[i].huase == 'black'){
			poke[i].style.backgroundImage = 'url(./images/da/ht.png)' ; 
		} 
		if(poker[i].huase == 'fk'){
			poke[i].style.backgroundImage = 'url(./images/da/fp.png)' ; 
			poke[i] .style.color='red';
		} 
	}
	for( i = 0 ; i < poket.length ; i++){
		poket[i].innerHTML = poker[28+i].number ;
		if(poker[28+i].huase == 'red'){
			poket[i].style.backgroundImage = 'url(./images/da/red.png)' ; 
			poket[i] .style.color='red';
		} 
		if(poker[28+i].huase == 'black'){
			poket[i].style.backgroundImage = 'url(./images/da/ht.png)' ; 
		} 
		if(poker[28+i].huase == 'fk'){
			poket[i].style.backgroundImage = 'url(./images/da/fp.png)' ; 
			poket[i] .style.color='red';

		} 
		if(poker[28+i].huase == 'mas'){
			poket[i].style.backgroundImage = 'url(./images/da/mmm.png)' ; 
		} 
	}
}
fuzhi();
if(poke.length<2){
	alert('win');
}
document.onmousedown = function(e){
  e.preventDefault();
}
var drowagain = false ; 
var clearall =  function(){
	$('jiemian')[0].style.marginTop = '0px';
	console.log(poke.length);
	var len = poke.length ;
	var tt  = $('poket').length;
	for(var i = 0 ; i < len ; i++){
		back.removeChild(poke[0]);
	}
	for(i = 0 ; i < tt ; i++ ){
		back.removeChild(poket[0]);
	}
	back.removeChild($i('you'));
}
var addall = function(){
	top = 0 ;
	drow();
	drow2();
	shengcheng();
	fuzhi();
}
$('jiemian')[0].style.marginTop = '0px';
$('start')[0].onclick=function(){
	$('jiemian')[0].style.marginTop = '-768px';
	if(drowagain){
		addall();
	}
}
$('chongzhi')[0].onclick = function(){
	var dictt = {};
	var mm = $('mingci').length ;
	var jj = (28-$('poke').length);
	clearall();
	drowagain = true ;
	for(i = 0 ; i < mm ; i++ ){
		if($('mingci')[i].innerHTML.trim(' ').length < 3 && !dictt[i]){
			$('mingci')[i].innerHTML = i+1+'._____'+jj;
			return ; 
		}
	}
}

var arr2 = ["0px","-500px","-1000px","-1500px","-2000px","-2500"];
var num2 = 0 ; 

$('jiantou')[1].onclick = function(){
	num2=num2+1 ; 
	$i('jieshao').style.marginLeft= arr2[num2];
	if(num2 == 6 ){
		num2 = 0 ;
	}
}
$('jiantou')[0].onclick = function(){
	num2=num2-1 ; 
	if(num2 == 0 ){
		num2 = 5 ;
	}
	$i('jieshao').style.marginLeft= arr2[num2];
}
















	

};/*这里是结束的那个花括号*/

