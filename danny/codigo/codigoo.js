var m;
var im1,im2,im3;
var ic1,ic2,ic3;
var c;

function sliderChange(val){
	m= 	document.getElementById('moto');
	m.innerHTML = val;
	im1 = document.getElementById('m1');
	im2 = document.getElementById('m2');
	im3 = document.getElementById('m3');
	if(val==0){
		im1.style.display = 'block';
		im2.style.display = 'none';
		im3.style.display = 'none';
	}else if(val>=10 && val<60){
		im1.style.display = 'none';
		im2.style.display = 'block';
		im3.style.display = 'none';
	}else if(val>60){
		im1.style.display = 'none';
		im2.style.display = 'none';
		im3.style.display = 'block';
	}
}
function sliderChang(valo){
	m= 	document.getElementById('carro');
	m.innerHTML = valo;
	ic1 = document.getElementById('c1');
	ic2 = document.getElementById('c2');
	ic3 = document.getElementById('c3');
	if(valo==0){
		ic1.style.display = 'block';
		ic2.style.display = 'none';
		ic3.style.display = 'none';
	}else if(valo>=10 && valo<60){
		ic1.style.display = 'none';
		ic2.style.display = 'block';
		ic3.style.display = 'none';
	}else if(valo>60){
		ic1.style.display = 'none';
		ic2.style.display = 'none';
		ic3.style.display = 'block';
	}
}

function moto(val){
	//m= 	document.getElementById('moto');
	y = val * 1000;
	x = document.getElementById('valorm').innerHTML = y
}

function carro(valo){
	//m= 	document.getElementById('moto');
	y = valo * 2000;
	x = document.getElementById('valorc').innerHTML = y
}