import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Shared Modules
import { SharedModule } from './sharedmodule/common.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { UsersComponent } from './components/pages/users/users.component';
import { CommonService } from './service/common.service';
import { ToastrModule } from 'ngx-toastr';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  declarations: [AppComponent,
    UsersComponent,
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),  ToastrModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, SharedModule, NgxJsonViewerModule],
  exports: [SharedModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, CommonService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
