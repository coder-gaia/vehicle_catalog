import cherry_arizo from '../images/Cherry_Arizo.webp'
import onix from '../images/Chrevolet_Onix_Tz.webp'
import ecosport from '../images/Ford_Ecosport.webp'
import focus from '../images/Ford_Focus.webp'
import hb20s from '../images/Hyundai_hb20s.webp'
import renegade from '../images/Jeep_Renegade.webp'
import kicks from '../images/Nissan_Kicks.webp'
import captur from '../images/Renault_Captur.webp'
import corolla from '../images/Toyota_Corolla.webp'

const vehicles = [
  {
    id: 1,
    brand: 'Jeep',
    model: 'Renegade',
    year: '2020',
    color: 'Black',
    price: 82.999,
    km: '50.000km',
    image: renegade,
    location: 'New York, New York'
  },

  {
    id: 2,
    brand: 'Cherry',
    model: 'Arizo',
    year: '2023',
    color: 'White',
    price: 129.699,
    km: '5.786km',
    image: cherry_arizo,
    location: 'New Orleans, New Orleans'
  },

  {
    id: 3,
    brand: 'Chrevolet',
    model: 'Onix Tz',
    year: '2020',
    color: 'Grey',
    price: 74.299,
    km: '35.000km',
    image: onix,
    location: 'New York, New York'
  },

  {
    id: 4,
    brand: 'Ford',
    model: 'Ecosport',
    year: '2017',
    color: 'Red',
    price: 62.999,
    km: '83.203km',
    image: ecosport,
    location: 'Chicago, Illinois'
  },

  {
    id: 5,
    brand: 'Ford',
    model: 'Focus',
    year: '2017',
    color: 'Grey',
    price: 69.699,
    km: '61.000km',
    image: focus,
    location: 'Pierre, South Dakota'
  },

  {
    id: 6,
    brand: 'Hyundai',
    model: 'HB20S',
    year: '2018',
    color: 'Grey',
    price: 70.099,
    km: '61.230km',
    image: hb20s,
    location: 'Hartford, Connecticut'
  },

  {
    id: 7,
    brand: 'Nissan',
    model: 'Kicks',
    year: '2022',
    color: 'Black',
    price: 96.399,
    km: '42.604km',
    image: kicks,
    location: 'Lawrence, Kansas'
  },

  {
    id: 8,
    brand: 'Renault',
    model: 'Captur',
    year: '2019',
    color: 'White',
    price: 70.699,
    km: '54.230km',
    image: captur,
    location: 'San Francisco, California'
  },

  {
    id: 9,
    brand: 'Toyota',
    model: 'Corolla',
    year: '2018',
    color: 'White',
    price: 89.899,
    km: '63.280km',
    image: corolla,
    location: 'Boston, Massachusetts'
  },
]

export default vehicles
