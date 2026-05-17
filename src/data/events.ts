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
    id: "bluegrass-jam",
    name: "Bluegrass Jam at McMenamins",
    date: "2026-05-17",
    time: "7:00 PM",
    location: "McMenamins Anderson School",
    category: "Live Music",
    description: "Open pickers welcome. Banjos, fiddles, and a friendly crowd on the patio.",
    cost: "Free",
    when: "tonight",
  },
  {
    id: "coworking-tuesday",
    name: "Coworking Tuesday",
    date: "2026-05-19",
    time: "9:00 AM – 3:00 PM",
    location: "Vinason Pho & Grill (back room)",
    category: "Business",
    description: "Drop-in coworking for remote folks. Free Wi-Fi, $2 off drip coffee for laptops.",
    cost: "Free",
    when: "week",
  },
  {
    id: "wine-wednesday",
    name: "Wine Wednesday at Sport Restaurant",
    date: "2026-05-20",
    time: "5:00 PM – 9:00 PM",
    location: "Sport Restaurant & Bar",
    category: "Food & Drink",
    description: "Half-off bottles of Washington reds. Cheese board pairings from local makers.",
    cost: "Varies",
    when: "week",
  },
  {
    id: "food-truck-friday",
    name: "Food Truck Friday",
    date: "2026-05-22",
    time: "11:30 AM – 2:00 PM",
    location: "Pop Keeney Field lot",
    category: "Food & Drink",
    description: "Six rotating trucks: birria, bao, açaí, wood-fired pizza, jerk chicken, and shaved ice.",
    cost: "Pay per truck",
    when: "weekend",
  },
  {
    id: "trivia-night",
    name: "Trivia Night at Hop & Hound",
    date: "2026-05-17",
    time: "8:00 PM",
    location: "Hop & Hound Pub",
    category: "Trivia",
    description: "Six rounds, no app required. Winning team takes home a $50 tab.",
    cost: "Free to play",
    when: "tonight",
  },
  {
    id: "live-amaros",
    name: "Live Acoustic at Amaro Bistro",
    date: "2026-05-17",
    time: "6:30 PM",
    location: "Amaro Bistro on Main",
    category: "Live Music",
    description: "Singer-songwriter Maya Lin plays a soft set during dinner service.",
    when: "tonight",
  },
  {
    id: "chamber-networking",
    name: "Chamber Morning Mixer",
    date: "2026-05-21",
    time: "7:30 AM – 9:00 AM",
    location: "Bothell Chamber HQ",
    category: "Business",
    description: "Coffee, intros, and a 5-minute spotlight from a new member each week.",
    cost: "$5 members / $15 guests",
    when: "week",
  },
  {
    id: "state-of-city",
    name: "State of the City",
    date: "2026-05-22",
    time: "6:00 PM",
    location: "Northshore Performing Arts Center",
    category: "Civic",
    description: "Mayor's annual address with updates on downtown, transit, and parks.",
    cost: "Free",
    when: "weekend",
  },
  {
    id: "uwb-spring-fair",
    name: "UW Bothell Spring Fair",
    date: "2026-05-23",
    time: "12:00 PM – 4:00 PM",
    location: "UW Bothell Promenade",
    category: "Campus",
    description: "Student bands, club tables, free food samples. Open to the public.",
    cost: "Free",
    when: "weekend",
  },
  {
    id: "popup-makers",
    name: "Cedar Makers Pop Up",
    date: "2026-05-23",
    time: "10:00 AM – 5:00 PM",
    location: "Main Street courtyard",
    category: "Pop Up",
    description: "12 local makers — ceramics, candles, prints, baked goods.",
    cost: "Free entry",
    when: "weekend",
  },
  {
    id: "family-storytime",
    name: "Riverwalk Storytime",
    date: "2026-05-17",
    time: "10:30 AM",
    location: "Bothell Library lawn",
    category: "Family",
    description: "Outdoor read-aloud and bubble play. Bring a blanket.",
    cost: "Free",
    when: "today",
  },
  {
    id: "farmers-market",
    name: "Country Village Farmers Market",
    date: "2026-05-17",
    time: "9:00 AM – 2:00 PM",
    location: "Country Village",
    category: "Food & Drink",
    description: "Spring produce, fresh bread, and live folk duo Pine + Pine.",
    cost: "Free entry",
    when: "today",
  },
];

export interface BusinessNote {
  id: string;
  business: string;
  note: string;
  tag: "Hours" | "Special" | "Spotlight" | "Pop Up" | "Live Music";
  posted: string;
}

export const businessNotes: BusinessNote[] = [
  { id: "n1", business: "Cedar & Salt Bakery", note: "Now open Sundays 8a–1p. Cardamom buns out at 9.", tag: "Hours", posted: "2h ago" },
  { id: "n2", business: "Riverwalk Coffee", note: "Buy-one-get-one cold brew Friday after 2pm.", tag: "Special", posted: "5h ago" },
  { id: "n3", business: "Northshore Cycles", note: "Free tune-up clinic Saturday morning, walk-ins welcome.", tag: "Special", posted: "Yesterday" },
  { id: "n4", business: "The Foundry", note: "Chamber member spotlight — 10 years on Main Street.", tag: "Spotlight", posted: "2d ago" },
  { id: "n5", business: "Birrieria Lupita Truck", note: "Parked at 240th & 24th tonight 5–9pm.", tag: "Pop Up", posted: "1h ago" },
  { id: "n6", business: "Amaro Bistro", note: "Acoustic set tonight at 6:30, no cover.", tag: "Live Music", posted: "3h ago" },
];

export interface CommunityPost {
  id: string;
  title: string;
  body: string;
  by: string;
}

export const communityBoard: CommunityPost[] = [
  { id: "c1", title: "Trail cleanup volunteers needed", body: "Sammamish River Trail crew meets Saturday 9am at the Park & Ride. Gloves provided.", by: "Bothell Parks Foundation" },
  { id: "c2", title: "Lost cat near Norway Hill", body: "Orange tabby, answers to Otis. Last seen near 100th Ave NE.", by: "Resident" },
  { id: "c3", title: "Free youth soccer clinic", body: "Sunday 1pm at Pop Keeney. Ages 6–10, no signup needed.", by: "Northshore Youth Soccer" },
];