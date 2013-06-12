var myPTE = [
    {number: 1, letter: "H", name: "Hydrogen", mass :1.008, period:1, group:1 },
    {number: 2, letter: "He", name: "Helium", mass:4.003, period:1, group:18},
    {number: 3, letter: "Li", name: "Lithium", mass:6.941, period:2, group:1},
    {number: 4, letter: "Be", name: "Beryllium", mass:9.012, period:2, group:2},
    {number: 5, letter: "B", name: "Boron", mass:10.811, period:2, group:13},
    {number: 6, letter: "C", name: "Carbon", mass:12.011, period:2, group:14},
    {number: 7, letter: "N", name: "Nitrogen", mass:14.007, period:2, group:15},
    {number: 8, letter: "O", name: "Oxygen", mass:15.999, period:2, group:16},
    {number: 9, letter: "F", name: "Fluorine", mass:18.998, period:2, group:17},
    {number: 10, letter: "Ne", name: "Neon", mass:20.180, period:2, group:18},
    {number: 11, letter: "Na", name: "Sodium", mass:22.990, period:3, group:1},
    {number: 12, letter: "Mg", name: "Magnesium", mass:24.305, period:3, group:2},
    {number: 13, letter: "Al", name: "Aluminium", mass:26.982, period:3, group:13},
    {number: 14, letter: "Si", name: "Silicon", mass:28.086, period:3, group:14},
    {number: 15, letter: "P", name: "Phosphorous", mass:30.974, period:3, group:15},
    {number: 16, letter: "S", name: "Sulfur", mass:32.065, period:3, group:16},
    {number: 17, letter: "Cl", name: "Chlorine", mass:35.453, period:3, group:17},
    {number: 18, letter: "Ar", name: "Argon", mass:39.948, period: 3, group:18},
    {number: 19, letter: "K", name: "Potassium", mass:39.098, period:4, group:1},
    {number: 20, letter: "Ca", name: "Calcium", mass:40.078, period:4, group:2},
    {number: 21, letter: "Sc", name: "Scandium", mass:44.956, period:4, group:3},
    {number: 22, letter: "Ti", name: "Titanium", mass:47.867, period:4, group:4},
    {number: 23, letter: "V", name: "Vanadium", mass:50.942, period:4, group:5},
    {number: 24, letter: "Cr", name: "Chromium", mass:51.996, period:4, group:6},
    {number: 25, letter: "Mn", name: "Manganese", mass:54.938, period:4, group:7},
    {number: 26, letter: "Fe", name: "Iron", mass:55.845, period:4, group:8},
    {number: 27, letter: "Co", name: "Cobolt", mass:58.933, period:4, group:9},
    {number: 28, letter: "Ni", name: "Nickel", mass:58.693, period:4, group:10},
    {number: 29, letter: "Cu", name: "Copper", mass:63.546, period:4, group:11},
    {number: 30, letter: "Zn", name: "Zinc", mass:65.380, period:4, group:12},
    {number: 31, letter: "Ga", name: "Gallium", mass:69.723, period:4, group:13},
    {number: 32, letter: "Ge", name: "Germanium", mass:72.640, period:4, group:14},
    {number: 33, letter: "As", name: "Arsenic", mass:74.922, period:4, group:15},
    {number: 34, letter: "Se", name: "Selenium", mass:78.960, period:4, group:16},
    {number: 35, letter: "Br", name: "Bromine", mass:79.904, period:4, group:17},
    {number: 36, letter: "Kr", name: "Krypton", mass:83.798, period:4, group:18},
    {number: 37, letter: "Rb", name: "Rubidium", mass:85.468, period:5, group:1},
    {number: 38, letter: "Sr", name: "Strontium", mass:87.620, period:5, group:2},
    {number: 39, letter: "Y", name: "Yttrium", mass:88.906, period:5, group:3},
    {number: 40, letter: "Zr", name: "Zirconium", mass:91.224, period:5, group:4},
    {number: 41, letter: "Nb", name: "Niobium", mass:92.906, period:5, group:5},
    {number: 42, letter: "Mo", name: "Molybdenum", mass:95.960, period:5, group:6},
    {number: 43, letter: "Tc", name: "Technetium", mass:(97.907), period:5, group:7},
    {number: 44, letter: "Ru", name: "Ruthenium", mass:101.070, period:5, group:8},
    {number: 45, letter: "Rh", name: "Rhodium", mass:102.906, period:5, group:9},
    {number: 46, letter: "Pd", name: "Palladium", mass:106.42, period:5, group:10},
    {number: 47, letter: "Ag", name: "Silver", mass:107.868, period:5, group:11},
    {number: 48, letter: "Cd", name: "Cadmium", mass:112.411, period:5, group:12},
    {number: 49, letter: "In", name: "Indium", mass:114.818, period:5, group:13},
    {number: 50, letter: "Sn", name: "Tin", mass:118.710, period:5, group:14},
    {number: 51, letter: "Sb", name: "Antimony", mass:121.760, period:5, group:15},
    {number: 52, letter: "Te", name: "Tellurium", mass:127.600, period:5, group:16},
    {number: 53, letter: "I", name: "Iodine", mass:126.904, period:5, group:17},
    {number: 54, letter: "Xe", name: "Xenon", mass:131.293, period:5, group:18},
    {number: 55, letter: "Cs", name: "Cesium", mass:132.905, period:6, group:1},
    {number: 56, letter: "Ba", name: "Barium", mass:137.327, period:6, group:2},
    {number: 57-71, letter: "", name: "Lathanides", mass:0, period:6, group:3},
    {number: 72, letter: "Hf", name: "Hafnium", mass:178.490, period:6, group:4},
    {number: 73, letter: "Ta", name: "Tantalum", mass:180.948, period:6, group:5},
    {number: 74, letter: "W", name: "Tungsten", mass:183.840, period:6, group:6},
    {number: 75, letter: "Re", name: "Rhenium", mass:186.207, period:6, group:7},
    {number: 76, letter: "Os", name: "Osmium", mass:190.230, period:6, group:8},
    {number: 77, letter: "Ir", name: "Iridium", mass:192.217, period:6, group:9},
    {number: 78, letter: "Pt", name: "Platinum", mass:195.084, period:6, group:10},
    {number: 79, letter: "Au", name: "Gold", mass:196.967, period:6, group:11},
    {number: 80, letter: "Hg", name: "Mercury", mass:200.590, period:6, group:12},
    {number: 81, letter: "Tl", name: "Thallium", mass:204.383, period:6, group:13},
    {number: 82, letter: "Pb", name: "Lead", mass:207.200, period:6, group:14},
    {number: 83, letter: "Bi", name: "Bismuth", mass:208.980, period:6, group:15},
    {number: 84, letter: "Po", name: "Polonium", mass:(209.982), period:6, group:16},
    {number: 85, letter: "At", name: "Astaine", mass:(209.987), period:6, group:17},
    {number: 86, letter: "Rn", name: "Radon", mass:(222.018), period:6, group:18},
    {number: 87, letter: "Fr", name: "Francium", mass:(223), period:7, group:1},
    {number: 88, letter: "Ra", name: "Radium", mass:(226), period:7, group:2},
    {number: 89-103, letter: "", name: "Actinides", mass:0, period:7, group:3},
    {number: 104, letter: "Rf", name: "Rutherfordium", mass:(267), period:7, group:4},
    {number: 105, letter: "Db", name: "Dubnium", mass:(268), period:7, group:5},
    {number: 106, letter: "Sg", name: "Seaborgium", mass:(271), period:7, group:6},
    {number: 107, letter: "Bh", name: "Bohrium", mass:(272), period:7, group:7},
    {number: 108, letter: "Hs", name: "Hassium", mass:(270), period:7, group:8},
    {number: 109, letter: "Mt", name: "Meitnerium", mass:(276), period:7, group:9},
    {number: 110, letter: "Ds", name: "Darmstadium", mass:(281), period:7, group:10},
    {number: 111, letter: "Rg", name: "Roentgenium", mass:(280), period:7, group:11},
    {number: 112, letter: "Cn", name: "Copernicium", mass:(285), period:7, group:12},
    {number: 113, letter: "Uut", name: "(Ununtrium)", mass:(284), period:7, group:13},
    {number: 114, letter: "Fl", name: "Flerovium", mass:(289), period:7, group:14},
    {number: 115, letter: "Uup", name: "(Ununpentium)", mass:(288), period:7, group:15},
    {number: 116, letter: "Lv", name: "Livermorium", mass:(293), period:7, group:16},
    {number: 117, letter: "Uus", name: "(Ununseptium)", mass:(294), period:7, group:17},
    {number: 118, letter: "Uuo", name: "(Ununoctium)", mass:(294), period:7, group:18}

]

var myPTE2 = [
    {number: 57-71, letter: "", name: "", mass:0, period:1, group:1},
    {number: 57, letter: "La", name: "Lanthanum", mass:138.905, period:1, group:2},
    {number: 58, letter: "Ce", name: "Cerium", mass:140.116, period:1, group:3},
    {number: 59, letter: "Pr", name: "Praseodymium", mass:140.908, period:1, group:4},
    {number: 60, letter: "Nd", name: "Neodymium", mass:144.242, period:1, group:5},
    {number: 61, letter: "Pm", name: "Promethium", mass:(145), period:1, group:6},
    {number: 62, letter: "Sm", name: "Samarium", mass:(150.360), period:1, group:7},
    {number: 63, letter: "Eu", name: "Europium", mass:151.964, period:1, group:8},
    {number: 64, letter: "Gd", name: "Gadolinium", mass:157.250, period:1, group:9},
    {number: 65, letter: "Tb", name: "Terbium", mass:158.925, period:1, group:10},
    {number: 66, letter: "Dy", name: "Dysprosium", mass:162.500, period:1, group:11},
    {number: 67, letter: "Ho", name: "Holmium", mass:164.930, period:1, group:12},
    {number: 68, letter: "Er", name: "Erbium", mass:167.259, period:1, group:13},
    {number: 69, letter: "Tm", name: "Thulium", mass:168.934, period:1, group:14},
    {number: 70, letter: "Yb", name: "Ytterbium", mass:173.054, period:1, group:15},
    {number: 71, letter: "Lu", name: "Luterium", mass:174.967, period:1, group:16},
    {number: 89-103, letter: "", name: "", mass:0, period:2, group:1},
    {number: 89, letter: "Ac", name: "Actinium", mass:(227), period:2, group:2},
    {number: 90, letter: "Th", name: "Thorium", mass:232.038, period:2, group:3},
    {number: 91, letter: "Pa", name: "Protactinium", mass:231.036, period:2, group:4},
    {number: 92, letter: "U", name: "Uranium", mass:238.029, period:2, group:5},
    {number: 93, letter: "Np", name: "Neptunium", mass:(273), period:2, group:6},
    {number: 94, letter: "Pu", name: "Plutonium", mass:(244), period:2, group:7},
    {number: 95, letter: "Am", name: "Americium", mass:(243), period:2, group:8},
    {number: 96, letter: "Cm", name: "Curium", mass:(247), period:2, group:9},
    {number: 97, letter: "Bk", name: "Berkelium", mass:(247), period:2, group:10},
    {number: 98, letter: "Cf", name: "Californium", mass:(251), period:2, group:11},
    {number: 99, letter: "Es", name: "Einstienium", mass:(252), period:2, group:12},
    {number: 100, letter: "Fm", name: "Fermium", mass:(257), period:2, group:13},
    {number: 101, letter: "Md", name: "Mendelevium", mass:(258), period:2, group:14},
    {number: 102, letter: "No", name: "Nobelium", mass:(259), period:2, group:15},
    {number: 103, letter: "Lr", name: "Lawrencium", mass:(262), period:2, group:16}
]
var row = 1;
var el = 0;
console.log("row" + row++);
for(i = 0; i < 2; i++){
    console.log(myPTE[el].letter);
}

for(i = 0; i < 2; i++){
    console.log("row" + row++);
    for(j = 0; j < 8; j++){
        console.log(myPTE[el++].letter);
    }
}

for(i = 0; i < 4; i++){
    console.log("row" + row++);
    for(j = 0; j < 18; j++){
        console.log(myPTE[el++].letter);
    }
};

var el = 0

for(i = 0; i < 2; i++){
    console.log("row" + row++);
    for(j = 0; j < 15; j++){
        console.log(myPTE2[el].letter);
    }
}

