import { Component } from '@angular/core';

@Component({
  selector: 'app-style-class',
  standalone: true,
  imports: [],
  templateUrl: './style-class.component.html',
  styleUrl: './style-class.component.css'
})
export class StyleClassComponent {
  ActiveStatus: boolean = false

  onBtnClick() {
    this.ActiveStatus = !this.ActiveStatus
  }

}
