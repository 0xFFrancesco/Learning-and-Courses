import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {StarWarsService} from "../star-wars.service";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

    characters: object[];
    ActivatedRoute: ActivatedRoute;
    StarWarsService: StarWarsService;

    currentSide = 'all';
    subscription;

    constructor(ActivatedRoute: ActivatedRoute, StarWarsService: StarWarsService) {
        this.ActivatedRoute = ActivatedRoute;
        this.StarWarsService = StarWarsService;
    }

    ngOnInit() {
        console.log('ListComponent OnInit');
        this.ActivatedRoute.params.subscribe(params => {
            console.log('ListComponent ActivatedRoute callback');
            this.characters = this.StarWarsService.getCharacters(params.side);
            this.currentSide = params.side;
        });
        this.subscription = this.StarWarsService.charactersChanged.subscribe(() => {
            console.log('ListComponent charactersChanged callback');
            this.characters = this.StarWarsService.getCharacters(this.currentSide);
        })
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}
