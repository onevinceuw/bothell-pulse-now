export type Category =
  | "Food & Drink"
  | "Live Music"
  | "Trivia"
  | "Pop Up"
  | "Civic"
  | "Campus"
  | "Family"
  | "Business";

export interface PulseEvent {
  id: string;
  name: string;
  date: string; // ISO date
  time: string;
  location: string;
  category: Category;
  description: string;
  cost?: string;
  link?: string;
  when: "today" | "tonight" | "weekend" | "week";
}

export const categories: Category[] = [
  "Food & Drink",
  "Live Music",
  "Trivia",
  "Pop Up",
  "Civic",
  "Campus",
  "Family",
  "Business",
];

export const events: PulseEvent[] = [
  {
    id: "anderson-school-gardens-tour-2026-05-15",
    name: "Anderson School Gardens Tour",
    date: "2026-05-15",
    time: "3:00 PM",
    location: "McMenamins Anderson School, 18607 Bothell Way NE, Bothell",
    category: "Civic",
    description:
      "Tour the Anderson School gardens at McMenamins; all ages welcome. Listed as a ticketed 3pm garden tour.",
    cost: "Ticketed",
    link: "https://www.mcmenamins.com/events/276831-anderson-school-gardens-tour",
    when: "week",
  },
  {
    id: "live-music-at-the-cottage-2026-05-15",
    name: "Live Music at The Cottage",
    date: "2026-05-15",
    time: "6:30 PM - 9:30 PM",
    location: "The Cottage, 10029 NE 183rd St, Bothell",
    category: "Live Music",
    description:
      "Experience live music with indoor seating and patio listening; reservations recommended but not required; all ages welcome.",
    link: "https://bothellkenmorechamber.org/event/live-music-the-cottage/2026-05-15/",
    when: "week",
  },
  {
    id: "80s-prom-with-nite-wave-2026-05-15",
    name: "'80s Prom with Nite Wave",
    date: "2026-05-15",
    time: "7:00 PM",
    location: "McMenamins Anderson School, Bothell",
    category: "Live Music",
    description: "Dance-party style event featuring 80s music at Anderson School; listed as 21+.",
    link: "https://www.mcmenamins.com/events/275270-80s-prom-with-nite-wave",
    when: "week",
  },
  {
    id: "palmer-and-cassie-2026-05-15",
    name: "Palmer and Cassie",
    date: "2026-05-15",
    time: "7:00 PM",
    location: "Thorndike Room, McMenamins Anderson School, Bothell",
    category: "Live Music",
    description: "Free, all-ages live music event at the Thorndike Room.",
    cost: "Free",
    link: "https://www.mcmenamins.com/events/276329-palmer-and-cassie",
    when: "week",
  },
  {
    id: "rising-artisans-kids-fine-art-classes-2026-05-16",
    name: "Rising Artisans Kids Fine Art Classes Ages 9+",
    date: "2026-05-16",
    time: "8:30 AM - 10:00 AM",
    location: "Willard Art & Frame, Bothell",
    category: "Family",
    description:
      "Kids fine art class for ages 9+; Chamber listing shows the Saturday morning class as a recurring local art event.",
    link: "https://bothellkenmorechamber.org/event/rising-artisans-kids-fine-art-classes-ages-9/2026-05-16/",
    when: "week",
  },
  {
    id: "world-vision-global-6k-for-clean-water-2026-05-16",
    name: "World Vision Global 6K for Clean Water",
    date: "2026-05-16",
    time: "9:00 AM - 11:00 AM",
    location: "Bothell area",
    category: "Civic",
    description:
      "Charity 6K walk/run supporting clean water; listed on the Bothell Kenmore Chamber calendar.",
    link: "https://bothellkenmorechamber.org/event/world-vision-global-6k-for-clean-water/",
    when: "week",
  },
  {
    id: "spring-residential-recycling-event-2026-05-16",
    name: "Spring Residential Recycling Event",
    date: "2026-05-16",
    time: "9:00 AM - 3:00 PM",
    location: "Kenmore Park & Ride / Heron Haven area, Kenmore",
    category: "Civic",
    description:
      "Residential recycling collection event; some fees apply and limited rain barrels/compost bins are available while supplies last.",
    link: "https://www.cityoflfp.gov/Calendar.aspx?EID=3206",
    when: "week",
  },
  {
    id: "adopt-a-park-volunteer-work-party-2026-05-16",
    name: "Adopt a Park Volunteer Work Party",
    date: "2026-05-16",
    time: "11:00 AM - 2:00 PM",
    location: "Wallace Swamp Creek Park, Kenmore",
    category: "Civic",
    description:
      "Volunteer habitat restoration work party at Wallace Swamp Creek Park; all ages welcome.",
    link: "https://www.kenmorewa.gov/Home/Components/Calendar/Event/3662/102",
    when: "week",
  },
  {
    id: "pop-up-book-sale-friends-of-the-bothell-library-2026-05-16",
    name: "Pop-Up Book Sale: Friends of the Bothell Library",
    date: "2026-05-16",
    time: "12:00 PM - 5:30 PM",
    location: "Bothell Library, Bothell",
    category: "Pop Up",
    description:
      "Browse and buy from a selection of pre-loved books. Proceeds benefit library programs and events.",
    link: "https://kcls.bibliocommons.com/v2/events?locations=1493",
    when: "week",
  },
  {
    id: "anderson-schools-history-art-tour-2026-05-16",
    name: "Anderson School's History & Art Tour",
    date: "2026-05-16",
    time: "1:00 PM",
    location: "McMenamins Anderson School, 18607 Bothell Way NE, Bothell",
    category: "Civic",
    description:
      "Ticketed history and art tour at Anderson School; McMenamins listing shows 1pm and all ages welcome.",
    cost: "Ticketed",
    link: "https://www.mcmenamins.com/events/276834-anderson-schools-history-art-tour",
    when: "week",
  },
  {
    id: "yoga-nidra-guided-meditation-2026-05-16",
    name: "Yoga Nidra Guided Meditation",
    date: "2026-05-16",
    time: "5:30 PM - 6:30 PM",
    location: "Lakeview Yoga, 7800 NE Bothell Way, Suite 155, Kenmore",
    category: "Family",
    description:
      "Guided meditation session designed to help participants slow down, release stress, and reset the nervous system.",
    link: "https://findkenmore.org/events/",
    when: "week",
  },
  {
    id: "film-discussion-group-2026-05-17",
    name: "Film Discussion Group",
    date: "2026-05-17",
    time: "11:30 AM - 12:30 PM",
    location: "Northlake Lutheran Church, 6620 NE 185th St, Kenmore",
    category: "Civic",
    description:
      "Light lunch and film discussion inspired by Caste: The Origins of Our Discontents by Isabel Wilkerson.",
    link: "https://findkenmore.org/events/",
    when: "today",
  },
  {
    id: "bbq-and-beer-pairing-featuring-outsider-bbq-2026-05-17",
    name: "BBQ and Beer Pairing featuring Outsider BBQ",
    date: "2026-05-17",
    time: "12:00 PM - 2:00 PM",
    location: "Postdoc Brewing, 7204 NE 175th St, Kenmore",
    category: "Food & Drink",
    description:
      "Close-out event for Postdoc Brewing Kenmore's 2nd anniversary with beer and Turkish-style BBQ from Outsider BBQ.",
    link: "https://findkenmore.org/events/",
    when: "today",
  },
  {
    id: "bluegrass-jam-and-concert-2026-05-17",
    name: "Bluegrass Jam and Concert",
    date: "2026-05-17",
    time: "2:30 PM - 7:30 PM",
    location: "Copperworks Distilling Kenmore, NE 175th St, Kenmore",
    category: "Live Music",
    description:
      "Join the jam or listen to traditional and modern bluegrass; jam starts indoors, then music moves outside and into band performances.",
    link: "https://bothellkenmorechamber.org/event/bluegrass-jam-and-concert-2/2026-05-17/",
    when: "tonight",
  },
  {
    id: "chinese-book-group-2026-05-17",
    name: "Chinese Book Group",
    date: "2026-05-17",
    time: "3:00 PM - 4:30 PM",
    location: "Bothell Library, Bothell",
    category: "Family",
    description:
      "Read and discuss books in Mandarin. Book group titles are available at Bothell Library; registration not required.",
    link: "https://kcls.bibliocommons.com/v2/events?locations=1493",
    when: "today",
  },
  {
    id: "toddler-story-time-2026-05-18",
    name: "Toddler Story Time",
    date: "2026-05-18",
    time: "10:00 AM - 10:30 AM",
    location: "Bothell Library, Bothell",
    category: "Family",
    description:
      "Stories, music, movement and rhymes for busy toddlers; designed for 18 months to age 3 with an adult.",
    link: "https://kcls.bibliocommons.com/v2/events?locations=1493",
    when: "week",
  },
  {
    id: "baby-story-time-2026-05-18",
    name: "Baby Story Time",
    date: "2026-05-18",
    time: "11:00 AM - 11:30 AM",
    location: "Bothell Library, Bothell",
    category: "Family",
    description:
      "Nursery rhymes, songs and stories for pre-walking babies, newborn to 18 months, with an adult.",
    link: "https://kcls.bibliocommons.com/v2/events?locations=1493",
    when: "week",
  },
  {
    id: "talk-time-english-conversation-practice-2026-05-18",
    name: "Talk Time: English Conversation Practice",
    date: "2026-05-18",
    time: "1:15 PM - 3:00 PM",
    location: "Bothell Library, Bothell",
    category: "Family",
    description:
      "Practice speaking English with other English language learners and trained conversation helpers; all levels welcome.",
    link: "https://kcls.bibliocommons.com/v2/events?locations=1493",
    when: "week",
  },
  {
    id: "coworking-tuesdays-2026-05-19",
    name: "Coworking Tuesdays",
    date: "2026-05-19",
    time: "9:30 AM - 11:30 AM",
    location: "Bothell Visitor Center / Bothell Kenmore Chamber, 10031 Main St, Bothell",
    category: "Business",
    description:
      "Drop-in coworking morning for business owners, remote workers, creatives, students, nonprofit leaders and others seeking focused work time with light community.",
    link: "https://bothellkenmorechamber.org/event/coworkingtuesdays-2-2/2026-05-19/",
    when: "week",
  },
  {
    id: "break-even-bottle-program-2026-05-19",
    name: "Break Even Bottle Program",
    date: "2026-05-19",
    time: "4:00 PM - 8:00 PM",
    location: "The Cottage, 10029 NE 183rd St, Bothell",
    category: "Food & Drink",
    description:
      "Weekly Tuesday program featuring rare and distinctive spirits offered through The Cottage's break-even bottle program.",
    link: "https://bothellkenmorechamber.org/event/break-even-bottle-program-every-tuesday-at-the-cottage/2026-05-19/",
    when: "week",
  },
  {
    id: "what-are-you-reading-book-group-2026-05-19",
    name: "What Are You Reading Book Group",
    date: "2026-05-19",
    time: "6:00 PM - 7:30 PM",
    location: "Bothell Library, Bothell",
    category: "Family",
    description:
      "Open-ended reader discussion where attendees share current reads, TBR lists, DNF lists and book recommendations.",
    link: "https://kcls.bibliocommons.com/v2/events?locations=1493",
    when: "week",
  },
  {
    id: "bingo-at-anderson-2026-05-19",
    name: "Bingo at Anderson",
    date: "2026-05-19",
    time: "TBD",
    location: "Haynes' Hall, McMenamins Anderson School, Bothell",
    category: "Trivia",
    description:
      "Bingo event listed by McMenamins as an upcoming Anderson School event on Tuesday, May 19.",
    link: "https://www.mcmenamins.com/events/276425-tenderpiles-smile-aisle",
    when: "week",
  },
  {
    id: "tutors-at-bothell-library-study-zone-2026-05-20",
    name: "Tutors at Bothell Library (Study Zone)",
    date: "2026-05-20",
    time: "2:30 PM - 4:30 PM",
    location: "Bothell Library, Bothell",
    category: "Family",
    description:
      "Volunteer tutors provide drop-in homework help for grades K-12; subject and language availability may vary.",
    link: "https://kcls.bibliocommons.com/v2/events?locations=1493",
    when: "week",
  },
  {
    id: "wine-wednesday-at-the-cottage-2026-05-20",
    name: "Wine Wednesday at The Cottage",
    date: "2026-05-20",
    time: "5:00 PM - 8:00 PM",
    location: "The Cottage, 10029 NE 183rd St, Bothell",
    category: "Food & Drink",
    description:
      "Weekly wine tasting with a boutique winery partner; sample wines and learn about the winery and winemaking process.",
    link: "https://bothellkenmorechamber.org/event/wine-wednesday-at-the-cottage-2-2/2026-05-20/",
    when: "week",
  },
  {
    id: "hispanic-latin-american-heritage-planning-2026-05-20",
    name: "Hispanic and Latin American Heritage Month Event Planning Team",
    date: "2026-05-20",
    time: "5:30 PM - 7:30 PM",
    location: "Bothell Library, Bothell",
    category: "Family",
    description:
      "Middle and high school age youth help plan Hispanic and Latin American Heritage Month events; registration required.",
    link: "https://kcls.bibliocommons.com/v2/events?locations=1493",
    when: "week",
  },
  {
    id: "cooks-book-group-2026-05-20",
    name: "Cook's Book Group",
    date: "2026-05-20",
    time: "6:30 PM - 7:30 PM",
    location: "Bothell Library, Bothell",
    category: "Family",
    description:
      "Cookbook discussion moved to Bothell Library due to Kenmore Library roof repairs; this session centers on Ina Garten's Go-to Dinners.",
    link: "https://kcls.bibliocommons.com/v2/events?locations=1493",
    when: "week",
  },
  {
    id: "state-of-the-city-bothell-2026-05-21",
    name: "General Meeting - State of the City Bothell",
    date: "2026-05-21",
    time: "7:30 AM - 9:00 AM",
    location: "Mobius Hall, Cascadia College Campus, Bothell",
    category: "Civic",
    description:
      "Annual State of the City Bothell General Meeting featuring city leadership updates, council priorities and the Bothell 2040 Vision Plan.",
    link: "https://bothellkenmorechamber.org/event/general-meeting-5/",
    when: "week",
  },
  {
    id: "family-story-time-2026-05-21",
    name: "Family Story Time",
    date: "2026-05-21",
    time: "10:00 AM - 10:30 AM",
    location: "Bothell Library, Bothell",
    category: "Family",
    description:
      "Stories, music, movement and rhymes to help develop early literacy; all ages welcome with adult.",
    link: "https://kcls.bibliocommons.com/v2/events?locations=1493",
    when: "week",
  },
  {
    id: "english-language-learners-classes-2026-05-21",
    name: "English Language Learners Classes",
    date: "2026-05-21",
    time: "1:30 PM - 3:00 PM",
    location: "Bothell Library, Bothell",
    category: "Family",
    description:
      "Beginner-friendly English reading, writing, grammar and conversation skills class with an experienced instructor.",
    link: "https://kcls.bibliocommons.com/v2/events?locations=1493",
    when: "week",
  },
  {
    id: "all-night-happy-hour-at-the-cottage-2026-05-21",
    name: "All Night Happy Hour at The Cottage",
    date: "2026-05-21",
    time: "4:00 PM - 9:00 PM",
    location: "The Cottage, 10029 NE 183rd St, Bothell",
    category: "Food & Drink",
    description:
      "Thursday evening happy hour with drinks and seasonal snacks; reservations encouraged.",
    link: "https://bothellkenmorechamber.org/event/all-night-happy-hour-at-the-cottage-2/2026-05-21/",
    when: "week",
  },
  {
    id: "anderson-school-gardens-tour-2026-05-22",
    name: "Anderson School Gardens Tour",
    date: "2026-05-22",
    time: "3:00 PM",
    location: "McMenamins Anderson School, 18607 Bothell Way NE, Bothell",
    category: "Civic",
    description:
      "Tour the Anderson School gardens at McMenamins; all ages welcome. Listed as a ticketed 3pm garden tour.",
    cost: "Ticketed",
    link: "https://www.mcmenamins.com/events/276831-anderson-school-gardens-tour",
    when: "weekend",
  },
  {
    id: "live-music-at-the-cottage-mike-wayock-2026-05-22",
    name: "Live Music at The Cottage: Mike Wayock",
    date: "2026-05-22",
    time: "6:30 PM - 9:30 PM",
    location: "The Cottage, 10029 NE 183rd St, Bothell",
    category: "Live Music",
    description:
      "Live music at The Cottage featuring Mike Wayock, described by The Cottage as a versatile powerhouse musician and human jukebox.",
    link: "https://thecottagebothell.com/events/live-music/",
    when: "weekend",
  },
  {
    id: "nick-moshier-2026-05-22",
    name: "Nick Moshier",
    date: "2026-05-22",
    time: "7:00 PM",
    location: "Thorndike Room, McMenamins Anderson School, Bothell",
    category: "Live Music",
    description: "Free, all-ages live music event at McMenamins Anderson School's Thorndike Room.",
    cost: "Free",
    link: "https://www.mcmenamins.com/events/276330-nick-moshier",
    when: "weekend",
  },
  {
    id: "punch-needle-craft-night-2026-05-22",
    name: "Punch Needle Craft Night with Make Apothecary",
    date: "2026-05-22",
    time: "TBD",
    location: "Haynes' Hall, McMenamins Anderson School, Bothell",
    category: "Pop Up",
    description:
      "Craft night listed by McMenamins as an upcoming Anderson School event on Friday, May 22.",
    link: "https://www.mcmenamins.com/events/276425-tenderpiles-smile-aisle",
    when: "weekend",
  },
  {
    id: "rising-artisans-kids-fine-art-classes-2026-05-23",
    name: "Rising Artisans Kids Fine Art Classes Ages 9+",
    date: "2026-05-23",
    time: "8:30 AM - 10:00 AM",
    location: "Willard Art & Frame, Bothell",
    category: "Family",
    description:
      "Kids fine art class for ages 9+; Chamber listing shows the Saturday morning class as a recurring local art event.",
    link: "https://bothellkenmorechamber.org/event/rising-artisans-kids-fine-art-classes-ages-9/2026-05-23/",
    when: "weekend",
  },
  {
    id: "making-local-market-2026-05-23",
    name: "Making Local Market",
    date: "2026-05-23",
    time: "10:00 AM - 4:00 PM",
    location: "Bothell City Hall parking lot, 18415 101st Ave NE, Bothell",
    category: "Pop Up",
    description:
      "Craft market with nearly 100 vendors selling gifts, food, clothing, art, pottery, jewelry, plants, home goods and candles.",
    link: "https://www.events12.com/seattle/",
    when: "weekend",
  },
  {
    id: "anderson-schools-history-art-tour-2026-05-23",
    name: "Anderson School's History & Art Tour",
    date: "2026-05-23",
    time: "1:00 PM",
    location: "McMenamins Anderson School, 18607 Bothell Way NE, Bothell",
    category: "Civic",
    description:
      "Ticketed history and art tour at Anderson School; McMenamins listing shows 1pm and all ages welcome.",
    cost: "Ticketed",
    link: "https://www.mcmenamins.com/events/276834-anderson-schools-history-art-tour",
    when: "weekend",
  },
  {
    id: "hispanic-latin-american-heritage-planning-2026-05-23",
    name: "Hispanic and Latin American Heritage Month Event Planning Team",
    date: "2026-05-23",
    time: "3:00 PM - 5:00 PM",
    location: "Bothell Library, Bothell",
    category: "Family",
    description:
      "Middle and high school age youth help plan Hispanic and Latin American Heritage Month events; registration required.",
    link: "https://kcls.bibliocommons.com/v2/events?locations=1493",
    when: "weekend",
  },
  {
    id: "petals-on-the-river-2026-05-24",
    name: "Petals on the River",
    date: "2026-05-24",
    time: "12:30 PM - 1:00 PM",
    location: "Footbridge at Park at Bothell Landing, 9919 NE 180th St, Bothell",
    category: "Civic",
    description:
      "Bothell Historical Society memorial gathering where participants cast petals in the Sammamish River in tribute to loved ones.",
    link: "https://bothellkenmorechamber.org/event/petals-on-the-river/",
    when: "weekend",
  },
  {
    id: "bluegrass-jam-and-concert-2026-05-24",
    name: "Bluegrass Jam and Concert",
    date: "2026-05-24",
    time: "2:30 PM - 7:30 PM",
    location: "Copperworks Distilling Kenmore, NE 175th St, Kenmore",
    category: "Live Music",
    description:
      "Join the jam or listen to traditional and modern bluegrass; jam starts indoors and later transitions to band performances.",
    link: "https://bothellkenmorechamber.org/event/bluegrass-jam-and-concert-2/2026-05-24/",
    when: "weekend",
  },
];

export interface BusinessNote {
  id: string;
  business: string;
  note: string;
  tag: "Chamber" | "Library" | "McMenamins" | "Kenmore" | "Market" | "Live Music";
  posted: string;
}

export const businessNotes: BusinessNote[] = [
  {
    id: "n1",
    business: "The Cottage",
    note: "The demo sheet includes live music, wine tasting, a break-even bottle program, and all-night happy hour at The Cottage.",
    tag: "Chamber",
    posted: "From spreadsheet",
  },
  {
    id: "n2",
    business: "Bothell Library",
    note: "KCLS rows include story times, book groups, study help, teen planning, and English conversation practice.",
    tag: "Library",
    posted: "From spreadsheet",
  },
  {
    id: "n3",
    business: "McMenamins Anderson School",
    note: "The spreadsheet includes garden tours, history and art tours, live music, bingo, and craft night listings.",
    tag: "McMenamins",
    posted: "From spreadsheet",
  },
  {
    id: "n4",
    business: "Kenmore community events",
    note: "Kenmore rows include bluegrass, guided meditation, a park volunteer work party, recycling, and a film discussion.",
    tag: "Kenmore",
    posted: "From spreadsheet",
  },
  {
    id: "n5",
    business: "Making Local Market",
    note: "The May 23 market row lists nearly 100 vendors at the Bothell City Hall parking lot.",
    tag: "Market",
    posted: "From spreadsheet",
  },
  {
    id: "n6",
    business: "Copperworks Distilling Kenmore",
    note: "Bluegrass Jam and Concert appears for May 17 and May 24 in the Chamber source rows.",
    tag: "Live Music",
    posted: "From spreadsheet",
  },
];

export interface CommunityPost {
  id: string;
  title: string;
  body: string;
  by: string;
}

export const communityBoard: CommunityPost[] = [
  {
    id: "c1",
    title: "Volunteer work party",
    body: "Wallace Swamp Creek Park has an Adopt a Park Volunteer Work Party listed for May 16.",
    by: "City of Kenmore source row",
  },
  {
    id: "c2",
    title: "Library programs",
    body: "Bothell Library has family, teen, language, study, and book group events in the demo sheet.",
    by: "KCLS source rows",
  },
  {
    id: "c3",
    title: "City update",
    body: "The State of the City Bothell Chamber meeting is listed for May 21 at Cascadia College.",
    by: "Chamber source row",
  },
];
