const tiposDeNodo = {
  causa:          { etiqueta: "Causa",          color: "#8d5524" },
  acontecimiento: { etiqueta: "Acontecimiento", color: "#1f6f8b" },
  actor:          { etiqueta: "Actor",          color: "#2e7d32" },
  idea:           { etiqueta: "Idea o movimiento", color: "#6a3d9a" },
  consecuencia:   { etiqueta: "Consecuencia",   color: "#b23a48" }
};

const listaNodos = [
  {
    id: "revolucion_francesa", linea1: "Revolución", linea2: "Francesa",
    tipo: "causa", x: 100, y: 70,
    descripcion: "El pueblo logró quitar del poder a sus gobernantes. Esto dejó miedo en los reyes europeos y reforzó la idea de que la soberanía no pertenecía solo al monarca, sino a la nación (Hubeñák, pp. 277-278)."
  },
  {
    id: "napoleon", linea1: "Caída de", linea2: "Napoleón",
    tipo: "acontecimiento", x: 100, y: 200,
    descripcion: "Después de más de veinte años de guerras, Europa buscaba recuperar la tranquilidad tras la caída de Napoleón."
  },
  {
    id: "metternich", linea1: "Metternich", linea2: "(Austria)",
    tipo: "actor", x: 300, y: 70,
    descripcion: "Representante de Austria en el Congreso de Viena. Defendía las ideas conservadoras. En 1848, las protestas en Viena provocaron su caída."
  },
  {
    id: "viena", linea1: "Congreso de", linea2: "Viena (1815)",
    tipo: "acontecimiento", x: 300, y: 200,
    descripcion: "En 1815 los principales gobernantes de Europa se reunieron para organizar el continente. El objetivo era devolver el poder a las antiguas familias reales. También se cambiaron fronteras y desaparecieron varios pequeños territorios, sobre todo en Alemania."
  },
  {
    id: "santa_alianza", linea1: "Santa", linea2: "Alianza",
    tipo: "acontecimiento", x: 300, y: 330,
    descripcion: "Alianza entre Austria, Prusia y Rusia para ayudarse a evitar nuevas revoluciones y proteger a las monarquías. Ejemplo: tropas francesas fueron a España para devolverle el poder al rey Fernando VII."
  },
  {
    id: "restauracion", linea1: "La", linea2: "Restauración",
    tipo: "acontecimiento", x: 500, y: 200,
    descripcion: "Con el regreso de los reyes, la nobleza y la Iglesia recuperaron su poder: el «Trono y el Altar». Este sistema, llamado «concierto de las naciones», mantuvo cerca de cincuenta años de tranquilidad entre las grandes potencias."
  },
  {
    id: "conservadurismo", linea1: "Conservadores", linea2: "",
    tipo: "idea", x: 500, y: 50,
    descripcion: "Querían mantener el poder de los reyes y la influencia de la Iglesia católica. Rechazaban los cambios de la Revolución Francesa. Uno de sus principales críticos de la revolución fue el inglés Edmund Burke."
  },
  {
    id: "liberalismo", linea1: "Liberalismo", linea2: "",
    tipo: "idea", x: 500, y: 330,
    descripcion: "Defendía las libertades individuales, la igualdad ante la ley, las constituciones, los gobiernos elegidos por representantes y la limitación del poder de los monarcas. Veía a Inglaterra como ejemplo por su Parlamento."
  },
  {
    id: "revoluciones", linea1: "Revoluciones", linea2: "1820, 1830, 1848",
    tipo: "acontecimiento", x: 700, y: 110,
    descripcion: "1820: levantamientos en España, Portugal, Nápoles y Grecia. 1830: caída de Carlos X en Francia (Tres Jornadas Gloriosas) e independencia de Bélgica. 1848: «Primavera de los Pueblos». Muchas fueron derrotadas por los ejércitos de las monarquías, pero mostraron que las ideas liberales y nacionalistas tenían cada vez más fuerza."
  },
  {
    id: "nacionalismo", linea1: "Nacionalismo", linea2: "",
    tipo: "idea", x: 880, y: 170,
    descripcion: "Sostenía que una nación debía organizarse políticamente y, en muchos casos, formar su propio Estado. Hubeñák distingue una idea de nación más política (Francia) y otra cultural y romántica (Alemania). Protagonistas: Mazzini en Italia; Herder y Fichte en Alemania."
  },
  {
    id: "rev_industrial", linea1: "Revolución", linea2: "Industrial",
    tipo: "causa", x: 100, y: 470,
    descripcion: "Proceso de transformación económica, tecnológica y social que cambió la forma de producir. Empezó en Gran Bretaña. Factores: máquina de vapor, carbón y hierro, industria textil y ferrocarril. Impulsó el capitalismo y la urbanización."
  },
  {
    id: "cuestion_social", linea1: "Cuestión", linea2: "social",
    tipo: "consecuencia", x: 300, y: 500,
    descripcion: "Muchos trabajadores tenían largas jornadas, bajos salarios y malas condiciones de vida. Esto favoreció la organización de los trabajadores en sindicatos y el desarrollo de ideas socialistas."
  },
  {
    id: "utopias", linea1: "Utopías", linea2: "sociales",
    tipo: "idea", x: 500, y: 500,
    descripcion: "Socialismo utópico: buscaba una sociedad más justa, con igualdad y cooperación, mediante reformas pacíficas y sin lucha de clases. Representantes: Saint-Simon, Charles Fourier (falansterios) y Robert Owen."
  },
  {
    id: "romanticismo", linea1: "Romanticismo", linea2: "",
    tipo: "idea", x: 700, y: 400,
    descripcion: "Movimiento cultural, artístico y literario: una rebelión contra la modernidad racionalista que puso el sentimiento y el individuo en el centro. Obras: Frankenstein (Mary Shelley), El caminante sobre el mar de nubes (Friedrich), La Libertad guiando al pueblo (Delacroix)."
  },
  {
    id: "europa", linea1: "Europa", linea2: "transformada",
    tipo: "consecuencia", x: 880, y: 300,
    descripcion: "Se debilitó el absolutismo, creció el liberalismo, se fortaleció el nacionalismo y la burguesía y los trabajadores ganaron importancia. Estas transformaciones prepararon una Europa diferente en la segunda mitad del siglo XIX."
  }
];

const listaConexiones = [
  { desde: "revolucion_francesa", hasta: "viena",
    motivo: "Los reyes temían que se repitiera lo ocurrido en la Revolución Francesa, cuando el pueblo quitó del poder a sus gobernantes." },
  { desde: "napoleon", hasta: "viena",
    motivo: "Tras la caída de Napoleón, los gobernantes se reunieron en 1815 para reorganizar Europa." },
  { desde: "metternich", hasta: "viena",
    motivo: "Fue uno de los personajes más importantes del Congreso y defendía las ideas conservadoras." },
  { desde: "viena", hasta: "santa_alianza",
    motivo: "Después de la reunión se formó la Santa Alianza entre Austria, Prusia y Rusia." },
  { desde: "viena", hasta: "restauracion",
    motivo: "El objetivo del Congreso era devolver el poder a las antiguas familias reales." },
  { desde: "santa_alianza", hasta: "restauracion",
    motivo: "Los países aliados se comprometieron a evitar nuevas revoluciones y proteger a las monarquías." },
  { desde: "restauracion", hasta: "conservadurismo",
    motivo: "Los conservadores querían mantener el poder de los reyes y la influencia de la Iglesia, que es lo que la Restauración devolvió." },
  { desde: "restauracion", hasta: "liberalismo",
    motivo: "Muchas personas no estaban de acuerdo con el regreso del absolutismo y defendieron la libertad y la participación política." },
  { desde: "liberalismo", hasta: "revoluciones",
    motivo: "Las ideas liberales impulsaron los levantamientos. Por ejemplo, en 1820 los militares obligaron a Fernando VII a aceptar la Constitución de 1812." },
  { desde: "nacionalismo", hasta: "revoluciones",
    motivo: "Grecia luchó por independizarse del Imperio otomano, Bélgica se separó de los Países Bajos y en 1848 hubo revueltas en territorios italianos y alemanes." },
  { desde: "metternich", hasta: "revoluciones",
    motivo: "En 1848, las protestas en Viena provocaron la caída de Metternich, uno de los principales defensores del conservadurismo." },
  { desde: "revoluciones", hasta: "europa",
    motivo: "Debilitaron el absolutismo y mostraron que el orden establecido tras Napoleón no podía mantenerse sin atender las demandas de libertad e identidad nacional." },
  { desde: "rev_industrial", hasta: "cuestion_social",
    motivo: "La producción y la riqueza aumentaron, pero también aparecieron problemas sociales para los trabajadores." },
  { desde: "cuestion_social", hasta: "utopias",
    motivo: "El socialismo utópico surgió como respuesta a las desigualdades y las malas condiciones laborales." },
  { desde: "rev_industrial", hasta: "romanticismo",
    motivo: "Los románticos sintieron rechazo por el humo, el hacinamiento y el materialismo burgués, e idealizaron la naturaleza y el pasado." },
  { desde: "restauracion", hasta: "romanticismo",
    motivo: "Ante la imposibilidad de cambiar el mundo político, muchos jóvenes se refugiaron en el mundo interior y la rebeldía espiritual." },
  { desde: "romanticismo", hasta: "nacionalismo",
    motivo: "El interés romántico por las lenguas y tradiciones populares fortaleció las identidades nacionales (idea del «espíritu del pueblo» de Herder)." },
  { desde: "romanticismo", hasta: "revoluciones",
    motivo: "Aportó la energía rebelde a las revoluciones liberales. Un ejemplo es el cuadro «La Libertad guiando al pueblo» (1830) de Delacroix." },
  { desde: "romanticismo", hasta: "utopias",
    motivo: "Comparten el rechazo a la sociedad industrial burguesa y el deseo de una comunidad humana más fraterna." },
  { desde: "nacionalismo", hasta: "europa",
    motivo: "Los pueblos reclamaron independencia o unidad política, lo que transformó el mapa y la política de Europa." },
  { desde: "rev_industrial", hasta: "europa",
    motivo: "Impulsó el capitalismo, aceleró la urbanización, cambió las formas de trabajo y convirtió a Gran Bretaña en una gran potencia." }
];

const anchoNodo = 130;
const altoNodo = 48;

const elementosNodos = {};
const elementosLineas = [];

let tipoFiltroActual = "todos";
let idNodoSeleccionado = null;

function crearElementoSvg(nombreEtiqueta, atributos) {
  const elemento = document.createElementNS("http://www.w3.org/2000/svg", nombreEtiqueta);
  for (const nombreAtributo in atributos) {
    elemento.setAttribute(nombreAtributo, atributos[nombreAtributo]);
  }
  return elemento;
}

function buscarNodoPorId(idBuscado) {
  return listaNodos.find(function (nodo) {
    return nodo.id === idBuscado;
  });
}

function calcularPuntoEnBorde(nodoCentro, nodoOtro) {
  const diferenciaX = nodoOtro.x - nodoCentro.x;
  const diferenciaY = nodoOtro.y - nodoCentro.y;

  const escalaX = diferenciaX !== 0 ? (anchoNodo / 2) / Math.abs(diferenciaX) : Infinity;
  const escalaY = diferenciaY !== 0 ? (altoNodo / 2 + 4) / Math.abs(diferenciaY) : Infinity;
  const escala = Math.min(escalaX, escalaY);

  return {
    x: nodoCentro.x + diferenciaX * escala,
    y: nodoCentro.y + diferenciaY * escala
  };
}

function dibujarPuntaDeFlecha(lienzo) {
  const definiciones = crearElementoSvg("defs", {});
  const marcador = crearElementoSvg("marker", {
    id: "puntaFlecha", viewBox: "0 0 10 10", refX: "9", refY: "5",
    markerWidth: "7", markerHeight: "7", orient: "auto-start-reverse"
  });
  const triangulo = crearElementoSvg("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: "#666" });
  marcador.appendChild(triangulo);
  definiciones.appendChild(marcador);
  lienzo.appendChild(definiciones);
}

function dibujarConexiones(lienzo) {
  listaConexiones.forEach(function (conexion) {
    const nodoOrigen = buscarNodoPorId(conexion.desde);
    const nodoDestino = buscarNodoPorId(conexion.hasta);

    const inicio = calcularPuntoEnBorde(nodoOrigen, nodoDestino);
    const fin = calcularPuntoEnBorde(nodoDestino, nodoOrigen);

    const linea = crearElementoSvg("line", {
      class: "linea",
      x1: inicio.x, y1: inicio.y,
      x2: fin.x, y2: fin.y,
      "marker-end": "url(#puntaFlecha)"
    });
    lienzo.appendChild(linea);

    elementosLineas.push({ conexion: conexion, elemento: linea });
  });
}

function dibujarNodos(lienzo) {
  listaNodos.forEach(function (nodo) {

    const grupo = crearElementoSvg("g", { class: "nodo" });

    const recuadro = crearElementoSvg("rect", {
      x: nodo.x - anchoNodo / 2,
      y: nodo.y - altoNodo / 2,
      width: anchoNodo,
      height: altoNodo,
      fill: tiposDeNodo[nodo.tipo].color
    });

    const texto = crearElementoSvg("text", { "text-anchor": "middle" });

    if (nodo.linea2 === "") {
      const renglonUnico = crearElementoSvg("tspan", { x: nodo.x, y: nodo.y + 5 });
      renglonUnico.textContent = nodo.linea1;
      texto.appendChild(renglonUnico);
    } else {
      const renglonArriba = crearElementoSvg("tspan", { x: nodo.x, y: nodo.y - 4 });
      renglonArriba.textContent = nodo.linea1;
      const renglonAbajo = crearElementoSvg("tspan", { x: nodo.x, y: nodo.y + 14 });
      renglonAbajo.textContent = nodo.linea2;
      texto.appendChild(renglonArriba);
      texto.appendChild(renglonAbajo);
    }

    grupo.appendChild(recuadro);
    grupo.appendChild(texto);

    grupo.addEventListener("click", function () {
      mostrarDetalleNodo(nodo.id);
    });

    lienzo.appendChild(grupo);
    elementosNodos[nodo.id] = grupo;
  });
}

function mostrarDetalleNodo(idNodo) {
  idNodoSeleccionado = idNodo;
  const nodo = buscarNodoPorId(idNodo);

  for (const id in elementosNodos) {
    elementosNodos[id].classList.remove("seleccionado");
  }
  elementosNodos[idNodo].classList.add("seleccionado");

  elementosLineas.forEach(function (flecha) {
    const tocaAlNodo = flecha.conexion.desde === idNodo || flecha.conexion.hasta === idNodo;
    if (tocaAlNodo) {
      flecha.elemento.classList.add("resaltada");
    } else {
      flecha.elemento.classList.remove("resaltada");
    }
  });

  const panel = document.getElementById("panelDetalle");
  panel.innerHTML = "";

  const titulo = document.createElement("h3");
  titulo.textContent = (nodo.linea1 + " " + nodo.linea2).trim();
  panel.appendChild(titulo);

  const etiqueta = document.createElement("span");
  etiqueta.className = "etiqueta-tipo";
  etiqueta.textContent = tiposDeNodo[nodo.tipo].etiqueta;
  etiqueta.style.backgroundColor = tiposDeNodo[nodo.tipo].color;
  panel.appendChild(etiqueta);

  const descripcion = document.createElement("p");
  descripcion.textContent = nodo.descripcion;
  panel.appendChild(descripcion);

  const subtitulo = document.createElement("h4");
  subtitulo.textContent = "¿Con qué se conecta y por qué?";
  panel.appendChild(subtitulo);

  const listaDeConexiones = document.createElement("ul");
  listaDeConexiones.className = "lista-conexiones";

  listaConexiones.forEach(function (conexion) {

    if (conexion.desde !== idNodo && conexion.hasta !== idNodo) {
      return;
    }

    const esSalida = conexion.desde === idNodo;
    const idOtroNodo = esSalida ? conexion.hasta : conexion.desde;
    const otroNodo = buscarNodoPorId(idOtroNodo);
    const nombreOtro = (otroNodo.linea1 + " " + otroNodo.linea2).trim();

    const elementoLista = document.createElement("li");

    const botonOtro = document.createElement("button");
    botonOtro.className = "boton-conexion";
    botonOtro.textContent = nombreOtro;
    botonOtro.addEventListener("click", function () {
      mostrarDetalleNodo(idOtroNodo);
    });

    const flechaTexto = document.createElement("span");
    flechaTexto.textContent = esSalida ? " (lo que provocó): " : " (lo que influyó en él): ";

    const textoMotivo = document.createElement("span");
    textoMotivo.textContent = conexion.motivo;

    elementoLista.appendChild(botonOtro);
    elementoLista.appendChild(flechaTexto);
    elementoLista.appendChild(textoMotivo);
    listaDeConexiones.appendChild(elementoLista);
  });

  panel.appendChild(listaDeConexiones);
}

function filtrarRedPorTipo(tipoElegido) {
  tipoFiltroActual = tipoElegido;

  listaNodos.forEach(function (nodo) {
    const grupo = elementosNodos[nodo.id];
    if (tipoElegido === "todos" || nodo.tipo === tipoElegido) {
      grupo.classList.remove("apagado");
    } else {
      grupo.classList.add("apagado");
    }
  });

  elementosLineas.forEach(function (flecha) {
    const nodoOrigen = buscarNodoPorId(flecha.conexion.desde);
    const nodoDestino = buscarNodoPorId(flecha.conexion.hasta);
    const seMuestra = tipoElegido === "todos" || nodoOrigen.tipo === tipoElegido || nodoDestino.tipo === tipoElegido;
    flecha.elemento.style.opacity = seMuestra ? "1" : "0.1";
  });

  marcarBotonActivo("botonesFiltroRed", tipoElegido);
}

function crearBotonesFiltroRed() {
  const contenedor = document.getElementById("botonesFiltroRed");

  contenedor.appendChild(crearBotonFiltro("Todos", "todos", filtrarRedPorTipo));

  for (const clave in tiposDeNodo) {
    contenedor.appendChild(crearBotonFiltro(tiposDeNodo[clave].etiqueta, clave, filtrarRedPorTipo));
  }
}

function crearBotonFiltro(textoBoton, valorFiltro, accionAlHacerClic) {
  const boton = document.createElement("button");
  boton.className = "boton-filtro";
  boton.textContent = textoBoton;
  boton.setAttribute("data-valor", valorFiltro);
  boton.addEventListener("click", function () {
    accionAlHacerClic(valorFiltro);
  });
  return boton;
}

function marcarBotonActivo(idContenedor, valorActivo) {
  const botones = document.getElementById(idContenedor).querySelectorAll("button");
  botones.forEach(function (boton) {
    if (boton.getAttribute("data-valor") === valorActivo) {
      boton.classList.add("activo");
    } else {
      boton.classList.remove("activo");
    }
  });
}

function crearRedInteractiva() {
  const lienzo = document.getElementById("lienzoRed");
  dibujarPuntaDeFlecha(lienzo);
  dibujarConexiones(lienzo);
  dibujarNodos(lienzo);
  crearBotonesFiltroRed();
  filtrarRedPorTipo("todos");
}

const temasLineaTiempo = {
  poder:        "Poder y Restauración",
  revoluciones: "Revoluciones",
  economia:     "Economía y sociedad",
  cultura:      "Cultura e ideas"
};

const listaHechos = [
  { anioOrden: 1774, anioTexto: "1774", tema: "cultura",
    titulo: "Las cuitas del joven Werther",
    texto: "Goethe publica la novela. El movimiento Sturm und Drang es el germen del Romanticismo." },
  { anioOrden: 1800, anioTexto: "Comienzos del siglo XIX", tema: "economia",
    titulo: "Surge el socialismo utópico",
    texto: "Responde a las desigualdades y malas condiciones laborales. Saint-Simon, Fourier y Owen proponen reformas pacíficas." },
  { anioOrden: 1801, anioTexto: "Siglo XIX", tema: "economia",
    titulo: "La Revolución Industrial transforma la sociedad",
    texto: "Desde Gran Bretaña, la máquina de vapor, el carbón y el hierro cambian la producción. Surgen burgueses y proletarios." },
  { anioOrden: 1815, anioTexto: "1815", tema: "poder",
    titulo: "Congreso de Viena",
    texto: "Los gobernantes europeos reorganizan el continente y devuelven el poder a las antiguas familias reales." },
  { anioOrden: 1815.5, anioTexto: "Después de 1815", tema: "poder",
    titulo: "Santa Alianza",
    texto: "Austria, Prusia y Rusia acuerdan ayudarse para evitar nuevas revoluciones y proteger a las monarquías." },
  { anioOrden: 1818, anioTexto: "1818", tema: "cultura",
    titulo: "Frankenstein y El caminante sobre el mar de nubes",
    texto: "Obras clave del Romanticismo: una advertencia contra la ciencia arrogante y la imagen de lo sublime." },
  { anioOrden: 1820, anioTexto: "1820", tema: "revoluciones",
    titulo: "Revoluciones en España, Portugal, Nápoles y Grecia",
    texto: "En España los militares obligan a Fernando VII a aceptar la Constitución de 1812. En Grecia empieza la lucha por independizarse del Imperio otomano." },
  { anioOrden: 1830, anioTexto: "27-29 de julio de 1830", tema: "revoluciones",
    titulo: "Tres Jornadas Gloriosas",
    texto: "París se levanta contra Carlos X. Luis Felipe de Orleans asume como rey de los franceses. Bélgica se independiza de los Países Bajos." },
  { anioOrden: 1830.5, anioTexto: "1830", tema: "cultura",
    titulo: "La Libertad guiando al pueblo",
    texto: "Delacroix pinta la fusión entre el ímpetu romántico y la revolución política." },
  { anioOrden: 1848, anioTexto: "1848", tema: "revoluciones",
    titulo: "Primavera de los Pueblos",
    texto: "Las protestas obligan a Luis Felipe I a abdicar y se proclama la Segunda República Francesa. Cae Metternich en Viena. Muchos movimientos son derrotados." },
  { anioOrden: 1862, anioTexto: "1862", tema: "cultura",
    titulo: "Los Miserables",
    texto: "Victor Hugo mezcla la pasión romántica con una profunda denuncia social." }
];

function mostrarHechosPorTema(temaElegido) {
  const contenedor = document.getElementById("listaLineaTiempo");
  contenedor.innerHTML = "";

  const hechosOrdenados = listaHechos.slice().sort(function (hechoA, hechoB) {
    return hechoA.anioOrden - hechoB.anioOrden;
  });

  hechosOrdenados.forEach(function (hecho) {
    if (temaElegido !== "todos" && hecho.tema !== temaElegido) {
      return;
    }

    const caja = document.createElement("div");
    caja.className = "hecho";

    const anio = document.createElement("div");
    anio.className = "anio";
    anio.textContent = hecho.anioTexto;

    const titulo = document.createElement("strong");
    titulo.textContent = hecho.titulo;

    const tema = document.createElement("div");
    tema.className = "tema";
    tema.textContent = temasLineaTiempo[hecho.tema];

    const texto = document.createElement("p");
    texto.textContent = hecho.texto;

    caja.appendChild(anio);
    caja.appendChild(titulo);
    caja.appendChild(tema);
    caja.appendChild(texto);
    contenedor.appendChild(caja);
  });

  marcarBotonActivo("botonesFiltroTiempo", temaElegido);
}

function crearBotonesFiltroTiempo() {
  const contenedor = document.getElementById("botonesFiltroTiempo");
  contenedor.appendChild(crearBotonFiltro("Todos", "todos", mostrarHechosPorTema));
  for (const clave in temasLineaTiempo) {
    contenedor.appendChild(crearBotonFiltro(temasLineaTiempo[clave], clave, mostrarHechosPorTema));
  }
}

const listaPreguntas = [
  {
    enunciado: "¿Quién defendía las ideas conservadoras en el Congreso de Viena?",
    opciones: ["Talleyrand", "Metternich", "Giuseppe Mazzini"],
    posicionCorrecta: 1,
    explicacion: "Metternich, representante de Austria, defendía las ideas conservadoras. Talleyrand representaba a Francia."
  },
  {
    enunciado: "¿Qué países formaron la Santa Alianza?",
    opciones: ["Austria, Prusia y Rusia", "Francia, Inglaterra y España", "Austria, Francia e Italia"],
    posicionCorrecta: 0,
    explicacion: "Austria, Prusia y Rusia se ayudaron para evitar nuevas revoluciones y proteger a las monarquías."
  },
  {
    enunciado: "¿Qué grupo defendía los gobiernos elegidos por representantes y veía a Inglaterra como ejemplo?",
    opciones: ["Los conservadores", "Los liberales", "La Santa Alianza"],
    posicionCorrecta: 1,
    explicacion: "Los liberales defendían la libertad y los derechos de las personas, y admiraban el Parlamento inglés."
  },
  {
    enunciado: "¿Qué fue la «Primavera de los Pueblos»?",
    opciones: [
      "La ola revolucionaria de 1848",
      "Un tratado de paz firmado en Viena",
      "Una alianza entre reyes europeos"
    ],
    posicionCorrecta: 0,
    explicacion: "Empezó en Francia en febrero de 1848 y se extendió por Austria, Hungría, los Estados alemanes y los territorios italianos."
  },
  {
    enunciado: "¿Qué idea romántica sostenía que cada nación tiene un alma única expresada en su idioma y sus mitos?",
    opciones: ["El Volksgeist (espíritu del pueblo)", "El Trono y el Altar", "La cuestión social"],
    posicionCorrecta: 0,
    explicacion: "Herder defendió el Volksgeist, y esa idea fortaleció los nacionalismos de Alemania e Italia."
  },
  {
    enunciado: "En la sociedad industrial, ¿quiénes eran los proletarios?",
    opciones: [
      "Los dueños de los medios de producción",
      "Los trabajadores que aportaban su trabajo",
      "Los nobles que recuperaron su poder"
    ],
    posicionCorrecta: 1,
    explicacion: "Los burgueses eran los propietarios de los medios de producción y los proletarios aportaban su trabajo."
  }
];

let respuestasContestadas = 0;
let respuestasCorrectas = 0;

function responderPregunta(cajaPregunta, pregunta, posicionElegida) {
  const botonesOpciones = cajaPregunta.querySelectorAll(".opcion");

  botonesOpciones.forEach(function (boton) {
    boton.disabled = true;
  });

  botonesOpciones[pregunta.posicionCorrecta].classList.add("correcta");

  const acerto = posicionElegida === pregunta.posicionCorrecta;
  if (!acerto) {
    botonesOpciones[posicionElegida].classList.add("incorrecta");
  } else {
    respuestasCorrectas = respuestasCorrectas + 1;
  }
  respuestasContestadas = respuestasContestadas + 1;

  const explicacion = document.createElement("p");
  explicacion.className = "explicacion";
  explicacion.textContent = (acerto ? "¡Correcto! " : "Respuesta incorrecta. ") + pregunta.explicacion;
  cajaPregunta.appendChild(explicacion);

  if (respuestasContestadas === listaPreguntas.length) {
    mostrarResultadoFinal();
  }
}

function mostrarResultadoFinal() {
  const cajaResultado = document.getElementById("resultadoCuestionario");
  cajaResultado.classList.remove("oculto");
  cajaResultado.textContent = "Obtuviste " + respuestasCorrectas + " de " + listaPreguntas.length + " respuestas correctas.";
}

function crearCuestionario() {
  const contenedor = document.getElementById("contenedorCuestionario");

  listaPreguntas.forEach(function (pregunta, numero) {
    const caja = document.createElement("div");
    caja.className = "pregunta";

    const enunciado = document.createElement("strong");
    enunciado.textContent = (numero + 1) + ". " + pregunta.enunciado;
    caja.appendChild(enunciado);

    pregunta.opciones.forEach(function (textoOpcion, posicion) {
      const botonOpcion = document.createElement("button");
      botonOpcion.className = "opcion";
      botonOpcion.textContent = textoOpcion;

      botonOpcion.addEventListener("click", function () {
        responderPregunta(caja, pregunta, posicion);
      });

      caja.appendChild(botonOpcion);
    });

    contenedor.appendChild(caja);
  });
}

function iniciarPagina() {
  crearRedInteractiva();
  crearBotonesFiltroTiempo();
  mostrarHechosPorTema("todos");
  crearCuestionario();
}

iniciarPagina();
