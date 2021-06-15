import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    constructor() {}

    isActive = false;

    onClick(): void {
        this.isActive = !this.isActive;
    }
}
