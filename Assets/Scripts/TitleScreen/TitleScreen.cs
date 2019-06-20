using UnityEngine;
using System.Collections;

public class TitleScreen : MonoBehaviour {
	
	public GUIStyle customButton;
	public GUIStyle customTitleStyle;
	public GameObject aboutUI;
	
	// 버튼이 클릭되면 수행될 함수를 가지고있는 오브젝트 변수 선언
	public GameObject _target;
	// 수행될 펑션 이름
	public string _functionName = "StartGame";
	
	bool isClicked = false;
	
	
	void OnGUI()
	{
		int sw = Screen.width;
		int sh = Screen.height;
		
		if (!isClicked)
		{
			GUI.Label(new Rect(sw/3, sh/4, sw/3, sh/4), "Santa Run",customTitleStyle);
			//GUI.Label(new Rect(sw/3, sh/4*3, sw/3, sh/4), "By Song & Kwon",customButton);
			
			if (GUI.Button(new Rect(sw/3, sh/4*2, sw/3, sh/4), "Start",customButton))
			{
				isClicked = true;
				//start game
				_target.SendMessage(_functionName, SendMessageOptions.DontRequireReceiver);
				
			}
			if (GUI.Button(new Rect(sw/3, sh/4*3, sw/3, sh/4), "About",customButton))
			{
				isClicked = true;
				
				//show information of SantaRun
				if(aboutUI!=null)
				{
					//게임 설명 text
					GUIText aboutText = aboutUI.transform.FindChild("About_Text").gameObject.GetComponent<GUIText>();
					aboutText.text = "SantaRun 게임 방법\n\n미로 속에 숨어 있는 집에\n 선물을 전달하는 미션을 수행하면서 \n아이템을 이용하여 미로를 탈출해야 한다.\n\n 방향키를 이용해서 캐릭터를 움직이고,\n 마우스 우 클릭으로 스노우 볼을 던지면서\n 눈사람을 공격할 수 있다 . \n\n";
					aboutUI.SetActive(true);
				}
				
			}
			
		}
		
	}
	
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
	
}