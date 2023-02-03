import { Pipe, PipeTransform } from '@angular/core';
import {transliterate} from "transliteration";

@Pipe({
  name: 'translit'
})
export class TranslitPipe implements PipeTransform {
  transform(value: string): string {
    return transliterate(value);
  }
}
