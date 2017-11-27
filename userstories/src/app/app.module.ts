import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserstoryComponent } from './components/userstory/userstory.component';
import { AboutComponent } from './components/about/about.component';

//import forms module
import { FormsModule } from '@angular/forms';
//import router 
import { RouterModule, Routes} from '@angular/router';
//create our routes
const appRoutes: Routes=[
  {path:'',component:UserstoryComponent},
  {path:'about',component:AboutComponent}
]
//end
@NgModule({
  declarations: [
    AppComponent,
    UserstoryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)//import routes and pass our routes projects and about
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
