/* other fm list
http://itechnepal.com/radio-clients.php

*/
const data = [
    {
      url: "http://kantipur-stream.softnep.com:7248/;stream.nsv&type=mp3",
      name: "Radio Kantipur",
      image: "http://radio.nepal.fm/wp-content/uploads/radio02.jpg"
    },
    {
      url: "http://stream.zenolive.com/wtuvp08xq1duv",
      name: "Ujyaalo 90 Network err",
      image: "http://radio.nepal.fm/wp-content/uploads/ujyaalo-150x137.jpg"
    },
    {
      url: "http://kalika-stream.softnep.com:7740/;stream.nsv&type=mp3",
      name: "Kalika FM err",
      image: "http://radio.nepal.fm/wp-content/uploads/kalikafm.jpg"
    },
    {
      url: "http://streaming.softnep.com:8085/;stream.nsv&type=mp3",
      name: "Radio Lumbini",
      image: "http://radio.nepal.fm/wp-content/uploads/Radio-Lumbini.jpg"
    },
    {
      url: "http://streaming.softnep.com:8025/;stream.nsv&type=mp3",
      name: "Radio Thaha Sanchar Kathmandu",
      image: "http://radio.nepal.fm/wp-content/uploads/radio08.jpg"
    },
    {
      url: "http://streaming.softnep.net:7025/;stream.nsv&type=mp3",
      name: "Radio Thaha Sanchar Hetauda",
      image: "http://radio.nepal.fm/wp-content/uploads/radio08.jpg"
    },
    {
      url: "http://streaming.softnep.net:8037/;stream.nsv&type=mp3",
      name: "Capital FM"
    },
    {
      url: "http://streaming.softnep.net:8115/;stream.nsv&type=mp3",
      name: "Radio Sarangi Morang"
    },
    {
      url: "http://streaming.softnep.net:8091/;stream.nsv&type=mp3",
      name: "Radio Annapurna Nepal"
    },
    {
      url: "http://stream.zenolive.com/2w81t82wx3duv",
      name: "Radio Audio err"
    },
    {
      url: "http://streaming.softnep.net:8107/;stream.nsv&type=mp3",
      name: "Radio Sarangi Pokhara"
    },
    {
      url: "http://streaming.softnep.net:8109/;stream.nsv&type=mp3",
      name: "Kalinchowk FM err"
    },
    {
      url: "http://streaming.softnep.net:8057/;stream.nsv&type=mp3&autostart=true",
      name: "Radio Makwanpur Hetauda"
    },
    {
      url: "http://streaming.softnep.net:8139/;stream.nsv&type=mp3",
      name: "Radio Makwanpur Gorkha"
    },
    {
      url: "http://streaming.softnep.net:8031/;stream.nsv&type=mp3&autostart=true",
      name: "Radio Triveni"
    },
    {
      url: "http://streaming.softnep.net:8141/;stream.nsv&type=mp3",
      name: "Radio Myagdi Kali"
    },
    {
      url: "http://streaming.softnep.net:8143/;stream.nsv&type=mp3",
      name: "Radio Bhojpuriya FM"
    },
    {
      url: "http://streaming.softnep.net:8003/;stream.nsv&type=mp3",
      name: "Butwal FM"
    },
    {
      url: "http://streaming.softnep.net:8055/;stream.nsv&type=mp3",
      name: "Radio Daily Mail"
    },
    {
      url: "http://streaming.softnep.net:8131/;stream.nsv&type=mp3",
      name: "Goal Nepal"
    },
    {
      url: "http://streaming.softnep.net:8101/;stream.nsv&type=mp3",
      name: "Radio Karnali"
    },
    {
      url: "http://streaming.softnep.net:8069/;stream.nsv&type=mp3",
      name: "Radio Devghat err"
    },
    {
      url: "http://streaming.softnep.net:8065/;stream.nsv&type=mp3",
      name: "Unique FM Rukum"
    },
    {
      url: "http://streaming.softnep.net:8063/;stream.nsv&type=mp3",
      name: "Afno FM Rukum err"
    },
    {
      url: "http://streaming.softnep.net:8061/;stream.nsv&type=mp3",
      name: "Radio Bihani"
    },
    {
      url: "http://streaming.softnep.net:8045/;stream.nsv&type=mp3",
      name: "Radio Saugat err"
    },
    {
      url: "http://streaming.softnep.net:8033/;stream.nsv&type=mp3",
      name: "Radio Society FM err"
    },
    {
      url: "http://streaming.softnep.net:8059/;stream.nsv&type=mp3",
      name: "KTM 90.3 FM"
    },
    {
      url: "http://streaming.softnep.net:8017/;stream.nsv&type=mp3",
      name: "Radio Birgunj"
    },
    {
      url: "http://streaming.softnep.net:8021/;stream.nsv&type=mp3",
      name: "Radio Aakashganga err"
    },
    {
      url: "http://streaming.softnep.net:8023/;stream.nsv&type=mp3",
      name: "Radio Sudur Sandesh err"
    },
    {
      url: "http://streaming.softnep.net:8137/;stream.nsv&type=mp3",
      name: "Radio Chomolongma err"
    },
    {
      url: "http://streaming.softnep.net:8135/;stream.nsv&type=mp3",
      name: "Chapakot FM err"
    },
    {
      url: "http://streaming.softnep.net:8009/;stream.nsv&type=mp3",
      name: "ACORAB"
    },
    {
      url: "http://streaming.softnep.net:8111/;stream.nsv&type=mp3",
      name: "Mandala Online Radio err - connection refused"
    },
    {
      url: "http://streaming.softnep.net:8103/;stream.nsv&type=mp3",
      name: "Afno FM Okhaldhunga"
    },
    {
      url: "http://streaming.softnep.net:8019/;stream.nsv&type=mp3",
      name: "Radio Bindaas err connection"
    },
    {
      url: "http://streaming.softnep.net:8077/;stream.nsv&type=mp3",
      name: "Radio Madhyabindu err connection"
    },
    {
      url: "http://streaming.softnep.net:8099/;stream.nsv&type=mp3",
      name: "Radio Karnali Aawaz err"
    },
    {
      url: "http://streaming.softnep.net:8047/;stream.nsv&type=mp3",
      name: "Radio Sangeet"
    },
    {
      url: "http://streaming.softnep.net:8087/;stream.nsv&type=mp3",
      name: "Thamel FM err"
    },
    {
      url: "http://streaming.softnep.net:8007/;stream.nsv&type=mp3",
      name: "Radio Seti"
    },
    {
      url: "http://streaming.softnep.net:8013/;stream.nsv&type=mp3",
      name: "Radio Rasuwa"
    },
    {
      url: "http://streaming.softnep.net:8051/;stream.nsv&type=mp3",
      name: "Radio Melamchi"
    },
    {
      url: "http://streaming.softnep.net:8041/;stream.nsv&type=mp3",
      name: "Radio Sindhu"
    },
    {
      url: "http://streaming.softnep.net:8011/;stream.nsv&type=mp3",
      name: "Radio Sunakhari err"
    },
    {
      url: "http://streaming.softnep.net:8015/;stream.nsv&type=mp3",
      name: "Radio 24 Times"
    },

    {
      url: "http://streaming.softnep.net:8091/;stream.nsv&type=mp3",
      name: "Citizen FM",
      image: "http://radio.nepal.fm/wp-content/uploads/Citizen-FM.jpg"
    },
    {
      url: "http://streaming.softnep.net:8009/;stream.nsv&type=mp3",
      name: "Acorab – CIN",
      image: "http://radio.nepal.fm/wp-content/uploads/Acorab.jpg"
    },
    {
      url: "http://108.166.161.210:9022/;stream.nsv&type=mp3",
      name: "Sagarmatha FM err promise",
      image: "http://radio.nepal.fm/wp-content/uploads/sagarmathafm.jpg"
    },
    {
      url: "http://202.166.217.123:89/;stream.nsv&type=mp3",
      name: "Image FM err promise",
      image: "http://radio.nepal.fm/wp-content/uploads/image979-150x114.gif"
    },
    {
      url: "http://streaming.softnep.net:8101/;stream.nsv&type=mp3",
      name: "Radio Karnali Jumla",
      image: "http://radio.nepal.fm/wp-content/uploads/radiokarnali.jpg"
    },
    {
      url: "http://streaming.softnep.net:8099/;stream.nsv&type=mp3",
      name: "Radio Karnali Aawaj err",
      image: "http://radio.nepal.fm/wp-content/uploads/radiokarnaliaawaj.jpg"
    },
    {
      url: "http://streaming.softnep.net:8093/;stream.nsv&type=mp3",
      name: "Hamro Cricket",
      image: "http://radio.nepal.fm/wp-content/uploads/hamrocricket.jpg"
    },
    {
      url: "http://live.itechnepal.com:8580/stream",
      name: "Naya Nepal FM err",
    },
    {
      url: "http://streaming.softnep.net:8097/;stream.nsv&type=mp3",
      name: "Dhawalagiri FM err",
      image: "http://radio.nepal.fm/wp-content/uploads/Dhawalagiri.jpg"
    },
    {
      url: "http://streaming.softnep.net:8047/;stream.nsv&type=mp3",
      name: "Narayani FM Birgunj",
      image: "http://radio.nepal.fm/wp-content/uploads/Narayani-FM.jpg"
    },
    {
      url: "http://streaming.softnep.net:8061/;stream.nsv&type=mp3",
      name: "RVL Nepali",
      image: "http://radio.nepal.fm/wp-content/uploads/Rvl-Radio.jpg"
    },
    {
      url: "http://streaming.softnep.net:8073/;stream.nsv&type=mp3",
      name: "RVL Aadhunik err",
      image: "http://radio.nepal.fm/wp-content/uploads/Rvl-Radio.jpg"
    },
    {
      url: "http://streaming.softnep.net:8065/;stream.nsv&type=mp3",
      name: "RVL Rock",
      image: "http://radio.nepal.fm/wp-content/uploads/Rvl-Radio.jpg"
    },
    {
      url: "http://streaming.softnep.net:8083/;stream.nsv&type=mp3",
      name: "RVL SoftRock",
      image: "http://radio.nepal.fm/wp-content/uploads/Rvl-Radio.jpg"
    },
    {
      url: "http://streaming.softnep.net:8063/;stream.nsv&type=mp3",
      name: "RVL Pop err",
      image: "http://radio.nepal.fm/wp-content/uploads/Rvl-Radio.jpg"
    },
    {
      url: "http://streaming.softnep.net:8069/;stream.nsv&type=mp3",
      name: "RVL Metal err",
      image: "http://radio.nepal.fm/wp-content/uploads/Rvl-Radio.jpg"
    },
    {
      url: "http://streaming.softnep.net:8075/;stream.nsv&type=mp3",
      name: "RVL Blues",
      image: "http://radio.nepal.fm/wp-content/uploads/Rvl-Radio.jpg"
    },
    {
      url: "http://streaming.softnep.net:8071/;stream.nsv&type=mp3",
      name: "RVL Dance err",
      image: "http://radio.nepal.fm/wp-content/uploads/Rvl-Radio.jpg"
    },
    {
      url: "http://streaming.softnep.net:8033/;stream.nsv&type=mp3",
      name: "RVL Love err",
      image: "http://radio.nepal.fm/wp-content/uploads/Rvl-Radio.jpg"
    },
    {
      url: "http://74.200.89.122:8060/;stream.nsv&type=mp3",
      name: "Times FM 90.6 empty",
      image: "http://radio.nepal.fm/wp-content/uploads/Times-FM-90.6-Nepal-150x150.jpg"
    }
  ]

  export default data;