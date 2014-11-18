var Params = function() {
    this.sex = null;
    this.ethnicity = null;
    this.major = null;

    this.sexChosen = false;
    this.ethnicityChosen = false;
    this.majorChosen = false;
};

Params.prototype.chooseSex = function(sex) {
    this.sex = sex;
    this.sexChosen = true;

    document.getElementById("answerSex").innerHTML = "You have choosen '" + this.sex + "'.";

    document.getElementById("sex").style.display = "none";
    if (!this.ethnicity) {
        document.getElementById("ethnicity").style.display = "inline";
    }
    document.getElementById("sexUndo").style.display = "inline";
    document.getElementById("sexUndoButton").style.display = "inline";
    console.log(this.sexChosen);

    this.check();
};

Params.prototype.chooseEthnicity = function(ethnicity) {
    this.ethnicity = ethnicity;
    this.ethnicityChosen = true;

    document.getElementById("answerEthnicity").innerHTML = 
        "You have choosen '" + this.ethnicity + "'.";

    document.getElementById("ethnicity").style.display = "none";
    if (!this.major) {
        document.getElementById("major").style.display = "inline";
    }
    document.getElementById("ethnicityUndo").style.display = "inline";
    document.getElementById("ethnicityUndoButton").style.display = "inline";

    this.check();
};

Params.prototype.chooseMajor = function(major) {
    this.major = major;
    this.majorChosen = true;

    document.getElementById("answerMajor").innerHTML = 
        "You have choosen '" + this.major + "'.";

    document.getElementById("major").style.display = "none";
    document.getElementById("majorUndo").style.display = "inline";
    document.getElementById("majorUndoButton").style.display = "inline";

    this.check();
};

Params.prototype.undoSex = function() {
    this.sexChosen = false;
    document.getElementById("sex").style.display = "inline";
    document.getElementById("sexUndo").style.display = "none";

    this.check();
};

Params.prototype.undoEthnicity = function() {
    this.ethnicityChosen = false;
    document.getElementById("ethnicity").style.display = "inline";
    document.getElementById("ethnicityUndo").style.display = "none";

    this.check();
};

Params.prototype.undoMajor = function() {
    this.majorChosen = false;
    document.getElementById("major").style.display = "inline";
    document.getElementById("majorUndo").style.display = "none";

    this.check();
};

Params.prototype.check = function() {
    if (this.sexChosen && this.ethnicityChosen && this.majorChosen) {
        document.getElementById("startButton").style.display = "inline";
    } else {
        document.getElementById("startButton").style.display = "none";
    }
};
