using UnityEngine;
using System.Collections;

public class ButtonClicked : MonoBehaviour {

	// GUI텍스쳐 컴퍼넌트를 저장하는 변수 선언
	private GUITexture _thisObjBtn;
	// 버튼이 클릭되면 수행될 함수를 가지고있는 오브젝트 변수 선언
	public GameObject _target;
	// 수행될 펑션 이름
	public string _functionName = "StartGame";
	
	// Use this for initialization
	void Start () {
		// GUITexture 컴퍼넌트값 가져옴
		_thisObjBtn = gameObject.GetComponentInChildren<GUITexture>();
	}
	
	// Update is called once per frame
	void Update()
	{
		// 마우스 왼쪽이 클릭될때
		if( Input.GetMouseButtonDown(0))
		{   
			// 버튼이 클릭되었는지 히트 체크
			if(_thisObjBtn.HitTest(Input.mousePosition))
			{
				//타겟이 존재할때
				if (_target != null)
				{
					// 타겟에 게임 재시작 펑션 호출
					_target.SendMessage(_functionName, SendMessageOptions.DontRequireReceiver);
				}
			}
		}
	}
}
