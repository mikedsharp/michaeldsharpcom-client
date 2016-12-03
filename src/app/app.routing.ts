import {Routes, RouterModule} from '@angular/router'; 

import {HomeViewComponent} from './home/home.component'; 
import {AboutViewComponent} from './about/about.component'; 
import {ProjectsListViewComponent} from './projects/projects-list.component'; 
import {ProjectViewComponent} from './projects/project.component'; 
import {ContactViewComponent} from './contact/contact.component'; 

const appRoutes = [
    {
        path: '',  
        redirectTo: '/home', 
        pathMatch: 'full'
    }, 
    {
        path: 'home', 
        component: HomeViewComponent
    }, 
    {
        path: 'about', 
        component: AboutViewComponent
    }, 
    {
        path: 'projects', 
        component: ProjectsListViewComponent
    }, 
    {
        path: 'projects/:id', 
        component: ProjectViewComponent
    }, 
    {
        path: 'contact', 
        component: ContactViewComponent
    }, 
    {
        path: '**', 
        redirectTo: '/home' 
    }
];

export const routing = RouterModule.forRoot(appRoutes); 
export const routedComponents = [HomeViewComponent, AboutViewComponent, ProjectsListViewComponent, ProjectViewComponent, ContactViewComponent ]; 
