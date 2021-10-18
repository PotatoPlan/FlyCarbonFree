const airports = [
  {
    key: "Winton",
    value: "WIN",
    text: "Winton, QLD",
  },
  {
    key: "Roma",
    value: "RMA",
    text: "Roma, QLD",
  },
  {
    key: "Albury",
    value: "ABX",
    text: "Albury, NSW",
  },
  {
    key: "Wagga Wagga",
    value: "WGA",
    text: "Wagga Wagga, NSW",
  },
  {
    key: "Brisbane-Archerfield",
    value: "YBAF",
    text: "Brisbane-Archerfield, QLD",
  },
  {
    key: "Brisbane",
    value: "BNE",
    text: "Brisbane, QLD",
  },
  {
    key: "Charleville",
    value: "CTL",
    text: "Charleville, QLD",
  },
  {
    key: "Mackay",
    value: "MKY",
    text: "Mackay, QLD",
  },
  {
    key: "Avalon",
    value: "AVV",
    text: "Avalon, VIC",
  },
  {
    key: "Bairnsdale",
    value: "BSJ",
    text: "Bairnsdale, VIC",
  },
  {
    key: "Bendigo",
    value: "BXG",
    text: "Bendigo, VIC",
  },
  {
    key: "Melbourne-Essendon",
    value: "MEB",
    text: "Melbourne-Essendon, VIC",
  },
  {
    key: "Horsham",
    value: "HSM",
    text: "Horsham, VIC",
  },
  {
    key: "Latrobe Valley",
    value: "LTB",
    text: "Latrobe Valley, VIC",
  },
  {
    key: "Melbourne-Tullamarine",
    value: "MEL",
    text: "Melbourne-Tullamarine, VIC",
  },
  {
    key: "Melbourne-Moorabbin",
    value: "MBW",
    text: "Melbourne-Moorabbin, VIC",
  },
  {
    key: "Jandakot",
    value: "JAD",
    text: "Jandakot, WA",
  },
  {
    key: "Perth",
    value: "PER",
    text: "Perth, WA",
  },
  {
    key: "Port Hedland",
    value: "PHE",
    text: "Port Hedland, WA",
  },
  {
    key: "Newman",
    value: "ZNE",
    text: "Newman, WA",
  },
  {
    key: "Kununurra",
    value: "KNX",
    text: "Kununurra, WA",
  },
  {
    key: "Karratha",
    value: "KTA",
    text: "Karratha, WA",
  },
  {
    key: "Kalgoorlie-Boulder",
    value: "KGI",
    text: "Kalgoorlie-Boulder, WA",
  },
  {
    key: "Geraldton",
    value: "GET",
    text: "Geraldton, WA",
  },
  {
    key: "Derby",
    value: "DRB",
    text: "Derby, WA",
  },
  {
    key: "Busselton",
    value: "BQB",
    text: "Busselton, WA",
  },
  {
    key: "Broome International",
    value: "BME",
    text: "Broome International, WA",
  },
  {
    key: "Albany",
    value: "ALH",
    text: "Albany, WA",
  },
  {
    key: "Mildura",
    value: "MQL",
    text: "Mildura, VIC",
  },
  {
    key: "Whyalla",
    value: "WYA",
    text: "Whyalla, SA",
  },
  {
    key: "Port Lincoln",
    value: "PLO",
    text: "Port Lincoln, SA",
  },
  {
    key: "Ceduna",
    value: "CED",
    text: "Ceduna, SA",
  },
  {
    key: "Adelaide",
    value: "ADL",
    text: "Adelaide, SA",
  },
  {
    key: "Sunshine Coast",
    value: "MCY",
    text: "Sunshine Coast, QLD",
  },
  {
    key: "Mudgee",
    value: "DGE",
    text: "Mudgee, NSW",
  },
  {
    key: "Moruya",
    value: "MYA",
    text: "Moruya, NSW",
  },
  {
    key: "Moree",
    value: "MRZ",
    text: "Moree, NSW",
  },
  {
    key: "Lightning Ridge",
    value: "LHG",
    text: "Lightning Ridge, NSW",
  },
  {
    key: "Coffs Harbour",
    value: "CFS",
    text: "Coffs Harbour, NSW",
  },
  {
    key: "Bourke",
    value: "BRK",
    text: "Bourke, NSW",
  },
  {
    key: "Bathurst",
    value: "BHS",
    text: "Bathurst, NSW",
  },
  {
    key: "Armidale",
    value: "ARM",
    text: "Armidale, NSW",
  },
  {
    key: "Bundaberg",
    value: "BDB",
    text: "Bundaberg, QLD",
  },
  {
    key: "Cairns",
    value: "CNS",
    text: "Cairns, QLD",
  },
  {
    key: "Gold Coast",
    value: "OOL",
    text: "Gold Coast, QLD",
  },
  {
    key: "Gladstone",
    value: "GLT",
    text: "Gladstone, QLD",
  },
  {
    key: "Hervey Bay",
    value: "HVB",
    text: "Hervey Bay, QLD",
  },
  {
    key: "Proserpine",
    value: "PPP",
    text: "Proserpine, QLD",
  },
  {
    key: "Rockhampton",
    value: "ROK",
    text: "Rockhampton, QLD",
  },
  {
    key: "Townsville",
    value: "TSV",
    text: "Townsville, QLD",
  },
  {
    key: "Mount Hotham",
    value: "MHU",
    text: "Mount Hotham, VIC",
  },
  {
    key: "Mount Gambier",
    value: "MGB",
    text: "Mount Gambier, SA",
  },
  {
    key: "Darwin International",
    value: "DRW",
    text: "Darwin International, NT",
  },
  {
    key: "Griffith",
    value: "GFF",
    text: "Griffith, NSW",
  },
  {
    key: "Dubbo",
    value: "DBO",
    text: "Dubbo, NSW",
  },
  {
    key: "Canberra",
    value: "CNB",
    text: "Canberra, ACT",
  },
  {
    key: "Ballina",
    value: "BNK",
    text: "Ballina, NSW",
  },
  {
    key: "Sydney Metro Bankstown",
    value: "BWU",
    text: "Sydney Metro Bankstown, NSW",
  },
  {
    key: "Cooma-Snowy Mountains",
    value: "OOM",
    text: "Cooma-Snowy Mountains, NSW",
  },
  {
    key: "Grafton",
    value: "GFN",
    text: "Grafton, NSW",
  },
  {
    key: "Lismore",
    value: "LSY",
    text: "Lismore, NSW",
  },
  {
    key: "Merimbula",
    value: "MIM",
    text: "Merimbula, NSW",
  },
  {
    key: "Port Macquarie",
    value: "PQQ",
    text: "Port Macquarie, NSW",
  },
  {
    key: "Sydney-Kingsford Smith",
    value: "SYD",
    text: "Sydney-Kingsford Smith, NSW",
  },
  {
    key: "Tamworth",
    value: "TMW",
    text: "Tamworth, NSW",
  },
  {
    key: "Taree",
    value: "TRO",
    text: "Taree, NSW",
  },
  {
    key: "Williamtown",
    value: "NTL",
    text: "Williamtown, NSW",
  },
  {
    key: "Esperance",
    value: "EPR",
    text: "Esperance, WA",
  },
  {
    key: "Narrabri",
    value: "NAA",
    text: "Narrabri, NSW",
  },
  {
    key: "Ravensthorpe",
    value: "RVT",
    text: "Ravensthorpe, WA",
  },
  {
    key: "Paraburdoo",
    value: "PBO",
    text: "Paraburdoo, WA",
  },
  {
    key: "Learmonth",
    value: "LEA",
    text: "Learmonth, WA",
  },
  {
    key: "Port Augusta",
    value: "PUG",
    text: "Port Augusta, SA",
  },
  {
    key: "Kingscote",
    value: "KGC",
    text: "Kingscote, SA",
  },
  {
    key: "Cobar",
    value: "CAZ",
    text: "Cobar, NSW",
  },
  {
    key: "Balranald",
    value: "BZD",
    text: "Balranald, NSW",
  },
  {
    key: "Portland",
    value: "PTJ",
    text: "Portland, VIC",
  },
  {
    key: "Shepparton",
    value: "SHT",
    text: "Shepparton, VIC",
  },
  {
    key: "Warrnambool",
    value: "WMB",
    text: "Warrnambool, VIC",
  },
  {
    key: "Hobart",
    value: "HBA",
    text: "Hobart, TAS",
  },
  {
    key: "Launceston",
    value: "LST",
    text: "Launceston, TAS",
  },
  {
    key: "Devonport",
    value: "DPO",
    text: "Devonport, TAS",
  },
  {
    key: "Tennant Creek",
    value: "TCA",
    text: "Tennant Creek, NT",
  },
  {
    key: "Alice Springs",
    value: "ASP",
    text: "Alice Springs, NT",
  },
  {
    key: "Ayers Rock",
    value: "AYQ",
    text: "Ayers Rock, NT",
  },
  {
    key: "Thangool",
    value: "THG",
    text: "Thangool, QLD",
  },
  {
    key: "Broken Hill",
    value: "BHQ",
    text: "Broken Hill, NSW",
  },
  {
    key: "King Island",
    value: "KNS",
    text: "King Island, TAS",
  },
  {
    key: "Burnie",
    value: "BWT",
    text: "Burnie, TAS",
  },
  {
    key: "Horn Island",
    value: "HID",
    text: "Horn Island, QLD",
  },
  {
    key: "Gove",
    value: "GOV",
    text: "Gove, NT",
  },
  {
    key: "Barcaldine",
    value: "BCI",
    text: "Barcaldine, QLD",
  },
  {
    key: "Blackall",
    value: "BKQ",
    text: "Blackall, QLD",
  },
  {
    key: "Emerald",
    value: "EMD",
    text: "Emerald, QLD",
  },
  {
    key: "Hamilton Island",
    value: "HTI",
    text: "Hamilton Island, QLD",
  },
  {
    key: "Hughenden",
    value: "HGD",
    text: "Hughenden, QLD",
  },
  {
    key: "Longreach",
    value: "LRE",
    text: "Longreach, QLD",
  },
  {
    key: "Coober Pedy",
    value: "CPD",
    text: "Coober Pedy, SA",
  },
  {
    key: "Weipa",
    value: "WEI",
    text: "Weipa, QLD",
  },
  {
    key: "Richmond",
    value: "RCM",
    text: "Richmond, QLD",
  },
  {
    key: "Mount Isa",
    value: "ISA",
    text: "Mount Isa, QLD",
  },
  {
    key: "Julia Creek",
    value: "JCK",
    text: "Julia Creek, QLD",
  },
  {
    key: "Cocos (Keeling) Island",
    value: "CCK",
    text: "Cocos (Keeling) Island, WA",
  },
  {
    key: "Christmas Island",
    value: "XCH",
    text: "Christmas Island, WA",
  },
  {
    key: "Norfolk Island",
    value: "NLK",
    text: "Norfolk Island, NSW",
  },
  {
    key: "Lord Howe Island",
    value: "LDH",
    text: "Lord Howe Island, NSW",
  },
  {
    key: "Toronto-Pearson",
    value: "YYZ",
    text: "Toronto-Pearson, Canada",
  },
  {
    key: "Vancouver",
    value: "YVR",
    text: "Vancouver, Canada",
  },
  {
    key: "Montréal",
    value: "YUL",
    text: "Montréal, Canada",
  },
  {
    key: "Cape Town",
    value: "CPT",
    text: "Cape Town, South Africa",
  },
  {
    key: "Johannesburg",
    value: "JNB",
    text: "Johannesburg, South Africa",
  },
  {
    key: "Colombo",
    value: "CMB",
    text: "Colombo, Sri Lanka",
  },
  {
    key: "Bangkok-Suvarnabhumi",
    value: "BKK",
    text: "Bangkok-Suvarnabhumi, Thailand",
  },
  {
    key: "Bangkok-Don Mueang",
    value: "DMK",
    text: "Bangkok-Don Mueang, Thailand",
  },
  {
    key: "Auckland",
    value: "AKL",
    text: "Auckland, New Zealand",
  },
  {
    key: "Wellington",
    value: "WLG",
    text: "Wellington, New Zealand",
  },
  {
    key: "Christchurch",
    value: "CHC",
    text: "Christchurch, New Zealand",
  },
  {
    key: "Vienna",
    value: "VIE",
    text: "Vienna, Austria",
  },
  {
    key: "Tokyo-Narita",
    value: "NRT",
    text: "Tokyo-Narita, Japan",
  },
  {
    key: "Tokyo-Haneda",
    value: "HND",
    text: "Tokyo-Haneda, Japan",
  },
  {
    key: "Osaka",
    value: "KIX",
    text: "Osaka, Japan",
  },
  {
    key: "Berlin",
    value: "BER",
    text: "Berlin, Germany",
  },
  {
    key: "Munich",
    value: "MUC",
    text: "Munich, Germany",
  },
  {
    key: "Stockholm-Arlanda",
    value: "ARN",
    text: "Stockholm-Arlanda, Sweden",
  },
  {
    key: "Newark",
    value: "EWR",
    text: "Newark, United States",
  },
  {
    key: "New York City-John F. Kennedy",
    value: "JFK",
    text: "New York City-John F. Kennedy, United States",
  },
  {
    key: "New York-LaGuardia",
    value: "LGA",
    text: "New York City-LaGuardia, United States",
  },
  {
    key: "Los Angeles",
    value: "LAX",
    text: "Los Angeles, United States",
  },
  {
    key: "Chicago",
    value: "ORD",
    text: "Chicago, United States",
  },
  {
    key: "San Francisco",
    value: "SFO",
    text: "San Francisco, United States",
  },
  {
    key: "London-Heathrow",
    value: "LHR",
    text: "London-Heathrow, United Kingdom",
  },
  {
    key: "London-Gatwick",
    value: "LGW",
    text: "London-Gatwick, United Kingdom",
  },
  {
    key: "Edinburgh",
    value: "EDI",
    text: "Edinburgh, United Kingdom",
  },
  {
    key: "Belfast",
    value: "BFS",
    text: "Belfast, United Kingdom",
  },
  {
    key: "Washington, D.C.",
    value: "IAD",
    text: "Washington, D.C., United States",
  },
  {
    key: "Atlanta",
    value: "ATL",
    text: "Atlanta, United States",
  },
  {
    key: "Dublin",
    value: "DUB",
    text: "Dublin, Ireland",
  },
  {
    key: "Seattle-Tacoma",
    value: "SEA",
    text: "Seattle-Tacoma, United States",
  },
  {
    key: "Singapore",
    value: "SIN",
    text: "Singapore, Singapore",
  },
];

export default airports;
