import Component from "../../sharing/component.js";


class InputComponent extends Component {
    static render(id, type, placeholder, isRequired) {
        const href="../components/input/input.css";
       if(this.loadedStyles.has(href))return;

       this.loadStyles(href)
        const inputElement = document.createElement("input");
        inputElement.id = id;
        inputElement.type = type;
        inputElement.placeholder = placeholder;
        inputElement.required = isRequired;

        const demo_form = document.querySelector("#demo_form");
        demo_form.append(inputElement);
    }
}

export default InputComponent;