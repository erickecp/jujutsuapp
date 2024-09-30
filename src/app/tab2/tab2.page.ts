import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { close, heartOutline, search } from 'ionicons/icons';
import { AnimeService } from '../services/anime.service';
import { CardAnimeComponent } from '../components/card-anime/card-anime.component';
import { HeaderComponent } from '../components/header/header.component';
import { IonRow, IonContent, IonCol, IonGrid, IonSearchbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [CardAnimeComponent, HeaderComponent , IonRow , IonContent, IonCol, IonGrid, IonSearchbar]
})
export class Tab2Page {
  sinData = false;
  encontrados: any[] = [];
  constructor( private animeS: AnimeService ) {
    addIcons({search, close, heartOutline})
  }
  buscar(evento: any){
    this.sinData = true;
    console.log(evento.detail.value);
    this.animeS.searchAnime(evento.detail.value).subscribe( (resp: any) => {
      this.encontrados = resp.data;
      console.log(this.encontrados);
    } )
  }
}
