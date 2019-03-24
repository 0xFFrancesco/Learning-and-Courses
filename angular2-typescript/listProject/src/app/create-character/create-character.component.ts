import {Component, OnInit} from '@angular/core';
import {StarWarsService} from '../star-wars.service';

@Component({
    selector: 'app-create-character',
    templateUrl: './create-character.component.html',
    styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

    availableSides = [{display: 'None', value: ''}, {display: 'Light', value: 'light'}, {
        display: 'Dark',
        value: 'dark'
    }];
    StarWarsService: StarWarsService;

    constructor(StarWarsService: StarWarsService) {
        this.StarWarsService = StarWarsService;
    }

    ngOnInit() {
    }

    onSubmit(form) {
        if(form.invalid){
            return;
        }
        this.StarWarsService.addCharacter(form.value.name, form.value.side);
    }

}
