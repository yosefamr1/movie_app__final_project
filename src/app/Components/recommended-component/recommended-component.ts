import { CommonModule } from '@angular/common';
import { Component ,input} from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-recommended-component',
  imports: [CardModule,CommonModule],
  templateUrl: './recommended-component.html',
  styleUrl: './recommended-component.scss'
})
export class RecommendedComponent {
recommended  = input<any>();

}
