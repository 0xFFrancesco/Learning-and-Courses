import {Component, OnInit} from '@angular/core';


interface Character {
    name: string,
    side: string
}


@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

    characters: Character[] = [
        {name: 'Like Skywalker', side: ''},
        {name: 'Dark Vader', side: ''},
    ];

    chosenList: string = 'all';

    constructor() {
    }

    ngOnInit() {
    }

    choose(type) {
        this.chosenList = type;
    }

    getCharacters() {
        return this.characters.filter((char) => {
            switch (this.chosenList) {
                case 'all':
                    return true;
                case 'light':
                    return char.side === 'light';
                case 'dark':
                    return char.side === 'dark';
            }
        })
    }

    onSideAssigned(character) {
        const pos = this.characters.findIndex(c => {
            return c.name === character.name
        });
        this.characters[pos].side = character.side
    }

}
