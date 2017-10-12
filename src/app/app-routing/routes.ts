import { Routes } from '@angular/router';

import { FormComponent } from '../form/form.component';

export const routes: Routes = [
    // { path: 'server', component: HomeComponent },
    { path: '', redirectTo: 'form', pathMatch: 'full' },
    { path: 'form', component: FormComponent }
];