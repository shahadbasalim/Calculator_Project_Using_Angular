import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // result = '';
  // getAction(item: any) {
  //   this.result += item; // result = result + item
  // }

  // equal() {
  //   try {
  //     this.result = eval(this.result);
  //   } catch (error) {
  //     this.result = 'Error';
  //   }
  // }

  // reset() {
  //   this.result = '';
  // }

  result: string = '';
  getAction(item: any) {
    this.result += item;
  }
  equal() {
    try {
      this.result = eval(this.result);
    } catch (error) {
      this.result = 'Error';
    }
  }

  reset() {
    this.result = '';
  }
}
