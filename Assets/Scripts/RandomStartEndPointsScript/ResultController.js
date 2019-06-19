#pragma strict

public var isTest : boolean;
public var testCompletedMissionsCount :int;
public var starGUI : GUITexture;

private var completedMissionsCount : int;

function Awake(){
 	// 고정 192 x.1080 
    Screen.SetResolution(1920, 1080, true);
    
    var width = Screen.width;
    var height = Screen.height;
    
    starGUI.pixelInset = new Rect(-200,-60,400,110);
}

function Start () {
	
}

function Update () {
	drawStars();
}

function drawStars(){
	
	//테스트 시
	if(isTest == true){
		completedMissionsCount = testCompletedMissionsCount;
	}
	
	switch(completedMissionsCount){
	
			case 0 : 
				starGUI.texture = Resources.Load("UI/ResultUI/ZeroStar_BG");
				break;
				
			case 1 : 
				starGUI.texture = Resources.Load("UI/ResultUI/OneStar_BG");
				break;
			
			case 2 : 
				starGUI.texture = Resources.Load("UI/ResultUI/TwoStar_BG");
				break;
				
			case 3 : 
			
				starGUI.texture = Resources.Load("UI/ResultUI/ThreeStar_BG");
				break;
				
			default :
			
				Debug.Log("CompletedMissonsCount Error");
			
		}
}

//성공한 미션 개수 SendMessage로 받는 함수
function GetCompletedMissionCount(completedMission:int){
	
	if(!isTest){
		completedMissionsCount = completedMission;
	}
	
}