// firebase.js
// BEIFirebase
// KEN M. HAGGERTY
// CREATED : Jun 07 2017
// EDITED  : Jun 19 2017

function createReview(product, rating, review, username, privacy) {
	// firebase.database().ref().child(product).push({
	// 	rating : rating,
	// 	review : review,
	// 	username : username,
	// 	privacy : privacy
	// });
	var key = firebase.database().ref().child("strings").push(product);
	alert(product+", "+rating+", "+review+", "+username+", "+privacy+", "+key);
}

$("#submit").on("click", function(){
  var $input = $("#product");
  var key = firebase.database().ref().child("strings").push($input.val());
  alert(key);
});
