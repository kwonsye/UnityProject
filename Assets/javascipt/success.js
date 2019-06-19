#pragma strict
private var missionCount : int; // the number of mission
private var counter : int; // count the number of successed mission
private var successed : boolean;
var labelStyle : GUIStyle;

var sw : int;
var sh : int;
function Start () {
	successed = false;
	// check missionCount
	
	// tag name == mission 
	missionCount = GameObject.FindGameObjectsWithTag("mission").Length;
	//Debug.Log("start");
}

function Update () {
	
}


function OnTriggerEnter(other:Collider){
	//Debug.Log("touch");
	if(other.gameObject.tag == "mission"){
		//Debug.Log("find tag of mission");
		counter ++; 
		//수연 : SendMessage로 MIssionController.js에 넘겨서 gui 그려줌
		GameObject.Find("GameController").SendMessage("GetCompletedMissionCount", counter);
		if(successed == false){
			//Debug.Log("successed == true");
			successed = true;
			GUI.Label(Rect(sw/6,sh/3, sw*2/3,sh/3),"Mission Success" + counter, labelStyle);
		}
	}

}

function OnTriggerExit(other:Collider){
	if(other.gameObject.tag == "mission"){
		yield WaitForSeconds(0.2);
		successed = false;
	}
}

function OnGUI(){
	if(successed == true){ // mission success
		sw = Screen.width;
		sh = Screen.height;
		GUI.Label(Rect(sw/6,sh/3, sw*2/3,sh/3),"Mission Success" + counter, labelStyle);
	
	
	}
}