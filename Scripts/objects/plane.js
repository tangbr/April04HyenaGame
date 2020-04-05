"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Plane = /** @class */ (function (_super) {
        __extends(Plane, _super);
        // CONSTRUCTOR
        function Plane() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("plane"), 0, 0, true) || this;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Plane.prototype, "engineSound", {
            // PUBLIC PROPERTIES
            // readonly property
            get: function () {
                return this._engineSound;
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE METHODS
        Plane.prototype._checkBounds = function () {
            // left boundary
            if (this.position.x <= this.halfWidth) {
                this.position = new objects.Vector2(this.halfWidth, this.position.y);
            }
            // right boundary
            if (this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth) {
                this.position = new objects.Vector2(config.Game.SCREEN_WIDTH - this.halfWidth, this.position.y);
            }
        };
        Plane.prototype._move = function () {
            var newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, 0.05);
            /*   if((config.Game.KEYBOARD_MANAGER.MoveLeft) || config.Game.KEYBOARD_MANAGER.MoveRight))
              {
                   let newPositionX = (config.Game.KEYBOARD_MANAGER.MoveRight) ?
                   this.position.x + this._horizontalSpeed : this.position.x - this._horizontalSpeed;
   
                   this.position =  new Vector2(newPositionX,this._verticalPosition);
              } */
            this.position = new objects.Vector2(newPositionX, this._verticalPosition);
        };
        // PUBLIC METHODS
        Plane.prototype.Start = function () {
            this.name = "plane";
            this._verticalPosition = 430; // locked to the bottom of the screen
            this._engineSound = createjs.Sound.play("engine");
            this._engineSound.volume = 0.25;
            this._engineSound.loop = -1; // loop forever
            this._horizontalSpeed = 10;
            //       this.position = new objects.Vector2(config.Game.SCREEN_WIDTH*0.5, this._verticalPosition);
        };
        Plane.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Plane.prototype.Reset = function () {
        };
        return Plane;
    }(objects.GameObject));
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map