Template.currentTag.helpers({
	Tag: function (i) {
		var photos = Tags.find().fetch();

		return photos[i].img;
	}
});