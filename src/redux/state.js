export default {
  routing: {},

  ui: {
    globalError: null,
    globalNotice: null
  },

  entitites: {
    trainings: {
      byId: {
        t1: {
          id: 't1',
          slug: 'javascript/beginner',
          lessons: ['l1', 'l2', 'l3'],
          lessonsCompleted: ['l1', 'l2'],
          mode: 'javascript',
          level: 'beginner',
          logo: '/images/languages/javascript.png',
          name: 'Java Script'
        }
      },
      bySlug: {
        'javascript/beginner': 't1'
      }
    },
    lessons: {
      byId: {
        l1: {
          id: 'l1',
          editor: '',
          example: 'var a = true',
          exercise: 'write variable',
          finishedAt: Date.now(),
          statedAt: Date.now() - 5000,
          keystrokes: 0,
          training: 't1'
        }
      },
      bySlug: {
        'javascript/beginner/l1': 'l1'
      }
    }
  }
}
