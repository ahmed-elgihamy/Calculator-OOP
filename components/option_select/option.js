import Component from "../../sharing/component.js";




class OptionComponent extends Component{

   static render(value)
   {
      const  ref ="../components/option/option.css";
    if(this.loadedStyles.has(ref))return;
      this.loadStyles(ref)


      const optionElement = document.createElement("option");
      optionElement.value = value;
      optionElement.innerHTML = value;

      const selectElement = document.querySelector("select");
      selectElement.append(optionElement);
   }
}

export default OptionComponent;