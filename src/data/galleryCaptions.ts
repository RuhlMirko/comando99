const misionesFiles = import.meta.glob("/public/images/galeria/misiones/*.*");
const entrenamientosFiles = import.meta.glob("/public/images/galeria/entrenamientos/*.*");
const patrullasFiles = import.meta.glob("/public/images/galeria/patrullas/*.*");

type Category = "misiones" | "entrenamientos" | "patrullas";

const categoryLabels: Record<Category, string> = {
  misiones: "Misión",
  entrenamientos: "Entrenamiento",
  patrullas: "Patrulla",
};

type CaptionEntry = {
  caption: string;
  patterns: string[];
};

const captions: Record<string, CaptionEntry> = {
  "sombra_de_leviatan_08-03-2026": {
    caption: "Misión - Sombra de Leviatán · 08/03/2026",
    patterns: ["*SOMBRA DE LEVIATÁN*", "*Sombra de Leviatán*"],
  },
  "punaakarti_23-08-2026": {
    caption: "Misión - Punakaarti · 23/08/2026",
    patterns: ["*PUNAKAARTI*", "*Punakaarti*"],
  },
  "corte_de_sombra_16-08-2026": {
    caption: "Misión - Corte de Sombra · 16/08/2026",
    patterns: ["*CORTE DE SOMBRA*", "*Corte de Sombra*"],
  },
  "en_busca_del_general_alhil_mosque_15-02-2026": {
    caption: "Misión - En Busca del General Alhil Mosque · 15/02/2026",
    patterns: ["*En Busca del General Alhil Mosque*"],
  },
  "iron_harvest_01-03-2026": {
    caption: "Misión - Iron Harvest · 01/03/2026",
    patterns: ["*IRON HARVEST*", "*Iron Harvest*"],
  },
  "out_lights_22-02-2026": {
    caption: "Misión - Out Lights · 22/02/2026",
    patterns: ["*Out Lights*"],
  },
  "sombra_silenciosa_26-07-2026": {
    caption: "Misión - Sombra Silenciosa · 26/07/2026",
    patterns: ["*SOMBRA SILENCIOSA*", "*Sombra Silenciosa*"],
  },
  "cazador_en_el_bosque_30-08-2026":{
    caption: "Mision - Cazador en el bosque · 30/08/2026",
    patterns: ["*CAZADOR EN EL BOSQUE*"]
  },  
  "en_conjunto_01-2026": {
    caption: "Entrenamiento - En Conjunto · 01/2026",
    patterns: ["*202601*"],
  },
  "general_30-03-2026": {
    caption: "Entrenamiento - General · 30/03/2026",
    patterns: ["*20260330213219*"],
  },
  "avance_mout_12-03-2026": {
    caption: "Entrenamiento - Avance MOUT · 12/03/2026",
    patterns: ["*Avance MOUT*", "*avance mout*"],
  },
  "general_medico_05-03-2026": {
    caption: "Entrenamiento - General Médico · 05/03/2026",
    patterns: ["*general medico*", "*General medico*", "*Entrenamento general medico*"],
  },
  "ala_rotativa_29-07-2026": {
    caption: "Entrenamiento - Ala Rotativa · 29/07/2026",
    patterns: ["*Ala rotativa*", "*Ala Rotativa*"],
  },
  "armas_conjuntas_04-03-2026": {
    caption: "Entrenamiento - Armas Conjuntas · 04/03/2026",
    patterns: ["*armas conjuntas*", "*Armas Conjuntas*"],
  },
  "armas_conjuntas_nocturno_21-02-2026": {
    caption: "Entrenamiento - Armas Conjuntas Nocturno · 21/02/2026",
    patterns: ["*armas conjuntas nocturno*"],
  },
  "armas_conjuntas_sin_fecha": {
    caption: "Entrenamiento - Armas Conjuntas",
    patterns: ["*Entrenamiento armas conjuntas.webp"],
  },
  "armas_sin_fecha": {
    caption: "Entrenamiento - Armas",
    patterns: ["*Entrenamiento armas.jpg"],
  },
  "asalto_aereo_14-06-2026": {
    caption: "Entrenamiento - Asalto Aéreo · 14/06/2026",
    patterns: ["*Asalto Aereo 14-06-2026*"],
  },
  "asalto_aereo_10-04-2026": {
    caption: "Entrenamiento - Asalto Aéreo · 10/04/2026",
    patterns: ["*Asalto Aereo 10-04-2026*"],
  },
  "asalto_aereo_07-05-2026": {
    caption: "Entrenamiento - Asalto Aéreo · 07/05/2026",
    patterns: ["*Asalto Aereo 07-05-2026*"],
  },
  "asalto_sin_fecha":{
    caption: "Entrenamiento - Asalto Aéreo",
    patterns: ["*Asalto Aéreo*","*Asalto aereo*"],
  },
  "caballeria_19-06-2026": {
    caption: "Entrenamiento - Caballería · 19/06/2026",
    patterns: ["*Caballeria*", "*Caballería*"],
  },
  "caballeria_21-02-2026": {
    caption: "Entrenamiento - Caballería · 21/02/2026",
    patterns: ["*caballeria 21-02-2026*"],
  },
  "caballeria_sin_fecha": {
    caption: "Entrenamiento - Caballería",
    patterns: ["*Entrenamiento caballeria.webp"],
  },
  "conjunto_sin_fecha": {
    caption: "Entrenamiento - Conjunto",
    patterns: ["*Entrenamiento conjunto.webp"],
  },
  "general_sin_fecha": {
    caption: "Entrenamiento - General",
    patterns: ["*Entrenamiento general*"],
  },
  "cqb": {
    caption: "Entrenamiento - CQB · 07/04/2026",
    patterns: ["*CQB - 07-04-2026*","*CQB 2 - 07-04-2026*", "*CQB 3 - 07-04-2026*"],
  },
  "infanteria_21-02-2026": {
    caption: "Entrenamiento - Infantería · 21/02/2026",
    patterns: ["*infanteria 21-02-2026*"],
  },
  "infanteria_movilizada": {
    caption: "Entrenamiento - Infantería Movilizada",
    patterns: ["*infanteria movilizada*"],
  },
  "ingeniero_eod_08-03-2026": {
    caption: "Entrenamiento - Ingeniero EOD · 08/03/2026",
    patterns: ["*Ingeniero EOD 08-03-2026*", "*Ingeniero EOD 2*", "*Ingeniero EOD 3*", "*Ingeniero EOD 4*", "*Ingeniero EOD 5*"],
  },
  "piloto_aereo": {
    caption: "Entrenamiento - Piloto Aéreo",
    patterns: ["*piloto aereo*", "*Piloto aereo*"],
  },
  "tactico_22-06-2026": {
    caption: "Entrenamiento - Táctico · 22/06/2026",
    patterns: ["*Tactico 22-06-2026*"],
  },
  "tactico_sin_fecha": {
    caption: "Entrenamiento - Táctico",
    patterns: ["*Entrenamiento Tactico.png"],
  },
  "vip_sin_fecha": {
    caption: "Entrenamiento - VIP",
    patterns: ["*Entrenamiento VIP*"],
  },
  "ingeniero_eod_13-03-2026": {
    caption: "Entrenamiento - Ingeniero EOD · 13/03/2026",
    patterns: ["*Ingeniero EOD 13-03-2026*"],
  },
  "patrulla_19-02-2026_1": {
    caption: "Patrulla 1 · 19/02/2026",
    patterns: ["*Patrulla 2 19-02-2026*"],
  },  
  "patrulla_18-05-2026": {
    caption: "Patrulla · 18/05/2026",
    patterns: ["*Patrulla 18-05-2026*"],
  },
  "patrulla_02-08-2026": {
    caption: "Patrulla · 02/08/2026",
    patterns: ["*Patrulla 02-08-2026*"],
  },
  "patrulla_05-03-2026": {
    caption: "Patrulla · 05/03/2026",
    patterns: ["*Patrulla 05-03-2026*", "*Patrulla 2 05-03-2026*"],
  },
  "patrulla_07-08-2026": {
    caption: "Patrulla · 07/08/2026",
    patterns: ["*Patrulla 07-08-2026*"],
  },
  "patrulla_12-03-2026": {
    caption: "Patrulla · 12/03/2026",
    patterns: ["*Patrulla 12-03-2026*"],
  },
  "patrulla_15-08-2026": {
    caption: "Patrulla · 15/08/2026",
    patterns: ["*Patrulla 15-08-2026*"],
  },
  "patrulla_19-02-2026": {
    caption: "Patrulla · 19/02/2026",
    patterns: ["*Patrulla 19-02-2026*"],
  },
  "patrulla_19-06-2026": {
    caption: "Patrulla · 19/06/2026",
    patterns: ["*Patrulla 19-06-2026*"],
  },
  "patrulla_21-03-2026": {
    caption: "Patrulla · 21/03/2026",
    patterns: ["*Patrulla 21-03-2026*"],
  },
  "patrulla_21-06-2026": {
    caption: "Patrulla · 21/06/2026",
    patterns: ["*Patrulla 21-06-2026*"],
  },
  "patrulla_27-07-2026": {
    caption: "Patrulla · 27/07/2026",
    patterns: ["*Patrulla 27-07-2026*"],
  },
  "patrulla_31-07-2026": {
    caption: "Patrulla · 31/07/2026",
    patterns: ["*Patrulla 31-07-2026*"],
  },
  "patrulla_comando_99_12-04-2025": {
    caption: "Patrulla - Comando 99 · 12/04/2025",
    patterns: ["*comando 99*", "*Comando 99*"],
  },
};

/* To add a new caption, just add an entry:
  "nueva_mision_10-01-2027": {
    caption: "Misión - Nueva Misión · 10/01/2027",
    patterns: ["*NUEVA MISION*", "*Nueva Mision*"],
  },
*/

function matchPattern(filename: string, pattern: string): boolean {
  const regexPattern = pattern
    .replace(/\*/g, ".*")
    .replace(/\?/g, ".")
    .toLowerCase();
  const regex = new RegExp(`^${regexPattern}$`, "i");
  return regex.test(filename);
}

function findCaption(category: Category, filename: string): string {
  const label = categoryLabels[category];
  
  for (const entry of Object.values(captions)) {
    for (const pattern of entry.patterns) {
      if (matchPattern(filename, pattern)) {
        return entry.caption;
      }
    }
  }
  
  const dateMatch = filename.match(/(\d{1,2}[-\s]\d{2}[-\s]\d{4})/);
  const name = filename
    .replace(/\.(jpg|jpeg|png|webp|gif|svg)$/i, "")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (dateMatch) {
    const [day, month, year] = dateMatch[1].split(/[-\s]/);
    return `${label} - ${name} · ${day}/${month}/${year}`;
  }
  return `${label} - ${name}`;
}

const categoryGlobs: Record<Category, Record<string, () => Promise<unknown>>> = {
  misiones: misionesFiles,
  entrenamientos: entrenamientosFiles,
  patrullas: patrullasFiles,
};

export const galleryCaptions: Record<string, string> = {};

for (const category of Object.keys(categoryGlobs) as Category[]) {
  const files = categoryGlobs[category];

  for (const filePath of Object.keys(files)) {
    const filename = filePath.split("/").pop() || "";
    const key = `${category}/${filename}`;
    galleryCaptions[key] = findCaption(category, filename);
  }
}
