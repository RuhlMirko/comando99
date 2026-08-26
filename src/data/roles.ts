export interface Role {
  slug: string;
  name: string;
  branch: string;
  level: string;
  next_levels: readonly string[];
}

export const roles: readonly Role[] = [
  { slug: "explorador", name: "Explorador", branch: "Roles Operativos", level: "Basico",
    next_levels:["Tirador selecto", "Francotirador", "Observador"] },
  { slug: "granadero", name: "Granadero", branch: "Roles Operativos", level: "Basico y Experimentado",
    next_levels:["Granadero", "Soldado AA ligero / Soldado AT ligero", "Soldado AA pesado / Soldado AT pesado"] },
   
  { slug: "enfermero", name: "Enfermero", branch: "Roles Operativos", level: "Basico",
    next_levels:["Ametrallador Ligero", "Ametrallador Mediano"] },
  { slug: "fusilero-automatico", name: "Fusilero automatico ◊ Portamuniciones", branch: "Roles Operativos", level: "Basico",
    next_levels:["Ametrallador Ligero", "Ametrallador Mediano"] },
  { slug: "ingeniero-eod", name: "Ingeniero EOD", branch: "Roles Operativos", level: "Basico" ,
    next_levels:["", ""]},
  { slug: "radio-operador-de-escuadra", name: "Radio Operador de escuadra", branch: "Roles Operativos", level: "Basico",
    next_levels:["", ""] },
  { slug: "dron-de-explorador", name: "Dron de explorador", branch: "Roles Tecnicos", level: "Basico",
    next_levels:["", ""] },  
  { slug: "tripulante-de-mecanizada", name: "Tripulante de Mecanizada", branch: "Roles Tecnicos", level: "Basico",
    next_levels:["", ""] },  
  { slug: "artillero-de-movilidad-ligera", name: "Artillero de Movilidad Ligera", branch: "Roles Tecnicos", level: "Basico",
    next_levels:["", ""] },
  { slug: "conductor-de-movilidad-ligera", name: "Conductor de Movilidad Ligera", branch: "Roles Tecnicos", level: "Experimentado",
    next_levels:["", ""] },  
  { slug: "aviones-de-entrenamiento-y-reconocimiento", name: "Aviones de entrenamiento y reconocimiento", branch: "Roles Tecnicos", level: "Basico",
    next_levels:["", ""] },  
  { slug: "helicopteros-de-transporte", name: "Helicopteros de transporte", branch: "Roles Tecnicos", level: "Basico",
    next_levels:["", ""] },
  
];