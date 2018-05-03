import template from "./todo-form.component.html";
import controller from "./todo-form.controller";

const selector = "todoForm";

export default {
    selector,
    template,
    controller,
    bindings: {
        formData: "<?",
        onSubmit: "&?"
    }
};
