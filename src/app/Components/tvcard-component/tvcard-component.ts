import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-tvcard-component',
  imports: [CardModule,CommonModule, ButtonModule],
  templateUrl: './tvcard-component.html',
  styleUrl: './tvcard-component.scss'
})
export class TvcardComponent {
movie = input<any>();

}
