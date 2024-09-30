import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonItemDivider, IonAvatar,IonContent, IonIcon,IonItem ,IonChip,IonLabel, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';
import { addIcons } from 'ionicons';
import { chevronDownOutline, chevronUpOutline, star } from 'ionicons/icons';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.page.html',
  styleUrls: ['./anime-detail.page.scss'],
  standalone: true,
  imports: [IonAvatar,IonItemDivider,IonIcon, IonLabel,IonContent,IonGrid,IonRow, IonCol, IonItem, IonChip,
    HeaderComponent, CommonModule, FormsModule]
})
export class AnimeDetailPage  {
  verSinop = false;
  personajes:any[] =[];
  miAnime: any = {};
  constructor(
    private actRoute: ActivatedRoute,
    private animeS: AnimeService
  ) {
    addIcons({star, chevronDownOutline, chevronUpOutline})
    this.actRoute.params.subscribe( (params: any) => {
      console.log(params.id);
      this.animeS.getAnimeById(params.id).subscribe( (anime:any) => {
        console.log(anime);
        this.miAnime = anime.data;
      });
      this.getCharacters(params.id);
    });
  }
  verSinopsis(){
    this.verSinop = !this.verSinop;
  }

  getCharacters(id:string){
    this.animeS.getCharacters(id).subscribe( (personajes: any) => {
      this.personajes = personajes.data;
      this.personajes = this.personajes.slice(0,19);
      console.log(this.personajes);

    });
  }



}
