import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  value;

  handleSubmit(value) {
    if( value.hasOwnProperty('firstname')) {
      this.value = value;
      console.log(value);
    }
  }
}
