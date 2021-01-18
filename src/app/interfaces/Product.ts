import { QuantityUnit } from './QuantityUnit';

export interface Product {
    _id? : number;
    name? : string;
    description? : string;
    price? : number;
    currency? : string;
    quantityUnit? : QuantityUnit;
    quantity? : number;
}