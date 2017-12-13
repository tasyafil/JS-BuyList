

$(function () {
    var $list = $(".item-list");
    var ONE_ROW_HTML = $(".item-row").html();

    var $segment = $(".stats");
    var ONE_ITEM_HTML = $(".stats").html();

    var $bought = $(".stats-bought");

    function addItem(title) {
        var $node = $(ONE_ROW_HTML);
        var $node2 = $(ONE_ITEM_HTML);

        var quantity = 1;
        var $quantity_label = $node.find(".count-label");
        var $quantity_label2 = $node2.find(".count-label2");

        $quantity_label.text(quantity);
        $quantity_label2.text(quantity);

        $node.find(".not-bought").text(title);
        $node2.find(".title").text(title);

        $node.find(".not-bought").click(function () {
            $node.find(".not-bought").hide();
            $node.find(".edit").show();
            $node.find(".edit").val(title);
        })

        $node.find(".edit").focusout(function () {
            $node.find(".edit").hide();

            title = $node.find(".edit").val();
            $node.find(".edit").val(title);
            $node.find(".not-bought").text(title);
            $node.find(".not-bought").show();
            $node2.find(".title").text(title);
        })

        $node.find(".plus-button").click(function () {
            quantity += 1;
            $quantity_label.text(quantity);
            $quantity_label2.text(quantity);
        })

        $node.find(".minus-button").click(function () {
            if (quantity > 1) {
                quantity -= 1;
                $quantity_label.text(quantity);
                $quantity_label2.text(quantity);
            }
        })

        $node.find(".delete-button").click(function () {
            $node.fadeOut(250, function () {
                $node.hide();
                $node2.hide();
            })
        })

        $node.find(".buy-button").click(function () {
            $node.fadeOut(250, function () {
                $node.addClass("isBought");
                $node2.addClass("isBought");
                $node2.appendTo($bought);
                $node.fadeIn(250);
            })
        })

        $node.find(".unbuy-button").click(function () {
            $node.fadeOut(250, function () {
                $node.removeClass("isBought");
                $node2.removeClass("isBought");
                $node2.appendTo($segment);
                $node.fadeIn(250);
            })
        })

        $node.css('padding', '17px 10px');
        $node.css('border-bottom', '1px solid rgba(34,36,38,.15)');
        $node2.css('display', 'inline-block')

        $list.append($node);
        $segment.append($node2);
    }

    var $new_input = $(".new-item");

    $(".add").click(function () {
        var new_name = $new_input.val();

        if (new_name.trim()) {
            addItem(new_name);
            $new_input.val("");
            $new_input.focus();
        }
    })

})
