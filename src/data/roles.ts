export interface Role {
  slug: string;
  name: string;
  branch: string;
  level: string;
  next_levels: readonly string[];
  image?: string;
  description?: string;
  common_equipment?: readonly string[];
  galleryFolder?: string;
}

export const roles: readonly Role[] = [
  { slug: "explorador", name: "Explorador", branch: "Rol Operativo", level: "Basico", image: "/images/roles/explorador.webp",
    next_levels:["Tirador selecto", "Francotirador", "Observador"], 
    description:"Un explorador a pie ligero tiene como mision principal recolectar informacion sin ser visto antes de que el grueso de la fuerza se exponga.\n Este rol es clave para reconocimiento, exploracion avanzada y operaciones especiales.\n Ademas de la observacion, el explorador tambien evalua la viabilidad de caminos y puntos estrategicos, como zonas de cobertura, posiciones de tiro o posibles rutas de escape.",
    common_equipment:["Binoculares", "Camara HuntIR", "Marcador laser"] },
  { slug: "granadero", name: "Granadero", branch: "Rol Operativo", level: "Basico y Experimentado", image: "/images/roles/granadero.webp",
    next_levels:["Granadero", "Soldado AA ligero / Soldado AT ligero", "Soldado AA pesado / Soldado AT pesado"],description:"El granadero es un soldado de infantería equipado con un lanzagranadas M203, acoplado a su fusil principal (generalmente un M16 o M4, entre otros). Su función principal es proporcionar apoyo de fuego indirecto mediante el uso de granadas de 40 mm, eliminando enemigos en coberturas, trincheras o edificaciones, y desestabilizando formaciones enemigas antes de un asalto." ,common_equipment:["Lanza Granadas", "Granadas Letales y No Letales", "Granadas de Humo", ] },   
  { slug: "enfermero", name: "Enfermero", branch: "Rol Operativo", level: "Basico", image: "/images/roles/enfermero.jpg", galleryFolder:"/images/roles/capturas/Enfermero",
    next_levels:["Enfermero de combate", "Medico de combate", "Medico Cirujano"],description:"El enfermero cumple una función crucial en el campo de batalla: estabilizar a los heridos y garantizar su supervivencia hasta que puedan continuar combatiendo, recibir atención de un personal sanitario de rol superior o ser evacuados.\n El objetivo del enfermero no es solo curar, sino garantizar que el combatiente pueda seguir operativo o al menos no empeorar su condición hasta que reciba atención avanzada." , common_equipment:["Sangre/Plasma","AMBU","Intravenosa","Morfina/Epinefrina","ACCUVAC"] },
  { slug: "fusilero-automatico", name: "Fusilero automatico ◊ Portamuniciones", branch: "Rol Operativos", level: "Basico",image: "/images/roles/fusilero-automatico.png",
    next_levels:["Ametrallador Ligero", "Ametrallador Mediano"],description:"Un fusilero automatico tiene como funcion principal proporcionar potencia de fuego ya sea defensiva o ofensivamente.\n El portamuniciones es su pareja de combate para tanto aligerar su carga como para servir de centinela a su fusilero.\n Generalmente el fusilero mantiene su posicion mientras que su portamuniciones actua como su guardia personal y reabastecedor de cargadores." ,common_equipment:["Cargador con mas de 100 balas","Multiples cargadores","Mochila con mayor capacidad"] },
  { slug: "ingeniero-eod", name: "Ingeniero EOD", branch: "Rol Operativo", level: "Basico" , image: "/images/roles/EOD.webp",
    next_levels:["Ingeniero Zapador", "Especialista en demoliciones"],description:"El ingeniero EOD es el profesional a cargo de manejar todo tipo de explosivos, ya sea enemigo o aliado.\n No es simplemente un “desactivador de bombas”, es un especialista militar altamente entrenado cuya misión principal es la identificación, evaluación, neutralización y disposición segura de artefactos explosivos",common_equipment:["Cargas explosivas","Contra cargas","Desactivador de bombas","Libreta identificadora de explosivos"], galleryFolder:"/images/roles/capturas/EOD"},
  { slug: "radio-operador-de-escuadra", name: "Radio Operador de escuadra", branch: "Rol Operativo", level: "Basico",image: "/images/roles/RTO.jpg",
    next_levels:["Encargado de control aereo (J.T.A.C.)"],description:"El Radio Operador es el encargado de establecer y mantener la comunicación entre su unidad y HQ (Mando/Comando Central), así como con otras unidades en el campo de batalla.\n Su función es fundamental para la coordinación de movimientos, la transmisión de órdenes y la solicitud de apoyo, asegurando que toda la unidad esté informada y pueda actuar de manera eficiente" ,common_equipment:["Radio 153 (Alcance altamente superior a la radio de escuadra)"] },
  { slug: "dron-de-explorador", name: "Dron de explorador", branch: "Rol Tecnico", level: "Basico",image: "/images/roles/dron-explorador.webp",
    next_levels:["Dron de combate"], description:"Similarmente al explorador de pie la funcion del operador de drones es obtener la mayor cantidad de información posible, sin que su dron sea detectado por el enemigo." ,common_equipment:["Dron Darter","Terminal Van (OTAN)"] },  
  { slug: "tripulante-de-mecanizada", name: "Tripulante de Mecanizada", branch: "Roles Tecnicos", level: "Basico",image: "/images/roles/mecanizado.webp",
    next_levels:["Comandante de mecanizada"] },  
  { slug: "artillero-de-movilidad-ligera", name: "Artillero de Movilidad Ligera", branch: "Roles Tecnicos", level: "Basico",
    next_levels:["Conductor de Movilidad Ligera", "Cabeza de Convoy"] },
  { slug: "conductor-de-movilidad-ligera", name: "Conductor de Movilidad Ligera", branch: "Roles Tecnicos", level: "Experimentado",
    next_levels:["", ""] },  
  { slug: "aviones-de-entrenamiento-y-reconocimiento", name: "Aviones de entrenamiento y reconocimiento", branch: "Roles Tecnicos", level: "Basico", image: "/images/roles/Aviones.jpg",
    next_levels:["Su-25/A-29", "A-10C/F-16","F-22/Mig-29"], description:"El piloto de aviones de entrenamiento y reconocimiento se encarga de familiarizarse con los sistemas de vuelo basicos y de realizar tareas de observacion aerea sobre el campo de batalla.\n Este rol sirve como base para progresar hacia aeronaves de combate mas avanzadas, desarrollando las habilidades necesarias de pilotaje, navegacion y reconocimiento tactico." },  
  { slug: "helicopteros-de-transporte", name: "Helicopteros de transporte", branch: "Roles Tecnicos", level: "Basico",image: "/images/roles/helicopter.jpeg",
    next_levels:["AH-6 (Little Bird) / UH-1Y", "AH-640/AH-1Z","UH-60 DAP / RAH-66"], description:"El piloto de helicopteros de transporte tiene como mision principal el traslado de tropas y suministros hacia y desde zonas de combate, asi como el apoyo logistico durante operaciones.\n Este rol requiere gran precision en el pilotaje para realizar inserciones y extracciones seguras, muchas veces bajo fuego enemigo o en condiciones adversas.", galleryFolder:"/images/roles/capturas/helicopteros" },
  
];