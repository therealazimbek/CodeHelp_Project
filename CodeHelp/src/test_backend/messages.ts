export interface Messages {
  id: number,
  body: string,
  username: string,
  score: number,
  question: number,
  created_date: Date,
  updated_date: Date,
  is_best_answer: boolean,
  code_field: string,
}

export let messages_list = [
  {
    id:1,
    body: "Use default sum method",
    username: 'dean_impala',
    score: 1,
    question: 1,
    created_date: new Date('2022-01-17T16:34:00'),
    updated_date: new Date('2022-01-17T16:34:00'),
    is_best_answer: true,
    code_field: 'sum(list_name)'
  },
  {
    id:2,
    body: "Iterate through items in list",
    username: 'sammy',
    score: 0,
    question: 1,
    created_date: new Date('2022-01-17T20:02:00'),
    updated_date: new Date('2022-01-17T20:02:00'),
    is_best_answer: false,
    code_field: 'for number in numbers:'
  },
  {
    id:3,
    body: "source venv/Scripts/activate on linux",
    username: 'bob_marley',
    question: 2,
    score: 2,
    created_date: new Date('2022-01-18T11:54:00'),
    updated_date: new Date('2022-01-18T11:54:00'),
    is_best_answer: true,
    code_field: 'source venv/Scripts/activate'
  },
]
