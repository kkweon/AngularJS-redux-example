import angular from "angular";

// dependencies
import ngRedux from "ng-redux";
import todoModule from "./todo/todo.module";

// components
import rootComponent from "./root.component";

// config
import rootConfig from "./root.config";

export default angular
    .module("myApp", [ngRedux, todoModule])
    .config(rootConfig)
    .component(rootComponent.selector, rootComponent).name;
