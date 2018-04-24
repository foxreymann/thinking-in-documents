let training = [
  {
    '_id',
    'type',
    'level',
    'description',
        'title',
        'overview',
        'objectives',
        'agenda',
        'methodology',
        'syllabus',
        'prerequisites',
    },
    'slug',
    'rating',
    'related_trainings': [
      'training_id'
    ],
    'instances': [
      {
          '_id',
          'venue_name',
          'address',
          'post_code',
          'city',
          'country',
          'language',
          'currency',
          'start_date',
          'end_date',
          'max_attendees',
          'venue_pictures',
          'discount_price',
          'price',
          'sponsors',
          'mentors',
            {
              'user_id': ObjectId('5adf48b21f1cb99d1ecbadea'),
              'username': 'alex',
              'first_name': 'Alex',
              'bio': null,
              'last_name': 'Lobera',
              'profile_pic_url': 'https://storage.googleapis.com/upmentoring_user_profile_image/400x400_5a6740a52755c83e82f7d829.jpeg'
            }
          ],
          'rating',
          'attendees': [
            {
              'status': 'attending',
              'user_id': ObjectId('5adf48b21f1cb99d1ecbadea'),
              'username': 'getify',
              'first_name': 'Kyle',
              'last_name': 'Simpson',
              'profile_pic_url': 'https://pbs.twimg.com/profile_images/938120772932923392/O7aZNh4w_400x400.jpg'
            }
          ],
          'reviews': [
            {
                '_id',
                'comment_like_most',
                'comment_to_improve',
                'created_at',
                'comments': [
                  {
                    'user_id': ObjectId('5adf48a11f1cb99d1ecbade8'),
                    'created_at',
                    'comment': 'Thanks for your review'
                  }
                ],
                'rating',
                    'objectives_met',
                    'content_organized',
                    'material_helpful',
                    'venue_facilities',
                }
            }
          ]
      }
    ]
  }
]
