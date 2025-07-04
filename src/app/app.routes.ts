import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./Components/cards-component/cards-component').then((m) => m.CardsComponent), pathMatch: 'full'
    },
    {
        path: 'watchlist',
        loadComponent: () => import('./Components/whatchlist-component/whatchlist-component').then((m) => m.WhatchlistComponent),
        pathMatch: 'full',
    },
    {
        path:'cards',
        loadComponent:()=> import('./Components/cards-component/cards-component').then((m)=>m.CardsComponent)
    },
    {
        path:'details/:id',
        loadComponent:()=> import('./Components/details-component/details-component').then((m)=>m.DetailsComponent)
    }
   ,
    {
        path:'tv',
        loadComponent:()=> import('./Components/tv-component/tv-component').then((m)=>m.TvComponent)
    },
    {
        path:'tvdetails/:id',
        loadComponent:()=> import('./Components/tv-details/tv-details').then((m)=>m.TvDetails)
    }
];
