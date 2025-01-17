var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PartaiUmmat_1 = new ol.format.GeoJSON();
var features_PartaiUmmat_1 = format_PartaiUmmat_1.readFeatures(json_PartaiUmmat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiUmmat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiUmmat_1.addFeatures(features_PartaiUmmat_1);
var lyr_PartaiUmmat_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiUmmat_1, 
                style: style_PartaiUmmat_1,
                popuplayertitle: 'Partai Ummat',
                interactive: true,
    title: 'Partai Ummat<br />\
    <img src="styles/legend/PartaiUmmat_1_0.png" /> 80<br />\
    <img src="styles/legend/PartaiUmmat_1_1.png" /> 95<br />\
    <img src="styles/legend/PartaiUmmat_1_2.png" /> 114<br />\
    <img src="styles/legend/PartaiUmmat_1_3.png" /> 119<br />\
    <img src="styles/legend/PartaiUmmat_1_4.png" /> 210<br />\
    <img src="styles/legend/PartaiUmmat_1_5.png" /> 228<br />\
    <img src="styles/legend/PartaiUmmat_1_6.png" /> 261<br />\
    <img src="styles/legend/PartaiUmmat_1_7.png" /> 400<br />\
    <img src="styles/legend/PartaiUmmat_1_8.png" /> 653<br />\
    <img src="styles/legend/PartaiUmmat_1_9.png" /> <br />'
        });
var format_PartaiPersatuanPembangunan_2 = new ol.format.GeoJSON();
var features_PartaiPersatuanPembangunan_2 = format_PartaiPersatuanPembangunan_2.readFeatures(json_PartaiPersatuanPembangunan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiPersatuanPembangunan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiPersatuanPembangunan_2.addFeatures(features_PartaiPersatuanPembangunan_2);
var lyr_PartaiPersatuanPembangunan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiPersatuanPembangunan_2, 
                style: style_PartaiPersatuanPembangunan_2,
                popuplayertitle: 'Partai Persatuan Pembangunan',
                interactive: true,
    title: 'Partai Persatuan Pembangunan<br />\
    <img src="styles/legend/PartaiPersatuanPembangunan_2_0.png" /> 138<br />\
    <img src="styles/legend/PartaiPersatuanPembangunan_2_1.png" /> 147<br />\
    <img src="styles/legend/PartaiPersatuanPembangunan_2_2.png" /> 290<br />\
    <img src="styles/legend/PartaiPersatuanPembangunan_2_3.png" /> 302<br />\
    <img src="styles/legend/PartaiPersatuanPembangunan_2_4.png" /> 363<br />\
    <img src="styles/legend/PartaiPersatuanPembangunan_2_5.png" /> 738<br />\
    <img src="styles/legend/PartaiPersatuanPembangunan_2_6.png" /> 1506<br />\
    <img src="styles/legend/PartaiPersatuanPembangunan_2_7.png" /> 1610<br />\
    <img src="styles/legend/PartaiPersatuanPembangunan_2_8.png" /> <br />'
        });
var format_PartaiPerindo_3 = new ol.format.GeoJSON();
var features_PartaiPerindo_3 = format_PartaiPerindo_3.readFeatures(json_PartaiPerindo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiPerindo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiPerindo_3.addFeatures(features_PartaiPerindo_3);
var lyr_PartaiPerindo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiPerindo_3, 
                style: style_PartaiPerindo_3,
                popuplayertitle: 'Partai Perindo',
                interactive: true,
    title: 'Partai Perindo<br />\
    <img src="styles/legend/PartaiPerindo_3_0.png" /> 254<br />\
    <img src="styles/legend/PartaiPerindo_3_1.png" /> 387<br />\
    <img src="styles/legend/PartaiPerindo_3_2.png" /> 494<br />\
    <img src="styles/legend/PartaiPerindo_3_3.png" /> 664<br />\
    <img src="styles/legend/PartaiPerindo_3_4.png" /> 1112<br />\
    <img src="styles/legend/PartaiPerindo_3_5.png" /> 1343<br />\
    <img src="styles/legend/PartaiPerindo_3_6.png" /> 1498<br />\
    <img src="styles/legend/PartaiPerindo_3_7.png" /> 1552<br />\
    <img src="styles/legend/PartaiPerindo_3_8.png" /> 3227<br />\
    <img src="styles/legend/PartaiPerindo_3_9.png" /> <br />'
        });
var format_PartaiSolidaritasIndonesia_4 = new ol.format.GeoJSON();
var features_PartaiSolidaritasIndonesia_4 = format_PartaiSolidaritasIndonesia_4.readFeatures(json_PartaiSolidaritasIndonesia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiSolidaritasIndonesia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiSolidaritasIndonesia_4.addFeatures(features_PartaiSolidaritasIndonesia_4);
var lyr_PartaiSolidaritasIndonesia_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiSolidaritasIndonesia_4, 
                style: style_PartaiSolidaritasIndonesia_4,
                popuplayertitle: 'Partai Solidaritas Indonesia',
                interactive: true,
    title: 'Partai Solidaritas Indonesia<br />\
    <img src="styles/legend/PartaiSolidaritasIndonesia_4_0.png" /> 1483<br />\
    <img src="styles/legend/PartaiSolidaritasIndonesia_4_1.png" /> 3103<br />\
    <img src="styles/legend/PartaiSolidaritasIndonesia_4_2.png" /> 3511<br />\
    <img src="styles/legend/PartaiSolidaritasIndonesia_4_3.png" /> 3823<br />\
    <img src="styles/legend/PartaiSolidaritasIndonesia_4_4.png" /> 4328<br />\
    <img src="styles/legend/PartaiSolidaritasIndonesia_4_5.png" /> 4590<br />\
    <img src="styles/legend/PartaiSolidaritasIndonesia_4_6.png" /> 6148<br />\
    <img src="styles/legend/PartaiSolidaritasIndonesia_4_7.png" /> 10544<br />\
    <img src="styles/legend/PartaiSolidaritasIndonesia_4_8.png" /> 23192<br />\
    <img src="styles/legend/PartaiSolidaritasIndonesia_4_9.png" /> <br />'
        });
var format_PartaiDemokrat_5 = new ol.format.GeoJSON();
var features_PartaiDemokrat_5 = format_PartaiDemokrat_5.readFeatures(json_PartaiDemokrat_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiDemokrat_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiDemokrat_5.addFeatures(features_PartaiDemokrat_5);
var lyr_PartaiDemokrat_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiDemokrat_5, 
                style: style_PartaiDemokrat_5,
                popuplayertitle: 'Partai Demokrat',
                interactive: true,
    title: 'Partai Demokrat<br />\
    <img src="styles/legend/PartaiDemokrat_5_0.png" /> 3538<br />\
    <img src="styles/legend/PartaiDemokrat_5_1.png" /> 8840<br />\
    <img src="styles/legend/PartaiDemokrat_5_2.png" /> 9884<br />\
    <img src="styles/legend/PartaiDemokrat_5_3.png" /> 12369<br />\
    <img src="styles/legend/PartaiDemokrat_5_4.png" /> 17340<br />\
    <img src="styles/legend/PartaiDemokrat_5_5.png" /> 20569<br />\
    <img src="styles/legend/PartaiDemokrat_5_6.png" /> 28173<br />\
    <img src="styles/legend/PartaiDemokrat_5_7.png" /> 29113<br />\
    <img src="styles/legend/PartaiDemokrat_5_8.png" /> 44650<br />\
    <img src="styles/legend/PartaiDemokrat_5_9.png" /> <br />'
        });
var format_PartaiBulanBintang_6 = new ol.format.GeoJSON();
var features_PartaiBulanBintang_6 = format_PartaiBulanBintang_6.readFeatures(json_PartaiBulanBintang_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiBulanBintang_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiBulanBintang_6.addFeatures(features_PartaiBulanBintang_6);
var lyr_PartaiBulanBintang_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiBulanBintang_6, 
                style: style_PartaiBulanBintang_6,
                popuplayertitle: 'Partai Bulan Bintang',
                interactive: true,
    title: 'Partai Bulan Bintang<br />\
    <img src="styles/legend/PartaiBulanBintang_6_0.png" /> 63<br />\
    <img src="styles/legend/PartaiBulanBintang_6_1.png" /> 80<br />\
    <img src="styles/legend/PartaiBulanBintang_6_2.png" /> 94<br />\
    <img src="styles/legend/PartaiBulanBintang_6_3.png" /> 199<br />\
    <img src="styles/legend/PartaiBulanBintang_6_4.png" /> 221<br />\
    <img src="styles/legend/PartaiBulanBintang_6_5.png" /> 236<br />\
    <img src="styles/legend/PartaiBulanBintang_6_6.png" /> 254<br />\
    <img src="styles/legend/PartaiBulanBintang_6_7.png" /> 276<br />\
    <img src="styles/legend/PartaiBulanBintang_6_8.png" /> 382<br />\
    <img src="styles/legend/PartaiBulanBintang_6_9.png" /> <br />'
        });
var format_PartaiAmanatNasional_7 = new ol.format.GeoJSON();
var features_PartaiAmanatNasional_7 = format_PartaiAmanatNasional_7.readFeatures(json_PartaiAmanatNasional_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiAmanatNasional_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiAmanatNasional_7.addFeatures(features_PartaiAmanatNasional_7);
var lyr_PartaiAmanatNasional_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiAmanatNasional_7, 
                style: style_PartaiAmanatNasional_7,
                popuplayertitle: 'Partai Amanat Nasional',
                interactive: true,
    title: 'Partai Amanat Nasional<br />\
    <img src="styles/legend/PartaiAmanatNasional_7_0.png" /> 239<br />\
    <img src="styles/legend/PartaiAmanatNasional_7_1.png" /> 256<br />\
    <img src="styles/legend/PartaiAmanatNasional_7_2.png" /> 332<br />\
    <img src="styles/legend/PartaiAmanatNasional_7_3.png" /> 340<br />\
    <img src="styles/legend/PartaiAmanatNasional_7_4.png" /> 479<br />\
    <img src="styles/legend/PartaiAmanatNasional_7_5.png" /> 611<br />\
    <img src="styles/legend/PartaiAmanatNasional_7_6.png" /> 780<br />\
    <img src="styles/legend/PartaiAmanatNasional_7_7.png" /> 1724<br />\
    <img src="styles/legend/PartaiAmanatNasional_7_8.png" /> 1922<br />\
    <img src="styles/legend/PartaiAmanatNasional_7_9.png" /> <br />'
        });
var format_PartaiGardaRepublikIndonesia_8 = new ol.format.GeoJSON();
var features_PartaiGardaRepublikIndonesia_8 = format_PartaiGardaRepublikIndonesia_8.readFeatures(json_PartaiGardaRepublikIndonesia_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiGardaRepublikIndonesia_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiGardaRepublikIndonesia_8.addFeatures(features_PartaiGardaRepublikIndonesia_8);
var lyr_PartaiGardaRepublikIndonesia_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiGardaRepublikIndonesia_8, 
                style: style_PartaiGardaRepublikIndonesia_8,
                popuplayertitle: 'Partai Garda Republik Indonesia',
                interactive: true,
    title: 'Partai Garda Republik Indonesia<br />\
    <img src="styles/legend/PartaiGardaRepublikIndonesia_8_0.png" /> 284<br />\
    <img src="styles/legend/PartaiGardaRepublikIndonesia_8_1.png" /> 307<br />\
    <img src="styles/legend/PartaiGardaRepublikIndonesia_8_2.png" /> 327<br />\
    <img src="styles/legend/PartaiGardaRepublikIndonesia_8_3.png" /> 342<br />\
    <img src="styles/legend/PartaiGardaRepublikIndonesia_8_4.png" /> 419<br />\
    <img src="styles/legend/PartaiGardaRepublikIndonesia_8_5.png" /> 833<br />\
    <img src="styles/legend/PartaiGardaRepublikIndonesia_8_6.png" /> 880<br />\
    <img src="styles/legend/PartaiGardaRepublikIndonesia_8_7.png" /> 924<br />\
    <img src="styles/legend/PartaiGardaRepublikIndonesia_8_8.png" /> <br />'
        });
var format_PartaiHatiNuraniRakyat_9 = new ol.format.GeoJSON();
var features_PartaiHatiNuraniRakyat_9 = format_PartaiHatiNuraniRakyat_9.readFeatures(json_PartaiHatiNuraniRakyat_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiHatiNuraniRakyat_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiHatiNuraniRakyat_9.addFeatures(features_PartaiHatiNuraniRakyat_9);
var lyr_PartaiHatiNuraniRakyat_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiHatiNuraniRakyat_9, 
                style: style_PartaiHatiNuraniRakyat_9,
                popuplayertitle: 'Partai Hati Nurani Rakyat',
                interactive: true,
    title: 'Partai Hati Nurani Rakyat<br />\
    <img src="styles/legend/PartaiHatiNuraniRakyat_9_0.png" /> 279<br />\
    <img src="styles/legend/PartaiHatiNuraniRakyat_9_1.png" /> 306<br />\
    <img src="styles/legend/PartaiHatiNuraniRakyat_9_2.png" /> 326<br />\
    <img src="styles/legend/PartaiHatiNuraniRakyat_9_3.png" /> 378<br />\
    <img src="styles/legend/PartaiHatiNuraniRakyat_9_4.png" /> 578<br />\
    <img src="styles/legend/PartaiHatiNuraniRakyat_9_5.png" /> 825<br />\
    <img src="styles/legend/PartaiHatiNuraniRakyat_9_6.png" /> 1190<br />\
    <img src="styles/legend/PartaiHatiNuraniRakyat_9_7.png" /> 2584<br />\
    <img src="styles/legend/PartaiHatiNuraniRakyat_9_8.png" /> 3385<br />\
    <img src="styles/legend/PartaiHatiNuraniRakyat_9_9.png" /> <br />'
        });
var format_PartaiKebangkitanNusantara_10 = new ol.format.GeoJSON();
var features_PartaiKebangkitanNusantara_10 = format_PartaiKebangkitanNusantara_10.readFeatures(json_PartaiKebangkitanNusantara_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiKebangkitanNusantara_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiKebangkitanNusantara_10.addFeatures(features_PartaiKebangkitanNusantara_10);
var lyr_PartaiKebangkitanNusantara_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiKebangkitanNusantara_10, 
                style: style_PartaiKebangkitanNusantara_10,
                popuplayertitle: 'Partai Kebangkitan Nusantara',
                interactive: true,
    title: 'Partai Kebangkitan Nusantara<br />\
    <img src="styles/legend/PartaiKebangkitanNusantara_10_0.png" /> 1182<br />\
    <img src="styles/legend/PartaiKebangkitanNusantara_10_1.png" /> 1259<br />\
    <img src="styles/legend/PartaiKebangkitanNusantara_10_2.png" /> 1325<br />\
    <img src="styles/legend/PartaiKebangkitanNusantara_10_3.png" /> 1650<br />\
    <img src="styles/legend/PartaiKebangkitanNusantara_10_4.png" /> 2368<br />\
    <img src="styles/legend/PartaiKebangkitanNusantara_10_5.png" /> 3085<br />\
    <img src="styles/legend/PartaiKebangkitanNusantara_10_6.png" /> 3923<br />\
    <img src="styles/legend/PartaiKebangkitanNusantara_10_7.png" /> 4268<br />\
    <img src="styles/legend/PartaiKebangkitanNusantara_10_8.png" /> 4621<br />\
    <img src="styles/legend/PartaiKebangkitanNusantara_10_9.png" /> <br />'
        });
var format_PartaiKeadilanSejahtera_11 = new ol.format.GeoJSON();
var features_PartaiKeadilanSejahtera_11 = format_PartaiKeadilanSejahtera_11.readFeatures(json_PartaiKeadilanSejahtera_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiKeadilanSejahtera_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiKeadilanSejahtera_11.addFeatures(features_PartaiKeadilanSejahtera_11);
var lyr_PartaiKeadilanSejahtera_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiKeadilanSejahtera_11, 
                style: style_PartaiKeadilanSejahtera_11,
                popuplayertitle: 'Partai Keadilan Sejahtera',
                interactive: true,
    title: 'Partai Keadilan Sejahtera<br />\
    <img src="styles/legend/PartaiKeadilanSejahtera_11_0.png" /> 294<br />\
    <img src="styles/legend/PartaiKeadilanSejahtera_11_1.png" /> 402<br />\
    <img src="styles/legend/PartaiKeadilanSejahtera_11_2.png" /> 511<br />\
    <img src="styles/legend/PartaiKeadilanSejahtera_11_3.png" /> 1039<br />\
    <img src="styles/legend/PartaiKeadilanSejahtera_11_4.png" /> 1373<br />\
    <img src="styles/legend/PartaiKeadilanSejahtera_11_5.png" /> 2216<br />\
    <img src="styles/legend/PartaiKeadilanSejahtera_11_6.png" /> 2445<br />\
    <img src="styles/legend/PartaiKeadilanSejahtera_11_7.png" /> 3166<br />\
    <img src="styles/legend/PartaiKeadilanSejahtera_11_8.png" /> 7699<br />\
    <img src="styles/legend/PartaiKeadilanSejahtera_11_9.png" /> <br />'
        });
var format_PartaiGelombangRakyatIndonesia_12 = new ol.format.GeoJSON();
var features_PartaiGelombangRakyatIndonesia_12 = format_PartaiGelombangRakyatIndonesia_12.readFeatures(json_PartaiGelombangRakyatIndonesia_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiGelombangRakyatIndonesia_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiGelombangRakyatIndonesia_12.addFeatures(features_PartaiGelombangRakyatIndonesia_12);
var lyr_PartaiGelombangRakyatIndonesia_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiGelombangRakyatIndonesia_12, 
                style: style_PartaiGelombangRakyatIndonesia_12,
                popuplayertitle: 'Partai Gelombang Rakyat Indonesia',
                interactive: true,
    title: 'Partai Gelombang Rakyat Indonesia<br />\
    <img src="styles/legend/PartaiGelombangRakyatIndonesia_12_0.png" /> 807<br />\
    <img src="styles/legend/PartaiGelombangRakyatIndonesia_12_1.png" /> 834<br />\
    <img src="styles/legend/PartaiGelombangRakyatIndonesia_12_2.png" /> 890<br />\
    <img src="styles/legend/PartaiGelombangRakyatIndonesia_12_3.png" /> 1227<br />\
    <img src="styles/legend/PartaiGelombangRakyatIndonesia_12_4.png" /> 1384<br />\
    <img src="styles/legend/PartaiGelombangRakyatIndonesia_12_5.png" /> 2057<br />\
    <img src="styles/legend/PartaiGelombangRakyatIndonesia_12_6.png" /> 3264<br />\
    <img src="styles/legend/PartaiGelombangRakyatIndonesia_12_7.png" /> 3954<br />\
    <img src="styles/legend/PartaiGelombangRakyatIndonesia_12_8.png" /> 9314<br />\
    <img src="styles/legend/PartaiGelombangRakyatIndonesia_12_9.png" /> <br />'
        });
var format_PartaiBuruh_13 = new ol.format.GeoJSON();
var features_PartaiBuruh_13 = format_PartaiBuruh_13.readFeatures(json_PartaiBuruh_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiBuruh_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiBuruh_13.addFeatures(features_PartaiBuruh_13);
var lyr_PartaiBuruh_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiBuruh_13, 
                style: style_PartaiBuruh_13,
                popuplayertitle: 'Partai Buruh',
                interactive: true,
    title: 'Partai Buruh<br />\
    <img src="styles/legend/PartaiBuruh_13_0.png" /> 638<br />\
    <img src="styles/legend/PartaiBuruh_13_1.png" /> 659<br />\
    <img src="styles/legend/PartaiBuruh_13_2.png" /> 695<br />\
    <img src="styles/legend/PartaiBuruh_13_3.png" /> 708<br />\
    <img src="styles/legend/PartaiBuruh_13_4.png" /> 817<br />\
    <img src="styles/legend/PartaiBuruh_13_5.png" /> 956<br />\
    <img src="styles/legend/PartaiBuruh_13_6.png" /> 1306<br />\
    <img src="styles/legend/PartaiBuruh_13_7.png" /> 1566<br />\
    <img src="styles/legend/PartaiBuruh_13_8.png" /> 1700<br />\
    <img src="styles/legend/PartaiBuruh_13_9.png" /> <br />'
        });
var format_PartaiNasDem_14 = new ol.format.GeoJSON();
var features_PartaiNasDem_14 = format_PartaiNasDem_14.readFeatures(json_PartaiNasDem_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiNasDem_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiNasDem_14.addFeatures(features_PartaiNasDem_14);
var lyr_PartaiNasDem_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiNasDem_14, 
                style: style_PartaiNasDem_14,
                popuplayertitle: 'Partai NasDem',
                interactive: true,
    title: 'Partai NasDem<br />\
    <img src="styles/legend/PartaiNasDem_14_0.png" /> 4244<br />\
    <img src="styles/legend/PartaiNasDem_14_1.png" /> 7407<br />\
    <img src="styles/legend/PartaiNasDem_14_2.png" /> 7764<br />\
    <img src="styles/legend/PartaiNasDem_14_3.png" /> 8029<br />\
    <img src="styles/legend/PartaiNasDem_14_4.png" /> 11129<br />\
    <img src="styles/legend/PartaiNasDem_14_5.png" /> 13960<br />\
    <img src="styles/legend/PartaiNasDem_14_6.png" /> 16412<br />\
    <img src="styles/legend/PartaiNasDem_14_7.png" /> 27143<br />\
    <img src="styles/legend/PartaiNasDem_14_8.png" /> 51590<br />\
    <img src="styles/legend/PartaiNasDem_14_9.png" /> <br />'
        });
var format_PartaiGolonganKarya_15 = new ol.format.GeoJSON();
var features_PartaiGolonganKarya_15 = format_PartaiGolonganKarya_15.readFeatures(json_PartaiGolonganKarya_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiGolonganKarya_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiGolonganKarya_15.addFeatures(features_PartaiGolonganKarya_15);
var lyr_PartaiGolonganKarya_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiGolonganKarya_15, 
                style: style_PartaiGolonganKarya_15,
                popuplayertitle: 'Partai Golongan Karya',
                interactive: true,
    title: 'Partai Golongan Karya<br />\
    <img src="styles/legend/PartaiGolonganKarya_15_0.png" /> 12408<br />\
    <img src="styles/legend/PartaiGolonganKarya_15_1.png" /> 21767<br />\
    <img src="styles/legend/PartaiGolonganKarya_15_2.png" /> 22088<br />\
    <img src="styles/legend/PartaiGolonganKarya_15_3.png" /> 22898<br />\
    <img src="styles/legend/PartaiGolonganKarya_15_4.png" /> 26011<br />\
    <img src="styles/legend/PartaiGolonganKarya_15_5.png" /> 41782<br />\
    <img src="styles/legend/PartaiGolonganKarya_15_6.png" /> 45970<br />\
    <img src="styles/legend/PartaiGolonganKarya_15_7.png" /> 59825<br />\
    <img src="styles/legend/PartaiGolonganKarya_15_8.png" /> 80772<br />\
    <img src="styles/legend/PartaiGolonganKarya_15_9.png" /> <br />'
        });
var format_PartaiDemokrasiIndonesiaPerjuangan_16 = new ol.format.GeoJSON();
var features_PartaiDemokrasiIndonesiaPerjuangan_16 = format_PartaiDemokrasiIndonesiaPerjuangan_16.readFeatures(json_PartaiDemokrasiIndonesiaPerjuangan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiDemokrasiIndonesiaPerjuangan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiDemokrasiIndonesiaPerjuangan_16.addFeatures(features_PartaiDemokrasiIndonesiaPerjuangan_16);
var lyr_PartaiDemokrasiIndonesiaPerjuangan_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiDemokrasiIndonesiaPerjuangan_16, 
                style: style_PartaiDemokrasiIndonesiaPerjuangan_16,
                popuplayertitle: 'Partai Demokrasi Indonesia Perjuangan',
                interactive: true,
    title: 'Partai Demokrasi Indonesia Perjuangan<br />\
    <img src="styles/legend/PartaiDemokrasiIndonesiaPerjuangan_16_0.png" /> 53559<br />\
    <img src="styles/legend/PartaiDemokrasiIndonesiaPerjuangan_16_1.png" /> 63306<br />\
    <img src="styles/legend/PartaiDemokrasiIndonesiaPerjuangan_16_2.png" /> 91340<br />\
    <img src="styles/legend/PartaiDemokrasiIndonesiaPerjuangan_16_3.png" /> 113400<br />\
    <img src="styles/legend/PartaiDemokrasiIndonesiaPerjuangan_16_4.png" /> 152917<br />\
    <img src="styles/legend/PartaiDemokrasiIndonesiaPerjuangan_16_5.png" /> 153904<br />\
    <img src="styles/legend/PartaiDemokrasiIndonesiaPerjuangan_16_6.png" /> 180481<br />\
    <img src="styles/legend/PartaiDemokrasiIndonesiaPerjuangan_16_7.png" /> 234166<br />\
    <img src="styles/legend/PartaiDemokrasiIndonesiaPerjuangan_16_8.png" /> 247811<br />\
    <img src="styles/legend/PartaiDemokrasiIndonesiaPerjuangan_16_9.png" /> <br />'
        });
var format_PartaiGerakanIndonesiaRaya_17 = new ol.format.GeoJSON();
var features_PartaiGerakanIndonesiaRaya_17 = format_PartaiGerakanIndonesiaRaya_17.readFeatures(json_PartaiGerakanIndonesiaRaya_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiGerakanIndonesiaRaya_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiGerakanIndonesiaRaya_17.addFeatures(features_PartaiGerakanIndonesiaRaya_17);
var lyr_PartaiGerakanIndonesiaRaya_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiGerakanIndonesiaRaya_17, 
                style: style_PartaiGerakanIndonesiaRaya_17,
                popuplayertitle: 'Partai Gerakan Indonesia Raya',
                interactive: true,
    title: 'Partai Gerakan Indonesia Raya<br />\
    <img src="styles/legend/PartaiGerakanIndonesiaRaya_17_0.png" /> 11772<br />\
    <img src="styles/legend/PartaiGerakanIndonesiaRaya_17_1.png" /> 19713<br />\
    <img src="styles/legend/PartaiGerakanIndonesiaRaya_17_2.png" /> 22949<br />\
    <img src="styles/legend/PartaiGerakanIndonesiaRaya_17_3.png" /> 26485<br />\
    <img src="styles/legend/PartaiGerakanIndonesiaRaya_17_4.png" /> 27850<br />\
    <img src="styles/legend/PartaiGerakanIndonesiaRaya_17_5.png" /> 31318<br />\
    <img src="styles/legend/PartaiGerakanIndonesiaRaya_17_6.png" /> 45337<br />\
    <img src="styles/legend/PartaiGerakanIndonesiaRaya_17_7.png" /> 45829<br />\
    <img src="styles/legend/PartaiGerakanIndonesiaRaya_17_8.png" /> 64060<br />\
    <img src="styles/legend/PartaiGerakanIndonesiaRaya_17_9.png" /> <br />'
        });
var format_PartaiKebangkitanBangsa_18 = new ol.format.GeoJSON();
var features_PartaiKebangkitanBangsa_18 = format_PartaiKebangkitanBangsa_18.readFeatures(json_PartaiKebangkitanBangsa_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiKebangkitanBangsa_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiKebangkitanBangsa_18.addFeatures(features_PartaiKebangkitanBangsa_18);
var lyr_PartaiKebangkitanBangsa_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiKebangkitanBangsa_18, 
                style: style_PartaiKebangkitanBangsa_18,
                popuplayertitle: 'Partai Kebangkitan Bangsa',
                interactive: true,
    title: 'Partai Kebangkitan Bangsa<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_18_0.png" /> 1315<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_18_1.png" /> 1483<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_18_2.png" /> 1532<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_18_3.png" /> 2257<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_18_4.png" /> 3575<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_18_5.png" /> 4203<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_18_6.png" /> 7016<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_18_7.png" /> 8644<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_18_8.png" /> 11603<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_18_9.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_PartaiUmmat_1.setVisible(true);lyr_PartaiPersatuanPembangunan_2.setVisible(true);lyr_PartaiPerindo_3.setVisible(true);lyr_PartaiSolidaritasIndonesia_4.setVisible(true);lyr_PartaiDemokrat_5.setVisible(true);lyr_PartaiBulanBintang_6.setVisible(true);lyr_PartaiAmanatNasional_7.setVisible(true);lyr_PartaiGardaRepublikIndonesia_8.setVisible(true);lyr_PartaiHatiNuraniRakyat_9.setVisible(true);lyr_PartaiKebangkitanNusantara_10.setVisible(true);lyr_PartaiKeadilanSejahtera_11.setVisible(true);lyr_PartaiGelombangRakyatIndonesia_12.setVisible(true);lyr_PartaiBuruh_13.setVisible(true);lyr_PartaiNasDem_14.setVisible(true);lyr_PartaiGolonganKarya_15.setVisible(true);lyr_PartaiDemokrasiIndonesiaPerjuangan_16.setVisible(true);lyr_PartaiGerakanIndonesiaRaya_17.setVisible(true);lyr_PartaiKebangkitanBangsa_18.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PartaiUmmat_1,lyr_PartaiPersatuanPembangunan_2,lyr_PartaiPerindo_3,lyr_PartaiSolidaritasIndonesia_4,lyr_PartaiDemokrat_5,lyr_PartaiBulanBintang_6,lyr_PartaiAmanatNasional_7,lyr_PartaiGardaRepublikIndonesia_8,lyr_PartaiHatiNuraniRakyat_9,lyr_PartaiKebangkitanNusantara_10,lyr_PartaiKeadilanSejahtera_11,lyr_PartaiGelombangRakyatIndonesia_12,lyr_PartaiBuruh_13,lyr_PartaiNasDem_14,lyr_PartaiGolonganKarya_15,lyr_PartaiDemokrasiIndonesiaPerjuangan_16,lyr_PartaiGerakanIndonesiaRaya_17,lyr_PartaiKebangkitanBangsa_18];
lyr_PartaiUmmat_1.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'ID_BPS': 'ID_BPS', 'Kabupaten/': 'Kabupaten/', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiPersatuanPembangunan_2.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'ID_BPS': 'ID_BPS', 'Kabupaten/': 'Kabupaten/', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiPerindo_3.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'ID_BPS': 'ID_BPS', 'Kabupaten/': 'Kabupaten/', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiSolidaritasIndonesia_4.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'ID_BPS': 'ID_BPS', 'Kabupaten/': 'Kabupaten/', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiDemokrat_5.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'ID_BPS': 'ID_BPS', 'Kabupaten/': 'Kabupaten/', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiBulanBintang_6.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'ID_BPS': 'ID_BPS', 'Kabupaten/': 'Kabupaten/', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiAmanatNasional_7.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'ID_BPS': 'ID_BPS', 'Kabupaten/': 'Kabupaten/', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiGardaRepublikIndonesia_8.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'ID_BPS': 'ID_BPS', 'Kabupaten/': 'Kabupaten/', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiHatiNuraniRakyat_9.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'ID_BPS': 'ID_BPS', 'Kabupaten/': 'Kabupaten/', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiKebangkitanNusantara_10.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'ID_BPS': 'ID_BPS', 'Kabupaten/': 'Kabupaten/', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiKeadilanSejahtera_11.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'ID_BPS': 'ID_BPS', 'Kabupaten/': 'Kabupaten/', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiGelombangRakyatIndonesia_12.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'ID_BPS': 'ID_BPS', 'Kabupaten/': 'Kabupaten/', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiBuruh_13.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'ID_BPS': 'ID_BPS', 'Kabupaten/': 'Kabupaten/', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiNasDem_14.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'ID_BPS': 'ID_BPS', 'Kabupaten/': 'Kabupaten/', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiGolonganKarya_15.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'ID_BPS': 'ID_BPS', 'Kabupaten/': 'Kabupaten/', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiDemokrasiIndonesiaPerjuangan_16.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'ID_BPS': 'ID_BPS', 'Kabupaten/': 'Kabupaten/', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiGerakanIndonesiaRaya_17.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'ID_BPS': 'ID_BPS', 'Kabupaten/': 'Kabupaten/', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiKebangkitanBangsa_18.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'ID_BPS': 'ID_BPS', 'Kabupaten/': 'Kabupaten/', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiUmmat_1.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'ID_BPS': 'TextEdit', 'Kabupaten/': '', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiPersatuanPembangunan_2.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'ID_BPS': 'TextEdit', 'Kabupaten/': '', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiPerindo_3.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'ID_BPS': 'TextEdit', 'Kabupaten/': '', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiSolidaritasIndonesia_4.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'ID_BPS': 'TextEdit', 'Kabupaten/': '', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiDemokrat_5.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'ID_BPS': 'TextEdit', 'Kabupaten/': '', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiBulanBintang_6.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'ID_BPS': 'TextEdit', 'Kabupaten/': '', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiAmanatNasional_7.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'ID_BPS': 'TextEdit', 'Kabupaten/': '', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiGardaRepublikIndonesia_8.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'ID_BPS': 'TextEdit', 'Kabupaten/': '', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiHatiNuraniRakyat_9.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'ID_BPS': 'TextEdit', 'Kabupaten/': '', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiKebangkitanNusantara_10.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'ID_BPS': 'TextEdit', 'Kabupaten/': '', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiKeadilanSejahtera_11.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'ID_BPS': 'TextEdit', 'Kabupaten/': '', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiGelombangRakyatIndonesia_12.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'ID_BPS': 'TextEdit', 'Kabupaten/': '', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiBuruh_13.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'ID_BPS': 'TextEdit', 'Kabupaten/': '', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiNasDem_14.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'ID_BPS': 'TextEdit', 'Kabupaten/': '', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiGolonganKarya_15.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'ID_BPS': 'TextEdit', 'Kabupaten/': '', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiDemokrasiIndonesiaPerjuangan_16.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'ID_BPS': 'TextEdit', 'Kabupaten/': '', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiGerakanIndonesiaRaya_17.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'ID_BPS': 'TextEdit', 'Kabupaten/': '', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiKebangkitanBangsa_18.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'ID_BPS': 'TextEdit', 'Kabupaten/': '', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiUmmat_1.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'header label - visible with data', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'ID_BPS': 'hidden field', 'Kabupaten/': 'inline label - visible with data', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'inline label - visible with data', });
lyr_PartaiPersatuanPembangunan_2.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'ID_BPS': 'hidden field', 'Kabupaten/': 'inline label - visible with data', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'inline label - visible with data', 'UMMAT': 'hidden field', });
lyr_PartaiPerindo_3.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'ID_BPS': 'hidden field', 'Kabupaten/': 'inline label - visible with data', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'inline label - visible with data', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiSolidaritasIndonesia_4.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'ID_BPS': 'hidden field', 'Kabupaten/': 'inline label - visible with data', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'inline label - visible with data', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiDemokrat_5.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'ID_BPS': 'hidden field', 'Kabupaten/': 'inline label - visible with data', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'inline label - visible with data', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiBulanBintang_6.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'ID_BPS': 'hidden field', 'Kabupaten/': 'inline label - visible with data', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'inline label - visible with data', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiAmanatNasional_7.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'ID_BPS': 'hidden field', 'Kabupaten/': 'inline label - visible with data', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'inline label - visible with data', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiGardaRepublikIndonesia_8.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'ID_BPS': 'hidden field', 'Kabupaten/': 'inline label - visible with data', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'inline label - visible with data', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiHatiNuraniRakyat_9.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'ID_BPS': 'hidden field', 'Kabupaten/': 'inline label - visible with data', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'inline label - visible with data', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiKebangkitanNusantara_10.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'ID_BPS': 'hidden field', 'Kabupaten/': 'inline label - visible with data', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'inline label - visible with data', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiKeadilanSejahtera_11.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'ID_BPS': 'hidden field', 'Kabupaten/': 'inline label - visible with data', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'inline label - visible with data', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiGelombangRakyatIndonesia_12.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'ID_BPS': 'hidden field', 'Kabupaten/': 'inline label - visible with data', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'inline label - visible with data', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiBuruh_13.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'ID_BPS': 'hidden field', 'Kabupaten/': 'inline label - visible with data', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'inline label - visible with data', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiNasDem_14.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'ID_BPS': 'hidden field', 'Kabupaten/': 'inline label - visible with data', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'inline label - visible with data', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiGolonganKarya_15.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'ID_BPS': 'hidden field', 'Kabupaten/': 'inline label - visible with data', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'inline label - visible with data', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiDemokrasiIndonesiaPerjuangan_16.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'ID_BPS': 'hidden field', 'Kabupaten/': 'hidden field', 'PKB': 'hidden field', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiGerakanIndonesiaRaya_17.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'ID_BPS': 'hidden field', 'Kabupaten/': 'inline label - visible with data', 'PKB': 'hidden field', 'GERINDRA': 'inline label - visible with data', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiKebangkitanBangsa_18.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'ID_BPS': 'hidden field', 'Kabupaten/': 'inline label - visible with data', 'PKB': 'inline label - visible with data', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiKebangkitanBangsa_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});