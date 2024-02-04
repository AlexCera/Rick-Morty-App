import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule]
})
export class HomePage implements OnInit {

  characters: any[] = [];
  params = {} as any;

  constructor(
    private rmService: ApiService //Rick and morty service
  ) { }

  ngOnInit() {
    this.params.page = 0;

    this.getCharacters()
  }

  /* --- Obterner personajes --- */
  getCharacters(event?: any) {
    this.params.page += 1;

    this.rmService.getCharacters(this.params).subscribe({
      next: (res: any) => {
        this.characters.push(...res.results);
        console.log(this.characters);

        if (event) event.target.complete();
      },
      error: (err: any) => {
        if (event) event.target.complete();
      },
    })
  }

  /* --- Buscar personajes --- */
  searchCharacters() {
    this.params.page = 1;

    this.rmService.getCharacters(this.params).subscribe({
      next: (res: any) => {
        this.characters = res.results;
      },
      error: (err: any) => {
      },
    })
  }
}
