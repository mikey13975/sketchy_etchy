// var numberInput = document.getElementById("nmbrBoxes").value;
// console.log(numberInput);

var btn = document.getElementById("btn");

console.log(btn);

function addBoxes(){
	var usrInput =document.getElementById('input');
	console.log(usrInput);
	
	var x = usrInput.value;	
	console.log(x);	
	var mainContain = document.getElementById('main',);
	
	for (let i = 0; i < x; i++) {
		var box = document.createElement('div');
		box.className = 'colBox';
		for (let j = 0; j < x; j++ ) {
			var rowBox = document.createElement('div');
			
			rowBox.className = 'rowBox';
				
			box.appendChild(rowBox);
				
			rowBox.addEventListener("mouseover",function (e) {
				var randomColor = 'rgb('+ Math.floor(Math.random() * 255) +','+  Math.floor(Math.random() * 255) +','+ Math.floor(Math.random() * 255) +')'; 
				console.log(randomColor);
				e.target.style.backgroundColor= randomColor;
			// console.log(e.target.style.backgroundColor);
		});
			
		}
		
		
		
		console.log(i);
		
		mainContain.appendChild(box);}
		console.log(mainContain);		
		const test = document.getElementsByClassName('colBox');
		console.log(test+' ,'+ rowBox);
	};
	
	btn.addEventListener("click", addBoxes);
	
	
	// var colored = document.querySelectorAll('rowBox');

	// console.log(colored);

	// addEventListener('mouseover', changeColor);