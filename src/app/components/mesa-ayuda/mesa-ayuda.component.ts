import { Component } from '@angular/core';

@Component({
  selector: 'app-mesa-ayuda',
  standalone: true,
  imports: [],
  templateUrl: './mesa-ayuda.component.html',
  styleUrl: './mesa-ayuda.component.css',
})
export class MesaAyudaComponent {
  showContent(content: string) {
    const descriptionContent = document.querySelector('.description-content');
    const responseContent = document.querySelector('.response-content');
    const descriptionPagination = document.querySelector(
      '.pagination-item:nth-child(1)'
    );
    const responsePagination = document.querySelector(
      '.pagination-item:nth-child(2)'
    );

    if (content === 'description') {
      descriptionContent?.classList.add('active');
      responseContent?.classList.remove('active');
      descriptionPagination?.classList.add('active');
      responsePagination?.classList.remove('active');
    } else if (content === 'response') {
      descriptionContent?.classList.remove('active');
      responseContent?.classList.add('active');
      descriptionPagination?.classList.remove('active');
      responsePagination?.classList.add('active');
    }
  }
}
