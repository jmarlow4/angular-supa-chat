import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  public suit: string | undefined = 'hello';
  constructor(private http: HttpClient) {}

  changeSuit() {
    this.suit = 'new suit!!';
  }

  drawDeck(): Observable<any> {
    return this.http.get(
      'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    );
  }
}
