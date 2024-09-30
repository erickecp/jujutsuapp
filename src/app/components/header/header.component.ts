import { Component, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonTitle, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonHeader,IonToolbar, IonButtons,IonTitle, IonBackButton],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input(
    {
      required: true
    }
  ) title!: string;
  @Input() back: boolean = false;
  constructor() { }


}
