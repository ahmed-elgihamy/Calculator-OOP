import Component from "../../sharing/component.js";

import CalculateService from "../../services/calculate.js";


class FormComponent extends Component{

    static render() {

        if (this.loadedStyles.has("../components/form/form.css")) return;
        this.loadStyles("../components/form/form.css");
         const formElement = document.createElement("form")
         
        formElement.innerHTML = `
        <div id="demo_form">
            <h1>Form</h1>
        </div>
    `;

    
    const navElement = document.querySelector("nav");
    navElement.insertAdjacentElement("afterend", formElement);


    formElement.onsubmit = this.submit;

    }

    static submit(event) {
        event.preventDefault();
    
        const firstValue = Number(document.querySelector("#first-number").value);
        const secondValue = Number(document.querySelector("#second-number").value);
        const operator = document.querySelector("select").value;
    
        const result = CalculateService.calculate(firstValue, secondValue, operator);
         alert(`${firstValue} ${operator} ${secondValue} = ${result}`);
       
    }
}


export default FormComponent;