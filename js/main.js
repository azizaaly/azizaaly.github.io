$(document).ready(function() {

    $(document).on("click", ".link", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top; 
        $('body, html').animate({scrollTop: top}, 800); 
    });

     // Параллакс
     if($(window).width() > 992)
     {
         $('body').parallax({
             'elements': [
                {
                     'selector': '.ellipse',
                     'properties': {
                         'x': {
                             'right': {
                                 'initial': 8,
                                 'multiplier': 0.0007,
                                 'unit': 'vh',
                                 'invert': false
                             }
                         },
                         'y': {
                             'bottom': {
                                 'initial': 3,
                                 'multiplier': 0.0009,
                                 'unit': 'vh',
                                 'invert': false
                            }
                        }
                    }
                },
                {
                    'selector': '.photo',
                     'properties': {
                         'x': {
                             'right': {
                                 'initial': 16,
                                 'multiplier': 0.0003,
                                 'unit': 'vh',
                                 'invert': false
                             }
                         },
                    },
               },
               {
                'selector': '.lines',
                'properties': {
                    'x': {
                        'right': {
                            'initial': 55,
                            'multiplier': 0.0007,
                            'unit': 'vh',
                            'invert': false
                        }
                    },
                    'y': {
                        'top': {
                            'initial': 70,
                            'multiplier': 0.007,
                            'unit': 'vh',
                            'invert': false
                       }
                   }
               }
           },
           {
            'selector': '.plus',
            'properties': {
                'x': {
                    'right': {
                        'initial': 50,
                        'multiplier': 0.002,
                        'unit': 'vh',
                        'invert': false
                    }
                },
                'y': {
                    'top': {
                        'initial': 32,
                        'multiplier': 0.0008,
                        'unit': 'vh',
                        'invert': false
                   }
               }
           }
       },
       {
        'selector': '.triangles',
        'properties': {
            'x': {
                'right': {
                    'initial': 3,
                    'multiplier': 0.0003,
                    'unit': 'vh',
                    'invert': false
                }
            },
            'y': {
                'top': {
                    'initial': 13,
                    'multiplier': 0.002,
                    'unit': 'vh',
                    'invert': false
               }
           }
       }
   },
   {
    'selector': '.cursive_line',
    'properties': {
        'x': {
            'right': {
                'initial': 65,
                'multiplier': 0.001,
                'unit': 'vh',
                'invert': false
            }
        },
        'y': {
            'top': {
                'initial': 25,
                'multiplier': 0.002,
                'unit': 'vh',
                'invert': false
           }
       }
   }
},
             ]
         });
     } else {
         // change functionality for larger screens
     }
})
