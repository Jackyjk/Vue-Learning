import $ from "jquery";
import './css/1.css'
import './css/1.less'


$(function () {
    $("li:odd").css("background", "blue");
    $("li:even").css("background", "pink");
})


class Person {
    static info = "Aaa"
}

console.log(Person.info);


//----------------------------------------
import Vue from "vue"       //导入的Vue不是完整的 只能用render组件
//导入单文件组件
import App from './components/App.vue'

const vm = new Vue({
    el: "#app",
    render: h => h(App)
})