

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
        rarity : "common",
        collectionNumber : 350,
    },

    cardNumber : 172,

    flavorText : {
        author : "Jerry",
        quote : "Just try taking this bull by the horns.",
    },


    ability : [
        {
           manaCost : {

                baseCost : 3,
                white : 0,
                ublue : 0,
                black : 0,
                red : 1,
                green : 0,
            },

            abilityDescription : "Anaba Shaman deals 1 damage to target creature or player",
        },
        {
            manaCost : {
 
                 baseCost : 0,
                 white : 0,
                 ublue : 1,
                 black : 1,
                 red : 1,
                 green : 0,
             },
 
             abilityDescription : "Anaba Shaman deals 25 damage to target creature or player",
         },
         {
            manaCost : {
 
                 baseCost : 0,
                 white : 0,
                 ublue : 0,
                 black : 0,
                 red : 4,
                 green : 0,
             },
 
             abilityDescription : "Anaba Shaman deals 100 damage to target creature or player"
         },
    ],

    artist : {
        name : "Simon",
        surname : "Bisley",
        birthday : "12/12/1994",
        birthPlace : "London",
    },

    force : 2,
    costitution : 2,
    border : "white",

    cardImg: "img/magiCard.jpg",
    
    // Funzione che effettua la somma del mana necessario all'evocazione
    calculatorCost :function() {
        let sum = 0;
        for (let type in this.evocationPoints) {
            sum += this.evocationPoints[type];
        }
        return sum;
    }


}

// console.log(card.calculatorCost())


let abilityContent = "<strong>No abilities avaiable</strong>";
if (card.ability.length != 0) {
    abilityContent = "<ul>";
    for (let i = 0; i < card.ability.length; i++){
        let singleAbility = card.ability[i];
        abilityContent += `<li>Description : ${singleAbility.abilityDescription} </li>`
        abilityContent += `<li>
                                <ul class"launch-cost">
                                    <li>Base mana: ${singleAbility.manaCost.baseCost}</li>
                                    <li>White mana: ${singleAbility.manaCost.white}</li>
                                    <li>Blue mana: ${singleAbility.manaCost.ublue}</li>
                                    <li>Black mana: ${singleAbility.manaCost.black}</li>
                                    <li>Red mana: ${singleAbility.manaCost.red}</li>
                                    <li>Green mana: ${singleAbility.manaCost.green}</li>
                                </ul>
                            </li>`
    }
    "</ul>"
}
console.log(abilityContent)






let cardDisplayHtml = 
`
<ul class="card-info">
    <li>Card name : ${card.name}</li>
    <li>Card force : ${card.force}</li>
    <li>Costitution : ${card.costitution}</li>
    <li>Evocation Cost : ${card.calculatorCost()} </li>
    <li>Evocation Elements : 
        <ul class"launch-cost">
            <li>Base mana: ${card.evocationPoints.baseCost}</li>
            <li>White mana: ${card.evocationPoints.white}</li>
            <li>Blue mana: ${card.evocationPoints.ublue}</li>
            <li>Black mana: ${card.evocationPoints.black}</li>
            <li>Red mana: ${card.evocationPoints.red}</li>
            <li>Green mana: ${card.evocationPoints.green}</li>
        </ul>
    </li>
    <li>Type of card: ${card.cardType} - ${card.cardSpecificType}</li>
    <li>Edition : ${card.expansion.editionNumber} Rarity :  ${card.expansion.rarity}</li>
    <li>Card Number: ${card.cardNumber} / ${card.expansion.collectionNumber}</li>
    <li>Flavor Text : <em>${card.flavorText.quote}</em> , ${card.flavorText.author}</li>
    <li>Abilities : ${abilityContent}</li>
    <li>Artist : ${card.artist.name} ${card.artist.surname}, born in ${card.artist.birthPlace} the ${card.artist.birthday}</li>
    <li>Border : ${card.border}</li>
    <img src="${card.cardImg}" alt="Card image">
    
</ul>
`;

document.getElementById("deck").innerHTML += cardDisplayHtml;