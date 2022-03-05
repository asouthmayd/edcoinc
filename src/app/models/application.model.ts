export class ApplicationModel {

    application_name: string;
    application_img: string;
    application_route: string;

    constructor(application_name: string, application_img: string, application_route: string) {
        this.application_name = application_name;
        this.application_img = application_img
        this.application_route = application_route;
    }
}