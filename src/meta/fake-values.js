export const initialFakeValues = {
    test:{
      id: 1342
    },
    userName: 'John Doe',
    projectNames: [
      {label:"Bank", value: "Bank"},
      {label: "Tank", value: "Tank"},
      {label: "Sank", value: "Sank"},
  
    ],
    units: [
      {label:"Story points", value: "sp"},
      {label:"Human Hours", value: "hh"},
      {label:"Epic Points", value: "ep"}
    ],
    notes: [
        {
            project: 'Sank',
            details: 'Abidos details',
            duration: 1,
            units: 'sp'
        },
        {
            project: 'Tank',
            details: 'details',
            duration: 12,
            units: 'hh'
        }
    ]
  }