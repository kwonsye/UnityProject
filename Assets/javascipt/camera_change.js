#pragma strict
var cameraManager : CameraManager; // call cameraManager

function Start () {

}

function Update () {
	if(Input.GetKey("2")){
		cameraManager.miniCamOn();
	}
	if(Input.GetKey("1")){
		cameraManager.mainCamOn();
	}
}