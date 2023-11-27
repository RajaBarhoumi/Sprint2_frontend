import { Famille } from './famille.model';
import { Image } from './image.model';

export class Aliment {
  idAliment?: number;
  nomAliment?: string;
  glucideAliment?: number;
  calorieAliment?: number;
  lipideAliment?: number;
  proteineAliment?: number;
  fibreAliment?: number;
  dateCreation?: Date;
  famille!: Famille;
  image! : Image;
    imageStr!:string;

    images!: Image[];
}
