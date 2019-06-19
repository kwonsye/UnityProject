#pragma strict
public var snowflakeUI : GUITexture;
public var snowBallCountText : GUIText;

private var snowBallCount : int;

function Awake(){
 	// 고정 192 x.1080 
    Screen.SetResolution(1920, 1080, true);
    
    var width = Screen.width;
    var height = Screen.height;
    
    snowflakeUI.pixelInset = new Rect(-1*(width/2.2), (height/3.4)-80, 70, 70);
    snowBallCountText.pixelOffset.x = -1*(width/2.2)+ 80; 
    snowBallCountText.pixelOffset.y = (height/3.4)-80+ 60; 
}

function Start () {

}

function Update () {
	
	snowBallCountText.text = "X " + snowBallCount.ToString(); 
}

function GetSnowBallCount(ballCount:int){
	Debug.Log(ballCount);
	snowBallCount = ballCount;
}