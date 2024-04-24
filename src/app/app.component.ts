import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DeckService } from './services/deck.service';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, AsyncPipe, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-supa-chat';
  deck$!: Observable<any | undefined>;

  constructor(private deckService: DeckService) {}

  appStuff: string | undefined = 'shit';

  ngOnInit(): void {
    this.appStuff = this.deckService.suit;
  }

  changeTheSuit() {
    this.deckService.changeSuit();
    this.appStuff = this.deckService.suit;
  }

  drawDeck() {
    this.deck$ = this.deckService.drawDeck();
  }
}
