import { ToolsModule } from './feature/tools/tools.module';
import { JobsModule } from './feature/jobs/jobs.module';
import { FeatureModule } from './feature/feature.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  bootstrap: [AppComponent]
})
export class AppModule { }
