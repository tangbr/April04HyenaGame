module scenes
{
    export class Start extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _welcomeLabel: objects.Label;
            private _logoLabel: objects.Label;
        private _startButton: objects.Button;
        private _instructionButton: objects.Button;
        private _exitButton: objects.Button;
        private _ocean: objects.Ocean;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void 
        {
             //instantiate a new Text object
            this._welcomeLabel = new objects.Label("Hyena's Venture", "30px", "Consolas", "#FFFF00", 320, 180, true);
            this._logoLabel = new objects.Label("贏 Inc.", "45px", "Consolas", "#00FF00", 110, 30, true);

            // buttons
             this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 320, 430, true);
             this._exitButton = new objects.Button(config.Game.ASSETS.getResult("exitButton"), 120, 430, true);
             this._instructionButton = new objects.Button(config.Game.ASSETS.getResult("instructionButton"), 520, 430, true);

             this._ocean = new objects.Ocean();
            this.Main();
        }        
        
        public Update(): void 
        {
           this._ocean.Update();
        }
        
        public Main(): void 
        {
            this.addChild(this._ocean);
       
            this.addChild(this._welcomeLabel);

            this.addChild(this._logoLabel);
            this.addChild(this._startButton);  
            this.addChild(this._instructionButton);
            this.addChild(this._exitButton);

            this._startButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.PLAY;
            });
            this._instructionButton.on("click", ()=>{
                window.alert("instruction:   Academic purpose only! PS Guide Attention!     blablabla......");
            });
            this._exitButton.on("click", ()=>{
                this.removeAllChildren();
                
                 //config.Game.SCENE = scenes.State.PLAY;
            });

        }

        public Clean():void
        {
            this.removeAllChildren();
        }

        
    }
}