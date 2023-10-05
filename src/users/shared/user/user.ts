import { Document } from 'mongoose';

export class User extends Document {
    name: string;
    username: string;
    password: string;
    canCreate: boolean;
    canEdit: boolean;
}
