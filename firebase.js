// firebase.js
// BEIFirebase
// KEN M. HAGGERTY
// CREATED : Jun 07 2017
// EDITED  : Jun 07 2017

function createReview(product, rating, review, username, privacy) {
	var path = 'products/' + product;
	firebase.database().ref(path).push({
		rating : rating,
		review : review,
		username : username,
		privacy : privacy
	});
}
