import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from '../components/main-layout/main-layout.component';
import { GraphComponent } from '../components/graph/graph.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { actionReducer } from '../redux/reducer';
import { EffectService } from '../redux/effects';
import { RouterModule, Routes } from '@angular/router';

const route:Routes = [
  {path:'main', component:MainLayoutComponent}
]


@NgModule({
  declarations: [
    MainLayoutComponent,
    GraphComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot(actionReducer),
    EffectsModule.forRoot([EffectService]),
    !environment.production? StoreDevtoolsModule.instrument():[],
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    RouterModule.forChild(route)

  ]
  // exports:[
  //   MainLayoutComponent,
  //   GraphComponent,
   
  // ]
})
export class LayoutModule { }
