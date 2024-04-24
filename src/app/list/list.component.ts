import { Component, Input, OnInit } from '@angular/core';
import { DeckService } from '../services/deck.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  @Input() stuff: string | undefined;

  constructor(private deckService: DeckService) {}

  ngOnInit(): void {
    console.log('suit', this.deckService.suit);
  }
}
