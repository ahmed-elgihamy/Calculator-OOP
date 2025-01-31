import Component from "../../sharing/component.js";


class SelectComponent extends Component{


    static render()
    {
        const href="../components/select/select.css";
     if (this.loadedStyles.has(href))return;
    
      this.loadStyles(href);

      const selectElement = document.createElement("select");

      const demo_form = document.querySelector("#demo_form");
      demo_form.append(selectElement);
    }
}

export default SelectComponent;