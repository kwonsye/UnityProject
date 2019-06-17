#pragma strict
var mainCam : GameObject; // mainCma
var miniCam : GameObject; // minimapCam

function Start () {
	mainCamOn(); // 게임 시작, 메인 카메라를 켠다.
}

// mainCam 관리
function mainCamOn(){
	mainCam.camera.enabled = true;
	miniCam.camera.enabled = false; // 미니맵 카메라 켜지지 않게 한다.

}

// miniCam 관리
function miniCamOn(){// 메인 카메라와 함께 미니 카메라를 보여준다.
	mainCam.camera.enabled = true; 
	miniCam.camera.enabled = true;

}
function Update () {

}