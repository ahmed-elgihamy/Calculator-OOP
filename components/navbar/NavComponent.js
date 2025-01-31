import Component from "../../sharing/component.js";

class NavComponent extends Component {
  static render() {
    const href ="../components/navbar/nav.css";

      
        if (this.loadedStyles.has(href))return;
     
        this.loadStyles(href);
    
        const navElement = document.createElement("nav");
        navElement.innerHTML = `<h1>Calculator</h1>`;
        document.body.prepend(navElement);
   
    }
}

export default NavComponent;

