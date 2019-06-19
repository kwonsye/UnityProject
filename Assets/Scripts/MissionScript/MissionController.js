#pragma strict
public var missionUI : GUITexture;
public var isTest : boolean;
public var testMissionCount : int;

private var completedMissionCount : int;

function Awake(){
 	// 고정 192 x.1080 
    Screen.SetResolution(1920, 1080, true);
    
    var width = Screen.width;
    var height = Screen.height;
    
    missionUI.pixelInset = new Rect(-1*(width/2.2), (height/3.4)-80-80, 235, 60);
}

function Start () {
	if(isTest){
		completedMissionCount = testMissionCount;
	}
}

function Update () {
	
	DrawMissionsUI();
}

function DrawMissionsUI(){
	var remainedMissionCount = 3 - completedMissionCount; // 남은 미션 개수
	switch(remainedMissionCount){
			case 0 : 
				missionUI.texture = Resources.Load("UI/PresentUI/ZeroPresent_BG");
		
				break;
			
			case 1 : 
				missionUI.texture = Resources.Load("UI/PresentUI/OnePresent_BG");
				
		
				break;
			
			case 2 : 
				missionUI.texture = Resources.Load("UI/PresentUI/TwoPresent_BG");
				
				
				break;
				
			case 3 : 
			
				missionUI.texture = Resources.Load("UI/PresentUI/ThreePresent_BG");
		
				break;
				
			default :
			
				Debug.Log("MissionCount Error");
			}
	
}

//성공한 미션 개수 SendMessage로 받는 함수
function GetCompletedMissionCount(completedMission:int){
	
	if(!isTest){
		completedMissionCount = completedMission;
	}
	
}


