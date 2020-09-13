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
      icono: 'fa fa-caret-right',
      id: 'fitines',
      submenu: [{ titulo: 'Fitines', url: '/fitines' }],
    },
    {
      titulo: 'Aros',
      icono: 'fa fa-caret-right',
      id: 'aros',
      submenu: [{ titulo: 'Aros', url: '/aros' }],
    },
    {
      titulo: 'Auxilios',
      icono: 'fa fa-caret-right',
      id: 'auxilios',
      submenu: [{ titulo: 'Auxilios', url: '/Auxilios' }],
    },
    {
      titulo: 'Auxiliar de caja',
      icono: 'fa fa-caret-right',
      id: 'auxiliardecaja',
      submenu: [{ titulo: 'Auxiliar de caja', url: '/auxiliar-de-caja' }],
    },
    {
      titulo: 'Base de filtro',
      icono: 'fa fa-caret-right',
      id: 'basedefiltro',
      submenu: [{ titulo: 'Base de filtro', url: '/base-de-filtro' }],
    },
    {
      titulo: 'Bloqueo',
      icono: 'fa fa-caret-right',
      id: 'bloqueo',
      submenu: [{ titulo: 'Bloqueo', url: '/producto/bloqueo' }],
    },
    {
      titulo: 'Bolsas De Aire',
      icono: 'fa fa-caret-right',
      id: 'bolsasdeaire',
      submenu: [{ titulo: 'Bolsas De Aire', url: '/producto/bolsas-de-aire' }],
    },
    {
      titulo: 'Bomba De Aceite',
      icono: 'fa fa-caret-right',
      id: 'bombadeaceite',
      submenu: [
        { titulo: 'Bomba De Aceite', url: '/producto/bomba-de-aceite' },
      ],
    },
    {
      titulo: 'Bomba De Inyeccion De Diesel',
      icono: 'fa fa-caret-right',
      id: 'bomba-de-inyeccion-de-diesel',
      submenu: [{ titulo: 'Bomba De Inyeccion De Diesel', url: '/producto/' }],
    },
    {
      titulo: 'Bomba Hidraulico',
      icono: 'fa fa-caret-right',
      id: 'bomba-hidraulico',
      submenu: [
        { titulo: 'Bomba Hidraulico', url: '/producto/bomba-hidraulico' },
      ],
    },
    {
      titulo: 'Botella De Levante',
      icono: 'fa fa-caret-right',
      id: 'botella-de-levante',
      submenu: [
        { titulo: 'Botella De Levante', url: '/producto/botella-de-levante' },
      ],
    },
    {
      titulo: 'Caballitos',
      icono: 'fa fa-caret-right',
      id: 'caballitos',
      submenu: [{ titulo: 'Caballitos', url: '/producto/caballitos' }],
    },
    {
      titulo: 'Caja De Velocidades',
      icono: 'fa fa-caret-right',
      id: 'caja-de-velocidades',
      submenu: [
        { titulo: 'Caja De Velocidades', url: '/producto/caja-de-velocidades' },
      ],
    },
    {
      titulo: 'Caja De Ranch',
      icono: 'fa fa-caret-right',
      id: 'caja-de-ranch',
      submenu: [{ titulo: 'Caja De Ranch', url: '/producto/caja-de-ranch' }],
    },
    {
      titulo: 'Cargadores',
      icono: 'fa fa-caret-right',
      id: 'cargadores',
      submenu: [{ titulo: 'Cargadores', url: '/producto/cargadores' }],
    },
    {
      titulo: 'Chavetas',
      icono: 'fa fa-caret-right',
      id: 'chavetas',
      submenu: [{ titulo: 'Chavetas', url: '/producto/chavetas' }],
    },
    {
      titulo: 'Cojintes',
      icono: 'fa fa-caret-right',
      id: 'cojintes',
      submenu: [{ titulo: 'Cojintes', url: '/producto/cojintes' }],
    },
    {
      titulo: 'Computadora',
      icono: 'fa fa-caret-right',
      id: 'computadora',
      submenu: [{ titulo: 'Computadora', url: '/producto/computadora' }],
    },
    {
      titulo: 'Cruces Para Yugos',
      icono: 'fa fa-caret-right',
      id: 'cruces-para-yugos',
      submenu: [
        { titulo: 'Cruces Para Yugos', url: '/producto/cruces-para-yugos' },
      ],
    },
    {
      titulo: 'Deposito',
      icono: 'fa fa-caret-right',
      id: 'deposito',
      submenu: [{ titulo: 'Deposito', url: '/producto/deposito' }],
    },
    {
      titulo: 'Eje De Levas',
      icono: 'fa fa-caret-right',
      id: 'eje-de-levas',
      submenu: [{ titulo: 'Eje De Levas', url: '/producto/eje-de-levas' }],
    },
    {
      titulo: 'Engranajes',
      icono: 'fa fa-caret-right',
      id: 'engranajes',
      submenu: [{ titulo: 'Engranajes', url: '/producto/engranajes' }],
    },
    {
      titulo: 'Tornillos',
      icono: 'fa fa-caret-right',
      id: 'tornillos',
      submenu: [{ titulo: 'Tornillos', url: '/producto/tornillos' }],
    },
    {
      titulo: 'Esparragos',
      icono: 'fa fa-caret-right',
      id: 'esparragos',
      submenu: [{ titulo: 'Esparragos', url: '/producto/esparragos' }],
    },
    {
      titulo: 'Filtro',
      icono: 'fa fa-caret-right',
      id: 'filtro',
      submenu: [{ titulo: 'Filtro', url: '/producto/filtro' }],
    },
    {
      titulo: 'Freno De Motor',
      icono: 'fa fa-caret-right',
      id: 'freno-de-motor',
      submenu: [{ titulo: 'Freno De Motor', url: '/producto/freno-de-motor' }],
    },
    {
      titulo: 'Fricciones',
      icono: 'fa fa-caret-right',
      id: 'fricciones',
      submenu: [{ titulo: 'Fricciones', url: '/producto/fricciones' }],
    },
    {
      titulo: 'Repuestos De Motor',
      icono: 'fa fa-caret-right',
      id: 'repuestos-de-motor',
      submenu: [
        { titulo: 'Repuestos De Motor', url: '/producto/repuestos-de-motor' },
      ],
    },
    {
      titulo: 'Inyectores',
      icono: 'fa fa-caret-right',
      id: 'inyectores',
      submenu: [{ titulo: 'Inyectores', url: '/producto/inyectores' }],
    },
    {
      titulo: 'Maleta De Resorte',
      icono: 'fa fa-caret-right',
      id: 'maleta-de-resorte',
      submenu: [
        { titulo: 'Maleta De Resorte', url: '/producto/maleta-de-resorte' },
      ],
    },
    {
      titulo: 'Bomba Hidraulico',
      icono: 'fa fa-caret-right',
      id: 'bomba-hidraulico',
      submenu: [
        { titulo: 'Bomba Hidraulico', url: '/producto/bomba-hidraulico' },
      ],
    },
    {
      titulo: 'Equipo De Levante',
      icono: 'fa fa-caret-right',
      id: 'equipo-de-levante',
      submenu: [
        { titulo: 'Equipo De Levante', url: '/producto/equipo-de-levante' },
      ],
    },
    {
      titulo: 'Servicios',
      icono: 'fa fa-caret-right',
      id: 'servicios',
      submenu: [{ titulo: 'Servicios', url: '/producto/servicios' }],
    },
    {
      titulo: 'Palanca',
      icono: 'fa fa-caret-right',
      id: 'palanca',
      submenu: [{ titulo: 'Palanca', url: '/producto/palanca' }],
    },
    {
      titulo: 'Patas',
      icono: 'fa fa-caret-right',
      id: 'patas',
      submenu: [{ titulo: 'Patas', url: '/producto/patas' }],
    },
    {
      titulo: 'Pernos',
      icono: 'fa fa-caret-right',
      id: 'pernos',
      submenu: [{ titulo: 'Pernos', url: '/producto/pernos' }],
    },
    {
      titulo: 'Radiador',
      icono: 'fa fa-caret-right',
      id: 'radiador',
      submenu: [{ titulo: 'Radiador', url: '/producto/radiador' }],
    },
    {
      titulo: 'Secador De Aire',
      icono: 'fa fa-caret-right',
      id: 'secador-de-aire',
      submenu: [
        { titulo: 'Secador De Aire', url: '/producto/secador-de-aire' },
      ],
    },
    {
      titulo: 'Sensores',
      icono: 'fa fa-caret-right',
      id: 'sensores',
      submenu: [{ titulo: 'Sensores', url: '/producto/sensores' }],
    },
    {
      titulo: 'Starrt',
      icono: 'fa fa-caret-right',
      id: 'starrt',
      submenu: [{ titulo: 'Starrt', url: '/producto/starrt' }],
    },
    {
      titulo: 'Toma Fuerza',
      icono: 'fa fa-caret-right',
      id: 'toma-fuerza',
      submenu: [{ titulo: 'Toma Fuerza', url: '/producto/toma-fuerza' }],
    },
    {
      titulo: 'Tornamesa',
      icono: 'fa fa-caret-right',
      id: 'tornamesa',
      submenu: [{ titulo: 'Tornamesa', url: '/producto/tornamesa' }],
    },
    {
      titulo: 'Tornillos',
      icono: 'fa fa-caret-right',
      id: 'tornillos',
      submenu: [{ titulo: 'Tornillos', url: '/producto/tornillos' }],
    },
    {
      titulo: 'Transmiciones',
      icono: 'fa fa-caret-right',
      id: 'transmiciones',
      submenu: [{ titulo: 'Transmiciones', url: '/producto/transmiciones' }],
    },
    {
      titulo: 'Tubo',
      icono: 'fa fa-caret-right',
      id: 'tubo',
      submenu: [{ titulo: 'Tubo', url: '/producto/tubo' }],
    },
    {
      titulo: 'Tuercas',
      icono: 'fa fa-caret-right',
      id: 'tuercas',
      submenu: [{ titulo: 'Tuercas', url: '/producto/tuercas' }],
    },
    {
      titulo: 'Valvulas',
      icono: 'fa fa-caret-right',
      id: 'valvulas',
      submenu: [{ titulo: 'Valvulas', url: '/producto/valvulas' }],
    },
    {
      titulo: 'Ventilador',
      icono: 'fa fa-caret-right',
      id: 'ventilador',
      submenu: [{ titulo: 'Ventilador', url: '/producto/ventilador' }],
    },
    {
      titulo: 'Yugo',
      icono: 'fa fa-caret-right',
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
