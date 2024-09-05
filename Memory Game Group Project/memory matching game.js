Document.addEventListener('DOMLoadedContent', function () {
    const cards = ["./Images/BlueEyesWhiteDragon.png", "./Images/DarkMagicianCard.png", "./Images/MonsterRebornCard.png", "./Images/PotOfGreedCard.png", "./Images/PotOfGreedCard.png", "RedEyesBlackDragonCard.png"
        "./Images/BlueEyesWhiteDragon.png", "./Images/DarkMagicianCard.png", "./Images/MonsterRebornCard.png", "./Images/PotOfGreedCard.png", "./Images/PotOfGreedCard.png", "RedEyesBlackDragonCard.png"
    ]
    

    // Shuffles Cards in Random Order
    cards.sort(function(){
        return 0.5 - Math.random();
    })
}
``