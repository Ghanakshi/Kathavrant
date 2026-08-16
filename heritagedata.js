// HERITAGE_DATA powers Feature Five, "Explore Indian Heritage" (heritage.js).
//
// IMAGES: this is intentionally left as empty slots. Drop your own photo
// into the matching folder under /images/heritage/ using the EXACT file
// name shown in each entry's `image` field below (e.g.
// images/heritage/dances/bharatanatyam.jpg). If a file is missing, the
// card/detail view just shows a soft placeholder instead of a broken
// image icon — nothing breaks in the meantime, fill these in gradually.
//
// LYRICS: song lyrics are copyrighted, so `lyrics` arrays are deliberately
// left empty here rather than filled with guessed or scraped text (see the
// same note in songdata.js). Add verified, rights-cleared lines yourself
// via the `lyrics: []` array on each music entry — each string becomes one
// displayed line.
//
// Six categories: music, authors, folktales, nataks, dances, instruments.
// Add more objects in the same shape to grow any category — nothing else
// in heritage.js needs to change as long as the shape matches.

const HERITAGE_DATA = {

  // ============ MUSIC ============
  music: [
    {
      "id": "geet-vivah-1",
      "title": "Vivah Geet I (चम्पो चमेली भर को मोगरो ए मालेणी)",
      "image": "images/heritage/music/geet-vivah-1.jpg",
      "region": "Rajasthan (Jaipur, Jodhpur, Shekhawati, Ajmer)",
      "language": "Rajasthani",
      "genre": "Vivah Geet, Rajasthani Folk, Wedding Ritual",
      "era": "Heritage",
      "period": "Traditional Ritual Song",
      "authorId": null,
      "instruments": [
        "Dholak",
        "Manjira"
      ],
      "description": "यह गीत विवाह के अवसर पर गाया जाता है। सेहरे को देखकर स्त्रियां उसके रंगों की चर्चा करती है व विवाह में दिये हुए दुल्हन के कपडों व आभूषणों के बारे में कहती है।\n\nहे मालिन, हार में तुमने सब फूल चम्पा, चमेली, मोगरा, गेंदा लगाये हैं, परन्तु चार रंग इसमें तुम भूल गई हो। हमने तो दुल्हन के लिए इतने परिश्रम से दहेज बनाया है। ज्योतिषी की गली में जाकर तो हमने लग्न की महूरत पूछी, बजाजी की दूकान पर जा-जाकर कपड़ों का मोल किया, सुनार की दुकान पर गहनों का मोल-भाव तय कर कर के लिया। हमने तो इतनी मेहनत की और तू चार रंग ही भूल गई। जाओ अच्छा सा हार लाओ।",
      "lyrics": [
        "चम्पो चमेली भर को मोगरो ए मालेणी",
        "और कछु दावदी रो फूल गेंदा मालणी",
        "सेवरा में चार रंग भूल गई मालेणी",
        "जोशीडा गलियां होय नीसर्या रो मालणी",
        "कर गया लगण रो चाक – गेंदा",
        "बजाजी री गलियां होय नीसर्या हे मालणी",
        "कर गया पड़दा रो मोल – गेंदा",
        "सोनीडा री गलियां होय नीसर्या हे मालणी",
        "कर गया गेणला रो मोल – गेंदा"
      ]
    },

    {
      "id": "geet-vivah-2",
      "title": "Vivah Geet II (मेथी को तो व्याव रच्यौ छ - सब्जी विवाह हास्य गीत)",
      "image": "images/heritage/music/geet-vivah-2.jpg",
      "region": "Rajasthan (Jaipur Region)",
      "language": "Rajasthani",
      "genre": "Vivah Geet, Humorous Folk Song, Hasya Geet",
      "era": "Heritage",
      "period": "Traditional",
      "authorId": null,
      "instruments": [
        "Dholak",
        "Manjira",
        "Harmonium"
      ],
      "description": "यह लोकगीत जयपुर राज्य में अधिक प्रचलित है। विवाह के अवसर पर यह बड़ी धूमधाम से गाया जाता है। मेलों पर भी महिलाएं एकत्रित होकर इस गीत को बड़े चाव से गाती हैं। पूरा गीत हास्यपूर्ण हैं। मेथी का विवाह करेले से होने जा रहा है। इस उपलक्ष्य में बहुत-सी अन्य सब्जियों को कुछ न कुछ काम सौंपा गया है।\n\nमेथी का करेले से विवाह हो रहा है। करेले के साथ आलू बराती बन कर आये हैं और लहसन लड़के लड़की बन कर हंसते-गाते आ रहे हैं। आप सुनिये तो सही सब्जियों की बातें। कद्दू के तो नक्कारे बनाये हैं ब्याह में बजाने के लिये, व तुरई के डंके। दूल्हा दुल्हन की नानी नारंगी को बनाया गया और नींबू को नाना। बड़े धूमधाम से विवाह रचाया जा रहा है। जामुन को ज्योतिषी की पत्नी और अमरूद को ज्योतिषी बनाया। जब सब इकट्ठे हो गये तो मेथी का विवाह धूमधाम से रचाया जाने लगा।",
      "lyrics": [
        "मेथी को तो व्याव रच्यौ छ",
        "करेला जी वींद बणाया",
        "सुणो जी तरकारी की बातां",
        "आलू कातो बराती बणाया",
        "लेसव्या का छोरा छोरी आया",
        "सुणो जी तरकारी की बातां",
        "कोला का तो निगारा बण आया",
        "तोरूं का डंका बणाया। सुणो - - - -",
        "नारंगी की नानी बणाई",
        "नींबू का तो नानो बणायो। सुणो - - - -",
        "जामुनिया की जोशण बण आई",
        "जायफल का जोशी बण आयो। सुणो - - - -"
      ]
    },

    {
      "id": "geet-vivah-3",
      "title": "Vivah Geet III (बाई थारो बीरो जी पैरे है पैरावणी - हास्य पैरावणी)",
      "image": "images/heritage/music/geet-vivah-3.jpg",
      "region": "Rajasthan (Kishangarh & Ajmer)",
      "language": "Rajasthani",
      "genre": "Vivah Geet, Pairavani Song, Humorous Folk Song",
      "era": "Heritage",
      "period": "Traditional",
      "authorId": null,
      "instruments": [
        "Dholak",
        "Manjira"
      ],
      "description": "यह हास्यपूर्ण गीत भी विवाह के अवसर पर स्त्रियां मिलकर दुल्हन को संकेत कर गाती हैं। इस गीत को 'पैरावणी' नाम से सम्बोधित किया गया है। 'पैरावणी' किशनगढ़ व अजमेर में अन्य जगहों से अधिक प्रचलित है।\n\nहे बहन, तुम्हारा भाई कैसे कपड़े पहनता है, उसके लम्बे-लम्बे हाथ व लम्बे-लम्बे होंठ दिखते हैं। तुम्हारे पिता के बाल मेंहदी से रंग कर लाल हो गये हैं, और दाढ़ी बहुत लम्बी है - यह भी क्या लिबास है? तुम्हारी माता, उसके कान कितने छोटे हैं, और चाचा, वह तो छाजला (सूप) के जैसे कानों वाला है। जो बहन है, उसके दांत कितने बड़े व लम्बे हैं। यह सब क्या पहराया है?",
      "lyrics": [
        "बाई थारो बीरो जी पैरे है पैरावणी",
        "लाम्बा लाम्बा हाथां रो, लाम्बा होंठा रो पेरे है पैरावणी",
        "बाई थारो बाबल जी",
        "मेंदी राता माथा रो, लाम्बी लाम्बी दाढ़ी रो।। पैरे ।।",
        "बाई थारी मावड जी छोटा छोटा काना री ।। पैरे ।।",
        "बाई थारो काकोजी, छाजला सा कारा रो ।। पैरे ।।",
        "बाई थारी बेनड जी, लाम्बा लाम्बा दाता री ।। पैरे ।।"
      ]
    },

    {
      "id": "geet-vivah-4",
      "title": "Vivah Geet IV (म्हारी हलदी रो रंग सुरंग - पीठी उबटन गीत)",
      "image": "images/heritage/music/geet-vivah-4.jpg",
      "region": "Rajasthan (Jaipur, Jodhpur, Bikaner, Kishangarh, Ajmer)",
      "language": "Rajasthani",
      "genre": "Vivah Geet, Haldi Song, Groom Ritual Song",
      "era": "Heritage",
      "period": "Traditional",
      "authorId": null,
      "instruments": [
        "Dholak",
        "Manjira"
      ],
      "description": "जयपुर, जोधपुर, बीकानेर, किशनगढ़ व अजमेर में यह विवाह गीत बहुत प्रचलित है। इसे 'हलदी' के नाम से सम्बोधित किया जाता है। राजस्थान में दूल्हे पर भी हल्दी/पीठी चढ़ाने के दिन स्त्रियां मिलकर यह गीत गाती हैं।\n\nमेरी हल्दी, जो मालवा प्रान्त में उत्पन्न हुई थी, उसका रंग बहुत पीला व सुन्दर है। पंसारी की दुकान से पिसवा कर दूल्हे के लिए लाई हूं। दूल्हे के परिवार की प्रशंसा करते हुए महिलाएं कहती हैं कि उसके दादा, दादी, पिता, माता सब बड़े चतुर व योग्य लोग हैं। हे दूल्हा तुम्हारी लम्बी आयु हो।",
      "lyrics": [
        "म्हारी हलदी रो रंग सुरंग निपजे मालवे",
        "हलदी माल पसारी री हाट बणड़ा रे सिर चढे",
        "बणड़ारी दादयां चतर सुजान मनड़े कोड करे",
        "वारी मायड़ चतर सुजान केसर के वटे ।। म्हारी ।।",
        "वांरा बाबासा चतर सुजान",
        "मनडे कोड करे ।। म्हारी ।।",
        "चिरंजीवो रायजादा वनड़ा",
        "हल्दी मोलवे ।। म्हारी ।।"
      ]
    },

    {
      "id": "geet-vivah-5",
      "title": "Vivah Geet V (कोयलड़ी सिद चाली - विदाई गीत)",
      "image": "images/heritage/music/geet-vivah-5.jpg",
      "region": "Rajasthan (Ajmer, Jodhpur, Kishangarh, Bikaner)",
      "language": "Rajasthani",
      "genre": "Vivah Geet, Vidai Song, Bidaai Folk Song",
      "era": "Heritage",
      "period": "Traditional",
      "authorId": null,
      "instruments": [
        "Dholak",
        "Manjira",
        "Harmonium"
      ],
      "description": "विवाह के बाद विदाई के समय यह करुण गीत गाया जाता है। अजमेर, जोधपुर, किशनगढ़, बीकानेर में यह अति लोकप्रिय है।\n\nहे कोयल, हमें छोड़ कर कहां जा रही हो। आम व इमली पकने को आये हैं, महुवे का पेड़ हवा में लहरा रहा है। ऐसे समय पर क्यों जा रही हो। पिता, माता, चाचा, दादा सबका इतना प्रेम होते हुए भी तुम सबको ठुकरा कर जा रही हो। चाचा के दरवाजे पर सदा खेलती आई हो, अब एक बार मुड़ कर तो देखो। अब समझ आई, एक तोता सगे सम्बन्धियों के झुंड के साथ आया और हमारे झुण्ड में से कोयल को छांट कर उड़ गया। हम सब तुमसे पूछते हैं कि कोयल सबके प्रेम को भुलाकर कहां चली?",
      "lyrics": [
        "कोयलड़ी सिद चाली",
        "हे आम्बा पाक्या ने आमली",
        "हे महूड़ो लहरा जाय, कोयलड़ी सिद चाली",
        "हे इतरो बाबासा रो हेत, छोड़ ने सिर चाली, हे रमती",
        "काकोसा री पोल",
        "कोयलडर सिर चाली",
        "हे जायो सगारो सूवटो, ओ तो",
        "लेग्यो टोली में सूं टाल कोयलड़ी",
        "सिर चाली हे मैं थाणे पूछा म्हारी",
        "धीवड़ी हे इतरो काकोसा रा लाड",
        "कोयलड़ी — — —"
      ]
    },

    {
      "id": "geet-vivah-6",
      "title": "Vivah Geet VI (पैल के फेरे बनडी बाबोसा री प्यारी - फेरों का गीत)",
      "image": "images/heritage/music/geet-vivah-6.jpg",
      "region": "Rajasthan (Pan-Rajasthan)",
      "language": "Rajasthani",
      "genre": "Vivah Geet, Phera Ritual Song",
      "era": "Heritage",
      "period": "Traditional",
      "authorId": null,
      "instruments": [
        "Dholak",
        "Manjira"
      ],
      "description": "वर-वधु जब यज्ञ की वेदी के चारों ओर फेरे लेते हैं, तब यह गीत महिलाएं गाती हैं। इसे 'फेरों का गीत' कहा गया है।\n\nपहले फेरे में दुल्हन पिता की प्यारी है, दूसरे फेरे में दुल्हन दादा की प्यारी है, तीसरे फेरे में दुल्हन भाई की प्यारी है, चौथे फेरे में दुल्हन पराई हो गई, हमारा उस पर कोई अधिकार नहीं।",
      "lyrics": [
        "पैल के फेरे बनडी बाबोसा री प्यारी",
        "दूजे तो फेरे बनडी दादोसा री प्यारी",
        "तीजे तो फेरे बनडी बीरो सारी प्यारी",
        "चौथे तो फरे बनडी हुई री पराई।।"
      ]
    },

    {
      "id": "geet-dampatya-1",
      "title": "Dampatya Geet I (म्हारी जोड़ी रा भंवर जी - सावन विरह गीत)",
      "image": "images/heritage/music/geet-dampatya-1.jpg",
      "region": "Rajasthan (Marwar Region)",
      "language": "Rajasthani",
      "genre": "Dampatya Geet, Sawan Folk Song, Viraha Geet",
      "era": "Heritage",
      "period": "Traditional",
      "authorId": null,
      "instruments": [
        "Dholak",
        "Manjira",
        "Algoza"
      ],
      "description": "यह गीत मारवाड़ की ओर अधिक गाया जाता है। वर्षा के दिनों में नायिका का पति परदेस में है और वह उसे याद कर रही है।\n\nमेरी जोड़ी के सरदार, मार्ग में हरियाली छा रही है, आप घर आ जावो। पिया नौकरी करनी भी थी तो कहीं नजदीक करते ताकि शाम पड़ते ही घर लौट आते। जिस प्रकार बाजूबन्द डोर के साथ होता है, तुम मेरी डोर हो, जल्दी घर आ जावो। न जाने तुम्हें नौकरी करने का किसने शौक लगाया और न जाने, जाने की आज्ञा किसने दी? पति उत्तर देता है कि शौक तो मेरे दोस्तों ने लगाया और जाने की आज्ञा बड़े भाई ने दी। कुछ भी हो प्रियतम, सावन मास झूम-झूम बरस रहा है, अब घर आ जावो।",
      "lyrics": [
        "म्हारी जोड़ी रा भंवर जी",
        "मारगियो लिलांगोरे भंवर घर आव",
        "नैड़ी नैड़ी करजो पिया ओ अलबेला हो सांझ पड़े घर आव",
        "ढोला जी बाजू बंद री लूम्बा भंवर घर आव",
        "किण थाने चाला ढोला चालिया अलबेला भंवर जी",
        "किण थाने दीनी ढोला सीख, भंवर घर आव",
        "साथीड़ा तो चाला चालिया गोरी जी",
        "बीरोसा दीनी म्हाने सीख, भंवर घर आव",
        "म्हारी जोडोरा पन्नामारू, सावणी मोरे",
        "बिलम्यो घर आव।"
      ]
    },

    {
      "id": "geet-dampatya-2",
      "title": "Dampatya Geet II (देख्यौ सपना में सालव कुमार - ढोला मारू स्वप्न गीत)",
      "image": "images/heritage/music/geet-dampatya-2.jpg",
      "region": "Rajasthan (Marwar & Jaisalmer)",
      "language": "Rajasthani",
      "genre": "Dampatya Geet, Dhola Maru Ballad, Dream Song",
      "era": "Heritage",
      "period": "Traditional",
      "authorId": null,
      "instruments": [
        "Ravanahatha",
        "Dholak",
        "Manjira"
      ],
      "description": "यह गीत राजस्थान की प्रसिद्ध प्रेमगाथा 'ढोला मारू' पर आधारित है। मारवण जब ढोला (सालवकुमार) को स्वप्न में देखती है तब अपनी सहेली को स्वप्न कह सुनाती है।\n\nसखी, स्वप्न में सालव कुमार दिखे, तुम्हें बता नहीं सकती कि उन्हें देखकर मैं कितनी निहाल हो गई। स्वप्न भी क्या जंजाल होता है, कुछ पता नहीं चलता कि क्या-क्या होता चला जाता है। उन्होंने कमर में कटार लगाई हुई थी व कपड़ों पर तिल्ले का काम था। उन्होंने मुझे गले लगाया और मेरे हाथों में मेंहदी का लाल रंग बिलकुल रच गया। मरवण ने सहेली से कहा कि उनकी बराबरी का योद्धा व सरदार कहीं नहीं मिलेगा।",
      "lyrics": [
        "देख्यौ सपना में सालव कुमार",
        "एक बात कहूँ मै सजनी, सपना में भई छ निहाल",
        "सूता ने सपनो आवियो बाइसा, सपनो है जाल जंजाल ।।देख्यौ।।",
        "कमर कटारी बांकडी रे, असल गेंडा री ढाल",
        "हंस हंस पीऊ कण्ठ लगाई, हाथा में मेंहदी रचगी लाल ।। देख्यौ ।।",
        "जोडी रा जोधा ज्यां रे संग मे आसी, साइनो सालव कुमार ।। देख्यौ ।।",
        "कहत सखी री सुणो हो मारवण वो ही साजनियो सिरदार ।। देख्यौ ।।"
      ]
    },

    {
      "id": "geet-jaccha-1",
      "title": "Jaccha Geet I (ग्वाड़ा तो बिचली पीपली ललना - पीपली जच्चा गीत)",
      "image": "images/heritage/music/geet-jaccha-1.jpg",
      "region": "Rajasthan (Jaipur, Ajmer, Shekhawati)",
      "language": "Rajasthani",
      "genre": "Jaccha Geet, Chhathi & Surya Puja Song",
      "era": "Heritage",
      "period": "Traditional",
      "authorId": null,
      "instruments": [
        "Dholak",
        "Manjira"
      ],
      "description": "बच्चे पैदा होने के कुछ ही दिन बाद राजस्थान में सूर्यदेव को पूजते हैं। इस अवसर पर महिलाएं मिल कर यह गीत गाती हैं।\n\nमुहल्ले के बीच पीपल का एक सुन्दर पेड़ है। हे लाला, इसके पत्ते बड़े घने हैं। यह पीपली बड़ी प्यारी लगती है। बच्चे ने जब एक पत्ता तोड़ा, तो उसमें से टप-टप कर रंग चूने लगा। रंग इतना सुन्दर है कि उसमें चुनड़ी का पल्लू भिगो दिया और उस पर बहुत ही भला रंग चढ़ आया।",
      "lyrics": [
        "ग्वाड़ा तो बिचली पीपली ललना",
        "लला जी हो जिणरा छे अड़बड़ पान",
        "प्यारी लागै पीपली ललना",
        "एक पान जच्चा तोड़ियो ललना",
        "ललाजीओ टप टप चवैरे मजीठ।। प्यारी ।।",
        "जिणमै चीर डुबोइयै ललना",
        "ललाजी ओ, हुयोरे बिजोला री भांत ।।प्यारी।।"
      ]
    },

    {
      "id": "geet-jaccha-2",
      "title": "Jaccha Geet II (म्हारी मलूक जादी जच्चा - पति पत्नी संवाद)",
      "image": "images/heritage/music/geet-jaccha-2.jpg",
      "region": "Rajasthan (Pan-Rajasthan)",
      "language": "Rajasthani",
      "genre": "Jaccha Geet, Family Samvad Song",
      "era": "Heritage",
      "period": "Traditional",
      "authorId": null,
      "instruments": [
        "Dholak",
        "Manjira"
      ],
      "description": "सन्तान होने पर पति व पत्नी का हास्य एवं नोक-झोंक भरा संवाद है जिसमें पति पत्नी को सम्बंधियों का आदर करने की सीख देता है।\n\nप्रिय, बर्तन भर कर केसर घोला है, तुम्हारे लम्बे-लम्बे बाल बहुत अच्छे लगते हैं। मेरी एक बिनती सुनो। सास का आदर करना, तभी वह प्यार देगी। इस पर पत्नी कहती है कि सास मुझे अच्छी नहीं लगती। मुझे मार मार मेरी खाल दर्द कर रही है। पति ने कहा, भाभी का आदर करना। पत्नी उत्तर देती है कि भाभी भी अच्छी नहीं लगती, वह मुझसे रात भर अनाज पिसवाती है। पति बेचारा देवरानी का आदर करने की प्रार्थना करता है किन्तु पत्नी उससे भी सहमत नहीं। उसका कहना है कि वह तो आधी रसोई उसी से करवाती है। पति अपनी बहन के लिए कहता है उस पर पत्नी कहती है कि वह उसे बिल्कुल अच्छी नहीं लगती, वह तो एक की जगह आठ शिकायतें लगाती है।",
      "lyrics": [
        "म्हारी मलूक जादी जच्चा",
        "कुण्डलो भर केसर घोली जी, आम्बा लाम्बा केस",
        "पछा स्याजी ॥ म्हारी ॥",
        "गोरी एक अरज म्हारी सुणजो सासूजी रो आदर लीजो जी",
        "पिया सासूजी नहीं सुहावे म्हारी खाल चकठया मारे ॥ म्हारी ॥",
        "गोरी एक अरज म्हारी सुणजो, भाभीजी रो आदर लीजो",
        "पिया भाभी जी नहीं सुहावे म्हासूं रातू पीसणो पिसावै ।। म्हारी ।।",
        "गोरी एक अरज म्हारी सुण जो, दोराणी रो आदर लीजो",
        "पिया दोराणी नही सुहावै, म्हारी आधी रसोई बटावै ।। म्हारी ।।",
        "गोरी एक अरज म्हारी सुण जो, बाइसा रो आदर लीजो",
        "पिया बाइसा नई सुहावै, म्हारी एकरी आइ लगावै ।। म्हारी ।।"
      ]
    },

    {
      "id": "bhajan-surya-dev",
      "title": "Surya Dev Ka Bhajan (काला जी काला कोई करो सहेल्या ऐ)",
      "image": "images/heritage/music/bhajan-surya-dev.jpg",
      "region": "Rajasthan (Jaipur, Jodhpur, Shekhawati, Bikaner)",
      "language": "Rajasthani",
      "genre": "Lok Bhajan, Surya Worship, Ritual Heritage",
      "era": "Ancient Heritage",
      "period": "Traditional Ritual Song",
      "authorId": null,
      "instruments": [
        "Dholak",
        "Manjira",
        "Choutara"
      ],
      "description": "यह रीतिका गीत सूर्य भगवान के रंगों (काले, पीले, हरे, सफेद व लाल) तथा उनकी पत्नी रेणादे की सराहना करते हुए गाया जाता है।\n\nएक सहेली दूसरी सहेली से कहती है: तुम कहती हो ग्रहण लग जाने पर सूर्य काला हो जाता है। पर इससे क्या अन्तर पड़ता है, वन में कौए भी तो काले होते हैं, सूर्य का घोड़ा भी तो काला है और उसकी पत्नी रेणादे के बाल भी तो काले हैं। केवल वह काला ही नहीं रहता, वह सूर्य उजाला भी तो करता है। जब वह अस्त होता है उसका सिंदूर रंग सा बनता है। प्रातःकाल होते ही गायें वनों में चरने जाती हैं, पक्षी प्रसन्नता से उड़ते हैं और हम सब अपने नियम धर्म की सेवा करते हैं। फिर तुम सूर्य को पीला-पीला क्या कह रही हो? चने की दाल, सूर्य का घोड़ा, रेणादेजी की ओढ़नी सभी तो पीले हैं। सूर्य सफेद है तो खेतों में कपास भी सफेद है। सूर्य लाल है तो पूस मास भी लाल होता है।",
      "lyrics": [
        "काला जी काला कोई करो सहेल्या ऐ",
        "काला वनखंड रा नाग",
        "काले सूरज जी रो घोड़लो सहेल्या ऐ",
        "काला वहू रेणादेरा केस",
        "तमका उजास वरणो, आयेमते सिंदूर वरणो",
        "गऊ ऐ वरण जाली पढ़ोदा मारग चालीया",
        "मेम धरम सब साथ सहेल्या ऐ, बावल पर बाज्या ढोल",
        "पीले तो पीले कोई करो सहेल्या ऐ, पीली चणा केरी दाल",
        "पीला सूरज जी रो घोड़लो, सहेल्या ऐ पीला बहू रेणा देती",
        "धोला जी धोला कोई करो सहेल्या ऐ, धोला बहू रेणा देती",
        "रातो रातो कोई करो सहेल्या ऐ, राती घुंघले से मजीत",
        "रातो सूरज जी रा घोड़ला सहेल्या ऐ, राता बहू रेणा देरा"
      ]
    },

    {
      "id": "bhajan-goga-ji",
      "title": "Goga Ji Ka Bhajan (कैठे रो कही जे थूं चौधरी रे)",
      "image": "images/heritage/music/bhajan-goga-ji.jpg",
      "region": "Rajasthan (Billoor Village, Marwar)",
      "language": "Rajasthani",
      "genre": "Lok Bhajan, Rajasthani Devotional, Veer Gatha",
      "era": "Ancient Heritage",
      "period": "Traditional",
      "authorId": null,
      "instruments": [
        "Choutara",
        "Damru",
        "Manjira",
        "Dholak"
      ],
      "description": "चौतारा व डमरू बजा कर यह भजन राजस्थान के मन्दिरों में गाया जाता है। यह भजन गोगा चौहान और बिलूर गांव के चौधरी खैरादां का संवाद है।\n\nगोगा, राजस्थान के एक प्रतापी वीर व वचन निभाने वाले लोक देवता हैं। इस भजन में गोगा जी कहते हैं: हे चौधरी, तेरा क्या नाम है? तू कहां का रहने वाला है? चौधरी उत्तर देता है: मैं बिलूरा गांव का चौधरी हूं, मेरा नाम खैरादां है। गोगा जी कहते हैं: यदि तेरे मन में पीर है, दुख है, तू मेरी सेवा कर, तेरे सब दुःखों का नाश हो जायेगा।",
      "lyrics": [
        "कैठे रो कही जे थूं चौधरी रे",
        "कोई कही जे थारो नांव",
        "धाम बिलूरै रो चौधरी",
        "खैरादौ कही जे म्हारो नाम",
        "सुष ले खेगदा गोगा जी",
        "कही जे म्हारो नाम",
        "सेवा म्हारी थाम ले",
        "मेटू थारे तन री पीर"
      ]
    },

    {
      "id": "bhajan-diggi-puri",
      "title": "Diggi Puri Ka Raja (डिग्गी पुरी का राजा थारे बाजे नौपत बाजा)",
      "image": "images/heritage/music/bhajan-diggi-puri.jpg",
      "region": "Rajasthan (Diggi Pur, Jaipur Region)",
      "language": "Rajasthani",
      "genre": "Lok Bhajan, Krishna Bhajan, Kalyan Ji Devotional",
      "era": "Heritage",
      "period": "Traditional",
      "authorId": null,
      "instruments": [
        "Algoza",
        "Dhol",
        "Manjira"
      ],
      "description": "जयपुर के समीप डिग्गीपुर गांव में स्थित भगवान श्रीकृष्ण (कल्याण जी) का अति प्रसिद्ध भक्ति लोक भजन।\n\nयह गीत गूजर जाति द्वारा अलगोजा, ढोल व मंजीरा के साथ गाया जाता है। हे डिग्गीपुरी के राजा तुम्हारे द्वार पर नौबत (मंगलसूचक बाजा) बज रही है, दूर दूर से हजारों यात्री तेरे दर्शन करने, शीश झुकाने व आरती करने आते हैं, तुम उनकी मनोकामना पूरी करो।",
      "lyrics": [
        "डिग्गी पुरी का राजा",
        "थारे बाजे नौपत बाजा",
        "डिग्गी पुरी का राजा",
        "थारे चरणा सीस नवाऊं",
        "थारे दरसण करवा आऊं",
        "दूर दूर का जातरी थांने",
        "ध्यावे उतारे आरती",
        "म्हारे डिग्गीपुरी का राजा"
      ]
    },

    {
      "id": "bhajan-bai-thare",
      "title": "Bai Thare Ae Mandir Mein (देवी भजन - बाई थारे ऐ मन्दिर में)",
      "image": "images/heritage/music/bhajan-bai-thare.jpg",
      "region": "Rajasthan (Ajmer, Kishangarh, Beawar)",
      "language": "Rajasthani",
      "genre": "Lok Bhajan, Devi Bhajan, Bhopa Folk Lore",
      "era": "Heritage",
      "period": "Traditional",
      "authorId": null,
      "instruments": [
        "Choutara",
        "Dholak",
        "Ghunghru",
        "Manjira"
      ],
      "description": "अजमेर, किशनगढ़ व ब्यावार में प्रचलित सिंह वाहिनी भगवती देवी के चमत्कारों एवं मन्दिर का लोक भजन।\n\nहे देवी तुम्हारे मन्दिर के चारों ओर बड़े-बड़े पहाड़ व चट्टानें शोर मचाते हैं। सिंह पर सवार होने वाली देवी तुम अपने चमत्कार दिखा-दिखाकर सबको मुग्ध कर लेती हो। तुम्हारे मन्दिर में भक्तगण इतनी भेंट चढ़ाते हैं फिर भी तुम अपना कोप प्रकट करती रहती हो। तुम तो मन्दिर के पुजारी (भोपा) को भी बांध कर रख देती हो।",
      "lyrics": [
        "बाई थारे ऐ मन्दिर में पण भाकरिया भरणावे है",
        "हाजर नाजर रमती, जोरावर नार सिंघी",
        "रमतीडी परचा देवे है",
        "बाई थारे ऐ मन्दिर में पण फिर बेस चढ़ावे ऐ",
        "हाजर नाजर रमती।",
        "बाई थारे ऐ मन्दिर पण फिर फिर भेटे चढ़ावे ऐ",
        "हाजर नाजर रमती।",
        "बाई थारे ऐ मन्दिर में भोपा ने बांध गुड़ावे ऐ",
        "हाजर नाजर रमती।"
      ]
    },

    {
      "id": "bhajan-narsi-ji",
      "title": "Narsi Ji Ka Bhajan (नरसी जी तो मोडन्यो ने घेर घरे लावे रे)",
      "image": "images/heritage/music/bhajan-narsi-ji.jpg",
      "region": "Rajasthan (Marwar & Mewar)",
      "language": "Rajasthani",
      "genre": "Lok Bhajan, Narsi Bhagat Lore, Mayra Folk Ballad",
      "era": "Heritage",
      "period": "Traditional",
      "authorId": null,
      "instruments": [
        "Ektara",
        "Khartal",
        "Dholak"
      ],
      "description": "नरसी भक्त एवं उनकी पत्नी के बीच साधु सेवा और नैनी बाई के मायरा प्रसंग पर आधारित सरस लोक भजन।\n\nनरसी भक्त साधुओं से हर समय घिरे रहते हैं, जब एक को बुलाते हैं तो चार चार आ जाते हैं। चूल्हे के पीछे एक ठण्डी रोटी भी नहीं बच पाती। नरसी जी की पत्नी कहती हैं कि साधु सब खा जाते हैं, सिर मुंडाते हैं, लम्बे टीके लगाते हैं। नैनीबाई के मायरे के लिए साधुओं की सेना साथ है।",
      "lyrics": [
        "नरसी जी तो मोडन्यो ने घेर घरे लावे रे",
        "एक न बुलावे मोड्या दोय चार आवे रे",
        "चूल्हा पाछै ठण्डी रोटी, रहण नई पावै रे",
        "देखो तो बाबो जी मायरो ले जाये रे, नैनी बाई के चरसी लो",
        "छाज भर भर पीसू मै कूंड़ा भर भर पोवू रे",
        "जाय काट्या मोडियां ने भूखां मरती रोवू रे",
        "नित उठ मोडियां सांयडबाने जावैरे, एक दोय मोडियो डूब क्यूं न जाये रे",
        "मूंड मुंडावै मोडियो, लांबा काडे टीका",
        "जाय काट्या मोडियांरा, दरसण लागे फीका"
      ]
    },

    {
      "id": "bhajan-banwari",
      "title": "Banwari Mhara Lal (बनवारी म्हारा लाल)",
      "image": "images/heritage/music/bhajan-banwari.jpg",
      "region": "Rajasthan (Jaipur Village Region)",
      "language": "Rajasthani",
      "genre": "Lok Bhajan, Farmer Folk Lore, Shram Bhakti",
      "era": "Heritage",
      "period": "Traditional",
      "authorId": null,
      "instruments": [
        "Ektara",
        "Manjira",
        "Dholak"
      ],
      "description": "जयपुर के ग्रामीण अंचल में किसानों द्वारा गाया जाने वाला श्रम, निष्ठा और आत्म-संतोष का अनुपम लोक भजन।\n\nकिसान भगवान से कहता है कि वह उससे किसी बात में कम नहीं: हे बनवारी, यदि तेरे पास राधा व रुकमण है, तो मेरे पास भी दो जाटणियां हैं। यदि तू महलों में रहता है, तो मुझपर भी टूटी झोंपड़ी की छांव है। यदि तेरे पास मस्त हाथी है, तो मेरे पास भी भूरे रंग का बैल है।",
      "lyrics": [
        "बनवारी म्हारा लाल",
        "कोना थारे सारे",
        "सुणी छे राधा रुकमण थारे",
        "थारी बराबरी म्हे करां",
        "कोई दो दो जाटणी म्हारे",
        "सुण्या छे महल मालिया थारे, थारी बराबरी म्हे करूं",
        "कोई टूटी टपरिया म्हारे",
        "सुण्यो छे मग्नो हाथी थारे, थारी बराबरी म्हे करूं",
        "कोई भूरियो पाडियो म्हारे"
      ]
    },

    {
      "id": "bhajan-ramdev-ji",
      "title": "Ramdev Ji Ka Bhajan (दुरबल अरदास रामदेव)",
      "image": "images/heritage/music/bhajan-ramdev-ji.jpg",
      "region": "Rajasthan (Ramdevra / Runicha, Jodhpur)",
      "language": "Rajasthani",
      "genre": "Lok Bhajan, Ramdevra Heritage, Devotional Lore",
      "era": "Ancient Heritage",
      "period": "Traditional",
      "authorId": null,
      "instruments": [
        "Ektara",
        "Ravanahatha",
        "Khartal",
        "Dholak"
      ],
      "description": "समस्त राजस्थान में परम पूज्य लोक देवता बाबा रामदेव जी (रूणेचा) की भक्ति में गाया जाने वाला भजन।\n\nरामदेव जी को राजस्थानी अवतार माना जाता है। जोधपुर के पास रामदेवरा (रूणेचा) में भादों मास में बहुत बड़ा मेला लगता है। इस भजन में बाबा रामदेव जी की बाल लीलाओं, परचों और भक्तों पर कृपा का सजीव वर्णन है।",
      "lyrics": [
        "दुरबल अरदास रामदेव",
        "अरज करूं थाने, हुन्यो देत बावड़ी चाल्यो",
        "हठक नई माने, दड़ी रमतो दोरो दियो",
        "पीर जा लुकिया छाने, लप बालद बिण जारो",
        "आयो थां पूछ्यो बांने, मिसरी रो लूण",
        "करियो दुनिया से जाणे।"
      ]
    },

    {
      "id": "bhajan-hadbu-ji",
      "title": "Hadbu Ji Ka Bhajan (हड़बू जी सूता रंग महल में)",
      "image": "images/heritage/music/bhajan-hadbu-ji.jpg",
      "region": "Rajasthan (Marwar / Runicha Region)",
      "language": "Rajasthani",
      "genre": "Lok Bhajan, Hadbu Ji Sankhla Lore, Folk Legend",
      "era": "Ancient Heritage",
      "period": "Traditional",
      "authorId": null,
      "instruments": [
        "Ravanahatha",
        "Choutara",
        "Manjira"
      ],
      "description": "राजस्थान के पंच पीरों में से एक पूज्य लोक देवता हड़बू जी सांखला का स्वप्न एवं रूणेचा यात्रा भजन।\n\nहड़बू जी सांखला के रंग महल में विश्राम, आधी रात के स्वप्न जंजाल, सुगन चिड़ी के शकुन और रूणेचा प्रस्थान की पावन लोक कथा का भक्ति संगीत।",
      "lyrics": [
        "हड़बू जी सूता रंग महल में जी",
        "हिंगलु रा ढोल्या सिरख पतरणा",
        "हड़बू जी सूता रंग महल में",
        "आधी रात का मने सपनो आयो",
        "सपनो मने आयो जंजाल जी",
        "हड़बू जी सुरंग पिलाण पर बैठा जाय",
        "जाय रुणेचा हड़बू जी",
        "सुगन चिड़ी, सुगना म्हारी माता",
        "हड़बू जी ने सगुन बताय।।"
      ]
    },

    {
      "id": "bhajan-balaji",
      "title": "Balaji (Hanuman Ji) Ka Bhajan (बावड़ी का बालाजी)",
      "image": "images/heritage/music/bhajan-balaji.jpg",
      "region": "Rajasthan (Ajmer, Beawar, Pushkar, Kekri, Kishangarh)",
      "language": "Rajasthani",
      "genre": "Lok Bhajan, Hanuman Bhajan, Bheru & Mata Devotional",
      "era": "Heritage",
      "period": "Traditional",
      "authorId": null,
      "instruments": [
        "Dholak",
        "Manjira",
        "Choutara"
      ],
      "description": "अजमेर, पुष्कर व ब्यावर क्षेत्र का सुप्रसिद्ध हनुमान जी (बावड़ी का बालाजी) एवं भैरू जी लोक भजन।\n\nभक्त हनुमान जी से अरदास करता है: हे बावड़ी के बालाजी, मेरे जीवन की नाव पार लगाओ। भैरू बकरे का भोग मांगते हैं व माता नये वस्त्र। मैं तुम पर प्रतिदिन दूध, पताशे व रेवड़ी का भोग चढाऊंगा, तुम्हीं आकर मदद करो।",
      "lyrics": [
        "म्हारा बेड़ा लगाय दीजो पार",
        "बावड़ी का बालाजी",
        "भैरू मांगे बाकला, म्हारी माता मांगे बेस",
        "म्हारे आजे मदत पर आज",
        "दूध पताशा रेवड़ी जी, थाने नित उठ देसी भोग",
        "बावड़ी का बाला जी, कुची वाला का भैरू जी",
        "सुरसत माता सारदा जी ओ",
        "म्हारो बेडो लगा दीजो पार"
      ]
    },

    {
      "id": "bhajan-gajanand",
      "title": "Gajanand Ka Bhajan (गणपत दाता दोसो दाता होजी)",
      "image": "images/heritage/music/bhajan-gajanand.jpg",
      "region": "Rajasthan (Rajasthan)",
      "language": "Rajasthani",
      "genre": "Lok Bhajan, Ganesh Stuti, Artisan Folk Lore",
      "era": "Heritage",
      "period": "Traditional",
      "authorId": null,
      "instruments": [
        "Choutara",
        "Manjira",
        "Dholak"
      ],
      "description": "काम-धन्धे के बाद कारीगरों व संतों द्वारा चौतारा एवं मंजीरे बजाकर गाया जाने वाला गणपति लोक भजन।\n\nहे गणपति तुम्हारे चारों तरफ घुंघरुओं के साथ ताल दे देकर लोग गाते हैं। तुम सबके दाता हो। तुम्हारे चौड़े मस्तक पर तेल-सिन्दूर चढ़ता है, लम्बी सूंड भूले मनुष्य को सन्मार्ग पर लाती है, चौड़े कान देवियों को पंखा झलते हैं, और चौड़ी पीठ पर अम्बारी रखी जाती है।",
      "lyrics": [
        "अगल बगल में ताल बाजे",
        "घूंघरा बाजन्ता, गणपत दाता दोसो दाता होजी",
        "थारा चौड़ा रे सीस गजानन्द ज्यापै तेल सिन्दूर चढ़न्ता",
        "थारी लम्बी रे सूंड गजानन्द नुगरां की नाड़ मरन्ता",
        "थारा चौड़ा रे कान गजानन्द, शक्ति के भाल झुलन्ता",
        "थारी चौड़ी रे पीठ गजानन्द, ज्यापै अम्बारी रखन्ता"
      ]
    },

    {
      "id": "bhajan-gorja-mata",
      "title": "Gorja Mata Ka Bhajan (गोर ए गणगोर माता खोल रे किवाड़ी)",
      "image": "images/heritage/music/bhajan-gorja-mata.jpg",
      "region": "Rajasthan (Jaipur, Shekhawati, Bikaner)",
      "language": "Rajasthani",
      "genre": "Lok Bhajan, Gangaur Folk Song, Devi Worship",
      "era": "Heritage",
      "period": "Traditional",
      "authorId": null,
      "instruments": [
        "Dholak",
        "Manjira"
      ],
      "description": "चैत्र मास में गणगौर पूजा के अवसर पर महिलाओं द्वारा गोरजा (गौरी) माता के द्वार पर गाया जाने वाला मंगल भजन।\n\nहे माता गणगौर, किवाड़ खोलो, मैं तुम्हारी पुजारिन बाहर खड़ी हूँ। महिलाएं माता से प्रार्थना करती हैं कि हमें कृष्ण जैसा भाई, राई जैसी भाभी, प्रेम से रहने वाला पिता, बड़े दिल वाला चाचा, चूड़ियों वाली चाची और सदा सुहागण बहनें देना।",
      "lyrics": [
        "गोर ए गणगोर माता खोल रे किवाड़ी",
        "बायरि उबी था ने पूजण वाली",
        "पूजो ऐ पुजन्ता वाली काईं काईं मांगो",
        "कान कंवर सो बीरों मांगा राई सी भोजाई",
        "जतवर जामी बाबल मांगा राता देई मायड",
        "बड़ो दु मालिक काको मांगा",
        "चुडला वाली काकी",
        "फूंस उड़ावण फूफो मांगा",
        "कूड़ो धोवण मूवा",
        "काजल्यो बहनोई मांगा",
        "सदा सुहागण बहना।"
      ]
    },

    {
      id: "kesariya-balam-aavo-ni",
      title: "Kesariya Balam Aavo Ni",
      image: "images/heritage/music/kesariya-balam-aavo-ni.jpg",
      region: "Rajasthan",
      language: "Rajasthani / Marwari",
      genre: "Maand (folk-classical)",
      era: "Heritage",
      period: "Traditional",
      authorId: null,
      instruments: ["Sarangi", "Dholak", "Manjira"],
      description: "One of Rajasthan's best-known Maand-style folk songs, sung as a wife's plea for her saffron-robed beloved (kesariya balam) to return home, prized for its long, ornamented vocal lines.",
      lyrics: []
    },
    {
      id: "ghoomar-heritage",
      title: "Ghoomar",
      image: "images/heritage/music/ghoomar.jpg",
      region: "Rajasthan",
      language: "Rajasthani / Marwari",
      genre: "Rajasthani Folk Dance Song",
      era: "Heritage",
      period: "Traditional, centuries old",
      authorId: null,
      instruments: ["Dholak", "Nagada", "Manjira"],
      description: "The song accompanying Ghoomar, a centuries-old twirling dance performed by Rajasthani women at weddings and festivals, their swirling ghagra skirts giving the dance its name.",
      lyrics: []
    },
    {
      id: "ekla-chalo-re",
      title: "Ekla Chalo Re",
      image: "images/heritage/music/ekla-chalo-re.jpg",
      region: "West Bengal",
      language: "Bengali",
      genre: "Rabindra Sangeet",
      era: "Heritage",
      period: "1905",
      authorId: "rabindranath-tagore",
      instruments: ["Esraj", "Harmonium", "Tabla"],
      description: "A defiant, resolve-strengthening Rabindra Sangeet composition urging a person to walk on alone if no one answers their call — later adopted as a favourite anthem of independence-era leaders.",
      lyrics: []
    },
    {
      id: "milon-hobe-koto-dine",
      title: "Milon Hobe Koto Dine",
      image: "images/heritage/music/milon-hobe-koto-dine.jpg",
      region: "West Bengal",
      language: "Bengali",
      genre: "Baul",
      era: "Heritage",
      period: "Traditional",
      authorId: "lalon-fakir",
      instruments: ["Ektara", "Dotara", "Khol"],
      description: "A well-loved Baul song asking when union with the divine beloved will finally come, drawn from Bengal's wandering-mystic Baul singing tradition.",
      lyrics: []
    },
    {
      id: "vatapi-ganapatim-heritage",
      title: "Vatapi Ganapatim",
      image: "images/heritage/music/vatapi-ganapatim.jpg",
      region: "Tamil Nadu / Pan-South India",
      language: "Sanskrit",
      genre: "Carnatic Classical",
      era: "Heritage",
      period: "Early 19th century",
      authorId: "muthuswami-dikshitar",
      instruments: ["Veena", "Mridangam", "Violin"],
      description: "A celebrated Carnatic composition in praise of Lord Ganesha, set in raga Hamsadhwani, still used to open concerts across South India today.",
      lyrics: []
    },
    {
      id: "raghupati-raghav-raja-ram",
      title: "Raghupati Raghav Raja Ram",
      image: "images/heritage/music/raghupati-raghav-raja-ram.jpg",
      region: "Pan-India",
      language: "Hindi / Sanskrit",
      genre: "Bhajan",
      era: "Heritage",
      period: "Traditional, popularised early 20th century",
      authorId: null,
      instruments: ["Harmonium", "Tabla", "Manjira"],
      description: "A widely sung devotional bhajan to Lord Rama, famously among Mahatma Gandhi's favourite hymns and sung at his daily prayer meetings during the independence movement.",
      lyrics: []
    },
    {
      id: "vande-mataram",
      title: "Vande Mataram",
      image: "images/heritage/music/vande-mataram.jpg",
      region: "West Bengal / Pan-India",
      language: "Bengali / Sanskrit",
      genre: "National Song",
      era: "Heritage",
      period: "1876 (written), 1937 adopted as National Song",
      authorId: "bankim-chandra-chatterjee",
      instruments: ["Orchestral", "Choir"],
      description: "India's National Song, written by Bankim Chandra Chatterjee as part of his novel Anandamath, and formally adopted alongside the National Anthem.",
      lyrics: []
    },
    {
      id: "sare-jahan-se-achha-heritage",
      title: "Sare Jahan Se Achha",
      image: "images/heritage/music/sare-jahan-se-achha.jpg",
      region: "Pan-India",
      language: "Urdu / Hindi",
      genre: "Patriotic",
      era: "Heritage",
      period: "1904 (poem), many musical settings since",
      authorId: "muhammad-iqbal",
      instruments: ["Orchestral", "Choir", "Brass"],
      description: "A widely sung patriotic verse originally written by poet Muhammad Iqbal, often performed at national ceremonies and by armed forces bands.",
      lyrics: []
    },
    {
      id: "hoshwalon-ko-khabar-kya-heritage",
      title: "Hoshwalon Ko Khabar Kya",
      image: "images/heritage/music/hoshwalon-ko-khabar-kya.jpg",
      region: "Pan-India",
      language: "Hindi / Urdu",
      genre: "Ghazal",
      era: "Modern",
      period: "1999",
      authorId: "jagjit-singh",
      instruments: ["Harmonium", "Tabla", "Guitar"],
      description: "A soulful ghazal from Sarfarosh (1999), written by Nida Fazli and rendered by Jagjit Singh, prized for its restrained emotional intensity.",
      lyrics: []
    },
    {
      id: "kaga-sab-tan-khaiyo-heritage",
      title: "Kaga Sab Tan Khaiyo",
      image: "images/heritage/music/kaga-sab-tan-khaiyo.jpg",
      region: "Rajasthan",
      language: "Rajasthani / Braj",
      genre: "Devotional / Folk-Devotional",
      era: "Heritage",
      period: "16th century",
      authorId: "meera-bai",
      instruments: ["Ektara", "Dholak", "Manjira"],
      description: "A devotional folk verse addressed to a crow, asking it to spare her eyes so she may keep watching for her beloved Krishna's return.",
      lyrics: []
    }
  ],

  // ============ AUTHORS ============
  authors: [
    {
      id: "meera-bai",
      name: "Meera Bai",
      image: "images/heritage/authors/meera-bai.jpg",
      era: "16th century",
      region: "Rajasthan",
      knownFor: "Devotional poetry (bhajans) to Krishna",
      bio: "A Rajasthani princess turned wandering mystic-poet, Meera Bai's devotional verses to Krishna are among the most enduring works of the Bhakti movement, still sung across North India today."
    },
    {
      id: "kabir",
      name: "Kabir",
      image: "images/heritage/authors/kabir.jpg",
      era: "15th century",
      region: "Uttar Pradesh (Varanasi)",
      knownFor: "Mystic couplets (dohas) and devotional songs",
      bio: "A weaver-poet whose blunt, questioning verses challenged ritual and caste across both Hindu and Muslim traditions, Kabir's dohas and bhajans remain central to North Indian folk-devotional singing."
    },
    {
      id: "rabindranath-tagore",
      name: "Rabindranath Tagore",
      image: "images/heritage/authors/rabindranath-tagore.jpg",
      era: "1861–1941",
      region: "West Bengal",
      knownFor: "Rabindra Sangeet, poetry, India's National Anthem",
      bio: "A Nobel laureate poet, writer and composer, Tagore wrote and set to music over two thousand songs (Rabindra Sangeet), and authored the lyrics of India's National Anthem, Jana Gana Mana."
    },
    {
      id: "lalon-fakir",
      name: "Lalon Fakir",
      image: "images/heritage/authors/lalon-fakir.jpg",
      era: "19th century",
      region: "Bengal region",
      knownFor: "Baul philosophy and songs",
      bio: "A mystic-poet and the most celebrated figure of Bengal's Baul tradition, Lalon Fakir's songs blend Hindu, Muslim and Sufi thought into a philosophy of the inner, formless divine."
    },
    {
      id: "bankim-chandra-chatterjee",
      name: "Bankim Chandra Chatterjee",
      image: "images/heritage/authors/bankim-chandra-chatterjee.jpg",
      era: "1838–1894",
      region: "West Bengal",
      knownFor: "Vande Mataram, Bengali novels",
      bio: "A pioneering Bengali novelist who wrote Vande Mataram as part of his 1882 novel Anandamath; the song went on to become a rallying cry of the independence movement and India's National Song."
    },
    {
      id: "muhammad-iqbal",
      name: "Muhammad Iqbal",
      image: "images/heritage/authors/muhammad-iqbal.jpg",
      era: "1877–1938",
      region: "Punjab (undivided India)",
      knownFor: "Sare Jahan Se Achha, Urdu-Persian poetry",
      bio: "A philosopher-poet whose 1904 verse Sare Jahan Se Achha became one of the subcontinent's most widely sung patriotic songs, still performed at Indian national ceremonies today."
    },
    {
      id: "muthuswami-dikshitar",
      name: "Muthuswami Dikshitar",
      image: "images/heritage/authors/muthuswami-dikshitar.jpg",
      era: "1775–1835",
      region: "Tamil Nadu",
      knownFor: "Carnatic classical compositions",
      bio: "One of the Carnatic music tradition's 'Musical Trinity', Muthuswami Dikshitar composed hundreds of Sanskrit kritis, including the widely performed Vatapi Ganapatim."
    },
    {
      id: "jagjit-singh",
      name: "Jagjit Singh",
      image: "images/heritage/authors/jagjit-singh.jpg",
      era: "1941–2011",
      region: "Rajasthan (Sri Ganganagar) / Pan-India",
      knownFor: "Ghazal singing and composition",
      bio: "Widely credited with bringing the ghazal to mainstream Indian audiences, Jagjit Singh's warm, restrained voice defined the genre for a generation of listeners."
    }
  ],

  // ============ FOLKTALES ============
  folktales: [
    {
      id: "panchatantra",
      title: "Panchatantra",
      image: "images/heritage/folktales/panchatantra.jpg",
      region: "Pan-India",
      origin: "Ancient Sanskrit collection, c. 3rd century BCE",
      themes: ["Animal fables", "Moral instruction", "Statecraft"],
      description: "An ancient collection of interlinked animal fables originally composed to teach princes the principles of wise conduct and statecraft, later translated into dozens of world languages."
    },
    {
      id: "jataka-tales",
      title: "Jataka Tales",
      image: "images/heritage/folktales/jataka-tales.jpg",
      region: "Pan-India",
      origin: "Buddhist canon, compiled over several centuries BCE–CE",
      themes: ["Past lives of the Buddha", "Animal fables", "Ethics"],
      description: "A large body of stories recounting the Buddha's previous lives, often as animals, used to illustrate virtues like generosity, patience and self-sacrifice.",
    },
    {
      id: "akbar-birbal-tales",
      title: "Akbar-Birbal Tales",
      image: "images/heritage/folktales/akbar-birbal-tales.jpg",
      region: "North India",
      origin: "Oral tradition around the Mughal court, 16th century onward",
      themes: ["Wit and wisdom", "Court life", "Humour"],
      description: "A popular cycle of witty exchanges between Emperor Akbar and his clever courtier Birbal, blending humour with practical wisdom, passed down largely through oral retelling.",
    },
    {
      id: "vikram-betaal",
      title: "Vikram-Betaal (Baital Pachisi)",
      image: "images/heritage/folktales/vikram-betaal.jpg",
      region: "Pan-India",
      origin: "Ancient Sanskrit frame-story collection",
      themes: ["Riddles", "Kingship", "Moral dilemmas"],
      description: "A frame story in which King Vikramaditya repeatedly carries a riddling spirit (Betaal) who tells a tale ending in a puzzling moral question the king must answer correctly.",
    },
    {
      id: "tenali-rama-tales",
      title: "Tenali Rama Tales",
      image: "images/heritage/folktales/tenali-rama-tales.jpg",
      region: "Andhra Pradesh / Telangana",
      origin: "Oral tradition around the Vijayanagara court, 16th century",
      themes: ["Wit", "Court life", "Humour"],
      description: "Stories of the quick-witted poet-jester Tenali Rama, a courtier of the Vijayanagara Empire's Krishnadevaraya, known for outsmarting rivals through cleverness rather than force.",
    },
    {
      id: "hitopadesha",
      title: "Hitopadesha",
      image: "images/heritage/folktales/hitopadesha.jpg",
      region: "Pan-India",
      origin: "Sanskrit collection, believed compiled 12th–14th century",
      themes: ["Animal fables", "Friendship", "Practical wisdom"],
      description: "A Sanskrit collection of fables closely related to the Panchatantra, structured around themes of gaining friends, losing friends, war and peace.",
    },
    {
      id: "kathasaritsagara",
      title: "Kathasaritsagara",
      image: "images/heritage/folktales/kathasaritsagara.jpg",
      region: "Kashmir",
      origin: "11th-century Sanskrit compilation by Somadeva",
      themes: ["Adventure", "Magic", "Frame narratives"],
      description: "The 'Ocean of the Streams of Story', an enormous 11th-century Sanskrit compilation of older tales gathered by the Kashmiri poet Somadeva.",
    },
    {
      id: "moomal-mahendra-legend",
      title: "The Legend of Moomal and Mahendra",
      image: "images/heritage/folktales/moomal-mahendra-legend.jpg",
      region: "Rajasthan",
      origin: "Marwari oral folk legend",
      themes: ["Tragic romance", "Desert setting", "Folk balladry"],
      description: "A tragic Marwari folk legend of princess Moomal and prince Mahendra, whose love story ends in misunderstanding and loss, still recounted in the folk ballad Moomal across the Thar desert region.",
    },
    {
      id: "thakurmar-jhuli",
      title: "Thakurmar Jhuli",
      image: "images/heritage/folktales/thakurmar-jhuli.jpg",
      region: "West Bengal",
      origin: "Compiled by Dakshinaranjan Mitra Majumdar, 1907",
      themes: ["Fairy tales", "Grandmother's stories", "Bengali folklore"],
      description: "'Grandmother's Bag of Tales', a landmark 1907 collection of Bengali fairy tales and folk stories, gathered from oral village storytelling and still read to children across Bengal.",
    }
  ],

  // ============ NATAKS (FOLK THEATRE) ============
  nataks: [
    {
      "id": "lv-khyal-dula-dhadwi",
      "title": "Khayal Dula Dhadwi Ko (ख्याल दूलाधाड़वी को - नानूलाल राणा)",
      "image": "images/heritage/nataks/lv-khyal-dula-dhadwi.jpg",
      "region": "Rajasthan (Seedalgarh & Ajmer)",
      "style": "Rajasthani Khyal Folk Theatre (नानूलाल राणा (Nanu Lal Rana))",
      "description": "'ख्याल दूलाधाड़वी को' वि.सं. 1957 (1901 ई.) में ज्ञानसागर प्रेस बम्बई से प्रकाशित नानूलाल राणा द्वारा रचित शौर्य एवं स्वाभिमान का प्रसिद्ध राजस्थानी ख्याल लोक नाट्य।\n\n'ख्याल दूलाधाड़वी को' वि.सं. 1957 (1901 ई.) में ज्ञानसागर प्रेस बम्बई से प्रकाशित है। दूल्हा के माता-पिता को नौरंगशाह (औरंगजेब) बंदी बना लेता है, जहाँ दूल्हा का जन्म होता है। बादशाह के पुत्र जन्म की खुशी में सब बंदी मुक्त होते हैं। बड़ा होकर दूल्हा धाड़वी शक्ति संचय कर सीदलगढ़ राज्य की स्थापना करता है। किन्तु बादशाह से बदला लेने को बेचैन रहता है। बादशाह की बहिन जहाँआरा अजमेर जियारत करने जाती है। यह सुनकर दूल्हा धाड़वी रास्ते में ही आक्रमण कर पूरा लश्कर लूट लेता है तथा जहाँआरा को बंदी बना लेता है।\n\nजहाँआरा से यह वचन लेकर कि वह अपने भाई को भरे दरबार में धिक्कारेगी तथा यह कहेगा कि दूल्हा ने मेरी बेइज्जती की, वह उसे मुक्त कर देता है। जहाँआरा के उकसाने पर औरंगजेब भारी फौज आक्रमण करने को भेजता है। दूल्हा की अनुपस्थिति में सीदलगढ़ को मुगल सेना लूट लेती है तथा उसकी माँ, पत्नी व पुत्र बंदी बना लिये जाते हैं। एक भाट द्वारा यह समाचार सुन दूल्हा धाड़वी आता है और मुगल सेना को परास्त कर अपने परिवार को मुक्त करवा लेता है। इस ख्याल में वीरता, स्वाभिमान, बदले की भावना, कुल का गौरव, वीरांगना और वीर बालक के उच्चभावों का सुंदर चित्रण किया गया है।"
    },

    {
      "id": "lv-khyal-chandrapratap",
      "title": "Khayal Chandrapratap Raja Ko (ख्याल चन्द्रप्रताप राजा को - भान कवि)",
      "image": "images/heritage/nataks/lv-khyal-chandrapratap.jpg",
      "region": "Rajasthan (Ujjain & Patna)",
      "style": "Rajasthani Khyal Folk Theatre (भान कवि (Bhan Kavi))",
      "description": "भान कवि द्वारा रचित राजस्थानी प्रेमाख्यान ख्याल नाट्य जिसमें उज्जैन के राजा चन्द्रप्रताप और पटना की राजकुमारी चंदबदन के प्रेम की कथा है।\n\nयह ख्याल भान कवि द्वारा लिखा गया एक प्रेमाख्यान है। इसमें सूफी प्रेमाख्यानों की पद्धति पर रूप गुण श्रवण व चितदर्शन द्वारा राजा को राजकुमारी से प्रेम होता है और उसे प्राप्त करने के लिए यह साधु वेश में निकल पड़ता है और उसे प्राप्त करके ही चैन लेता है।\n\nउज्जैन नगरी के राजा चन्द्रप्रताप की रानी पटरमंजरी बड़ी रूपवती थी और उसे अपने रूप पर बड़ा गर्व था। वह अपने आपको सबसे रूपवती मानती थी। एक दिन एक साधु उसके द्वार पर आता है भिक्षा प्राप्त कर साधु आशीर्वाद देता है—\nकायम हो सुहाग पति से प्रीत सवाई।\nदेता साधु आसका कौड़ बरस का भूप हो।\nतेरा नाजो कामनी चंद बदन सा रूप हो।।\n\nचंद बदन का नाम सुनकर रानी को बड़ा क्रोध आता है। उसे ईर्ष्या होती है कि मुझसे सुंदर चंद बदन कौन है? साधु बताता है कि यह पटना के राजा रंगपत की राजकुमारी है जो रूप-गुण में अद्वितीय है। रानी साधु को दंडित करने के लिए राजा चन्द्रप्रताप को बुलवाती है जब राजा राजकुमारी के रूप गुण की प्रशंसा सुनता है तो राजा उसे प्राप्त करने को व्याकुल हो जाता है। राजा मुसवर अब्दुल खाँ रहमान को पटना जाकर उस राजकुमारी की तस्वीर उतार कर लाने का आदेश देता है। मुसवर वहाँ जाकर मालिन को बख्शीस देकर फूलों की ओट में होकर उस चंद बदन राजकुमारी की तस्वीर उतार लेता है और राजा को संभला देता है। तस्वीर देखकर राजा और दीवाना हो जाता है।\n\nराजा भगवा वेश धारण कर साधु का वेश बनाकर पटना नगरी आता है। वहाँ एक राक्षस का आतंक था। वहाँ के राजा रंगपत ने यह बात चन्द्रप्रताप को बताई। राजा चन्द्रप्रताप ने राक्षस को मार उनका कष्ट दूर किया। चन्द्रप्रताप राजकुमारी चंदबदन को ब्याह कर घर ले आता है।"
    },

    {
      "id": "lv-khyal-dhol-sultan",
      "title": "Dhol Sultan Nyahalde Ko Khayal (ढोल सुलतान न्याहलदे को खयाल)",
      "image": "images/heritage/nataks/lv-khyal-dhol-sultan.jpg",
      "region": "Rajasthan (Fatehpur, Keechakgarh & Narwalgarh)",
      "style": "Rajasthani Khyal Folk Theatre (प्रहलादी राम पुरोहित & प्रेमसुख भोजक)",
      "description": "फतेहपुर के प्रहलादीराम पुरोहित द्वारा रचित एवं प्रेमसुख भोजक द्वारा गाया गया प्रसिद्ध राजस्थानी ख्याल नाट्य जिसमें सुल्तान और न्याहलदे के प्रेम तथा वीरता का अद्भुत वर्णन है।\n\nइस ख्याल के लेखक प्रहलादी राम पुरोहित (फतेहपुर) है\nप्रहलादराम फरमाई या नई रंगत चीज लाई। सज्जन के हिये सिलाई प्रेम भोजग कथ गाई कह प्रहलाद आस प्रभु पूरी होई मेरे मन की मानि ।।\n\nइस प्रकार उपलब्ध ख्याल के लेखक प्रहलादीराम पुरोहित हैं और इस कथा को प्रेमसुख भोजक ने गाया है। कीचकगढ के राजा मैनपाल का पुत्र सुलतान बचपन में बहुत चंचल था वह पणिहारियों के घड़े तीर से फाड़ देता था एक दिन एक ब्राह्मण की बेटी का घड़ा फोड़ने पर सुलतान को बारह वर्ष का बनवास हो जाता है। सुलतान सबसे पहले गुरु गोरखनाथ की सेवा में जाता है। गुरु से आशीर्वाद लेकर कमध्वज राय के राज्य ईडरगढ में जाता है। सुलतान को गुणवान-शीलवान देखकर राजा उसे अपना धर्म पुत्र बना लेता है- प्रथम पुत्र तुम लग्ये धरम का दूजो फूलकंवार। एक दिन दोनों राजकुमार शिकार खेलने जाते हैं। एक काले हिरण का पीछा करते हुए सुलतान का घोड़ा केलगढ की राजकुमारी निहालदे के बाग में कूद जाता है। बाग में एक दूसरे को देखते ही दोनों स्नेह सम्बन्ध में बंध जाते हैं-\nमगन होय कर देती हंसणी बरमाला को दान। मैं पतनी निज दास आपकी तुम पति इंद्र समान ।।\n\nठाठ-बाट से निहालदे का सुल्तान के साथ विवाह हुआ। सुलतान निहालदे को लेकर राजा कमध्वज के पास गया तो रानी यह बात सहन नहीं कर सकी और अपने राज्य ईडरगढ को छोड़ देने का सुलतान को आदेश दिया। सुलतान निहालदे से तीज पर वापिस आने की प्रतीक्षा करके नौकरी के लिए चला जाता है और नरवलगढ पहुँचता है। बली राक्षस को मारकर नरवलगढ की जनता को संकटमुक्त करता है। फिर नरवलगढ में राजा ढोला कंवार के दरबार में पहुँचता है वहाँ मरवण को अपनी धर्म बहन बना लेता है और रोज की लाख टका की चाकरी करने लगता है। सुलतान को अनेक विकट परिस्थितियों का सामना करना पड़ता है पर अपनी होशियारी व गुरु गोरखनाथ की कृपा से सब कष्टों का निवारण होता है।\n\nसुलतान जब तीज को नहीं आता है तो निहालदे अपना प्रेम संदेश चारण को देकर भेजती है और कहती है कि यह परवाना मरवण को देना। मारू को जब पता चलता है कि उसकी भौजाई निहालदे दुःखी है तो वह सुलतान को विदा कर देती है। विदा होते वक्त सुलतान कहता है कि वह धर्म का भात भरने जरूर आयेगा। मारू जवाब देती है कि भात न्यौतने जरूर आऊंगी। निहालदे को साथ ले सुलतान अपनी राजधानी कीचकगढ पहुँचता है। बारह वर्षों बाद अपने बेटे को बहू सहित पाकर राजा बहुत खुश होता है। सुलतान का राजतिलक कर देता है और वे सुख से रहने लगते हैं।"
    },

    {
      "id": "lv-khyal-dayaram-dhadwi",
      "title": "Dayaram Dhadwi Ka Khayal (दयाराम धाड़वी का ख्याल)",
      "image": "images/heritage/nataks/lv-khyal-dayaram-dhadwi.jpg",
      "region": "Rajasthan (Garh Godi & Delhi)",
      "style": "Rajasthani Khyal Folk Theatre (प्रहलादीराम पुरोहित (फतेहपुर))",
      "description": "प्रहलादीराम पुरोहित द्वारा रचित एवं संवत् 1951 में प्रकाशित गढ़ गोडी के भोमिया सूरवीर दयाराम धाड़वी की बहादुरी का राजस्थानी ख्याल लोक नाट्य।\n\nप्रहलादीराम पुरोहित द्वारा लिखित इस ख्याल को सुंदरमल खेड़वाल से शुद्ध करवाकर खेमराज श्री कृष्णदास ने संवत् 1951 में प्रकाशित किया। इस ख्याल में गढ गोडी का भोमिया दयाराम धाड़वी की सूरवीरता की कथा है जो धाड़ा डालता है। दयाराम धाड़वी की पत्नी उससे कहती है कि मेरे लिए दिल्ली में जहाँगीर बादशाह की बेगम के नथ का मोती लाकर दो। दयाराम जाने को उद्यत होता है तो उसकी मां उसे मना कर देती है तो दयाराम अपनी वीरता दिखाते हुए कहता है—\nसूरवीर की कामण तरसै जां को जीबो है धरकार। मोती दोय हुरम की नथ का ल्याता लगै न बार।।\n\nदयाराम हुरम का डोला लूटने को चल पड़ता है। रानी कहती है कि डोला मत लूटो बादशाह से खूब धन दौलत व मुलतान का गढ दिलवा दूंगी और दिल्ली के दरबार में तेरा आदर होगा। पर वह सब कब मानने वाला था—\nमोती लूट्या जुलम जोर सैं बेसर का सिणगार ।।\n\nरानी बादशाह से सब हाल कह सुनाती है राजा बीड़ा फेरता है कि जो कोई दयाराम को पकड़कर लायेगा उसे खूब धन दौलत मिलेगी इस बीड़े को जाफर पठान उठा लेता है। जाफर, दयाराम को अपना धर्म का भाई बनाकर धोखे से पकड़वा देता है। बादशाह कहता है—\nजब छोडू दयाराम देख मेरा सिंह बड़ा बलवान। उन सेती झगड़ा करो स नही छोड़ो गर्व गुमान ।।\n\nदयाराम नौहत्थे शेर के टुकड़े-टुकड़े कर डालता है इस प्रकार वह अपनी सूरवीरता से बादशाह को हरा देता है इसीलिए कहा गया कि सूरवीर की जय होती है और भगवान सदा उसकी सहायता करते हैं।"
    },

    {
      "id": "lv-khyal-narsi-mahta-mahera",
      "title": "Khayal Narsi Mahte Ke Mahere Ka (ख्याल नरसी महते के माहेरे का)",
      "image": "images/heritage/nataks/lv-khyal-narsi-mahta-mahera.jpg",
      "region": "Rajasthan (Junagadh & Anjar)",
      "style": "Rajasthani Khyal Folk Theatre (उजीरा तेली (Ujira Teli))",
      "description": "उजीरा तेली द्वारा रचित एवं रामप्रेस कलकत्ता में संवत् 1966 में प्रकाशित नरसी भगत के मायरे (भात) का परम सुप्रसिद्ध राजस्थानी ख्याल नाट्य।\n\nउजीरा तेली कृत इस ख्याल को रामलाल नेमाणी ने रामप्रेस, कलकत्ता में संवत् 1966 में प्रकाशित किया था। जूनागढ के महता नरसी के पुत्री नानीबाई थी जिसका विवाह नगर अन्जार के श्रीरंग शाह के पुत्र से किया जाता है। बाद में नरसी के वैराग्य की ऐसी लहर उठती है कि वे छप्पन करोड़ की धन-संपति को त्याग कर वैराग्य धारण कर लेता है और हरि के भजन मे लीन हो जाता है। उधर नानीबाई की बेटी का ब्याह होना तय होता है। नानी बाई के न भाई न माता उसके पीहर में अपना था तो तो एक नरसी जो साधु बन गया था। उसके भात भरने कौन आये? फिर भी नरसी को भात की चिट्ठी लिखी गई और उसमें बहुत ही बहुमूल्य और अतिमात्रा में चीजें लिखी गई—\nल्यासी नरसी जिनस लिखूं मैं सवा पचीसमण रोरी। बावन लिखूं बिड़दी जीमता सालम मिश्री कोरी। सवापचीस मुण लिखूं कलेवो और मेवा की बोरी। श्रीफल य साटम पूरे थोक। बोरी का छः हजार थान लिखूं ममदि ये क्रोड रूपिया रोक।। तीस लाख मोहर लिखाई ये खाम पत्री चिरचाई। बाई उंकी ये सोने कै पगल्या की फरमावै ।।\n\nइतनी चीजें न तो नरसी ला सकेगा और न ही नरसी भात भरने आयेगा यह सोचकर उन्होंने गोकुल ब्राह्मण को चिट्ठी देकर नरसी को भात का न्यौता देने भेज देते हैं। न्यौता पाकर नरसी अपने कुटुम्ब परिवार वालों को भात में चलने को कहते हैं पर वे मना कर देते हैं तो नरसी अकेला ही साधु सन्तों को साथ लेकर नगर अंजार को रवाना हो जाता है। अंजार पहुँचने पर नरसी का उचित स्वागत नहीं होता है। उसे एक टूटी टपरी मे ठहरा दिया और रूखा सूखा खाने को दिया। जब भात भरने का समय आता है तो नरसी श्री कृष्ण भगवान को याद करते हैं। कहते हैं जब जब भक्त पर भीड़ पड़ती है और वे सच्चे मन से भगवान को याद करते हैं तो भक्तों के कष्ट हरने भगवान स्वयं उपस्थित हो जाते हैं। यहाँ भी भगवान भात भरने जाते हैं और जो- जो चीजें भात की चिट्ठी में लिखी गई थी वे सारी देकर ठाठ-बाट से भात भरा जाता है। नरसी जी ने जो छप्पन करोड़ की संपत्ति को फकीरों में लुटा दिया था वह सारी आज नानी बाई के भात में लगा दी गई। पूरे अंजार नगर में नरसी की वाह-वाह हो गई। फिर नरसी अपने समधी से सीख लेकर प्रस्थान कर देता है। यह अक्षय पुण्य कमाकर नरसी बैकुण्ठ धाम को जाते हैं और इसी के साथ ख्याल समाप्त होता है।\nगुरां के चरनां शीश निवावै। कथ उजीरै तेली नरसी कृत सुणावै ।। छप्पन कोड़ को भर्यो माहेरो माया कंवर कन्हाई की।"
    },

    {
      "id": "lv-khyal-nuruddin-hushna",
      "title": "Khayal Nuruddin-Hushna Faroz (ख्याल नूरूद्दीन-हुश्ना फरोज)",
      "image": "images/heritage/nataks/lv-khyal-nuruddin-hushna.jpg",
      "region": "Rajasthan (Bisau & Shekhawati)",
      "style": "Rajasthani Khyal Folk Theatre (सदुराम विप्र (बिसाऊ) & गुरु सदुरामजी)",
      "description": "बिसाऊ निवासी सदुराम विप्र द्वारा रचित शेखावाटी का प्रसिद्ध प्रेम कथा ख्याल नाट्य जिसमें नूरूद्दीन और हुश्ना फरोज के अमर प्रेम का चित्रण है।\n\nश्री सदुरामजी गुरु के प्रकाशित ख्यालों में नूरूद्दीन हुश्ना फरोज ख्याल विशेष प्रसिद्ध रहा है। यह एक प्रेम कथा पर आधारित ख्याल है। इसका कथानक संक्षेप में आगे प्रस्तुत है—\n\nनूरूद्दीन पठान बसरा देश के बादशाह जेबीन के दीवान काखानाद्दीन का बेटा था। बादशाह के आदेश से दस हजार अशर्फियों में खरीदी गई पेरिस की एक चौदह वर्षीय नवयुवती दीवान के घर रहती थी। दीवान ही उसे खरीद कर लाया था। वह बादशाह के लिए लाई गई थी। वह नवयुवती सुंदर, सुडौल और सुरम्य थी। उसको और अधिक सुगठित, मोटी ताजा बनाने के उद्देश्य से ही दीवान ने एक-दो सप्ताह के लिए अपने यहाँ रख छोड़ी थी। उस खरीदी हुई दासी का नाम हुश्ना फरोज था। नूरूद्दीन का उस पर प्रेम हो गया।\n\nनूरूद्दीन का पिता एक काम से बाहर गया हुआ था और उसकी मां भी हमीद के घर जगावणी (गौना की) के लिए चली गई थी। जाते समय जुबैदा दासी को हुश्ना की सुरक्षा-देखरेख के लिए छोड़ गई थी। भीतर ही भीतर हुश्ना फरोज का प्रेमालाप नूरूद्दीन से चल रहा था। पत्र लिखे जा रहे थे। नयनों की भाषा से वार्तालाप भी होने लगा था। मौका पाकर नूरूद्दीन ने दासी को पाने के लिए बाजार भेजा और आप हुश्ना से बातें करने लगा। बात ही बात में विवाह की बात पक्की हो गई और विधि-विधान से निकाह पढा गया। काजी ने आकर सारा काम संपन्न करवाया। सामग्री में रोली, पान, मोली, सुपारी आदि मंगाए गए। कुछ मोहरें देकर दासी का मुंह बंद कर दिया गया। हथलेवा हुआ। प्रातःकाल होने पर नूरूद्दीन की मां आई तो सारी बातों का भेद खुल गया। वह बड़ी दुखी हुई पर मां थी, क्या करती ? नूरूद्दीन का पिता काखान बाहर से लौटकर आया तो पता लगने पर बहुत क्रोधित हुआ। वह तलवार से अपने पुत्र को मारने को आतुर हो गया। मां के बीच-बचाव करने पर काखान शांत हुआ परन्तु बादशाह को पता चलने पर वह भी अत्यधिक नाराज हुआ।\n\nबादशाह के भय से नूरूद्दीन और हुश्ना फरोज घर छोड़कर भाग गए। उनका पीछा किया गया। उनको तलाश किया गया। चलते चलते वे दोनों बगदाद पहुँच गए। वहाँ के शाही बाग में डेरा किया। वहीं रहने लगे। रोज रंग रेली करते। हुश्ना गाना गाती। वह संगीत में माहिर थी। पता लगने पर वहाँ का (बगदाद) बादशाह गुप्त वेश में उनका गाना सुनने वहाँ आया। वह बड़ा प्रभावित हुआ।\n\nबगदाद के बादशाह ने हुश्ना के गाने पर और नूरू के सत्य कथन पर प्रसन्न होकर उनको बसरा की आधी बादशाहत का पट्टा प्रदान कर दिया। नूरूद्दीन और हुश्ना अपने देश में आ गये और आनंद से राज करने लगे। इसमें प्रारंभ में गणेश, काली और गुरु का स्मरण किया गया है तथा विविध राग रागनियों के साथ छप्पय, लावणी, कवित्त, शेर, दोहा, चौपाई प्रयुक्त हुए हैं।"
    },

    {
      id: "ramlila",
      title: "Ramlila",
      image: "images/heritage/nataks/ramlila.jpg",
      region: "North India (especially Uttar Pradesh)",
      style: "Open-air devotional theatre",
      description: "A dramatic re-enactment of the Ramayana performed over several nights, especially around Dussehra, recognised by UNESCO as an Intangible Cultural Heritage of Humanity.",
    },
    {
      id: "raslila",
      title: "Raslila",
      image: "images/heritage/nataks/raslila.jpg",
      region: "Uttar Pradesh (Braj region) / Manipur",
      style: "Devotional dance-drama",
      description: "A devotional dance-drama re-enacting the playful, loving episodes between Krishna and Radha, performed in distinct traditions in both the Braj region and Manipur.",
    },
    {
      id: "yakshagana",
      title: "Yakshagana",
      image: "images/heritage/nataks/yakshagana.jpg",
      region: "Karnataka (coastal)",
      style: "Dance-drama with elaborate costume",
      description: "A vivid, all-night dance-drama form from coastal Karnataka combining dance, music, dialogue and spectacular costume and makeup, traditionally drawing on epic and Puranic stories.",
    },
    {
      id: "nautanki",
      title: "Nautanki",
      image: "images/heritage/nataks/nautanki.jpg",
      region: "Uttar Pradesh / North India",
      style: "Folk musical theatre",
      description: "A lively North Indian folk-theatre form combining sung verse, dialogue and dance, traditionally performed at fairs and festivals with a small travelling troupe.",
    },
    {
      id: "jatra",
      title: "Jatra",
      image: "images/heritage/nataks/jatra.jpg",
      region: "West Bengal",
      style: "Open-air folk theatre",
      description: "Bengal's most popular form of open-air folk theatre, known for its heightened acting style, live music and themes ranging from mythology to contemporary social drama.",
    },
    {
      id: "tamasha",
      title: "Tamasha",
      image: "images/heritage/nataks/tamasha.jpg",
      region: "Maharashtra",
      style: "Folk musical theatre",
      description: "A traditional Maharashtrian folk-theatre form blending song, dance (including Lavani) and comic dialogue, historically performed by travelling troupes.",
    },
    {
      id: "bhavai",
      title: "Bhavai",
      image: "images/heritage/nataks/bhavai.jpg",
      region: "Gujarat",
      style: "Folk theatre with dance",
      description: "A centuries-old Gujarati folk-theatre form combining satire, devotional themes and vigorous dance, traditionally performed in front of a temple as the opening act of a festival.",
    },
    {
      id: "therukoothu",
      title: "Therukoothu",
      image: "images/heritage/nataks/therukoothu.jpg",
      region: "Tamil Nadu",
      style: "Street theatre",
      description: "A vigorous Tamil street-theatre form performed in open village spaces, traditionally staging episodes from the Mahabharata with bold makeup and physical performance style.",
    },
    {
      id: "koodiyattam",
      title: "Koodiyattam",
      image: "images/heritage/nataks/koodiyattam.jpg",
      region: "Kerala",
      style: "Sanskrit temple theatre",
      description: "One of the oldest continuously performed theatre traditions in the world, a Sanskrit temple-theatre form from Kerala recognised by UNESCO as a Masterpiece of Oral and Intangible Heritage.",
    }
  ],

  // ============ DANCES ============
  dances: [
    {
      id: "bharatanatyam",
      title: "Bharatanatyam",
      image: "images/heritage/dances/bharatanatyam.jpg",
      region: "Tamil Nadu",
      classification: "Classical",
      description: "One of India's oldest classical dance forms, rooted in Tamil Nadu's temple tradition, known for its precise geometric postures, expressive hand gestures (mudras) and rhythmic footwork.",
    },
    {
      id: "kathak",
      title: "Kathak",
      image: "images/heritage/dances/kathak.jpg",
      region: "Uttar Pradesh / North India",
      classification: "Classical",
      description: "A North Indian classical dance form built around storytelling (the word kathak means 'storyteller'), known for its fast spins, intricate footwork and Mughal-court-influenced elegance.",
    },
    {
      id: "kathakali",
      title: "Kathakali",
      image: "images/heritage/dances/kathakali.jpg",
      region: "Kerala",
      classification: "Classical",
      description: "A dramatic Kerala dance form combining dance, drama and elaborate makeup and costume, traditionally performing episodes from the Ramayana and Mahabharata over long night-long performances.",
    },
    {
      id: "kuchipudi",
      title: "Kuchipudi",
      image: "images/heritage/dances/kuchipudi.jpg",
      region: "Andhra Pradesh",
      classification: "Classical",
      description: "A classical dance-drama form from Andhra Pradesh, historically performed by all-male troupes, known for its lively footwork and occasional balancing feats on a brass plate.",
    },
    {
      id: "odissi",
      title: "Odissi",
      image: "images/heritage/dances/odissi.jpg",
      region: "Odisha",
      classification: "Classical",
      description: "One of India's oldest classical dance forms, rooted in Odisha's temple sculpture tradition, known for its fluid torso movements and sculpturesque poses.",
    },
    {
      id: "manipuri-dance",
      title: "Manipuri",
      image: "images/heritage/dances/manipuri.jpg",
      region: "Manipur",
      classification: "Classical",
      description: "A gentle, devotional classical dance form from Manipur, closely tied to Raslila performances of Krishna and Radha, known for its flowing, understated grace.",
    },
    {
      id: "mohiniyattam",
      title: "Mohiniyattam",
      image: "images/heritage/dances/mohiniyattam.jpg",
      region: "Kerala",
      classification: "Classical",
      description: "A graceful, feminine classical dance form from Kerala, whose name means 'dance of the enchantress', known for its swaying movements and lyrical quality.",
    },
    {
      id: "sattriya",
      title: "Sattriya",
      image: "images/heritage/dances/sattriya.jpg",
      region: "Assam",
      classification: "Classical",
      description: "A classical dance form originating in Assam's Vaishnavite monasteries (sattras), founded by the saint-reformer Srimanta Sankardev, combining devotion, drama and dance.",
    },
    {
      id: "bhangra",
      title: "Bhangra",
      image: "images/heritage/dances/bhangra.jpg",
      region: "Punjab",
      classification: "Folk",
      description: "An energetic Punjabi folk dance traditionally performed at harvest festivals, marked by high jumps, shoulder movements and the driving beat of the dhol.",
    },
    {
      id: "garba",
      title: "Garba",
      image: "images/heritage/dances/garba.jpg",
      region: "Gujarat",
      classification: "Folk",
      description: "A circular Gujarati folk dance traditionally performed around a lamp or image of the goddess during Navratri, often paired with the stick dance Dandiya Raas.",
    },
    {
      id: "bihu-dance",
      title: "Bihu",
      image: "images/heritage/dances/bihu.jpg",
      region: "Assam",
      classification: "Folk",
      description: "A joyful Assamese folk dance performed during the Bihu harvest festival, known for its brisk hip and hand movements set to dhol and pepa (buffalo-horn pipe).",
    },
    {
      id: "lavani-dance",
      title: "Lavani",
      image: "images/heritage/dances/lavani.jpg",
      region: "Maharashtra",
      classification: "Folk",
      description: "A vigorous Maharashtrian folk dance form performed to the beat of the dholki, traditionally associated with the Tamasha folk-theatre tradition.",
    }
  ],

  // ============ INSTRUMENTS ============
  instruments: [
    {
      id: "sitar",
      name: "Sitar",
      image: "images/heritage/instruments/sitar.jpg",
      type: "String (plucked)",
      region: "North India",
      description: "A long-necked plucked string instrument central to Hindustani classical music, famous for its sympathetic strings that give it a distinctive resonant hum beneath each note.",
    },
    {
      id: "tabla",
      name: "Tabla",
      image: "images/heritage/instruments/tabla.jpg",
      type: "Percussion",
      region: "North India",
      description: "A pair of hand drums that form the backbone of rhythm in Hindustani classical music and countless folk and devotional traditions across North India.",
    },
    {
      id: "veena",
      name: "Veena",
      image: "images/heritage/instruments/veena.jpg",
      type: "String (plucked)",
      region: "South India",
      description: "An ancient plucked string instrument central to Carnatic classical music, closely associated with the goddess Saraswati in Indian iconography.",
    },
    {
      id: "sarod",
      name: "Sarod",
      image: "images/heritage/instruments/sarod.jpg",
      type: "String (plucked)",
      region: "North India",
      description: "A fretless plucked string instrument known for its deep, resonant tone, played with a metal plectrum and a distinctive metal fingerboard.",
    },
    {
      id: "santoor",
      name: "Santoor",
      image: "images/heritage/instruments/santoor.jpg",
      type: "String (struck)",
      region: "Jammu and Kashmir",
      description: "A trapezoid-shaped hammered dulcimer from Kashmir, played by striking its many strings with a pair of light wooden mallets.",
    },
    {
      id: "shehnai",
      name: "Shehnai",
      image: "images/heritage/instruments/shehnai.jpg",
      type: "Wind",
      region: "North India",
      description: "A double-reed wind instrument traditionally played at weddings and auspicious occasions across North India, considered a symbol of celebration.",
    },
    {
      id: "bansuri",
      name: "Bansuri",
      image: "images/heritage/instruments/bansuri.jpg",
      type: "Wind",
      region: "Pan-India",
      description: "A side-blown bamboo flute closely associated with Lord Krishna in Indian iconography, used across both Hindustani and Carnatic classical traditions as well as folk music.",
    },
    {
      id: "sarangi",
      name: "Sarangi",
      image: "images/heritage/instruments/sarangi.jpg",
      type: "String (bowed)",
      region: "North India",
      description: "A bowed string instrument said to closely mimic the tone and inflections of the human voice, traditionally used to accompany vocalists and folk singers.",
    },
    {
      id: "mridangam",
      name: "Mridangam",
      image: "images/heritage/instruments/mridangam.jpg",
      type: "Percussion",
      region: "South India",
      description: "A two-headed barrel drum that provides the primary rhythmic accompaniment in Carnatic classical music.",
    },
    {
      id: "tanpura",
      name: "Tanpura",
      image: "images/heritage/instruments/tanpura.jpg",
      type: "String (drone)",
      region: "Pan-India",
      description: "A long-necked drone instrument that provides the constant harmonic backdrop for both Hindustani and Carnatic classical vocal and instrumental performances.",
    },
    {
      id: "harmonium",
      name: "Harmonium",
      image: "images/heritage/instruments/harmonium.jpg",
      type: "Reed (bellows-driven)",
      region: "Pan-India",
      description: "A hand-pumped reed instrument adopted and adapted across India since the 19th century, now a mainstay of devotional singing, ghazals and folk performance.",
    },
    {
      id: "dholak",
      name: "Dholak",
      image: "images/heritage/instruments/dholak.jpg",
      type: "Percussion",
      region: "Pan-India",
      description: "A two-headed folk drum played across most of India at weddings, festivals and folk performances, prized for its warm, punchy tone.",
    }
  ]
};