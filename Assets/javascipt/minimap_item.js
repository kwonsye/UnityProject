#pragma strict
var map_sound : AudioClip;
private var call_minimap : boolean;
var cameraManager : CameraManager;
private var item_count : int; // 가지고 있는 미니맵 아이템 수
private var sw : int;
private var sh : int;
var labelStyle : GUIStyle;

function Start () {
	//call_minimap = false;
	item_count = 0;
}

function Update () {
	// miniMap 호출키를 누르면
	if(Input.GetKey("1")){
		getMapItem();
	}
}


// trigger에 들어가면
function OnTriggerEnter(other:Collider){
	
	if(other.gameObject.tag == "minimap"){ // if tag name is minimap...
		//AudioSource map_sound = GetComponent.<AudioSource>(); // add audio effect
		audio.PlayOneShot(map_sound);
		item_count ++; // 미니맵 아이템 추가
		call_minimap = true;
	}
}

// trigger를 나가면
function OnTriggerExit(other:Collider){
	if(other.gameObject.tag == "minimap"){ // destroy minimap...
		yield WaitForSeconds(0.2);
		//call_minimap = false;
		Destroy(other.gameObject);
		Destroy(other.transform.parent.gameObject);
	}
}

function getMapItem(){
	
	if(item_count >= 1){ // minimap_item >= 1
		cameraManager.miniCamOn(); // call minimap mode
		
		//4초 후에 사라짐
		yield WaitForSeconds(7.0);
		cameraManager.mainCamOn();
		item_count --; // 아이템 사용했음으로 -1
	}
	
	else{
		GUI.Label(Rect(sw/6,sh/3, sw*2/3,sh/3),"No ITEM!", labelStyle);
	}

}

function OnGUI(){
	if(Input.GetKey("1")){ 
		if(item_count == 0){
			sw = Screen.width;
			sh = Screen.height;
			GUI.Label(Rect(sw/6,sh/3, sw*2/3,sh/3),"No ITEM!", labelStyle);
		}
	}
}