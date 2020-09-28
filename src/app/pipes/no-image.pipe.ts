import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage',
})
export class NoImagePipe implements PipeTransform {
  transform(img: string): string {
    if (img === '') {
      img = 'assets/images/logos/logo-gris.png';
      return img;
    } else {
      return img;
    }

    return null;
  }
}
