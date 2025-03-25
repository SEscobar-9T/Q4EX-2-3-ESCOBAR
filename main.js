	// if statement
// function verifyAge() {
// let age = document.getElementById('age').value;
	
// 	// if (age < 18) { window.alert("Sorry, you are not of legal age to vote."); }
// 	// if (age >= 18) { window.alert("You may proceed to the next step."); }
// }
	
	// if-else
function verifyAge() {
	let age = document.getElementById('age').value;
	if (age < 18) { window.alert("Sorry, you are not of legal age to vote."); }
	else { window.alert("You are eligible, please proceed."); }
	}

// average
	function verifyAverage() {
	let average = document.getElementById('average').value;
	if (average < 75) { window.alert("You have failed this subject, do better next time") }
	else { window.alert("You have passed this subject."); }
	
}

