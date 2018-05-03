import * as actions from "../redux/action";
export default class {
    constructor($ngRedux) {
        this.unsubscribe = $ngRedux.connect(this.mapStateToProps, actions)(this);
    }

    mapStateToProps(state) {
        return {
            todos: state.todos,
        };
    }

    $onDestroy() {
        this.unsubscribe();
    }
}
