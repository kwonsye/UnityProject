#pragma strict
public var points : GameObject; 
public var resultUI : GameObject;
public var isTest: boolean;
public var testPointIndex : int;

private var randomStartPoint:GameObject;
private var randomEndPoint:GameObject;


function Start () {
	
	//랜덤 시작-끝 위치 정하기
	GetRandomPoints();


	//random start point 의 위치에서 player 시작
	gameObject.transform.position = randomStartPoint.transform.position;
	
}

function Update () {
	
}

function GetRandomPoints(){
	
	var startPoints = points.transform.FindChild("StartPoints");
	var endPoints = points.transform.FindChild("EndPoints");
	
	//랜덤 인덱스 구하기
	var randomPointIndex;
	if(isTest == true){ //테스트 시
		randomPointIndex = testPointIndex;
	}
	else {
		randomPointIndex = Random.Range(0, startPoints.transform.childCount);
	}
	//Debug.Log(randomPointIndex);
	
	//랜덤 시작-끝 위치 게임오브젝트 저장
	randomStartPoint = startPoints.transform.GetChild(randomPointIndex).gameObject;
	randomEndPoint = endPoints.transform.GetChild(randomPointIndex).gameObject;

}

function HitEndPoint(hittedEndPoint : GameObject){
	

	//지정된 EndPoint에 골인 하면 게임 종료
	if(hittedEndPoint == randomEndPoint){
		Debug.Log("HitEndPoint");
		GameObject.Find("GameController").SendMessage("GameEnd");
		
		//result 화면 보여주기
		if(resultUI != null){
			resultUI.SetActive(true);
			
		}
	}
	
}