// Tots els textos de la web, en català (ca) i castellà (es).
// Per canviar un text, edita'l aquí en els dos idiomes.
// Els títols amb salt de línia són llistes: cada element és una línia.

export type Lang = "ca" | "es";

export const paths = {
  ca: { home: "index.html", nova: "nova-essencia.html" },
  es: { home: "es.html", nova: "es/nova-esencia.html" },
} as const;

const ca = {
  lang: "ca",
  meta: {
    homeTitle: "La Descomunal | Fem xarxa, som barris",
    homeDescription: "Connectem persones, entitats i projectes per transformar la Zona 09 de Lleida.",
    novaTitle: "Nova Essència | La Descomunal",
    novaDescription: "Espai comunitari de dones a la Mariola per a la formació, el cotreball, l'empoderament i la inserció sociolaboral.",
  },
  ui: {
    home: "La Descomunal, inici",
    mainNav: "Navegació principal",
    language: "Idioma",
    menu: "Menú",
    closeMenu: "Tancar el menú",
    backTop: "Tornar amunt",
    region: "Comunalitat Urbana de la Zona 09 de Lleida",
    designedBy: "Dissenyada per",
    draftNotice: "Proposta de nova web · Versió de treball · Agost 2026",
  },
  anchors: { top: "inici", about: "qui-som", projects: "projectes", committee: "comite", contact: "contacte" },
  nav: { about: "Qui som", projects: "Projectes", committee: "Comitè activador", contact: "Contacte" },
  hero: {
    eyebrow: "Comunalitat Urbana · Zona 09 · Lleida",
    title: ["Fem xarxa,", "som barris."],
    intro: "Connectem persones, entitats i projectes per transformar la Zona 09 a través de quatre àmbits: cultura; esport, salut i alimentació; ocupabilitat; i participació.",
    primary: "Coneix els projectes",
    secondary: "Què és La Descomunal?",
  },
  territory: { label: "Territori de La Descomunal", places: ["La Mariola", "Turó de Gardeny", "Blocs Joan Carles", "Barris veïns"] },
  about: {
    label: "01 · Qui som?",
    title: ["La Comunalitat", "Urbana de Lleida"],
    lead: "La Descomunal inclou els barris de la Mariola, Turó de Gardeny i Blocs Joan Carles, a més dels barris veïns de la Zona 09.",
    text: "Treballem per enfortir els béns comuns i crear projectes d'ajuda mútua a partir del moviment veïnal i associatiu, el teixit cooperatiu, el petit comerç, els projectes autoorganitzats i les xarxes de suport.",
    objectives: [
      "Crear noves formes d'autoorganització i llocs de treball al territori.",
      "Incrementar la vida comunitària i consolidar relacions de suport mutu.",
      "Treballar la pertinença, la cohesió social i la construcció col·lectiva.",
      "Diagnosticar i enfortir els béns comuns urbans de la Comunalitat.",
    ],
  },
  projects: {
    label: "02 · Projectes",
    title: ["Xarxes que converteixen", "necessitats en acció."],
    intro: "Quatre àmbits de treball connectats per una mateixa manera de fer: cooperació, proximitat i suport mutu.",
    featured: {
      tag: "Projecte destacat",
      imageAlt: "Espai comunitari Nova Essència",
      paragraphs: [
        "Un espai comunitari de dones a la Mariola per a la formació, el cotreball, l'empoderament i la inserció sociolaboral.",
        "Un projecte de dones i per a dones que connecta emprenedoria, cures, cooperació i lideratge compartit.",
      ],
      cta: "Entrar a Nova Essència",
    },
    networks: [
      { image: "enre9", area: "Cultura", name: "Xarxa ENRE9", text: "Fomentem l'accés universal a una cultura de qualitat i la transformació social. Impulsem residències artístiques, la brigada tècnica de joves, programació cultural quotidiana i enxarxament professional." },
      { image: "remou", area: "Esports, salut i alimentació", name: "Xarxa REMOU", text: "Promovem l'activitat esportiva i una alimentació saludable, sostenible i de proximitat. Creem formacions i activitats des d'una perspectiva crítica, inclusiva, intercultural i feminista." },
      { image: "enter", area: "Ocupabilitat", name: "Xarxa ENTER", text: "Oferim oportunitats d'aprenentatge i formació, reforcem habilitats i obrim noves vies d'inserció sociolaboral. Connectem els recursos formatius i d'ocupació presents al territori." },
      { image: "creix-participa", area: "Participació ciutadana", name: "Creix i Participa", text: "Treballem els drets de la ciutadania, l'antiracisme i l'autoorganització. Impulsem cicles temàtics, activisme social i veïnal, consciència i participació comunitària." },
    ],
  },
  concepts: {
    label: "03 · Com funciona?",
    title: ["Economia que posa", "la vida al centre."],
    intro: "La Comunalitat genera projectes econòmics i comunitaris que donen resposta a necessitats col·lectives i contribueixen al desenvolupament local.",
    items: [
      { title: "Economia social i solidària", text: "Iniciatives socioeconòmiques amb valors socials que posen al centre l'equitat, la solidaritat, la sostenibilitat, la participació i la inclusió." },
      { title: "Béns comuns", text: "Recursos i espais del territori compartits i gestionats comunitàriament per satisfer una necessitat col·lectiva." },
      { title: "Xarxes de suport mutu", text: "Organitzacions, agrupacions i ciutadania que cooperen per donar una resposta compartida a necessitats comunes." },
      { title: "Cooperativisme", text: "Autoajuda, autoresponsabilitat, democràcia, igualtat, equitat i solidaritat aplicades a una gestió compartida." },
    ],
  },
  committee: {
    label: "04 · Qui ho activa?",
    title: ["Comitè", "activador"],
    intro: "El grup promotor que impulsa, dinamitza i cuida la Comunalitat.",
    logoAlt: (name: string) => `Logotip de ${name}`,
    members: [
      { logo: "revalorem", name: "Revalorem SCCL", text: "Cooperativa sense ànim de lucre i d'iniciativa social que treballa per transformar el sistema alimentari cap a un model més just, saludable i respectuós." },
      { logo: "champagnat", name: "Fundació Champagnat", text: "Promou la qualitat educativa i l'ocupabilitat dels infants, joves i famílies de la zona. Lidera l'eix d'ocupabilitat de la Comunalitat." },
      { logo: "ue-gardeny", name: "Unió Esportiva Gardeny", text: "Club esportiu de la Mariola que acompanya la formació de nois i noies del barri i lidera l'eix esportiu des del seu arrelament al territori." },
      { logo: "la-nou", name: "Associació La Nou", text: "Impulsa projectes culturals i espais de participació comunitària arrelats a la Zona 09 des de l'experiència compartida del veïnat." },
      { logo: "ajuntament-lleida", name: "Ajuntament de Lleida", text: "La Regidoria de Participació Ciutadana connecta l'administració local amb la ciutadania i acompanya transversalment el projecte." },
    ],
  },
  contact: {
    label: "05 · Contacte",
    title: "Fem xarxa?",
    address: ["C/ Artur Mor, 1 · 25003 Lleida", "Centre Cívic de la Mariola"],
  },
  nova: {
    eyebrow: "Projecte destacat · La Mariola",
    intro: "Un espai comunitari de dones per a la formació, el cotreball, l'empoderament i la inserció sociolaboral.",
    logoAlt: "Espai Nova Essència — benestar, estètica i talent",
    photoAlt: "Dones participants a l'espai comunitari Nova Essència",
    photoCaption: "Un projecte coliderat amb les veïnes del territori.",
    story: {
      label: "01 · El projecte",
      title: ["Un espai segur,", "actiu i obert."],
      lead: "Nova Essència neix del treball de base i del procés participatiu que impulsem a la Zona 09, juntament amb les dones de la Mariola, el Turó de Gardeny i els Blocs Joan Carles.",
      paragraphs: [
        "És un espai de formació, cotreball i cooperació que promou l'autonomia econòmica i l'empoderament de les dones a través de la formació i la creació col·lectiva de projectes.",
        "Les primeres activitats, com els cursos de manicura i perruqueria, han servit per validar el model comunitari i enfortir un grup motor de dones compromeses amb la transformació social del seu entorn.",
      ],
    },
    poster: {
      label: "02 · Tot en un mateix espai",
      title: ["Formació, benestar,", "talent i oportunitats."],
      text: "Nova Essència acompanya les dones per formar-se, buscar feina, emprendre i oferir els seus serveis en un entorn compartit.",
      whereLabel: "On som",
      where: "C. Lluís Millet, 34 · La Mariola · Lleida",
      contactLabel: "Contacte",
      imageAlt: "Cartell informatiu: què és Nova Essència",
    },
    pillars: {
      label: "03 · Com ho fem?",
      title: ["Economia comunitària", "amb mirada de gènere."],
      intro: "Connectem emprenedoria, cures i participació per construir oportunitats arrelades al territori.",
      items: [
        { title: "Formació tècnica", text: "Aprenentatges pràctics que reforcen capacitats i obren noves oportunitats professionals." },
        { title: "Acompanyament", text: "Suport personalitzat perquè cada dona pugui avançar en el seu propi procés d'autonomia." },
        { title: "Xarxa i cooperació", text: "Un espai compartit per crear vincles, projectes col·lectius i lideratges comunitaris." },
      ],
    },
    activities: {
      label: "04 · Activitats",
      title: ["Formacions que", "obren oportunitats."],
      intro: "Una mostra d'activitats ja impulsades per reforçar capacitats, autonomia i xarxa entre dones de diferents edats.",
      items: [
        { image: "curs-perruqueria-45-60", alt: "Cartell d'una formació de perruqueria i imatge personal per a dones", caption: "Formació en perruqueria i imatge personal · Activitat realitzada" },
        { image: "curs-perruqueria-joves", alt: "Cartell d'una formació de perruqueria per a dones joves", caption: "Formació en perruqueria per a dones joves · Activitat realitzada" },
      ],
    },
    network: {
      label: "05 · En xarxa",
      title: ["Una resposta", "col·lectiva."],
      lead: "Nova Essència articula la implicació de les dones del barri, entitats locals, serveis municipals i la xarxa Enter per a la inserció sociolaboral.",
      text: "Des de La Descomunal continuem acompanyant aquest procés perquè l'espai segueixi creixent com un lloc de trobada, formació i futur compartit per a les dones de la Mariola i de tota la ciutat.",
      tags: ["La Descomunal", "Xarxa Enter", "Paeria de Lleida", "Veïnes de la Mariola"],
    },
    cta: {
      kicker: "Projectes que transformen la Zona 09",
      title: ["Fem xarxa,", "obrim futur."],
      primary: "Veure tots els projectes",
      secondary: "Contactar",
    },
  },
};

export type Content = typeof ca;

const es: Content = {
  lang: "es",
  meta: {
    homeTitle: "La Descomunal | Hacemos red, somos barrios",
    homeDescription: "Conectamos personas, entidades y proyectos para transformar la Zona 09 de Lleida.",
    novaTitle: "Nova Essència | La Descomunal",
    novaDescription: "Espacio comunitario de mujeres en la Mariola para la formación, el cotrabajo, el empoderamiento y la inserción sociolaboral.",
  },
  ui: {
    home: "La Descomunal, inicio",
    mainNav: "Navegación principal",
    language: "Idioma",
    menu: "Menú",
    closeMenu: "Cerrar el menú",
    backTop: "Volver arriba",
    region: "Comunalidad Urbana de la Zona 09 de Lleida",
    designedBy: "Diseñada por",
    draftNotice: "Propuesta de nueva web · Versión de trabajo · Agosto 2026",
  },
  anchors: { top: "inicio", about: "quienes-somos", projects: "proyectos", committee: "comite", contact: "contacto" },
  nav: { about: "Quiénes somos", projects: "Proyectos", committee: "Comité activador", contact: "Contacto" },
  hero: {
    eyebrow: "Comunalidad Urbana · Zona 09 · Lleida",
    title: ["Hacemos red,", "somos barrios."],
    intro: "Conectamos personas, entidades y proyectos para transformar la Zona 09 a través de cuatro ámbitos: cultura; deporte, salud y alimentación; empleabilidad; y participación.",
    primary: "Conoce los proyectos",
    secondary: "¿Qué es La Descomunal?",
  },
  territory: { label: "Territorio de La Descomunal", places: ["La Mariola", "Turó de Gardeny", "Blocs Joan Carles", "Barrios vecinos"] },
  about: {
    label: "01 · ¿Quiénes somos?",
    title: ["La Comunalidad", "Urbana de Lleida"],
    lead: "La Descomunal incluye los barrios de la Mariola, Turó de Gardeny y Blocs Joan Carles, además de los barrios vecinos de la Zona 09.",
    text: "Trabajamos para fortalecer los bienes comunes y crear proyectos de ayuda mutua a partir del movimiento vecinal y asociativo, el tejido cooperativo, el pequeño comercio, los proyectos autoorganizados y las redes de apoyo.",
    objectives: [
      "Crear nuevas formas de autoorganización y puestos de trabajo en el territorio.",
      "Incrementar la vida comunitaria y consolidar relaciones de apoyo mutuo.",
      "Trabajar la pertenencia, la cohesión social y la construcción colectiva.",
      "Diagnosticar y fortalecer los bienes comunes urbanos de la Comunalidad.",
    ],
  },
  projects: {
    label: "02 · Proyectos",
    title: ["Redes que convierten", "necesidades en acción."],
    intro: "Cuatro ámbitos de trabajo conectados por una misma manera de hacer: cooperación, proximidad y apoyo mutuo.",
    featured: {
      tag: "Proyecto destacado",
      imageAlt: "Espacio comunitario Nova Essència",
      paragraphs: [
        "Un espacio comunitario de mujeres en la Mariola para la formación, el cotrabajo, el empoderamiento y la inserción sociolaboral.",
        "Un proyecto de mujeres y para mujeres que conecta emprendimiento, cuidados, cooperación y liderazgo compartido.",
      ],
      cta: "Entrar en Nova Essència",
    },
    networks: [
      { image: "enre9", area: "Cultura", name: "Red ENRE9", text: "Fomentamos el acceso universal a una cultura de calidad y la transformación social. Impulsamos residencias artísticas, la brigada técnica de jóvenes, programación cultural cotidiana y conexiones profesionales." },
      { image: "remou", area: "Deporte, salud y alimentación", name: "Red REMOU", text: "Promovemos la actividad deportiva y una alimentación saludable, sostenible y de proximidad. Creamos formaciones y actividades desde una perspectiva crítica, inclusiva, intercultural y feminista." },
      { image: "enter", area: "Empleabilidad", name: "Red ENTER", text: "Ofrecemos oportunidades de aprendizaje y formación, reforzamos habilidades y abrimos nuevas vías de inserción sociolaboral. Conectamos los recursos formativos y de empleo del territorio." },
      { image: "creix-participa", area: "Participación ciudadana", name: "Crece y Participa", text: "Trabajamos los derechos de la ciudadanía, el antirracismo y la autoorganización. Impulsamos ciclos temáticos, activismo social y vecinal, conciencia y participación comunitaria." },
    ],
  },
  concepts: {
    label: "03 · ¿Cómo funciona?",
    title: ["Economía que pone", "la vida en el centro."],
    intro: "La Comunalidad genera proyectos económicos y comunitarios que responden a necesidades colectivas y contribuyen al desarrollo local.",
    items: [
      { title: "Economía social y solidaria", text: "Iniciativas socioeconómicas con valores sociales que ponen en el centro la equidad, la solidaridad, la sostenibilidad, la participación y la inclusión." },
      { title: "Bienes comunes", text: "Recursos y espacios del territorio compartidos y gestionados comunitariamente para satisfacer una necesidad colectiva." },
      { title: "Redes de apoyo mutuo", text: "Organizaciones, agrupaciones y ciudadanía que cooperan para responder conjuntamente a necesidades comunes." },
      { title: "Cooperativismo", text: "Autoayuda, autorresponsabilidad, democracia, igualdad, equidad y solidaridad aplicadas a una gestión compartida." },
    ],
  },
  committee: {
    label: "04 · ¿Quién lo activa?",
    title: ["Comité", "activador"],
    intro: "El grupo promotor que impulsa, dinamiza y cuida la Comunalidad.",
    logoAlt: (name: string) => `Logotipo de ${name}`,
    members: [
      { logo: "revalorem", name: "Revalorem SCCL", text: "Cooperativa sin ánimo de lucro y de iniciativa social que trabaja para transformar el sistema alimentario hacia un modelo más justo, saludable y respetuoso." },
      { logo: "champagnat", name: "Fundació Champagnat", text: "Promueve la calidad educativa y la empleabilidad de la infancia, la juventud y las familias de la zona. Lidera el eje de empleabilidad de la Comunalidad." },
      { logo: "ue-gardeny", name: "Unió Esportiva Gardeny", text: "Club deportivo de la Mariola que acompaña la formación de chicos y chicas del barrio y lidera el eje deportivo desde su arraigo en el territorio." },
      { logo: "la-nou", name: "Associació La Nou", text: "Impulsa proyectos culturales y espacios de participación comunitaria arraigados en la Zona 09 desde la experiencia compartida del vecindario." },
      { logo: "ajuntament-lleida", name: "Ajuntament de Lleida", text: "La Concejalía de Participación Ciudadana conecta la administración local con la ciudadanía y acompaña transversalmente el proyecto." },
    ],
  },
  contact: {
    label: "05 · Contacto",
    title: "¿Hacemos red?",
    address: ["C/ Artur Mor, 1 · 25003 Lleida", "Centre Cívic de la Mariola"],
  },
  nova: {
    eyebrow: "Proyecto destacado · La Mariola",
    intro: "Un espacio comunitario de mujeres para la formación, el cotrabajo, el empoderamiento y la inserción sociolaboral.",
    logoAlt: "Espai Nova Essència — benestar, estètica i talent",
    photoAlt: "Mujeres participantes en el espacio comunitario Nova Essència",
    photoCaption: "Un proyecto coliderado con las vecinas del territorio.",
    story: {
      label: "01 · El proyecto",
      title: ["Un espacio seguro,", "activo y abierto."],
      lead: "Nova Essència nace del trabajo de base y del proceso participativo que impulsamos en la Zona 09, junto con las mujeres de la Mariola, Turó de Gardeny y Blocs Joan Carles.",
      paragraphs: [
        "Es un espacio de formación, cotrabajo y cooperación que promueve la autonomía económica y el empoderamiento de las mujeres mediante la formación y la creación colectiva de proyectos.",
        "Las primeras actividades, como los cursos de manicura y peluquería, han servido para validar el modelo comunitario y fortalecer un grupo motor de mujeres comprometidas con la transformación social de su entorno.",
      ],
    },
    poster: {
      label: "02 · Todo en un mismo espacio",
      title: ["Formación, bienestar,", "talento y oportunidades."],
      text: "Nova Essència acompaña a las mujeres para formarse, buscar empleo, emprender y ofrecer sus servicios en un entorno compartido.",
      whereLabel: "Dónde estamos",
      where: "C. Lluís Millet, 34 · La Mariola · Lleida",
      contactLabel: "Contacto",
      imageAlt: "Cartel informativo: qué es Nova Essència",
    },
    pillars: {
      label: "03 · ¿Cómo lo hacemos?",
      title: ["Economía comunitaria", "con perspectiva de género."],
      intro: "Conectamos emprendimiento, cuidados y participación para construir oportunidades arraigadas en el territorio.",
      items: [
        { title: "Formación técnica", text: "Aprendizajes prácticos que refuerzan capacidades y abren nuevas oportunidades profesionales." },
        { title: "Acompañamiento", text: "Apoyo personalizado para que cada mujer pueda avanzar en su propio proceso de autonomía." },
        { title: "Red y cooperación", text: "Un espacio compartido para crear vínculos, proyectos colectivos y liderazgos comunitarios." },
      ],
    },
    activities: {
      label: "04 · Actividades",
      title: ["Formaciones que", "abren oportunidades."],
      intro: "Una muestra de actividades ya impulsadas para reforzar capacidades, autonomía y red entre mujeres de diferentes edades.",
      items: [
        { image: "curs-perruqueria-45-60", alt: "Cartel de una formación de peluquería e imagen personal para mujeres", caption: "Formación en peluquería e imagen personal · Actividad realizada" },
        { image: "curs-perruqueria-joves", alt: "Cartel de una formación de peluquería para mujeres jóvenes", caption: "Formación en peluquería para mujeres jóvenes · Actividad realizada" },
      ],
    },
    network: {
      label: "05 · En red",
      title: ["Una respuesta", "colectiva."],
      lead: "Nova Essència articula la implicación de las mujeres del barrio, entidades locales, servicios municipales y la red Enter para la inserción sociolaboral.",
      text: "Desde La Descomunal seguimos acompañando este proceso para que el espacio continúe creciendo como lugar de encuentro, formación y futuro compartido para las mujeres de la Mariola y de toda la ciudad.",
      tags: ["La Descomunal", "Red Enter", "Paeria de Lleida", "Vecinas de la Mariola"],
    },
    cta: {
      kicker: "Proyectos que transforman la Zona 09",
      title: ["Hacemos red,", "abrimos futuro."],
      primary: "Ver todos los proyectos",
      secondary: "Contactar",
    },
  },
};

export const content: Record<Lang, Content> = { ca, es };

export const contactInfo = {
  email: "info@ladescomunal.cat",
  phone: "+34633241371",
  phoneLabel: "+34 633 241 371",
  phoneShort: "633 24 13 71",
  instagram: "https://www.instagram.com/ladescomunal_lleida/",
  instagramLabel: "@ladescomunal_lleida",
  designer: "https://mayerra.github.io",
};
