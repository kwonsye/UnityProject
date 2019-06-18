﻿#pragma strict
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
	yield WaitForSeconds(0.5);
	audio.PlayOneShot(punch_sound);
	Instantiate(explosionPrefab, transform.position, transform.rotation);
	yield WaitForSeconds(0.5);
	audio.PlayOneShot(punch_sound);
	
	
	if(count == 2){
		Destroy(gameObject);}
}