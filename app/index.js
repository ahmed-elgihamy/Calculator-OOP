
import NavComponent from "../../components/navbar/NavComponent.js";
import FooterComponent from "../components/footer/footerComponent.js";
import FormComponent from "../components/form/form.js";
import InputComponent from "../components/Input/Input.js";
import SelectComponent from "../components/select/select.js";
import OptionComponent from "../components/option_select/option.js";
import ButtonComponent from "../components/button/btn.js";
import CalculateService from "../services/calculate.js";
class AppService {

    constructor() {
        throw new Error("Cannot Initialize A Singleton Class");
    }
    static build() {
        
        try {
            NavComponent.render();
            FormComponent.render();
            InputComponent.render("first-number", "number", "First number", true);
            SelectComponent.render();
            const OPERATORS = [ "+", "-", "*", "/" ];
            OPERATORS.forEach(OPERATOR => {
                OptionComponent.render(OPERATOR);
            });
            InputComponent.render("second-number", "number", "second number", true);
          ButtonComponent.render("submit","click")

            FooterComponent.render();
            

            
        } catch (error) {
            console.error(error.message);
        }
    }
}

AppService.build();


