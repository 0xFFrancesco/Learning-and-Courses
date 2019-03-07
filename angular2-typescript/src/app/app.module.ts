import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'

import {AppComponent} from './app.component';
import {UserComponent} from "./user.component";
import {StatusComponent} from "./status.component";

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        StatusComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
