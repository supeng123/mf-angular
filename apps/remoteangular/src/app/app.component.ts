import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'remoteangular';

  person={
    name: 'su',
    surname: 'logan'
  }

  getFullName(): string {
    console.log('get full name function called')
    return `${this.person.name} ${this.person.surname}`;
  }

  test(): void {
    console.log('test')
  }
}
