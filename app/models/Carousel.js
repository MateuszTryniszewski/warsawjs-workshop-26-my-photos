class Carousel{
    constructor ({
        sourceSelector = ".images-list-placeholder",
        destinationSelector = ".carousel"
    } = {},
    ) {
        this.imagesSrcs = imagesList.images.map(image => image.url);

        this.destinationElement = document.querySelector(destinationSelector);
        this.init();
    }
    init(){
        let index = 0;
        this.render();
        setInterval( () => {
            let image = this.destinationElement.querySelector('img');
            let radios = this.destinationElement.querySelectorAll('input[type="radio"]');
           image.src = this.imagesSrcs[index];
           radios[index].checked = true;
            index++;
            if(index== this.imagesSrcs.length) index = 0;
        }, 2000)
    }
    renderRadios(){
        let tempElement = document.createElement('fieldset');
        tempElement.innerHTML = this.imagesSrcs.map(img => {
            return '<input type="radio" name="carousel" />'
        }).join(' ');
        this.destinationElement.appendChild(tempElement);
    }
    render(){
        let tempElement = document.createElement('div');
        tempElement.innerHTML = `<img id="carousel-img" src="${this.imagesSrcs[0]}"/>`;
        this.destinationElement.appendChild(tempElement.firstChild);
        this.renderRadios();
    }
}