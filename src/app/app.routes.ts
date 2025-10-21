import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Formation } from './pages/formation/formation';
import { Production } from './pages/production/production';
import { Courses } from './pages/courses/courses';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'formation', component: Formation },
    { path: 'production', component: Production },
    { path: 'courses', component: Courses }
];
