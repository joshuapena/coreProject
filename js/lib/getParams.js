var Params = function() {
    sex = null;
    ethnicity = null;
    major = null;

    console.log("foo");
};

Params.prototype.chooseSex = function(sex) {
    this.sex = sex;

    console.log(this.sex);
};

Params.prototype.chooseEthnicity = function(ethnicity) {
    this.ethnicity = ethnicity;
};

Params.prototype.chooseMajor = function(major) {
    this.major = major;
};
