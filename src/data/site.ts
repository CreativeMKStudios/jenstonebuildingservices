import type { ImageMetadata } from "astro";
import logo from "../assets/logo-mark.png";
import extensionFinished from "../assets/extension-finished.jpg";
import wallDetail from "../assets/wall-detail.jpg";
import van from "../assets/jenstone-van.jpg";
import chimneys from "../assets/chimney-stacks.jpg";
import brickWindow from "../assets/brick-window.jpg";
import outbuilding from "../assets/outbuilding.jpg";
import steelFrame from "../assets/steel-frame.jpg";
import kitchen from "../assets/kitchen-renovation.jpg";
import bathroom from "../assets/bathroom-renovation.jpg";
import screed from "../assets/limecrete-screed.jpg";
import foamGlass from "../assets/foam-glass-floor.jpg";
import gable from "../assets/gable-rebuild.jpg";
import bayHouse from "../assets/bay-window-house.jpg";
import yellowHouse from "../assets/yellow-house.jpg";
import barn from "../assets/clay-tile-barn.jpg";
import brickPier from "../assets/brick-pier.jpg";
import gardenWall from "../assets/garden-wall.jpg";
import roofTimbers from "../assets/roof-timbers.jpg";
import scaffoldHouse from "../assets/scaffold-house.jpg";
import underfloor from "../assets/underfloor-heating.jpg";
import houseWall from "../assets/house-and-wall.jpg";
import bricklaying from "../assets/bricklaying.jpg";
import paintedHouse from "../assets/painted-house.jpg";
import roofMembrane from "../assets/roof-membrane.jpg";
import reclaimed from "../assets/reclaimed-bricks.jpg";
import newWall from "../assets/new-brick-wall.jpg";
import boundaryWall from "../assets/boundary-wall.jpg";
import workshop from "../assets/workshop.jpg";

const basePath = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

export function publicUrl(path = "/") {
  const root = `${site.url}/`;
  return new URL(path.replace(/^\//, ""), root).href;
}

export const site = {
  name: "Jenstone Building Services",
  legalName: "Jenstone Industrial Ltd",
  companyNumber: "08057144",
  url: basePath
    ? `https://creativemkstudios.github.io${basePath}`
    : "https://jenstonebuildingservices.co.uk",
  description:
    "Family builders in Bedford. Heritage repairs, house extensions, brickwork and home renovations across Bedfordshire and Buckinghamshire.",
  email: "hello@jenstonebuildingservices.co.uk",
  phoneDisplay: "01234 826776",
  phoneTel: "+441234826776",
  mobileDisplay: "07738 411842",
  mobileTel: "+447738411842",
  whatsapp: "https://wa.me/447738411842",
  street: "9 Goldington Road",
  locality: "Bedford",
  region: "Bedfordshire",
  postcode: "MK40 3JY",
  country: "GB",
  lat: 52.1393894,
  lng: -0.4621105,
  map: "https://maps.app.goo.gl/SpnsyVeFHvAzDeqJ8",
  founded: "2012",
  logo,
  instagram: "https://www.instagram.com/jenstonebuildingservices/",
  linkedin: "https://uk.linkedin.com/company/jenstone-industrial-ltd",
  fmb: "https://www.fmb.org.uk/builder/jenstone-building-services.html",
  placeId: "ChIJR3QP6T23d0gRc5BxfUrbKws",
};

export type Photo = {
  src: ImageMetadata;
  alt: string;
  caption: string;
};

export const photos: Record<string, Photo> = {
  extension: {
    src: extensionFinished,
    alt: "Finished red brick extension with white glazed doors and a tiled roof",
    caption: "A finished brick extension, built to sit with the house beside it.",
  },
  wallDetail: {
    src: wallDetail,
    alt: "Close view of a newly built red brick garden wall with a tile coping",
    caption: "Garden wall in red brick, with a neat tile coping.",
  },
  van: {
    src: van,
    alt: "Jenstone Building Services van parked on a residential building site",
    caption: "The Jenstone van on site.",
  },
  chimneys: {
    src: chimneys,
    alt: "Two brick chimney stacks rebuilt on a roof, with scaffolding around them",
    caption: "Chimney stacks rebuilt on a working roof.",
  },
  window: {
    src: brickWindow,
    alt: "White casement window set in a red brick wall with a stone sill",
    caption: "New window opening finished in matching brick.",
  },
  outbuilding: {
    src: outbuilding,
    alt: "Brick outbuilding with a dark door and a fresh roof verge",
    caption: "Outbuilding brought back into use.",
  },
  steel: {
    src: steelFrame,
    alt: "Steel frame of a large open building during construction",
    caption: "Steel frame going up for a new open structure.",
  },
  kitchen: {
    src: kitchen,
    alt: "Open plan kitchen with an island, wood floor and wide glass doors",
    caption: "Open kitchen after a full home refit.",
  },
  bathroom: {
    src: bathroom,
    alt: "New bathroom with a walk-in shower, basin and pale tiled walls",
    caption: "Bathroom fitted as part of a home renovation.",
  },
  screed: {
    src: screed,
    alt: "Fresh limecrete screed laid across a heritage floor",
    caption: "Limecrete screed on a heritage floor.",
  },
  foam: {
    src: foamGlass,
    alt: "Foam glass aggregate laid as a breathable base under a heritage floor",
    caption: "Foam glass aggregate, used so an old floor can breathe.",
  },
  gable: {
    src: gable,
    alt: "Exposed timber gable on a brick building during repair",
    caption: "Gable opened up so the structure could be repaired.",
  },
  bay: {
    src: bayHouse,
    alt: "Red brick house with a white bay window and a gravel drive",
    caption: "Brick house with the front kept in character.",
  },
  yellow: {
    src: yellowHouse,
    alt: "Yellow rendered house with a brick plinth and white windows",
    caption: "House after external repairs and a fresh finish.",
  },
  barn: {
    src: barn,
    alt: "Small brick barn with a red clay tile roof in a green field",
    caption: "Clay tile roof on a brick outbuilding.",
  },
  pier: {
    src: brickPier,
    alt: "Brick pier built against a rendered wall, with a precise corner",
    caption: "Brick pier built to a clean line.",
  },
  gardenWall: {
    src: gardenWall,
    alt: "Long new brick garden wall with a concrete coping beside a lawn",
    caption: "Long garden wall rebuilt in brick.",
  },
  roofTimbers: {
    src: roofTimbers,
    alt: "New roof rafters fixed over a brick wall on a house extension",
    caption: "New roof timbers before the tiles go on.",
  },
  scaffold: {
    src: scaffoldHouse,
    alt: "Yellow house wrapped in scaffold during external building work",
    caption: "Scaffold up for external repairs.",
  },
  underfloor: {
    src: underfloor,
    alt: "Underfloor heating pipes laid in loops on a new floor",
    caption: "Underfloor heating pipes before the floor is finished.",
  },
  houseWall: {
    src: houseWall,
    alt: "Brick house with a new low garden wall along the front",
    caption: "Front wall rebuilt in front of the house.",
  },
  bricklaying: {
    src: bricklaying,
    alt: "Bricklayer building a new wall in red and brown bricks",
    caption: "Brickwork in progress, course by course.",
  },
  painted: {
    src: paintedHouse,
    alt: "Two storey house with a pale painted finish and white windows",
    caption: "External finish after the building work.",
  },
  membrane: {
    src: roofMembrane,
    alt: "Blue roofing membrane laid across a flat roof during replacement",
    caption: "Roof covering going on.",
  },
  reclaimed: {
    src: reclaimed,
    alt: "Close view of mixed red and brown reclaimed bricks in a wall",
    caption: "Mixed bricks chosen to match an older wall.",
  },
  newWall: {
    src: newWall,
    alt: "New red brick wall with fresh mortar joints beside a fence",
    caption: "New brick wall, joints struck clean.",
  },
  boundary: {
    src: boundaryWall,
    alt: "Finished red brick boundary wall with a tile creasing course",
    caption: "Boundary wall with a tile creasing course.",
  },
  workshop: {
    src: workshop,
    alt: "Workshop with stacked timber and a scaffold tower, from the Jenstone Google profile",
    caption: "Workshop photo from the Jenstone Google profile.",
  },
};

export const reviews = [
  {
    quote:
      "Highly recommended. Experienced staff, very professional and knowledgeable.",
    by: "Google review",
    date: "2020-04-24",
    dateLabel: "24 April 2020",
  },
  {
    quote:
      "I am a partner at Westbury Carpets & Floor Coverings and we have had the pleasure of working with Jenstone for the past few years. They are professional and communicate very well. The quality of their work is excellent and it is always nice when turning up to do a job to see the site is ready and clean, which is not always the case working with other companies. I can honestly recommend Jenstone.",
    by: "Partner, Westbury Carpets & Floor Coverings",
    date: "2020-04-24",
    dateLabel: "24 April 2020",
  },
  {
    quote:
      "Jenstone are exceptionally reliable and have a professional approach to all work they undertake. They also take a real pride in the quality of the work they deliver, meaning the standard of work is exceptionally high.",
    by: "Google review",
    date: "2020-04-23",
    dateLabel: "23 April 2020",
  },
  {
    quote:
      "Worked with Ben and the team on a few projects around my facilities, all of which were completed to a high standard, on time and within budget. I would recommend Jenstone Industrial highly.",
    by: "Google review",
    date: "2020-04-22",
    dateLabel: "22 April 2020",
  },
  {
    quote:
      "I have used Jenstone for the past 2 years and would recommend them to anyone. Ben will always go out of his way to help and support us.",
    by: "Google review",
    date: "2020-04",
    dateLabel: "April 2020",
  },
  {
    quote:
      "Excellent company to work with. Ben and his team are fantastic at what they do.",
    by: "Google review",
    date: "2019-01-28",
    dateLabel: "28 January 2019",
  },
  {
    quote:
      "Excellent service and very helpful supplier of tools and industrial supplies. Whenever we've needed tools or industrial consumables we've called Jenstone Industrial and they've found us the right products, at competitive prices with overnight delivery. We recommend Jenstone Industrial Supplies every time we're asked.",
    by: "Google review",
    date: "2014-06-12",
    dateLabel: "12 June 2014",
  },
];

export const services = [
  {
    slug: "heritage-restorations",
    title: "Heritage restorations",
    short: "Lime, brick and careful repairs for older and listed homes.",
    image: photos.barn,
    summary:
      "We repair older and listed homes with lime, matching brick and methods that let the building dry.",
    paragraphs: [
      "Old houses in Bedfordshire were built to breathe. Cement, modern paint and plastic tanking can trap water in the wall. We use lime plaster, lime render and lime mortar where the building needs them.",
      "The work covers Grade II homes as well as unlisted period houses. Recent jobs include chimney rebuilds, clay tile roofs, inglenook fireplaces, and limecrete floors laid over foam glass so the ground floor can dry.",
      "We start with a look at the building, not a standard package. Listed buildings often need consent. We work with that process and keep the details that give the house its age.",
    ],
    includes: [
      "Lime plaster and lime render",
      "Breathable floor build-ups, including foam glass and limecrete",
      "Brick repairs and lime repointing",
      "Inglenook and chimney repairs",
      "Clay tile roofs on older buildings",
      "Repairs that keep the look of the house",
    ],
  },
  {
    slug: "house-extensions",
    title: "House extensions",
    short: "Extra rooms that match the house you already have.",
    image: photos.extension,
    summary:
      "Rear, side and two-storey extensions, planned so the new rooms feel like part of the original house.",
    paragraphs: [
      "If the house is right but the rooms are tight, an extension is often simpler than a move. We build rear, side, wraparound and two-storey extensions.",
      "The new part has to meet the old part cleanly. That means the brick, the roof line, the floor level and the way you walk from one room to the next. We sort the structure, the roof, the joinery and the finish.",
      "We can help with drawings, planning and building regulations, and we manage the build from the footings to the last coat of paint.",
    ],
    includes: [
      "Rear, side, wraparound and two-storey extensions",
      "Help with drawings, planning and building regulations",
      "Foundations, structure, roof and joinery",
      "Openings cut through so the new room joins the old one",
      "Kitchens and bathrooms inside the new space",
    ],
  },
  {
    slug: "brickwork",
    title: "Brickwork",
    short: "New walls, repairs and repointing in brick that matches.",
    image: photos.boundary,
    summary:
      "Garden walls, house walls, extensions and lime repointing. The joint and the brick colour are the job.",
    paragraphs: [
      "A wall is only as good as the line, the bond and the mortar. We build new brick and blockwork, and we repair walls that have failed.",
      "On older homes we repoint in lime, not a hard cement that cracks the brick. Where a wall was built in mixed or reclaimed bricks, we match the colour instead of dropping in a bright new red.",
      "The same team builds garden walls, boundary walls, gable ends and the brickwork on extensions. Wilstead is one of the places we have rebuilt garden walls.",
    ],
    includes: [
      "New brick and block walls",
      "Garden and boundary walls",
      "Gable rebuilds",
      "Repointing in lime or modern mortar, as the wall needs",
      "Matching and reclaimed bricks",
      "Brickwork for extensions",
    ],
  },
  {
    slug: "home-renovations",
    title: "Home renovations",
    short: "Kitchens, bathrooms, decorating and full house refits.",
    image: photos.kitchen,
    summary:
      "From one tired room to a whole house. Kitchens, bathrooms, decorating, floors and the building work behind them.",
    paragraphs: [
      "A renovation is more than a new kitchen. Floors, walls, electrics, plumbing and the way the rooms join all have to be planned together. We run that work so you are not left managing five trades.",
      "We fit kitchens and bathrooms, lay floors, and carry out interior and exterior decorating. Painting is part of the finish, not an afterthought. On the Federation of Master Builders profile we are listed for interior and exterior decorating as well as kitchens, bathrooms and general building.",
      "Older houses can be renovated without stripping out the parts worth keeping. We will say when a feature should stay.",
    ],
    includes: [
      "Full house and single-room refurbishments",
      "Kitchens and bathrooms",
      "Interior and exterior decorating",
      "Flooring and underfloor heating",
      "Carpentry and joinery",
      "Plumbing and heating as part of the renovation",
    ],
  },
  {
    slug: "structural-alterations",
    title: "Structural alterations",
    short: "Walls removed and openings formed, with the support put in first.",
    image: photos.steel,
    summary:
      "Load-bearing walls, wider doorways and layout changes, done with the right supports and building control in mind.",
    paragraphs: [
      "Taking a wall out can make a house feel twice the size. It can also drop the floor above if the support is wrong. We check what the wall is holding, put the steels or beams in, and only then open the room.",
      "The work includes knock-throughs, wider doorways, chimney alterations and extra support for an extension. Calculations and building regulations are part of the job, not an extra you have to chase.",
      "You should end up with a clear room, a tidy finish around the steel, and a house that is still sound.",
    ],
    includes: [
      "Load-bearing wall removal",
      "Steels and padstones",
      "Wider doorways and through lounges",
      "Chimney alterations",
      "Extra support for extensions",
      "Building regulations support",
    ],
  },
];

export const projects = [
  {
    slug: "brick-extension",
    title: "Brick extension",
    place: "Bedfordshire",
    service: "House extensions",
    image: photos.extension,
    summary: "A red brick extension with glazed doors, built to match the house next to it.",
    paragraphs: [
      "This extension is faced in red brick, with a tiled roof and a run of white glazed doors. The aim was more living space without a box that looks stuck on.",
      "The roof timbers were built up over the new wall before the tiles went on. The brick, the verge and the door line were set so the new room reads as part of the house.",
    ],
    gallery: [photos.extension, photos.roofTimbers, photos.window, photos.houseWall],
  },
  {
    slug: "garden-walls",
    title: "Garden and boundary walls",
    place: "Wilstead and Bedfordshire",
    service: "Brickwork",
    image: photos.gardenWall,
    summary: "Garden walls rebuilt in brick, including a completed wall in Wilstead.",
    paragraphs: [
      "Failed garden walls are a regular job for us. We take down what has moved, set a proper base, and rebuild in brick with a coping that sheds water.",
      "One of these rebuilds was in Wilstead. Others are boundary walls with a tile creasing course, and front walls set in front of the house. The mortar is struck so the wall still looks sharp after the scaffold comes down.",
    ],
    gallery: [photos.gardenWall, photos.boundary, photos.wallDetail, photos.newWall, photos.houseWall],
  },
  {
    slug: "listed-roof-and-chimneys",
    title: "Listed roof and chimneys",
    place: "Bedford",
    service: "Heritage restorations",
    image: photos.chimneys,
    summary: "Chimney pots and roof structure renewed, then finished in red clay tiles on a Grade II building in Bedford.",
    paragraphs: [
      "On a Grade II listed building in Bedford, the roof structure and chimney pots were renewed before the tiles went on. The finished roof is in red clay tiles, chosen to suit the house.",
      "The chimney stacks were taken down and rebuilt in brick. The pots went back so the stacks still look right from the street. A separate roof was weathered with a new membrane before the covering went on.",
    ],
    gallery: [photos.chimneys, photos.barn, photos.roofTimbers, photos.membrane, photos.gable],
  },
  {
    slug: "heritage-floors",
    title: "Heritage floors",
    place: "Bedfordshire",
    service: "Heritage restorations",
    image: photos.foam,
    summary: "Foam glass and limecrete floors in an older building, so the floor can dry instead of trapping damp.",
    paragraphs: [
      "Solid floors in old houses often fail because a modern slab traps moisture. On this heritage job we laid a foam glass aggregate base, then a limecrete screed.",
      "The build-up is breathable. Moisture can leave the floor instead of being pushed into the walls. Underfloor heating pipes were laid on other jobs where a new floor was part of the renovation.",
    ],
    gallery: [photos.foam, photos.screed, photos.underfloor],
  },
  {
    slug: "home-refit",
    title: "Kitchen and bathroom refit",
    place: "Bedfordshire",
    service: "Home renovations",
    image: photos.kitchen,
    summary: "An open kitchen and a new bathroom, finished after the building work, not before it.",
    paragraphs: [
      "This kitchen sits in an opened-up room, with an island, a wood floor and wide glass doors. The bathroom is a simple fit: shower, basin and pale tiles.",
      "Decorating, flooring and the fittings came after the structure was right. That order matters. A new kitchen on a failing floor does not stay new for long.",
    ],
    gallery: [photos.kitchen, photos.bathroom, photos.painted, photos.yellow],
  },
  {
    slug: "outbuildings",
    title: "Outbuildings",
    place: "Bedfordshire",
    service: "Heritage restorations",
    image: photos.barn,
    summary: "Brick outbuildings and a clay tile barn roof, repaired so the building can be used again.",
    paragraphs: [
      "Outbuildings take the weather and get left. We have rebuilt roofs, gables and brick shells so these buildings stand up and look like they belong.",
      "The clay tile barn is a clear example: small in scale, careful at the verge and the eaves. Other shots show a gable opened for repair and an outbuilding with a new door and roof edge.",
    ],
    gallery: [photos.barn, photos.outbuilding, photos.gable, photos.reclaimed],
  },
];

export const areas = [
  {
    slug: "bedford",
    title: "Builders in Bedford",
    image: photos.bay,
    summary:
      "Our base is on Goldington Road. Most of our Bedford work is on houses people want to keep: extensions, brick repairs, listed roofs and full renovations.",
    paragraphs: [
      "Jenstone is based at 9 Goldington Road, Bedford, MK40 3JY. We have worked from Bedford since 2012. When you call, you get the firm that will do the job, not a call centre.",
      "Bedford has a lot of brick houses, Victorian terraces and older homes that need more than a coat of paint. We extend them, open up the ground floor, repoint tired brick and repair listed roofs and chimneys. A Grade II roof in Bedford was retiled in red clay after the structure and chimney pots were renewed.",
      "We also work in the town’s neighbours: Kempston, Brickhill, Putnoe, Elstow and the villages just outside, including Wilstead, where we rebuilt a garden wall.",
      "If the house is in Bedford and the work is building, brick, lime or a proper renovation, ask us to look at it.",
    ],
  },
  {
    slug: "bedfordshire",
    title: "Builders in Bedfordshire",
    image: photos.yellow,
    summary:
      "From Bedford out to the market towns and villages. Extensions, lime repairs and brickwork on the houses the county is known for.",
    paragraphs: [
      "Bedfordshire is full of brick villages and older houses that were patched with the wrong materials. We cover the county from our Bedford yard: Ampthill, Flitwick, Shefford, Biggleswade, Sandy, Potton, Stotfold and the Leighton Buzzard side, as well as the villages between.",
      "The work changes with the house. A 1970s home might need a rear extension and a new kitchen. A cottage might need lime plaster, a breathable floor and brick repairs. We do both, and we say which method fits.",
      "Wilstead is one village where you can see the brickwork: a garden wall rebuilt and finished properly. The same standard applies across the county.",
      "If you are outside Bedford but still in Bedfordshire, call with the address. We would rather tell you straight if the trip does not make sense.",
    ],
  },
  {
    slug: "buckinghamshire",
    title: "Builders in Buckinghamshire",
    image: photos.painted,
    summary:
      "We cross the county line for extensions, renovations and older brick houses in north Buckinghamshire.",
    paragraphs: [
      "Buckinghamshire sits on our doorstep. From Bedford we cover the north of the county, including Milton Keynes, Newport Pagnell, Olney, Stony Stratford, Buckingham and the villages around them. Aylesbury and the towns further south are possible when the job suits a team travelling from Bedford.",
      "Milton Keynes has newer houses that have run out of room. Those jobs are often extensions, knock-throughs and kitchen renovations. The older brick villages need a different hand: matching brick, lime where it belongs, and roofs that look right.",
      "We do not pretend to have a second yard in Buckinghamshire. The team comes from Bedford, the quotes are clear, and the site is left clean. That is the same promise we make at home.",
    ],
  },
];

export const gallery: Photo[] = [
  photos.extension,
  photos.barn,
  photos.kitchen,
  photos.bay,
  photos.chimneys,
  photos.gardenWall,
  photos.yellow,
  photos.boundary,
  photos.window,
  photos.bathroom,
  photos.outbuilding,
  photos.steel,
  photos.wallDetail,
  photos.roofTimbers,
  photos.gable,
  photos.reclaimed,
  photos.newWall,
  photos.houseWall,
  photos.bricklaying,
  photos.pier,
  photos.painted,
  photos.scaffold,
  photos.membrane,
  photos.foam,
  photos.screed,
  photos.underfloor,
  photos.van,
  photos.workshop,
];

export const faqs = [
  {
    q: "What areas do you cover?",
    a: "We are based in Bedford and work across Bedfordshire and Buckinghamshire, including Milton Keynes and the villages around Bedford. If you are further out, call and we will say if we can take the job.",
  },
  {
    q: "Are you an FMB member?",
    a: "Yes. Jenstone Building Services is listed with the Federation of Master Builders. Members need public liability insurance, a trading history and they sign up to the FMB code of conduct.",
  },
  {
    q: "Do you work on listed buildings?",
    a: "Yes. We repair Grade II buildings and other older homes. That includes lime plaster, lime floors, chimney rebuilds and clay tile roofs. Listed building consent is separate from the build, and we work with that.",
  },
  {
    q: "Do you decorate as well as build?",
    a: "Yes. Interior and exterior decorating is part of our renovation work, along with kitchens, bathrooms, flooring and joinery. On a full refit, the decorating is planned with the building work.",
  },
  {
    q: "How do I get a quote?",
    a: "Call 01234 826776 or 07738 411842, email hello@jenstonebuildingservices.co.uk, or use the contact form. Tell us the address and what you want done. We will say if we are the right firm and arrange a visit.",
  },
];

export function localBusinessSchema() {
  return {
    "@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    image: publicUrl("/apple-touch-icon.png"),
    logo: publicUrl("/apple-touch-icon.png"),
    telephone: site.phoneTel,
    email: site.email,
    foundingDate: site.founded,
    description: site.description,
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: site.locality,
      addressRegion: site.region,
      postalCode: site.postcode,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.lat,
      longitude: site.lng,
    },
    hasMap: site.map,
    areaServed: [
      { "@type": "City", name: "Bedford" },
      { "@type": "AdministrativeArea", name: "Bedfordshire" },
      { "@type": "AdministrativeArea", name: "Buckinghamshire" },
    ],
    sameAs: [site.fmb, site.instagram, site.linkedin, site.map],
    identifier: {
      "@type": "PropertyValue",
      name: "Companies House number",
      value: site.companyNumber,
    },
    knowsAbout: services.map((item) => item.title),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: publicUrl(item.path),
    })),
  };
}

export function graph(...nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
