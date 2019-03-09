import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-user-cart',
    templateUrl: './user-cart.component.html',
    styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

    constructor() {
    }

    @Input() cart: string[];
    @Output() onCartUpdate = new EventEmitter<string[]>();

    addItem(e) {
        if(!e.target.value) return;
        this.cart.push(e.target.value);
        this.onCartUpdate.emit(this.cart);
        e.target.value = "";
    }

    ngOnInit() {
    }

}
