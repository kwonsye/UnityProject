#pragma strict
var ballPrefab : GameObject;
var initialVelocity : float;
var labelStyle : GUIStyle;
private var shot : boolean; // 모든 공을 다 발사했다면 true
private var addBall : boolean; // add ball
private var sw : int;
private var sh : int;
private var ballCount : int;
function Start () {
	ballCount = 10; // 총알의 처음 수
	addBall = false;
}
 
function Update () {
	//ballCount = 10; // 총알의 처음 수
	if(Input.GetButtonDown("Fire1")){ // 마우스가 눌리면 ball이 복제 
	    if(ballCount >= 1) { // 발사된 공이 10개 이하라면 계속 만들어
		var ball : GameObject = Instantiate(ballPrefab, transform.position, transform.rotation);
		ballCount --;
		GUI.Label(Rect(sw/6,sh/3, sw*2/3,sh/3),"Ball : " + ballCount, labelStyle);
		shot = false; // 모든 공을 다 발사하지 않았음으로 false
		}
		else{
			shot = true; // 모든 공을 다 발사했다면 true
			GUI.Label(Rect(sw/6,sh/3, sw*2/3,sh/3),"No Ball!!", labelStyle);
		}
		
		var screenPoint = Input.mousePosition; // 마우스 따라서 공을 던질 수 있게 하기 위해
		screenPoint.z = 10.0;
		var worldPoint = camera.ScreenToWorldPoint(screenPoint);
		//var worldPoint = gameObject.
		var direction = (worldPoint - transform.position).normalized;
		
		//var direction : Vector3 = transform.forward;
		ball.rigidbody.velocity = direction * initialVelocity;
	}
}

function AddBall(addballCount : int){
 	Debug.Log(addballCount);
	ballCount += addballCount;

}



function OnGUI(){
	if(shot == true){ // mission success
		sw = Screen.width;
		sh = Screen.height;
		GUI.Label(Rect(sw/6,sh/3, sw*2/3,sh/3),"No Ball!!", labelStyle);
	
	}
	else if(shot == false){
		sw = Screen.width;
		sh = Screen.height;
		GUI.Label(Rect(sw/6,sh/3, sw*2/3,sh/3),"Ball : " + ballCount, labelStyle);
		
	
	}
	else if(addBall == true){
		sw = Screen.width;
		sh = Screen.height;
		GUI.Label(Rect(sw/6,sh/3, sw*2/3,sh/3),"BallCharger!", labelStyle);
	}
	
}