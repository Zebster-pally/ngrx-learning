import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { UserEffects } from "../app/store/effects/user.effects";
import { appReducers } from "./store/reducers/app.reducers";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    imports: [
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([UserEffects]),
        StoreDevtoolsModule.instrument()
    ]
})
export class AppStoreModule { }
