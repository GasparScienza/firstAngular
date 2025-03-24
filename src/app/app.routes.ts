import { Routes } from '@angular/router';
import { HeroPageComponent } from './pages/hero/hero-page/hero-page.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page/dragonball-page.component';

export const routes: Routes = [
    {
        path: 'hero',
        component: HeroPageComponent
    },
    {
        path: '',
        component: CounterPageComponent
    },
    {
        path: 'dragonball',
        component: DragonballPageComponent
    }
];
