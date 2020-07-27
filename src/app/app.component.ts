// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-qr-code-tutorial';

  public qrdata: string = null;
  public level: "L" | "M" | "Q" | "H";
  public width: number;

  constructor() {
    this.level = "M";
    this.qrdata = "Initial QR code data string";
    this.width = 256;
  }

  changeLevel(newValue: "L" | "M" | "Q" | "H"): void {
    this.level = newValue;
  }

  changeQrdata(newValue: string): void {
    this.qrdata = newValue;
  }

  changeWidth(newValue: number): void {
    this.width = newValue;
  }
}