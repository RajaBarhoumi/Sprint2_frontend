import { Famille } from "./famille.model";

export class Aliment {
    idAliment? : number;
    nomAliment? : string;
    glucideAliment? : number;
    calorieAliment? : number;
    lipideAliment? : number;
    proteineAliment? : number;
    fibreAliment? : number;
    dateCreation? : Date ;
    famille! : Famille;
    }
    