import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mfe-analytics-mfe-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main
      class="mfe-container"
      role="main"
      aria-label="analytics-mfe Remote Module"
    >
      <header class="mfe-header">
        <h1>Microfrontend: analytics-mfe</h1>
        <p class="status">Status: Active (Zoneless Angular 21)</p>
      </header>

      <section class="mfe-content" aria-labelledby="counter-heading">
        <h2 id="counter-heading">Interactive Signal State</h2>
        <p id="counter-value" aria-live="polite">
          Current Count: <strong>{{ count() }}</strong>
        </p>

        <div class="actions">
          <button
            type="button"
            (click)="increment()"
            aria-label="Increment counter value"
          >
            Increment
          </button>
          <button
            type="button"
            (click)="decrement()"
            aria-label="Decrement counter value"
          >
            Decrement
          </button>
        </div>
      </section>
    </main>
  `,
  styles: [
    `
      .mfe-container {
        padding: 1.5rem;
        border: 2px dashed #3f51b5;
        border-radius: 8px;
        font-family: sans-serif;
      }
      .mfe-header h1 {
        margin: 0 0 0.5rem 0;
        color: #212121;
      }
      .actions {
        display: flex;
        gap: 0.75rem;
        margin-top: 1rem;
      }
      button {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        cursor: pointer;
        border-radius: 4px;
        border: 1px solid #ccc;
      }
      button:focus-visible {
        outline: 3px solid #ff4081;
        outline-offset: 2px;
      }
    `,
  ],
})
export class AppComponent {
  count = signal(0);

  increment() {
    this.count.update((c) => c + 1);
  }

  decrement() {
    this.count.update((c) => c - 1);
  }
}
