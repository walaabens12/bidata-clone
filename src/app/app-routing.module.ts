import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsComponent } from './news/news.component';
import { NousComponent } from './nous/nous.component';
import { HomeComponent } from './home/home.component';

//
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = 
[

   {path:'Aboutus' , component: NousComponent},
    {path:'News' , component: NewsComponent},
     {path:'Gallerie' , component: GalleryComponent},
      {path:'Contact' , component: ContactComponent},
       {path: 'Home',  component: HomeComponent},
       {path:'**' , component: NotfoundComponent},
       
        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
