import * as actionTypes from "../action/types";

const mockTodoItems = [
    {
        id: 0,
        description: "Refactor UberDropdown",
        creator: "Mo Kweon",
    },
    {
        id: 1,
        description: "Update AngularJS",
        creator: "Mo Kweon",
    },
];

export default function(state = mockTodoItems, action) {
    switch (action.type) {
        case actionTypes.TODO_ADD: {
            const id = Date.now(),
                todoItem = {
                    id,
                    ...action.payload,
                };
            return [todoItem, ...state];
        }

        case actionTypes.TODO_DELETE: {
            const { id } = action.payload;
            return state.filter(item => item.id !== id);
        }

        case actionTypes.TODO_UPDATE: {
            const { id } = action.payload;
            return state.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        ...action.payload,
                    };
                }
                return item;
            });
        }

        default:
            return state;
    }
}
