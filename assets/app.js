// document.write("Hello World")

// alert("Hello and welcome to my Website!")

let breakRoom = {

    deckCase: {
        color: "white",
        size: "med",
        contents: [
            {
                cards: {
                    color: "white",
                    cardProtector: "black",
                    attack: {
                        quantity: "30",
                    },
                    defense: {
                        quantity: "30",
                    },
                    special: {
                        quantity: "30"
                    }
                }
            }
        ]
    },
    napkin: {
        texture: "rough",
        color: "white",
        materials:
        {
            main: "wood",
            secondary: "water",
            adhesive: {
                materials:
                {
                    main: "oyster spit",
                    secondary: "unicorn hoof powder"
                }

            }
        }

    },
    mayo: {
        color: "white",
        texture: "creamy",
        ingredients: ["soybean", "water", "liquid whole egg", "ect.."]
    }
}



var sentence = `In the breakroom I found a ${breakRoom.deckCase.color} deckCase. Next to it was a ${breakRoom.napkin.color} napkin. The napkin was ${breakRoom.napkin.texture}, because it was compsed of ${breakRoom.napkin.materials.main} and ${breakRoom.napkin.materials.secondary}. The ${breakRoom.mayo.texture} texture of mayo is probably from the ${breakRoom.mayo.ingredients[2]}.`

console.log(sentence);
console.clear();

var myName = "Michael Green";
console.log(myName.toUpperCase());
console.clear();

var x = 10;
// document.write(x);
console.log(x);
console.clear();

var price = 55.55;
// document.write(price);

var name = " Michael";
var text = "My name is";
console.log(text+name)
console.clear()

// var sayHello = 'Hello world!\ I am a Javascript Programmer\';
// document.write(sayHello);
// \escape() 
// ask questions about this


