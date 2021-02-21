export const navTabs = [
    {tab: 'Naslovna', to: '/'},
    {tab: 'Tečajevi', to: '/courses'}, 
    {tab: 'Oprema', to: '/store'}, 
    {tab: 'Izleti', to: '/hiking'},
    {tab: 'Blog', to: '/blog'}
]

export const months = [
    { monthNumber: 1, monthName: 'Siječanj', monthColor: '#0297e7' },
    { monthNumber: 2, monthName: 'Veljača', monthColor: '#01b6ed' },
    { monthNumber: 3, monthName: 'Ožujak', monthColor: '#00bb60' }, 
    { monthNumber: 4, monthName: 'Travanj', monthColor: '#8bcb47' }, 
    { monthNumber: 5, monthName: 'Svibanj', monthColor: '#d6e125' }, 
    { monthNumber: 6, monthName: 'Lipanj', monthColor: '#f9c318' }, 
    { monthNumber: 7, monthName: 'Srpanj', monthColor: '#fa9f1b' }, 
    { monthNumber: 8, monthName: 'Kolovoz', monthColor: '#fb4f2b' }, 
    { monthNumber: 9, monthName: 'Rujan', monthColor: '#f84c66' }, 
    { monthNumber: 10, monthName: 'Listopad', monthColor: '#d34695' }, 
    { monthNumber: 11, monthName: 'Studeni', monthColor: '#8f58c0' }, 
    { monthNumber: 12, monthName: 'Prosinac', monthColor: '#635bca' }
]

export const Locations = ['Paklenica', 'Dinara', 'Kozjak', 'Mosor', 'Biokovo', 'Velebit']

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