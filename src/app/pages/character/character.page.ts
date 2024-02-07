import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule]
})
export class CharacterPage implements OnInit {

  private characterID: string = '';
  protected character = null as any;
  protected episodes: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private rmService: ApiService //Rick and morty service
  ) {
    this.characterID = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getCharacter();
  }

  /* --- Obterner información detallada del personaje --- */
  getCharacter() {
    this.rmService.getCharacterById(this.characterID).subscribe({
      next: (res: any) => {
        this.character = res;
        this.getEpisodes();
      },
      error: (err: any) => {
      },
    })
  }

  getEpisodes() {
    for (let url of this.character.episode) {
      this.rmService.getInfoByUrl(url).subscribe({
        next: (res: any) => {
          this.episodes.push(res)
        },
        error: (err: any) => {
        },
      })
    }
  }

}
