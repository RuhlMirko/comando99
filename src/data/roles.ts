export interface Role {
  slug: string;
  name: string;
  branch: string;
  level: string;
  next_levels: readonly string[];
  image?: string;
  description?: string;
  common_equipment?: readonly string[];
}

export const roles: readonly Role[] = [
  { slug: "explorador", name: "Explorador", branch: "Roles Operativos", level: "Basico",
    next_levels:["Tirador selecto", "Francotirador", "Observador"], description:"Un explorador a pie ligero tiene como mision principal recolectar informacion sin ser visto antes de que el grueso de la fuerza se exponga.\n Este rol es clave para reconocimiento, exploracion avanzada y operaciones especiales." },
  { slug: "granadero", name: "Granadero", branch: "Roles Operativos", level: "Basico y Experimentado",
    next_levels:["Granadero", "Soldado AA ligero / Soldado AT ligero", "Soldado AA pesado / Soldado AT pesado"] },
   
  { slug: "enfermero", name: "Enfermero", branch: "Roles Operativos", level: "Basico",
    next_levels:["Enfermero de combate", "Medico de combate", "Medico Cirujano"] },
  { slug: "fusilero-automatico", name: "Fusilero automatico ◊ Portamuniciones", branch: "Roles Operativos", level: "Basico",
    next_levels:["Ametrallador Ligero", "Ametrallador Mediano"] },
  { slug: "ingeniero-eod", name: "Ingeniero EOD", branch: "Roles Operativos", level: "Basico" ,
    next_levels:["Ingeniero Zapador", "Especialista en demoliciones"]},
  { slug: "radio-operador-de-escuadra", name: "Radio Operador de escuadra", branch: "Roles Operativos", level: "Basico",
    next_levels:["Encargado de control aereo (J.T.A.C.)"] },
  { slug: "dron-de-explorador", name: "Dron de explorador", branch: "Roles Tecnicos", level: "Basico",
    next_levels:["Dron de combate"] },  
  { slug: "tripulante-de-mecanizada", name: "Tripulante de Mecanizada", branch: "Roles Tecnicos", level: "Basico",
    next_levels:["Comandante de mecanizada"] },  
  { slug: "artillero-de-movilidad-ligera", name: "Artillero de Movilidad Ligera", branch: "Roles Tecnicos", level: "Basico",
    next_levels:["Conductor de Movilidad Ligera", "Cabeza de Convoy"] },
  { slug: "conductor-de-movilidad-ligera", name: "Conductor de Movilidad Ligera", branch: "Roles Tecnicos", level: "Experimentado",
    next_levels:["", ""] },  
  { slug: "aviones-de-entrenamiento-y-reconocimiento", name: "Aviones de entrenamiento y reconocimiento", branch: "Roles Tecnicos", level: "Basico",
    next_levels:["Su-25/A-29", "A-10C/F-16","F-22/Mig-29"] },  
  { slug: "helicopteros-de-transporte", name: "Helicopteros de transporte", branch: "Roles Tecnicos", level: "Basico",
    next_levels:["AH-6 (Little Bird) / UH-1Y", "AH-640/AH-1Z","UH-60 DAP / RAH-66"] },
  
];