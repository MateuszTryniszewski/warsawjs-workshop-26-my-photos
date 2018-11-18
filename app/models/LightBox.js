class LightBox {
    constructor({
        elementSelector='.images-list-placeholder',
        destinationSelector = '.lightbox'
    } = {}){
        this.element = document.querySelector(elementSelector);
        this.destinationElement = document.querySelector(destinationSelector)
        this.init();
    }

    init(){
        this.element.addEventListener('click', (event)=>{
            if(event.target.nodeName == 'IMG'){
                this.src = event.target.src;
                let imageEl = document.createElement("img");
                imageEl.src = this.src;
                this.destinationElement.innerHTML = '';
                this.destinationElement.appendChild(imageEl)
            }
        })
        this.destinationElement.addEventListener('click', (event)=>{
                this.destinationElement.innerHTML = '';
        })
    }
    
    render(){

    }
}