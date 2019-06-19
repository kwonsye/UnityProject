#pragma strict
//var punch_sound : AudioClip;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider){
	Debug.Log(other);
	
	if(other.gameObject.tag == "snowman"){
			other.gameObject.SendMessage("YouAreHit");
	}
	
	Destroy(gameObject); // 눈 제거

}