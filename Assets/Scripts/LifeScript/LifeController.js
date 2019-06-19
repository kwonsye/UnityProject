#pragma strict
public var heartUI : GUITexture;
public var gameOverUI : GameObject;

private var lifeCount : int; //생명 개수
private var isDie : boolean; //죽었는지 여부

function Awake(){
 	// 고정 192 x.1080 
    Screen.SetResolution(1920, 1080, true);
    
    var width = Screen.width;
    var height = Screen.height;
    
    heartUI.pixelInset = new Rect(-1*(width/2.2), (height/3.4), 195, 60);
}

function Start () {
	   
	lifeCount = 3;
}

function Update () {

}

function HitBySnowman(object:GameObject){
	
	//Debug.Log(object);
	if(object.tag == "snowman"){
		
		if(isDie == true){
			return;
		} 
		else {
		
		//하트 개수 줄이기
		lifeCount--;
		
		switch(lifeCount){
			case 0 : 
				heartUI.active = false;
				isDie = true;
				YouAreDie();
				break;
			
			case 1 : 
				heartUI.texture = Resources.Load("UI/LifeUI/OneHeart_BG");
				
				heartUI.pixelInset.width = 60;
				heartUI.pixelInset.height = 60;
		
				break;
			
			case 2 : 
				heartUI.texture = Resources.Load("UI/LifeUI/TwoHeart_BG");
				
				heartUI.pixelInset.width = 128;
				heartUI.pixelInset.height = 60;
				
				break;
				
			case 3 : 
			
				heartUI.texture = Resources.Load("UI/LifeUI/ThreeHeart_BG");
		
				heartUI.pixelInset.width = 200;
				heartUI.pixelInset.height = 60;
				
				break;
				
			default :
			
				Debug.Log("LifeCount Error");
			}
		}
		
	}
	
	
}

function YouAreDie(){
	
	Debug.Log("die");
	GameObject.Find("GameController").SendMessage("GameEnd");
	
	// game over ui 보여주기
	if(gameOverUI != null){
		gameOverUI.SetActive(true);
		
	}
	

}