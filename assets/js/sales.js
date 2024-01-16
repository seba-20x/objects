
const propiedades_ventas = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: 'Prestige Suburb, CA 45678',
        habitaciones: 4,
        bathrooms: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        bathrooms: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Summit Peaks, CA 23456',
        habitaciones: 3,
        bathrooms: 2,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: "Prestige Suburb, CA 45678",
        habitaciones: 4,
        bathrooms: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: "Villa moderna con vista al mar",
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpbGxhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
        descripcion: "Villa moderna y espaciosa con impresionantes vistas al mar",
        ubicacion: "Seaside Avenue, Coastal Town, CA 78901",
        habitaciones: 5,
        bathrooms: 3,
        costo: 7500,
        smoke: false,
        pets: true
    },
    {
        nombre: "Casa rural en zona tranquila",
        src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvdW50cnklMjBob3VzZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60",
        descripcion: "Casa rural encantadora en una zona tranquila y rodeada de naturaleza",
        ubicacion: "Country Road 456, Rural Area, CA 23456",
        habitaciones: 3,
        bathrooms: 2,
        costo: 3500,
        smoke: true,
        pets: true
    }   
]

    // Index
    let counter = 0;
    const ventaIndex = 3;
    let template = ''
    template += `<h2>Propiedades en venta</h2>
                        <div class="row">`

    propiedades_ventas.forEach((e) => {
        if (counter < ventaIndex) {

            let smoking= e.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
            let pet = e.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>';
    
            template += `
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
            counter+=1; 
        }

    });

    template += `</div>`

    const url = "/ventas.html"
    template+= `<a href="${url}" class="btn btn-dark">Ver todas las propiedades en venta</a>`
    if (document.querySelector('#venta')) {
        document.querySelector('#venta').innerHTML = template;
    }
    

// todas las propiedades

    let templateAll = ''
    templateAll += `<h2>Propiedades en venta</h2>
                            <div class="row">`
    propiedades_ventas.forEach((all) => {
        
        let smoking= all.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
        let pet = all.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>';

        templateAll += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${all.src}" class="card-img-top" alt="Imagen del departamento" />
                <div class="card-body">
                <h5 class="card-title">${all.nombre}</h5>
                <p class="card-text">${all.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${all.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${all.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${all.bathrooms} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${all.costo}</p>
                ${smoking}
                ${pet}
                
                </div>
            </div>
        </div>`
        counter+=1; 
        
    });

    templateAll += `</div>`;
    if (document.querySelector('#venta-all')) {
        document.querySelector('#venta-all').innerHTML = templateAll;
    }
