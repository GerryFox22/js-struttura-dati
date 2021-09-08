

let card = {

    name : "Anaba Shaman",

    evocationPoints : {

        baseCost : 3,
        white : 0,
        ublue : 0,
        black : 0,
        red : 1,
        green : 0,
    },

    cardType : "Creature", 
    cardSpecificType : "Shaman", 

    expansion : {

        editionNumber : 9,
        rarity : "comune",
        collectionNumber : 350,
    },

    cardNumber : 172,

    quote : {
        author : "Simon Bisley",
        quoteText : "Just try taking this bull by the horns.",
    },


    ability : [

        {
           
        },


        {

        },


        {

        },
    ]
    






 






    calculatorCost : function() {
        let sum = 0;
        for (let type in this.evocationPoints) {
            sum += this.evocationPoints[type];
        }
        return sum;
    }


}

// console.log(card.evocationPoints)