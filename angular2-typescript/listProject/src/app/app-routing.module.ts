import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsComponent} from "./tabs/tabs.component";
import {ListComponent} from "./list/list.component";

const router: Routes = [
    {
        path: 'characters', component: TabsComponent, children: [
            {path: '', redirectTo: 'all', pathMatch: 'full'},
            {path: ':side', component: ListComponent}
        ]
    },
    {path: 'new-character', loadChildren: "./create-character/create-character.module#CreateCharacterModule"},
    {path: '**', redirectTo: '/characters'},
];


@NgModule({
    imports: [
        RouterModule.forRoot(router),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
