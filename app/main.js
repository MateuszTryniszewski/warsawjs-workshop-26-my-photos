let imagesList = new ImagesList()

fetchImages({
    callback: () =>{
        let carousel = new Carousel();
    }
})
let fileForm = new FileForm();
fileForm.render()
fileForm.bindEvent();
let lightBox = new LightBox();


