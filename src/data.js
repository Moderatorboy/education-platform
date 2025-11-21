export const SAMPLE = {
  batches: [
    {
      id: 'b1',
      name: 'Batch A - 2025',
      photo: '/batch1.jpg',
      subjects: [
        {
          id: 's1',
          name: 'Mathematics',
          photo: '/math.jpg',
          chapters: [
            {
              id: 'c1',
              name: 'Algebra',
              photo: '/algebra.jpg',
              lectures: [
                { id: 'l1', title: 'Linear Equations', video: 'https://www.youtube.com/embed/ysz5S6PUM-U' },
                { id: 'l2', title: 'Quadratic Equations', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
              ],
              notes: [{id:'n1', title:'Algebra Notes', file:'/notes/algebra.pdf'}],
              dpp: [{id:'d1', title:'Algebra DPP', file:'/dpp/algebra.pdf'}],
              quizzes: [{id:'q1', title:'Algebra Quiz', questions: [{q:'2+2?', options:['3','4','5'], ans:1}] }]
            }
          ]
        }
      ]
    }
  ]
}