"use strict";
var round = 1;


$(function() {
  $("input[name=add_button]").on("click", function(){
    let str = ""+
    "<section>"+
    "  <hr>"+
    "  <h2>ラウンド" + round + "</h2>"+
    "  <table id=\"round" + round + "\">"+
    "    <tr>"+
    "      <td>調達額</td>"+
    "      <td><input type=\"text\" name=\"money" + round + "\" pattern=\"^[0-9]*$\" /></td>"+
    "      <td>[万円]</td>"+
    "    </tr>"+
    "    <tr>"+
    "      <td>評価額</td>"+
    "      <td><input type=\"text\" name=\"has_value" + round + "\" disabled=\"disabled\"/></td>"+
    "      <td>[万円]</td>"+
    "    </tr>"+
    "    <tr>"+
    "      <td>株価</td>"+
    "      <td><input type=\"text\" name=\"value" + round + "\" disabled=\"disabled\"/></td>"+
    "      <td>[万円/株]</td>"+
    "    </tr>"+
    "    <tr>"+
    "      <td>持ち株数</td>"+
    "      <td><input type=\"text\" name=\"has_stock" + round + "\" disabled=\"disabled\" /></td>"+
    "      <td>[株]</td>"+
    "    </tr>"+
    "    <tr>"+
    "      <td>持ち株比率</td>"+
    "      <td><input type=\"text\" name=\"has_ratio" + round + "\" disabled=\"disabled\" /></td>"+
    "      <td>[%]</td>"+
    "    </tr>"+
    "  </table>"+
    "</section>";

    $("#button_section").before(str);

    let select = "input[name=money" + round + "]";
    $(select).blur(function() {
      alert("blur");
    });

    round += 1;
  });
});