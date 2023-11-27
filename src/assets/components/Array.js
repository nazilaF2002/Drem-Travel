import beachImage from '../../assets/images/beach.png';
import mountainImage from '../../assets/images/mountain.png';
import cityImage from '../../assets/images/city.png';
const destinations = [
    {
        id:1,
      title: 'Beach',
      image: beachImage,
      description: {
        en: 'Enjoy the sun, sand, and surf at beautiful beach destinations. Relax under palm trees and experience breathtaking sunsets.',
        es: 'Disfruta del sol, arena y surf en hermosos destinos de playa. Relájate bajo palmeras y experimenta atardeceres impresionantes.',
        tr:'Güzel plaj destinasyonlarında güneşin, kumun ve sörfün tadını çıkarın. Palmiye ağaçlarının altında rahatlayın ve nefes kesen gün batımını deneyimleyin.',
        dr:'لذت بردن از خورشید، شن و ماسه، و گشت و گذار در مقصد ساحل زیبا. استراحت در زیر درختان خرما و تجربه غروب نفس گیر.'
      },
    },
    {
        id:2,
      title: 'Mountain',
      image: mountainImage,
      description: {
        en: "Embrace the tranquility and serenity of mountain getaways. Experience nature's beauty and go on adventurous hikes.",
        es: 'Abraza la tranquilidad y serenidad de las escapadas a la montaña. Experimenta la belleza de la naturaleza y realiza caminatas aventureras.',
        tr:'Dağ kaçamaklarının huzurunu ve dinginliğini kucaklayın. Doğanın güzelliğini deneyimleyin ve maceracı yürüyüşlere çıkın.',
        dr:'آرامش و آرامش گریز کوه را در آغوش. تجربه زیبایی طبیعت و رفتن در پیاده روی پرماجرا'
      },
    },
    {
        id:3,
      title: 'City',
      image: cityImage,
      description: {
        en: 'Explore vibrant cities with bustling streets, rich history, and diverse cultures. Discover iconic landmarks and local cuisine.',
        es: 'Explora ciudades vibrantes con calles bulliciosas, rica historia y culturas diversas. Descubre monumentos icónicos y cocina local.',
        tr:'Hareketli sokakları, zengin tarihi ve farklı kültürleri olan canlı şehirleri keşfedin. İkonik simge yapıları ve yerel mutfağı keşfedin.',
        dr:'کاوش شهرهای پر جنب و جوش با خیابان های شلوغ، تاریخ غنی، و فرهنگ های متنوع است. کشف نشانه های یاد و غذاهای محلی..'
      },
    },
  ];
  export default destinations;