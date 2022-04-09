import {Messages} from "./messages";

export interface Questions {
  id: number
  title: string,
  created_date: Date,
  messages: number[]
}

export let question_list = [
  {
    id:1,
    title: 'How to sum a list in Python?',
    created_date: new Date('2022-01-17T15:24:00'),
    messages: [1, 2]
  },
]
