using System.Collections;
using System.Collections.Generic;
using UnityEngine;
public class MoveController : MonoBehaviour {

	NavMeshAgent nav;
	GameObject target;
	
	// Use this for initialization
	void Start () {
		nav = GetComponent<NavMeshAgent>();
		target = GameObject.FindWithTag("Player");
		Debug.Log (target);
		
	}
	
	// Update is called once per frame
	void Update () {
		
		if (nav.destination != target.transform.position)
		{
			nav.SetDestination (target.transform.position);
		}
		else
		{
			nav.SetDestination (transform.position);
		}
	}
}
