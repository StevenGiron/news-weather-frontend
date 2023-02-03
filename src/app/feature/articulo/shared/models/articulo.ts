export class Articulo {
    author     : string;
    title      : string;
    description: string;
    content    : string;
    urlToImage : string;

    constructor(
        author     : string,
        title      : string,
        description: string,
        urlToImage : string,
        content    : string){

            this.author      = author;
            this.title       = title;
            this.description = description;
            this.content     = content
            this.urlToImage  = urlToImage
    }
}