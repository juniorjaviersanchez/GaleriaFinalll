$(document).ready(function() {
    
    
  // MagnificPopup
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery:{
				enabled:true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	};

	var magnifVideo = function() {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
	};

	


	// Call the functions 
	magnifPopup();magnifVideo();

});



        $('.open-popup1').magnificPopup({
            items: [
              {
                src: 'images/1.jpg',
                title: 'ELECTROBOMBAS marca PEDROLLO.'
              },
              {
                src: 'images/12.jpg',
                title: 'ELECTROBOMBAS marca PENTAX'
              },
              {
                src: 'images/13.jpg',
                title:"BOMBAS SUMERGIBLES DE TAZONES"
              },
              {
                src: 'images/14.jpg', // Dynamically created element
                title:'EQUIPOS PARA LA INDUSTRIA'
              },
              {
                src: 'images/15.jpg', // Dynamically created element
                title:'SISTEMAS CONTRA INCENDIOS'
              }
            ],
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });


        $('.open-popup2').magnificPopup({
            items: [
              {
                src: 'images/21.jpg',
                title: 'Dos Piscinas campestres con aguas TERMO MEDICINALES e iluminaciòn sub acuàtica - CHANCAY BAÑOS CAJAMARCA'
              },
              {
                src: 'images/22.jpg',
                title:"Piscina residencial con iluminaciòn Sub acuàtica"
              },
              {
                src: 'images/23.jpg', // Dynamically created element
                title:'Piscina con Sistema de Hidromasajes'
              },
              {
                src: 'images/25.jpg',
                title: 'Piscina Campestrecon Sistemas de Recirculaciòn,Hidromasajes,Cascadas e Iluminaciòn.Complejo V y C- Sta,Rosa-CHICLAYO'
              },
              {
                src: 'images/26.jpg',
                title:"PISCINA SEMI OLIMPICA - Con Sistema de Agua Temperada. Complejo Deportivo San Juan Masias - LAMBAYEQUE"
              },
              {
                src: 'images/27.jpg', // Dynamically created element
                title:'Sistema de Hidromasajes en Piscina Residencial con su mesita para tomar algunas bebidas'
              }
            ],
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });



        $('.open-popup3').magnificPopup({
            items: [
              {
                src: 'images/41.jpg',
                title: ''
              },
              {
                src: 'images/42.jpg',
                title:""
              },
              {
                src: 'images/43.jpg', // Dynamically created element
                title:''
              },
              {
                src: 'images/45.jpg',
                title: ''
              },
              {
                src: 'images/46.jpg',
                title:""
              },
              {
                src: 'images/48.jpg',
                title:""
              },
              {
                src: 'images/49.jpg', // Dynamically created element
                title:''
              },
              {
                src: 'images/47.jpg', // Dynamically created element
                title:'BOQUILLAS PARA PILETAS ORNAMENTALES'
              },
              {
                src: 'images/491.jpg', // Dynamically created element
                title:'BOQUILLAS PARA PILETAS'
              },
              {
                src: 'images/492.jpg', // Dynamically created element
                title:''
              }
            ],
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });



        $('.open-popup4').magnificPopup({
            items: [
              {
                src: 'images/31.jpg',
                title: 'REFLECTOR SUB ACUATICO PARA PILETAS'
              },
              {
                src: 'images/32.jpg',
                title: 'REFLECTOR SUB ACUATICO PARA CASCADAS'
              },
              {
                src: 'images/33.jpg',
                title:"REFLECTOR SUB ACUATICO PARA PISCINAS"
              }
            ],
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });


        $('.open-popup5').magnificPopup({
            items: [
              {
                src: 'images/51.jpg',
                title: 'Accesorios para Piscinas'
              },
              {
                src: 'images/52.jpg',
                title: 'BOMBA y FILTRO PARA PISCINA'
              },
              {
                src: 'images/33.jpg',
                title:"REFLECTORES LED PARA PISCINAS"
              }
            ],
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });

        $('.open-popup6').magnificPopup({
            items: [
              {
                src: 'images/61.jpg',
                title: 'BOMBA marca ESPA CON TANQUE y TABLERO ELECTRICO'
              }
            ],
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });


        $('.open-popup9').magnificPopup({
            items: [
              {
                src: 'images/91.jpg',
                title: ''
              },
              {
                src: 'images/92.jpg',
                title: ''
              },
              {
                src: 'images/93.jpg',
                title:""
              },
              {
                src: 'images/94.jpg',
                title:""
              }
            ],
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });

        $('.open-popup7').magnificPopup({
            items: [
              {
                src: 'images/71.jpg',
                title: 'TABLEROS ELECTRICOS'
              }
            ],
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });


        $('.open-popup8').magnificPopup({
            items: [
              {
                src: 'images/81.jpg',
                title: 'INSTALACION DE EQUIPOS PARA PISCINAS'
              }
            ],
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });

        $('.open-popup10').magnificPopup({
            items: [
              {
                src: 'images/FI1.jpg',
                title: 'GENERADOR A GASOLINA'
              },
              {
                src: 'images/FI2.jpg',
                title: 'GRUPO ELECTROGENO DIESEL'
              }
            ],
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });