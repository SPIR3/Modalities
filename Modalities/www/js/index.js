
$(document).on("pagecreate","#pageone",function(){                     

	$('#taptext').on("tap",function(){

        var value = random();
        alert(value);
        
        if(value==true){
            navigator.notification.beep(1);
        }else{
            navigator.notification.beep(2);
        }
 	}); 
 

});

//this code gives a random number between 1 and 0. The 'round' will round it up to 1 or down to 0 depending on the number. It recognises these two values as true(1) and flase(0). The '! Not' says that if the number is not 1 then it is false and if it is not 0 then it must be true.

		function random() {
		return !Math.round(Math.random());
			}