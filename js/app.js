var ViewModel = function() {
	var self = this;
	self.clickCount = ko.observable(0);
	self.name = ko.observable("Reily");
	self.imgSrc = ko.observable("img/1413379559_412a540d29_z.jpg");
	self.imgAttribution = ko.observable("");

	self.level = ko.computed(function() {
		
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
	

	self.incrementCounter = function() {
		self.clickCount(self.clickCount() + 1);
	};
	
};

ko.applyBindings(new ViewModel());