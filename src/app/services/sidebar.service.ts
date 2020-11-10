import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor() {}

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: './dashboard' },
        { titulo: 'Usuarios', url: './usuarios' },
      ],
    },
    {
      titulo: 'Productos',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Alfombras', url: './productos/alfombras' },
        {
          titulo: 'Alfombras atrapa mugre',
          url: './productos/atrapamugre',
        },
        { titulo: 'Cortinas', url: './productos/cortinas' },
        { titulo: 'Grama sintetica', url: './productos/grama-sintetica' },
        { titulo: 'Linóleo', url: './productos/linoleo' },
        { titulo: 'Papel tapiz', url: './productos/papel-tapiz' },
        { titulo: 'Piso laminado', url: './productos/piso-laminado' },
      ],
    },
  ];

  menuPages: any = [
    {
      titulo: 'Alfombrasas',
      icono: 'fa fa-caret-right',
      id: 'alfombras',
      submenu: [
        { titulo: 'Galería de alfombras', url: '/alfombras-galeria' },
        { titulo: 'Alto trafico', url: '/producto/alfombras/alto-trafico' },
        { titulo: 'African queen', url: '/producto/alfombras/african-queen' },
        { titulo: 'De diseño', url: '/producto/alfombras/de-diseño' },
        { titulo: 'Hotelera', url: '/producto/alfombras/hotelera' },
        { titulo: 'Pelo alto', url: '/producto/alfombras/pelo-alto' },
        { titulo: 'Salsa', url: '/producto/alfombras/salsa' },
        { titulo: 'Solo', url: '/producto/alfombras/solo' },
      ],
    },
    {
      titulo: 'Grama Sintética',
      icono: 'fa fa-caret-right',
      id: 'gramasintetica',
      submenu: [
        // { titulo: 'Alfombras', url: './productos/alfombras' },
        {
          titulo: 'Galería de grama sintética',
          url: '/producto/grama-sintetica/galeria-grama-sintetica',
        },
        { titulo: 'Follaje', url: '/producto/grama-sintetica/follaje' },
        {
          titulo: 'Bolas decorativas',
          url: '/producto/grama-sintetica/bolas-decorativas',
        },
        { titulo: 'Jardineras', url: '/producto/grama-sintetica/jardineras' },
      ],
    },
    {
      titulo: 'Piso laminado',
      icono: 'fa fa-caret-right',
      id: 'pisolaminado',
      submenu: [
        // { titulo: 'Alfombras', url: './productos/alfombras' },
        {
          titulo: 'Galería de piso laminado',
          url: '/producto/piso-laminado/galeria-piso-laminado',
        },
        { titulo: 'AC3 7mm', url: '/producto/piso-laminado/ac3-7mm' },
        { titulo: 'AC4 8.3mm', url: '/producto/piso-laminado/ac4-83mm' },
        { titulo: 'AC5 12mm', url: '/producto/piso-laminado/ac5-12mm' },
      ],
    },
    {
      titulo: 'Piso linóleo',
      icono: 'fa fa-caret-right',
      id: 'pisolinoleo',
      submenu: [{ titulo: 'Linóleo', url: '/producto/linoleo/linoleo' }],
    },
    {
      titulo: 'Cortinas',
      icono: 'fa fa-caret-right',
      id: 'cortinas',
      submenu: [
        {
          titulo: 'Galería de cortinas',
          url: '/producto/cortinas/galeria-cortinas',
        },
        { titulo: 'Iglesias', url: '/producto/cortinas/iglesias' },
        { titulo: 'Residenciales', url: '/producto/cortinas/residenciales' },
      ],
    },
    {
      titulo: 'Alfombras atrapamugre',
      icono: 'fa fa-caret-right',
      id: 'atrapamugre',
      submenu: [
        { titulo: 'Atrapamugre', url: '/producto/atrapamugre/atrapamugre' },
      ],
    },
  ];

  menuCategorias: any = [
    {
      titulo: 'Fitines',
      icono: 'assets/images/repuestos/repuesto-1.jpg',
      id: 'fitines',
      submenu: [{ titulo: 'Fitines', url: '/fitines' }],
    },
    {
      titulo: 'Aros',
      icono: 'assets/images/repuestos/repuesto-2.jpg',
      id: 'aros',
      submenu: [{ titulo: 'Aros', url: '/aros' }],
    },
    {
      titulo: 'Auxilios',
      icono: 'assets/images/repuestos/repuesto-3.jpg',
      id: 'auxilios',
      submenu: [{ titulo: 'Auxilios', url: '/Auxilios' }],
    },
    {
      titulo: 'Auxiliar de caja',
      icono: 'assets/images/repuestos/repuesto-4.jpg',
      id: 'auxiliardecaja',
      submenu: [{ titulo: 'Auxiliar de caja', url: '/auxiliar-de-caja' }],
    },
    {
      titulo: 'Base de filtro',
      icono: 'assets/images/repuestos/repuesto-5.jpg',
      id: 'basedefiltro',
      submenu: [{ titulo: 'Base de filtro', url: '/base-de-filtro' }],
    },
    {
      titulo: 'Bloqueo',
      icono: 'assets/images/repuestos/repuesto-6.jpg',
      id: 'bloqueo',
      submenu: [{ titulo: 'Bloqueo', url: '/producto/bloqueo' }],
    },
    {
      titulo: 'Bolsas De Aire',
      icono: 'assets/images/repuestos/repuesto-7.jpg',
      id: 'bolsasdeaire',
      submenu: [{ titulo: 'Bolsas De Aire', url: '/producto/bolsas-de-aire' }],
    },
    {
      titulo: 'Bomba De Aceite',
      icono: 'assets/images/repuestos/repuesto-8.jpg',
      id: 'bombadeaceite',
      submenu: [
        { titulo: 'Bomba De Aceite', url: '/producto/bomba-de-aceite' },
      ],
    },
    {
      titulo: 'Bomba De Inyeccion De Diesel',
      icono: 'assets/images/repuestos/repuesto-9.jpg',
      id: 'bomba-de-inyeccion-de-diesel',
      submenu: [{ titulo: 'Bomba De Inyeccion De Diesel', url: '/producto/' }],
    },
    {
      titulo: 'Bomba Hidraulico',
      icono: 'assets/images/repuestos/repuesto-10.jpg',
      id: 'bomba-hidraulico',
      submenu: [
        { titulo: 'Bomba Hidraulico', url: '/producto/bomba-hidraulico' },
      ],
    },
    {
      titulo: 'Botella De Levante',
      icono: 'assets/images/repuestos/repuesto-1.jpg',
      id: 'botella-de-levante',
      submenu: [
        { titulo: 'Botella De Levante', url: '/producto/botella-de-levante' },
      ],
    },
    {
      titulo: 'Caballitos',
      icono: 'assets/images/repuestos/repuesto-2.jpg',
      id: 'caballitos',
      submenu: [{ titulo: 'Caballitos', url: '/producto/caballitos' }],
    },
    {
      titulo: 'Caja De Velocidades',
      icono: 'assets/images/repuestos/repuesto-3.jpg',
      id: 'caja-de-velocidades',
      submenu: [
        { titulo: 'Caja De Velocidades', url: '/producto/caja-de-velocidades' },
      ],
    },
    {
      titulo: 'Caja De Ranch',
      icono: 'assets/images/repuestos/repuesto-4.jpg',
      id: 'caja-de-ranch',
      submenu: [{ titulo: 'Caja De Ranch', url: '/producto/caja-de-ranch' }],
    },
    {
      titulo: 'Cargadores',
      icono: 'assets/images/repuestos/repuesto-5.jpg',
      id: 'cargadores',
      submenu: [{ titulo: 'Cargadores', url: '/producto/cargadores' }],
    },
    {
      titulo: 'Chavetas',
      icono: 'assets/images/repuestos/repuesto-6.jpg',
      id: 'chavetas',
      submenu: [{ titulo: 'Chavetas', url: '/producto/chavetas' }],
    },
    {
      titulo: 'Cojintes',
      icono: 'assets/images/repuestos/repuesto-7.jpg',
      id: 'cojintes',
      submenu: [{ titulo: 'Cojintes', url: '/producto/cojintes' }],
    },
    {
      titulo: 'Computadora',
      icono: 'assets/images/repuestos/repuesto-8.jpg',
      id: 'computadora',
      submenu: [{ titulo: 'Computadora', url: '/producto/computadora' }],
    },
    {
      titulo: 'Cruces Para Yugos',
      icono: 'assets/images/repuestos/repuesto-9.jpg',
      id: 'cruces-para-yugos',
      submenu: [
        { titulo: 'Cruces Para Yugos', url: '/producto/cruces-para-yugos' },
      ],
    },
    {
      titulo: 'Deposito',
      icono: 'assets/images/repuestos/repuesto-10.jpg',
      id: 'deposito',
      submenu: [{ titulo: 'Deposito', url: '/producto/deposito' }],
    },
    {
      titulo: 'Eje De Levas',
      icono: 'assets/images/repuestos/repuesto-1.jpg',
      id: 'eje-de-levas',
      submenu: [{ titulo: 'Eje De Levas', url: '/producto/eje-de-levas' }],
    },
    {
      titulo: 'Engranajes',
      icono: 'assets/images/repuestos/repuesto-2.jpg',
      id: 'engranajes',
      submenu: [{ titulo: 'Engranajes', url: '/producto/engranajes' }],
    },
    {
      titulo: 'Tornillos',
      icono: 'assets/images/repuestos/repuesto-3.jpg',
      id: 'tornillos',
      submenu: [{ titulo: 'Tornillos', url: '/producto/tornillos' }],
    },
    {
      titulo: 'Esparragos',
      icono: 'assets/images/repuestos/repuesto-4.jpg',
      id: 'esparragos',
      submenu: [{ titulo: 'Esparragos', url: '/producto/esparragos' }],
    },
    {
      titulo: 'Filtro',
      icono: 'assets/images/repuestos/repuesto-5.jpg',
      id: 'filtro',
      submenu: [{ titulo: 'Filtro', url: '/producto/filtro' }],
    },
    {
      titulo: 'Freno De Motor',
      icono: 'assets/images/repuestos/repuesto-6.jpg',
      id: 'freno-de-motor',
      submenu: [{ titulo: 'Freno De Motor', url: '/producto/freno-de-motor' }],
    },
    {
      titulo: 'Fricciones',
      icono: 'assets/images/repuestos/repuesto-7.jpg',
      id: 'fricciones',
      submenu: [{ titulo: 'Fricciones', url: '/producto/fricciones' }],
    },
    {
      titulo: 'Repuestos De Motor',
      icono: 'assets/images/repuestos/repuesto-8.jpg',
      id: 'repuestos-de-motor',
      submenu: [
        { titulo: 'Repuestos De Motor', url: '/producto/repuestos-de-motor' },
      ],
    },
    {
      titulo: 'Inyectores',
      icono: 'assets/images/repuestos/repuesto-9.jpg',
      id: 'inyectores',
      submenu: [{ titulo: 'Inyectores', url: '/producto/inyectores' }],
    },
    {
      titulo: 'Maleta De Resorte',
      icono: 'assets/images/repuestos/repuesto-10.jpg',
      id: 'maleta-de-resorte',
      submenu: [
        { titulo: 'Maleta De Resorte', url: '/producto/maleta-de-resorte' },
      ],
    },
    {
      titulo: 'Bomba Hidraulico',
      icono: 'assets/images/repuestos/repuesto-1.jpg',
      id: 'bomba-hidraulico',
      submenu: [
        { titulo: 'Bomba Hidraulico', url: '/producto/bomba-hidraulico' },
      ],
    },
    {
      titulo: 'Equipo De Levante',
      icono: 'assets/images/repuestos/repuesto-2.jpg',
      id: 'equipo-de-levante',
      submenu: [
        { titulo: 'Equipo De Levante', url: '/producto/equipo-de-levante' },
      ],
    },
    {
      titulo: 'Servicios',
      icono: 'assets/images/repuestos/repuesto-3.jpg',
      id: 'servicios',
      submenu: [{ titulo: 'Servicios', url: '/producto/servicios' }],
    },
    {
      titulo: 'Palanca',
      icono: 'assets/images/repuestos/repuesto-4.jpg',
      id: 'palanca',
      submenu: [{ titulo: 'Palanca', url: '/producto/palanca' }],
    },
    {
      titulo: 'Patas',
      icono: 'assets/images/repuestos/repuesto-5.jpg',
      id: 'patas',
      submenu: [{ titulo: 'Patas', url: '/producto/patas' }],
    },
    {
      titulo: 'Pernos',
      icono: 'assets/images/repuestos/repuesto-6.jpg',
      id: 'pernos',
      submenu: [{ titulo: 'Pernos', url: '/producto/pernos' }],
    },
    {
      titulo: 'Radiador',
      icono: 'assets/images/repuestos/repuesto-7.jpg',
      id: 'radiador',
      submenu: [{ titulo: 'Radiador', url: '/producto/radiador' }],
    },
    {
      titulo: 'Secador De Aire',
      icono: 'assets/images/repuestos/repuesto-8.jpg',
      id: 'secador-de-aire',
      submenu: [
        { titulo: 'Secador De Aire', url: '/producto/secador-de-aire' },
      ],
    },
    {
      titulo: 'Sensores',
      icono: 'assets/images/repuestos/repuesto-9.jpg',
      id: 'sensores',
      submenu: [{ titulo: 'Sensores', url: '/producto/sensores' }],
    },
    {
      titulo: 'Starrt',
      icono: 'assets/images/repuestos/repuesto-10.jpg',
      id: 'starrt',
      submenu: [{ titulo: 'Starrt', url: '/producto/starrt' }],
    },
    {
      titulo: 'Toma Fuerza',
      icono: 'assets/images/repuestos/repuesto-1.jpg',
      id: 'toma-fuerza',
      submenu: [{ titulo: 'Toma Fuerza', url: '/producto/toma-fuerza' }],
    },
    {
      titulo: 'Tornamesa',
      icono: 'assets/images/repuestos/repuesto-2.jpg',
      id: 'tornamesa',
      submenu: [{ titulo: 'Tornamesa', url: '/producto/tornamesa' }],
    },
    {
      titulo: 'Tornillos',
      icono: 'assets/images/repuestos/repuesto-3.jpg',
      id: 'tornillos',
      submenu: [{ titulo: 'Tornillos', url: '/producto/tornillos' }],
    },
    {
      titulo: 'Transmiciones',
      icono: 'assets/images/repuestos/repuesto-4.jpg',
      id: 'transmiciones',
      submenu: [{ titulo: 'Transmiciones', url: '/producto/transmiciones' }],
    },
    {
      titulo: 'Tubo',
      icono: 'assets/images/repuestos/repuesto-5.jpg',
      id: 'tubo',
      submenu: [{ titulo: 'Tubo', url: '/producto/tubo' }],
    },
    {
      titulo: 'Tuercas',
      icono: 'assets/images/repuestos/repuesto-6.jpg',
      id: 'tuercas',
      submenu: [{ titulo: 'Tuercas', url: '/producto/tuercas' }],
    },
    {
      titulo: 'Valvulas',
      icono: 'assets/images/repuestos/repuesto-7.jpg',
      id: 'valvulas',
      submenu: [{ titulo: 'Valvulas', url: '/producto/valvulas' }],
    },
    {
      titulo: 'Ventilador',
      icono: 'assets/images/repuestos/repuesto-8.jpg',
      id: 'ventilador',
      submenu: [{ titulo: 'Ventilador', url: '/producto/ventilador' }],
    },
    {
      titulo: 'Yugo',
      icono: 'assets/images/repuestos/repuesto-9.jpg',
      id: 'yugo',
      submenu: [{ titulo: 'Yugo', url: '/producto/yugo' }],
    },
  ];

  categoras: any = [
    'fitines',
    'aros',
    'auxilios',
    'auxiliar de caja',
    'base de filtro',
    'bloqueo',
    'Bolsas De Aire',
    'Bamba De Aceite',
    'Bomba De Inyeccion De Diesel',
    'Bomba Hidraulico',
    'Botella De Levante',
    'Caballitos',
    'Caja De Velocidades',
    'Caja De Ranch',
    'Cargadores',
    'Chavetas',
    'Cojintes',
    'Computadora',
    'Motor',
    'Cruces Para Yugos',
    'Deposito',
    'Catarina',
    'Eje De Levas',
    'Engranajes',
    'Tornillos',
    'Esparragos',
    'Filtro',
    'Ffreno De Motor',
    'Fricciones',
    'Repuestos De Motor',
    'Funda De Catarina',
    'Inyectores',
    'Maleta De Resorte',
    'Bomba Hidraulico',
    'Equipo De Levante',
    'Servicios',
    'Palanca',
    'Patas',
    'Pernos',
    'Radiador',
    'Secador De Aire',
    'Sensores',
    'Starrt',
    'Tambor',
    'Toma Fuerza',
    'Tornamesa',
    'Tornillos',
    'Transmiciones',
    'Tubo',
    'Tuercas',
    'Tuercas',
    'Valvulas',
    'Ventilador',
    'Yugo',
  ];
}
