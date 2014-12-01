"use strict";

var Spike = function(world, options) {
    this.world = world;

    this.spriteName = null;

    this.width = 30;
    this.height = 30;
    this.x = this.world.width / 2;
    this.y = this.world.height - this.height;
    this.type = "enemy";

    this.hitbox = {
        x: this.x,
        y: this.y,
        width: 10,
        height: 10
    };
};

Spike.prototype.update = function() {
}; 
Spike.prototype.draw = function() {
    if (this.spriteName === null) {
        this.world.drawRectangle("#008000", this.x, this.y, this.width, this.height);
    } else {
        this.world.drawSprite(this.spriteName, this.x, this.y, this.width, this.height);
    }

};

Spike.prototype.explode = function() {
};
