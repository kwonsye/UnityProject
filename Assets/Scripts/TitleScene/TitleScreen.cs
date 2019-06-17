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
					aboutText.text = "SantaRun 게임 방법\n\n\n\n아기 산타가 멋쟁이 산타가 될 수 있도록 도와주세요!";
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