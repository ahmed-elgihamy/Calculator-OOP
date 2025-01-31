import Component from "../../sharing/component.js";

class ButtonComponent extends Component {
  static render(value, calc) {
    const href ="../components/button/btn.css";
    if (this.loadedStyles.has(href)) return;
    this.loadStyles(href);

    const btnElement = document.createElement("button");
    btnElement.type = value;
    btnElement.innerHTML = calc;

    const demo_form = document.querySelector("#demo_form");
    demo_form.append(btnElement);
  }
}

export default ButtonComponent;
