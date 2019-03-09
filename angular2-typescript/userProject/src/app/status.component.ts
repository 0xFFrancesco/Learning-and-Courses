import {Component} from '@angular/core'

@Component({
    selector: 'app-status',
    template: `
        <p>Status is: {{status}}</p>
        <button (click)="onChange()">finish loading</button>
    `,
})
export class StatusComponent {
    status: string = 'loading...';

    onChange() {
        this.status = 'loaded!';
    }
}