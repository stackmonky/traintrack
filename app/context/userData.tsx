const Users = {
    "id": 1,
    "role": "trainee",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "checklists": [
      {
        "id": 1,
        "checklist_name": "Safety Checklist",
        "tasks": [
          {
            "id": 1,
            "task": "Person knows how to hit the safety stop button",
            "trainee_checked": false,
            "trainer_checked" : false,
            "auditor_checked" : false,
          },
          {
            "id": 2,
            "task": "Person knows where kevlar gloves are located",
            "trainee_checked": false,
            "trainer_checked" : false,
            "auditor_checked" : false,
          },
        ]
        
      },
    ]
  }

export default Users;