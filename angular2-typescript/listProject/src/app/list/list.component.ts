import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {StarWarsService} from "../star-wars.service";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    characters: object[];
    ActivatedRoute: ActivatedRoute;
    StarWarsService: StarWarsService;

    constructor(ActivatedRoute: ActivatedRoute, StarWarsService: StarWarsService) {
        this.ActivatedRoute = ActivatedRoute;
        this.StarWarsService = StarWarsService;
    }

    ngOnInit() {
        console.log('ListComponent OnInit');
        this.ActivatedRoute.params.subscribe(params => {
            console.log('ListComponent ActivatedRoute callback');
            this.characters = this.StarWarsService.getCharacters(params.side)
        })
    }

}
