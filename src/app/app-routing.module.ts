import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'registration',
  //   component: RegistrationComponent
  // },
  // {
  //   path: 'processing',
  //   component: ProcessingComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routedComponents = [RegistrationComponent, ProcessingComponent];
