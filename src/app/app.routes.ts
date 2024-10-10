import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test.component';
import { RformComponent } from './rform/rform.component';

export const routes: Routes = [

    {'path':'home','title':'Home',component:HomeComponent},
    {'path':'about','title':'About',component: AboutComponent},
    {'path':'test','title':'test',component: TestComponent},
    {'path':'ReactiveForm','title':'Reactive Form',component: RformComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    
];
