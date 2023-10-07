import { Document } from 'mongoose';

export class User extends Document {
    name: string;
    email: string;
    password: string;
    canCreate: boolean;
    canEdit: boolean;
}
