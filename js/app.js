var Cat = function(data) {
	var self = this;
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nickNames = ko.observableArray(data.nickNames);


	this.level = ko.computed(function() {
		
		if (self.clickCount() <= 10) {
			return "NewBorn";
		}
		else if (self.clickCount() <= 15) {
			return "kitten";
		}
		else {
			return "Adult";
		}
	});
}
var ViewModel = function() {
	var self = this;
	this.currentCat = ko.observable(new Cat({
		name: "Reily",
		clickCount : 0,
		imgSrc : "img/1413379559_412a540d29_z.jpg",
		imgAttribution: "",
		nickNames: ["pink", "fat cat", "bot", "blackie"]
	}));

	this.incrementCounter = function() {
		self.currentCat.clickCount(self.currentCat.clickCount() + 1);
	};
	
};

ko.applyBindings(new ViewModel());