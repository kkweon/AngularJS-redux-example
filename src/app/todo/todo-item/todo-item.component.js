import template from "./todo-item.component.html";

export default {
    selector: "todoItem",
    template,
    bindings: {
        // type todo = { description: string, author: string }
        todo: "<",
        onDelete: "&",
        onEdit: "&",
    },
    controller: class Controller {
        $onInit() {
            this.editMode = false;
        }
        onClickDelete() {
            this.onDelete({ todo: this.todo });
        }

        toggleEditMode() {
            this.editMode = !this.editMode;
        }

        onClickEdit(formData) {
            this.onEdit({ todo: formData });
            this.toggleEditMode();
        }
    },
};
