

class Component {
    static loadedStyles = new Set(); 

    static loadStyles(href) {
        if (this.loadedStyles.has(href)) return; 

        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.href = href;
        linkElement.onload = () => this.loadedStyles.add(href); 

        document.head.append(linkElement);
    }
}

export default Component;