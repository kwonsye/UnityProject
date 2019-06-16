#pragma strict
var walkSpeed : float = 3.0; // walk speed
var gravity : float = 20.0; // gravity
private var velocity : Vector3; // current speed

function Start () {
	animation["Walk"].speed = 2.0;
	
}

function Update () {
	var controller : CharacterController = GetComponent(CharacterController);
	velocity = Vector3(Input.GetAxis("Horizontal"),0, Input.GetAxis("Vertical"));
	velocity *= walkSpeed;
	if(controller.isGrounded){
		if(velocity.magnitude > 0.5){// if velocity exists
			animation.CrossFade("Walk", 0.1); // animation operates
			transform.LookAt(transform.position + velocity);// move
		}
		else{
			animation.CrossFade("Idle",0.1);
		}
	}
	velocity.y -= gravity * Time.deltaTime;
	controller.Move(velocity * Time.deltaTime);
}
