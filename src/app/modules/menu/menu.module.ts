import {NgModule} from '@angular/core';
import {MenuComponent} from './menu/menu.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared/shared.module';

const routes: Routes = [
  {path: '', component: MenuComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [MenuComponent]
})
export class MenuModule {
}
