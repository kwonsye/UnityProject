#pragma strict
var explosionPrefab : GameObject;
var punch_sound : AudioClip;
private var count : int;
function Start () {
	count = 0;
}

function Update () {

}

function YouAreHit(){
	count++;
	yield WaitForSeconds(0.3);
	audio.PlayOneShot(punch_sound);
	Instantiate(explosionPrefab, transform.position, transform.rotation);
	yield WaitForSeconds(0.3);
	
	
	
	if(count == 2){
	yield WaitForSeconds(0.2);
		Destroy(gameObject);}
}

function OnTriggerEnter(other : Collider){
	
	if(other.gameObject.tag=="Player"){
	
		Debug.Log("you are hit");
		other.SendMessage("HitBySnowman", gameObject);
		
	}
}