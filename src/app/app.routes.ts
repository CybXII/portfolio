import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: MainComponent, pathMatch: 'full' },
    { 
        path: 'about', 
        redirectTo: '', 
        pathMatch: 'full', 
        data: { scrollTo: 'about' } 
    },
    { 
        path: 'skills', 
        redirectTo: '', 
        pathMatch: 'full', 
        data: { scrollTo: 'skills' } 
    },
    { 
        path: 'portfolio', 
        redirectTo: '', 
        pathMatch: 'full', 
        data: { scrollTo: 'portfolio' } 
    },
    
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy', component: PrivacyComponent },

    { path: 'imprint/about', redirectTo: '' },
    { path: 'imprint/skills', redirectTo: '' },
    { path: 'imprint/portfolio', redirectTo: '' },

    { path: 'privacy/about', redirectTo: '' },
    { path: 'privacy/skills', redirectTo: '' },
    { path: 'privacy/portfolio', redirectTo: '' },

    // { path: '**', redirectTo: '/', pathMatch: 'full' }  // Fallback-Route
];
