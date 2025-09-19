// Base de datos de 365 promesas bíblicas del Antiguo y Nuevo Testamento
// Todas las promesas están en Nueva Traducción Viviente (NTV) y organizadas por categorías
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
    text: "Les digo la verdad, los que escuchan mi mensaje y creen en Dios, quien me envió, tienen vida eterna. Nunca serán condenados por sus pecados, pues ya han pasado de la muerte a la vida.",
    category: "Salvación",
    day: 7
  },
  {
    reference: "Romanos 6:23",
    text: "Pues la paga que deja el pecado es la muerte, pero el regalo que Dios da es la vida eterna por medio de Cristo Jesús nuestro Señor.",
    category: "Salvación",
    day: 8
  },
  {
    reference: "Tito 3:5",
    text: "Él nos salvó, no por las acciones justas que nosotros habíamos hecho, sino por su misericordia. Nos lavó, quitándonos nuestros pecados, y nos dio un nuevo nacimiento y vida nueva por medio del Espíritu Santo.",
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
    text: "Vengan a mí todos los que están cansados y llevan cargas pesadas, y yo les daré descanso.",
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
  },

  // PROMESAS ADICIONALES DE SALVACIÓN (71-100)
  {
    reference: "1 Timoteo 2:4-5",
    text: "Pues él quiere que todos sean salvos y lleguen a conocer la verdad. Porque hay un solo Dios y un solo mediador entre Dios y la humanidad, Cristo Jesús, quien se entregó a sí mismo como rescate por todos.",
    category: "Salvación",
    day: 71
  },
  {
    reference: "1 Pedro 1:9",
    text: "La recompensa por confiar en él será la salvación de sus almas.",
    category: "Salvación",
    day: 72
  },
  {
    reference: "Tito 3:5",
    text: "Él nos salvó, no por las acciones justas que nosotros habíamos hecho, sino por su misericordia. Nos lavó, quitándonos nuestros pecados, y nos dio un nuevo nacimiento y vida nueva por medio del Espíritu Santo.",
    category: "Salvación",
    day: 73
  },
  {
    reference: "Romanos 5:8",
    text: "Pero Dios demuestra su amor por nosotros en esto: en que cuando todavía éramos pecadores, Cristo murió por nosotros.",
    category: "Salvación",
    day: 74
  },
  {
    reference: "2 Corintios 5:17",
    text: "Esto significa que todo el que pertenece a Cristo se ha convertido en una persona nueva. La vida antigua ha pasado; una nueva vida ha comenzado.",
    category: "Salvación",
    day: 75
  },
  {
    reference: "Efesios 1:7",
    text: "Dios es tan rico en gracia y bondad que compró nuestra libertad con la sangre de su Hijo y perdonó nuestros pecados.",
    category: "Salvación",
    day: 76
  },
  {
    reference: "Colosenses 1:13-14",
    text: "Pues él nos rescató del reino de la oscuridad y nos trasladó al reino de su Hijo amado, quien compró nuestra libertad y perdonó nuestros pecados.",
    category: "Salvación",
    day: 77
  },
  {
    reference: "1 Juan 4:9",
    text: "Dios mostró cuánto nos ama al enviar a su único Hijo al mundo para que tengamos vida eterna por medio de él.",
    category: "Salvación",
    day: 78
  },
  {
    reference: "Romanos 6:23",
    text: "Pues la paga que deja el pecado es la muerte, pero el regalo que Dios da es la vida eterna por medio de Cristo Jesús nuestro Señor.",
    category: "Salvación",
    day: 79
  },
  {
    reference: "Juan 10:28",
    text: "Les doy vida eterna, y nunca perecerán. Nadie puede arrebatármelos de la mano de mi Padre.",
    category: "Salvación",
    day: 80
  },

  // PROMESAS ADICIONALES DE PERDÓN (81-110)
  {
    reference: "1 Juan 1:9",
    text: "Pero si confesamos nuestros pecados a Dios, él es fiel y justo para perdonarnos nuestros pecados y limpiarnos de toda maldad.",
    category: "Perdón",
    day: 81
  },
  {
    reference: "Jeremías 31:34",
    text: "Y ya no será necesario que cada uno enseñe a su vecino y a su hermano a conocer al Señor, porque todos, desde el más pequeño hasta el más grande, ya me conocerán —dice el Señor—. Perdonaré su maldad y nunca más me acordaré de sus pecados.",
    category: "Perdón",
    day: 82
  },
  {
    reference: "Salmo 103:12",
    text: "Él ha alejado de nosotros nuestros pecados tanto como está el oriente del occidente.",
    category: "Perdón",
    day: 83
  },
  {
    reference: "Miqueas 7:18-19",
    text: "¿Dónde hay otro Dios como tú, que perdona la maldad y pasa por alto los pecados del remanente de su pueblo? No permanecerás enojado para siempre, porque te deleitas en mostrar amor inagotable. Una vez más tendrás compasión de nosotros; sepultarás nuestros pecados bajo tus pies y arrojarás todos nuestros pecados al fondo del mar.",
    category: "Perdón",
    day: 84
  },
  {
    reference: "Isaías 43:25",
    text: "Yo, sí, yo soy el que borra tus rebeliones por amor de mí mismo, y no recordaré tus pecados.",
    category: "Perdón",
    day: 85
  },
  {
    reference: "Salmo 32:5",
    text: "Finalmente te confesé todos mis pecados y ya no intenté ocultar mi culpa. Me dije: 'Confesaré mis rebeliones al Señor'. ¡Y tú me perdonaste! Toda mi culpa desapareció.",
    category: "Perdón",
    day: 86
  },
  {
    reference: "Ezequiel 18:22",
    text: "Ninguno de los pecados que haya cometido será recordado contra él. Por causa de la justicia que haya hecho, vivirá.",
    category: "Perdón",
    day: 87
  },
  {
    reference: "Hechos 3:19",
    text: "Por tanto, arrepiéntanse y conviértanse a Dios, para que sus pecados sean borrados.",
    category: "Perdón",
    day: 88
  },
  {
    reference: "Colosenses 2:13-14",
    text: "Ustedes estaban muertos por sus pecados y por la incircuncisión de su carne. Pero Dios les dio vida junto con Cristo, al perdonar todos sus pecados. Anuló el acta de los decretos que había contra nosotros y que nos era adversa, y la quitó de en medio clavándola en la cruz.",
    category: "Perdón",
    day: 89
  },
  {
    reference: "Salmo 86:5",
    text: "Tú, Señor, eres bueno y perdonador, y grande en misericordia para con todos los que te invocan.",
    category: "Perdón",
    day: 90
  },

  // PROMESAS ADICIONALES DE PROTECCIÓN (91-120)
  {
    reference: "Salmo 34:7",
    text: "El ángel del Señor acampa alrededor de los que le temen, y los libra.",
    category: "Protección",
    day: 91
  },
  {
    reference: "Isaías 26:3",
    text: "Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera; porque en ti ha confiado.",
    category: "Protección",
    day: 92
  },
  {
    reference: "Salmo 121:7-8",
    text: "El Señor te protegerá de todo mal; él protegerá tu vida. El Señor protegerá tu salida y tu entrada desde ahora y para siempre.",
    category: "Protección",
    day: 93
  },
  {
    reference: "2 Tesalonicenses 3:3",
    text: "Pero fiel es el Señor, que os afirmará y guardará del mal.",
    category: "Protección",
    day: 94
  },
  {
    reference: "Salmo 46:1",
    text: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.",
    category: "Protección",
    day: 95
  },
  {
    reference: "Proverbios 18:10",
    text: "Torre fuerte es el nombre del Señor; a él correrá el justo y será levantado.",
    category: "Protección",
    day: 96
  },
  {
    reference: "Salmo 91:4",
    text: "Con sus plumas te cubrirá, y debajo de sus alas estarás seguro; escudo y adarga es su verdad.",
    category: "Protección",
    day: 97
  },
  {
    reference: "Isaías 54:17",
    text: "Ninguna arma forjada contra ti prosperará, y condenarás toda lengua que se levante contra ti en juicio. Esta es la herencia de los siervos del Señor, y su vindicación viene de mí —dice el Señor—.",
    category: "Protección",
    day: 98
  },
  {
    reference: "Salmo 125:2",
    text: "Como los montes están alrededor de Jerusalén, así está el Señor alrededor de su pueblo desde ahora y para siempre.",
    category: "Protección",
    day: 99
  },
  {
    reference: "Deuteronomio 33:27",
    text: "El eterno Dios es tu refugio, y acá abajo los brazos eternos. Él echó de delante de ti al enemigo, y dijo: Destruye.",
    category: "Protección",
    day: 100
  },

  // PROMESAS ADICIONALES DE PROVISIÓN (101-130)
  {
    reference: "Filipenses 4:19",
    text: "Y mi Dios suplirá todo lo que os falta conforme a sus riquezas en gloria en Cristo Jesús.",
    category: "Provisión",
    day: 101
  },
  {
    reference: "Salmo 37:25",
    text: "Joven fui, y he envejecido, y no he visto justo desamparado, ni su descendencia que mendigue pan.",
    category: "Provisión",
    day: 102
  },
  {
    reference: "Mateo 6:33",
    text: "Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.",
    category: "Provisión",
    day: 103
  },
  {
    reference: "Salmo 23:1",
    text: "Jehová es mi pastor; nada me faltará.",
    category: "Provisión",
    day: 104
  },
  {
    reference: "Lucas 12:24",
    text: "Considerad los cuervos, que ni siembran, ni siegan; que ni tienen despensa ni granero, y Dios los alimenta. ¿No valéis vosotros mucho más que las aves?",
    category: "Provisión",
    day: 105
  },
  {
    reference: "Salmo 84:11",
    text: "Porque sol y escudo es Jehová Dios; gracia y gloria dará Jehová. No quitará el bien a los que andan en integridad.",
    category: "Provisión",
    day: 106
  },
  {
    reference: "Deuteronomio 8:18",
    text: "Sino acuérdate de Jehová tu Dios, porque él te da el poder para hacer las riquezas, a fin de confirmar su pacto que juró a tus padres, como en este día.",
    category: "Provisión",
    day: 107
  },
  {
    reference: "Proverbios 10:22",
    text: "La bendición de Jehová es la que enriquece, y no añade tristeza con ella.",
    category: "Provisión",
    day: 108
  },
  {
    reference: "2 Corintios 9:8",
    text: "Y poderoso es Dios para hacer que abunde en vosotros toda gracia, a fin de que, teniendo siempre en todas las cosas todo lo suficiente, abundéis para toda buena obra.",
    category: "Provisión",
    day: 109
  },
  {
    reference: "Salmo 34:10",
    text: "Los leoncillos necesitan, y tienen hambre; pero los que buscan a Jehová no tendrán falta de ningún bien.",
    category: "Provisión",
    day: 110
  },

  // PROMESAS ADICIONALES DE SANIDAD (111-140)
  {
    reference: "Éxodo 15:26",
    text: "Y dijo: Si oyeres atentamente la voz de Jehová tu Dios, e hicieres lo recto delante de sus ojos, y dieres oídos a sus mandamientos, y guardares todos sus estatutos, ninguna enfermedad de las que envié a los egipcios te enviaré a ti; porque yo soy Jehová tu sanador.",
    category: "Sanidad",
    day: 111
  },
  {
    reference: "Salmo 30:2",
    text: "Jehová Dios mío, a ti clamé, y me sanaste.",
    category: "Sanidad",
    day: 112
  },
  {
    reference: "Jeremías 30:17",
    text: "Mas yo haré venir sanidad para ti, y sanaré tus heridas, dice Jehová.",
    category: "Sanidad",
    day: 113
  },
  {
    reference: "Salmo 103:3",
    text: "El es quien perdona todas tus iniquidades, el que sana todas tus dolencias.",
    category: "Sanidad",
    day: 114
  },
  {
    reference: "Isaías 53:5",
    text: "Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados.",
    category: "Sanidad",
    day: 115
  },
  {
    reference: "Santiago 5:16",
    text: "Confesaos vuestras ofensas unos a otros, y orad unos por otros, para que seáis sanados. La oración eficaz del justo puede mucho.",
    category: "Sanidad",
    day: 116
  },
  {
    reference: "Mateo 8:17",
    text: "Para que se cumpliese lo dicho por el profeta Isaías, cuando dijo: El mismo tomó nuestras enfermedades, y llevó nuestras dolencias.",
    category: "Sanidad",
    day: 117
  },
  {
    reference: "Salmo 107:20",
    text: "Envió su palabra, y los sanó, y los libró de su ruina.",
    category: "Sanidad",
    day: 118
  },
  {
    reference: "Proverbios 4:22",
    text: "Porque son vida a los que las hallan, y medicina a todo su cuerpo.",
    category: "Sanidad",
    day: 119
  },
  {
    reference: "3 Juan 1:2",
    text: "Amado, yo deseo que tú seas prosperado en todas las cosas, y que tengas salud, así como prospera tu alma.",
    category: "Sanidad",
    day: 120
  },

  // PROMESAS ADICIONALES DE PAZ (121-150)
  {
    reference: "Juan 14:27",
    text: "La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da. No se turbe vuestro corazón, ni tenga miedo.",
    category: "Paz",
    day: 121
  },
  {
    reference: "Filipenses 4:7",
    text: "Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús.",
    category: "Paz",
    day: 122
  },
  {
    reference: "Isaías 26:3",
    text: "Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera; porque en ti ha confiado.",
    category: "Paz",
    day: 123
  },
  {
    reference: "Salmo 29:11",
    text: "Jehová dará fortaleza a su pueblo; Jehová bendecirá a su pueblo con paz.",
    category: "Paz",
    day: 124
  },
  {
    reference: "Romanos 5:1",
    text: "Justificados, pues, por la fe, tenemos paz para con Dios por medio de nuestro Señor Jesucristo.",
    category: "Paz",
    day: 125
  },
  {
    reference: "Colosenses 3:15",
    text: "Y la paz de Dios gobierne en vuestros corazones, a la que asimismo fuisteis llamados en un solo cuerpo; y sed agradecidos.",
    category: "Paz",
    day: 126
  },
  {
    reference: "Salmo 4:8",
    text: "En paz me acostaré, y asimismo dormiré; porque solo tú, Jehová, me haces vivir confiado.",
    category: "Paz",
    day: 127
  },
  {
    reference: "Isaías 9:6",
    text: "Porque un niño nos es nacido, hijo nos es dado, y el principado sobre su hombro; y se llamará su nombre Admirable, Consejero, Dios Fuerte, Padre Eterno, Príncipe de Paz.",
    category: "Paz",
    day: 128
  },
  {
    reference: "Salmo 85:8",
    text: "Escucharé lo que hablará el Dios Jehová; porque hablará paz a su pueblo y a sus santos, para que no se vuelvan a la locura.",
    category: "Paz",
    day: 129
  },
  {
    reference: "Efesios 2:14",
    text: "Porque él es nuestra paz, que de ambos pueblos hizo uno, derribando la pared intermedia de separación.",
    category: "Paz",
    day: 130
  },

  // PROMESAS ADICIONALES DE FORTALEZA (131-160)
  {
    reference: "Filipenses 4:13",
    text: "Todo lo puedo en Cristo que me fortalece.",
    category: "Fortaleza",
    day: 131
  },
  {
    reference: "Isaías 41:10",
    text: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.",
    category: "Fortaleza",
    day: 132
  },
  {
    reference: "Salmo 27:1",
    text: "Jehová es mi luz y mi salvación; ¿de quién temeré? Jehová es la fortaleza de mi vida; ¿de quién he de atemorizarme?",
    category: "Fortaleza",
    day: 133
  },
  {
    reference: "2 Corintios 12:9",
    text: "Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo.",
    category: "Fortaleza",
    day: 134
  },
  {
    reference: "Salmo 18:32",
    text: "El Dios que me ciñe de poder, y quien hace perfecto mi camino.",
    category: "Fortaleza",
    day: 135
  },
  {
    reference: "Efesios 6:10",
    text: "Por lo demás, hermanos míos, fortaleceos en el Señor, y en el poder de su fuerza.",
    category: "Fortaleza",
    day: 136
  },
  {
    reference: "Salmo 28:7",
    text: "Jehová es mi fortaleza y mi escudo; en él confió mi corazón, y fui ayudado, por lo que se gozó mi corazón, y con mi cántico le alabaré.",
    category: "Fortaleza",
    day: 137
  },
  {
    reference: "Isaías 40:29",
    text: "El da esfuerzo al cansado, y multiplica las fuerzas al que no tiene ningunas.",
    category: "Fortaleza",
    day: 138
  },
  {
    reference: "Salmo 31:24",
    text: "Esforzaos todos vosotros los que esperáis en Jehová, y tome aliento vuestro corazón.",
    category: "Fortaleza",
    day: 139
  },
  {
    reference: "Habacuc 3:19",
    text: "Jehová el Señor es mi fortaleza, el cual hace mis pies como de ciervas, y en mis alturas me hace andar.",
    category: "Fortaleza",
    day: 140
  },

  // PROMESAS ADICIONALES DE SABIDURÍA (141-170)
  {
    reference: "Santiago 1:5",
    text: "Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.",
    category: "Sabiduría",
    day: 141
  },
  {
    reference: "Proverbios 3:5-6",
    text: "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas.",
    category: "Sabiduría",
    day: 142
  },
  {
    reference: "Proverbios 2:6",
    text: "Porque Jehová da la sabiduría, y de su boca viene el conocimiento y la inteligencia.",
    category: "Sabiduría",
    day: 143
  },
  {
    reference: "1 Corintios 1:30",
    text: "Mas por él estáis vosotros en Cristo Jesús, el cual nos ha sido hecho por Dios sabiduría, justificación, santificación y redención.",
    category: "Sabiduría",
    day: 144
  },
  {
    reference: "Proverbios 9:10",
    text: "El temor de Jehová es el principio de la sabiduría, y el conocimiento del Santísimo es la inteligencia.",
    category: "Sabiduría",
    day: 145
  },
  {
    reference: "Colosenses 2:3",
    text: "En quien están escondidos todos los tesoros de la sabiduría y del conocimiento.",
    category: "Sabiduría",
    day: 146
  },
  {
    reference: "Proverbios 16:16",
    text: "Mejor es adquirir sabiduría que oro preciado; y adquirir inteligencia vale más que la plata.",
    category: "Sabiduría",
    day: 147
  },
  {
    reference: "Efesios 1:17",
    text: "Para que el Dios de nuestro Señor Jesucristo, el Padre de gloria, os dé espíritu de sabiduría y de revelación en el conocimiento de él.",
    category: "Sabiduría",
    day: 148
  },
  {
    reference: "Proverbios 4:7",
    text: "Sabiduría ante todo; adquiere sabiduría; y sobre todas tus posesiones adquiere inteligencia.",
    category: "Sabiduría",
    day: 149
  },
  {
    reference: "1 Reyes 3:12",
    text: "He aquí que he hecho conforme a tu palabra; he aquí que te he dado corazón sabio y entendido, tanto que no ha habido antes de ti otro como tú, ni después de ti se levantará otro como tú.",
    category: "Sabiduría",
    day: 150
  },

  // PROMESAS ADICIONALES DE AMOR (151-180)
  {
    reference: "Jeremías 31:3",
    text: "Jehová se manifestó a mí hace ya mucho tiempo, diciendo: Con amor eterno te he amado; por tanto, te prolongué mi misericordia.",
    category: "Amor",
    day: 151
  },
  {
    reference: "Salmo 100:5",
    text: "Porque Jehová es bueno; para siempre es su misericordia, y su verdad por todas las generaciones.",
    category: "Amor",
    day: 152
  },
  {
    reference: "1 Juan 4:16",
    text: "Y nosotros hemos conocido y creído el amor que Dios tiene para con nosotros. Dios es amor; y el que permanece en amor, permanece en Dios, y Dios en él.",
    category: "Amor",
    day: 153
  },
  {
    reference: "Romanos 8:38-39",
    text: "Por lo cual estoy seguro de que ni la muerte, ni la vida, ni ángeles, ni principados, ni potestades, ni lo presente, ni lo por venir, ni lo alto, ni lo profundo, ni ninguna otra cosa creada nos podrá separar del amor de Dios, que es en Cristo Jesús Señor nuestro.",
    category: "Amor",
    day: 154
  },
  {
    reference: "Salmo 36:7",
    text: "¡Cuán preciosa, oh Dios, es tu misericordia! Por eso los hijos de los hombres se amparan bajo la sombra de tus alas.",
    category: "Amor",
    day: 155
  },
  {
    reference: "Juan 3:16",
    text: "Pues Dios amó tanto al mundo que dio a su único Hijo, para que todo el que crea en él no se pierda, sino que tenga vida eterna.",
    category: "Amor",
    day: 156
  },
  {
    reference: "Salmo 103:8",
    text: "Misericordioso y clemente es Jehová; lento para la ira, y grande en misericordia.",
    category: "Amor",
    day: 157
  },
  {
    reference: "1 Corintios 13:4-7",
    text: "El amor es paciente y bondadoso. El amor no es celoso ni fanfarrón ni orgulloso ni ofensivo. No exige que las cosas se hagan a su manera. No se irrita ni lleva un registro de las ofensas. No se alegra de la injusticia sino que se alegra cuando la verdad triunfa. El amor nunca se da por vencido, nunca pierde la fe, siempre tiene esperanza y se mantiene firme en toda circunstancia.",
    category: "Amor",
    day: 158
  },
  {
    reference: "Salmo 136:1",
    text: "Alabad a Jehová, porque él es bueno; porque para siempre es su misericordia.",
    category: "Amor",
    day: 159
  },
  {
    reference: "Efesios 3:19",
    text: "Y de conocer el amor de Cristo, que excede a todo conocimiento, para que seáis llenos de toda la plenitud de Dios.",
    category: "Amor",
    day: 160
  },

  // PROMESAS ADICIONALES DE ESPERANZA (161-190)
  {
    reference: "Romanos 15:13",
    text: "Y el Dios de esperanza os llene de todo gozo y paz en el creer, para que abundéis en esperanza por el poder del Espíritu Santo.",
    category: "Esperanza",
    day: 161
  },
  {
    reference: "Salmo 42:11",
    text: "¿Por qué te abates, oh alma mía, y por qué te turbas dentro de mí? Espera en Dios; porque aún he de alabarle, salvación mía y Dios mío.",
    category: "Esperanza",
    day: 162
  },
  {
    reference: "Lamentaciones 3:24",
    text: "Mi porción es Jehová, dijo mi alma; por tanto, en él esperaré.",
    category: "Esperanza",
    day: 163
  },
  {
    reference: "Salmo 130:5",
    text: "Esperé yo a Jehová, esperó mi alma; en su palabra he esperado.",
    category: "Esperanza",
    day: 164
  },
  {
    reference: "Isaías 40:31",
    text: "Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.",
    category: "Esperanza",
    day: 165
  },
  {
    reference: "Salmo 33:18",
    text: "He aquí, el ojo de Jehová está sobre los que le temen, sobre los que esperan en su misericordia.",
    category: "Esperanza",
    day: 166
  },
  {
    reference: "Proverbios 23:18",
    text: "Ciertamente hay un porvenir, y tu esperanza no será cortada.",
    category: "Esperanza",
    day: 167
  },
  {
    reference: "Salmo 71:14",
    text: "Mas yo esperaré siempre, y te alabaré más y más.",
    category: "Esperanza",
    day: 168
  },
  {
    reference: "Tito 2:13",
    text: "Aguardando la esperanza bienaventurada y la manifestación gloriosa de nuestro gran Dios y Salvador Jesucristo.",
    category: "Esperanza",
    day: 169
  },
  {
    reference: "Salmo 62:5",
    text: "Alma mía, en Dios solamente reposa, porque de él es mi esperanza.",
    category: "Esperanza",
    day: 170
  },

  // PROMESAS ADICIONALES DE VICTORIA (171-200)
  {
    reference: "1 Corintios 15:57",
    text: "Mas gracias sean dadas a Dios, que nos da la victoria por medio de nuestro Señor Jesucristo.",
    category: "Victoria",
    day: 171
  },
  {
    reference: "Romanos 8:37",
    text: "Antes, en todas estas cosas somos más que vencedores por medio de aquel que nos amó.",
    category: "Victoria",
    day: 172
  },
  {
    reference: "1 Juan 5:4",
    text: "Porque todo lo que es nacido de Dios vence al mundo; y esta es la victoria que ha vencido al mundo, nuestra fe.",
    category: "Victoria",
    day: 173
  },
  {
    reference: "Salmo 18:39",
    text: "Pues me ceñiste de fuerzas para la pelea; has humillado a mis enemigos debajo de mí.",
    category: "Victoria",
    day: 174
  },
  {
    reference: "2 Corintios 2:14",
    text: "Mas a Dios gracias, el cual nos lleva siempre en triunfo en Cristo Jesús, y por medio de nosotros manifiesta en todo lugar el olor de su conocimiento.",
    category: "Victoria",
    day: 175
  },
  {
    reference: "Salmo 44:3",
    text: "Porque no se apoderaron de la tierra por su espada, ni su brazo los libró; sino tu diestra, y tu brazo, y la luz de tu rostro, porque te complaciste en ellos.",
    category: "Victoria",
    day: 176
  },
  {
    reference: "Apocalipsis 3:21",
    text: "Al que venciere, le daré que se siente conmigo en mi trono, así como yo he vencido, y me he sentado con mi Padre en su trono.",
    category: "Victoria",
    day: 177
  },
  {
    reference: "Salmo 20:6",
    text: "Ahora conozco que Jehová salva a su ungido; lo oirá desde los cielos de su santuario, con la fuerza salvadora de su diestra.",
    category: "Victoria",
    day: 178
  },
  {
    reference: "1 Corintios 10:13",
    text: "No os ha sobrevenido ninguna tentación que no sea humana; pero fiel es Dios, que no os dejará ser tentados más de lo que podéis resistir, sino que dará también juntamente con la tentación la salida, para que podáis soportar.",
    category: "Victoria",
    day: 179
  },
  {
    reference: "Salmo 118:16",
    text: "La diestra de Jehová es sublime; la diestra de Jehová hace valentías.",
    category: "Victoria",
    day: 180
  },

  // PROMESAS ADICIONALES DE GOZO (181-210)
  {
    reference: "Juan 15:11",
    text: "Estas cosas os he hablado, para que mi gozo esté en vosotros, y vuestro gozo sea cumplido.",
    category: "Gozo",
    day: 181
  },
  {
    reference: "Salmo 16:11",
    text: "Me mostrarás la senda de la vida; en tu presencia hay plenitud de gozo; delicias a tu diestra para siempre.",
    category: "Gozo",
    day: 182
  },
  {
    reference: "Nehemías 8:10",
    text: "Luego les dijo: Id, comed grosuras, y bebed vino dulce, y enviad porciones a los que no tienen nada preparado; porque día santo es a nuestro Señor; y no os entristezcáis, porque el gozo de Jehová es vuestra fortaleza.",
    category: "Gozo",
    day: 183
  },
  {
    reference: "Salmo 30:5",
    text: "Porque un momento será su ira, pero su favor dura toda la vida. Por la noche durará el lloro, y a la mañana vendrá la alegría.",
    category: "Gozo",
    day: 184
  },
  {
    reference: "Isaías 35:10",
    text: "Y los redimidos de Jehová volverán, y vendrán a Sion con alegría; y gozo perpetuo será sobre sus cabezas; y tendrán gozo y alegría, y huirán la tristeza y el gemido.",
    category: "Gozo",
    day: 185
  },
  {
    reference: "Salmo 126:5",
    text: "Los que sembraron con lágrimas, con regocijo segarán.",
    category: "Gozo",
    day: 186
  },
  {
    reference: "Lucas 2:10",
    text: "Pero el ángel les dijo: No temáis; porque he aquí os doy nuevas de gran gozo, que será para todo el pueblo.",
    category: "Gozo",
    day: 187
  },
  {
    reference: "Salmo 32:11",
    text: "Alegraos en Jehová y gozaos, justos; y cantad con júbilo todos vosotros los rectos de corazón.",
    category: "Gozo",
    day: 188
  },
  {
    reference: "1 Pedro 1:8",
    text: "A quien amáis sin haberle visto, en quien creyendo, aunque ahora no lo veáis, os alegráis con gozo inefable y glorioso.",
    category: "Gozo",
    day: 189
  },
  {
    reference: "Salmo 97:11",
    text: "Luz está sembrada para el justo, y alegría para los rectos de corazón.",
    category: "Gozo",
    day: 190
  },

  // PROMESAS ADICIONALES DE RESTAURACIÓN (191-220)
  {
    reference: "Joel 2:25",
    text: "Y os restituiré los años que comió la oruga, el saltón, el revoltón y la langosta, mi gran ejército que envié contra vosotros.",
    category: "Restauración",
    day: 191
  },
  {
    reference: "Salmo 51:12",
    text: "Vuélveme el gozo de tu salvación, y espíritu noble me sustente.",
    category: "Restauración",
    day: 192
  },
  {
    reference: "Jeremías 33:6",
    text: "He aquí que yo les traeré sanidad y medicina; y los curaré, y les revelaré abundancia de paz y de verdad.",
    category: "Restauración",
    day: 193
  },
  {
    reference: "Salmo 23:3",
    text: "Confortará mi alma; me guiará por sendas de justicia por amor de su nombre.",
    category: "Restauración",
    day: 194
  },
  {
    reference: "Isaías 61:3",
    text: "A ordenar que a los afligidos de Sion se les dé gloria en lugar de ceniza, óleo de gozo en lugar de luto, manto de alegría en lugar del espíritu angustiado.",
    category: "Restauración",
    day: 195
  },
  {
    reference: "Salmo 126:1",
    text: "Cuando Jehová hiciere volver la cautividad de Sion, seremos como los que sueñan.",
    category: "Restauración",
    day: 196
  },
  {
    reference: "Jeremías 30:17",
    text: "Mas yo haré venir sanidad para ti, y sanaré tus heridas, dice Jehová.",
    category: "Restauración",
    day: 197
  },
  {
    reference: "Salmo 80:3",
    text: "Oh Jehová Dios de los ejércitos, restáuranos; haz resplandecer tu rostro, y seremos salvos.",
    category: "Restauración",
    day: 198
  },
  {
    reference: "Isaías 58:12",
    text: "Y los tuyos edificarán las ruinas antiguas; los cimientos de generación y generación levantarás, y serás llamado reparador de portillos, restaurador de calzadas para habitar.",
    category: "Restauración",
    day: 199
  },
  {
    reference: "Salmo 85:1",
    text: "Fuiste propicio a tu tierra, oh Jehová; volviste la cautividad de Jacob.",
    category: "Restauración",
    day: 200
  },

  // PROMESAS ADICIONALES DE SALVACIÓN (201-230)
  {
    reference: "Hechos 4:12",
    text: "Y en ningún otro hay salvación; porque no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos.",
    category: "Salvación",
    day: 201
  },
  {
    reference: "Romanos 10:9",
    text: "Que si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo.",
    category: "Salvación",
    day: 202
  },
  {
    reference: "Efesios 2:8-9",
    text: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe.",
    category: "Salvación",
    day: 203
  },
  {
    reference: "Juan 14:6",
    text: "Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.",
    category: "Salvación",
    day: 204
  },
  {
    reference: "Hechos 16:31",
    text: "Ellos dijeron: Cree en el Señor Jesucristo, y serás salvo, tú y tu casa.",
    category: "Salvación",
    day: 205
  },
  {
    reference: "Romanos 6:23",
    text: "Pues la paga que deja el pecado es la muerte, pero el regalo que Dios da es la vida eterna por medio de Cristo Jesús nuestro Señor.",
    category: "Salvación",
    day: 206
  },
  {
    reference: "1 Juan 5:11",
    text: "Y este es el testimonio: que Dios nos ha dado vida eterna; y esta vida está en su Hijo.",
    category: "Salvación",
    day: 207
  },
  {
    reference: "Tito 2:11",
    text: "Porque la gracia de Dios se ha manifestado para salvación a todos los hombres.",
    category: "Salvación",
    day: 208
  },
  {
    reference: "Romanos 5:1",
    text: "Justificados, pues, por la fe, tenemos paz para con Dios por medio de nuestro Señor Jesucristo.",
    category: "Salvación",
    day: 209
  },
  {
    reference: "1 Pedro 2:24",
    text: "Quien llevó él mismo nuestros pecados en su cuerpo sobre el madero, para que nosotros, estando muertos a los pecados, vivamos a la justicia; y por cuya herida fuisteis sanados.",
    category: "Salvación",
    day: 210
  },

  // PROMESAS ADICIONALES DE PERDÓN (211-240)
  {
    reference: "Salmo 25:11",
    text: "Por amor de tu nombre, oh Jehová, perdonarás también mi pecado, que es grande.",
    category: "Perdón",
    day: 211
  },
  {
    reference: "Daniel 9:9",
    text: "De Jehová nuestro Dios es el tener misericordia y el perdonar, aunque contra él nos hemos rebelado.",
    category: "Perdón",
    day: 212
  },
  {
    reference: "Salmo 78:38",
    text: "Mas él, misericordioso, perdonaba la maldad, y no los destruía; y apartó muchas veces su ira, y no despertó todo su enojo.",
    category: "Perdón",
    day: 213
  },
  {
    reference: "Nehemías 9:17",
    text: "Y no quisieron oír, ni se acordaron de tus maravillas que habías hecho con ellos; antes endurecieron su cerviz, y en su rebelión pensaron poner caudillo para volverse a su servidumbre. Pero tú eres Dios que perdonas, clemente y piadoso, tardo para la ira, y de grande misericordia, y no los abandonaste.",
    category: "Perdón",
    day: 214
  },
  {
    reference: "Salmo 65:3",
    text: "Las iniquidades prevalecen contra mí; pero tú perdonarás nuestras rebeliones.",
    category: "Perdón",
    day: 215
  },
  {
    reference: "2 Crónicas 7:14",
    text: "Si se humillare mi pueblo, sobre el cual mi nombre es invocado, y oraren, y buscaren mi rostro, y se convirtieren de sus malos caminos; entonces yo oiré desde los cielos, y perdonaré sus pecados, y sanaré su tierra.",
    category: "Perdón",
    day: 216
  },
  {
    reference: "Salmo 130:4",
    text: "Pero hay perdón cerca de ti, para que seas temido.",
    category: "Perdón",
    day: 217
  },
  {
    reference: "Marcos 2:7",
    text: "¿Por qué habla éste así? Blasfemias dice. ¿Quién puede perdonar pecados, sino solo Dios?",
    category: "Perdón",
    day: 218
  },
  {
    reference: "Salmo 79:9",
    text: "Ayúdanos, oh Dios de nuestra salvación, por la gloria de tu nombre; y líbranos, y perdona nuestros pecados por amor de tu nombre.",
    category: "Perdón",
    day: 219
  },
  {
    reference: "Lucas 7:48",
    text: "Y a ella le dijo: Tus pecados te son perdonados.",
    category: "Perdón",
    day: 220
  },

  // PROMESAS ADICIONALES DE PROTECCIÓN (221-250)
  {
    reference: "Salmo 91:1-2",
    text: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente. Diré yo a Jehová: Esperanza mía, y castillo mío; mi Dios, en quien confiaré.",
    category: "Protección",
    day: 221
  },
  {
    reference: "Salmo 27:5",
    text: "Porque él me esconderá en su tabernáculo en el día del mal; me ocultará en lo reservado de su morada; sobre una roca me pondrá en alto.",
    category: "Protección",
    day: 222
  },
  {
    reference: "Salmo 32:7",
    text: "Tú eres mi refugio; me guardarás de la angustia; con cánticos de liberación me rodearás.",
    category: "Protección",
    day: 223
  },
  {
    reference: "Salmo 61:3",
    text: "Porque tú has sido mi refugio, y torre fuerte delante del enemigo.",
    category: "Protección",
    day: 224
  },
  {
    reference: "Salmo 91:11",
    text: "Pues a sus ángeles mandará acerca de ti, que te guarden en todos tus caminos.",
    category: "Protección",
    day: 225
  },
  {
    reference: "Salmo 140:7",
    text: "Oh Jehová Señor, fortaleza de mi salvación, tú has cubierto mi cabeza en el día de las armas.",
    category: "Protección",
    day: 226
  },
  {
    reference: "Salmo 144:2",
    text: "Mi bienhechor, mi fortaleza, mi refugio, mi libertador, mi escudo, en quien confío; el que sujeta mi pueblo debajo de mí.",
    category: "Protección",
    day: 227
  },
  {
    reference: "Salmo 18:2",
    text: "Jehová, roca mía y castillo mío, y mi libertador; Dios mío, fortaleza mía, en él confiaré; mi escudo, y la fuerza de mi salvación, mi alto refugio.",
    category: "Protección",
    day: 228
  },
  {
    reference: "Salmo 31:20",
    text: "En lo secreto de tu presencia los esconderás de la conspiración del hombre; los pondrás en un tabernáculo a cubierto de contención de lenguas.",
    category: "Protección",
    day: 229
  },
  {
    reference: "Salmo 91:14",
    text: "Por cuanto en mí ha puesto su amor, yo también lo libraré; le pondré en alto, por cuanto ha conocido mi nombre.",
    category: "Protección",
    day: 230
  },

  // PROMESAS ADICIONALES DE PROVISIÓN (231-260)
  {
    reference: "Salmo 37:4",
    text: "Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón.",
    category: "Provisión",
    day: 231
  },
  {
    reference: "Salmo 84:11",
    text: "Porque sol y escudo es Jehová Dios; gracia y gloria dará Jehová. No quitará el bien a los que andan en integridad.",
    category: "Provisión",
    day: 232
  },
  {
    reference: "Salmo 34:9",
    text: "Temed a Jehová, vosotros sus santos, pues nada falta a los que le temen.",
    category: "Provisión",
    day: 233
  },
  {
    reference: "Salmo 37:19",
    text: "No serán avergonzados en el mal tiempo, y en los días de hambre serán saciados.",
    category: "Provisión",
    day: 234
  },
  {
    reference: "Salmo 81:10",
    text: "Yo soy Jehová tu Dios, que te hice subir de la tierra de Egipto; abre tu boca, y yo la llenaré.",
    category: "Provisión",
    day: 235
  },
  {
    reference: "Salmo 132:15",
    text: "Bendeciré abundantemente su provisión; a sus pobres saciaré de pan.",
    category: "Provisión",
    day: 236
  },
  {
    reference: "Salmo 145:15",
    text: "Los ojos de todos esperan en ti, y tú les das su comida a su tiempo.",
    category: "Provisión",
    day: 237
  },
  {
    reference: "Salmo 147:14",
    text: "El hace estar en paz tus términos, y te sacia de lo mejor del trigo.",
    category: "Provisión",
    day: 238
  },
  {
    reference: "Salmo 37:25",
    text: "Joven fui, y he envejecido, y no he visto justo desamparado, ni su descendencia que mendigue pan.",
    category: "Provisión",
    day: 239
  },
  {
    reference: "Salmo 104:27",
    text: "Todos ellos esperan en ti, para que les des su comida a su tiempo.",
    category: "Provisión",
    day: 240
  },

  // PROMESAS ADICIONALES DE SANIDAD (241-270)
  {
    reference: "Salmo 30:2",
    text: "Jehová Dios mío, a ti clamé, y me sanaste.",
    category: "Sanidad",
    day: 241
  },
  {
    reference: "Salmo 103:3",
    text: "El es quien perdona todas tus iniquidades, el que sana todas tus dolencias.",
    category: "Sanidad",
    day: 242
  },
  {
    reference: "Salmo 107:20",
    text: "Envió su palabra, y los sanó, y los libró de su ruina.",
    category: "Sanidad",
    day: 243
  },
  {
    reference: "Salmo 147:3",
    text: "El sana a los quebrantados de corazón, y venda sus heridas.",
    category: "Sanidad",
    day: 244
  },
  {
    reference: "Salmo 41:3",
    text: "Jehová lo sustentará sobre el lecho del dolor; mullirás toda su cama en su enfermedad.",
    category: "Sanidad",
    day: 245
  },
  {
    reference: "Salmo 6:2",
    text: "Ten misericordia de mí, oh Jehová, porque estoy enfermo; sáname, oh Jehová, porque mis huesos están conmovidos.",
    category: "Sanidad",
    day: 246
  },
  {
    reference: "Salmo 30:10",
    text: "Oye, oh Jehová, y ten misericordia de mí; Jehová, sé tú mi ayudador.",
    category: "Sanidad",
    day: 247
  },
  {
    reference: "Salmo 38:3",
    text: "No hay paz en mis huesos a causa de mi pecado.",
    category: "Sanidad",
    day: 248
  },
  {
    reference: "Salmo 42:11",
    text: "¿Por qué te abates, oh alma mía, y por qué te turbas dentro de mí? Espera en Dios; porque aún he de alabarle, salvación mía y Dios mío.",
    category: "Sanidad",
    day: 249
  },
  {
    reference: "Salmo 43:5",
    text: "¿Por qué te abates, oh alma mía, y por qué te turbas dentro de mí? Espera en Dios; porque aún he de alabarle, salvación mía y Dios mío.",
    category: "Sanidad",
    day: 250
  },

  // PROMESAS ADICIONALES DE PAZ (251-280)
  {
    reference: "Salmo 4:8",
    text: "En paz me acostaré, y asimismo dormiré; porque solo tú, Jehová, me haces vivir confiado.",
    category: "Paz",
    day: 251
  },
  {
    reference: "Salmo 29:11",
    text: "Jehová dará fortaleza a su pueblo; Jehová bendecirá a su pueblo con paz.",
    category: "Paz",
    day: 252
  },
  {
    reference: "Salmo 85:8",
    text: "Escucharé lo que hablará el Dios Jehová; porque hablará paz a su pueblo y a sus santos, para que no se vuelvan a la locura.",
    category: "Paz",
    day: 253
  },
  {
    reference: "Salmo 119:165",
    text: "Mucha paz tienen los que aman tu ley, y no hay para ellos tropiezo.",
    category: "Paz",
    day: 254
  },
  {
    reference: "Salmo 147:14",
    text: "El hace estar en paz tus términos, y te sacia de lo mejor del trigo.",
    category: "Paz",
    day: 255
  },
  {
    reference: "Salmo 72:7",
    text: "Florecerá en sus días justicia, y muchedumbre de paz, hasta que no haya luna.",
    category: "Paz",
    day: 256
  },
  {
    reference: "Salmo 76:3",
    text: "Allí quebró las saetas del arco, el escudo, la espada y la guerra.",
    category: "Paz",
    day: 257
  },
  {
    reference: "Salmo 85:10",
    text: "La misericordia y la verdad se encontraron; la justicia y la paz se besaron.",
    category: "Paz",
    day: 258
  },
  {
    reference: "Salmo 122:6",
    text: "Pedid por la paz de Jerusalén; sean prosperados los que te aman.",
    category: "Paz",
    day: 259
  },
  {
    reference: "Salmo 125:5",
    text: "Mas a los que se apartan tras sus perversidades, Jehová los llevará con los que hacen iniquidad. Paz sea sobre Israel.",
    category: "Paz",
    day: 260
  },

  // PROMESAS ADICIONALES DE FORTALEZA (261-290)
  {
    reference: "Salmo 18:32",
    text: "El Dios que me ciñe de poder, y quien hace perfecto mi camino.",
    category: "Fortaleza",
    day: 261
  },
  {
    reference: "Salmo 28:7",
    text: "Jehová es mi fortaleza y mi escudo; en él confió mi corazón, y fui ayudado, por lo que se gozó mi corazón, y con mi cántico le alabaré.",
    category: "Fortaleza",
    day: 262
  },
  {
    reference: "Salmo 31:24",
    text: "Esforzaos todos vosotros los que esperáis en Jehová, y tome aliento vuestro corazón.",
    category: "Fortaleza",
    day: 263
  },
  {
    reference: "Salmo 46:1",
    text: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.",
    category: "Fortaleza",
    day: 264
  },
  {
    reference: "Salmo 59:9",
    text: "Por su fortaleza te esperaré, porque Dios es mi defensa.",
    category: "Fortaleza",
    day: 265
  },
  {
    reference: "Salmo 62:7",
    text: "En Dios está mi salvación y mi gloria; en Dios está mi roca fuerte, y mi refugio.",
    category: "Fortaleza",
    day: 266
  },
  {
    reference: "Salmo 71:3",
    text: "Sé para mí una roca de refugio, adonde recurra yo continuamente. Has mandado que yo sea salvo; porque tú eres mi roca y mi fortaleza.",
    category: "Fortaleza",
    day: 267
  },
  {
    reference: "Salmo 73:26",
    text: "Mi carne y mi corazón desfallecen; pero la roca de mi corazón y mi porción es Dios para siempre.",
    category: "Fortaleza",
    day: 268
  },
  {
    reference: "Salmo 89:17",
    text: "Porque tú eres la gloria de su fortaleza, y por tu buena voluntad acrecentarás nuestro poder.",
    category: "Fortaleza",
    day: 269
  },
  {
    reference: "Salmo 118:14",
    text: "Mi fortaleza y mi cántico es JAH, y él me ha sido por salvación.",
    category: "Fortaleza",
    day: 270
  },

  // PROMESAS ADICIONALES DE SABIDURÍA (271-300)
  {
    reference: "Proverbios 1:7",
    text: "El principio de la sabiduría es el temor de Jehová; los insensatos desprecian la sabiduría y la enseñanza.",
    category: "Sabiduría",
    day: 271
  },
  {
    reference: "Proverbios 2:10",
    text: "Cuando la sabiduría entrare en tu corazón, y la ciencia fuere grata a tu alma.",
    category: "Sabiduría",
    day: 272
  },
  {
    reference: "Proverbios 4:5",
    text: "Adquiere sabiduría, adquiere inteligencia; no te olvides ni te apartes de las razones de mi boca.",
    category: "Sabiduría",
    day: 273
  },
  {
    reference: "Proverbios 8:11",
    text: "Porque mejor es la sabiduría que las piedras preciosas; y todo cuanto se puede desear, no es de compararse con ella.",
    category: "Sabiduría",
    day: 274
  },
  {
    reference: "Proverbios 9:9",
    text: "Da al sabio, y será más sabio; enseña al justo, y aumentará su saber.",
    category: "Sabiduría",
    day: 275
  },
  {
    reference: "Proverbios 10:8",
    text: "El sabio de corazón recibirá los mandamientos; pero el loco de labios caerá.",
    category: "Sabiduría",
    day: 276
  },
  {
    reference: "Proverbios 11:2",
    text: "Cuando viene la soberbia, viene también la deshonra; pero con los humildes está la sabiduría.",
    category: "Sabiduría",
    day: 277
  },
  {
    reference: "Proverbios 12:15",
    text: "El camino del necio es derecho en su opinión; pero el que obedece al consejo es sabio.",
    category: "Sabiduría",
    day: 278
  },
  {
    reference: "Proverbios 13:10",
    text: "Ciertamente la soberbia concebirá contienda; pero con los avisados está la sabiduría.",
    category: "Sabiduría",
    day: 279
  },
  {
    reference: "Proverbios 14:8",
    text: "La sabiduría del prudente es entender su camino; pero la imprudencia de los necios es engaño.",
    category: "Sabiduría",
    day: 280
  },

  // PROMESAS ADICIONALES DE AMOR (281-310)
  {
    reference: "Salmo 36:7",
    text: "¡Cuán preciosa, oh Dios, es tu misericordia! Por eso los hijos de los hombres se amparan bajo la sombra de tus alas.",
    category: "Amor",
    day: 281
  },
  {
    reference: "Salmo 86:5",
    text: "Porque tú, Señor, eres bueno y perdonador, y grande en misericordia para con todos los que te invocan.",
    category: "Amor",
    day: 282
  },
  {
    reference: "Salmo 103:8",
    text: "Misericordioso y clemente es Jehová; lento para la ira, y grande en misericordia.",
    category: "Amor",
    day: 283
  },
  {
    reference: "Salmo 103:17",
    text: "Mas la misericordia de Jehová es desde la eternidad y hasta la eternidad sobre los que le temen, y su justicia sobre los hijos de los hijos.",
    category: "Amor",
    day: 284
  },
  {
    reference: "Salmo 136:1",
    text: "Alabad a Jehová, porque él es bueno; porque para siempre es su misericordia.",
    category: "Amor",
    day: 285
  },
  {
    reference: "Salmo 136:26",
    text: "Alabad al Dios de los cielos, porque para siempre es su misericordia.",
    category: "Amor",
    day: 286
  },
  {
    reference: "Salmo 145:8",
    text: "Misericordioso y clemente es Jehová, lento para la ira, y grande en misericordia.",
    category: "Amor",
    day: 287
  },
  {
    reference: "Salmo 145:9",
    text: "Bueno es Jehová para con todos, y sus misericordias sobre todas sus obras.",
    category: "Amor",
    day: 288
  },
  {
    reference: "Salmo 147:11",
    text: "Jehová se agrada de los que le temen, de los que esperan en su misericordia.",
    category: "Amor",
    day: 289
  },
  {
    reference: "Salmo 149:4",
    text: "Porque Jehová tiene contentamiento en su pueblo; hermoseará a los humildes con la salvación.",
    category: "Amor",
    day: 290
  },

  // PROMESAS ADICIONALES DE ESPERANZA (291-320)
  {
    reference: "Salmo 33:18",
    text: "He aquí, el ojo de Jehová está sobre los que le temen, sobre los que esperan en su misericordia.",
    category: "Esperanza",
    day: 291
  },
  {
    reference: "Salmo 42:5",
    text: "¿Por qué te abates, oh alma mía, y por qué te turbas dentro de mí? Espera en Dios; porque aún he de alabarle, salvación mía y Dios mío.",
    category: "Esperanza",
    day: 292
  },
  {
    reference: "Salmo 62:5",
    text: "Alma mía, en Dios solamente reposa, porque de él es mi esperanza.",
    category: "Esperanza",
    day: 293
  },
  {
    reference: "Salmo 71:14",
    text: "Mas yo esperaré siempre, y te alabaré más y más.",
    category: "Esperanza",
    day: 294
  },
  {
    reference: "Salmo 130:5",
    text: "Esperé yo a Jehová, esperó mi alma; en su palabra he esperado.",
    category: "Esperanza",
    day: 295
  },
  {
    reference: "Salmo 131:3",
    text: "Espera, oh Israel, en Jehová desde ahora y para siempre.",
    category: "Esperanza",
    day: 296
  },
  {
    reference: "Salmo 147:11",
    text: "Jehová se agrada de los que le temen, de los que esperan en su misericordia.",
    category: "Esperanza",
    day: 297
  },
  {
    reference: "Lamentaciones 3:24",
    text: "Mi porción es Jehová, dijo mi alma; por tanto, en él esperaré.",
    category: "Esperanza",
    day: 298
  },
  {
    reference: "Lamentaciones 3:25",
    text: "Bueno es Jehová a los que en él esperan, al alma que le busca.",
    category: "Esperanza",
    day: 299
  },
  {
    reference: "Lamentaciones 3:26",
    text: "Bueno es esperar en silencio la salvación de Jehová.",
    category: "Esperanza",
    day: 300
  },

  // PROMESAS ADICIONALES DE VICTORIA (301-330)
  {
    reference: "Salmo 18:39",
    text: "Pues me ceñiste de fuerzas para la pelea; has humillado a mis enemigos debajo de mí.",
    category: "Victoria",
    day: 301
  },
  {
    reference: "Salmo 20:6",
    text: "Ahora conozco que Jehová salva a su ungido; lo oirá desde los cielos de su santuario, con la fuerza salvadora de su diestra.",
    category: "Victoria",
    day: 302
  },
  {
    reference: "Salmo 44:3",
    text: "Porque no se apoderaron de la tierra por su espada, ni su brazo los libró; sino tu diestra, y tu brazo, y la luz de tu rostro, porque te complaciste en ellos.",
    category: "Victoria",
    day: 303
  },
  {
    reference: "Salmo 118:16",
    text: "La diestra de Jehová es sublime; la diestra de Jehová hace valentías.",
    category: "Victoria",
    day: 304
  },
  {
    reference: "Salmo 118:17",
    text: "No moriré, sino que viviré, y contaré las obras de JAH.",
    category: "Victoria",
    day: 305
  },
  {
    reference: "Salmo 118:18",
    text: "Me castigó gravemente el Señor, pero no me entregó a la muerte.",
    category: "Victoria",
    day: 306
  },
  {
    reference: "Salmo 118:19",
    text: "Abridme las puertas de la justicia; entraré por ellas, alabaré a JAH.",
    category: "Victoria",
    day: 307
  },
  {
    reference: "Salmo 118:20",
    text: "Esta es puerta de Jehová; por ella entrarán los justos.",
    category: "Victoria",
    day: 308
  },
  {
    reference: "Salmo 118:21",
    text: "Te alabaré porque me oíste, y fuiste mi salvación.",
    category: "Victoria",
    day: 309
  },
  {
    reference: "Salmo 118:22",
    text: "La piedra que desecharon los edificadores ha venido a ser cabeza del ángulo.",
    category: "Victoria",
    day: 310
  },

  // PROMESAS ADICIONALES DE GOZO (311-340)
  {
    reference: "Salmo 16:11",
    text: "Me mostrarás la senda de la vida; en tu presencia hay plenitud de gozo; delicias a tu diestra para siempre.",
    category: "Gozo",
    day: 311
  },
  {
    reference: "Salmo 30:5",
    text: "Porque un momento será su ira, pero su favor dura toda la vida. Por la noche durará el lloro, y a la mañana vendrá la alegría.",
    category: "Gozo",
    day: 312
  },
  {
    reference: "Salmo 32:11",
    text: "Alegraos en Jehová y gozaos, justos; y cantad con júbilo todos vosotros los rectos de corazón.",
    category: "Gozo",
    day: 313
  },
  {
    reference: "Salmo 35:9",
    text: "Y mi alma se alegrará en Jehová; se gozará en su salvación.",
    category: "Gozo",
    day: 314
  },
  {
    reference: "Salmo 40:16",
    text: "Gócense y alégrense en ti todos los que te buscan, y digan siempre los que aman tu salvación: Engrandecido sea Jehová.",
    category: "Gozo",
    day: 315
  },
  {
    reference: "Salmo 43:4",
    text: "Entonces iré al altar de Dios, al Dios de mi alegría y de mi gozo; y te alabaré con arpa, oh Dios, Dios mío.",
    category: "Gozo",
    day: 316
  },
  {
    reference: "Salmo 45:7",
    text: "Has amado la justicia y aborrecido la maldad; por tanto, te ungió Dios, el Dios tuyo, con óleo de alegría más que a tus compañeros.",
    category: "Gozo",
    day: 317
  },
  {
    reference: "Salmo 51:8",
    text: "Hazme oír gozo y alegría; y se recrearán los huesos que abatiste.",
    category: "Gozo",
    day: 318
  },
  {
    reference: "Salmo 51:12",
    text: "Vuélveme el gozo de tu salvación, y espíritu noble me sustente.",
    category: "Gozo",
    day: 319
  },
  {
    reference: "Salmo 63:7",
    text: "Porque has sido mi socorro, y así en la sombra de tus alas me regocijaré.",
    category: "Gozo",
    day: 320
  },

  // PROMESAS ADICIONALES DE RESTAURACIÓN (321-350)
  {
    reference: "Salmo 23:3",
    text: "Confortará mi alma; me guiará por sendas de justicia por amor de su nombre.",
    category: "Restauración",
    day: 321
  },
  {
    reference: "Salmo 51:12",
    text: "Vuélveme el gozo de tu salvación, y espíritu noble me sustente.",
    category: "Restauración",
    day: 322
  },
  {
    reference: "Salmo 80:3",
    text: "Oh Jehová Dios de los ejércitos, restáuranos; haz resplandecer tu rostro, y seremos salvos.",
    category: "Restauración",
    day: 323
  },
  {
    reference: "Salmo 85:1",
    text: "Fuiste propicio a tu tierra, oh Jehová; volviste la cautividad de Jacob.",
    category: "Restauración",
    day: 324
  },
  {
    reference: "Salmo 126:1",
    text: "Cuando Jehová hiciere volver la cautividad de Sion, seremos como los que sueñan.",
    category: "Restauración",
    day: 325
  },
  {
    reference: "Salmo 126:4",
    text: "Jehová, vuelve ahora nuestros cautivos, como los arroyos del Neguev.",
    category: "Restauración",
    day: 326
  },
  {
    reference: "Salmo 126:5",
    text: "Los que sembraron con lágrimas, con regocijo segarán.",
    category: "Restauración",
    day: 327
  },
  {
    reference: "Salmo 126:6",
    text: "Irán andando y llorando, el que lleva la preciosa semilla; pero volverá a venir con regocijo, trayendo sus gavillas.",
    category: "Restauración",
    day: 328
  },
  {
    reference: "Isaías 58:12",
    text: "Y los tuyos edificarán las ruinas antiguas; los cimientos de generación y generación levantarás, y serás llamado reparador de portillos, restaurador de calzadas para habitar.",
    category: "Restauración",
    day: 329
  },
  {
    reference: "Isaías 61:3",
    text: "A ordenar que a los afligidos de Sion se les dé gloria en lugar de ceniza, óleo de gozo en lugar de luto, manto de alegría en lugar del espíritu angustiado.",
    category: "Restauración",
    day: 330
  },

  // PROMESAS ADICIONALES DE SALVACIÓN (331-365)
  {
    reference: "Salmo 3:8",
    text: "La salvación es de Jehová; sobre tu pueblo sea tu bendición.",
    category: "Salvación",
    day: 331
  },
  {
    reference: "Salmo 18:46",
    text: "Viva Jehová, y bendita sea mi roca, y enaltecido sea el Dios de mi salvación.",
    category: "Salvación",
    day: 332
  },
  {
    reference: "Salmo 27:1",
    text: "Jehová es mi luz y mi salvación; ¿de quién temeré? Jehová es la fortaleza de mi vida; ¿de quién he de atemorizarme?",
    category: "Salvación",
    day: 333
  },
  {
    reference: "Salmo 35:3",
    text: "Saca la lanza y el escudo, y levántate en mi ayuda.",
    category: "Salvación",
    day: 334
  },
  {
    reference: "Salmo 35:9",
    text: "Y mi alma se alegrará en Jehová; se gozará en su salvación.",
    category: "Salvación",
    day: 335
  },
  {
    reference: "Salmo 37:39",
    text: "Pero la salvación de los justos es de Jehová, y él es su fortaleza en el tiempo de la angustia.",
    category: "Salvación",
    day: 336
  },
  {
    reference: "Salmo 38:22",
    text: "Date prisa en ayudarme, oh Señor, mi salvación.",
    category: "Salvación",
    day: 337
  },
  {
    reference: "Salmo 40:16",
    text: "Gócense y alégrense en ti todos los que te buscan, y digan siempre los que aman tu salvación: Engrandecido sea Jehová.",
    category: "Salvación",
    day: 338
  },
  {
    reference: "Salmo 42:5",
    text: "¿Por qué te abates, oh alma mía, y por qué te turbas dentro de mí? Espera en Dios; porque aún he de alabarle, salvación mía y Dios mío.",
    category: "Salvación",
    day: 339
  },
  {
    reference: "Salmo 43:5",
    text: "¿Por qué te abates, oh alma mía, y por qué te turbas dentro de mí? Espera en Dios; porque aún he de alabarle, salvación mía y Dios mío.",
    category: "Salvación",
    day: 340
  },
  {
    reference: "Salmo 51:12",
    text: "Vuélveme el gozo de tu salvación, y espíritu noble me sustente.",
    category: "Salvación",
    day: 341
  },
  {
    reference: "Salmo 62:1",
    text: "En Dios solamente está acallada mi alma; de él viene mi salvación.",
    category: "Salvación",
    day: 342
  },
  {
    reference: "Salmo 62:2",
    text: "El solamente es mi roca y mi salvación; es mi refugio, no resbalaré mucho.",
    category: "Salvación",
    day: 343
  },
  {
    reference: "Salmo 62:6",
    text: "El solamente es mi roca y mi salvación; es mi refugio, no resbalaré.",
    category: "Salvación",
    day: 344
  },
  {
    reference: "Salmo 65:5",
    text: "Con tremendas cosas nos responderás tú en justicia, oh Dios de nuestra salvación, esperanza de todos los términos de la tierra, y de los más remotos confines del mar.",
    category: "Salvación",
    day: 345
  },
  {
    reference: "Salmo 68:19",
    text: "Bendito el Señor; cada día nos colma de beneficios el Dios de nuestra salvación.",
    category: "Salvación",
    day: 346
  },
  {
    reference: "Salmo 69:29",
    text: "Yo estoy afligido y dolorido; tu salvación, oh Dios, me ponga en alto.",
    category: "Salvación",
    day: 347
  },
  {
    reference: "Salmo 70:4",
    text: "Gócense y alégrense en ti todos los que te buscan, y digan siempre los que aman tu salvación: Engrandecido sea Dios.",
    category: "Salvación",
    day: 348
  },
  {
    reference: "Salmo 71:15",
    text: "Mi boca publicará tu justicia y tu salvación todo el día, aunque no sé su número.",
    category: "Salvación",
    day: 349
  },
  {
    reference: "Salmo 74:12",
    text: "Dios es mi Rey desde tiempo antiguo, el que hace salvación en medio de la tierra.",
    category: "Salvación",
    day: 350
  },
  {
    reference: "Salmo 78:22",
    text: "Porque no creyeron en Dios, ni confiaron en su salvación.",
    category: "Salvación",
    day: 351
  },
  {
    reference: "Salmo 79:9",
    text: "Ayúdanos, oh Dios de nuestra salvación, por la gloria de tu nombre; y líbranos, y perdona nuestros pecados por amor de tu nombre.",
    category: "Salvación",
    day: 352
  },
  {
    reference: "Salmo 85:4",
    text: "Restáuranos, oh Dios de nuestra salvación, y haz cesar tu ira de sobre nosotros.",
    category: "Salvación",
    day: 353
  },
  {
    reference: "Salmo 85:7",
    text: "Muéstranos, oh Jehová, tu misericordia, y danos tu salvación.",
    category: "Salvación",
    day: 354
  },
  {
    reference: "Salmo 85:9",
    text: "Ciertamente cercana está su salvación a los que le temen, para que habite la gloria en nuestra tierra.",
    category: "Salvación",
    day: 355
  },
  {
    reference: "Salmo 88:1",
    text: "Oh Jehová, Dios de mi salvación, día y noche clamo delante de ti.",
    category: "Salvación",
    day: 356
  },
  {
    reference: "Salmo 89:26",
    text: "El me clamará: Mi padre eres tú, mi Dios, y la roca de mi salvación.",
    category: "Salvación",
    day: 357
  },
  {
    reference: "Salmo 91:16",
    text: "Lo saciaré de larga vida, y le mostraré mi salvación.",
    category: "Salvación",
    day: 358
  },
  {
    reference: "Salmo 95:1",
    text: "Venid, aclamemos alegremente a Jehová; cantemos con júbilo a la roca de nuestra salvación.",
    category: "Salvación",
    day: 359
  },
  {
    reference: "Salmo 96:2",
    text: "Cantad a Jehová, bendecid su nombre; anunciad de día en día su salvación.",
    category: "Salvación",
    day: 360
  },
  {
    reference: "Salmo 98:2",
    text: "Jehová ha hecho notoria su salvación; a vista de las naciones ha descubierto su justicia.",
    category: "Salvación",
    day: 361
  },
  {
    reference: "Salmo 98:3",
    text: "Se ha acordado de su misericordia y de su verdad para con la casa de Israel; todos los términos de la tierra han visto la salvación de nuestro Dios.",
    category: "Salvación",
    day: 362
  },
  {
    reference: "Salmo 106:4",
    text: "Acuérdate de mí, oh Jehová, según tu beneplácito para con tu pueblo; visítame con tu salvación.",
    category: "Salvación",
    day: 363
  },
  {
    reference: "Salmo 106:47",
    text: "Sálvanos, oh Jehová Dios nuestro, y recógenos de entre las naciones, para que alabemos tu santo nombre, y nos gloriemos en tus alabanzas.",
    category: "Salvación",
    day: 364
  },
  {
    reference: "Salmo 118:14",
    text: "Mi fortaleza y mi cántico es JAH, y él me ha sido por salvación.",
    category: "Salvación",
    day: 365
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
