import {html, ref} from '@microsoft/fast-element';
import {UserRegistration} from './userRegistration';
import {userRegistrationStyles} from './userRegistration.styles';
import {sync} from '@genesislcap/foundation-utils';


export const userRegistrationTemplate = html<UserRegistration>`
    <h2>User Registration Page</h2>

    <zero-button @click=${(x) => x.newUser()}>New User</zero-button>

    <zero-modal ${ref('newUserModal')} position="right" id="newUserModal">
        User registration Forms
        <form id="newUserForm">
            <zero-text-field :value=${sync((x) => x.name)} placeholder="type your full name">Full name</zero-text-field>
            <zero-text-field :value=${sync((x) => x.emailAddress)} placeholder="type your e-mail address">Email address</zero-text-field>
            <zero-text-field placeholder="type your password"${ref('passwordField')}:value=${sync((x) => x.password)} type="password" @change=${(x) => x.verifyPassword()}>Password</zero-text-field>
            <zero-text-field placeholder="type your password again"${ref('repeatPasswordId')} :value=${sync((x) => x.repeatPassword)} type="password" @change=${(x) => x.verifyPassword()}>Repeat your password</zero-text-field>
            <zero-checkbox :checked="${sync((x) => x.showPassword, 'boolean')}" @change=${(x) => x.displayPassword()}>Show password</zero-checkbox>
            <zero-number-field placeholder="type your age" :value=${sync((x) => x.age)} @change=${(x) => x.ageValidation()} >Age</zero-number-field>
            <zero-text-field :value=${sync((x) => x.phoneNumber)}>Phone Number</zero-text-field>
            <zero-label>Gender</zero-label>
            <zero-select :value=${sync((x) => x.gender)} placeholder="Gender">
                <zero-option selected>Choose a gender</zero-option>
                <zero-option>Male</zero-option>
                <zero-option>Female</zero-option>
                <zero-option>Other</zero-option>
            </zero-select>
            <zero-button ${ref('submitButton')} @click=${(x) => x.submitForms()}>Submit</zero-button>
            <zero-button styles="display: block" type="reset" @click=${(x) => x.reset()}>Reset</zero-button>
        </form>
    </zero-modal>
`;