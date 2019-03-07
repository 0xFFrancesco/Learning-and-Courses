import {Component} from '@angular/core'

@Component({
    selector: 'app-user',
    template: `
        <!--<input type="text" (input)="onUserInput($event)">-->
        <input type="text" [(ngModel)]="input">
        <p>Hello {{name}}!</p>
        <p>User component here!</p>
        <p>Your input is: {{input}}.</p>
    `,
})
export class UserComponent {
    name: string = 'Francesco';
    input: string = '';

    onUserInput(e) {
        this.input = e.target.value;
    }
}