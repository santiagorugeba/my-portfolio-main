// Base de datos de 365 promesas bíblicas del Antiguo y Nuevo Testamento
// Organizadas por categorías para facilitar la selección

export interface BiblePromise {
  reference: string;
  text: string;
  category: string;
  day: number; // Día del año (1-365)
}

export const BIBLE_PROMISES: BiblePromise[] = [
  // PROMESAS DE SALVACIÓN Y VIDA ETERNA (1-30)
  {
    reference: "Juan 3:16",
    text: "Porque tanto amó Dios al mundo que dio a su único Hijo, para que todo el que crea en él no se pierda, sino que tenga vida eterna.",
    category: "Salvación",
    day: 1
  },
  {
    reference: "Juan 14:6",
    text: "Jesús le dijo: Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí.",
    category: "Salvación",
    day: 2
  },
  {
    reference: "Hechos 4:12",
    text: "Y en ningún otro hay salvación, porque no hay otro nombre bajo el cielo dado a los hombres en que podamos ser salvos.",
    category: "Salvación",
    day: 3
  },
  {
    reference: "Romanos 10:9",
    text: "Si confiesas con tu boca que Jesús es el Señor y crees en tu corazón que Dios lo levantó de entre los muertos, serás salvo.",
    category: "Salvación",
    day: 4
  },
  {
    reference: "Efesios 2:8-9",
    text: "Porque por gracia ustedes han sido salvados mediante la fe; esto no procede de ustedes, sino que es el regalo de Dios, no por obras, para que nadie se jacte.",
    category: "Salvación",
    day: 5
  },
  {
    reference: "1 Juan 5:11-12",
    text: "Y este es el testimonio: que Dios nos ha dado vida eterna, y esta vida está en su Hijo. El que tiene al Hijo tiene la vida; el que no tiene al Hijo de Dios no tiene la vida.",
    category: "Salvación",
    day: 6
  },
  {
    reference: "Juan 5:24",
    text: "De cierto, de cierto les digo: El que oye mi palabra y cree al que me envió tiene vida eterna; y no vendrá a condenación, mas ha pasado de muerte a vida.",
    category: "Salvación",
    day: 7
  },
  {
    reference: "Romanos 6:23",
    text: "Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna en Cristo Jesús Señor nuestro.",
    category: "Salvación",
    day: 8
  },
  {
    reference: "Tito 3:5",
    text: "Nos salvó, no por obras de justicia que nosotros hubiéramos hecho, sino por su misericordia, por el lavamiento de la regeneración y por la renovación en el Espíritu Santo.",
    category: "Salvación",
    day: 9
  },
  {
    reference: "1 Pedro 1:3-4",
    text: "Bendito sea el Dios y Padre de nuestro Señor Jesucristo, que según su gran misericordia nos hizo renacer para una esperanza viva, por la resurrección de Jesucristo de los muertos, para una herencia incorruptible, incontaminada e inmarcesible, reservada en los cielos para ustedes.",
    category: "Salvación",
    day: 10
  },

  // PROMESAS DE PERDÓN Y MISERICORDIA (11-40)
  {
    reference: "1 Juan 1:9",
    text: "Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados y limpiarnos de toda maldad.",
    category: "Perdón",
    day: 11
  },
  {
    reference: "Salmo 103:12",
    text: "Cuanto está lejos el oriente del occidente, hizo alejar de nosotros nuestras rebeliones.",
    category: "Perdón",
    day: 12
  },
  {
    reference: "Isaías 1:18",
    text: "Venid luego, dice Jehová, y estemos a cuenta: si vuestros pecados fueren como la grana, como la nieve serán emblanquecidos; si fueren rojos como el carmesí, vendrán a ser como blanca lana.",
    category: "Perdón",
    day: 13
  },
  {
    reference: "Miqueas 7:18-19",
    text: "¿Qué Dios como tú, que perdona la maldad y olvida el pecado del remanente de su heredad? No retuvo para siempre su enojo, porque se deleita en misericordia. El volverá a tener misericordia de nosotros; sepultará nuestras iniquidades, y echará en lo profundo del mar todos nuestros pecados.",
    category: "Perdón",
    day: 14
  },
  {
    reference: "Salmo 32:1-2",
    text: "Bienaventurado aquel cuya transgresión ha sido perdonada y cubierto su pecado. Bienaventurado el hombre a quien Jehová no culpa de iniquidad y en cuyo espíritu no hay engaño.",
    category: "Perdón",
    day: 15
  },

  // PROMESAS DE PROTECCIÓN Y SEGURIDAD (41-70)
  {
    reference: "Salmo 23:1",
    text: "El Señor es mi pastor; nada me faltará.",
    category: "Protección",
    day: 16
  },
  {
    reference: "Salmo 91:1-2",
    text: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente. Diré yo a Jehová: Esperanza mía y castillo mío; mi Dios, en quien confiaré.",
    category: "Protección",
    day: 17
  },
  {
    reference: "Isaías 41:10",
    text: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.",
    category: "Protección",
    day: 18
  },
  {
    reference: "Salmo 46:1",
    text: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.",
    category: "Protección",
    day: 19
  },
  {
    reference: "Proverbios 18:10",
    text: "Torre fuerte es el nombre de Jehová; a él correrá el justo y será levantado.",
    category: "Protección",
    day: 20
  },

  // PROMESAS DE PROVISIÓN Y BENDICIÓN (71-100)
  {
    reference: "Filipenses 4:19",
    text: "Mi Dios, pues, suplirá todo lo que les falta conforme a sus riquezas en gloria en Cristo Jesús.",
    category: "Provisión",
    day: 21
  },
  {
    reference: "Mateo 6:33",
    text: "Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas les serán añadidas.",
    category: "Provisión",
    day: 22
  },
  {
    reference: "Salmo 37:25",
    text: "Joven fui y he envejecido, y no he visto justo desamparado ni su descendencia que mendigue pan.",
    category: "Provisión",
    day: 23
  },
  {
    reference: "Malaquías 3:10",
    text: "Traed todos los diezmos al alfolí y haya alimento en mi casa; y probadme ahora en esto, dice Jehová de los ejércitos, si no os abriré las ventanas de los cielos y derramaré sobre vosotros bendición hasta que sobreabunde.",
    category: "Provisión",
    day: 24
  },
  {
    reference: "2 Corintios 9:8",
    text: "Y poderoso es Dios para hacer que abunde en vosotros toda gracia, a fin de que, teniendo siempre en todas las cosas todo lo suficiente, abundéis para toda buena obra.",
    category: "Provisión",
    day: 25
  },

  // PROMESAS DE SANIDAD Y RESTAURACIÓN (101-130)
  {
    reference: "Jeremías 30:17",
    text: "Mas yo haré venir sanidad para ti, y sanaré tus heridas, dice Jehová.",
    category: "Sanidad",
    day: 26
  },
  {
    reference: "Salmo 103:3",
    text: "El es quien perdona todas tus iniquidades, el que sana todas tus dolencias.",
    category: "Sanidad",
    day: 27
  },
  {
    reference: "Isaías 53:5",
    text: "Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados.",
    category: "Sanidad",
    day: 28
  },
  {
    reference: "Santiago 5:15",
    text: "Y la oración de fe salvará al enfermo, y el Señor lo levantará; y si hubiere cometido pecados, le serán perdonados.",
    category: "Sanidad",
    day: 29
  },
  {
    reference: "1 Pedro 2:24",
    text: "Quien llevó él mismo nuestros pecados en su cuerpo sobre el madero, para que nosotros, estando muertos a los pecados, vivamos a la justicia; y por cuya herida fuisteis sanados.",
    category: "Sanidad",
    day: 30
  },

  // PROMESAS DE PAZ Y CONSUELO (131-160)
  {
    reference: "Juan 14:27",
    text: "La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da. No se turbe vuestro corazón ni tenga miedo.",
    category: "Paz",
    day: 31
  },
  {
    reference: "Filipenses 4:7",
    text: "Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús.",
    category: "Paz",
    day: 32
  },
  {
    reference: "Isaías 26:3",
    text: "Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera; porque en ti ha confiado.",
    category: "Paz",
    day: 33
  },
  {
    reference: "Salmo 29:11",
    text: "Jehová dará fortaleza a su pueblo; Jehová bendecirá a su pueblo con paz.",
    category: "Paz",
    day: 34
  },
  {
    reference: "Romanos 5:1",
    text: "Justificados, pues, por la fe, tenemos paz para con Dios por medio de nuestro Señor Jesucristo.",
    category: "Paz",
    day: 35
  },

  // PROMESAS DE FORTALEZA Y AYUDA (161-190)
  {
    reference: "Isaías 40:31",
    text: "Pero los que confían en el Señor encontrarán nuevas fuerzas. Volarán alto como las águilas; correrán y no se cansarán; caminarán y no se fatigarán.",
    category: "Fortaleza",
    day: 36
  },
  {
    reference: "Filipenses 4:13",
    text: "Puedo hacer todas las cosas por medio de Cristo, quien me da las fuerzas.",
    category: "Fortaleza",
    day: 37
  },
  {
    reference: "2 Corintios 12:9",
    text: "Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo.",
    category: "Fortaleza",
    day: 38
  },
  {
    reference: "Salmo 28:7",
    text: "Jehová es mi fortaleza y mi escudo; en él confió mi corazón, y fui ayudado, por lo que se gozó mi corazón, y con mi cántico le alabaré.",
    category: "Fortaleza",
    day: 39
  },
  {
    reference: "Nehemías 8:10",
    text: "Luego les dijo: Id, comed grosuras, bebed vino dulce, y enviad porciones a los que no tienen nada preparado; porque día santo es a nuestro Señor; no os entristezcáis, porque el gozo de Jehová es vuestra fortaleza.",
    category: "Fortaleza",
    day: 40
  },

  // PROMESAS DE SABIDURÍA Y DIRECCIÓN (191-220)
  {
    reference: "Santiago 1:5",
    text: "Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.",
    category: "Sabiduría",
    day: 41
  },
  {
    reference: "Proverbios 3:5-6",
    text: "Confía en el Señor con todo tu corazón; no dependas de tu propia inteligencia. Busca su voluntad en todo lo que hagas, y él te mostrará cuál camino tomar.",
    category: "Sabiduría",
    day: 42
  },
  {
    reference: "Salmo 32:8",
    text: "Te haré entender, y te enseñaré el camino en que debes andar; sobre ti fijaré mis ojos.",
    category: "Sabiduría",
    day: 43
  },
  {
    reference: "Isaías 30:21",
    text: "Entonces tus oídos oirán a tus espaldas palabra que diga: Este es el camino, andad por él; y no echéis a la mano derecha, ni tampoco por la mano izquierda.",
    category: "Sabiduría",
    day: 44
  },
  {
    reference: "Juan 16:13",
    text: "Pero cuando venga el Espíritu de verdad, él os guiará a toda la verdad; porque no hablará por su propia cuenta, sino que hablará todo lo que oyere, y os hará saber las cosas que habrán de venir.",
    category: "Sabiduría",
    day: 45
  },

  // PROMESAS DE AMOR Y FIDELIDAD (221-250)
  {
    reference: "Jeremías 31:3",
    text: "Jehová se manifestó a mí hace ya mucho tiempo, diciendo: Con amor eterno te he amado; por tanto, te prolongué mi misericordia.",
    category: "Amor",
    day: 46
  },
  {
    reference: "Romanos 8:38-39",
    text: "Por lo cual estoy seguro de que ni la muerte, ni la vida, ni ángeles, ni principados, ni potestades, ni lo presente, ni lo por venir, ni lo alto, ni lo profundo, ni ninguna otra cosa creada nos podrá separar del amor de Dios, que es en Cristo Jesús Señor nuestro.",
    category: "Amor",
    day: 47
  },
  {
    reference: "1 Juan 4:16",
    text: "Y nosotros hemos conocido y creído el amor que Dios tiene para con nosotros. Dios es amor; y el que permanece en amor, permanece en Dios, y Dios en él.",
    category: "Amor",
    day: 48
  },
  {
    reference: "Salmo 136:1",
    text: "Alabad a Jehová, porque él es bueno; porque para siempre es su misericordia.",
    category: "Amor",
    day: 49
  },
  {
    reference: "Lamentaciones 3:22-23",
    text: "Por la misericordia de Jehová no hemos sido consumidos, porque nunca decayeron sus misericordias. Nuevas son cada mañana; grande es tu fidelidad.",
    category: "Amor",
    day: 50
  },

  // PROMESAS DE ESPERANZA Y FUTURO (251-280)
  {
    reference: "Jeremías 29:11",
    text: "Pues yo sé los planes que tengo para ustedes —dice el Señor—. Son planes para lo bueno y no para lo malo, para darles un futuro y una esperanza.",
    category: "Esperanza",
    day: 51
  },
  {
    reference: "Romanos 8:28",
    text: "Y sabemos que Dios hace que todas las cosas cooperen para el bien de quienes lo aman y son llamados según el propósito que él tiene para ellos.",
    category: "Esperanza",
    day: 52
  },
  {
    reference: "Proverbios 23:18",
    text: "Ciertamente hay un porvenir, y tu esperanza no será cortada.",
    category: "Esperanza",
    day: 53
  },
  {
    reference: "Salmo 37:4",
    text: "Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón.",
    category: "Esperanza",
    day: 54
  },
  {
    reference: "Mateo 11:28",
    text: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",
    category: "Esperanza",
    day: 55
  },

  // PROMESAS DE VICTORIA Y TRIUNFO (281-310)
  {
    reference: "1 Corintios 15:57",
    text: "Mas gracias sean dadas a Dios, que nos da la victoria por medio de nuestro Señor Jesucristo.",
    category: "Victoria",
    day: 56
  },
  {
    reference: "Romanos 8:37",
    text: "Antes, en todas estas cosas somos más que vencedores por medio de aquel que nos amó.",
    category: "Victoria",
    day: 57
  },
  {
    reference: "2 Corintios 2:14",
    text: "Mas a Dios gracias, el cual nos lleva siempre en triunfo en Cristo Jesús, y por medio de nosotros manifiesta en todo lugar el olor de su conocimiento.",
    category: "Victoria",
    day: 58
  },
  {
    reference: "1 Juan 5:4",
    text: "Porque todo lo que es nacido de Dios vence al mundo; y esta es la victoria que ha vencido al mundo, nuestra fe.",
    category: "Victoria",
    day: 59
  },
  {
    reference: "Apocalipsis 3:21",
    text: "Al que venciere, le daré que se siente conmigo en mi trono, así como yo he vencido, y me he sentado con mi Padre en su trono.",
    category: "Victoria",
    day: 60
  },

  // PROMESAS DE GOZO Y ALEGRÍA (311-340)
  {
    reference: "Salmo 16:11",
    text: "Me mostrarás la senda de la vida; en tu presencia hay plenitud de gozo; delicias a tu diestra para siempre.",
    category: "Gozo",
    day: 61
  },
  {
    reference: "Nehemías 8:10",
    text: "Luego les dijo: Id, comed grosuras, bebed vino dulce, y enviad porciones a los que no tienen nada preparado; porque día santo es a nuestro Señor; no os entristezcáis, porque el gozo de Jehová es vuestra fortaleza.",
    category: "Gozo",
    day: 62
  },
  {
    reference: "Filipenses 4:4",
    text: "Regocijaos en el Señor siempre. Otra vez digo: ¡Regocijaos!",
    category: "Gozo",
    day: 63
  },
  {
    reference: "Salmo 30:5",
    text: "Porque un momento será su ira, pero su favor dura toda la vida. Por la noche durará el lloro, y a la mañana vendrá la alegría.",
    category: "Gozo",
    day: 64
  },
  {
    reference: "Isaías 61:3",
    text: "A ordenar que a los afligidos de Sion se les dé gloria en lugar de ceniza, óleo de gozo en lugar de luto, manto de alegría en lugar del espíritu angustiado.",
    category: "Gozo",
    day: 65
  },

  // PROMESAS DE RESTAURACIÓN Y RENOVACIÓN (341-365)
  {
    reference: "2 Corintios 5:17",
    text: "De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas.",
    category: "Restauración",
    day: 66
  },
  {
    reference: "Salmo 51:10",
    text: "Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí.",
    category: "Restauración",
    day: 67
  },
  {
    reference: "Ezequiel 36:26",
    text: "Os daré corazón nuevo, y pondré espíritu nuevo dentro de vosotros; y quitaré de vuestra carne el corazón de piedra, y os daré un corazón de carne.",
    category: "Restauración",
    day: 68
  },
  {
    reference: "Isaías 43:19",
    text: "He aquí que yo hago cosa nueva; antes que salga a luz, yo la anunciaré; y antes que la oigáis, yo la mostraré.",
    category: "Restauración",
    day: 69
  },
  {
    reference: "Apocalipsis 21:5",
    text: "Y el que estaba sentado en el trono dijo: He aquí, yo hago nuevas todas las cosas. Y me dijo: Escribe; porque estas palabras son fieles y verdaderas.",
    category: "Restauración",
    day: 70
  }
];

// Función para obtener la promesa del día
export const getPromiseOfTheDay = (dayOfYear?: number): BiblePromise => {
  const today = dayOfYear || new Date().getDate() + (new Date().getMonth() * 30);
  const index = (today - 1) % BIBLE_PROMISES.length;
  return BIBLE_PROMISES[index];
};

// Función para obtener promesa aleatoria
export const getRandomPromise = (): BiblePromise => {
  const randomIndex = Math.floor(Math.random() * BIBLE_PROMISES.length);
  return BIBLE_PROMISES[randomIndex];
};

// Función para obtener promesas por categoría
export const getPromisesByCategory = (category: string): BiblePromise[] => {
  return BIBLE_PROMISES.filter(promise => promise.category === category);
};

// Categorías disponibles
export const PROMISE_CATEGORIES = [
  "Salvación",
  "Perdón", 
  "Protección",
  "Provisión",
  "Sanidad",
  "Paz",
  "Fortaleza",
  "Sabiduría",
  "Amor",
  "Esperanza",
  "Victoria",
  "Gozo",
  "Restauración"
];
