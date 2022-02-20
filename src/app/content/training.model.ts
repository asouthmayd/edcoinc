export class TrainingModel {

    training_name: string;
    training_img: string;
    training_route: string;

    constructor(training_name: string, training_img: string, training_route: string) {
        this.training_name = training_name;
        this.training_img = training_img
        this.training_route = training_route;
    }
}