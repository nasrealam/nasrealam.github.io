import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  closeMenu() {
    // Find the checkbox with the #check ID and set its "checked" property to false
    const checkbox = document.getElementById('check') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }
}


