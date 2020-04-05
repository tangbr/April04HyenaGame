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
var scenes;
(function (scenes) {
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Start.prototype.Start = function () {
            //instantiate a new Text object
            this._welcomeLabel = new objects.Label("Hyena's Venture", "30px", "Consolas", "#FFFF00", 320, 180, true);
            this._logoLabel = new objects.Label("贏 Inc.", "45px", "Consolas", "#00FF00", 110, 30, true);
            // buttons
            this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 320, 430, true);
            this._exitButton = new objects.Button(config.Game.ASSETS.getResult("exitButton"), 120, 430, true);
            this._instructionButton = new objects.Button(config.Game.ASSETS.getResult("instructionButton"), 520, 430, true);
            this._ocean = new objects.Ocean();
            this.Main();
        };
        Start.prototype.Update = function () {
            this._ocean.Update();
        };
        Start.prototype.Main = function () {
            var _this = this;
            this.addChild(this._ocean);
            this.addChild(this._welcomeLabel);
            this.addChild(this._logoLabel);
            this.addChild(this._startButton);
            this.addChild(this._instructionButton);
            this.addChild(this._exitButton);
            this._startButton.on("click", function () {
                config.Game.SCENE = scenes.State.PLAY;
            });
            this._instructionButton.on("click", function () {
                window.alert("instruction:   Academic purpose only! PS Guide Attention!     blablabla......");
            });
            this._exitButton.on("click", function () {
                _this.removeAllChildren();
                //config.Game.SCENE = scenes.State.PLAY;
            });
        };
        Start.prototype.Clean = function () {
            this.removeAllChildren();
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map