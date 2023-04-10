let Dog = new Object();
Dog.name = "Jonny";
Dog.species = "French Bulldog"
Dog.age = 6
Dog.weight = 15 + "kg"
Dog.show = function() {
    console.log(this.name + "\n" + this.species + "\n" + this.age + "\n" + this.weight);
};
Dog.show();