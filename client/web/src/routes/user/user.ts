// Import
import {Users} from '@genesislcap/foundation-entity-management';
import {customElement, FASTElement, html, ViewTemplate} from '@microsoft/fast-element';


// Example html with the user management
// You can customise this with additional fields, see futher in this documentation
export const AdminTemplate: ViewTemplate = html`
<user-management></user-management>
`;

@customElement({name: 'user-component', template: AdminTemplate})
export class UserComponent extends FASTElement {
  // Declare class
  Users;

  public async connectedCallback() { // add this method to Order class
    super.connectedCallback(); // FASTElement implementation
  }
}
