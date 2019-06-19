#pragma strict

private var player : GameObject;

function Start () {
	
	player = GameObject.FindWithTag("Player");	
}

function Update () {

}

function GameEnd(){

	//게임이 끝나면 키 입력 안받음
	player.GetComponent(CharacterMotor).enabled = false;
	player.GetComponent(FPSInputController).enabled = false;
	//life 도 줄지 않음
	player.GetComponent(LifeController).enabled = false;
	//snowball도 줄지 않음
	player.GetComponent(SnowBallController).enabled = false;
}