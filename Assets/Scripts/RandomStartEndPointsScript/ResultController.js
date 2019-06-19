#pragma strict

public var isTest : boolean;
public var testCompletedMissionsCount :int;
public var starGUI : GUITexture;

private var completedMissionsCount : int; //나중에 받아 와야함


function Start () {
	
	drawStars();
	
}

function Update () {
	
}

function drawStars(){
	
	//테스트 시
	if(isTest == true){
		completedMissionsCount = testCompletedMissionsCount;
	}
	
	switch(completedMissionsCount){
			case 1 : 
				starGUI.texture = Resources.Load("UI/ResultUI/OneStar_BG");
				
				starGUI.pixelInset.x = -60;
				starGUI.pixelInset.y = -50;
				starGUI.pixelInset.width = 130;
				starGUI.pixelInset.height = 100;
		
				break;
			
			case 2 : 
				starGUI.texture = Resources.Load("UI/ResultUI/TwoStar_BG");
				
				starGUI.pixelInset.x = -130;
				starGUI.pixelInset.y = -50;
				starGUI.pixelInset.width = 260;
				starGUI.pixelInset.height = 100;
				
				break;
				
			case 3 : 
			
				starGUI.texture = Resources.Load("UI/ResultUI/ThreeStar_BG");
				
				starGUI.pixelInset.x = -200;
				starGUI.pixelInset.y = -50;
				starGUI.pixelInset.width = 400;
				starGUI.pixelInset.height = 100;
				
				break;
				
			default :
			
				Debug.Log("CompletedMissonsCount Error");
			
		}
}