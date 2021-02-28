export const navTabs = [
    {tab: 'Naslovna', to: '/'},
    {tab: 'Tečajevi', to: '/courses'}, 
    {tab: 'Oprema', to: '/store'}, 
    {tab: 'Izleti', to: '/hiking'},
    {tab: 'Blog', to: '/blog'}
]

export const months = [
    { monthNumber: 1, monthName: 'Siječanj', monthColor: '#0297e7', noOfLocations: 5 },
    { monthNumber: 2, monthName: 'Veljača', monthColor: '#01b6ed', noOfLocations: 7 },
    { monthNumber: 3, monthName: 'Ožujak', monthColor: '#00bb60', noOfLocations: 3 }, 
    { monthNumber: 4, monthName: 'Travanj', monthColor: '#8bcb47', noOfLocations: 2 }, 
    { monthNumber: 5, monthName: 'Svibanj', monthColor: '#d6e125', noOfLocations: 0 }, 
    { monthNumber: 6, monthName: 'Lipanj', monthColor: '#f9c318', noOfLocations: 4 }, 
    { monthNumber: 7, monthName: 'Srpanj', monthColor: '#fa9f1b', noOfLocations: 11 }, 
    { monthNumber: 8, monthName: 'Kolovoz', monthColor: '#fb4f2b', noOfLocations: 12 }, 
    { monthNumber: 9, monthName: 'Rujan', monthColor: '#f84c66', noOfLocations: 10 }, 
    { monthNumber: 10, monthName: 'Listopad', monthColor: '#d34695', noOfLocations: 9 }, 
    { monthNumber: 11, monthName: 'Studeni', monthColor: '#8f58c0', noOfLocations: 8 }, 
    { monthNumber: 12, monthName: 'Prosinac', monthColor: '#635bca', noOfLocations: 6 }
]

export const Locations = ['Paklenica', 'Dinara', 'Kozjak', 'Mosor', 'Biokovo', 'Velebit']

export const hikingLocations = [
    {title: 'Žumberačko gorje', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit euismod in.', date: '01', guide: 'Ive Vasiljević'},
    {title: 'Sjeverni velebit', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit euismod in.', date: '02', guide: 'Jakov Spahija'},
    {title: 'Klek – Klečice', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit euismod in.', date: '07', guide: 'Jakov Spahija'},
    {title: 'Dolomiti Ampezzane', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit euismod in.', date: '11', guide: 'Ive Vasiljević'},
    {title: 'Ravna gora', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit euismod in.', date: '17', guide: 'Jakov Spahija'},
    {title: 'Bjelolasica', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit euismod in.', date: '19', guide: 'Ive Vasiljević'},
    {title: 'Ivančica', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit euismod in.', date: '20', guide: 'Jakov Spahija'},
    {title: 'Sveto Brdo', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit euismod in.', date: '26', guide: 'Ive Vasiljević'},
    {title: 'Kilimanjaro treking 2021', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit euismod in.', date: '28', guide: 'Ive Vasiljević'},
    {title: 'Dinara – Sinjal', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit euismod in.', date: '30', guide: 'Jakov Spahija'},
]
export const Filters = [
    ["Vrsta", ["Planinarenje","Obuća","Ostala oprema"]],
    ["Brend", ["Wild Country","Lanex","Petzl"]]
]

export const Oprema = {
  'Stap'            : { name: 'Štapovi za hodanje',     price: "59.95" , vrsta: "Ostala oprema", brend: ""},
  'Karabiner'       : { name: 'Karabiner sa maticom',   price: "15", vrsta: "Planinarenje", brend: "Petzl"},
  'Kreda'           : { name: 'Kreda',                  price: "10", vrsta: "Ostala oprema", brend: "" },
  'Medjuosiguranje' : { name: 'Međuosiguranje',         price: "448.90", vrsta: "Planinarenje", brend: "Wild Country" },
  'Pojas'           : { name: 'Pojas',                  price: "419.50", vrsta: "Obuća", brend: "Wild Country" },
  'Kolotura'        : { name: 'Kolotura',               price: "170", vrsta: "Planinarenje", brend: "Lanex"},
  'Kaciga'          : { name: 'Kaciga',                 price: "471.75", vrsta: "Obuća", brend: "Wild Country"},
  'Klin'            : { name: 'Klin',                   price: "75", vrsta: "Planinarenje", brend: ""}
}

export const blogFilters = ['Sve', 'Pustolovine', 'Oprema', 'Natjecanja', 'Preporuke']