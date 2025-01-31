import Component from "../../sharing/component.js";

class FooterComponent extends Component {
  static render() {
    const href ="../components/footer/footer.css";
    if (this.loadedStyles.has(href)) return;
    this.loadStyles(href);

    const navElement = document.createElement("footer");
    navElement.innerHTML = `<p>Copyright @Ahmed Mahmoud</p>`;
    document.body.append(navElement);
  }
}

export default FooterComponent;
