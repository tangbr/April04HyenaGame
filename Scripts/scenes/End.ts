module scenes
{
    export class End extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _logoLabel: objects.Label;
        private _gameOverLabel: objects.Label;
        
        private _restartButton: objects.Button;
                                                    private _exittomenuButton: objects.Button;
        private _ocean: objects.Ocean;

        private _scoreBoard: managers.ScoreBoard;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        // Initializing and Instantiating
        public Start(): void 
        {
             //instantiate a new Text object
            this._gameOverLabel = new objects.Label("Game Over", "80px", "Consolas", "#FFFF00", 320, 180, true);
            this._logoLabel = new objects.Label("贏 Inc.", "45px", "Consolas", "#00FF00", 110, 30, true);
            // buttons
             this._restartButton = new objects.Button(config.Game.ASSETS.getResult("restartButton"), 320, 430, true);
             this._exittomenuButton = new objects.Button(config.Game.ASSETS.getResult("exittomenuButton"), 140, 430, true);
  
             this._ocean = new objects.Ocean();

             this._scoreBoard = new managers.ScoreBoard();
             this._scoreBoard.HighScore = config.Game.HIGH_SCORE;
             this.Main();
        }        
        
        public Update(): void 
        {
            this._ocean.Update();
        }
        
        public Main(): void 
        {
            this.addChild(this._ocean);
            this.addChild(this._logoLabel);
            this.addChild(this._gameOverLabel);

        
            this.addChild(this._restartButton);
            this.addChild(this._exittomenuButton);
            this._restartButton.on("click", ()=>{
                config.Game.LIVES = 5;
                config.Game.SCORE = 0;
                config.Game.SCENE = scenes.State.PLAY;
            });
            this._exittomenuButton.on("click", ()=>{
                
                config.Game.SCENE = scenes.State.START;
            });
            this.addChild(this._scoreBoard.HighScoreLabel);

        }

        public Clean():void
        {
            this.removeAllChildren();
        }

        
    }
}