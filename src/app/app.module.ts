import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes}from '@angular/router';



import { AppComponent } from './app.component';
import{ FooterComponent }from './footer.component';
import{ HeaderComponent }from './header.component';
import{ HomeComponent }from './views/home.component';
import{ ProfileComponent }from './views/profile.component';
import{ LoginComponent }from './views/login.component';
import{ContainerComponent}from'./views/container.Component'



@NgModule({
  declarations: [
    AppComponent,FooterComponent,HeaderComponent,HomeComponent,ProfileComponent,LoginComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([{
      path:'home',
      component:HomeComponent
    },{
      path:'profile',
      component:ProfileComponent
    },{
      path:'container',
      component:ContainerComponent
    },{
      path:'',
      component:LoginComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
