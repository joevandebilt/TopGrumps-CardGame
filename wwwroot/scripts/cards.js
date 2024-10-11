var CardHandler = (function ($) {
    function renderCards(cards, clear) {
        if (clear === true) {
            $("#my-cards").empty();
        }

        cards.forEach(card => {
            $card = $(cardTemplate);

            let properties = Object.getOwnPropertyNames(card);
            properties.forEach(property => {
                propValue = card[property].split("\n").join("<br />");
                if (!isNaN(propValue)) {
                    propValue = parseFloat(propValue) * 1;
                }
                propKey = property.toLowerCase();
                $input = $card.find("[data-property='" + propKey + "']")
                if ($input.length === 1) {
                    if (propKey == "image") {
                        $input.attr("src", imageDirectory + propValue);
                        $input.attr("alt", "Picture of " + card.Name);
                    }
                    else if (propKey == "episodeurl") {
                        $input.attr("href", propValue);
                    }
                    else {
                        $input.html(propValue);
                    }
                }
            });

            $card.attr("data-id", card.ID);

            $("#my-cards").append($card);
        });
    }

    function loadCards() {
        return APIHandler.Send("Cards", "GetAll").then(cards => renderCards(cards.Payload));
    }

    function getCardsFromDeck(handSize) {
        return APIHandler.Send("Cards", "GetRandomHand", handSize);
    }

    function generateCardGame(handSize) {
        return APIHandler.Send("Cards", "StartCardGame", handSize);
    }

    function createCardGame() {
        $("#my-cards").empty();
        generateCardGame(3).then(cardGame => {
            renderCards(cardGame.Payload.MyHand);

            GameHandler.SetupGame(cardGame.Payload);

            $(".grump-card").each((index, elem) => {
                $(elem).on('click', function () {
                    GameHandler.SelectFirstCard(elem);
                });
            });
        });
    }

    return {
        CreateCardGame: function() {
            createCardGame();
        },
        LoadCards: function (card) {
            return loadCards();
        },
        RenderCards: function(cards, clear) {
            return renderCards(cards, clear);
        }
    }

})(jQuery);