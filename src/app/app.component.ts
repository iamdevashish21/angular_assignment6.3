import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="container">
      <h1>Welcome to Inline Angular Application</h1>
      <p>This content is directly written in the app.component.ts file!</p>
    </div>
  `,
  styles: [`
    .container {
      text-align: center;
      margin-top: 50px;
    }
    h1 {
      color: #4CAF50;
      font-size: 2.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  `]
})
export class AppComponent {
  title = 'inline-app';
}
