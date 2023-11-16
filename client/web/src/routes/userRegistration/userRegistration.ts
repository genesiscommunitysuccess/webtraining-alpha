import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {userRegistrationTemplate as template} from './userRegistration.template';
import {userRegistrationStyles as styles} from './userRegistration.styles';
import {Modal, Dialog,TextField, Checkbox, DropdownMenu, Button} from '@genesislcap/foundation-zero';


@customElement({
    name: "user-route",
    template,
    styles
})



export class UserRegistration extends FASTElement {

    @observable name: string
    @observable emailAddress: string
    @observable password: string
    @observable repeatPassword: string
    @observable age: number
    @observable phoneNumber: string
    @observable showPassword: boolean=false
    @observable gender: string

    newUserModal: Modal
    repeatPasswordId: TextField
    passwordField: TextField
    submitButton: Button

    newUser(){
        this.newUserModal.show()
    }

    verifyPassword(){
        if (this.password != this.repeatPassword){
            this.repeatPasswordId.style.backgroundColor = "rgba(255, 0, 0, 0.3)"
        } else {
            this.repeatPasswordId.style.backgroundColor = ""
        }
    }

    ageValidation(){
        if(this.age < 18){
            this.submitButton.disabled = true
        } else {
            this.submitButton.disabled = false
        }
    }

    displayPassword(){
        if (this.showPassword){
            this.passwordField.type="text"
            this.repeatPasswordId.type="text"
        } else {
            this.passwordField.type="password"
            this.repeatPasswordId.type="password"
        }
    }

    submitForms(){

        const output = "Full name: " + this.name + "\n" +
                    "E-mail address: " + this.emailAddress+ "\n" +
                    "Age: " + this.age + "\n" +
                    "Phone Number: " + this.phoneNumber+ "\n" +
                    "Gender: " + this.gender

        alert(output)
    }

    reset(){
        this.name = null
        this.emailAddress = null
        this.password = null
        this.repeatPassword =  null
        this.age = null
        this.phoneNumber = null
        this.gender = null
    }


}