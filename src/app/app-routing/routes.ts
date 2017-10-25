import { Routes } from '@angular/router';

import { FormComponent } from '../form/form.component';
import { OverviewComponent } from './../overview/overview.component';

export const routes: Routes = [
    // { path: 'server', component: HomeComponent },
    { path: '', redirectTo: 'form', pathMatch: 'full' },
    { path: 'form', component: FormComponent },
    { path: 'overview', component: OverviewComponent }
];