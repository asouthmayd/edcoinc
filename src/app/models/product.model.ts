export class ProductModel {

    product_name: string;
    product_img: string;
    product_route: string;

    constructor(product_name: string, product_img: string, product_route: string) {
        this.product_name = product_name;
        this.product_img = product_img
        this.product_route = product_route;
    }
}