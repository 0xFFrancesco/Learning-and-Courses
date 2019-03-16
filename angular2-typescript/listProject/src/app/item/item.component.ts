import {Component, Input, OnInit} from '@angular/core';
import {StarWarsService} from "../star-wars.service";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    @Input() character;
    //@Output() sideAssigned = new EventEmitter<{ name: string, side: string }>()
    StarWarsService: StarWarsService;

    constructor(StarWarsService: StarWarsService) {
        this.StarWarsService = StarWarsService;
    }

    ngOnInit() {
    }

    onAssign(side) {
        this.character.side = side;
        //this.sideAssigned.emit({name: this.character.name, side: side})
        this.StarWarsService.onSideAssigned(this.character);
    }

}
