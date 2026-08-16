// STATE_INFO comes with a short "eye-catchy" blurb and an image path for
// each state/UT. Keyed by the same `id` used in mapdata.js.
//
// IMAGES: drop your own picture into the /images folder using the exact
// file name shown below (e.g. images/rajasthan.jpg). If a file is missing,
// the panel just shows a soft placeholder instead of a broken image icon,
// so you can fill these in gradually  nothing breaks in the meantime.

const STATE_INFO = {
  "andaman-and-nicobar-islands": {
    image: "images/andaman-and-nicobar-islands.jpg",
    blurb: "Capital: Port Blair. A scatter of emerald islands in the Bay of Bengal, famous for the Cellular Jail, powder-white Radhanagar Beach, and some of India's best coral reefs and scuba diving."
  },
  "andhra-pradesh": {
    image: "images/andhra-pradesh.jpg",
    blurb: "Capital: Amaravati. Home to the hilltop Tirupati Balaji temple, one of the world's most visited pilgrimage sites, plus the beaches of Visakhapatnam and fiery, flavour-packed Andhra cuisine."
  },
  "arunachal-pradesh": {
    image: "images/arunachal-pradesh.jpg",
    blurb: "Capital: Itanagar. India's easternmost frontier, wrapped in Himalayan peaks. Known for the stunning Tawang Monastery, dramatic mountain passes like Sela, and rare orchids found nowhere else."
  },
  "assam": {
    image: "images/assam.jpg",
    blurb: "Capital: Dispur. The gateway to the Northeast, famous for Kaziranga National Park's one-horned rhinos, endless tea gardens, and the riverside Kamakhya Temple in Guwahati."
  },
  "bihar": {
    image: "images/bihar.jpg",
    blurb: "Capital: Patna. A cradle of ancient learning and faith  Bodh Gaya's Mahabodhi Temple marks where the Buddha attained enlightenment, alongside the ruins of the ancient Nalanda university."
  },
  "chandigarh": {
    image: "images/chandigarh.jpg",
    blurb: "The shared capital of Punjab and Haryana, and India's first fully planned city. Known for Le Corbusier's bold architecture, the quirky Rock Garden, and the calm Sukhna Lake."
  },
  "chhattisgarh": {
    image: "images/chhattisgarh.jpg",
    blurb: "Capital: Raipur. A land of dense forests, tribal culture, and cascading waterfalls like Chitrakoot  often called the 'Niagara of India'  plus the ancient temples of Bastar."
  },
  "dadra-and-nagar-haveli-and-daman-and-diu": {
    image: "images/dadra-and-nagar-haveli-and-daman-and-diu.jpg",
    blurb: "A small coastal union territory carrying its Portuguese-era past in whitewashed churches, old forts, and breezy beaches like those at Diu, alongside India's tallest suspension bridge."
  },
  "delhi": {
    image: "images/delhi.jpg",
    blurb: "India's capital, where Mughal grandeur meets modern government. Famous for the Red Fort, Qutub Minar, India Gate, and Humayun's Tomb  layers of history in a single city."
  },
  "goa": {
    image: "images/goa.jpg",
    blurb: "Capital: Panaji. India's smallest state, beloved for sun-soaked beaches, whitewashed Portuguese churches like the Basilica of Bom Jesus, buzzing beach shacks, and an easy-going coastal vibe."
  },
  "gujarat": {
    image: "images/gujarat.jpg",
    blurb: "Capital: Gandhinagar. Home to the otherworldly white salt desert of the Rann of Kutch, the towering Statue of Unity, Gandhi's Sabarmati Ashram, and the ancient Somnath Temple."
  },
  "haryana": {
    image: "images/haryana.jpg",
    blurb: "Shares its capital, Chandigarh, with Punjab. Known as the site of the epic battle of Kurukshetra, fertile farmland, and Gurugram  one of India's fastest-growing business hubs."
  },
  "himachal-pradesh": {
    image: "images/himachal-pradesh.jpg",
    blurb: "Capital: Shimla. A Himalayan playground of pine-covered hill stations, snow passes like Rohtang, the backpacker haven of Manali, and apple orchards spread across every mountainside."
  },
  "jammu-and-kashmir": {
    image: "images/jammu-and-kashmir.jpg",
    blurb: "Summer capital Srinagar, winter capital Jammu. Famed for the houseboats of Dal Lake, the meadows of Gulmarg, and the pilgrimage to Vaishno Devi often called 'paradise on earth'."
  },
  "jharkhand": {
    image: "images/jharkhand.jpg",
    blurb: "Capital: Ranchi. A mineral-rich plateau state known for waterfalls like Hundru Falls, the sacred Baidyanath Dham temple, and thick forests that are home to diverse tribal communities."
  },
  "karnataka": {
    image: "images/karnataka.jpg",
    blurb: "Capital: Bengaluru. India's tech capital by day, but also home to the regal Mysore Palace, the ruined temple city of Hampi, and lush Western Ghats coffee country."
  },
  "kerala": {
    image: "images/kerala.jpg",
    blurb: "Capital: Thiruvananthapuram. 'God's Own Country'  a maze of gentle backwaters, misty tea hills in Munnar, spice plantations, and the dramatic, mask-like Kathakali dance form."
  },
  "ladakh": {
    image: "images/ladakh.jpg",
    blurb: "Capital: Leh. A stark, high-altitude Himalayan desert dotted with ancient Buddhist monasteries, the surreal blue of Pangong Lake, and some of the world's highest motorable passes."
  },
  "lakshadweep": {
    image: "images/lakshadweep.jpg",
    blurb: "Capital: Kavaratti. India's tiniest union territory, made up of coral atolls and turquoise lagoons in the Arabian Sea  a quiet paradise for divers and beach lovers."
  },
  "madhya-pradesh": {
    image: "images/madhya-pradesh.jpg",
    blurb: "Capital: Bhopal, the 'heart of India'. Home to the intricately carved Khajuraho temples, the ancient Buddhist Sanchi Stupa, and tiger reserves like Kanha and Bandhavgarh."
  },
  "maharashtra": {
    image: "images/maharashtra.jpg",
    blurb: "Capital: Mumbai, India's financial and film capital. Known for the Gateway of India, the UNESCO-listed Ajanta and Ellora cave temples, and the glamour of Bollywood."
  },
  "manipur": {
    image: "images/manipur.jpg",
    blurb: "Capital: Imphal. Famous for Loktak Lake, dotted with unique floating islands called phumdis, and the graceful, swirling movements of classical Manipuri dance."
  },
  "meghalaya": {
    image: "images/meghalaya.jpg",
    blurb: "Capital: Shillong. The 'abode of clouds'  famous for living root bridges grown from rubber tree roots, and Cherrapunji, among the wettest places on Earth."
  },
  "mizoram": {
    image: "images/mizoram.jpg",
    blurb: "Capital: Aizawl. A state of rolling green hills and bamboo forests, known for the colourful Chapchar Kut spring festival and its warm, close-knit hill communities."
  },
  "nagaland": {
    image: "images/nagaland.jpg",
    blurb: "Capital: Kohima. Renowned for the vibrant Hornbill Festival celebrating its many tribes, rich handwoven textiles, and dramatic terraced hillsides."
  },
  "odisha": {
    image: "images/odisha.jpg",
    blurb: "Capital: Bhubaneswar. Home to the chariot-shaped Konark Sun Temple, the revered Jagannath Temple in Puri, and Chilika Lake, Asia's largest brackish water lagoon."
  },
  "puducherry": {
    image: "images/puducherry.jpg",
    blurb: "A former French colony on the Bay of Bengal, known for the pastel-hued streets of its French Quarter, the seafront promenade, and the experimental township of Auroville."
  },
  "punjab": {
    image: "images/punjab.jpg",
    blurb: "Shares its capital, Chandigarh, with Haryana. Home to the shimmering Golden Temple in Amritsar, the electric evening ceremony at the Wagah Border, and endless golden wheat fields."
  },
  "rajasthan": {
    image: "images/rajasthan.jpg",
    blurb: "Capital: Jaipur, the 'Pink City'. The land of maharajas think hilltop forts, mirrored palaces like Amber Fort and City Palace, camel safaris, and the golden dunes of the Thar Desert."
  },
  "sikkim": {
    image: "images/sikkim.jpg",
    blurb: "Capital: Gangtok. A tiny, tidy Himalayan state with sweeping views of Kanchenjunga, colourful Buddhist monasteries, and India's first fully organic farming state status."
  },
  "tamil-nadu": {
    image: "images/tamil-nadu.jpg",
    blurb: "Capital: Chennai. Known for towering temple gopurams like Madurai's Meenakshi Temple, the long sweep of Marina Beach, and the classical grace of Bharatanatyam dance."
  },
  "telangana": {
    image: "images/telangana.jpg",
    blurb: "Capital: Hyderabad. Famous for the iconic Charminar, the imposing Golconda Fort, and, of course, richly spiced Hyderabadi biryani that draws food lovers from everywhere."
  },
  "tripura": {
    image: "images/tripura.jpg",
    blurb: "Capital: Agartala. Known for the palatial Ujjayanta Palace and the lake-set Neermahal, a 'palace in water' that blends Hindu and Mughal architecture."
  },
  "uttar-pradesh": {
    image: "images/uttar-pradesh.jpg",
    blurb: "Capital: Lucknow. Home to the Taj Mahal in Agra, one of the Seven Wonders of the World, plus the ancient, sacred riverside ghats of Varanasi."
  },
  "uttarakhand": {
    image: "images/uttarakhand.jpg",
    blurb: "Capital: Dehradun. The gateway to the Char Dham Himalayan pilgrimage, the yoga capital Rishikesh on the Ganges, and the blooming Valley of Flowers."
  },
  "west-bengal": {
    image: "images/west-bengal.jpg",
    blurb: "Capital: Kolkata, India's cultural capital. Known for the grand Victoria Memorial, the tiger-roamed mangroves of the Sundarbans, and the citywide festivities of Durga Puja."
  }
};