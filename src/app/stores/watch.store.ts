import { computed, effect } from '@angular/core';
import {
  patchState,
  signalStore,
  watchState,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';

let initialwishState: any[] = [];
export const watchlistStore = signalStore(
  //param 1
  { providedIn: 'root' },
  //param 2
  withState({
    wisharr: initialwishState,
  }),

  withMethods((state) => ({
  addtowish: (movie: any) =>
    patchState(state, {
      wisharr: [...state.wisharr(), movie],
    }),

  removefromwish: (id: number) =>
    patchState(state, {
      wisharr: state.wisharr().filter(item => item.id !== id),
    }),

  isInwish: (id: number) =>
    state.wisharr().some(item => item.id === id),

  getWishItems: () => state.wisharr(),

  togglemovie(event: Event, movie: any) {
    event.stopPropagation();
    if (this.isInwish(movie.id)) {
      this.removefromwish(movie.id);
    } else {
      this.addtowish(movie);
      
    }
  },
    togglemoviedetails( movie: any) {
    if (this.isInwish(movie.id)) {
      this.removefromwish(movie.id);
    } else {
      this.addtowish(movie);
      
    }
  },

  
})


),



  //param 5

  withHooks({
    onInit(store) {
      console.log('Store Initialized');


        const watcher = watchState(store, (state) => {
                console.log('Counter changed to:', state.wisharr);
            });

            
            // effect(()=>{
            //     const counter = store.counter();
            //     const state = store.status();
            //     console.log("state has been changed from effect")
            // })
    },
    

    onDestroy(store) {
      console.log('Store Destroyed');
    },
  })
);
