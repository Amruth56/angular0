import { Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { AllComponent } from './observable/all/all.component';

export const routes: Routes = [
    {
        path:'observable', component: ObservableComponent, children:[
            {path: 'list', component: AllComponent}
        ]

    }
];
