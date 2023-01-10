import { ToolsModule } from './feature/tools/tools.module';
import { JobsModule } from './feature/jobs/jobs.module';
import { FeatureModule } from './feature/feature.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
    JobsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
