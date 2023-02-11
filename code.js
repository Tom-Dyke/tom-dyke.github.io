<html>
    <head>
        <script> 
    		document.addEventListener("DOMContentLoaded", function() {
  
			var buttonNames = ['Best', 'Very good', 'Good', 'Not good or bad', 'Not very good', 'Worst'];
			var buttons = [];
			for (var i = 0; i < buttonNames.length; i++) {
 			 var button = document.createElement('button');
 			 button.innerHTML = buttonNames[i];
  		 	 buttons.push(button);
  			 document.body.appendChild(button);
			 }

				for (var i = 0; i < buttons.length; i++) {
 				 buttons[i].onclick = function() {
 				   for (var j = 0; j < buttons.length; j++) {
 				     buttons[j].style.backgroundColor = 'white';
   			 	}
	 			   this.style.backgroundColor = 'yellow';
				  };
				}
			}
		)
		</script>
    </head>
</html>
