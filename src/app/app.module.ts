import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './views/curriculum-vitea.domain/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerSectionComponent } from './views/curriculum-vitea.domain/container-section/container-section.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ContainerSectionModule } from './views/curriculum-vitea.domain/container-section/container-section.module';

// function to export into factories about translate module
export function FactoryHttpLoader(http: HttpClient){
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}


@NgModule({
  declarations: [
    AppComponent,
    ContainerSectionComponent,
    SidenavComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ContainerSectionModule,
    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: FactoryHttpLoader,
        deps: [HttpClient]
      }
    })
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
