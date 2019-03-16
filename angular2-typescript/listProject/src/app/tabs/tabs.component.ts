import {Component, OnInit} from '@angular/core';
import {StarWarsService} from "../star-wars.service";

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

    characters: [];
    chosenList: string = 'all';
    StarWarsService: StarWarsService;

    constructor(StarWarsService: StarWarsService) {
        this.StarWarsService = StarWarsService;
    }

    ngOnInit() {
    }

    choose(type) {
        this.chosenList = type;
    }

    getCharacters(chosenList) {
        return this.StarWarsService.getCharacters(chosenList)
    }

}
