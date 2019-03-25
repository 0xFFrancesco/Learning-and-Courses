import {Subject} from 'rxjs/Subject';
import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

interface Character {
    name: string,
    side: string
}

@Injectable()
export class StarWarsService {

    private characters: Character[] = [
        {name: 'Luke Skywalker', side: ''},
        {name: 'Dark Vader', side: ''},
    ];
    charactersChanged = new Subject<void>();
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    fetchCharacters() {
        this.http.get('https://swapi.co/api/people/')
            .map((res: Response) => {
                const data = res.json();
                return data.results.map(item => {
                    return {name: item.name, side: ''};
                });
            })
            .subscribe(res => {
                this.characters = res;
                this.charactersChanged.next();
            });
    }

    getCharacters(chosenList) {
        return this.characters.filter((char) => {
            switch (chosenList) {
                case 'all':
                    return true;
                case 'light':
                    return char.side === 'light';
                case 'dark':
                    return char.side === 'dark';
            }
        })
    }

    addCharacter(name: string, side: string) {
        const pos = this.characters.findIndex(c => {
            return c.name === name
        });
        if (pos != -1) {
            return;
        }
        const newChar = {name, side};
        this.characters.push(newChar);
    }

    onSideAssigned(character) {
        const pos = this.characters.findIndex(c => {
            return c.name === character.name
        });
        this.characters[pos].side = character.side;
        this.charactersChanged.next();
    }

}