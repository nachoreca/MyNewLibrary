import { NgModule } from '@angular/core';
import { MyNewLibraryComponent } from './my-new-library.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    MyNewLibraryComponent,
    TestComponent
  ],
  imports: [
  ],
  exports: [
    MyNewLibraryComponent,
    TestComponent
  ]
})
export class MyNewLibraryModule { }
