import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-circle-progress',
    templateUrl: './circle-progress.component.html',
    styleUrls: ['./circle-progress.component.scss'],
})
export class CircleProgressComponent {
    @ViewChild('circle') circle: any;
    input = 0;
    pourcentage = 0;

    constructor() {}

    changePercent(): void {
        let change = 870.49 - (870.49 * this.input) / 100;
        this.pourcentage = this.input;
        this.circle.nativeElement.style.strokeDashoffset = change.toString();
    }

    onKeyUp(event: any): void {
        this.input = event.value;
    }
}
