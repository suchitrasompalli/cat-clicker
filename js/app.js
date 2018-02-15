var initialCats = [{
		name: "Reily",
		clickCount : 0,
		imgSrc : "img/cat1.jpg",
		imgAttribution: "",
		nickNames: ["white", "lazy1"]},
		{
		name: "RussianBlue",
		clickCount : 0,
		imgSrc : "img/cat2.jpg",
		imgAttribution: "",
		nickNames: ["velvet", "spy"]},
		{
		name: "Skye",
		clickCount : 0,
		imgSrc : "img/cat3.jpg",
		imgAttribution: "",
		nickNames: ["skype"]},
		{
		name: "Dorito",
		clickCount : 0,
		imgSrc : "img/cat4.jpg",
		imgAttribution: "",
		nickNames: ["carrom player"]},
		{
		name: "Pringles",
		clickCount : 0,
		imgSrc : "img/cat5.jpg",
		imgAttribution: "",
		nickNames: ["blackie", "softee", "thebest"]}
		];

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
	
	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	}

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
	
};

ko.applyBindings(new ViewModel());