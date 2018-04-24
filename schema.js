let training = [
  {
    '_id',
    'type',
    'level',
    'description' : {
      'title', 'overview', 'objectives', 'agenda', 'methodology', 'syllabus', 'prerequisites'
    },
    'slug',
    'rating',
    'related_trainings': [
      'training_id'
    ],
    'instances': [
      {
        '_id', 'venue_name', 'address', 'post_code', 'city', 'country', 'language', 'currency', 'start_date', 'end_date', 'max_attendees', 'venue_pictures', 'discount_price', 'price', 'sponsors',
        'mentors': [
          'user_id'
        ]
        'rating',
        'attendees': [
          'user_id'
        ],
        'reviews': [
          {
            'comment_like_most', 'comment_to_improve', 'created_at',
            'comments': [
              {
                'user_id', 'created_at', 'comment'
              }
            ],
            'rating': {
              'objectives_met', 'content_organized', 'material_helpful', 'venue_facilities'
            }
          }
        ]
      }
    ]
  }
]
