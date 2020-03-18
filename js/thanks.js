$(document).ready( function() {
		for (let i = 1; i <=22; i++) {
			var newNode = document.createElement("div");
			newNode.style.backgroundImage = ("url('profiles/" + i +".jpg')");
			document.getElementById("grid-thanks").appendChild(newNode);
		}
});