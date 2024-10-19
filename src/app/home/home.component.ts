import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SliderComponent } from '../slider/slider.component';
import { HomeContentComponent } from "../home-content/home-content.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SliderComponent, HomeContentComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
}
