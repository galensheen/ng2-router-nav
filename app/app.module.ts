/**
 * Created by galen on 16/12/5.
 */

// import core libs
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// import other modules

// import service

// import component
import {AppComponent} from "./app.component";


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
