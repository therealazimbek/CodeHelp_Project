export interface Messages {
  id: number,
  body: string,
  question_id: number,
  created_date: Date
}

export let messages_list = [
  {
    id:1,
    body: "Use default sum method",
    question_id: 1,
    created_date: new Date('2022-01-17T16:34:00')
  },
  {
    id:2,
    body: "Iterate through items in list",
    question_id: 1,
    created_date: new Date('2022-01-17T20:02:00')
  },
  {
    id:3,
    body: "use for loop",
    question_id: 2,
    created_date: new Date('2022-01-18T11:54:00')
  },
]
