import {Component, OnInit} from '@angular/core';
import {StarWarsService} from './star-wars.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'listProject';
    StarWarsService: StarWarsService;

    constructor(StarWarsService: StarWarsService) {
        this.StarWarsService = StarWarsService;
    }


    ngOnInit() {
        this.StarWarsService.fetchCharacters();
    }

}
