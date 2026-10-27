// Funciones interactivas de OruroXplore
let idiomaActual = 'es';

const textosEN = new Map([
['Inicio','Home'],['Mapa','Map'],['Lugares','Places'],['Turismo con Leo Tours','Tourism with Leo Tours'],['Historia','History'],
['Descubre los lugares turísticos de Oruro.','Discover Oruro’s tourist destinations.'],['Naturaleza · Historia · Turismo','Nature · History · Tourism'],['VER MAPA DE ORURO','VIEW ORURO MAP'],
['Mapa turístico de Oruro','Oruro Tourist Map'],['Explora la ciudad de Oruro y ubica algunos de sus principales atractivos turísticos.','Explore the city of Oruro and locate some of its main tourist attractions.'],['📍 Mapa de Oruro','📍 Map of Oruro'],['Selecciona un lugar turístico para ubicarlo en el mapa:','Select a tourist destination to locate it on the map:'],
['El mapa se actualizará con la ubicación que selecciones. Comprueba el punto que muestra Google Maps para cada lugar.','The map will update to the location you select. Check the point shown by Google Maps for each destination.'],['Nota:','Note:'],['El mapa interactivo necesita internet. Sin conexión, esta página seguirá mostrando las tarjetas y descripciones, pero no cargará Google Maps.','The interactive map requires an internet connection. Offline, this page will still show the cards and descriptions, but Google Maps will not load.'],
['Oruro se encuentra en el altiplano boliviano y cuenta con atractivos culturales, históricos y naturales. Selecciona el botón para conocer algunos de ellos.','Oruro is located in the Bolivian Altiplano and offers historical, natural and other attractions. Select a button to explore some of them.'],['📍 Explora los lugares de Oruro:','📍 Explore places in Oruro:'],['Consultar rutas y reservas por WhatsApp','Ask about tours and bookings on WhatsApp'],
['Lugares turísticos','Tourist destinations'],['Explora los lugares turísticos de Oruro organizados por categorías.','Explore Oruro’s tourist destinations, organized by category.'],['Todos','All'],['Naturaleza','Nature'],['Historia y patrimonio','History and heritage'],['Lugares para consultar con Leo Tours','Places to ask Leo Tours about'],
['NATURALEZA','NATURE'],['RELIGIÓN E HISTORIA','RELIGION AND HISTORY'],['HISTORIA Y PATRIMONIO','HISTORY AND HERITAGE'],['RELIGIÓN E HISTORIA','RELIGION AND HISTORY'],
['Parque Nacional Sajama','Sajama National Park'],['Monumento a la Virgen del Socavón','Monument to the Virgin of Socavón'],['Aguas termales de Obrajes','Obrajes Hot Springs'],['Plaza 10 de Febrero','February 10 Square'],['Lago Uru Uru','Lake Uru Uru'],['Mina San José','San José Mine'],['Faro de Conchupata','Conchupata Lighthouse'],['Santuario del Socavón','Socavón Sanctuary'],['Museo Mineralógico del Socavón','Socavón Mineralogical Museum'],['Salar de Coipasa','Coipasa Salt Flat'],['Balneario de Cachapa','Cachapa Hot Springs'],['Balneario de Capachos','Capachos Hot Springs'],['Templo de Curahuara de Carangas','Temple of Curahuara de Carangas'],['Formaciones rocosas de Pumiri','Pumiri Rock Formations'],['Basílica Menor de Nuestra Señora del Socavón','Minor Basilica of Our Lady of Socavón'],
['ORURO','ORURO'],['(10 DE FEBRERO)','(FEBRUARY 10)'],['TRADICIÓN Y CULTURA','TRADITION AND CULTURE'],['Un destino del altiplano boliviano','A destination in the Bolivian Altiplano'],['Historia · Folklore · Naturaleza','History · Folklore · Nature'],['Historia de Oruro','History of Oruro'],['Un recorrido por la historia de la ciudad y del departamento.','A journey through the history of the city and the department.'],['Carnaval de Oruro','Oruro Carnival'],['Danzas del Carnaval de Oruro','Dances of the Oruro Carnival'],['Disfruta algunos videos de la Diablada, la Morenada y los Caporales. Pulsa «Ver en grande» para ampliar cada video.','Watch videos of La Diablada, Morenada and Caporales. Select “Enlarge video” to view each video in a larger window.'],['La Diablada','La Diablada'],['Morenada','Morenada'],['Caporales','Caporales'],['¿Qué representa y cómo surgió?','What does it represent, and how did it begin?'],['Ver más','Read more'],['Ver menos','Read less'],['Ver en grande ⛶','Enlarge video ⛶'],['Los videos se reproducen desde YouTube; se necesita conexión a internet. El contenido y la disponibilidad dependen de sus respectivos canales. Para las reseñas históricas se consultaron el Archivo de Folklore Boliviano, la Cámara de Diputados de Bolivia, la Fraternidad Morenada Central Oruro y el periódico La Patria.','The videos play from YouTube and require an internet connection. Their content and availability depend on their respective channels. Historical summaries consulted the Bolivian Folklore Archive, the Bolivian Chamber of Deputies, Fraternidad Morenada Central Oruro and the newspaper La Patria.'],['Fotografía del Carnaval de Oruro proporcionada para este proyecto.','Oruro Carnival photograph provided for this project.'],
['Conoce y contacta a Leo Tours','Discover and contact Leo Tours'],['Conoce la propuesta turística de Leo Tours y consulta sobre recorridos por Oruro.','Learn about Leo Tours and ask about tours around Oruro.'],['AGENCIA DE TURISMO','TOUR OPERATOR'],['OruroXplore presenta a Leo Tours como una opción para orientar a visitantes interesados en conocer los lugares turísticos de Oruro.','OruroXplore presents Leo Tours as an option for visitors seeking guidance about Oruro’s tourist destinations.'],['Celular de contacto','Contact phone'],['Dirección','Location'],['Referencia: zona entre las calles Quintana y Arce, sector San Felipe, Oruro.','Reference: the area between Quintana and Arce streets, San Felipe district, Oruro.'],['Consultar por WhatsApp','Contact via WhatsApp'],['BUSCAR EN GOOGLE MAPS','SEARCH ON GOOGLE MAPS'],['Ubicación referencial de Leo Tours','Approximate location of Leo Tours'],['Entre Quintana y Arce, zona San Felipe, Oruro','Between Quintana and Arce streets, San Felipe district, Oruro'],['Página informativa de los lugares turísticos de Oruro','Information website about tourist destinations in Oruro'],['Oruro · Bolivia','Oruro · Bolivia'],['OruroXplore × Operadora de turismo Leo Tours','OruroXplore × Leo Tours Tour Operator'],['Proyecto educativo · Promo 2026','Educational project · Class of 2026'],['✕ Cerrar','✕ Close'],['Video del Carnaval','Carnival video'],['FESTIVIDAD ANUAL','ANNUAL FESTIVAL'],['NATURALEZA','NATURE'],['Historia · Folklore · Naturaleza','History · Folklore · Nature']
]);

const descripcionesEN = {
'Parque Nacional Sajama': 'Sajama National Park is one of Bolivia’s most important protected natural areas. It is located in the department of Oruro, near the border with Chile. Established in 1939, it is considered the country’s first national park. Its main landmark is Mount Sajama, Bolivia’s highest mountain, at approximately 6,542 metres above sea level. The landscape includes high-altitude plains, queñua woodlands, wetlands, geysers and hot springs. Visitors may also see wildlife such as vicuñas, llamas and high-Andean birds. Nearby communities maintain livelihoods connected with livestock raising and local knowledge of the Altiplano. Because of the altitude and distance, plan ahead, check the weather and ask about transport, access and local guiding. The park is ideal for nature, photography and responsible adventure, while respecting the environment and local guidance.',
'Monumento a la Virgen del Socavón': 'The Monument to the Virgin of Socavón is one of the best-known tourist landmarks in Oruro. It stands on Santa Bárbara hill and depicts the Virgin Mary, whose devotion is important to the region’s religious life. Because of its height and location, the monument can be seen from different parts of the city, and the surrounding area offers panoramic views of the urban landscape and the Altiplano. It is closely connected with the Oruro Carnival, when many dance fraternities make a pilgrimage in honour of the Virgin. A visit offers a chance to appreciate the site’s religious significance and enjoy a different view of the city. Bring warm clothing, respect marked areas and check access conditions before visiting.',
'Aguas termales de Obrajes': 'Obrajes Hot Springs are a natural attraction near the city of Oruro. Their water comes from underground sources heated by geothermal processes, and the site is known for its naturally warm pools. It offers visitors a place to relax and enjoy the high-Andean landscape away from the busiest parts of the city. Water temperature, facilities and opening arrangements may vary, so it is best to confirm current conditions before travelling. Visitors should follow local rules, take care on wet surfaces and avoid leaving rubbish in the area. It can be included in a day trip around Oruro, depending on transport and available services.',
'Plaza 10 de Febrero': 'February 10 Square is one of the best-known central public spaces in Oruro. Its name commemorates the uprising of February 10, 1781, an important event in the region’s history during the colonial period. The square is a meeting place for residents and visitors, with buildings, shops and streets nearby that reveal everyday city life. It is a convenient starting point for a walking tour of the historic centre and a way to observe local architecture and public activity. On civic dates and during celebrations, it may host ceremonies and gatherings. Visitors can combine a stop here with nearby attractions while respecting public spaces and the people who use them.',
'Lago Uru Uru': 'Lake Uru Uru is part of Oruro’s high-altitude landscape and is connected to the region’s network of lakes and rivers. Its shores and waters can provide habitat for waterbirds, and the lake is linked to the environmental and economic life of nearby communities. Water levels and the appearance of the landscape can change with the season and climate. It is a place of interest for landscape photography and birdwatching when conditions allow. Visitors should avoid disturbing wildlife, follow local advice and take care around the shoreline, especially where ground conditions may be soft or wet.',
'Mina San José': 'San José Mine is one of the most representative sites in Oruro’s mining history. Mining deeply shaped the city’s growth, provided employment and contributed to the development of neighbourhoods and local traditions. The mine is part of the story of generations of workers whose labour helped define Oruro’s identity. A visit or a view of the area can help visitors understand the importance of mineral extraction to the region. Because active or former mining sites may involve restricted areas and safety risks, visitors should not enter without permission and should follow local instructions.',
'Faro de Conchupata': 'Conchupata Lighthouse is a historic and civic landmark in Oruro, associated with one of Bolivia’s most important national symbols: the tricolour flag. Local historical accounts state that the Bolivian flag was raised here in an important ceremony in 1851. The site is a reminder of the city’s place in national history and offers visitors an opportunity to learn about the symbolism of the flag. It can be included in a city walk alongside nearby squares and historic locations. Visitors should respect the site and check for any access restrictions or activities taking place.',
'Santuario del Socavón': 'The Socavón Sanctuary is one of Oruro’s most important religious sites because of its connection to devotion to the Virgin of Socavón. It welcomes worshippers throughout the year and becomes especially significant during the Oruro Carnival, when dance fraternities and performers make a pilgrimage as an expression of faith. Inside, visitors can experience a place of prayer and learn about its meaning for many local families. The sanctuary also helps explain the links between faith, mining traditions and Carnival dances in local history. Visitors should behave respectfully, follow instructions and ask whether photography or access to certain areas is restricted.',
'Museo Mineralógico del Socavón': 'The Socavón Mineralogical Museum is connected with the mining history that shaped Oruro’s development. A visit can introduce visitors to mineral samples and the geological features that made the region an important mining centre. The specimens show a variety of colours, shapes and textures and help explain the mineral wealth beneath the Altiplano. This subject is also connected to generations of mine workers and to the city’s economic and urban growth. For students, families and people interested in geology, the museum can offer an educational way to learn about the department’s natural resources. Opening hours and access arrangements can change, so confirm whether it is open before visiting.',
'Salar de Coipasa': 'Coipasa Salt Flat is a vast salt plain in the southwest of the department of Oruro, near the border with Chile. Its white surface, open horizon and contrasts with the sky create striking landscapes, especially when weather and light conditions are favourable. The salt flat is part of the Altiplano’s distinctive natural environment and can be of interest to photographers and travellers seeking wide, quiet landscapes. Conditions may change with the season, and some routes require planning and suitable transport. Visitors should check local access advice, respect the fragile environment and avoid travelling onto the salt surface without reliable guidance.',
'Balneario de Cachapa': 'Cachapa bathing resort is included in this guide as a place to ask about when planning a visit to tourist destinations in Oruro. Detailed information about its exact location, facilities and operating hours should be confirmed with local sources before travelling. If you plan to visit, check road conditions, transport options and whether the site is open to the public. As with any natural or recreational area, follow local instructions and leave the surroundings clean.',
'Balneario de Capachos': 'Capachos Hot Springs are known for their thermal waters and are located a short distance from the city of Oruro, along the road toward Cochabamba. They offer an option for visitors who want to relax outside the city and enjoy a recreational outing. Facilities, opening hours and water conditions can change, so confirm current information before travelling. Bring suitable clothing, take care on wet surfaces and follow the rules posted at the site. Depending on transport and availability, the hot springs may be combined with other nearby destinations.',
'Templo de Curahuara de Carangas': 'The Temple of Curahuara de Carangas is one of the department of Oruro’s notable historic and religious sites. It is known for its old mural paintings, which cover parts of the walls and depict religious scenes. Because of its artistic and historical value, the temple is sometimes described as an important colonial-era heritage site in the region. Its setting also offers visitors a glimpse of the communities and landscapes of the high plateau. Visitors should respect the religious space and ask about photography rules, opening times and access before planning a trip.',
'Formaciones rocosas de Pumiri': 'Pumiri is known for its rock formations and high-Andean scenery, creating a distinctive landscape for visitors interested in the natural environment of Oruro. The rocks have been shaped over long periods by natural processes, and their unusual forms stand out against the surrounding plateau. The area can appeal to hikers, photographers and travellers looking for geological features and open landscapes. Access conditions and services may be limited, so plan transport carefully, ask for local guidance and bring water and weather-appropriate clothing. Please avoid damaging the formations or leaving rubbish behind.',
'Basílica Menor de Nuestra Señora del Socavón': 'The Minor Basilica of Our Lady of Socavón is one of Oruro’s most important churches and is closely linked to devotion to the Virgin of Socavón. The church welcomes pilgrims and visitors throughout the year, especially during the Oruro Carnival, when dancers arrive to pay tribute to the Virgin. Its religious and historical importance helps explain the connection between faith, local traditions and one of Bolivia’s best-known celebrations. Visitors should respect the sacred nature of the site and check current guidance about entry and photography.'
};

const historiaEN = [
'Oruro is a city in the Bolivian Altiplano whose history is closely linked to mining, trade and the lives of its residents. It was founded on November 1, 1606, under the name Villa de San Felipe de Austria, during the Spanish colonial period. The discovery and exploitation of mineral deposits helped the settlement grow and attracted workers and traders from different areas. Over time, Oruro became an important mining and commercial centre, while its communities developed traditions that remain part of the city’s identity.',
'One of the most important events in its history took place on February 10, 1781, when residents of Oruro took part in an uprising against colonial authorities. This event remains part of the region’s historical memory and is commemorated in the name of the city’s central square. Oruro’s past also reflects the wider history of the Bolivian highlands, including mining, social change and the formation of local communities.',
'Oruro’s identity can be seen in its historic places, in the connection many families have with mining, and in music, dances and traditions passed from one generation to the next. Its natural surroundings—high-Andean plains, lakes, mountains and salt flats—add to the region’s history and offer different ways to explore the department. Today, Oruro is known in Bolivia and abroad for its history, landscapes and, especially, the Oruro Carnival.'
];
const carnivalEN = 'The Oruro Carnival is one of Bolivia’s best-known festivals and an important expression of the identity of the people of Oruro. It takes place every year, mainly in the days before the beginning of Lent, bringing together dance fraternities, musicians, artisans and visitors from across Bolivia and abroad. The celebration is linked to devotion to the Virgin of Socavón and combines Andean traditions with expressions of Catholic faith. Its best-known dances include La Diablada, Morenada, Caporales, Tobas and others, each distinguished by choreography, masks, embroidery and elaborate costumes. Preparing costumes and music requires months of work and helps pass skills from one generation to the next. In 2001, UNESCO proclaimed the Oruro Carnival a Masterpiece of the Oral and Intangible Heritage of Humanity; in 2008, it was included on the Representative List of the Intangible Cultural Heritage of Humanity. More than a spectacle, it is a celebration that brings the community together and expresses Oruro’s history, devotion and creativity.';
const dancesEN = [
'What does it represent, and how did it begin? La Diablada is one of the most emblematic dances of the Oruro Carnival. It depicts the struggle between good and evil: the Archangel Michael confronts Lucifer and the seven deadly sins. Over time, the dance became deeply connected with devotion to the Virgin of Socavón and with Oruro’s mining traditions. Researchers do not agree on a single date of origin; historical accounts connect it with religious practices from the colonial period.',
'What does it represent, and how did it begin? Morenada is associated with the memory of African people who were forcibly brought to the region during the colonial period and subjected to slavery. One widely shared interpretation connects its characters and movements with forced labour and the suffering of enslaved people. Aymara communities are also recognised as having played a role in the dance’s development. Its costumes, masks, measured steps and distinctive music have made it one of the most representative expressions of the Oruro Carnival. Studies offer different explanations for its origins, so no single theory should be treated as definitive.',
'What does it represent, and how did it begin? Caporales emerged in Bolivia in the late 1960s or early 1970s, inspired by the caporal, an overseer who exercised authority over Afro-Bolivian workers. Its roots are connected with Saya and with dances such as Negritos or Tundiqui, although researchers distinguish these traditions from one another. The modern version of Caporales is associated with the Estrada Pacheco brothers and is known for jumps, forceful footwork, bells and striking costumes. The dance later spread across Bolivia and to other countries and became part of the Oruro Carnival.'
];

function translateExact(el, es) {
  const current = el.textContent.trim();
  if (textosEN.has(current)) el.textContent = es ? current : textosEN.get(current);
  else {
    for (const [spanish, english] of textosEN) {
      if (current === english) { if (es) el.textContent = spanish; return; }
    }
  }
}
function cambiarIdioma() {
  idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
  const es = idiomaActual === 'es';
  document.documentElement.lang = idiomaActual;
  const boton = document.getElementById('botonIdioma');
  if (boton) boton.textContent = es ? 'English' : 'Español';
  document.title = es ? 'OruroXplore - Turismo en Oruro' : 'OruroXplore - Tourism in Oruro';

  // Translate all standalone visible labels while preserving layout and interactive elements.
  document.querySelectorAll('nav a, .borde, .inicio p, .inicio .boton, #mapa h2, #mapa .titulo p, #mapa h3, #mapa .lugares-mapa p, #mapa .boton-lugar, #descripcionDepartamento, .boton-whatsapp-mapa, #lugares h2, #lugares .titulo p, .filtro-categoria, .etiqueta, .card h3, .boton-ver-mas, .aniversario-seccion h1, .aniversario-seccion h2, .aniversario-seccion p, #tituloModalVideo, #historia h2, #historia .titulo p, #historia h3, #historia h4, #historia .galeria-carnaval p, .boton-ampliar-video, .nota-videos, .credito-imagen, #leo-tours h2, #leo-tours .titulo p, .leo-etiqueta, .ubicacion-texto h3, .ubicacion-texto p, .dato-contacto strong, .boton-whatsapp, .boton-mapa, .leo-mapa-titulo strong, .leo-mapa-titulo p, footer p, footer strong, .cerrar-modal-video').forEach(el => {
    if (el.matches('.boton-lugar')) {
      const esName = el.dataset.esLabel || el.textContent.trim();
      const enName = textosEN.get(esName) || esName;
      el.textContent = es ? esName : enName;
      el.dataset.esLabel = esName;
    } else translateExact(el, es);
  });

  // Translate the full long-form text of every tourist place.
  document.querySelectorAll('#lugares .card').forEach(card => {
    const heading = card.querySelector('h3');
    const desc = card.querySelector('.descripcion');
    if (!heading || !desc) return;
    const nameEs = [...textosEN.entries()].find(([s,e]) => s === heading.textContent.trim() || e === heading.textContent.trim());
    const esName = nameEs ? nameEs[0] : heading.textContent.trim();
    const english = descripcionesEN[esName];
    if (!desc.dataset.spanishText) desc.dataset.spanishText = desc.textContent.trim();
    if (english) desc.textContent = es ? desc.dataset.spanishText : english;
    const engHeading = textosEN.get(esName) || esName;
    heading.textContent = es ? esName : engHeading;
    const label = card.querySelector('.etiqueta');
    if (label) {
      const pair = textosEN.get(label.textContent.trim());
      if (pair) label.textContent = es ? label.textContent.trim() : pair;
      else if (label.textContent.trim() === 'HISTORIA Y PATRIMONIO') label.textContent = es ? 'HISTORIA Y PATRIMONIO' : 'HISTORY AND HERITAGE';
    }
  });

  // Full histories and dance descriptions, translated without removing their controls.
  const historyParagraphs = document.querySelectorAll('.historia-contenido p');
  historyParagraphs.forEach((el,i) => {
    if (i < historiaEN.length) {
      if (!el.dataset.spanishText) el.dataset.spanishText = el.textContent.trim();
      el.textContent = es ? el.dataset.spanishText : historiaEN[i];
    }
  });
  const carnivalDesc = document.querySelector('.carnaval-texto .descripcion');
  if (carnivalDesc) {
    if (!carnivalDesc.dataset.spanishText) carnivalDesc.dataset.spanishText = carnivalDesc.textContent.trim();
    carnivalDesc.textContent = es ? carnivalDesc.dataset.spanishText : carnivalEN;
  }
  document.querySelectorAll('.historia-danza').forEach((el,i) => {
    if (!el.dataset.spanishHtml) el.dataset.spanishHtml = el.innerHTML;
    if (es) el.innerHTML = el.dataset.spanishHtml;
    else el.textContent = dancesEN[i] || el.textContent;
  });

  const mapNotes = document.querySelectorAll('#mapa .nota-mapa');
  if (mapNotes[1]) {
    if (!mapNotes[1].dataset.spanishHtml) mapNotes[1].dataset.spanishHtml = mapNotes[1].innerHTML;
    mapNotes[1].innerHTML = es ? mapNotes[1].dataset.spanishHtml : '<strong>Note:</strong> The interactive map requires an internet connection. Offline, this page will still display its cards and descriptions, but Google Maps will not load.';
  }
  // Translate the footer paragraph that contains a line break.
  const footerIdentity = document.querySelector('footer p:nth-of-type(3)');
  if (footerIdentity) {
    if (!footerIdentity.dataset.spanishHtml) footerIdentity.dataset.spanishHtml = footerIdentity.innerHTML;
    footerIdentity.innerHTML = es ? footerIdentity.dataset.spanishHtml : 'Oruro · Bolivia<br>OruroXplore × Leo Tours Tour Operator';
  }
  // Translate the mixed-content place list while preserving its line breaks.
  const instruction = document.querySelector('.instruccion');
  if (instruction) {
    if (!instruction.dataset.spanishHtml) instruction.dataset.spanishHtml = instruction.innerHTML;
    if (es) instruction.innerHTML = instruction.dataset.spanishHtml;
    else instruction.innerHTML = '📍 Explore places in Oruro:<br><br>Sajama National Park · Monument to the Virgin of Socavón · Obrajes Hot Springs · February 10 Square · Lake Uru Uru · San José Mine · Conchupata Lighthouse · Socavón Sanctuary · Socavón Mineralogical Museum · Coipasa Salt Flat · Cachapa Hot Springs · Capachos Hot Springs · Temple of Curahuara de Carangas · Pumiri Rock Formations · Minor Basilica of Our Lady of Socavón';
  }
  // Make map buttons display English names while keeping their Spanish location query available.
  document.querySelectorAll('.boton-lugar').forEach(el => {
    const esName = el.dataset.esLabel || el.textContent.trim();
    el.dataset.esLabel = esName;
    const english = textosEN.get(esName) || esName;
    el.dataset.placeEn = (el.dataset.placeEs || esName).replace(/Parque Nacional Sajama/g, 'Sajama National Park').replace(/Monumento Virgen del Socavón/g, 'Monument to the Virgin of Socavón').replace(/Aguas Termales de Obrajes/g, 'Obrajes Hot Springs').replace(/Plaza 10 de Febrero/g, 'February 10 Square').replace(/Lago Uru Uru/g, 'Lake Uru Uru').replace(/Mina San José/g, 'San José Mine').replace(/Faro de Conchupata/g, 'Conchupata Lighthouse').replace(/Santuario del Socavón/g, 'Socavón Sanctuary').replace(/Salar de Coipasa/g, 'Coipasa Salt Flat').replace(/Balneario de Cachapa/g, 'Cachapa Hot Springs').replace(/Balneario de Capachos/g, 'Capachos Hot Springs').replace(/Templo de Curahuara de Carangas/g, 'Temple of Curahuara de Carangas').replace(/Pumiri, Turco/g, 'Pumiri, Turco').replace(/Formaciones rocosas de Pumiri/g, 'Pumiri Rock Formations').replace(/Museo Mineralógico del Socavón/g, 'Socavón Mineralogical Museum').replace(/Basílica Menor de Nuestra Señora del Socavón/g, 'Minor Basilica of Our Lady of Socavón');
    el.textContent = es ? esName : english;
  });

  // Translate map controls and request the embedded Google Maps interface in the selected language.
  const map = document.getElementById('mapaOruro');
  if (map) {
    const u = new URL(map.src);
    u.searchParams.set('hl', es ? 'es' : 'en');
    map.src = u.toString();
    map.title = es ? 'Mapa interactivo de lugares turísticos de Oruro' : 'Interactive map of tourist destinations in Oruro';
  }
  const mapLeo = document.querySelector('.mapa-leo');
  if (mapLeo) {
    const u = new URL(mapLeo.src); u.searchParams.set('hl', es ? 'es' : 'en'); mapLeo.src = u.toString();
    mapLeo.title = es ? 'Mapa de referencia de la ciudad de Oruro' : 'Reference map of Oruro city';
  }
  const infoTitle = document.getElementById('tituloDepartamento');
  if (infoTitle && infoTitle.textContent.trim() === 'Map of Oruro') infoTitle.textContent = 'Oruro';
  if (infoTitle && infoTitle.textContent.trim() === 'Oruro' && !es) infoTitle.textContent = 'Oruro';
  const descDept = document.getElementById('descripcionDepartamento');
  if (descDept) descDept.textContent = es ? 'Oruro se encuentra en el altiplano boliviano y cuenta con atractivos culturales, históricos y naturales. Selecciona el botón para conocer algunos de ellos.' : 'Oruro is located in the Bolivian Altiplano and offers historical, natural and other attractions. Select a button to explore some of them.';
  // The location search uses the proper place name; Google Maps interface language follows the page language.
}

function filtrarCategoria(categoria) {
  const contenedor = document.querySelector('#lugares .cards');
  if (!contenedor) return;
  contenedor.querySelectorAll(':scope > .card').forEach(card => {
    if (categoria === 'rutas') card.hidden = card.dataset.ruta !== 'leo';
    else card.hidden = categoria !== 'todos' && card.dataset.categoria !== categoria;
  });
  document.querySelectorAll('.filtro-categoria').forEach(btn => {
    const activo = btn.dataset.categoria === categoria;
    btn.classList.toggle('activo', activo);
    btn.setAttribute('aria-pressed', String(activo));
  });
}
function ampliarVideo(id, titulo) {
  const modal = document.getElementById('modalVideo');
  const contenedor = document.getElementById('contenedorVideoAmpliado');
  const tituloModal = document.getElementById('tituloModalVideo');
  if (!modal || !contenedor) return;
  tituloModal.textContent = titulo || (idiomaActual === 'en' ? 'Carnival video' : 'Video del Carnaval');
  contenedor.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1' + (idiomaActual === 'en' ? '&hl=en' : '&hl=es') + '" title="' + String(titulo || 'Carnival video').replace(/[&<>"']/g, '') + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
  modal.classList.add('abierto'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function cerrarVideo() {
  const modal=document.getElementById('modalVideo'), contenedor=document.getElementById('contenedorVideoAmpliado');
  if (!modal || !contenedor) return;
  modal.classList.remove('abierto'); modal.setAttribute('aria-hidden','true'); contenedor.innerHTML=''; document.body.style.overflow='';
}
function ubicarLugar(lugar) {
  const mapa=document.getElementById('mapaOruro'); if (!mapa) return;
  const u = new URL('https://maps.google.com/maps');
  u.searchParams.set('q', lugar); u.searchParams.set('t','k'); u.searchParams.set('z','14'); u.searchParams.set('output','embed'); u.searchParams.set('hl', idiomaActual === 'en' ? 'en' : 'es');
  mapa.src=u.toString();
  const titulo=document.getElementById('tituloDepartamento'), descripcion=document.getElementById('descripcionDepartamento');
  const nombre=lugar.split(',')[0];
  const translated=[...textosEN.entries()].find(([s,e])=>s===nombre || e===nombre);
  if (titulo) titulo.textContent=idiomaActual==='en' && translated ? translated[1] : nombre;
  if (descripcion) descripcion.textContent=idiomaActual==='en' ? 'You are viewing the location of ' + (translated?translated[1]:nombre) + '. The map requires an internet connection and may show an approximate point.' : 'Estás consultando la ubicación de ' + nombre + '. El mapa necesita conexión a internet y puede mostrar un punto aproximado.';
}
function verMas(boton) {
  const danza=boton.closest('.video-carnaval-info'); const tarjeta=boton.closest('.card, .carnaval-panel'); const contenedor=danza||tarjeta;
  if (!contenedor) return;
  const descripcion=danza?contenedor.querySelector('.historia-danza'):contenedor.querySelector('.descripcion');
  const expandida=boton.getAttribute('aria-expanded')==='true'; boton.setAttribute('aria-expanded',String(!expandida));
  boton.textContent=expandida?(idiomaActual==='en'?'Read more':'Ver más'):(idiomaActual==='en'?'Read less':'Ver menos');
  if (descripcion) descripcion.classList.toggle('expandir',!expandida);
  if (tarjeta) tarjeta.classList.toggle('card-expandida',!expandida);
}
function mostrarAyudaContacto() {
  const ayuda=document.getElementById('ayudaContacto'), boton=document.getElementById('botonDatos'); if (!ayuda) return;
  ayuda.hidden=!ayuda.hidden; if (boton) boton.textContent=ayuda.hidden?(idiomaActual==='en'?'How to complete the details?':'¿Cómo completar los datos?'):(idiomaActual==='en'?'Hide instructions':'Ocultar indicaciones');
}
document.addEventListener('DOMContentLoaded',function(){
  filtrarCategoria('todos');
  const sections=document.querySelectorAll('section');
  if ('IntersectionObserver' in window) { const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('seccion-visible');observer.unobserve(entry.target);}}),{threshold:0.08}); sections.forEach(section=>{section.classList.add('seccion-entrada');observer.observe(section);}); }
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')cerrarVideo();});
document.addEventListener('click',e=>{const modal=document.getElementById('modalVideo');if(modal&&e.target===modal)cerrarVideo();});
