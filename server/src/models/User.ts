import {Schema, model} from 'mongoose';

export const UserSchema = new Schema({
    login: String,
    password: String,
});

const User = model('User', UserSchema);

export default User;