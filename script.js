function fruits() {
	var name = document.getElementById('case1').value;
	var enter;
	switch(name) {
         case (name = "apple"):
         	enter = "Apple Price 250/kg";
         	break;
         case (name = "orange"):
         	enter = "orange Price 120/kg";
         	break;
         case (name = "Onion"):
            enter = "Onion Price 30/kg";
         	break;
         case (name = "lemon"):
            enter = "lemon Price 30/kg";
         	break;
         case (name = "Banana"):
            enter = "Banana Price 30/kg";
         	break;
         default: 
            enter = "Sorry! sold out";
	}  
	 document.getElementById('getvalue').innerHTML = enter; 
}
function animal() {
	var wild = document.getElementById('case2').value;
	var ans;
	switch(wild) {
		case 'cow':
		case 'dog':
		case 'wolf':
		case 'camel':
		ans = "Available at vandaloor zoo";
		break;
		case 'dinosur':
		default:
		ans = "not a case";
	}
	document.getElementById('getvalue1').innerHTML = ans;
}
// For loop example 1
function array() {
	var triodesk =["Essaki","siva","Raja","Prapa","Mani","Manoj","Sree"];
	var len = triodesk.length;
	var txt = "";
	var i;
	for(i = 0; i < len; i++) {
		txt += triodesk[i] + "<br>";
	}
	document.getElementById('res').innerHTML = txt;
}
// For loop example 2
function array1() {
	var items = ["pizza","burger","springrole","dhosa","iteli","rice","veg-rice","sambar-rice","biriyani","veg-biriyani"];
	var len = items.length;
	var ans1 = "";
	var i;
	for(i = 0; i < len; i++) {
		ans1 += items[i] + "<br>";
	}
	document.getElementById('res1').innerHTML = ans1;
}