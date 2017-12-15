

$(function () {
    var $list = $(".item-list");
    var row = $(".item-row").html();

    var $segment = $(".stats");
    var item = $(".stats").html();

    var $bought = $(".stats-bought");

    function addItem(title) {  //function to add an item
        var $row = $(row);
        var $item = $(item);

        var quantity = 1;
        var $quantity1 = $row.find(".count-label");
        var $quantity2 = $item.find(".count-label2");

        $quantity1.text(quantity);
        $quantity2.text(quantity);

        $row.find(".not-bought").text(title);
        $item.find(".title").text(title);

        $row.find(".not-bought").click(function () {
            $row.find(".not-bought").hide();
            $row.find(".edit").show();
            $row.find(".edit").val(title);
        })

        $row.find(".edit").focusout(function () {
            $row.find(".edit").hide();

            title = $row.find(".edit").val();
            $row.find(".edit").val(title);
            $row.find(".not-bought").text(title);
            $row.find(".not-bought").show();
            $item.find(".title").text(title);
        })

        $row.find(".plus-button").click(function () {
            quantity += 1;
            $quantity1.text(quantity);
            $quantity2.text(quantity);
        })

        $row.find(".minus-button").click(function () {
            if (quantity > 1) {
                quantity -= 1;
                $quantity1.text(quantity);
                $quantity2.text(quantity);
            }
        })

        $row.find(".delete-button").click(function () {
            $row.fadeOut(250, function () {
                $row.hide();
                $item.hide();
            })
        })

        $row.find(".buy-button").click(function () {
            $row.fadeOut(250, function () {
                $row.addClass("isBought");
                $item.addClass("isBought");
                $item.appendTo($bought);
                $row.fadeIn(250);
            })
        })

        $row.find(".unbuy-button").click(function () {
            $row.fadeOut(250, function () {
                $row.removeClass("isBought");
                $item.removeClass("isBought");
                $item.appendTo($segment);
                $row.fadeIn(250);
            })
        })

        $row.css('padding', '17px 10px');
        $row.css('border-bottom', '1px solid rgba(34,36,38,.15)');
        $item.css('display', 'inline-block')

        $list.append($row);
        $segment.append($item);
    }

    var $new_input = $(".new-item");

    $(".addButton").click(function () {
        var new_name = $new_input.val();

        if (new_name.trim()) {
            addItem(new_name);
            $new_input.val("");
            $new_input.focus();
        }
    })

})
