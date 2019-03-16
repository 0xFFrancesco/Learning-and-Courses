interface Character {
    name: string,
    side: string
}

export class StarWarsService {

    private characters: Character[] = [
        {name: 'Like Skywalker', side: ''},
        {name: 'Dark Vader', side: ''},
    ];

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

    onSideAssigned(character) {
        const pos = this.characters.findIndex(c => {
            return c.name === character.name
        });
        this.characters[pos].side = character.side
    }

}