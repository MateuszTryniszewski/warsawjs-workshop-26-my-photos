class ImagesList {
    constructor ({
        source=[],
        parentElementSelector=".images-list-placeholder"} = {}){
        this.parentElement = document.querySelector(parentElementSelector);
        this.source = source;
        this.init();
    }
    init(){
        this.images = this.source.map((image) => {
            let imageClass = new ImageClass(image);
            return imageClass;
        });
    }

    addImage(image){
        this.images.unshift(image);
        this.reRender();
    }
    reRender(){
        this.parentElement.innerHTML = "";
        this.render();
    }

    render(){
        let listElement = document.createElement('ul');
        listElement.classList.add('images-list');

        this.images.map((image) =>{
            listElement.appendChild(image.render());
        })
        this.parentElement.appendChild(listElement);
    }
}