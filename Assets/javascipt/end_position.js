#pragma strict
private var endPosition : Vector3;
var random : RandomStartAndEndPoint;
function Start () {
	
}

function Update () {
	endPosition = random.getRandomEndPoint();
	gameObject.transform.position = Vector3(endPosition.x, transform.position.y , endPosition.z);
}