import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  result = 0;

  typedValue1 = '0';
  typedValue2 = '0';
  operator = '';

  @ViewChild('userinput') userInput;

  keyPressed(event) {
    console.log(typeof event)
    this.setDisplayValue(event);

    if (event >= 0 || event <= 9) {
      this.typedValue1 = this.typedValue1 + `${event}`;
      console.log('number', event);
    } else if (
      event === '+' ||
      event === '-' ||
      event === '*' ||
      event === '=' ||
      event === '/'
    ) {
      this.typedValue2 = this.typedValue1;
      this.typedValue1 = '0';
      console.log(this.typedValue1)
      console.log(this.typedValue2)


      if (event === '+') {
        this.operator = event;
      }
      if (event === '=') {
        this.result = Number(this.typedValue1) + Number(this.typedValue2);
        this.setDisplayValue(this.result);
      }
    }
    // this.setDisplayValue(event);
  }

  ngAfterViewInit() {
    this.userInput.nativeElement.value = 0;
  }

  setDisplayValue(val) {
    this.userInput.nativeElement.value = val;
  }
}
