/* =========================================================
   AUTOSALE MOTORS · INVENTARIO PÚBLICO
   ---------------------------------------------------------
   Cada objeto representa un vehículo del catálogo.

   Campos principales:
   - id: identificador único usado en vehiculo.html?id=...
   - clase: minibus | vagoneta | camion
   - marca / modelo / version: nombre comercial
   - motor: texto mostrado en la tarjeta
   - imagen: fotografía principal
   - galeria: opcional, lista de fotografías adicionales
   - video: opcional, ruta de video
   - especificaciones: opcional, lista [[Etiqueta, Valor]]
   - estado: nuevo | seminuevo
   - variante: usa furgonado cuando corresponda
   - novedad / destacado: controles visuales del catálogo

   IMPORTANTE: no colocar precios públicos aquí.
   --------------------------------------------------------- */
window.AUTOSALE_VEHICLES = [
  {
    "id": "foton-view-c2-alto",
    "clase": "minibus",
    "marca": "FOTON VIEW",
    "modelo": "C2",
    "version": "ALTO",
    "motor": "2300 cc",
    "imagen": "assets/images/vehiculos/foton-view-c2-alto.svg",
    "estado": "nuevo",
    "destacado": true
  },
  {
    "id": "foton-view-cs2-royal-salon",
    "clase": "minibus",
    "marca": "FOTON VIEW",
    "modelo": "CS2",
    "version": "ROYAL SALON",
    "motor": "2400 cc",
    "imagen": "assets/images/vehiculos/foton-view-cs2-royal-salon.png",
    "galeria": ["assets/images/vehiculos/image.png"],
    "video": "assets/videos/foton-view-cs2-royal-salon.mp4",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "foton-view-c2-bajo",
    "clase": "minibus",
    "marca": "FOTON VIEW",
    "modelo": "C2",
    "version": "BAJO",
    "motor": "2300 cc",
    "imagen": "assets/images/vehiculos/foton-view-c2-bajo.svg",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "golden-dragon-z4",
    "clase": "minibus",
    "marca": "GOLDEN DRAGON",
    "modelo": "Z4",
    "version": "",
    "motor": "2500 cc",
    "imagen": "assets/images/vehiculos/golden-dragon-z4.svg",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "golden-dragon-v3-clasico-alto",
    "clase": "minibus",
    "marca": "GOLDEN DRAGON",
    "modelo": "V3 CLASICO",
    "version": "ALTO",
    "motor": "2300 cc",
    "imagen": "assets/images/vehiculos/golden-dragon-v3-clasico-alto.svg",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "higer-bufalo",
    "clase": "minibus",
    "marca": "HIGER",
    "modelo": "",
    "version": "BUFALO",
    "motor": "2700 cc",
    "imagen": "assets/images/vehiculos/higer-bufalo.svg",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "king-long-clasico-alto",
    "clase": "minibus",
    "marca": "KING LONG",
    "modelo": "CLASICO",
    "version": "ALTO",
    "motor": "2300 cc",
    "imagen": "assets/images/vehiculos/king-long-clasico-alto.svg",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "king-long-clasico-semi-alto",
    "clase": "minibus",
    "marca": "KING LONG",
    "modelo": "CLASICO",
    "version": "SEMI ALTO",
    "motor": "2300 cc",
    "imagen": "assets/images/vehiculos/king-long-clasico-semi-alto.svg",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "king-wing-bufalo",
    "clase": "minibus",
    "marca": "KING WING",
    "modelo": "BUFALO",
    "version": "S/ALTO",
    "motor": "2300 cc",
    "imagen": "assets/images/vehiculos/king-wing-bufalo.svg",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "king-long-kingo-bufalo",
    "clase": "minibus",
    "marca": "KING LONG",
    "modelo": "KINGO",
    "version": "BUFALO",
    "motor": "2500 cc",
    "imagen": "assets/images/vehiculos/king-long-kingo-bufalo.svg",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "king-long-l-extra-l",
    "clase": "minibus",
    "marca": "KING LONG",
    "modelo": "L",
    "version": "EXTRA L",
    "motor": "2700 cc",
    "imagen": "assets/images/vehiculos/king-long-l-extra-l.svg",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "rzm-s-alto",
    "clase": "minibus",
    "marca": "RZM",
    "modelo": "",
    "version": "S/ALTO",
    "motor": "2300 cc",
    "imagen": "assets/images/vehiculos/rzm-s-alto.svg",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "changan-honor",
    "clase": "minibus",
    "marca": "CHANGAN",
    "modelo": "HONOR",
    "version": "",
    "motor": "1500 cc",
    "imagen": "assets/images/vehiculos/changan-honor.svg",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "fortin-sx6",
    "clase": "minibus",
    "marca": "FORTIN",
    "modelo": "SX6",
    "version": "",
    "motor": "1500 cc",
    "imagen": "assets/images/vehiculos/fortin-sx6.svg",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "jetour-x70-plus",
    "clase": "vagoneta",
    "marca": "JETOUR",
    "modelo": "X70 PLUS",
    "version": "",
    "motor": "1500 cc T",
    "imagen": "assets/images/vehiculos/jetour-x70-plus.svg",
    "estado": "nuevo",
    "destacado": true
  },
  {
    "id": "jetour-t2-gasolina",
    "clase": "vagoneta",
    "marca": "JETOUR",
    "modelo": "T2",
    "version": "GASOLINA",
    "motor": "2000 cc T",
    "imagen": "assets/images/vehiculos/jetour-t2-gasolina.svg",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "jetour-t2-hibrido",
    "clase": "vagoneta",
    "marca": "JETOUR",
    "modelo": "T2",
    "version": "HIBRIDO",
    "motor": "2000 cc T",
    "imagen": "assets/images/vehiculos/jetour-t2-hibrido.svg",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "foton-view-g5",
    "clase": "camion",
    "marca": "FOTON",
    "modelo": "VIEW",
    "version": "G5",
    "motor": "2000 cc",
    "imagen": "assets/images/vehiculos/foton-view-g5.svg",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "foton-aumark-1",
    "clase": "camion",
    "marca": "FOTON",
    "modelo": "AUMARK",
    "version": "",
    "motor": "2500 cc",
    "imagen": "assets/images/vehiculos/foton-aumark-1.svg",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "foton-tm3",
    "clase": "camion",
    "marca": "FOTON",
    "modelo": "TM 3",
    "version": "",
    "motor": "1500 cc",
    "imagen": "assets/images/vehiculos/foton-tm3.svg",
    "estado": "nuevo",
    "destacado": true
  },
  {
    "id": "kama-samurai-1",
    "clase": "camion",
    "marca": "KAMA",
    "modelo": "SAMURAI",
    "version": "",
    "motor": "2300 cc",
    "imagen": "assets/images/vehiculos/kama-samurai-1.svg",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "foton-miler-1",
    "clase": "camion",
    "marca": "FOTON",
    "modelo": "MILER",
    "version": "",
    "motor": "2000 cc",
    "imagen": "assets/images/vehiculos/foton-miler-1.svg",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "foton-aumark-2",
    "clase": "camion",
    "marca": "FOTON",
    "modelo": "AUMARK",
    "version": "",
    "motor": "2500 cc",
    "imagen": "assets/images/vehiculos/foton-aumark-2.svg",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "foton-miler-2",
    "clase": "camion",
    "marca": "FOTON",
    "modelo": "MILER",
    "version": "",
    "motor": "2000 cc",
    "imagen": "assets/images/vehiculos/foton-miler-2.svg",
    "estado": "nuevo",
    "destacado": false
  },
  {
    "id": "kama-samurai-2",
    "clase": "camion",
    "marca": "KAMA",
    "modelo": "SAMURAI",
    "version": "",
    "motor": "2300 cc",
    "imagen": "assets/images/vehiculos/kama-samurai-2.svg",
    "estado": "nuevo",
    "destacado": false,
    "variante": "furgonado"
  },
  {
    "id": "foton-tm5",
    "clase": "camion",
    "marca": "FOTON",
    "modelo": "TM 5",
    "version": "",
    "motor": "1500 cc",
    "imagen": "assets/images/vehiculos/foton-tm5.svg",
    "estado": "nuevo",
    "destacado": false,
    "variante": "furgonado"
  },
  {
    "id": "toyota-bz3x",
    "clase": "vagoneta",
    "marca": "TOYOTA",
    "modelo": "bZ3X",
    "version": "",
    "motor": "Eléctrico",
    "imagen": "assets/images/vehiculos/toyota-bz3x-placeholder.svg",
    "estado": "nuevo",
    "destacado": true,
    "novedad": true,
    "fichaPendiente": true,
    "autonomiaDeclarada": "520 km (dato proporcionado por Autosale; verificar ficha técnica de la unidad)"
  }
];
