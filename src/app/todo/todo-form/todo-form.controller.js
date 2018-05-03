import * as actions from "../redux/action";

const cleanForm = {
    description: "",
    creator: "",
};

export default class FormController {
    constructor($ngRedux) {
        "ngInject";
        this.unsubscribe = $ngRedux.connect(null, actions)(this);
    }

    $onInit() {
        this.formData = { ...this.formData } || cleanForm;
    }

    onSubmitPrivate($event) {
        $event.preventDefault();

        // if onSubmit is given from the parent
        if (this.onSubmit) {
            this.onSubmit({ formData: this.formData });
        } else {
            // default action is `create`
            this.createTodo(this.formData);
        }

        // clean form
        this.formData = cleanForm;
    }

    $onDestroy() {
        this.unsubscribe();
    }
}
