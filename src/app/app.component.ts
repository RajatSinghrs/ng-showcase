import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { provideQueryClient } from '@ngneat/query';
import { QueryClient } from '@tanstack/query-core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
   providers: [provideQueryClient(new QueryClient())]
})
export class AppComponent {
}
