#pragma strict
private var santaPosition : Vector3;
var santaPoint : GameObject;
function Start () {
	
}

function Update () {
	santaPosition = santaPoint.transform.position; //현재 산타의 위치를 포지션에 값으로 넣는다.
	gameObject.transform.position = Vector3(santaPosition.x, transform.position.y , santaPosition.z);
}