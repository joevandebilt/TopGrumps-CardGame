var GameHandler = (function ($) {

    var properties = ["Strength", "Stamina", "Reliability", "Intelligence", "Intimidation"];
    var currentGame = null;

    function startGame() {
        if (currentGame === null) {
            alert("You didn't set the game up you cunt");
            return;
        }

        if (currentGame.MyMoves.length == 0) {
            alert("Try picking a move first dipshit");
            return;
        }

        var MyMove = currentGame.MyMoves[0];
        var CompMove = currentGame.ComputerMoves[0];

        var myParam = parseFloat(getMove(MyMove.Card, MyMove.Property));
        var compParam = parseFloat(getMove(CompMove.Card, CompMove.Property));

        CardHandler.RenderCards([CompMove.Card]);

        $("[data-id='"+MyMove.Card.ID+"']").find("[data-property='"+MyMove.Property.toLowerCase()+"']").closest(".grump-stat").addClass("glow-text-perm");
        $("[data-id='"+CompMove.Card.ID+"']").find("[data-property='"+CompMove.Property.toLowerCase()+"']").closest(".grump-stat").addClass("glow-text-perm");

        console.log("You chose to use " + MyMove.Card.Name + "'s " + MyMove.Property);
        console.log("Your opponent chose to use " + CompMove.Card.Name + "'s " + CompMove.Property);
        console.log(myParam + " > " + compParam);
        if (myParam > compParam) {
            $("#panel-outcome").html("You Win!");
            //addRound(1, MyMove, CompMove);
        } else if (myParam == compParam) {
            $("#panel-outcome").html("You Drew!");
            //addRound(0, MyMove, CompMove);
        }
        else {
            $("#panel-outcome").html("You Lost :(");
            //addRound(-1, MyMove, CompMove);
        }

        $("#btnStartGame").addClass("hidden");
        $("#btnResetGame").removeClass("hidden");
    }

    function setupGame(params) {
        $("#panel-outcome").empty();
        $("#btnResetGame").addClass("hidden");
        $("#btnStartGame").removeClass("hidden");
        $("#btnStartGame").prop("disabled", true);

        currentGame = {
            MyHand: params.MyHand,
            ComputerHand: params.ComputerHand,
            MyMoves: [],
            ComputerMoves: [],
            GameHistory: []
        }

        aiPickMoves(params.ComputerHand);

    }

    function aiPickMoves(hand) {
        currentGame.ComputerMoves.push({
            Card: hand[0],
            Property: randomProp()
        });
    }

    function randomProp() {
        return properties[Math.round(Math.random() * (properties.length - 1))];
    }

    function pickFirstCard(card) {
        $("#my-cards").empty();
        $("#my-cards").append(card);

        $(card).removeClass("glow");
        var id = $(card).attr("data-id");
        var card = currentGame.MyHand.filter((card) => card.ID == id)[0];

        $(".grump-stat").each((idx, stat) => {
            var property = $(stat).find("[data-property]").first().attr("data-property");
            $(stat).on('click', () => {
                GameHandler.SetMove(card, property);
            });
            $(stat).addClass("glow-text");
            //$(stat).find("label").addClass("glow-text");
            //$(stat).find("div").addClass("glow-text");
        });
    }

    function setMove(card, property) {
        currentGame.MyMoves.push({
            Card: card,
            Property: property
        });

        $("#btnStartGame").prop("disabled", false);
    }

    function getMove(card, property) {
        return card[Object.keys(card).find(key => key.toLowerCase() === property.toLowerCase())];
    }

    return {
        SetupGame: function (params) {
            setupGame(params);
        },
        SelectFirstCard: function (card) {
            return pickFirstCard(card);
        },
        StartGame: function () {
            return startGame();
        },
        SetMove: function (card, property) {
            return setMove(card, property);
        }
    }

})(jQuery);