// firebase.js
// BEIFirebase
// KEN M. HAGGERTY
// CREATED : Jun 07 2017
// EDITED  : Jun 07 2017

function createReview(productName, rating, text, username, privacy) {
	var path = 'products/' + productName;
	firebase.database().ref(path).push({
		rating : rating,
		text : text,
		username : username,
		privacy : privacy
	});
}
