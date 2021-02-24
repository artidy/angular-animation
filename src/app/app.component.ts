import { Component } from '@angular/core';
import { boxAnimations } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: boxAnimations
})
export class AppComponent {
  boxState = 'start'
  visible = true

  animate() {
    this.boxState = this.boxState !== 'end' ? 'end' : 'start'
  }

  animationStarted(event: AnimationEvent) {
    console.log(event)
  }

  animationEnd(event: AnimationEvent) {
    console.log(event)
  }
}
