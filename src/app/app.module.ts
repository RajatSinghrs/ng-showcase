import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TypewriterEffectComponent } from './typewriter-effect/typewriter-effect.component';
import { PackageCardComponent } from './package-card/package-card.component';
import { CodeBlockComponent } from './code-block/code-block.component';

import { LucideAngularModule, Github, Mail, ExternalLink, Terminal, Code, Zap } from 'lucide-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    TypewriterEffectComponent,
    PackageCardComponent,
    CodeBlockComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    LucideAngularModule.pick({ Github, Mail, ExternalLink, Terminal, Code, Zap })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }