export class InfoCardModel {

    icon: string;
    title_text: string;
    body_text: string;

    constructor(icon: string, title_text: string, body_text: string) {
        this.icon = icon;
        this.title_text = title_text;
        this.body_text = body_text;
    }
}