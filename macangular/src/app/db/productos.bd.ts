import { Producto } from '../models/producto.model';
import { Modelo } from '../models/modelo.model'

export const PRODUCTOS = [

    {
        id: 1,
        nombre: 'Iphone'
    },

    {
        id: 2,
        nombre: 'Mac'
    },
    {
        id: 3,
        nombre: 'Ipad'
    }

]

export const MODELOS = [

    {
        id: 1,
        productoId: 1,
        nombre: 'Iphone 11'
    },
    {
        id: 2,
        productoId: 1,
        nombre: 'Iphone 11 Pro'
    },
    {
        id: 3,
        productoId: 1,
        nombre: 'Iphone 11 Pro Max'
    },
    {
        id: 4,
        productoId: 1,
        nombre: 'Iphone X'
    },
    {
        id: 5,
        productoId: 1,
        nombre: 'Iphone Xs'
    },
    {
        id: 6,
        productoId: 1,
        nombre: 'Iphone Xs Max'
    },
    {
        id: 7,
        productoId: 1,
        nombre: 'Iphone Xr'
    },
    {
        id: 8,
        productoId: 1,
        nombre: 'Iphone 8'
    },
    {
        id: 9,
        productoId: 1,
        nombre: 'Iphone 8 Plus'
    },
    {
        id: 10,
        productoId: 1,
        nombre: 'Iphone 7'
    },
    {
        id: 11,
        productoId: 1,
        nombre: 'Iphone 7 Plus'
    },
    {
        id: 12,
        productoId: 1,
        nombre: 'Iphone 6'
    },
    {
        id: 13,
        productoId: 1,
        nombre: 'Iphone 6 Plus'
    },
    {
        id: 14,
        productoId: 1,
        nombre: 'Iphone 6s'
    },
    {
        id: 15,
        productoId: 1,
        nombre: 'Iphone 6s Plus'
    },
    {
        id: 16,
        productoId: 1,
        nombre: 'Iphone SE'
    },
    {
        id: 17,
        productoId: 1,
        nombre: 'Iphone 5s'
    },
    {
        id: 18,
        productoId: 1,
        nombre: 'Iphone 5c'
    },
    {
        id: 19,
        productoId: 1,
        nombre: 'Iphone 5'
    },
    {
        id: 20,
        productoId: 2,
        nombre: 'MacBook'
    },
    {
        id: 21,
        productoId: 2,
        nombre: 'MacBook Air'
    },

    {
        id: 22,
        productoId: 2,
        nombre: 'MacBook Pro'
    },
    {
        id: 23,
        productoId: 2,
        nombre: 'IMac'
    },
    {
        id: 25,
        productoId: 2,
        nombre: 'IMac Pro'
    },
    {
        id: 26,
        productoId: 2,
        nombre: 'Mac Pro'
    },
    {
        id: 27,
        productoId: 2,
        nombre: 'Mac Mini'
    },
    {
        id: 28,
        productoId: 2,
        nombre: 'Monitores'
    },
    {
        id: 29,
        productoId: 2,
        nombre: 'Vintage MacBook'
    },
    {
        id: 30,
        productoId: 2,
        nombre: 'Accesorios Mac'
    },
    {
        id: 31,
        productoId: 3,
        nombre: 'Ipad Retina 10.2'

    },
    {
        id: 32,
        productoId: 3,
        nombre: 'Ipad Air 2'

    },
    {
        id: 33,
        productoId: 3,
        nombre: 'Ipad Air'

    },
    {
        id: 34,
        productoId: 3,
        nombre: 'Ipad Pro'

    },
    {
        id: 35,
        productoId: 3,
        nombre: 'Ipad mini'

    },

    {
        id: 36,
        productoId: 3,
        nombre: 'Ipad (6ª generación)'

    },
    {

        id: 37,
        productoId: 3,
        nombre: 'Ipad (5ª generación)'

    },

    {
        id: 38,
        productoId: 3,
        nombre: 'Ipad (4ª generación)'

    },

    {
        id: 39,
        productoId: 3,
        nombre: 'Ipad 3'

    },

    {
        id: 40,
        productoId: 3,
        nombre: 'Ipad 2'

    },

    {
        id: 41,
        productoId: 3,
        nombre: 'Ipad 1'

    },

    {
        id: 42,
        productoId: 3,
        nombre: 'Accesorios Ipad'

    }



]

export const CAPACIDADES = [

    {
        id: 1,
        nombre: '16Gb'
    },

    {
        id: 2,
        nombre: '32Gb',

    },

    {
        id: 3,
        nombre: '64Gb'

    },
    {
        id: 4,
        nombre: '128Gb'

    },

    {
        id: 5,
        nombre: '256Gb'
    },

    {
        id: 6,
        nombre: '512Gb'
    }

]

export const RAM = [

    {
        id: 1,
        nombre: '2Gb'
    },
    {
        id: 2,
        nombre: '4Gb'
    },
    {
        id: 3,
        nombre: '8Gb'
    },
    {
        id: 4,
        nombre: '16Gb'
    },
    {
        id: 5,
        nombre: '32Gb'
    }

]

export const PROCESADORES = [

    {
        id: 1,
        modeloId: [23],
        nombre: 'Intel i3'
    },
    {
        id: 2,
        modeloId: [20, 21, 22, 23, 27],
        nombre: 'Intel i5'
    },
    {
        id: 3,
        modeloId: [20, 21, 22, 23, 27],
        nombre: 'Intel i7'
    },
    {
        id: 4,
        modeloId: [20, 21, 22],
        nombre: 'Intel Core M'
    },
    {
        id: 5,
        modeloId: [22, 23],
        nombre: 'Intel Core Duo'
    },
    {
        id: 6,
        modeloId: [21, 22, 23],
        nombre: 'Intel Core 2 Duo'
    },
    {
        id: 7,
        modeloId: [22],
        nombre: 'Intel i9'
    },
    {
        id: 8,
        modeloId: [21, 23],
        nombre: 'Intel Quad Core i7'
    },
    {
        id: 9,
        modeloId: [23],
        nombre: 'Intel Quad Core i5'
    },

    {
        id: 10,
        modeloId: [25],
        nombre: 'Xeon Quad Core'
    },
    {
        id: 11,
        modeloId: [25],
        nombre: 'Xeon 8-Core'
    },
    {
        id: 12,
        modeloId: [25],
        nombre: 'Xeon 4-Core Nehalem'
    },
    {
        id: 13,
        modeloId: [25],
        nombre: 'Xeon 8-Core Nehalem'
    },
    {
        id: 14,
        modeloId: [25],
        nombre: 'Xeon 12-Core Nehalem'
    },
    {
        id: 15,
        modeloId: [25],
        nombre: 'Intel Xeon W de 8 núcleos'
    },
    {
        id: 16,
        modeloId: [25],
        nombre: 'Intel Xeon W de 10 núcleos'
    },
    {
        id: 17,
        modeloId: [25],
        nombre: 'Intel Xeon W de 14 núcleos'
    },
    {
        id: 18,
        modeloId: [25],
        nombre: 'Intel Xeon W de 18 núcleos'
    }


]