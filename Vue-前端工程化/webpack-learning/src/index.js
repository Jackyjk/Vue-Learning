import $ from "jquery";
import './css/1.css'
    $(function(){
        $("li:odd").css("background","blue");
        $("li:even").css("background","pink");
    })