export const SAMPLE = {
  batches: [
    {
      id: 'b1',
      name: 'CLASS 11TH',
      photo: '/batch1.jpg',
      subjects: [
        {
          id: 's1',
          name: 'PHYSICS (NS SIR)',
          photo: '/NSSIR.jpg',
          chapters: [
            {
              id: 'c1',
              name: 'CO-ORDINATE SYSTEM & VECTOR',
              photo: '/VECTOR.png',
              lectures: [
                { id: 'l1', title: 'Coordinate Systems And Vectors | Leacture 01 | Orientation', video: 'https://rumble.com/embed/v6zuqey/?pub=4no3cq' },
                { id: 'l2', title: 'Coordinate Systems And Vectors | Leacture 02 | Vector (Basics)', video: 'https://rumble.com/embed/v6zur44/?pub=4no3cq' }
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
