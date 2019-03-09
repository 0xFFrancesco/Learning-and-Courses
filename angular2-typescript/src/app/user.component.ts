import {Component, EventEmitter, Input, Output} from '@angular/core'

@Component({
    selector: 'app-user',
    template: `
        <p>Hello {{name}}!</p>
        <p>User component here!</p>
        <input type="text" (input)="onUserInput($event)" [value]="name">
        <!--<input type="text" [(ngModel)]="input">-->
        <hr>
        <app-user-detail [name]="name"></app-user-detail>
    `,
})
export class UserComponent {

    @Input() name;
    @Output() nameChange = new EventEmitter<string>();

    onUserInput(e) {
        this.nameChange.emit(e.target.value);
    }
}