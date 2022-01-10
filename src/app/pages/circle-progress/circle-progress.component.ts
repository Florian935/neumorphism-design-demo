import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-circle-progress',
    templateUrl: './circle-progress.component.html',
    styleUrls: ['./circle-progress.component.scss'],
})
export class CircleProgressComponent implements AfterViewInit {
    @ViewChild('circle') circle: any;
    percent = 0;

    ngAfterViewInit(): void {
        this.circle.nativeElement.style.strokeDasharray = '890.49';
        this.circle.nativeElement.style.strokeWidth = '0';
    }

    constructor() {}

    onChangePercent(percent: string): void {
        this.percent = parseInt(percent);

        if (percent === '100') {
            this.circle.nativeElement.style.strokeDasharray = '0';

            return;
        }

        if (percent === '0' || !percent) {
            this.circle.nativeElement.style.strokeWidth = '0';
            this.percent = 0;
            return;
        }

        this.circle.nativeElement.style.strokeDasharray = '890.49';

        this.circle.nativeElement.style.strokeWidth = '24';
        const strokeDasharray = this.circle.nativeElement.style.strokeDasharray;
        const change = strokeDasharray - (strokeDasharray * this.percent) / 100;
        this.circle.nativeElement.style.strokeDashoffset = change.toString();
    }
}
