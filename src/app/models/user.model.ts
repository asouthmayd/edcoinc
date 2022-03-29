export class UserModel {

    companyName: string;
    email: string;
    firstName: string;
    jobTitle: string;
    lastName: string;
    password: string;
    phoneNumber: string;

    constructor(companyName: string, email: string, firstName: string, jobTitle: string, lastName: string, password: string, phoneNumber: string) {
        this.companyName = companyName;
        this.email = email;
        this.firstName = firstName;
        this.jobTitle = jobTitle;
        this.lastName = lastName;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }
}