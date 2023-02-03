export class Articulo {
    author     : string;
    title      : string;
    descripcion: string;
    urlToImage : string;

    constructor(
        author     : string,
        title      : string,
        descripcion: string,
        urlToImage : string){

            this.author      = author;
            this.title       = title;
            this.descripcion = descripcion;
            this.urlToImage  = urlToImage
    }
}