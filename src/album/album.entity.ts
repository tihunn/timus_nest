import {Column, Model, Table, HasMany} from 'sequelize-typescript';
import {track} from "../track/track.entity";

@Table
export class album extends Model {
    @Column
    albumName: string;

    @Column
    author: string;

    @Column
    picture: string;

    @HasMany(() => track)
    tracks: track[]

}