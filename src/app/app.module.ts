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

import { NgCircleProgressModule } from 'ng-circle-progress';
import { CircleProgressComponent } from './pages/circle-progress/circle-progress.component';

const MATERIALS = [MatButtonModule, MatCardModule, MatProgressSpinnerModule];
@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        CardComponent,
        CircleProgressComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MATERIALS,
        NgCircleProgressModule.forRoot({
            radius: 60,
            space: -10,
            outerStrokeGradient: true,
            outerStrokeWidth: 10,
            outerStrokeColor: '#4882c2',
            outerStrokeGradientStopColor: '#53a9ff',
            innerStrokeColor: '#e7e8ea',
            innerStrokeWidth: 10,
            title: 'UI',
            animateTitle: false,
            showUnits: false,
            showBackground: false,
            startFromZero: false,
            clockwise: true,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
