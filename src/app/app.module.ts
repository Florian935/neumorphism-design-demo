import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ButtonComponent } from './pages/button/button.component';
import { CardComponent } from './pages/card/card.component';

const MATERIALS = [MatButtonModule, MatCardModule, MatProgressSpinnerModule];
@NgModule({
    declarations: [AppComponent, ButtonComponent, CardComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MATERIALS,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
