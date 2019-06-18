#pragma strict
//var punch_sound : AudioClip;

function Start () {

}

function Update () {

}

function OnCollisionEnter(collisionInfo : Collision){
	Debug.Log(collisionInfo);
	
	if(collisionInfo.gameObject.tag == "snowman"){
			collisionInfo.gameObject.SendMessage("YouAreHit");
	}
	
	Destroy(gameObject); // 눈 제거

}