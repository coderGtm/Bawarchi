
// checking last checked items by default

storedIngs = JSON.parse(localStorage.getItem("lastIngs"))

if (storedIngs != null ) {
for (i=0; i < storedIngs.length; i++) {		
		document.getElementById(storedIngs[i]).checked = true;
		}
}



meals = fetchedMeals;



imax=45;
emax=6;

available=[]
possible = []

document.getElementById('done').onclick = function() {
  var checkboxes = document.getElementsByName('ingCard');
  for (var checkbox of checkboxes) {
    if (checkbox.checked)
      available.push(checkbox.id);
  }
  
localStorage.setItem("lastIngs",JSON.stringify(available));

checkPossible();
}



function checkPossible() {
				
	for (meal of meals) {
			if (	meal[5].every(ingredient => available.includes(ingredient))) {
						possible.push(meal);
								}
				}
         store();			
}

			
function store () {
		localStorage.setItem("possibleMeals",JSON.stringify(possible));
		if (possible.length > 0) {
		    window.location.href = "result.html";
		}
		else {
		    alert("Sorry! I currently found no meals from these ingredients. You may retry by adding more ingredients.")
		}
}

