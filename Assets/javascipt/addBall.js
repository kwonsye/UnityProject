#pragma strict
private var addBall : boolean;
//var  : GameObject;
//var addballCount : int;
var labelStyle : GUIStyle;
var mainCam : GameObject;
private var sw : int;
private var sh : int;
function Start () {
	addBall = false;
	Debug.Log("In trigger == false");
}

function Update () {

}
// trigger에 들어가면
function OnTriggerEnter(other:Collider){
	
	if(other.gameObject.tag == "ballCharger"){ // if tag name is BallCharger..
		addBall = true;
		//Debug.Log("In trigger");
		GUI.Label(Rect(sw/6,sh/3, sw*2/3,sh/3),"BallCharger!", labelStyle);
		mainCam.SendMessage("AddBall",10); // 
		}
}

// trigger를 나가면
function OnTriggerExit(other:Collider){
	if(other.gameObject.tag == "ballCharger"){
		yield WaitForSeconds(0.2);
		addBall = false;
		Destroy(other.gameObject);
	}
}

function OnGUI(){
	if(addBall == true){ // mission success
		sw = Screen.width;
		sh = Screen.height;
		GUI.Label(Rect(sw/6,sh/3, sw*2/3,sh/3),"BallCharger!", labelStyle);
	
	
	}
}