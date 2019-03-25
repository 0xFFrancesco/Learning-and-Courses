import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {TabsComponent} from './tabs/tabs.component';
import {ListComponent} from './list/list.component';
import {ItemComponent} from './item/item.component';
import {StarWarsService} from "./star-wars.service";
import {CreateCharacterComponent} from './create-character/create-character.component';
import {HeaderComponent} from './header/header.component';

const router: Routes = [
    {
        path: 'characters', component: TabsComponent, children: [
            {path: '', redirectTo: 'all', pathMatch: 'full'},
            {path: ':side', component: ListComponent}
        ]
    },
    {path: 'new-character', component: CreateCharacterComponent},
    {path: '**', redirectTo: '/characters'},
];

@NgModule({
    declarations: [
        AppComponent,
        TabsComponent,
        ListComponent,
        ItemComponent,
        CreateCharacterComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(router),
        HttpModule
    ],
    providers: [StarWarsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

