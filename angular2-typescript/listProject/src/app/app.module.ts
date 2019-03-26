import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {TabsComponent} from './tabs/tabs.component';
import {ListComponent} from './list/list.component';
import {ItemComponent} from './item/item.component';
import {StarWarsService} from "./star-wars.service";
import {HeaderComponent} from './header/header.component';

import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        TabsComponent,
        ListComponent,
        ItemComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule
    ],
    providers: [StarWarsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

