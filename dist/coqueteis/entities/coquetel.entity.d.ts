import { ObjectId } from 'typeorm';
export declare class Coquetel {
    id: ObjectId;
    name: string;
    ingredients: string;
    instructions: string;
}
export default Coquetel;
