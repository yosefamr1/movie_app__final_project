import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-mooviecard',
  imports: [CommonModule],
  templateUrl: './mooviecard.html',
  styleUrl: './mooviecard.scss'
})
export class Mooviecard {
movie = input<any>();

}
