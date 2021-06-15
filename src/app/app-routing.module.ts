import { CircleProgressComponent } from './pages/circle-progress/circle-progress.component';
import { CardComponent } from './pages/card/card.component';
import { ButtonComponent } from './pages/button/button.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'button', component: ButtonComponent },
    { path: 'card', component: CardComponent },
    { path: 'circle-progress', component: CircleProgressComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
