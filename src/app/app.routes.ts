import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [

    {'path':'home','title':'Home',component:HomeComponent},
    {'path':'about','title':'About',component: AboutComponent},
    {'path':'test','title':'test',component: TestComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    
];
