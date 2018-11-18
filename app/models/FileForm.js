class FileForm {
    constructor({parentSelector=".file-form"} = {}) {
        this.parentElement = document.querySelector(parentSelector);
    }

    bindEvent() {
        document.querySelector('#fileForm').addEventListener('submit', (event) => {
            event.preventDefault();
            let formData = new FormData(event.target);
            const fR = new FileReader();

            fR.addEventListener('load', (event) => {
                let image = {
                    author: formData.get('author'),
                    title: formData.get('title'),
                    published: new Date().toString(),
                    url:  event.target.result
                };
                imagesList.addImage(new ImageClass(image));
            });
            fR.readAsDataURL(formData.get("imageSrc")); 
            
        })
    }



    render(){
        let tempParent = document.createElement('div');
        tempParent.innerHTML = `<form id="fileForm">
        <input type="text" id="title" name="title" />
        <input type="text" id="author" name="author" />
        <input type="file" id="imageSrc" name="imageSrc" />
        <button type="submit">Zapisz</button>
        </form>`
        this.parentElement.appendChild(tempParent.firstChild);
    }
}