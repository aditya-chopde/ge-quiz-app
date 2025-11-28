export interface Question {
  id: number
  unit: string
  topic: string
  question: string
  options: string[]
  answer_index: number
}

export const quizData: Question[] = [
  {
    "id": 1,
    "unit": "IV",
    "topic": "Intro",
    "question": "Blow molding primarily produces ____.",
    "options": [
      "solid blocks",
      "laminated sheets",
      "hollow plastic parts",
      "metal rods"
    ],
    "answer_index": 2
  },
  {
    "id": 2,
    "unit": "IV",
    "topic": "Intro",
    "question": "The main force used to shape the parison is ____.",
    "options": [
      "air pressure",
      "steam pressure",
      "hydraulic pressure",
      "vacuum suction"
    ],
    "answer_index": 0
  },
  {
    "id": 3,
    "unit": "IV",
    "topic": "Intro",
    "question": "A common blow-molded item is ____.",
    "options": [
      "water bottle",
      "machine gear",
      "plastic sheet",
      "film roll"
    ],
    "answer_index": 0
  },
  {
    "id": 4,
    "unit": "IV",
    "topic": "Intro",
    "question": "A major advantage of blow-molded packaging is ____.",
    "options": [
      "extreme temperature resistance",
      "high stiffness",
      "metallic shine",
      "lightweight & leak-proof design"
    ],
    "answer_index": 3
  },
  {
    "id": 5,
    "unit": "IV",
    "topic": "Intro",
    "question": "Blow molding is NOT suitable for manufacturing ____.",
    "options": [
      "milk cans",
      "detergent bottles",
      "solid gears",
      "hollow jars"
    ],
    "answer_index": 2
  },
  {
    "id": 6,
    "unit": "IV",
    "topic": "Types",
    "question": "The hollow tube formed before blowing is called ____. ",
    "options": [
      "slug",
      "preform",
      "runner",
      "parison"
    ],
    "answer_index": 3
  },
  {
    "id": 7,
    "unit": "IV",
    "topic": "Types",
    "question": "Injection Blow Molding first creates a ____.",
    "options": [
      "film",
      "sheet",
      "bubble",
      "preform"
    ],
    "answer_index": 3
  },
  {
    "id": 8,
    "unit": "IV",
    "topic": "Types",
    "question": "Stretch Blow Molding adds ____ to the blowing process.",
    "options": [
      "axial & biaxial stretching",
      "chemical blowing agents",
      "vacuum suction",
      "vibration"
    ],
    "answer_index": 0
  },
  {
    "id": 9,
    "unit": "IV",
    "topic": "Types",
    "question": "Extrusion Blow Molding forms the parison using a ____.",
    "options": [
      "gate",
      "nozzle plate",
      "die head",
      "heater block"
    ],
    "answer_index": 2
  },
  {
    "id": 10,
    "unit": "IV",
    "topic": "Types",
    "question": "SBM is most commonly used for ____ bottles.",
    "options": [
      "PVC",
      "HDPE",
      "LDPE",
      "PET"
    ],
    "answer_index": 3
  },
  {
    "id": 11,
    "unit": "IV",
    "topic": "Machine",
    "question": "Pellets melt inside the ____.",
    "options": [
      "air ring",
      "extruder barrel",
      "mold cavity",
      "cooling unit"
    ],
    "answer_index": 1
  },
  {
    "id": 12,
    "unit": "IV",
    "topic": "Machine",
    "question": "Air is blown into the parison using a ____.",
    "options": [
      "clamp arm",
      "heater rod",
      "blow pin",
      "gate"
    ],
    "answer_index": 2
  },
  {
    "id": 13,
    "unit": "IV",
    "topic": "Machine",
    "question": "Final shape is obtained in the ____.",
    "options": [
      "hopper",
      "mold cavity",
      "extruder",
      "heater plate"
    ],
    "answer_index": 1
  },
  {
    "id": 14,
    "unit": "IV",
    "topic": "Machine",
    "question": "Cooling water circulates through ____.",
    "options": [
      "die lips",
      "screw core",
      "mold channels",
      "hopper"
    ],
    "answer_index": 2
  },
  {
    "id": 15,
    "unit": "IV",
    "topic": "Machine",
    "question": "Flash is removed during ____.",
    "options": [
      "deflashing",
      "extrusion",
      "air blowing",
      "reheating"
    ],
    "answer_index": 0
  },
  {
    "id": 16,
    "unit": "IV",
    "topic": "Parison",
    "question": "Parison programming primarily controls ____.",
    "options": [
      "wall thickness",
      "mold cooling rate",
      "cycle time",
      "bottle color"
    ],
    "answer_index": 0
  },
  {
    "id": 17,
    "unit": "IV",
    "topic": "Parison",
    "question": "The parison is best described as a ____.",
    "options": [
      "hollow tube",
      "sheet ribbon",
      "foam block",
      "solid rod"
    ],
    "answer_index": 0
  },
  {
    "id": 18,
    "unit": "IV",
    "topic": "Parison",
    "question": "Die swell mainly affects ____.",
    "options": [
      "melt color",
      "cap thread pitch",
      "label strength",
      "parison thickness estimation"
    ],
    "answer_index": 3
  },
  {
    "id": 19,
    "unit": "IV",
    "topic": "Parison",
    "question": "An eccentric die causes ____ walls.",
    "options": [
      "extra shiny",
      "thick & even",
      "transparent",
      "uneven"
    ],
    "answer_index": 3
  },
  {
    "id": 20,
    "unit": "IV",
    "topic": "Parison",
    "question": "Parison temperature too high causes ____.",
    "options": [
      "brittleness",
      "cracking",
      "unmelted particles",
      "drooling/sagging"
    ],
    "answer_index": 3
  },
  {
    "id": 21,
    "unit": "IV",
    "topic": "Materials",
    "question": "Milk bottles are commonly made from ____. ",
    "options": [
      "PS",
      "HDPE",
      "PET",
      "PVC"
    ],
    "answer_index": 1
  },
  {
    "id": 22,
    "unit": "IV",
    "topic": "Materials",
    "question": "Squeezable bottles are usually made of ____. ",
    "options": [
      "PET",
      "LDPE",
      "Nylon",
      "ABS"
    ],
    "answer_index": 1
  },
  {
    "id": 23,
    "unit": "IV",
    "topic": "Materials",
    "question": "Carbonated drink bottles primarily use ____.",
    "options": [
      "PVC",
      "HDPE",
      "PET",
      "PP"
    ],
    "answer_index": 2
  },
  {
    "id": 24,
    "unit": "IV",
    "topic": "Materials",
    "question": "Jerry cans are generally made of ____.",
    "options": [
      "PS",
      "Nylon-6",
      "PMMA",
      "HDPE"
    ],
    "answer_index": 3
  },
  {
    "id": 25,
    "unit": "IV",
    "topic": "Materials",
    "question": "Barrier layers like EVOH provide resistance against ____.",
    "options": [
      "heat",
      "abrasion",
      "UV light",
      "oxygen"
    ],
    "answer_index": 3
  },
  {
    "id": 26,
    "unit": "V",
    "topic": "Mold",
    "question": "The parting line is the line where ____ meet.",
    "options": [
      "cooling pipes",
      "mold halves",
      "screw flights",
      "hopper gates"
    ],
    "answer_index": 1
  },
  {
    "id": 27,
    "unit": "V",
    "topic": "Mold",
    "question": "Neck finish refers to the ____ portion of the bottle.",
    "options": [
      "thread/cap",
      "shoulder",
      "base",
      "handle"
    ],
    "answer_index": 0
  },
  {
    "id": 28,
    "unit": "V",
    "topic": "Mold",
    "question": "Cooling channels help reduce ____.",
    "options": [
      "color fading",
      "cycle time",
      "thread wear",
      "weight"
    ],
    "answer_index": 1
  },
  {
    "id": 29,
    "unit": "V",
    "topic": "Mold",
    "question": "Vents are used to remove ____.",
    "options": [
      "moisture",
      "trapped air",
      "labels",
      "pigments"
    ],
    "answer_index": 1
  },
  {
    "id": 30,
    "unit": "V",
    "topic": "Mold",
    "question": "Pinch-off design mainly affects ____.",
    "options": [
      "color shade",
      "thread size",
      "bottom seal quality",
      "weight"
    ],
    "answer_index": 2
  },
  {
    "id": 31,
    "unit": "V",
    "topic": "Operations",
    "question": "The first step in blow molding is ____.",
    "options": [
      "parison formation",
      "cooling",
      "labeling",
      "trimming"
    ],
    "answer_index": 0
  },
  {
    "id": 32,
    "unit": "V",
    "topic": "Operations",
    "question": "Wall thickness is controlled by adjusting the ____. ",
    "options": [
      "die gap program",
      "air temperature",
      "flash cutter",
      "mold vents"
    ],
    "answer_index": 0
  },
  {
    "id": 33,
    "unit": "V",
    "topic": "Operations",
    "question": "Too slow blowing results in ____.",
    "options": [
      "uniform walls",
      "thicker neck",
      "extra gloss",
      "sag marks"
    ],
    "answer_index": 3
  },
  {
    "id": 34,
    "unit": "V",
    "topic": "Operations",
    "question": "High blow pressure helps reduce ____.",
    "options": [
      "base push-up",
      "flash",
      "cycle time",
      "uneven thickness"
    ],
    "answer_index": 3
  },
  {
    "id": 35,
    "unit": "V",
    "topic": "Operations",
    "question": "Trimming removes the excess called ____.",
    "options": [
      "moisture",
      "additives",
      "flash",
      "threads"
    ],
    "answer_index": 2
  },
  {
    "id": 36,
    "unit": "V",
    "topic": "Apps",
    "question": "Blow molded products include ____.",
    "options": [
      "metal cans",
      "bottles",
      "wires",
      "sheets"
    ],
    "answer_index": 1
  },
  {
    "id": 37,
    "unit": "V",
    "topic": "Apps",
    "question": "Large tanks are typically made using ____.",
    "options": [
      "hand layup",
      "vacuum forming",
      "accumulator-type EBM",
      "IBM"
    ],
    "answer_index": 2
  },
  {
    "id": 38,
    "unit": "V",
    "topic": "Apps",
    "question": "Multilayer bottles are used for improved ____.",
    "options": [
      "color uniformity",
      "barrier properties",
      "label strength",
      "gloss"
    ],
    "answer_index": 1
  },
  {
    "id": 39,
    "unit": "V",
    "topic": "Apps",
    "question": "Cosmetic containers require high ____.",
    "options": [
      "weight",
      "opacity",
      "density",
      "surface finish"
    ],
    "answer_index": 3
  },
  {
    "id": 40,
    "unit": "V",
    "topic": "Apps",
    "question": "Handle-ware detergent bottles are mostly made from ____. ",
    "options": [
      "PVC",
      "HDPE",
      "PET",
      "PS"
    ],
    "answer_index": 1
  },
  {
    "id": 41,
    "unit": "V",
    "topic": "Defects",
    "question": "Uneven wall thickness occurs due to poor ____.",
    "options": [
      "parison control",
      "label adhesion",
      "cap fit",
      "mold polish"
    ],
    "answer_index": 0
  },
  {
    "id": 42,
    "unit": "V",
    "topic": "Defects",
    "question": "Air entrapment results in ____.",
    "options": [
      "thread cracks",
      "sink marks",
      "bubbles",
      "excess gloss"
    ],
    "answer_index": 2
  },
  {
    "id": 43,
    "unit": "V",
    "topic": "Defects",
    "question": "Flash is primarily caused by ____.",
    "options": [
      "mold not closing properly",
      "thin parison",
      "too much cooling",
      "low die temperature"
    ],
    "answer_index": 0
  },
  {
    "id": 44,
    "unit": "V",
    "topic": "Defects",
    "question": "Bottom blow-through occurs when the parison is ____.",
    "options": [
      "too hot/thin",
      "over-cooled",
      "over-stretched",
      "too short"
    ],
    "answer_index": 0
  },
  {
    "id": 45,
    "unit": "V",
    "topic": "Defects",
    "question": "Wavy threads on the neck are caused by poor ____.",
    "options": [
      "neck cooling",
      "die heating",
      "material drying",
      "color mixing"
    ],
    "answer_index": 0
  },
  {
    "id": 46,
    "unit": "V",
    "topic": "QC",
    "question": "Burst pressure test checks ____.",
    "options": [
      "container strength",
      "label adhesion",
      "cap torque",
      "color tone"
    ],
    "answer_index": 0
  },
  {
    "id": 47,
    "unit": "V",
    "topic": "QC",
    "question": "Top load test measures ____ resistance.",
    "options": [
      "impact",
      "heat",
      "compression",
      "torsion"
    ],
    "answer_index": 2
  },
  {
    "id": 48,
    "unit": "V",
    "topic": "QC",
    "question": "Leak tests identify ____.",
    "options": [
      "label wrinkles",
      "color streaks",
      "holes",
      "flash"
    ],
    "answer_index": 2
  },
  {
    "id": 49,
    "unit": "V",
    "topic": "QC",
    "question": "In-mold labeling places the label ____.",
    "options": [
      "on the neck",
      "inside the mold",
      "during trimming",
      "after cooling"
    ],
    "answer_index": 1
  },
  {
    "id": 50,
    "unit": "V",
    "topic": "QC",
    "question": "Multilayer bottles mainly improve ____.",
    "options": [
      "cap threads",
      "flash removal",
      "weight",
      "barrier performance"
    ],
    "answer_index": 3
  },
  {
    "id": 51,
    "unit": "IV",
    "topic": "Intro",
    "question": "Blow molding is mainly suitable for producing ____.",
    "options": [
      "extruded sheets",
      "thick blocks",
      "hollow parts",
      "solid gears"
    ],
    "answer_index": 2
  },
  {
    "id": 52,
    "unit": "IV",
    "topic": "Intro",
    "question": "The blow ratio is the ratio of parison diameter to ____ diameter.",
    "options": [
      "neck ring",
      "final product",
      "cooling channel",
      "die head"
    ],
    "answer_index": 1
  },
  {
    "id": 53,
    "unit": "IV",
    "topic": "Intro",
    "question": "Blow molding is a ____ forming process.",
    "options": [
      "thermoplastic",
      "thermoset-only",
      "metal",
      "ceramic"
    ],
    "answer_index": 0
  },
  {
    "id": 54,
    "unit": "IV",
    "topic": "Intro",
    "question": "One major advantage of blow molding is ____.",
    "options": [
      "very heavy products",
      "high metal content",
      "zero flash",
      "high production rate"
    ],
    "answer_index": 3
  },
  {
    "id": 55,
    "unit": "IV",
    "topic": "Intro",
    "question": "Blow molding offers excellent ____ for packaging applications.",
    "options": [
      "abrasion resistance",
      "weight reduction",
      "weld strength",
      "thermal stability"
    ],
    "answer_index": 1
  },
  {
    "id": 56,
    "unit": "IV",
    "topic": "Types",
    "question": "Injection Blow Molding is preferred for ____ bottles.",
    "options": [
      "pharmaceutical",
      "food trays",
      "fuel tanks",
      "pipes"
    ],
    "answer_index": 0
  },
  {
    "id": 57,
    "unit": "IV",
    "topic": "Types",
    "question": "In Stretch Blow Molding, bottles achieve higher strength due to ____. ",
    "options": [
      "post-curing",
      "biaxial orientation",
      "lamination",
      "vacuum forming"
    ],
    "answer_index": 1
  },
  {
    "id": 58,
    "unit": "IV",
    "topic": "Types",
    "question": "Extrusion Blow Molding typically uses a ____ parison.",
    "options": [
      "hot extruded",
      "vacuum drawn",
      "solid",
      "cold cut"
    ],
    "answer_index": 0
  },
  {
    "id": 59,
    "unit": "IV",
    "topic": "Types",
    "question": "Preform reheating is a step in ____.",
    "options": [
      "Vacuum Forming",
      "Compression Molding",
      "Stretch Blow Molding",
      "Extrusion Blow Molding"
    ],
    "answer_index": 2
  },
  {
    "id": 60,
    "unit": "IV",
    "topic": "Types",
    "question": "IBM avoids flash formation at the ____.",
    "options": [
      "neck finish",
      "shoulder",
      "body",
      "bottom"
    ],
    "answer_index": 0
  },
  {
    "id": 61,
    "unit": "IV",
    "topic": "Machine",
    "question": "The hopper is responsible for feeding ____.",
    "options": [
      "cooling water",
      "plastic pellets",
      "labels",
      "compressed air"
    ],
    "answer_index": 1
  },
  {
    "id": 62,
    "unit": "IV",
    "topic": "Machine",
    "question": "The screw and barrel unit performs ____.",
    "options": [
      "melting & mixing",
      "stretching",
      "purging only",
      "cooling only"
    ],
    "answer_index": 0
  },
  {
    "id": 63,
    "unit": "IV",
    "topic": "Machine",
    "question": "Leader pins in molds ensure proper ____.",
    "options": [
      "stretch ratio",
      "cooling",
      "air filtration",
      "alignment"
    ],
    "answer_index": 3
  },
  {
    "id": 64,
    "unit": "IV",
    "topic": "Machine",
    "question": "Accumulator heads store melt for forming ____. ",
    "options": [
      "labels",
      "small caps",
      "threads",
      "large parts"
    ],
    "answer_index": 3
  },
  {
    "id": 65,
    "unit": "IV",
    "topic": "Machine",
    "question": "The die head controls ____.",
    "options": [
      "cap sealing",
      "drying time",
      "surface printing",
      "parison thickness"
    ],
    "answer_index": 3
  },
  {
    "id": 66,
    "unit": "IV",
    "topic": "Parison",
    "question": "Parison drop time affects ____.",
    "options": [
      "sagging and weight",
      "thread quality",
      "labeling",
      "color tone"
    ],
    "answer_index": 0
  },
  {
    "id": 67,
    "unit": "IV",
    "topic": "Parison",
    "question": "A thicker bottom section prevents ____ failure.",
    "options": [
      "thermal",
      "UV",
      "chemical",
      "impact"
    ],
    "answer_index": 3
  },
  {
    "id": 68,
    "unit": "IV",
    "topic": "Parison",
    "question": "Eccentric die gaps mainly cause ____.",
    "options": [
      "label misfit",
      "flash removal",
      "uneven parison",
      "neck accuracy"
    ],
    "answer_index": 2
  },
  {
    "id": 69,
    "unit": "IV",
    "topic": "Parison",
    "question": "Parison programming is adjusted ____ extrusion.",
    "options": [
      "before cooling",
      "after packaging",
      "after",
      "during"
    ],
    "answer_index": 3
  },
  {
    "id": 70,
    "unit": "IV",
    "topic": "Parison",
    "question": "Die lips wear over time causes ____ variation.",
    "options": [
      "cap torque",
      "color",
      "odor",
      "thickness"
    ],
    "answer_index": 3
  },
  {
    "id": 71,
    "unit": "IV",
    "topic": "Materials",
    "question": "PP bottles are preferred for ____ applications.",
    "options": [
      "carbonated",
      "UV-sensitive",
      "microwave only",
      "hot-fill"
    ],
    "answer_index": 3
  },
  {
    "id": 72,
    "unit": "IV",
    "topic": "Materials",
    "question": "Nylon layers in co-ex bottles add ____ barrier.",
    "options": [
      "light",
      "thermal",
      "UV",
      "fuel/solvent"
    ],
    "answer_index": 3
  },
  {
    "id": 73,
    "unit": "IV",
    "topic": "Materials",
    "question": "PVC usage requires careful control of ____. ",
    "options": [
      "flash temperature",
      "vibration",
      "dehydrochlorination",
      "stretch ratio"
    ],
    "answer_index": 2
  },
  {
    "id": 74,
    "unit": "IV",
    "topic": "Materials",
    "question": "Regrind content must be kept ____ for quality control.",
    "options": [
      "random",
      "within limits",
      "as high as possible",
      "zero always"
    ],
    "answer_index": 1
  },
  {
    "id": 75,
    "unit": "IV",
    "topic": "Materials",
    "question": "EVOH is mainly used for ____ barrier.",
    "options": [
      "UV",
      "light",
      "oxygen",
      "impact"
    ],
    "answer_index": 2
  },
  {
    "id": 76,
    "unit": "V",
    "topic": "Mold",
    "question": "Base push-up design enhances ____.",
    "options": [
      "flash control",
      "odor control",
      "standing stability",
      "color depth"
    ],
    "answer_index": 2
  },
  {
    "id": 77,
    "unit": "V",
    "topic": "Mold",
    "question": "Handle-ware molds require additional ____.",
    "options": [
      "threads",
      "handle inserts",
      "coolant",
      "vents"
    ],
    "answer_index": 1
  },
  {
    "id": 78,
    "unit": "V",
    "topic": "Mold",
    "question": "Neck ring accuracy ensures proper ____.",
    "options": [
      "UV stability",
      "color mixing",
      "label glueing",
      "cap sealing"
    ],
    "answer_index": 3
  },
  {
    "id": 79,
    "unit": "V",
    "topic": "Mold",
    "question": "Insert changes allow quick ____ modifications.",
    "options": [
      "color",
      "size",
      "weight",
      "viscosity"
    ],
    "answer_index": 1
  },
  {
    "id": 80,
    "unit": "V",
    "topic": "Mold",
    "question": "Vent marks appear due to improper ____.",
    "options": [
      "filling",
      "cooling",
      "air escape",
      "reheating"
    ],
    "answer_index": 2
  },
  {
    "id": 81,
    "unit": "V",
    "topic": "Operations",
    "question": "Cycle time is mainly controlled by ____.",
    "options": [
      "post trimming",
      "extruder size",
      "cooling",
      "pigment load"
    ],
    "answer_index": 2
  },
  {
    "id": 82,
    "unit": "V",
    "topic": "Operations",
    "question": "Deflashing removes excess material from the ____.",
    "options": [
      "shoulder",
      "base",
      "parting line",
      "thread"
    ],
    "answer_index": 2
  },
  {
    "id": 83,
    "unit": "V",
    "topic": "Operations",
    "question": "Take-out timing is important to avoid ____.",
    "options": [
      "color shifting",
      "deformation",
      "odor issues",
      "UV exposure"
    ],
    "answer_index": 1
  },
  {
    "id": 84,
    "unit": "V",
    "topic": "Operations",
    "question": "Pre-blow helps shape the ____ area.",
    "options": [
      "label panel",
      "thread",
      "handle",
      "shoulder"
    ],
    "answer_index": 3
  },
  {
    "id": 85,
    "unit": "V",
    "topic": "Operations",
    "question": "Parison cut length directly affects container ____.",
    "options": [
      "color",
      "weight",
      "odor",
      "transparency"
    ],
    "answer_index": 1
  },
  {
    "id": 86,
    "unit": "V",
    "topic": "Apps",
    "question": "Returnable water jars are made from ____. ",
    "options": [
      "PVC",
      "PETG",
      "HDPE",
      "PC/PP"
    ],
    "answer_index": 3
  },
  {
    "id": 87,
    "unit": "V",
    "topic": "Apps",
    "question": "Hot-fill bottles use ____ materials.",
    "options": [
      "heat-set PET",
      "LDPE",
      "ABS",
      "PVC"
    ],
    "answer_index": 0
  },
  {
    "id": 88,
    "unit": "V",
    "topic": "Apps",
    "question": "Sports bottles made by SBM usually use ____. ",
    "options": [
      "PVC",
      "ABS",
      "UHMWPE",
      "PET"
    ],
    "answer_index": 3
  },
  {
    "id": 89,
    "unit": "V",
    "topic": "Apps",
    "question": "Bag-in-bottle packaging uses ____ structure.",
    "options": [
      "monolayer",
      "co-extruded",
      "fiber reinforced",
      "laminated paper"
    ],
    "answer_index": 1
  },
  {
    "id": 90,
    "unit": "V",
    "topic": "Apps",
    "question": "PCR stands for ____.",
    "options": [
      "polymer chain reaction",
      "packaging compliance report",
      "post-consumer recycled",
      "pressure cap resistance"
    ],
    "answer_index": 2
  },
  {
    "id": 91,
    "unit": "V",
    "topic": "Defects",
    "question": "Haze in PET bottles is often due to excess ____.",
    "options": [
      "cooling",
      "stretch",
      "extrusion speed",
      "crystallization"
    ],
    "answer_index": 3
  },
  {
    "id": 92,
    "unit": "V",
    "topic": "Defects",
    "question": "Pearlescence in PET indicates poor ____.",
    "options": [
      "venting",
      "cooling",
      "stretch ratio",
      "material drying"
    ],
    "answer_index": 2
  },
  {
    "id": 93,
    "unit": "V",
    "topic": "Defects",
    "question": "Scuff marks are usually formed during ____.",
    "options": [
      "cooling",
      "heating",
      "molding",
      "handling"
    ],
    "answer_index": 3
  },
  {
    "id": 94,
    "unit": "V",
    "topic": "Defects",
    "question": "Paneling in hot-fill bottles is caused by ____ collapse.",
    "options": [
      "labeling",
      "overpressure",
      "air flow",
      "vacuum"
    ],
    "answer_index": 3
  },
  {
    "id": 95,
    "unit": "V",
    "topic": "Defects",
    "question": "Thread ovality is corrected by improving ____.",
    "options": [
      "additive mixing",
      "die heating",
      "color concentration",
      "neck cooling"
    ],
    "answer_index": 3
  },
  {
    "id": 96,
    "unit": "V",
    "topic": "QC",
    "question": "Top load failure indicates weak ____.",
    "options": [
      "ductility",
      "compression strength",
      "UV resistance",
      "shear strength"
    ],
    "answer_index": 1
  },
  {
    "id": 97,
    "unit": "V",
    "topic": "QC",
    "question": "Leakage is detected using ____ testing.",
    "options": [
      "X-ray",
      "ultrasound",
      "spark",
      "pressure"
    ],
    "answer_index": 3
  },
  {
    "id": 98,
    "unit": "V",
    "topic": "QC",
    "question": "CO2 loss in CSD bottles relates to ____.",
    "options": [
      "UV exposure",
      "gas barrier",
      "color",
      "density"
    ],
    "answer_index": 1
  },
  {
    "id": 99,
    "unit": "V",
    "topic": "QC",
    "question": "A vision inspection system is used to detect ____.",
    "options": [
      "surface defects",
      "color percentage",
      "weight",
      "stretch rate"
    ],
    "answer_index": 0
  },
  {
    "id": 100,
    "unit": "V",
    "topic": "QC",
    "question": "Recycled percentage in containers is a key ____ metric.",
    "options": [
      "sustainability",
      "shock",
      "optical",
      "thermal"
    ],
    "answer_index": 0
  },
  {
    "id": 101,
    "unit": "IV",
    "topic": "Intro",
    "question": "Blow molding is best suited for producing ____ components.",
    "options": [
      "composite sheet",
      "solid",
      "foamed metal",
      "hollow"
    ],
    "answer_index": 3
  },
  {
    "id": 102,
    "unit": "IV",
    "topic": "Intro",
    "question": "The blow molding process is mainly preferred due to its ____.",
    "options": [
      "heavy weight",
      "high productivity",
      "need for metal molds",
      "high density"
    ],
    "answer_index": 1
  },
  {
    "id": 103,
    "unit": "IV",
    "topic": "Intro",
    "question": "Which of the following is a blow molded product?",
    "options": [
      "steel rod",
      "detergent bottle",
      "Teflon sheet",
      "thermoformed tray"
    ],
    "answer_index": 1
  },
  {
    "id": 104,
    "unit": "IV",
    "topic": "Intro",
    "question": "The main application area of blow molding is ____.",
    "options": [
      "packaging",
      "electrical wiring",
      "metal plating",
      "car chassis"
    ],
    "answer_index": 0
  },
  {
    "id": 105,
    "unit": "IV",
    "topic": "Intro",
    "question": "Blow molding produces parts that are ____.",
    "options": [
      "thermoset",
      "metallic",
      "lightweight",
      "multi-material"
    ],
    "answer_index": 2
  },
  {
    "id": 106,
    "unit": "IV",
    "topic": "Types",
    "question": "Which process uses a preform before blowing?",
    "options": [
      "Injection Blow Molding",
      "Vacuum Forming",
      "Compression Molding",
      "Extrusion Blow Molding"
    ],
    "answer_index": 0
  },
  {
    "id": 107,
    "unit": "IV",
    "topic": "Types",
    "question": "Which blow molding process gives the best dimensional accuracy?",
    "options": [
      "EBM",
      "IBM",
      "Rotational molding",
      "Thermoforming"
    ],
    "answer_index": 1
  },
  {
    "id": 108,
    "unit": "IV",
    "topic": "Types",
    "question": "Biaxial stretching is used in ____.",
    "options": [
      "Extrusion Blow Molding",
      "Injection Blow Molding",
      "Stretch Blow Molding",
      "Casting"
    ],
    "answer_index": 2
  },
  {
    "id": 109,
    "unit": "IV",
    "topic": "Types",
    "question": "Continuous parison extrusion is typical in ____.",
    "options": [
      "EBM",
      "IBM",
      "TPM",
      "SBM"
    ],
    "answer_index": 0
  },
  {
    "id": 110,
    "unit": "IV",
    "topic": "Types",
    "question": "IBM is mostly used for ____ bottles.",
    "options": [
      "small pharmaceutical",
      "oil drums",
      "PET jars",
      "large fuel tanks"
    ],
    "answer_index": 0
  },
  {
    "id": 111,
    "unit": "IV",
    "topic": "Machine",
    "question": "The barrel contains the ____.",
    "options": [
      "rotating screw",
      "air valve",
      "label plate",
      "cooling water"
    ],
    "answer_index": 0
  },
  {
    "id": 112,
    "unit": "IV",
    "topic": "Machine",
    "question": "The screw's purpose is to ____.",
    "options": [
      "melt and push molten plastic",
      "cool the mold",
      "provide vacuum",
      "trim flash"
    ],
    "answer_index": 0
  },
  {
    "id": 113,
    "unit": "IV",
    "topic": "Machine",
    "question": "Die swell occurs as the polymer exits the ____.",
    "options": [
      "cooling tank",
      "die head",
      "hopper",
      "nozzle"
    ],
    "answer_index": 1
  },
  {
    "id": 114,
    "unit": "IV",
    "topic": "Machine",
    "question": "Which component shapes the parison?",
    "options": [
      "cutter",
      "hopper",
      "die",
      "roller"
    ],
    "answer_index": 2
  },
  {
    "id": 115,
    "unit": "IV",
    "topic": "Machine",
    "question": "The mold halves are kept aligned using ____.",
    "options": [
      "leader pins",
      "strainers",
      "rollers",
      "valves"
    ],
    "answer_index": 0
  },
  {
    "id": 116,
    "unit": "IV",
    "topic": "Parison",
    "question": "A parison is best described as a ____.",
    "options": [
      "foam mass",
      "hollow tube",
      "solid block",
      "film sheet"
    ],
    "answer_index": 1
  },
  {
    "id": 117,
    "unit": "IV",
    "topic": "Parison",
    "question": "Parison control affects the final product's ____.",
    "options": [
      "material shrinkage",
      "color",
      "cap fit",
      "wall thickness"
    ],
    "answer_index": 3
  },
  {
    "id": 118,
    "unit": "IV",
    "topic": "Parison",
    "question": "Thicker parison sections are programmed to avoid ____.",
    "options": [
      "thread mismatch",
      "high gloss",
      "flash increase",
      "neck thinning"
    ],
    "answer_index": 3
  },
  {
    "id": 119,
    "unit": "IV",
    "topic": "Parison",
    "question": "Parison sagging occurs when ____.",
    "options": [
      "cooling is fast",
      "pressure is too high",
      "die gap is large",
      "temperature is too high"
    ],
    "answer_index": 3
  },
  {
    "id": 120,
    "unit": "IV",
    "topic": "Parison",
    "question": "Wall thickness variations occur mainly due to ____.",
    "options": [
      "high torque",
      "uneven die gap",
      "cool water",
      "poor labeling"
    ],
    "answer_index": 1
  },
  {
    "id": 121,
    "unit": "IV",
    "topic": "Materials",
    "question": "HDPE is commonly used for ____ bottles.",
    "options": [
      "wine",
      "milk",
      "soft drink",
      "cosmetic spray"
    ],
    "answer_index": 1
  },
  {
    "id": 122,
    "unit": "IV",
    "topic": "Materials",
    "question": "EVOH is used for ____ barrier.",
    "options": [
      "UV",
      "oil",
      "oxygen",
      "heat"
    ],
    "answer_index": 2
  },
  {
    "id": 123,
    "unit": "IV",
    "topic": "Materials",
    "question": "PET is preferred for beverage bottles due to its ____.",
    "options": [
      "clarity",
      "density",
      "high crystallinity",
      "foamability"
    ],
    "answer_index": 0
  },
  {
    "id": 124,
    "unit": "IV",
    "topic": "Materials",
    "question": "PP is suitable for hot-fill applications because of its ____.",
    "options": [
      "high density",
      "high melting point",
      "low viscosity",
      "opacity"
    ],
    "answer_index": 1
  },
  {
    "id": 125,
    "unit": "IV",
    "topic": "Materials",
    "question": "PVC requires careful processing due to ____.",
    "options": [
      "dehydrochlorination",
      "color shifting",
      "high shrinkage",
      "moisture absorption"
    ],
    "answer_index": 0
  },
  {
    "id": 126,
    "unit": "V",
    "topic": "Mold",
    "question": "A tapered bottom helps in better ____.",
    "options": [
      "lamination",
      "ejection",
      "stretching",
      "cooling"
    ],
    "answer_index": 1
  },
  {
    "id": 127,
    "unit": "V",
    "topic": "Mold",
    "question": "Cooling channels help maintain ____ temperature.",
    "options": [
      "die head",
      "mold",
      "hopper",
      "air"
    ],
    "answer_index": 1
  },
  {
    "id": 128,
    "unit": "V",
    "topic": "Mold",
    "question": "Proper alignment prevents ____ defects.",
    "options": [
      "gloss",
      "shrink",
      "flash",
      "warpage"
    ],
    "answer_index": 2
  },
  {
    "id": 129,
    "unit": "V",
    "topic": "Mold",
    "question": "Pinch-off land design ensures a proper ____.",
    "options": [
      "bottom seal",
      "label fit",
      "gloss level",
      "thread pitch"
    ],
    "answer_index": 0
  },
  {
    "id": 130,
    "unit": "V",
    "topic": "Mold",
    "question": "Venting prevents ____ inside the mold.",
    "options": [
      "air traps",
      "melt fracture",
      "stretch marks",
      "color change"
    ],
    "answer_index": 0
  },
  {
    "id": 131,
    "unit": "V",
    "topic": "Operations",
    "question": "Blow molding starts with ____.",
    "options": [
      "trimming",
      "post cooling",
      "labeling",
      "parison formation"
    ],
    "answer_index": 3
  },
  {
    "id": 132,
    "unit": "V",
    "topic": "Operations",
    "question": "Flash is trimmed off during ____.",
    "options": [
      "cooling",
      "stretching",
      "filling",
      "deflashing"
    ],
    "answer_index": 3
  },
  {
    "id": 133,
    "unit": "V",
    "topic": "Operations",
    "question": "Blow pressure ensures proper ____ formation.",
    "options": [
      "cooling",
      "shape",
      "curing",
      "thread design"
    ],
    "answer_index": 1
  },
  {
    "id": 134,
    "unit": "V",
    "topic": "Operations",
    "question": "Thicker parison sections are required for ____.",
    "options": [
      "threads",
      "corners",
      "label areas",
      "shoulders"
    ],
    "answer_index": 1
  },
  {
    "id": 135,
    "unit": "V",
    "topic": "Operations",
    "question": "Cycle time increases mainly due to ____.",
    "options": [
      "lightweight parts",
      "more vents",
      "slow cooling",
      "low pressure"
    ],
    "answer_index": 2
  },
  {
    "id": 136,
    "unit": "V",
    "topic": "Apps",
    "question": "Fuel tanks are made using ____ HDPE.",
    "options": [
      "monolayer",
      "crosslinked",
      "multilayer",
      "unfilled"
    ],
    "answer_index": 2
  },
  {
    "id": 137,
    "unit": "V",
    "topic": "Apps",
    "question": "Dairy bottles are usually made from ____.",
    "options": [
      "PVC",
      "HDPE",
      "PP",
      "PET"
    ],
    "answer_index": 1
  },
  {
    "id": 138,
    "unit": "V",
    "topic": "Apps",
    "question": "Returnable PET jars require high ____ strength.",
    "options": [
      "UV",
      "chemical",
      "impact",
      "thermal"
    ],
    "answer_index": 2
  },
  {
    "id": 139,
    "unit": "V",
    "topic": "Apps",
    "question": "Multilayer bottles are widely used for ____ packaging.",
    "options": [
      "leather",
      "food",
      "metals",
      "glassware"
    ],
    "answer_index": 1
  },
  {
    "id": 140,
    "unit": "V",
    "topic": "Apps",
    "question": "SBM bottles for carbonated drinks require good ____ retention.",
    "options": [
      "O2",
      "N2",
      "H2O",
      "CO2"
    ],
    "answer_index": 3
  },
  {
    "id": 141,
    "unit": "V",
    "topic": "Defects",
    "question": "Air bubbles in bottles indicate poor ____.",
    "options": [
      "cooling",
      "coloring",
      "mold polish",
      "venting"
    ],
    "answer_index": 3
  },
  {
    "id": 142,
    "unit": "V",
    "topic": "Defects",
    "question": "Sink marks appear due to insufficient ____.",
    "options": [
      "stretching",
      "venting",
      "cooling",
      "pressure"
    ],
    "answer_index": 2
  },
  {
    "id": 143,
    "unit": "V",
    "topic": "Defects",
    "question": "Bottom blow-through is caused by a ____ parison.",
    "options": [
      "thin",
      "thick",
      "cold",
      "short"
    ],
    "answer_index": 0
  },
  {
    "id": 144,
    "unit": "V",
    "topic": "Defects",
    "question": "Orange peel surface is caused by ____.",
    "options": [
      "excess stretch",
      "moisture",
      "overcooling",
      "melt fracture"
    ],
    "answer_index": 3
  },
  {
    "id": 145,
    "unit": "V",
    "topic": "Defects",
    "question": "Flash is caused by ____ clamp pressure.",
    "options": [
      "high",
      "variable",
      "low",
      "optimal"
    ],
    "answer_index": 2
  },
  {
    "id": 146,
    "unit": "V",
    "topic": "QC",
    "question": "Burst pressure checks the ____ strength.",
    "options": [
      "external",
      "internal",
      "torsional",
      "shear"
    ],
    "answer_index": 1
  },
  {
    "id": 147,
    "unit": "V",
    "topic": "QC",
    "question": "Drop test measures ____ resistance.",
    "options": [
      "compression",
      "tensile",
      "thermal",
      "impact"
    ],
    "answer_index": 3
  },
  {
    "id": 148,
    "unit": "V",
    "topic": "QC",
    "question": "Torque test ensures proper ____ operation.",
    "options": [
      "thread cutting",
      "cap removal",
      "mold clamping",
      "product fill"
    ],
    "answer_index": 1
  },
  {
    "id": 149,
    "unit": "V",
    "topic": "QC",
    "question": "Leak testing is commonly done using ____ pressure.",
    "options": [
      "air",
      "vacuum",
      "water",
      "steam"
    ],
    "answer_index": 0
  },
  {
    "id": 150,
    "unit": "V",
    "topic": "QC",
    "question": "Vision systems primarily detect ____.",
    "options": [
      "density",
      "cooling rate",
      "surface defects",
      "weight"
    ],
    "answer_index": 2
  },
  {
    "id": 151,
    "unit": "IV",
    "topic": "Intro",
    "question": "Blow molding is preferred because it can produce parts with ____.",
    "options": [
      "uniform thin walls",
      "metallic structure",
      "solid cores",
      "zero air usage"
    ],
    "answer_index": 0
  },
  {
    "id": 152,
    "unit": "IV",
    "topic": "Intro",
    "question": "A key benefit of blow-molded bottles is ____.",
    "options": [
      "low weight",
      "metal reinforcement",
      "manual trimming",
      "high density"
    ],
    "answer_index": 0
  },
  {
    "id": 153,
    "unit": "IV",
    "topic": "Intro",
    "question": "Blow molding is mainly used in ____ industries.",
    "options": [
      "electronics",
      "metal casting",
      "composites",
      "packaging"
    ],
    "answer_index": 3
  },
  {
    "id": 154,
    "unit": "IV",
    "topic": "Intro",
    "question": "A common example of a blow-molded product is ____.",
    "options": [
      "wooden mold",
      "steel plate",
      "shampoo bottle",
      "glass sheet"
    ],
    "answer_index": 2
  },
  {
    "id": 155,
    "unit": "IV",
    "topic": "Intro",
    "question": "Blow molding relies mainly on ____ pressure.",
    "options": [
      "vacuum",
      "air",
      "water",
      "steam"
    ],
    "answer_index": 1
  },
  {
    "id": 156,
    "unit": "IV",
    "topic": "Types",
    "question": "Extrusion blow molding forms parisons using a ____.",
    "options": [
      "roller",
      "die head",
      "vacuum plate",
      "gate sprue"
    ],
    "answer_index": 1
  },
  {
    "id": 157,
    "unit": "IV",
    "topic": "Types",
    "question": "Injection Blow Molding uses a preform made in a ____.",
    "options": [
      "sheet die",
      "vacuum mold",
      "injection mold",
      "roller mold"
    ],
    "answer_index": 2
  },
  {
    "id": 158,
    "unit": "IV",
    "topic": "Types",
    "question": "Stretch Blow Molding gives higher bottle strength due to ____.",
    "options": [
      "pressure drops",
      "slow cooling",
      "biaxial stretching",
      "metal inserts"
    ],
    "answer_index": 2
  },
  {
    "id": 159,
    "unit": "IV",
    "topic": "Types",
    "question": "Which process avoids flash at the neck?",
    "options": [
      "IBM",
      "EBM",
      "RIM",
      "SBM"
    ],
    "answer_index": 0
  },
  {
    "id": 160,
    "unit": "IV",
    "topic": "Types",
    "question": "Fuel tanks are made using ____ blow molding.",
    "options": [
      "IBM",
      "accumulator-type EBM",
      "sheet forming",
      "compression molding"
    ],
    "answer_index": 1
  },
  {
    "id": 161,
    "unit": "IV",
    "topic": "Machine",
    "question": "Which part provides molten polymer pressure?",
    "options": [
      "screw",
      "clamp arm",
      "hopper",
      "label roll"
    ],
    "answer_index": 0
  },
  {
    "id": 162,
    "unit": "IV",
    "topic": "Machine",
    "question": "The mold cavity shapes the final ____.",
    "options": [
      "air valves",
      "product",
      "pellets",
      "coolant"
    ],
    "answer_index": 1
  },
  {
    "id": 163,
    "unit": "IV",
    "topic": "Machine",
    "question": "Mold cooling is critical because it reduces ____.",
    "options": [
      "pigment load",
      "airflow",
      "cycle time",
      "melt pressure"
    ],
    "answer_index": 2
  },
  {
    "id": 164,
    "unit": "IV",
    "topic": "Machine",
    "question": "A blow pin supplies ____.",
    "options": [
      "air",
      "melt",
      "coolant",
      "vacuum"
    ],
    "answer_index": 0
  },
  {
    "id": 165,
    "unit": "IV",
    "topic": "Machine",
    "question": "Die gap adjustment directly affects ____.",
    "options": [
      "color uniformity",
      "neck diameter",
      "wall thickness",
      "handle size"
    ],
    "answer_index": 2
  },
  {
    "id": 166,
    "unit": "IV",
    "topic": "Parison",
    "question": "A parison is a ____ of molten plastic.",
    "options": [
      "cold slug",
      "solid rod",
      "hollow tube",
      "granulated sheet"
    ],
    "answer_index": 2
  },
  {
    "id": 167,
    "unit": "IV",
    "topic": "Parison",
    "question": "Parison thickness depends on the ____.",
    "options": [
      "color",
      "flash width",
      "die gap",
      "mold base"
    ],
    "answer_index": 2
  },
  {
    "id": 168,
    "unit": "IV",
    "topic": "Parison",
    "question": "Parison sagging is prevented by controlling ____.",
    "options": [
      "label finish",
      "trim speed",
      "temperature",
      "cooling rate"
    ],
    "answer_index": 2
  },
  {
    "id": 169,
    "unit": "IV",
    "topic": "Parison",
    "question": "Die swell increases parison ____.",
    "options": [
      "diameter",
      "clarity",
      "color",
      "odor"
    ],
    "answer_index": 0
  },
  {
    "id": 170,
    "unit": "IV",
    "topic": "Parison",
    "question": "Poor parison control leads to ____.",
    "options": [
      "stronger neck",
      "better clarity",
      "uniform color",
      "uneven wall thickness"
    ],
    "answer_index": 3
  },
  {
    "id": 171,
    "unit": "IV",
    "topic": "Materials",
    "question": "PET is widely used for ____ bottles.",
    "options": [
      "milk",
      "lubricants",
      "detergents",
      "beverages"
    ],
    "answer_index": 3
  },
  {
    "id": 172,
    "unit": "IV",
    "topic": "Materials",
    "question": "HDPE bottles have excellent ____ resistance.",
    "options": [
      "UV",
      "chemical",
      "thermal",
      "electrical"
    ],
    "answer_index": 1
  },
  {
    "id": 173,
    "unit": "IV",
    "topic": "Materials",
    "question": "Multilayer bottles often include ____ layers.",
    "options": [
      "wood fiber",
      "glass",
      "nylon",
      "EVOH"
    ],
    "answer_index": 3
  },
  {
    "id": 174,
    "unit": "IV",
    "topic": "Materials",
    "question": "LDPE is mainly used for ____ bottles.",
    "options": [
      "glass-like",
      "squeezable",
      "fuel",
      "pressurized"
    ],
    "answer_index": 1
  },
  {
    "id": 175,
    "unit": "IV",
    "topic": "Materials",
    "question": "PP bottles are suitable for ____ applications.",
    "options": [
      "freezing",
      "abrasive",
      "carbonated",
      "hot-fill"
    ],
    "answer_index": 3
  },
  {
    "id": 176,
    "unit": "V",
    "topic": "Mold",
    "question": "The parting line is created when ____.",
    "options": [
      "interlock seals open",
      "air is blown",
      "cooling starts",
      "mold halves meet"
    ],
    "answer_index": 3
  },
  {
    "id": 177,
    "unit": "V",
    "topic": "Mold",
    "question": "Neck finish ensures proper ____ attachment.",
    "options": [
      "cap",
      "handle",
      "label",
      "base"
    ],
    "answer_index": 0
  },
  {
    "id": 178,
    "unit": "V",
    "topic": "Mold",
    "question": "Pinch-off design strengthens the ____.",
    "options": [
      "neck ring",
      "bottom weld",
      "shoulder weld",
      "thread"
    ],
    "answer_index": 1
  },
  {
    "id": 179,
    "unit": "V",
    "topic": "Mold",
    "question": "Cooling channels prevent ____.",
    "options": [
      "flash",
      "warping",
      "thread slip",
      "crystallization"
    ],
    "answer_index": 1
  },
  {
    "id": 180,
    "unit": "V",
    "topic": "Mold",
    "question": "Vent marks arise due to poor ____.",
    "options": [
      "air escape",
      "color mixing",
      "thread cutting",
      "mold polish"
    ],
    "answer_index": 0
  },
  {
    "id": 181,
    "unit": "V",
    "topic": "Operations",
    "question": "Flash forms at the ____.",
    "options": [
      "parting line",
      "base",
      "neck",
      "shoulder"
    ],
    "answer_index": 0
  },
  {
    "id": 182,
    "unit": "V",
    "topic": "Operations",
    "question": "Pre-blow helps form the bottle ____.",
    "options": [
      "shoulder",
      "bottom",
      "thread",
      "handle"
    ],
    "answer_index": 0
  },
  {
    "id": 183,
    "unit": "V",
    "topic": "Operations",
    "question": "Cooling time determines total ____ time.",
    "options": [
      "threading",
      "trimming",
      "cycle",
      "finishing"
    ],
    "answer_index": 2
  },
  {
    "id": 184,
    "unit": "V",
    "topic": "Operations",
    "question": "Trimming removes ____ material.",
    "options": [
      "excess",
      "label",
      "pigment",
      "air"
    ],
    "answer_index": 0
  },
  {
    "id": 185,
    "unit": "V",
    "topic": "Operations",
    "question": "Slow blowing may cause ____.",
    "options": [
      "extra gloss",
      "flash",
      "shrink",
      "sag marks"
    ],
    "answer_index": 3
  },
  {
    "id": 186,
    "unit": "V",
    "topic": "Apps",
    "question": "Carbonated drink bottles require strong ____ retention.",
    "options": [
      "N2",
      "O2",
      "H2O",
      "CO2"
    ],
    "answer_index": 3
  },
  {
    "id": 187,
    "unit": "V",
    "topic": "Apps",
    "question": "Cosmetic bottles require high-quality ____ finish.",
    "options": [
      "absorbent",
      "surface",
      "chemical",
      "thermal"
    ],
    "answer_index": 1
  },
  {
    "id": 188,
    "unit": "V",
    "topic": "Apps",
    "question": "Multilayer bottles are used to enhance ____ properties.",
    "options": [
      "electrical",
      "barrier",
      "ceramic",
      "metallic"
    ],
    "answer_index": 1
  },
  {
    "id": 189,
    "unit": "V",
    "topic": "Apps",
    "question": "Handle-ware bottles are typically made from ____.",
    "options": [
      "PS",
      "ABS",
      "PETG",
      "HDPE"
    ],
    "answer_index": 3
  },
  {
    "id": 190,
    "unit": "V",
    "topic": "Apps",
    "question": "Aseptic packaging requires ____ treatment.",
    "options": [
      "electroplating",
      "tempering",
      "annealing",
      "sterilization"
    ],
    "answer_index": 3
  },
  {
    "id": 191,
    "unit": "V",
    "topic": "Defects",
    "question": "Poor venting leads to ____.",
    "options": [
      "shrinkage",
      "overcooling",
      "thread mismatch",
      "air pockets"
    ],
    "answer_index": 3
  },
  {
    "id": 192,
    "unit": "V",
    "topic": "Defects",
    "question": "Excessively hot parison causes ____.",
    "options": [
      "freeze marks",
      "drop/sag",
      "thread slip",
      "cracking"
    ],
    "answer_index": 1
  },
  {
    "id": 193,
    "unit": "V",
    "topic": "Defects",
    "question": "Thread distortion occurs due to poor ____ cooling.",
    "options": [
      "neck",
      "base",
      "handle",
      "side"
    ],
    "answer_index": 0
  },
  {
    "id": 194,
    "unit": "V",
    "topic": "Defects",
    "question": "Bubbles form due to trapped ____.",
    "options": [
      "water",
      "resin",
      "pigment",
      "air"
    ],
    "answer_index": 3
  },
  {
    "id": 195,
    "unit": "V",
    "topic": "Defects",
    "question": "Flash is a defect caused by improper ____.",
    "options": [
      "cooling water",
      "mold closing",
      "die heating",
      "air blowing"
    ],
    "answer_index": 1
  },
  {
    "id": 196,
    "unit": "V",
    "topic": "QC",
    "question": "Burst testing ensures bottle ____.",
    "options": [
      "color",
      "shape",
      "odor",
      "strength"
    ],
    "answer_index": 3
  },
  {
    "id": 197,
    "unit": "V",
    "topic": "QC",
    "question": "Top-load testing checks ____ strength.",
    "options": [
      "compression",
      "tensile",
      "shear",
      "impact"
    ],
    "answer_index": 0
  },
  {
    "id": 198,
    "unit": "V",
    "topic": "QC",
    "question": "Torque testing involves measuring cap ____.",
    "options": [
      "heat retention",
      "label adhesion",
      "tightening/removal force",
      "impact strength"
    ],
    "answer_index": 2
  },
  {
    "id": 199,
    "unit": "V",
    "topic": "QC",
    "question": "Vision inspection systems detect ____ flaws.",
    "options": [
      "electrical",
      "chemical",
      "thermal",
      "surface"
    ],
    "answer_index": 3
  },
  {
    "id": 200,
    "unit": "V",
    "topic": "QC",
    "question": "Leak testing ensures there are no ____.",
    "options": [
      "labels",
      "threads",
      "holes",
      "scratches"
    ],
    "answer_index": 2
  }
]