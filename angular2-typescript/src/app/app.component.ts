import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Angular 2+ (7) with Typescript';

    rootName = 'Francesco';

    onNameChange(name) {
        this.rootName = name;
    }
}
