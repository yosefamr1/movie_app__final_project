import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-mooviecard',
  imports: [CommonModule,CardModule,ButtonModule],
  templateUrl: './mooviecard.html',
  styleUrl: './mooviecard.scss'
})
export class Mooviecard {
movie = input<any>();

}
