import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { ToolsModule } from './feature/tools/tools.module';
import { JobsModule } from './feature/jobs/jobs.module';
import { FeatureModule } from './feature/feature.module';
import "@lottiefiles/lottie-player";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    FeatureModule,
    ToolsModule,
    JobsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
