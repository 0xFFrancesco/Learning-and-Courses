import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

    constructor() {
    }

    @Input() name: string = 'default';

    cart: Array<string> = ["Apples", "Oranges", "Cherries"];

    ngOnInit() {
    }

}
