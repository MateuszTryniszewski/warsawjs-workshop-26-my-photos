class ImageClass{
    constructor({url, title, author, published}){
        this.url = url;
        this.title = title;
        this.author = author;
        this.published = published;
    }

    get formatDate(){
        let date = new Date(this.published)
        return `${date.getDate()} - ${date.getMonth()+1} - ${date.getFullYear()}`
    }


    render() {
        let tempParent = document.createElement('div');
        tempParent.innerHTML = `<li>
            <img width="300px" src="${this.url}" />
            <p>${this.title}</p>
            <p>${this.author}</p>
            <p>${this.formatDate}</p>
        </li>
        `;
        return tempParent.firstChild;
    }
}
