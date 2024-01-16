const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street,Anytown, CA 91234',
        habitaciones: 2,
        bathrooms: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: ' 456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        bathrooms: 2,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: ' 123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        bathrooms: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: "Apartamento acogedor en el centro de la ciudad",
        src: "https://i.pinimg.com/550x/3e/9e/70/3e9e70b8494aa885a5a4fb7b7276a580.jpg",
        descripcion: "Apartamento acogedor y bien iluminado en el vibrante centro de la ciudad, perfecto para la vida urbana",
        ubicacion: "456 City Plaza, Urbanville, CA 98765",
        habitaciones: 1,
        bathrooms: 1,
        costo: 1800,
        smoke: false,
        pets: true
    },
    {
        nombre: "Casa de campo con vistas al lago",
        src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFrZSUyMGhvdXNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
        descripcion: "Relajante casa de campo con impresionantes vistas al lago, ideal para una escapada tranquila",
        ubicacion: "789 Lake Road, Countryside, CA 54321",
        habitaciones: 3,
        bathrooms: 2,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: "Loft urbano en zona artística",
        src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        descripcion: "Loft moderno y espacioso situado en el corazón de la zona artística de la ciudad",
        ubicacion: "321 Art Street, Creativetown, CA 67890",
        habitaciones: 1,
        bathrooms: 1,
        costo: 2000,
        smoke: false,
        pets: true
    }
]

    // index
    let counterAlquiler = 0;
    const alquilerIndex = 3;
    let templateAlquiler = ''
    templateAlquiler += `<h2>Propiedades en Alquiler</h2>
                        <div class="row">`

    propiedades_alquiler.forEach((e) => {
        if (counterAlquiler < alquilerIndex) {

            let smoking= e.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
            let pet = e.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>';
    
            templateAlquiler += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${e.src}" class="card-img-top" alt="Imagen del departamento" />
                    <div class="card-body">
                    <h5 class="card-title">${e.nombre}</h5>
                    <p class="card-text">${e.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${e.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${e.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${e.bathrooms} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${e.costo}</p>
                    ${smoking}
                    ${pet}
                    </div>
                </div>
            </div>`
            counterAlquiler+=1; 
        }
    });

    templateAlquiler += `</div>`
    const urlAquiler = "/alquiler.html"
    templateAlquiler+= `<a href="${urlAquiler}" class="btn btn-dark">Ver todas las propiedades en Alquiler</a>`
    
    if (document.querySelector('#alquiler')) {
        document.querySelector('#alquiler').innerHTML = templateAlquiler;
    }


   
    // todos los alquileres
    let templateAlquilerAll = ''
    templateAlquilerAll += `<h2>Propiedades en Alquiler</h2>
                                <div class="row">`

    propiedades_alquiler.forEach((alq) => {
        
        let smoking= alq.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
        let pet = alq.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>';

        templateAlquilerAll += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${alq.src}" class="card-img-top" alt="Imagen del departamento" />
                <div class="card-body">
                <h5 class="card-title">${alq.nombre}</h5>
                <p class="card-text">${alq.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${alq.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${alq.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${alq.bathrooms} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${alq.costo}</p>
                ${smoking}
                ${pet}
                </div>
            </div>
        </div>`
            
    });

    templateAlquilerAll += `</div>`
    
    if (document.querySelector('#alquiler-all')) {
        document.querySelector('#alquiler-all').innerHTML = templateAlquilerAll;
    }
    