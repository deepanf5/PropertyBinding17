import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { AttributeComponent } from './components/attribute/attribute.component';
import { EventComponent } from './components/event/event.component';
import { StyleClassComponent } from './components/style-class/style-class.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InterpolationComponent,
    PropertyBindingComponent,
    TwoWayComponent,
    AttributeComponent,
    EventComponent,
    StyleClassComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
