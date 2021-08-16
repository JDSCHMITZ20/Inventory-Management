const express = require("express");

const itemModel = require("../models/item");
const app = express();




function openForm() {
    document.getElementById("itemForm").style.display = "block";
}

function closeForm() {
    document.getElementById("itemForm").style.display = "none";
}

//JSON Object................
var json_obj = {
    // "cars": [
    //     { "name": "Ford", "models": ["Fiesta", "Focus", "Mustang"], "date": ["02/23/2021","02/23/2021","02/23/2021"] },
    //     { "name": "BMW", "models": ["320", "X3", "X5"], "date": ["02/23/2021","02/23/2021","02/23/2021"] },
    //     { "name": "Fiat", "models": ["500", "Panda", "550"], "date": ["02/23/2021","02/23/2001","02/23/2021"] }
    // ]
}
//JSON Object End................
//Create table and fetch data from JSON Object.
$(document).ready(function () {
    // for search function.................................. only............................
    $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("table tr").filter(function (index) {
            if (index > 0) {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            }
        });
    });
    //=================End=========================End===============================
});
function loadTable() {
    loadJSON();
    var k = 0;
    var table_body = '<table border="1" id="example"><thead><tr><th>Item</th><th>ID</th><th>Vender#</th><th>SKU</th></tr></thead><tbody>';
    for (j in json_obj.cars) {
        for (i = 0; i < json_obj.cars.length; i++) {
            table_body += '<tr>';
            table_body += '<td>';
            table_body += json_obj.cars[k]["name"];
            table_body += '</td>';

            table_body += '<td>';
            table_body += json_obj.cars[k].models[i];
            table_body += '</td>';

            table_body += '<td>';
            table_body += json_obj.cars[k].date[i];
            table_body += '</td>';

            table_body += '</tr>';
        }
        k++;
    }
    table_body += '</tbody></table>';
    $('#tableDiv').html(table_body);
    //display data..........
}

const itemForm = document.getElementById("itemForm");
function loadJSON() {
    var name = itemForm.item - name.value
    var vender = itemForm.item - vender.value
    var sku = itemForm.item - sku.value
}

function getItem() {
    // read all items
    app.get("/item", async (request, response) => {
        const items = await itemModel.find({});
        json_obj = items
        try {
            response.send(items);
        } catch (error) {
            response.status(500).send(error);
        }
    });
}


function postItem() {
    // add item
    app.post("/", async (request, response) => {
        //const item = new itemModel(request.body); used to test
        let item = new itemModel({
            // Name: req.body.name,
            // Price: req.body.price,
            // Date: req.body.date

            Nem: itemForm.item - name.value,
            Vender: itemForm.item - vender.value,
            sku: itemForm.item - sku.value
        })
        try {
            await item.save();
            response.send(item);
            // res.redirect('./pages/selection.html');
        } catch (error) {
            response.status(500).send(error);
        }

    });
}

module.exports = app;
