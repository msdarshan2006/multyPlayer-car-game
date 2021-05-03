class Player{
    constructor(){
        this.playerName=null;
        this.playerDistance = 0;
        this.playerID=null;


    }
    getPlayerCount(){
        var playerCountRef = database.ref("playerCount");
        //on function is a listner function which is  used to read the data
        playerCountRef.on("value",function(data){

         playerCount=data.val();
        });
 
    }
    updatePlayerCount(countObj){
            database.ref("/").update(
            {
                playerCount:countObj,
            }

        );
    }
    updatePlayerInfo(){
        database.ref("players/player"+this.playerID).set({
            playerName:this.playerName,
            playerDistance:this.playerDistance,
        });

    }
    static getPlayerInfo(){
        var playerRef = database.ref("players");
        playerRef.on("value", (data)=>{
            allPlayerInfo= data.val();
           });

    }
}
