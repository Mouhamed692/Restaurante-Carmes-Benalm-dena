
(function () {
  'use strict';

  const WHATSAPP_NUMBER = '34623534494';
  let currentLang = 'fr';
  let currentCategory = 'all';

  // State of the form
  let selectedTime = '20:30';
  let selectedSeating = 'terrace';

  // Data: Dishes
  const DISHES = [
    // 1. Entrées
    {
      id: 'tartare',
      category: 'starters',
      price: 22,
      image: './assets/aistudio/image_7240eba3.jpg',
      name: {
        fr: 'Steak Tartare au Couteau',
        en: 'Hand-Cut Beef Tartare',
        es: 'Steak Tartar Cortado a Cuchillo',
      },
      subtitle: {
        fr: 'Bistronomie Parisienne · Condiments Fins',
        en: 'Parisian Bistronomy · Fine Condiments',
        es: 'Bistronomía Parisina · Condimentos Finos',
      },
      description: {
        fr: 'Filet de bœuf taillé au couteau minute, câpres surfines, échalotes ciselées, moutarde à l’ancienne et brioche toastée au beurre demi-sel.',
        en: 'Prime beef tenderloin hand-cut to order with capers, shallots, whole-grain mustard, and toasted salted-butter brioche.',
        es: 'Solomillo de ternera cortado a cuchillo al momento, alcaparras, chalotas, mostaza a la antigua y brioche tostado con mantequilla.',
      },
      pairing: {
        fr: 'Sancerre Blanc ou Rioja Crianza',
        en: 'Sancerre Blanc or Rioja Crianza',
        es: 'Sancerre Blanc o Rioja Crianza',
      },
    },
    {
      id: 'soupe',
      category: 'starters',
      price: 19,
      image: './assets/aistudio/image_8636c49b.jpg',
      name: {
        fr: 'Soupe de Poissons & Crustacés de Méditerranée',
        en: 'Mediterranean Fish & Shellfish Velouté',
        es: 'Sopa de Pescados y Mariscos del Mediterráneo',
      },
      subtitle: {
        fr: 'Bouillabaisse Revisitée · Rouille Safranée',
        en: 'Reimagined Bouillabaisse · Saffron Rouille',
        es: 'Bullabesa Revisitada · Rouille de Azafrán',
      },
      description: {
        fr: 'Fumet corsé de poissons de roche et langoustines, rouille maison au safran d’Andalousie, croûtons aillés et zestes d’orange amère.',
        en: 'Rich rockfish and langoustine broth served with Andalusian saffron rouille, garlic croutons, and bitter orange zest.',
        es: 'Caldo intenso de pescados de roca y cigalas, rouille casera de azafrán andaluz, picatostes al ajo y ralladura de naranja amarga.',
      },
      pairing: {
        fr: 'Chablis 1er Cru ou Albariño',
        en: 'Chablis 1er Cru or Albariño',
        es: 'Chablis 1er Cru o Albariño',
      },
    },
    {
      id: 'scallops',
      category: 'starters',
      price: 24,
      image: './assets/aistudio/image_885cb48f.jpg',
      name: {
        fr: 'Noix de Saint-Jacques Poêlées',
        en: 'Pan-Seared Scallops',
        es: 'Vieiras Salteadas a la Sartén',
      },
      subtitle: {
        fr: 'Émulsion Champagne · Fleurs Comestibles',
        en: 'Champagne Emulsion · Edible Blossoms',
        es: 'Emulsión de Champagne · Flores Comestibles',
      },
      description: {
        fr: 'Saint-Jacques snackées à la nacre, beurre blanc léger au champagne brut, huile d’herbes fines et jeunes pousses.',
        en: 'Caramelized scallops with a delicate brut champagne beurre blanc, fine herb oil, and microgreens.',
        es: 'Vieiras doradas al punto, beurre blanc ligero de champagne brut, aceite de hierbas finas y brotes tiernos.',
      },
      pairing: {
        fr: 'Champagne Brut Réserve',
        en: 'Champagne Brut Réserve',
        es: 'Champagne Brut Réserve',
      },
    },

    // 2. Poissons & Mer
    {
      id: 'catch',
      category: 'sea',
      price: 32,
      image: './assets/aistudio/image_dc103544.jpg',
      name: {
        fr: 'Catch of the Day — Pêche de la Baie de Málaga',
        en: 'Catch of the Day — Málaga Bay Wild Fish',
        es: 'Pesca del Día — Bahía de Málaga',
      },
      subtitle: {
        fr: 'Beurre Blanc aux Agrumes · Asperges Blanches',
        en: 'Citrus Beurre Blanc · White Asparagus',
        es: 'Beurre Blanc de Cítricos · Espárragos Blancos',
      },
      description: {
        fr: 'Poisson sauvage sélectionné chaque matin à la criée, rôti sur peau, sublimé par un beurre blanc aux agrumes d’Andalousie et pois gourmands.',
        en: 'Wild-caught local fish selected daily, pan-roasted and glazed with an Andalusian citrus beurre blanc and sugar snap peas.',
        es: 'Pescado salvaje seleccionado cada mañana en la lonja, asado en su punto con beurre blanc de cítricos andaluces y tirabeques.',
      },
      pairing: {
        fr: 'Meursault ou Verdejo Sobre Lías',
        en: 'Meursault or Verdejo Sobre Lías',
        es: 'Meursault o Verdejo Sobre Lías',
      },
    },
    {
      id: 'salmon',
      category: 'sea',
      price: 29,
      image: './assets/aistudio/image_00afa11f.jpg',
      name: {
        fr: 'Pavé de Saumon Croustillant',
        en: 'Crispy-Skin Salmon Fillet',
        es: 'Lomo de Salmón Crujiente',
      },
      subtitle: {
        fr: 'Mousseline de Saison · Croquette Maison',
        en: 'Seasonal Mousseline · Artisan Croquette',
        es: 'Muselina de Temporada · Croqueta Artesanal',
      },
      description: {
        fr: 'Cœur de saumon cuit à basse température, peau dorée et croustillante, mousseline veloutée de céleri-rave et légumes primeurs.',
        en: 'Slow-cooked salmon heart with crisp golden skin, velvety celeriac mousseline, and spring vegetables.',
        es: 'Corazón de salmón cocinado a baja temperatura con piel crujiente, muselina suave de apionabo y verduras de temporada.',
      },
      pairing: {
        fr: 'Pouilly-Fumé ou Rosado de Navarra',
        en: 'Pouilly-Fumé or Rosado de Navarra',
        es: 'Pouilly-Fumé o Rosado de Navarra',
      },
    },

    // 3. Viandes & Terre
    {
      id: 'tournedos',
      category: 'land',
      price: 38,
      image: './assets/aistudio/image_b0a7f51f.jpg',
      name: {
        fr: 'Tournedos de Bœuf aux Morilles',
        en: 'Beef Tenderloin with Morel Jus',
        es: 'Tournedó de Solomillo con Colmenillas',
      },
      subtitle: {
        fr: 'Jus Corsé au Vin Rouge · Asperges de Saison',
        en: 'Rich Red Wine Reduction · Seasonal Asparagus',
        es: 'Jugo Intenso al Vino Tinto · Espárragos',
      },
      description: {
        fr: 'Cœur de filet de bœuf saisi au beurre clarifié, sauce réduite aux morilles sauvages et vin rouge de Rioja, garniture maraîchère.',
        en: 'Center-cut beef fillet seared in clarified butter, finished with wild morel and Rioja red wine reduction.',
        es: 'Centro de solomillo sellado en mantequilla clarificada, salsa reducida de colmenillas y vino tinto de Rioja.',
      },
      pairing: {
        fr: 'Ribera del Duero Reserva ou Pauillac',
        en: 'Ribera del Duero Reserva or Pauillac',
        es: 'Ribera del Duero Reserva or Pauillac',
      },
    },
    {
      id: 'duck',
      category: 'land',
      price: 31,
      image: './assets/aistudio/image_bbd7787f.jpg',
      name: {
        fr: 'Magret de Canard Rôti',
        en: 'Roasted Duck Breast',
        es: 'Magret de Pato Asado',
      },
      subtitle: {
        fr: 'Légumes Confits · Jus aux Épices Douces',
        en: 'Confit Vegetables · Spiced Jus',
        es: 'Verduras Confitadas · Jugo Especiado',
      },
      description: {
        fr: 'Magret de canard rosé à la perfection, peau laquée au miel de fleurs d’oranger, déclinaison de légumes confits et croquette croustillante.',
        en: 'Pink-roasted duck breast glazed with orange blossom honey, served with confit seasonal vegetables and crisp croquette.',
        es: 'Magret de pato rosado a la perfection, piel lacada con miel de azahar, verduras confitadas y croqueta crujiente.',
      },
      pairing: {
        fr: 'Priorat DOCa ou Châteauneuf-du-Pape',
        en: 'Priorat DOCa or Châteauneuf-du-Pape',
        es: 'Priorat DOCa o Châteauneuf-du-Pape',
      },
    },

    // 4. Accompagnements
    {
      id: 'asparagus',
      category: 'sides',
      price: 11,
      image: './assets/aistudio/image_98c1f1ad.jpg',
      name: {
        fr: 'Asperges Blanches & Vertes de Saison',
        en: 'Seasonal White & Green Asparagus',
        es: 'Espárragos Blancos y Verdes de Temporada',
      },
      subtitle: {
        fr: 'Beurre Noisette · Fleur de Sel de Cadix',
        en: 'Brown Butter · Cádiz Sea Salt Flakes',
        es: 'Mantequilla Avellana · Flor de Sal de Cádiz',
      },
      description: {
        fr: 'Pointes d’asperges blanches et vertes pochées puis glacées au beurre noisette, relevées d’une pointe de fleur de sel.',
        en: 'Tender white and green asparagus spears poached and glazed in nutty brown butter with Cádiz sea salt.',
        es: 'Yemas de espárragos blancos y verdes escalfadas y glaseadas en mantequilla avellana con flor de sal.',
      },
      pairing: {
        fr: 'Accompagnement idéal Poissons & Viandes',
        en: 'Ideal with Fish & Meat Mains',
        es: 'Guarnición ideal para Pescados y Carnes',
      },
    },
    {
      id: 'croquette',
      category: 'sides',
      price: 10,
      image: './assets/aistudio/image_484b890e.jpg',
      name: {
        fr: 'Croquette Croustillante & Mousseline Truffée',
        en: 'Crisp Artisan Croquette & Truffle Mousseline',
        es: 'Croqueta Crujiente y Muselina Trufada',
      },
      subtitle: {
        fr: 'Céleri-Rave · Éclat de Truffe Noire',
        en: 'Celeriac · Black Truffle Essence',
        es: 'Apionabo · Esencia de Trufa Negra',
      },
      description: {
        fr: 'Croquette dorée au cœur fondant servie sur une mousseline onctueuse de céleri-rave parfumée à la truffe noire.',
        en: 'Golden-crisp croquette served over a velvety celeriac mousseline infused with black truffle.',
        es: 'Croqueta dorada de interior fundente servida sobre una suave muselina de apionabo aromatizada con trufa negra.',
      },
      pairing: {
        fr: 'Accompagnement idéal Viandes Rouges',
        en: 'Ideal with Red Meats',
        es: 'Guarnición ideal para Carnes Rojas',
      },
    },

    // 5. Desserts Signatures
    {
      id: 'suzette',
      category: 'desserts',
      price: 16,
      image: './assets/aistudio/image_b06af0cc.jpg',
      name: {
        fr: 'Crêpes Suzette Flambées Traditionnelles',
        en: 'Traditional Flambéed Crêpes Suzette',
        es: 'Crêpes Suzette Flameadas Tradicionales',
      },
      subtitle: {
        fr: 'Grand Marnier · Oranges Amères d’Andalousie',
        en: 'Grand Marnier · Andalusian Bitter Oranges',
        es: 'Grand Marnier · Naranjas Amargas de Andalucía',
      },
      description: {
        fr: 'Fines crêpes caramélisées au beurre frais, jus d’oranges de Málaga, flambées au Grand Marnier et glace vanille Bourbon.',
        en: 'Delicate crêpes caramelized in fresh butter with Málaga orange juice, flambéed with Grand Marnier and Bourbon vanilla ice cream.',
        es: 'Finas crêpes caramelizadas con mantequilla fresca, zumo de naranja de Málaga, flameadas al Grand Marnier y helado de vainilla.',
      },
      pairing: {
        fr: 'Pedro Ximénez ou Sauternes',
        en: 'Pedro Ximénez or Sauternes',
        es: 'Pedro Ximénez o Sauternes',
      },
    },
    {
      id: 'moelleux',
      category: 'desserts',
      price: 15,
      image: './assets/aistudio/image_b9b380f4.jpg',
      name: {
        fr: 'Moelleux au Chocolat Grand Cru',
        en: 'Grand Cru Dark Chocolate Fondant',
        es: 'Coulant de Chocolate Grand Cru',
      },
      subtitle: {
        fr: 'Chocolat Noir 70% · Glace Artisanale',
        en: '70% Dark Chocolate · Artisan Ice Cream',
        es: 'Chocolate Negro 70% · Helado Artesanal',
      },
      description: {
        fr: 'Biscuit tiède au cœur coulant de chocolat noir Grand Cru, éclats de fève de cacao torréfiée et quenelle de glace artisanale.',
        en: 'Warm molten Grand Cru dark chocolate cake with roasted cacao nibs and house-churned artisan ice cream.',
        es: 'Bizcocho tibio con corazón fundente de chocolate negro Grand Cru, nibs de cacao tostado y helado artesanal.',
      },
      pairing: {
        fr: 'Banyuls Rimage ou Cognac XO',
        en: 'Banyuls Rimage or Cognac XO',
        es: 'Banyuls Rimage or Cognac XO',
      },
    },
  ];

  // Data: Wine Cellar
  const WINES = [
    {
      id: 'wine-1',
      region: {
        fr: 'DOCa Rioja · España · 2016 · Rouge',
        en: 'DOCa Rioja · Spain · 2016 · Red',
        es: 'DOCa Rioja · España · 2016 · Tinto',
      },
      name: 'Marqués de Murrieta Castillo Ygay / Reserva',
      notes: {
        fr: 'Notes de cerise noire, cèdre, truffe et épices douces. Idéal avec le Tournedos aux Morilles.',
        en: 'Notes of black cherry, cedar, truffle, and sweet spices. Ideal pairing with Beef Tenderloin.',
        es: 'Notas de cereza negra, cedro, trufa y especias dulces. Maridaje ideal con el Tournedó de Solomillo.',
      },
    },
    {
      id: 'wine-2',
      region: {
        fr: 'DO Ribera del Duero · España · 2019 · Rouge',
        en: 'DO Ribera del Duero · Spain · 2019 · Red',
        es: 'DO Ribera del Duero · España · 2019 · Tinto',
      },
      name: 'Pago de Carraovejas Crianza',
      notes: {
        fr: 'Velouté, profond et structuré, aux arômes de mûre confite et cacao. Sublime le Magret de Canard.',
        en: 'Velvety, deep and structured, with aromas of candied blackberry and cacao. Sublimes Roasted Duck.',
        es: 'Aterciopelado, profundo y estructurado, con aromas a mora confitada y cacao. Sublime con el Magret de Pato.',
      },
    },
    {
      id: 'wine-3',
      region: {
        fr: 'Bourgogne · France · 2021 · Blanc (100% Chardonnay)',
        en: 'Burgundy · France · 2021 · White (100% Chardonnay)',
        es: 'Borgoña · Francia · 2021 · Blanco (100% Chardonnay)',
      },
      name: 'Domaine William Fèvre Chablis 1er Cru',
      notes: {
        fr: 'Minéralité cristalline, fleurs blanches et agrumes frais. Accompagne la Pêche de la Baie de Málaga.',
        en: 'Crystalline minerality, white flowers, and crisp citrus. Accompanies the Catch of the Day.',
        es: 'Mineralidad cristalina, flores blancas y cítricos frescos. Acompaña la Pesca del Día de la Bahía.',
      },
    },
    {
      id: 'wine-4',
      region: {
        fr: 'Champagne · France · Brut Réserve',
        en: 'Champagne · France · Brut Réserve',
        es: 'Champagne · Francia · Brut Réserve',
      },
      name: 'Billecart-Salmon Brut Réserve',
      notes: {
        fr: 'Bulle aérienne, poire fraîche et brioche fine. L’ouverture parfaite sur notre terrasse avec vue mer.',
        en: 'Airy bubbles, fresh pear, and fine brioche. The perfect opening on our sea-view terrace.',
        es: 'Burbuja aérea, pera fresca y brioche delicado. El inicio perfecto en nuestra terraza con vistas.',
      },
    },
  ];

  // Translations dictionary
  const I18N = {
    fr: {
      nav_home: 'Accueil',
      nav_story: "L'Histoire",
      nav_menu: 'La Carte',
      nav_cellar: 'La Cave',
      nav_access: 'Accès',
      nav_reserve: 'Réserver une Table',
      hero_kicker: 'CARMESÍ – HAUTE CUISINE · BENALMÁDENA PUEBLO',
      hero_words: ["L'Élégance", 'Française,', 'la', 'Passion', 'Andalouse.'],
      hero_sub: 'Une expérience gastronomique intime orchestrée par le Chef Ton Overbeek & Inge au cœur de Benalmádena Pueblo.',
      cta_reserve: 'Réserver via Formulaire',
      cta_menu: 'Explorer La Carte',
      cta_whatsapp: 'Réservation Directe WhatsApp',
      hero_service: 'Mardi – Dimanche · 19h30 – 23h30 · Terrasse Vue Mer & Salle Intime',
      story_kicker: "L'Expérience & Les Hôtes",
      story_title: 'Plus de 24 ans de passion gastronomique, entre Paris et l’Andalousie.',
      story_p1: 'Derrière le Restaurante Carmesí se trouve un duo d’exception : le Chef Ton Overbeek en cuisine et son épouse Inge en salle. Forts de plus de vingt-quatre années de succès gastronomique — notamment en tant qu’anciens propriétaires du renommé restaurant Karmozijn — ils insufflent à chaque dîner une exigence rare.',
      story_p2: 'Leur signature, « Fine French Dining with Spanish Soul », marie la rigueur des sauces classiques françaises aux trésors saisonniers de la baie de Málaga et du terroir andalou.',
      story_p3: 'Que vous choisissiez notre terrasse intime ouverte sur les lumières lointaines de la Méditerranée ou notre salle intérieure feutrée aux fauteuils de velours, Inge veille personnellement à ce que chaque soirée devienne un souvenir inoubliable.',
      metric_1_val: '24+ Ans',
      metric_1_lbl: 'Savoir-Faire Gastronomique (Ex-Karmozijn)',
      metric_2_val: '4.9 / 5',
      metric_2_lbl: "Note d'Excellence · Avis Vérifiés",
      metric_3_val: '19h30 – 23h30',
      metric_3_lbl: 'Service du Soir · Mardi au Dimanche',
      menu_kicker: 'Spécialités Culinaires',
      menu_title: 'La Carte Prestige & Menu Dégustation',
      menu_sub: 'Naviguez librement entre nos entrées, poissons de la baie, viandes nobles, accompagnements de saison et desserts signatures.',
      tab_all: 'Toute la Carte',
      tab_starters: 'Entrées',
      tab_sea: 'Poissons & Mer',
      tab_land: 'Viandes & Terre',
      tab_sides: 'Accompagnements',
      tab_desserts: 'Desserts',
      pairing_label: 'Accord suggéré',
      tasting_title: 'Menu Dégustation Carmesí · 4 Services',
      tasting_desc: 'Amuse-bouche du Chef, Entrée au choix, Plat de la Mer ou de la Terre, et Dessert Signature.',
      tasting_price: '68 € / convive',
      tasting_cta: 'Réserver ce Menu',
      cellar_kicker: 'La Cave & Accords',
      cellar_title: 'Grands Crus Français & Trésors d’Espagne',
      cellar_sub: 'Sélectionnés avec soin par Inge, nos flacons célèbrent les terroirs de Rioja, Ribera del Duero, Bourgogne et Champagne.',
      res_kicker: 'Réservation & Conciergerie',
      res_title: 'Réservez Votre Table',
      res_sub: 'Une attention personnalisée pour chaque convive. Confirmation directe avec Ton & Inge via WhatsApp.',
      concierge_title: 'L’Art de Recevoir',
      concierge_body: 'Notre salle et notre terrasse vue mer accueillent un nombre limité de tables chaque soir afin de préserver l’intimité et la précision du service.',
      res_hours_lbl: 'Service du Dîner',
      res_hours_val: 'Mardi – Dimanche · 19h30 – 23h30 (Fermé le lundi)',
      res_summary_lbl: 'Aperçu de votre demande',
      form_name: 'Nom et prénom *',
      form_name_ph: 'Sophie Laurent',
      form_phone: 'Téléphone / WhatsApp *',
      form_phone_ph: '+33 6 12 34 56 78',
      form_date: 'Date du dîner *',
      form_guests: 'Convives *',
      form_time: 'Créneau horaire *',
      form_seating: 'Placement souhaité *',
      seat_terrace: 'Terrasse avec vue',
      seat_interior: 'Salle intérieure intime',
      form_notes: 'Allergies ou occasion spéciale',
      form_notes_ph: 'Anniversaire, dîner romantique, allergie...',
      form_submit: 'Envoyer ma demande via WhatsApp',
      err_monday: 'Le restaurant est fermé le lundi. Veuillez choisir un soir du mardi au dimanche.',
      err_required: 'Veuillez renseigner votre nom et votre numéro de téléphone.',
      succ_title: 'Votre demande est prête sur WhatsApp',
      succ_desc: 'Si la fenêtre WhatsApp ne s’est pas ouverte automatiquement, cliquez sur le bouton ci-dessous :',
      succ_open: 'Ouvrir WhatsApp maintenant',
      contact_kicker: 'Contact & Accès',
      contact_title: 'Nous Trouver à Benalmádena Pueblo',
      contact_addr_lbl: 'Adresse',
      contact_phone_lbl: 'Téléphone & WhatsApp',
      contact_hours_lbl: 'Horaires de Service',
      contact_hours_val: 'Mardi – Dimanche | 19h30 – 23h30 | Fermé le lundi',
      contact_wa_btn: 'Nous contacter pour une question sur WhatsApp',
      contact_map_btn: 'Itinéraire Google Maps',
      contact_map_caption: 'Avenida del Chorrillo · Village Blanc de Benalmádena Pueblo · Málaga',
      footer_rights: '© 2026 Restaurante Carmesí · Benalmádena Pueblo, Málaga. Tous droits réservés.',
      footer_legal: 'Mentions Légales',
      footer_privacy: 'Politique de Confidentialité',
      legal_title: 'Mentions Légales',
      legal_body: 'Restaurante Carmesí · Dirigé par Chef Ton Overbeek & Inge. Avenida del Chorrillo, 29639 Benalmádena Pueblo, Málaga, Espagne. Téléphone : +34 623 53 44 94.',
      privacy_title: 'Politique de Confidentialité',
      privacy_body: 'Les informations saisies dans le formulaire de réservation sont utilisées exclusivement pour préparer votre message WhatsApp à destination du Restaurante Carmesí. Aucune donnée n’est stockée sur des serveurs tiers.',
    },
    en: {
      nav_home: 'Home',
      nav_story: 'Our Story',
      nav_menu: 'The Menu',
      nav_cellar: 'Wine Cellar',
      nav_access: 'Location',
      nav_reserve: 'Reserve a Table',
      hero_kicker: 'CARMESÍ – HAUTE CUISINE · BENALMÁDENA PUEBLO',
      hero_words: ['French', 'Elegance,', 'Andalusian', 'Soul.'],
      hero_sub: 'An intimate fine dining experience orchestrated by Chef Ton Overbeek & Inge in the heart of Benalmádena Pueblo.',
      cta_reserve: 'Reserve via Form',
      cta_menu: 'Explore The Menu',
      cta_whatsapp: 'Direct WhatsApp Booking',
      hero_service: 'Tuesday – Sunday · 19:30 – 23:30 · Sea-View Terrace & Intimate Salon',
      story_kicker: 'The Experience & Your Hosts',
      story_title: 'Over 24 years of gastronomic mastery, bridging Paris and Andalusia.',
      story_p1: 'At the heart of Restaurante Carmesí stands a devoted culinary duo: Chef Ton Overbeek in the kitchen and his wife Inge leading the dining room. With over twenty-four years of acclaimed hospitality—formerly as proprietors of the celebrated restaurant Karmozijn—they bring timeless poise to every evening.',
      story_p2: 'Their culinary philosophy, “Fine French Dining with Spanish Soul,” unites classic French technique and reductions with the finest seasonal produce of Málaga Bay and Andalusia.',
      story_p3: 'Whether seated on our intimate terrace overlooking the distant lights of the Mediterranean coast or inside our hushed, velvet-draped salon, Inge ensures warm, attentive service tailored to your table.',
      metric_1_val: '24+ Years',
      metric_1_lbl: 'Gastronomic Heritage (Former Karmozijn)',
      metric_2_val: '4.9 / 5',
      metric_2_lbl: 'Guest Rating · Exceptional Reviews',
      metric_3_val: '19:30 – 23:30',
      metric_3_lbl: 'Dinner Service · Tuesday to Sunday',
      menu_kicker: 'Culinary Specialties',
      menu_title: 'À La Carte & Tasting Menu',
      menu_sub: 'Explore our starters, local bay fish, prime meats, seasonal side dishes, and signature desserts.',
      tab_all: 'Full Menu',
      tab_starters: 'Starters',
      tab_sea: 'Fish & Sea',
      tab_land: 'Meats & Land',
      tab_sides: 'Side Dishes',
      tab_desserts: 'Desserts',
      pairing_label: 'Suggested pairing',
      tasting_title: 'Carmesí Tasting Menu · 4 Courses',
      tasting_desc: 'Chef’s Amuse-Bouche, Choice of Starter, Sea or Land Main Course, and Signature Dessert.',
      tasting_price: '€68 / guest',
      tasting_cta: 'Reserve this Menu',
      cellar_kicker: 'The Wine Cellar',
      cellar_title: 'French Grands Crus & Spanish Treasures',
      cellar_sub: 'Curated by Inge, our cellar celebrates iconic estates from Rioja, Ribera del Duero, Burgundy, and Champagne.',
      res_kicker: 'Reservations & Concierge',
      res_title: 'Reserve Your Table',
      res_sub: 'Personal attention for every guest. Direct confirmation with Ton & Inge via WhatsApp.',
      concierge_title: 'The Art of Hospitality',
      concierge_body: 'Our intimate salon and sea-view terrace host a limited number of tables each evening to preserve quiet elegance and attentive service.',
      res_hours_lbl: 'Dinner Service',
      res_hours_val: 'Tuesday – Sunday · 19:30 – 23:30 (Closed Mondays)',
      res_summary_lbl: 'Live Request Summary',
      form_name: 'Full Name *',
      form_name_ph: 'Claire Bennett',
      form_phone: 'Phone / WhatsApp *',
      form_phone_ph: '+44 7700 900077',
      form_date: 'Dinner Date *',
      form_guests: 'Guests *',
      form_time: 'Seating Time *',
      form_seating: 'Preferred Seating *',
      seat_terrace: 'Terrace with sea view',
      seat_interior: 'Intimate interior salon',
      form_notes: 'Allergies or special occasion',
      form_notes_ph: 'Anniversary, romantic dinner, dietary notes...',
      form_submit: 'Send Request via WhatsApp',
      err_monday: 'We are closed on Mondays. Please select a date from Tuesday to Sunday.',
      err_required: 'Please enter your full name and phone number.',
      succ_title: 'Your reservation message is ready',
      succ_desc: 'If WhatsApp did not open automatically, click the button below:',
      succ_open: 'Open WhatsApp Now',
      contact_kicker: 'Contact & Location',
      contact_title: 'Find Us in Benalmádena Pueblo',
      contact_addr_lbl: 'Address',
      contact_phone_lbl: 'Phone & WhatsApp',
      contact_hours_lbl: 'Service Hours',
      contact_hours_val: 'Tuesday – Sunday | 19:30 – 23:30 | Closed Mondays',
      contact_wa_btn: 'Contact us with a question on WhatsApp',
      contact_map_btn: 'Open in Google Maps',
      contact_map_caption: 'Avenida del Chorrillo · Whitewashed Village of Benalmádena Pueblo · Málaga',
      footer_rights: '© 2026 Restaurante Carmesí · Benalmádena Pueblo, Málaga. All rights reserved.',
      footer_legal: 'Legal Notice',
      footer_privacy: 'Privacy Policy',
      legal_title: 'Legal Notice',
      legal_body: 'Restaurante Carmesí · Operated by Chef Ton Overbeek & Inge. Avenida del Chorrillo, 29639 Benalmádena Pueblo, Málaga, Spain. Phone: +34 623 53 44 94.',
      privacy_title: 'Privacy Policy',
      privacy_body: 'Information entered in the reservation form is used solely to format your direct WhatsApp booking message to Restaurante Carmesí. No personal data is stored on external servers.',
    },
    es: {
      nav_home: 'Inicio',
      nav_story: 'Historia',
      nav_menu: 'La Carta',
      nav_cellar: 'La Bodega',
      nav_access: 'Ubicación',
      nav_reserve: 'Reservar Mesa',
      hero_kicker: 'CARMESÍ – HAUTE CUISINE · BENALMÁDENA PUEBLO',
      hero_words: ['Elegancia', 'Francesa,', 'Pasión', 'Andaluza.'],
      hero_sub: 'Una experiencia gastronómica íntima orquestada por el Chef Ton Overbeek e Inge en el corazón de Benalmádena Pueblo.',
      cta_reserve: 'Reservar por Formulario',
      cta_menu: 'Explorar La Carta',
      cta_whatsapp: 'Reserva Directa WhatsApp',
      hero_service: 'Martes – Domingo · 19:30 – 23:30 · Terraza con Vistas y Salón Íntimo',
      story_kicker: 'La Experiencia y Los Anfitriones',
      story_title: 'Más de 24 años de alta gastronomía, entre Francia y Andalucía.',
      story_p1: 'Al frente de Restaurante Carmesí se encuentra un tándem excepcional: el Chef Ton Overbeek en la cocina y su esposa Inge en la sala. Con más de veinticuatro años de trayectoria —antiguos propietarios del reconocido restaurante Karmozijn—, imprimen excelencia en cada detalle.',
      story_p2: 'Su propuesta, «Fine French Dining with Spanish Soul», fusiona la precisión de la alta cocina francesa con los mejores productos de temporada de la bahía de Málaga y Andalucía.',
      story_p3: 'Tanto en nuestra íntima terraza con vistas lejanas al mar Mediterráneo como en nuestro acogedor salón interior, Inge cuida cada velada con una hospitalidad cercana y refinada.',
      metric_1_val: '24+ Años',
      metric_1_lbl: 'Trayectoria Gastronómica (Ex-Karmozijn)',
      metric_2_val: '4.9 / 5',
      metric_2_lbl: 'Valoración Media · Reseñas Excepcionales',
      metric_3_val: '19:30 – 23:30',
      metric_3_lbl: 'Servicio de Cenas · Martes a Domingo',
      menu_kicker: 'Especialidades Culinarias',
      menu_title: 'La Carta Prestige y Menú Degustación',
      menu_sub: 'Navegue entre nuestros entrantes, pescados de la bahía, carnes nobles, guarniciones de temporada y postres de autor.',
      tab_all: 'Toda la Carta',
      tab_starters: 'Entrantes',
      tab_sea: 'Pescados y Mar',
      tab_land: 'Carnes y Tierra',
      tab_sides: 'Guarniciones',
      tab_desserts: 'Postres',
      pairing_label: 'Maridaje sugerido',
      tasting_title: 'Menú Degustación Carmesí · 4 Pases',
      tasting_desc: 'Aperitivo del Chef, Entrante a elegir, Principal de Mar o Tierra y Postre de Autor.',
      tasting_price: '68 € / comensal',
      tasting_cta: 'Reservar este Menú',
      cellar_kicker: 'La Bodega y Maridajes',
      cellar_title: 'Grands Crus Franceses y Tesoros de España',
      cellar_sub: 'Seleccionados por Inge, nuestros vinos celebran las denominaciones de Rioja, Ribera del Duero, Borgoña y Champagne.',
      res_kicker: 'Reservas y Atención Directa',
      res_title: 'Reserve Su Mesa',
      res_sub: 'Atención personalizada para cada comensal. Confirmación directa con Ton e Inge por WhatsApp.',
      concierge_title: 'El Arte de Recibir',
      concierge_body: 'Nuestro salón íntimo y terraza con vistas al mar acogen un número limitado de mesas cada noche para garantizar tranquilidad y excelencia.',
      res_hours_lbl: 'Servicio de Cenas',
      res_hours_val: 'Martes – Domingo · 19:30 – 23:30 (Cerrado los lunes)',
      res_summary_lbl: 'Resumen de su solicitud',
      form_name: 'Nombre y apellidos *',
      form_name_ph: 'Sofía Martínez',
      form_phone: 'Teléfono / WhatsApp *',
      form_phone_ph: '+34 612 34 56 78',
      form_date: 'Fecha de la cena *',
      form_guests: 'Comensales *',
      form_time: 'Hora de llegada *',
      form_seating: 'Ubicación deseada *',
      seat_terrace: 'Terraza con vistas',
      seat_interior: 'Salón interior íntimo',
      form_notes: 'Alergias u ocasión especial',
      form_notes_ph: 'Aniversario, cena romántica, alergias...',
      form_submit: 'Enviar mi solicitud por WhatsApp',
      err_monday: 'Cerramos los lunes. Por favor, seleccione una fecha de martes a domingo.',
      err_required: 'Por favor, introduzca su nombre y número de teléfono.',
      succ_title: 'Su solicitud está lista en WhatsApp',
      succ_desc: 'Si WhatsApp no se abrió automáticamente, pulse abajo para enviar su reserva:',
      succ_open: 'Abrir WhatsApp ahora',
      contact_kicker: 'Contacto y Ubicación',
      contact_title: 'Encuéntrenos en Benalmádena Pueblo',
      contact_addr_lbl: 'Dirección',
      contact_phone_lbl: 'Teléfono y WhatsApp',
      contact_hours_lbl: 'Horario de Servicio',
      contact_hours_val: 'Martes – Domingo | 19:30 – 23:30 | Cerrado los lunes',
      contact_wa_btn: 'Contactar por WhatsApp para cualquier consulta',
      contact_map_btn: 'Cómo llegar en Google Maps',
      contact_map_caption: 'Avenida del Chorrillo · Benalmádena Pueblo · Málaga',
      footer_rights: '© 2026 Restaurante Carmesí · Benalmádena Pueblo, Málaga. Todos los derechos reservados.',
      footer_legal: 'Aviso Legal',
      footer_privacy: 'Política de Privacidad',
      legal_title: 'Aviso Legal',
      legal_body: 'Restaurante Carmesí · Dirigido por Chef Ton Overbeek e Inge. Avenida del Chorrillo, 29639 Benalmádena Pueblo, Málaga, España. Teléfono: +34 623 53 44 94.',
      privacy_title: 'Política de Privacidad',
      privacy_body: 'Los datos introducidos en el formulario se utilizan exclusivamente para generar su mensaje de reserva por WhatsApp dirigido a Restaurante Carmesí.',
    },
  };

  // Helper: Local date formatted as YYYY-MM-DD
  function getLocalDateString(d) {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Initialization
  document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileMenu();
    initLanguageSwitcher();
    initMenuFilter();
    filterMenuDishes();
    initReservationForm();
    initModals();
    applyLanguage(currentLang);
  });

  // Sticky header on scroll
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // Mobile drawer toggle
  function initMobileMenu() {
    const toggle = document.querySelector('.mobile-toggle');
    const drawer = document.querySelector('.mobile-menu-drawer');
    if (!toggle || !drawer) return;

    toggle.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });
  }

  // Language switcher
  function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (!lang || lang === currentLang) return;
        currentLang = lang;
        langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
        applyLanguage(lang);
      });
    });
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    const t = I18N[lang];
    if (!t) return;

    // Replace text of all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Replace placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      if (t[key]) {
        el.placeholder = t[key];
      }
    });

    // Animate hero title words
    renderHeroTitle(lang);

    // Update localized dish names and pairings
    updateMenuTexts(lang);

    // Update wine cellar notes
    updateWineTexts(lang);

    // Update guests dropdown labels
    updateGuestsSelect(lang);

    // Update live form summary
    updateFormSummary();
  }

  function renderHeroTitle(lang) {
    const titleEl = document.getElementById('hero-title');
    if (!titleEl) return;
    const words = I18N[lang].hero_words;
    titleEl.innerHTML = '';
    words.forEach((word, idx) => {
      const span = document.createElement('span');
      span.className = 'hero-word' + (idx >= words.length - 2 ? ' gold' : '');
      span.style.animationDelay = (0.2 + idx * 0.09) + 's';
      span.textContent = word + ' ';
      titleEl.appendChild(span);
    });
  }

  // Menu filtering
  function initMenuFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category || 'all';
        filterMenuDishes();
      });
    });
  }

  function filterMenuDishes() {
    const groups = document.querySelectorAll('.category-group');
    groups.forEach(group => {
      const cat = group.dataset.groupCategory;
      if (currentCategory === 'all' || currentCategory === cat) {
        group.style.display = 'block';
      } else {
        group.style.display = 'none';
      }
    });
  }

  function updateMenuTexts(lang) {
    document.querySelectorAll('.dish-card').forEach(card => {
      const dishId = card.dataset.dishId;
      const dish = DISHES.find(d => d.id === dishId);
      if (!dish) return;

      const nameEl = card.querySelector('[data-dish-field="name"]');
      if (nameEl) nameEl.textContent = dish.name[lang];

      const subEl = card.querySelector('[data-dish-field="subtitle"]');
      if (subEl) subEl.textContent = dish.subtitle[lang];

      const descEl = card.querySelector('[data-dish-field="description"]');
      if (descEl) descEl.textContent = dish.description[lang];

      const pairingEl = card.querySelector('[data-dish-field="pairing"]');
      if (pairingEl) pairingEl.textContent = dish.pairing[lang];
    });
  }

  function updateWineTexts(lang) {
    document.querySelectorAll('.wine-item').forEach(item => {
      const wineId = item.dataset.wineId;
      const wine = WINES.find(w => w.id === wineId);
      if (!wine) return;

      const regEl = item.querySelector('[data-wine-field="region"]');
      if (regEl) regEl.textContent = wine.region[lang];

      const notesEl = item.querySelector('[data-wine-field="notes"]');
      if (notesEl) notesEl.textContent = wine.notes[lang];
    });
  }

  function updateGuestsSelect(lang) {
    const select = document.getElementById('res-guests');
    if (!select) return;
    const labels = {
      fr: (n) => `${n} ${n > 1 ? 'convives' : 'convive'}`,
      en: (n) => `${n} ${n > 1 ? 'guests' : 'guest'}`,
      es: (n) => `${n} ${n > 1 ? 'comensales' : 'comensal'}`,
    };
    const formatFn = labels[lang] || labels.fr;
    Array.from(select.options).forEach(opt => {
      const num = parseInt(opt.value, 10);
      opt.textContent = formatFn(num);
    });
  }

  // Reservation Form & WhatsApp Integration
  function initReservationForm() {
    const dateInput = document.getElementById('res-date');
    if (dateInput) {
      const today = new Date();
      // If Monday (closed), default selection to Tuesday
      if (today.getDay() === 1) {
        today.setDate(today.getDate() + 1);
      }
      const initialDate = getLocalDateString(today);
      const minDate = getLocalDateString(new Date());

      dateInput.value = initialDate;
      dateInput.min = minDate;
      dateInput.addEventListener('change', updateFormSummary);
    }

    const nameInput = document.getElementById('res-name');
    if (nameInput) nameInput.addEventListener('input', updateFormSummary);

    const guestsInput = document.getElementById('res-guests');
    if (guestsInput) guestsInput.addEventListener('change', updateFormSummary);

    // Time slot buttons
    const timeBtns = document.querySelectorAll('.time-btn');
    timeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        timeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedTime = btn.dataset.time || '20:30';
        updateFormSummary();
      });
    });

    // Seating buttons
    const seatingBtns = document.querySelectorAll('.seating-btn');
    seatingBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        seatingBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSeating = btn.dataset.seating || 'terrace';
        updateFormSummary();
      });
    });

    // Form submit
    const form = document.getElementById('reservation-form');
    if (form) {
      form.addEventListener('submit', handleReservationSubmit);
    }
  }

  function isMonday(dateStr) {
    if (!dateStr) return false;
    const parts = dateStr.split('-').map(Number);
    const dt = new Date(parts[0], parts[1] - 1, parts[2]);
    return dt.getDay() === 1;
  }

  function updateFormSummary() {
    const summaryEl = document.getElementById('res-summary-content');
    if (!summaryEl) return;
    const t = I18N[currentLang];

    const dateVal = document.getElementById('res-date')?.value || '';
    const guestsVal = parseInt(document.getElementById('res-guests')?.value || '2', 10);
    const nameVal = document.getElementById('res-name')?.value || '';
    const seatingText = selectedSeating === 'terrace' ? t.seat_terrace : t.seat_interior;

    const guestWord = {
      fr: guestsVal > 1 ? 'convives' : 'convive',
      en: guestsVal > 1 ? 'guests' : 'guest',
      es: guestsVal > 1 ? 'comensales' : 'comensal',
    }[currentLang] || 'convives';

    summaryEl.innerHTML = `
      <div><strong>${t.form_date}:</strong> ${dateVal} · ${selectedTime}</div>
      <div><strong>${t.form_guests}:</strong> ${guestsVal} ${guestWord}</div>
      <div><strong>${t.form_seating}:</strong> ${seatingText}</div>
      ${nameVal ? `<div><strong>${t.form_name}:</strong> ${nameVal}</div>` : ''}
    `;
  }

  function handleReservationSubmit(e) {
    e.preventDefault();
    const t = I18N[currentLang];
    const alertBox = document.getElementById('form-alert');
    const successBox = document.getElementById('form-success-box');
    if (alertBox) alertBox.classList.remove('visible');
    if (successBox) successBox.classList.remove('visible');

    const name = document.getElementById('res-name')?.value.trim();
    const phone = document.getElementById('res-phone')?.value.trim();
    const date = document.getElementById('res-date')?.value;
    const guests = document.getElementById('res-guests')?.value || '2';
    const notes = document.getElementById('res-notes')?.value.trim() || (currentLang === 'fr' ? 'Aucune' : currentLang === 'en' ? 'None' : 'Ninguna');

    if (!name || !phone) {
      if (alertBox) {
        alertBox.textContent = t.err_required;
        alertBox.classList.add('visible');
      }
      return;
    }

    if (isMonday(date)) {
      if (alertBox) {
        alertBox.textContent = t.err_monday;
        alertBox.classList.add('visible');
      }
      return;
    }

    const seatingLabel = selectedSeating === 'terrace' ? t.seat_terrace : t.seat_interior;

    let message = '';
    if (currentLang === 'fr') {
      message = `Bonjour Ton & Inge, je souhaite réserver une table au Restaurante Carmesí pour ${guests} ${guests > 1 ? 'personnes' : 'personne'} le ${date} à ${selectedTime}. Placement souhaité : ${seatingLabel}. Nom : ${name} (${phone}). Note : ${notes}. Merci !`;
    } else if (currentLang === 'en') {
      message = `Hello Ton & Inge, I would like to reserve a table at Restaurante Carmesí for ${guests} ${guests > 1 ? 'guests' : 'guest'} on ${date} at ${selectedTime}. Preferred seating: ${seatingLabel}. Name: ${name} (${phone}). Note: ${notes}. Thank you!`;
    } else {
      message = `Hola Ton & Inge, deseo reservar una mesa en Restaurante Carmesí para ${guests} ${guests > 1 ? 'personas' : 'persona'} el ${date} a las ${selectedTime}. Ubicación deseada: ${seatingLabel}. Nombre: ${name} (${phone}). Nota: ${notes}. ¡Gracias!`;
    }

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    if (successBox) {
      const openBtn = document.getElementById('succ-open-btn');
      if (openBtn) openBtn.href = waUrl;
      successBox.classList.add('visible');
    }

    // Open WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }

  // Modals & Keyboard Accessibility
  function initModals() {
    const modal = document.getElementById('legal-modal');
    const closeBtn = document.querySelector('.modal-close');
    const titleEl = document.getElementById('modal-title');
    const bodyEl = document.getElementById('modal-body');

    document.querySelectorAll('[data-open-modal]').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.openModal;
        const t = I18N[currentLang];
        if (type === 'legal') {
          titleEl.textContent = t.legal_title;
          bodyEl.textContent = t.legal_body;
        } else {
          titleEl.textContent = t.privacy_title;
          bodyEl.textContent = t.privacy_body;
        }
        modal.classList.add('open');
      });
    });

    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => modal.classList.remove('open'));
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
      });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
        modal.classList.remove('open');
      }
    });
  }

})();
