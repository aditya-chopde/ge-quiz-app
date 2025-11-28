import json
import random

# --- The original JSON data you provided (PASTED HERE) ---
# NOTE: For brevity, I've truncated the data here. In the actual script, 
# ensure you paste the entire list of 100 questions between the triple quotes.
quiz_data_json = """
[
  {
    "id": 1,
    "unit": "IV",
    "topic": "Intro",
    "question": "Blow molding primarily produces ____.",
    "options": ["solid blocks", "hollow plastic parts", "metal rods", "laminated sheets"],
    "answer_index": 1
  },
  {
    "id": 2,
    "unit": "IV",
    "topic": "Intro",
    "question": "The main force used to shape the parison is ____.",
    "options": ["hydraulic pressure", "air pressure", "vacuum suction", "steam pressure"],
    "answer_index": 1
  },
  {
    "id": 3,
    "unit": "IV",
    "topic": "Intro",
    "question": "A common blow-molded item is ____.",
    "options": ["plastic sheet", "water bottle", "machine gear", "film roll"],
    "answer_index": 1
  },
  {
    "id": 4,
    "unit": "IV",
    "topic": "Intro",
    "question": "A major advantage of blow-molded packaging is ____.",
    "options": ["high stiffness", "metallic shine", "lightweight & leak-proof design", "extreme temperature resistance"],
    "answer_index": 2
  },
  {
    "id": 5,
    "unit": "IV",
    "topic": "Intro",
    "question": "Blow molding is NOT suitable for manufacturing ____.",
    "options": ["solid gears", "hollow jars", "detergent bottles", "milk cans"],
    "answer_index": 0
  },

  {
    "id": 6,
    "unit": "IV",
    "topic": "Types",
    "question": "The hollow tube formed before blowing is called ____. ",
    "options": ["preform", "runner", "parison", "slug"],
    "answer_index": 2
  },
  {
    "id": 7,
    "unit": "IV",
    "topic": "Types",
    "question": "Injection Blow Molding first creates a ____.",
    "options": ["bubble", "preform", "film", "sheet"],
    "answer_index": 1
  },
  {
    "id": 8,
    "unit": "IV",
    "topic": "Types",
    "question": "Stretch Blow Molding adds ____ to the blowing process.",
    "options": ["vibration", "axial & biaxial stretching", "chemical blowing agents", "vacuum suction"],
    "answer_index": 1
  },
  {
    "id": 9,
    "unit": "IV",
    "topic": "Types",
    "question": "Extrusion Blow Molding forms the parison using a ____.",
    "options": ["gate", "die head", "nozzle plate", "heater block"],
    "answer_index": 1
  },
  {
    "id": 10,
    "unit": "IV",
    "topic": "Types",
    "question": "SBM is most commonly used for ____ bottles.",
    "options": ["HDPE", "PET", "PVC", "LDPE"],
    "answer_index": 1
  },

  {
    "id": 11,
    "unit": "IV",
    "topic": "Machine",
    "question": "Pellets melt inside the ____.",
    "options": ["extruder barrel", "cooling unit", "mold cavity", "air ring"],
    "answer_index": 0
  },
  {
    "id": 12,
    "unit": "IV",
    "topic": "Machine",
    "question": "Air is blown into the parison using a ____.",
    "options": ["gate", "heater rod", "blow pin", "clamp arm"],
    "answer_index": 2
  },
  {
    "id": 13,
    "unit": "IV",
    "topic": "Machine",
    "question": "Final shape is obtained in the ____.",
    "options": ["hopper", "extruder", "mold cavity", "heater plate"],
    "answer_index": 2
  },
  {
    "id": 14,
    "unit": "IV",
    "topic": "Machine",
    "question": "Cooling water circulates through ____.",
    "options": ["mold channels", "hopper", "die lips", "screw core"],
    "answer_index": 0
  },
  {
    "id": 15,
    "unit": "IV",
    "topic": "Machine",
    "question": "Flash is removed during ____.",
    "options": ["extrusion", "deflashing", "air blowing", "reheating"],
    "answer_index": 1
  },

  {
    "id": 16,
    "unit": "IV",
    "topic": "Parison",
    "question": "Parison programming primarily controls ____.",
    "options": ["wall thickness", "bottle color", "mold cooling rate", "cycle time"],
    "answer_index": 0
  },
  {
    "id": 17,
    "unit": "IV",
    "topic": "Parison",
    "question": "The parison is best described as a ____.",
    "options": ["solid rod", "hollow tube", "foam block", "sheet ribbon"],
    "answer_index": 1
  },
  {
    "id": 18,
    "unit": "IV",
    "topic": "Parison",
    "question": "Die swell mainly affects ____.",
    "options": ["melt color", "parison thickness estimation", "cap thread pitch", "label strength"],
    "answer_index": 1
  },
  {
    "id": 19,
    "unit": "IV",
    "topic": "Parison",
    "question": "An eccentric die causes ____ walls.",
    "options": ["thick & even", "uneven", "extra shiny", "transparent"],
    "answer_index": 1
  },
  {
    "id": 20,
    "unit": "IV",
    "topic": "Parison",
    "question": "Parison temperature too high causes ____.",
    "options": ["drooling/sagging", "brittleness", "cracking", "unmelted particles"],
    "answer_index": 0
  },

  {
    "id": 21,
    "unit": "IV",
    "topic": "Materials",
    "question": "Milk bottles are commonly made from ____. ",
    "options": ["HDPE", "PET", "PVC", "PS"],
    "answer_index": 0
  },
  {
    "id": 22,
    "unit": "IV",
    "topic": "Materials",
    "question": "Squeezable bottles are usually made of ____. ",
    "options": ["PET", "LDPE", "Nylon", "ABS"],
    "answer_index": 1
  },
  {
    "id": 23,
    "unit": "IV",
    "topic": "Materials",
    "question": "Carbonated drink bottles primarily use ____.",
    "options": ["PVC", "PET", "HDPE", "PP"],
    "answer_index": 1
  },
  {
    "id": 24,
    "unit": "IV",
    "topic": "Materials",
    "question": "Jerry cans are generally made of ____.",
    "options": ["HDPE", "PMMA", "PS", "Nylon-6"],
    "answer_index": 0
  },
  {
    "id": 25,
    "unit": "IV",
    "topic": "Materials",
    "question": "Barrier layers like EVOH provide resistance against ____.",
    "options": ["oxygen", "heat", "UV light", "abrasion"],
    "answer_index": 0
  },

  {
    "id": 26,
    "unit": "V",
    "topic": "Mold",
    "question": "The parting line is the line where ____ meet.",
    "options": ["mold halves", "screw flights", "hopper gates", "cooling pipes"],
    "answer_index": 0
  },
  {
    "id": 27,
    "unit": "V",
    "topic": "Mold",
    "question": "Neck finish refers to the ____ portion of the bottle.",
    "options": ["thread/cap", "handle", "base", "shoulder"],
    "answer_index": 0
  },
  {
    "id": 28,
    "unit": "V",
    "topic": "Mold",
    "question": "Cooling channels help reduce ____.",
    "options": ["cycle time", "weight", "color fading", "thread wear"],
    "answer_index": 0
  },
  {
    "id": 29,
    "unit": "V",
    "topic": "Mold",
    "question": "Vents are used to remove ____.",
    "options": ["trapped air", "pigments", "moisture", "labels"],
    "answer_index": 0
  },
  {
    "id": 30,
    "unit": "V",
    "topic": "Mold",
    "question": "Pinch-off design mainly affects ____.",
    "options": ["bottom seal quality", "color shade", "thread size", "weight"],
    "answer_index": 0
  },

  {
    "id": 31,
    "unit": "V",
    "topic": "Operations",
    "question": "The first step in blow molding is ____.",
    "options": ["parison formation", "cooling", "trimming", "labeling"],
    "answer_index": 0
  },
  {
    "id": 32,
    "unit": "V",
    "topic": "Operations",
    "question": "Wall thickness is controlled by adjusting the ____. ",
    "options": ["die gap program", "mold vents", "air temperature", "flash cutter"],
    "answer_index": 0
  },
  {
    "id": 33,
    "unit": "V",
    "topic": "Operations",
    "question": "Too slow blowing results in ____.",
    "options": ["sag marks", "extra gloss", "thicker neck", "uniform walls"],
    "answer_index": 0
  },
  {
    "id": 34,
    "unit": "V",
    "topic": "Operations",
    "question": "High blow pressure helps reduce ____.",
    "options": ["uneven thickness", "cycle time", "flash", "base push-up"],
    "answer_index": 0
  },
  {
    "id": 35,
    "unit": "V",
    "topic": "Operations",
    "question": "Trimming removes the excess called ____.",
    "options": ["flash", "threads", "moisture", "additives"],
    "answer_index": 0
  },

  {
    "id": 36,
    "unit": "V",
    "topic": "Apps",
    "question": "Blow molded products include ____.",
    "options": ["bottles", "sheets", "metal cans", "wires"],
    "answer_index": 0
  },
  {
    "id": 37,
    "unit": "V",
    "topic": "Apps",
    "question": "Large tanks are typically made using ____.",
    "options": ["accumulator-type EBM", "IBM", "vacuum forming", "hand layup"],
    "answer_index": 0
  },
  {
    "id": 38,
    "unit": "V",
    "topic": "Apps",
    "question": "Multilayer bottles are used for improved ____.",
    "options": ["barrier properties", "gloss", "color uniformity", "label strength"],
    "answer_index": 0
  },
  {
    "id": 39,
    "unit": "V",
    "topic": "Apps",
    "question": "Cosmetic containers require high ____.",
    "options": ["surface finish", "density", "weight", "opacity"],
    "answer_index": 0
  },
  {
    "id": 40,
    "unit": "V",
    "topic": "Apps",
    "question": "Handle-ware detergent bottles are mostly made from ____. ",
    "options": ["HDPE", "PET", "PVC", "PS"],
    "answer_index": 0
  },

  {
    "id": 41,
    "unit": "V",
    "topic": "Defects",
    "question": "Uneven wall thickness occurs due to poor ____.",
    "options": ["parison control", "label adhesion", "cap fit", "mold polish"],
    "answer_index": 0
  },
  {
    "id": 42,
    "unit": "V",
    "topic": "Defects",
    "question": "Air entrapment results in ____.",
    "options": ["bubbles", "sink marks", "thread cracks", "excess gloss"],
    "answer_index": 0
  },
  {
    "id": 43,
    "unit": "V",
    "topic": "Defects",
    "question": "Flash is primarily caused by ____.",
    "options": ["mold not closing properly", "low die temperature", "too much cooling", "thin parison"],
    "answer_index": 0
  },
  {
    "id": 44,
    "unit": "V",
    "topic": "Defects",
    "question": "Bottom blow-through occurs when the parison is ____.",
    "options": ["too hot/thin", "too short", "over-cooled", "over-stretched"],
    "answer_index": 0
  },
  {
    "id": 45,
    "unit": "V",
    "topic": "Defects",
    "question": "Wavy threads on the neck are caused by poor ____.",
    "options": ["neck cooling", "material drying", "die heating", "color mixing"],
    "answer_index": 0
  },

  {
    "id": 46,
    "unit": "V",
    "topic": "QC",
    "question": "Burst pressure test checks ____.",
    "options": ["container strength", "label adhesion", "color tone", "cap torque"],
    "answer_index": 0
  },
  {
    "id": 47,
    "unit": "V",
    "topic": "QC",
    "question": "Top load test measures ____ resistance.",
    "options": ["compression", "impact", "torsion", "heat"],
    "answer_index": 0
  },
  {
    "id": 48,
    "unit": "V",
    "topic": "QC",
    "question": "Leak tests identify ____.",
    "options": ["holes", "color streaks", "label wrinkles", "flash"],
    "answer_index": 0
  },
  {
    "id": 49,
    "unit": "V",
    "topic": "QC",
    "question": "In-mold labeling places the label ____.",
    "options": ["inside the mold", "after cooling", "on the neck", "during trimming"],
    "answer_index": 0
  },
  {
    "id": 50,
    "unit": "V",
    "topic": "QC",
    "question": "Multilayer bottles mainly improve ____.",
    "options": ["barrier performance", "cap threads", "flash removal", "weight"],
    "answer_index": 0
  },
  {
    "id": 51,
    "unit": "IV",
    "topic": "Intro",
    "question": "Blow molding is mainly suitable for producing ____.",
    "options": ["hollow parts", "solid gears", "thick blocks", "extruded sheets"],
    "answer_index": 0
  },
  {
    "id": 52,
    "unit": "IV",
    "topic": "Intro",
    "question": "The blow ratio is the ratio of parison diameter to ____ diameter.",
    "options": ["final product", "die head", "neck ring", "cooling channel"],
    "answer_index": 0
  },
  {
    "id": 53,
    "unit": "IV",
    "topic": "Intro",
    "question": "Blow molding is a ____ forming process.",
    "options": ["thermoplastic", "metal", "ceramic", "thermoset-only"],
    "answer_index": 0
  },
  {
    "id": 54,
    "unit": "IV",
    "topic": "Intro",
    "question": "One major advantage of blow molding is ____.",
    "options": ["high production rate", "very heavy products", "high metal content", "zero flash"],
    "answer_index": 0
  },
  {
    "id": 55,
    "unit": "IV",
    "topic": "Intro",
    "question": "Blow molding offers excellent ____ for packaging applications.",
    "options": ["weight reduction", "weld strength", "thermal stability", "abrasion resistance"],
    "answer_index": 0
  },

  {
    "id": 56,
    "unit": "IV",
    "topic": "Types",
    "question": "Injection Blow Molding is preferred for ____ bottles.",
    "options": ["pharmaceutical", "fuel tanks", "food trays", "pipes"],
    "answer_index": 0
  },
  {
    "id": 57,
    "unit": "IV",
    "topic": "Types",
    "question": "In Stretch Blow Molding, bottles achieve higher strength due to ____. ",
    "options": ["biaxial orientation", "vacuum forming", "post-curing", "lamination"],
    "answer_index": 0
  },
  {
    "id": 58,
    "unit": "IV",
    "topic": "Types",
    "question": "Extrusion Blow Molding typically uses a ____ parison.",
    "options": ["hot extruded", "cold cut", "solid", "vacuum drawn"],
    "answer_index": 0
  },
  {
    "id": 59,
    "unit": "IV",
    "topic": "Types",
    "question": "Preform reheating is a step in ____.",
    "options": ["Stretch Blow Molding", "Extrusion Blow Molding", "Compression Molding", "Vacuum Forming"],
    "answer_index": 0
  },
  {
    "id": 60,
    "unit": "IV",
    "topic": "Types",
    "question": "IBM avoids flash formation at the ____.",
    "options": ["neck finish", "bottom", "shoulder", "body"],
    "answer_index": 0
  },

  {
    "id": 61,
    "unit": "IV",
    "topic": "Machine",
    "question": "The hopper is responsible for feeding ____.",
    "options": ["plastic pellets", "cooling water", "compressed air", "labels"],
    "answer_index": 0
  },
  {
    "id": 62,
    "unit": "IV",
    "topic": "Machine",
    "question": "The screw and barrel unit performs ____.",
    "options": ["melting & mixing", "purging only", "cooling only", "stretching"],
    "answer_index": 0
  },
  {
    "id": 63,
    "unit": "IV",
    "topic": "Machine",
    "question": "Leader pins in molds ensure proper ____.",
    "options": ["alignment", "cooling", "stretch ratio", "air filtration"],
    "answer_index": 0
  },
  {
    "id": 64,
    "unit": "IV",
    "topic": "Machine",
    "question": "Accumulator heads store melt for forming ____. ",
    "options": ["large parts", "small caps", "labels", "threads"],
    "answer_index": 0
  },
  {
    "id": 65,
    "unit": "IV",
    "topic": "Machine",
    "question": "The die head controls ____.",
    "options": ["parison thickness", "cap sealing", "surface printing", "drying time"],
    "answer_index": 0
  },

  {
    "id": 66,
    "unit": "IV",
    "topic": "Parison",
    "question": "Parison drop time affects ____.",
    "options": ["sagging and weight", "color tone", "thread quality", "labeling"],
    "answer_index": 0
  },
  {
    "id": 67,
    "unit": "IV",
    "topic": "Parison",
    "question": "A thicker bottom section prevents ____ failure.",
    "options": ["impact", "thermal", "UV", "chemical"],
    "answer_index": 0
  },
  {
    "id": 68,
    "unit": "IV",
    "topic": "Parison",
    "question": "Eccentric die gaps mainly cause ____.",
    "options": ["uneven parison", "flash removal", "neck accuracy", "label misfit"],
    "answer_index": 0
  },
  {
    "id": 69,
    "unit": "IV",
    "topic": "Parison",
    "question": "Parison programming is adjusted ____ extrusion.",
    "options": ["during", "after", "before cooling", "after packaging"],
    "answer_index": 0
  },
  {
    "id": 70,
    "unit": "IV",
    "topic": "Parison",
    "question": "Die lips wear over time causes ____ variation.",
    "options": ["thickness", "color", "cap torque", "odor"],
    "answer_index": 0
  },

  {
    "id": 71,
    "unit": "IV",
    "topic": "Materials",
    "question": "PP bottles are preferred for ____ applications.",
    "options": ["hot-fill", "carbonated", "UV-sensitive", "microwave only"],
    "answer_index": 0
  },
  {
    "id": 72,
    "unit": "IV",
    "topic": "Materials",
    "question": "Nylon layers in co-ex bottles add ____ barrier.",
    "options": ["fuel/solvent", "UV", "light", "thermal"],
    "answer_index": 0
  },
  {
    "id": 73,
    "unit": "IV",
    "topic": "Materials",
    "question": "PVC usage requires careful control of ____. ",
    "options": ["dehydrochlorination", "stretch ratio", "vibration", "flash temperature"],
    "answer_index": 0
  },
  {
    "id": 74,
    "unit": "IV",
    "topic": "Materials",
    "question": "Regrind content must be kept ____ for quality control.",
    "options": ["within limits", "as high as possible", "zero always", "random"],
    "answer_index": 0
  },
  {
    "id": 75,
    "unit": "IV",
    "topic": "Materials",
    "question": "EVOH is mainly used for ____ barrier.",
    "options": ["oxygen", "light", "UV", "impact"],
    "answer_index": 0
  },

  {
    "id": 76,
    "unit": "V",
    "topic": "Mold",
    "question": "Base push-up design enhances ____.",
    "options": ["standing stability", "color depth", "flash control", "odor control"],
    "answer_index": 0
  },
  {
    "id": 77,
    "unit": "V",
    "topic": "Mold",
    "question": "Handle-ware molds require additional ____.",
    "options": ["handle inserts", "coolant", "threads", "vents"],
    "answer_index": 0
  },
  {
    "id": 78,
    "unit": "V",
    "topic": "Mold",
    "question": "Neck ring accuracy ensures proper ____.",
    "options": ["cap sealing", "label glueing", "UV stability", "color mixing"],
    "answer_index": 0
  },
  {
    "id": 79,
    "unit": "V",
    "topic": "Mold",
    "question": "Insert changes allow quick ____ modifications.",
    "options": ["size", "color", "weight", "viscosity"],
    "answer_index": 0
  },
  {
    "id": 80,
    "unit": "V",
    "topic": "Mold",
    "question": "Vent marks appear due to improper ____.",
    "options": ["air escape", "cooling", "reheating", "filling"],
    "answer_index": 0
  },

  {
    "id": 81,
    "unit": "V",
    "topic": "Operations",
    "question": "Cycle time is mainly controlled by ____.",
    "options": ["cooling", "post trimming", "extruder size", "pigment load"],
    "answer_index": 0
  },
  {
    "id": 82,
    "unit": "V",
    "topic": "Operations",
    "question": "Deflashing removes excess material from the ____.",
    "options": ["parting line", "thread", "base", "shoulder"],
    "answer_index": 0
  },
  {
    "id": 83,
    "unit": "V",
    "topic": "Operations",
    "question": "Take-out timing is important to avoid ____.",
    "options": ["deformation", "UV exposure", "color shifting", "odor issues"],
    "answer_index": 0
  },
  {
    "id": 84,
    "unit": "V",
    "topic": "Operations",
    "question": "Pre-blow helps shape the ____ area.",
    "options": ["shoulder", "thread", "handle", "label panel"],
    "answer_index": 0
  },
  {
    "id": 85,
    "unit": "V",
    "topic": "Operations",
    "question": "Parison cut length directly affects container ____.",
    "options": ["weight", "color", "transparency", "odor"],
    "answer_index": 0
  },

  {
    "id": 86,
    "unit": "V",
    "topic": "Apps",
    "question": "Returnable water jars are made from ____. ",
    "options": ["PC/PP", "HDPE", "PVC", "PETG"],
    "answer_index": 0
  },
  {
    "id": 87,
    "unit": "V",
    "topic": "Apps",
    "question": "Hot-fill bottles use ____ materials.",
    "options": ["heat-set PET", "LDPE", "PVC", "ABS"],
    "answer_index": 0
  },
  {
    "id": 88,
    "unit": "V",
    "topic": "Apps",
    "question": "Sports bottles made by SBM usually use ____. ",
    "options": ["PET", "PVC", "ABS", "UHMWPE"],
    "answer_index": 0
  },
  {
    "id": 89,
    "unit": "V",
    "topic": "Apps",
    "question": "Bag-in-bottle packaging uses ____ structure.",
    "options": ["co-extruded", "monolayer", "fiber reinforced", "laminated paper"],
    "answer_index": 0
  },
  {
    "id": 90,
    "unit": "V",
    "topic": "Apps",
    "question": "PCR stands for ____.",
    "options": ["post-consumer recycled", "polymer chain reaction", "pressure cap resistance", "packaging compliance report"],
    "answer_index": 0
  },

  {
    "id": 91,
    "unit": "V",
    "topic": "Defects",
    "question": "Haze in PET bottles is often due to excess ____.",
    "options": ["crystallization", "cooling", "stretch", "extrusion speed"],
    "answer_index": 0
  },
  {
    "id": 92,
    "unit": "V",
    "topic": "Defects",
    "question": "Pearlescence in PET indicates poor ____.",
    "options": ["stretch ratio", "venting", "cooling", "material drying"],
    "answer_index": 0
  },
  {
    "id": 93,
    "unit": "V",
    "topic": "Defects",
    "question": "Scuff marks are usually formed during ____.",
    "options": ["handling", "cooling", "heating", "molding"],
    "answer_index": 0
  },
  {
    "id": 94,
    "unit": "V",
    "topic": "Defects",
    "question": "Paneling in hot-fill bottles is caused by ____ collapse.",
    "options": ["vacuum", "overpressure", "air flow", "labeling"],
    "answer_index": 0
  },
  {
    "id": 95,
    "unit": "V",
    "topic": "Defects",
    "question": "Thread ovality is corrected by improving ____.",
    "options": ["neck cooling", "die heating", "additive mixing", "color concentration"],
    "answer_index": 0
  },

  {
    "id": 96,
    "unit": "V",
    "topic": "QC",
    "question": "Top load failure indicates weak ____.",
    "options": ["compression strength", "UV resistance", "shear strength", "ductility"],
    "answer_index": 0
  },
  {
    "id": 97,
    "unit": "V",
    "topic": "QC",
    "question": "Leakage is detected using ____ testing.",
    "options": ["pressure", "X-ray", "ultrasound", "spark"],
    "answer_index": 0
  },
  {
    "id": 98,
    "unit": "V",
    "topic": "QC",
    "question": "CO2 loss in CSD bottles relates to ____.",
    "options": ["gas barrier", "density", "color", "UV exposure"],
    "answer_index": 0
  },
  {
    "id": 99,
    "unit": "V",
    "topic": "QC",
    "question": "A vision inspection system is used to detect ____.",
    "options": ["surface defects", "weight", "color percentage", "stretch rate"],
    "answer_index": 0
  },
  {
    "id": 100,
    "unit": "V",
    "topic": "QC",
    "question": "Recycled percentage in containers is a key ____ metric.",
    "options": ["sustainability", "optical", "thermal", "shock"],
    "answer_index": 0
  },
  {
    "id": 101,
    "unit": "IV",
    "topic": "Intro",
    "question": "Blow molding is best suited for producing ____ components.",
    "options": ["hollow", "solid", "foamed metal", "composite sheet"],
    "answer_index": 0
  },
  {
    "id": 102,
    "unit": "IV",
    "topic": "Intro",
    "question": "The blow molding process is mainly preferred due to its ____.",
    "options": ["high productivity", "high density", "need for metal molds", "heavy weight"],
    "answer_index": 0
  },
  {
    "id": 103,
    "unit": "IV",
    "topic": "Intro",
    "question": "Which of the following is a blow molded product?",
    "options": ["detergent bottle", "Teflon sheet", "steel rod", "thermoformed tray"],
    "answer_index": 0
  },
  {
    "id": 104,
    "unit": "IV",
    "topic": "Intro",
    "question": "The main application area of blow molding is ____.",
    "options": ["packaging", "car chassis", "electrical wiring", "metal plating"],
    "answer_index": 0
  },
  {
    "id": 105,
    "unit": "IV",
    "topic": "Intro",
    "question": "Blow molding produces parts that are ____.",
    "options": ["lightweight", "metallic", "multi-material", "thermoset"],
    "answer_index": 0
  },

  {
    "id": 106,
    "unit": "IV",
    "topic": "Types",
    "question": "Which process uses a preform before blowing?",
    "options": ["Injection Blow Molding", "Extrusion Blow Molding", "Compression Molding", "Vacuum Forming"],
    "answer_index": 0
  },
  {
    "id": 107,
    "unit": "IV",
    "topic": "Types",
    "question": "Which blow molding process gives the best dimensional accuracy?",
    "options": ["IBM", "EBM", "Rotational molding", "Thermoforming"],
    "answer_index": 0
  },
  {
    "id": 108,
    "unit": "IV",
    "topic": "Types",
    "question": "Biaxial stretching is used in ____.",
    "options": ["Stretch Blow Molding", "Extrusion Blow Molding", "Injection Blow Molding", "Casting"],
    "answer_index": 0
  },
  {
    "id": 109,
    "unit": "IV",
    "topic": "Types",
    "question": "Continuous parison extrusion is typical in ____.",
    "options": ["EBM", "IBM", "SBM", "TPM"],
    "answer_index": 0
  },
  {
    "id": 110,
    "unit": "IV",
    "topic": "Types",
    "question": "IBM is mostly used for ____ bottles.",
    "options": ["small pharmaceutical", "large fuel tanks", "oil drums", "PET jars"],
    "answer_index": 0
  },

  {
    "id": 111,
    "unit": "IV",
    "topic": "Machine",
    "question": "The barrel contains the ____.",
    "options": ["rotating screw", "cooling water", "air valve", "label plate"],
    "answer_index": 0
  },
  {
    "id": 112,
    "unit": "IV",
    "topic": "Machine",
    "question": "The screw's purpose is to ____.",
    "options": ["melt and push molten plastic", "provide vacuum", "cool the mold", "trim flash"],
    "answer_index": 0
  },
  {
    "id": 113,
    "unit": "IV",
    "topic": "Machine",
    "question": "Die swell occurs as the polymer exits the ____.",
    "options": ["die head", "hopper", "nozzle", "cooling tank"],
    "answer_index": 0
  },
  {
    "id": 114,
    "unit": "IV",
    "topic": "Machine",
    "question": "Which component shapes the parison?",
    "options": ["die", "hopper", "roller", "cutter"],
    "answer_index": 0
  },
  {
    "id": 115,
    "unit": "IV",
    "topic": "Machine",
    "question": "The mold halves are kept aligned using ____.",
    "options": ["leader pins", "valves", "strainers", "rollers"],
    "answer_index": 0
  },

  {
    "id": 116,
    "unit": "IV",
    "topic": "Parison",
    "question": "A parison is best described as a ____.",
    "options": ["hollow tube", "solid block", "foam mass", "film sheet"],
    "answer_index": 0
  },
  {
    "id": 117,
    "unit": "IV",
    "topic": "Parison",
    "question": "Parison control affects the final product's ____.",
    "options": ["wall thickness", "material shrinkage", "color", "cap fit"],
    "answer_index": 0
  },
  {
    "id": 118,
    "unit": "IV",
    "topic": "Parison",
    "question": "Thicker parison sections are programmed to avoid ____.",
    "options": ["neck thinning", "flash increase", "thread mismatch", "high gloss"],
    "answer_index": 0
  },
  {
    "id": 119,
    "unit": "IV",
    "topic": "Parison",
    "question": "Parison sagging occurs when ____.",
    "options": ["temperature is too high", "pressure is too high", "cooling is fast", "die gap is large"],
    "answer_index": 0
  },
  {
    "id": 120,
    "unit": "IV",
    "topic": "Parison",
    "question": "Wall thickness variations occur mainly due to ____.",
    "options": ["uneven die gap", "poor labeling", "cool water", "high torque"],
    "answer_index": 0
  },

  {
    "id": 121,
    "unit": "IV",
    "topic": "Materials",
    "question": "HDPE is commonly used for ____ bottles.",
    "options": ["milk", "soft drink", "cosmetic spray", "wine"],
    "answer_index": 0
  },
  {
    "id": 122,
    "unit": "IV",
    "topic": "Materials",
    "question": "EVOH is used for ____ barrier.",
    "options": ["oxygen", "oil", "UV", "heat"],
    "answer_index": 0
  },
  {
    "id": 123,
    "unit": "IV",
    "topic": "Materials",
    "question": "PET is preferred for beverage bottles due to its ____.",
    "options": ["clarity", "density", "high crystallinity", "foamability"],
    "answer_index": 0
  },
  {
    "id": 124,
    "unit": "IV",
    "topic": "Materials",
    "question": "PP is suitable for hot-fill applications because of its ____.",
    "options": ["high melting point", "low viscosity", "high density", "opacity"],
    "answer_index": 0
  },
  {
    "id": 125,
    "unit": "IV",
    "topic": "Materials",
    "question": "PVC requires careful processing due to ____.",
    "options": ["dehydrochlorination", "color shifting", "moisture absorption", "high shrinkage"],
    "answer_index": 0
  },

  {
    "id": 126,
    "unit": "V",
    "topic": "Mold",
    "question": "A tapered bottom helps in better ____.",
    "options": ["ejection", "cooling", "stretching", "lamination"],
    "answer_index": 0
  },
  {
    "id": 127,
    "unit": "V",
    "topic": "Mold",
    "question": "Cooling channels help maintain ____ temperature.",
    "options": ["mold", "air", "die head", "hopper"],
    "answer_index": 0
  },
  {
    "id": 128,
    "unit": "V",
    "topic": "Mold",
    "question": "Proper alignment prevents ____ defects.",
    "options": ["flash", "gloss", "shrink", "warpage"],
    "answer_index": 0
  },
  {
    "id": 129,
    "unit": "V",
    "topic": "Mold",
    "question": "Pinch-off land design ensures a proper ____.",
    "options": ["bottom seal", "label fit", "thread pitch", "gloss level"],
    "answer_index": 0
  },
  {
    "id": 130,
    "unit": "V",
    "topic": "Mold",
    "question": "Venting prevents ____ inside the mold.",
    "options": ["air traps", "melt fracture", "color change", "stretch marks"],
    "answer_index": 0
  },

  {
    "id": 131,
    "unit": "V",
    "topic": "Operations",
    "question": "Blow molding starts with ____.",
    "options": ["parison formation", "labeling", "post cooling", "trimming"],
    "answer_index": 0
  },
  {
    "id": 132,
    "unit": "V",
    "topic": "Operations",
    "question": "Flash is trimmed off during ____.",
    "options": ["deflashing", "stretching", "filling", "cooling"],
    "answer_index": 0
  },
  {
    "id": 133,
    "unit": "V",
    "topic": "Operations",
    "question": "Blow pressure ensures proper ____ formation.",
    "options": ["shape", "cooling", "curing", "thread design"],
    "answer_index": 0
  },
  {
    "id": 134,
    "unit": "V",
    "topic": "Operations",
    "question": "Thicker parison sections are required for ____.",
    "options": ["corners", "label areas", "threads", "shoulders"],
    "answer_index": 0
  },
  {
    "id": 135,
    "unit": "V",
    "topic": "Operations",
    "question": "Cycle time increases mainly due to ____.",
    "options": ["slow cooling", "lightweight parts", "more vents", "low pressure"],
    "answer_index": 0
  },

  {
    "id": 136,
    "unit": "V",
    "topic": "Apps",
    "question": "Fuel tanks are made using ____ HDPE.",
    "options": ["multilayer", "monolayer", "crosslinked", "unfilled"],
    "answer_index": 0
  },
  {
    "id": 137,
    "unit": "V",
    "topic": "Apps",
    "question": "Dairy bottles are usually made from ____.",
    "options": ["HDPE", "PET", "PVC", "PP"],
    "answer_index": 0
  },
  {
    "id": 138,
    "unit": "V",
    "topic": "Apps",
    "question": "Returnable PET jars require high ____ strength.",
    "options": ["impact", "thermal", "UV", "chemical"],
    "answer_index": 0
  },
  {
    "id": 139,
    "unit": "V",
    "topic": "Apps",
    "question": "Multilayer bottles are widely used for ____ packaging.",
    "options": ["food", "metals", "glassware", "leather"],
    "answer_index": 0
  },
  {
    "id": 140,
    "unit": "V",
    "topic": "Apps",
    "question": "SBM bottles for carbonated drinks require good ____ retention.",
    "options": ["CO2", "H2O", "O2", "N2"],
    "answer_index": 0
  },

  {
    "id": 141,
    "unit": "V",
    "topic": "Defects",
    "question": "Air bubbles in bottles indicate poor ____.",
    "options": ["venting", "cooling", "coloring", "mold polish"],
    "answer_index": 0
  },
  {
    "id": 142,
    "unit": "V",
    "topic": "Defects",
    "question": "Sink marks appear due to insufficient ____.",
    "options": ["cooling", "pressure", "stretching", "venting"],
    "answer_index": 0
  },
  {
    "id": 143,
    "unit": "V",
    "topic": "Defects",
    "question": "Bottom blow-through is caused by a ____ parison.",
    "options": ["thin", "cold", "short", "thick"],
    "answer_index": 0
  },
  {
    "id": 144,
    "unit": "V",
    "topic": "Defects",
    "question": "Orange peel surface is caused by ____.",
    "options": ["melt fracture", "overcooling", "moisture", "excess stretch"],
    "answer_index": 0
  },
  {
    "id": 145,
    "unit": "V",
    "topic": "Defects",
    "question": "Flash is caused by ____ clamp pressure.",
    "options": ["low", "high", "optimal", "variable"],
    "answer_index": 0
  },

  {
    "id": 146,
    "unit": "V",
    "topic": "QC",
    "question": "Burst pressure checks the ____ strength.",
    "options": ["internal", "external", "torsional", "shear"],
    "answer_index": 0
  },
  {
    "id": 147,
    "unit": "V",
    "topic": "QC",
    "question": "Drop test measures ____ resistance.",
    "options": ["impact", "thermal", "compression", "tensile"],
    "answer_index": 0
  },
  {
    "id": 148,
    "unit": "V",
    "topic": "QC",
    "question": "Torque test ensures proper ____ operation.",
    "options": ["cap removal", "product fill", "thread cutting", "mold clamping"],
    "answer_index": 0
  },
  {
    "id": 149,
    "unit": "V",
    "topic": "QC",
    "question": "Leak testing is commonly done using ____ pressure.",
    "options": ["air", "water", "steam", "vacuum"],
    "answer_index": 0
  },
  {
    "id": 150,
    "unit": "V",
    "topic": "QC",
    "question": "Vision systems primarily detect ____.",
    "options": ["surface defects", "weight", "density", "cooling rate"],
    "answer_index": 0
  },
  {
    "id": 151,
    "unit": "IV",
    "topic": "Intro",
    "question": "Blow molding is preferred because it can produce parts with ____.",
    "options": ["uniform thin walls", "metallic structure", "solid cores", "zero air usage"],
    "answer_index": 0
  },
  {
    "id": 152,
    "unit": "IV",
    "topic": "Intro",
    "question": "A key benefit of blow-molded bottles is ____.",
    "options": ["low weight", "high density", "metal reinforcement", "manual trimming"],
    "answer_index": 0
  },
  {
    "id": 153,
    "unit": "IV",
    "topic": "Intro",
    "question": "Blow molding is mainly used in ____ industries.",
    "options": ["packaging", "metal casting", "electronics", "composites"],
    "answer_index": 0
  },
  {
    "id": 154,
    "unit": "IV",
    "topic": "Intro",
    "question": "A common example of a blow-molded product is ____.",
    "options": ["shampoo bottle", "steel plate", "glass sheet", "wooden mold"],
    "answer_index": 0
  },
  {
    "id": 155,
    "unit": "IV",
    "topic": "Intro",
    "question": "Blow molding relies mainly on ____ pressure.",
    "options": ["air", "steam", "water", "vacuum"],
    "answer_index": 0
  },

  {
    "id": 156,
    "unit": "IV",
    "topic": "Types",
    "question": "Extrusion blow molding forms parisons using a ____.",
    "options": ["die head", "vacuum plate", "gate sprue", "roller"],
    "answer_index": 0
  },
  {
    "id": 157,
    "unit": "IV",
    "topic": "Types",
    "question": "Injection Blow Molding uses a preform made in a ____.",
    "options": ["injection mold", "vacuum mold", "sheet die", "roller mold"],
    "answer_index": 0
  },
  {
    "id": 158,
    "unit": "IV",
    "topic": "Types",
    "question": "Stretch Blow Molding gives higher bottle strength due to ____.",
    "options": ["biaxial stretching", "slow cooling", "metal inserts", "pressure drops"],
    "answer_index": 0
  },
  {
    "id": 159,
    "unit": "IV",
    "topic": "Types",
    "question": "Which process avoids flash at the neck?",
    "options": ["IBM", "SBM", "EBM", "RIM"],
    "answer_index": 0
  },
  {
    "id": 160,
    "unit": "IV",
    "topic": "Types",
    "question": "Fuel tanks are made using ____ blow molding.",
    "options": ["accumulator-type EBM", "IBM", "sheet forming", "compression molding"],
    "answer_index": 0
  },

  {
    "id": 161,
    "unit": "IV",
    "topic": "Machine",
    "question": "Which part provides molten polymer pressure?",
    "options": ["screw", "clamp arm", "label roll", "hopper"],
    "answer_index": 0
  },
  {
    "id": 162,
    "unit": "IV",
    "topic": "Machine",
    "question": "The mold cavity shapes the final ____.",
    "options": ["product", "pellets", "coolant", "air valves"],
    "answer_index": 0
  },
  {
    "id": 163,
    "unit": "IV",
    "topic": "Machine",
    "question": "Mold cooling is critical because it reduces ____.",
    "options": ["cycle time", "melt pressure", "airflow", "pigment load"],
    "answer_index": 0
  },
  {
    "id": 164,
    "unit": "IV",
    "topic": "Machine",
    "question": "A blow pin supplies ____.",
    "options": ["air", "melt", "coolant", "vacuum"],
    "answer_index": 0
  },
  {
    "id": 165,
    "unit": "IV",
    "topic": "Machine",
    "question": "Die gap adjustment directly affects ____.",
    "options": ["wall thickness", "color uniformity", "neck diameter", "handle size"],
    "answer_index": 0
  },

  {
    "id": 166,
    "unit": "IV",
    "topic": "Parison",
    "question": "A parison is a ____ of molten plastic.",
    "options": ["hollow tube", "solid rod", "granulated sheet", "cold slug"],
    "answer_index": 0
  },
  {
    "id": 167,
    "unit": "IV",
    "topic": "Parison",
    "question": "Parison thickness depends on the ____.",
    "options": ["die gap", "flash width", "color", "mold base"],
    "answer_index": 0
  },
  {
    "id": 168,
    "unit": "IV",
    "topic": "Parison",
    "question": "Parison sagging is prevented by controlling ____.",
    "options": ["temperature", "cooling rate", "trim speed", "label finish"],
    "answer_index": 0
  },
  {
    "id": 169,
    "unit": "IV",
    "topic": "Parison",
    "question": "Die swell increases parison ____.",
    "options": ["diameter", "color", "clarity", "odor"],
    "answer_index": 0
  },
  {
    "id": 170,
    "unit": "IV",
    "topic": "Parison",
    "question": "Poor parison control leads to ____.",
    "options": ["uneven wall thickness", "better clarity", "uniform color", "stronger neck"],
    "answer_index": 0
  },

  {
    "id": 171,
    "unit": "IV",
    "topic": "Materials",
    "question": "PET is widely used for ____ bottles.",
    "options": ["beverages", "milk", "lubricants", "detergents"],
    "answer_index": 0
  },
  {
    "id": 172,
    "unit": "IV",
    "topic": "Materials",
    "question": "HDPE bottles have excellent ____ resistance.",
    "options": ["chemical", "UV", "thermal", "electrical"],
    "answer_index": 0
  },
  {
    "id": 173,
    "unit": "IV",
    "topic": "Materials",
    "question": "Multilayer bottles often include ____ layers.",
    "options": ["EVOH", "nylon", "wood fiber", "glass"],
    "answer_index": 0
  },
  {
    "id": 174,
    "unit": "IV",
    "topic": "Materials",
    "question": "LDPE is mainly used for ____ bottles.",
    "options": ["squeezable", "pressurized", "fuel", "glass-like"],
    "answer_index": 0
  },
  {
    "id": 175,
    "unit": "IV",
    "topic": "Materials",
    "question": "PP bottles are suitable for ____ applications.",
    "options": ["hot-fill", "carbonated", "freezing", "abrasive"],
    "answer_index": 0
  },

  {
    "id": 176,
    "unit": "V",
    "topic": "Mold",
    "question": "The parting line is created when ____.",
    "options": ["mold halves meet", "air is blown", "cooling starts", "interlock seals open"],
    "answer_index": 0
  },
  {
    "id": 177,
    "unit": "V",
    "topic": "Mold",
    "question": "Neck finish ensures proper ____ attachment.",
    "options": ["cap", "label", "handle", "base"],
    "answer_index": 0
  },
  {
    "id": 178,
    "unit": "V",
    "topic": "Mold",
    "question": "Pinch-off design strengthens the ____.",
    "options": ["bottom weld", "shoulder weld", "thread", "neck ring"],
    "answer_index": 0
  },
  {
    "id": 179,
    "unit": "V",
    "topic": "Mold",
    "question": "Cooling channels prevent ____.",
    "options": ["warping", "crystallization", "flash", "thread slip"],
    "answer_index": 0
  },
  {
    "id": 180,
    "unit": "V",
    "topic": "Mold",
    "question": "Vent marks arise due to poor ____.",
    "options": ["air escape", "color mixing", "thread cutting", "mold polish"],
    "answer_index": 0
  },

  {
    "id": 181,
    "unit": "V",
    "topic": "Operations",
    "question": "Flash forms at the ____.",
    "options": ["parting line", "base", "neck", "shoulder"],
    "answer_index": 0
  },
  {
    "id": 182,
    "unit": "V",
    "topic": "Operations",
    "question": "Pre-blow helps form the bottle ____.",
    "options": ["shoulder", "thread", "handle", "bottom"],
    "answer_index": 0
  },
  {
    "id": 183,
    "unit": "V",
    "topic": "Operations",
    "question": "Cooling time determines total ____ time.",
    "options": ["cycle", "finishing", "threading", "trimming"],
    "answer_index": 0
  },
  {
    "id": 184,
    "unit": "V",
    "topic": "Operations",
    "question": "Trimming removes ____ material.",
    "options": ["excess", "pigment", "label", "air"],
    "answer_index": 0
  },
  {
    "id": 185,
    "unit": "V",
    "topic": "Operations",
    "question": "Slow blowing may cause ____.",
    "options": ["sag marks", "flash", "extra gloss", "shrink"],
    "answer_index": 0
  },

  {
    "id": 186,
    "unit": "V",
    "topic": "Apps",
    "question": "Carbonated drink bottles require strong ____ retention.",
    "options": ["CO2", "N2", "H2O", "O2"],
    "answer_index": 0
  },
  {
    "id": 187,
    "unit": "V",
    "topic": "Apps",
    "question": "Cosmetic bottles require high-quality ____ finish.",
    "options": ["surface", "thermal", "chemical", "absorbent"],
    "answer_index": 0
  },
  {
    "id": 188,
    "unit": "V",
    "topic": "Apps",
    "question": "Multilayer bottles are used to enhance ____ properties.",
    "options": ["barrier", "metallic", "electrical", "ceramic"],
    "answer_index": 0
  },
  {
    "id": 189,
    "unit": "V",
    "topic": "Apps",
    "question": "Handle-ware bottles are typically made from ____.",
    "options": ["HDPE", "PS", "PETG", "ABS"],
    "answer_index": 0
  },
  {
    "id": 190,
    "unit": "V",
    "topic": "Apps",
    "question": "Aseptic packaging requires ____ treatment.",
    "options": ["sterilization", "annealing", "electroplating", "tempering"],
    "answer_index": 0
  },

  {
    "id": 191,
    "unit": "V",
    "topic": "Defects",
    "question": "Poor venting leads to ____.",
    "options": ["air pockets", "shrinkage", "overcooling", "thread mismatch"],
    "answer_index": 0
  },
  {
    "id": 192,
    "unit": "V",
    "topic": "Defects",
    "question": "Excessively hot parison causes ____.",
    "options": ["drop/sag", "cracking", "freeze marks", "thread slip"],
    "answer_index": 0
  },
  {
    "id": 193,
    "unit": "V",
    "topic": "Defects",
    "question": "Thread distortion occurs due to poor ____ cooling.",
    "options": ["neck", "base", "side", "handle"],
    "answer_index": 0
  },
  {
    "id": 194,
    "unit": "V",
    "topic": "Defects",
    "question": "Bubbles form due to trapped ____.",
    "options": ["air", "water", "pigment", "resin"],
    "answer_index": 0
  },
  {
    "id": 195,
    "unit": "V",
    "topic": "Defects",
    "question": "Flash is a defect caused by improper ____.",
    "options": ["mold closing", "air blowing", "cooling water", "die heating"],
    "answer_index": 0
  },

  {
    "id": 196,
    "unit": "V",
    "topic": "QC",
    "question": "Burst testing ensures bottle ____.",
    "options": ["strength", "color", "odor", "shape"],
    "answer_index": 0
  },
  {
    "id": 197,
    "unit": "V",
    "topic": "QC",
    "question": "Top-load testing checks ____ strength.",
    "options": ["compression", "tensile", "shear", "impact"],
    "answer_index": 0
  },
  {
    "id": 198,
    "unit": "V",
    "topic": "QC",
    "question": "Torque testing involves measuring cap ____.",
    "options": ["tightening/removal force", "impact strength", "heat retention", "label adhesion"],
    "answer_index": 0
  },
  {
    "id": 199,
    "unit": "V",
    "topic": "QC",
    "question": "Vision inspection systems detect ____ flaws.",
    "options": ["surface", "thermal", "electrical", "chemical"],
    "answer_index": 0
  },
  {
    "id": 200,
    "unit": "V",
    "topic": "QC",
    "question": "Leak testing ensures there are no ____.",
    "options": ["holes", "labels", "threads", "scratches"],
    "answer_index": 0
  }
]

"""
# --- End of Original JSON Data ---

# Define the output file name
OUTPUT_FILENAME = 'randomized_quiz_data.json'

# Load the JSON data
quiz_list = json.loads(quiz_data_json)

# Process the randomization
print(f"🔄 Processing {len(quiz_list)} questions...")
randomized_quiz_list = []
for question in quiz_list:
    # 1. Get the current correct answer (based on the original index 0)
    # This assumes the original data had the correct answer consistently at index 0.
    correct_answer = question['options'][question['answer_index']]

    # 2. Get the options list
    options = question['options']

    # 3. Shuffle the options list in place
    random.shuffle(options)

    # 4. Find the new index of the correct answer
    try:
        new_answer_index = options.index(correct_answer)
    except ValueError:
        print(f"Error: Correct answer '{correct_answer}' not found in shuffled options for ID {question['id']}. Skipping.")
        continue # Skip to the next question if an error occurs

    # 5. Update the question object
    question['options'] = options
    question['answer_index'] = new_answer_index

    randomized_quiz_list.append(question)

# Convert the final list back to a formatted JSON string
final_json_output = json.dumps(randomized_quiz_list, indent=2)

# Save the final JSON to a file
try:
    with open(OUTPUT_FILENAME, 'w') as f:
        f.write(final_json_output)
    print(f"✅ Success! Updated data saved to '{OUTPUT_FILENAME}'")
    print(f"Total questions processed: {len(randomized_quiz_list)}")
except Exception as e:
    print(f"❌ An error occurred while writing the file: {e}")