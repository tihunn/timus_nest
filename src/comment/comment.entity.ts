import { Column, Model, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import {track} from "../track/track.entity";

@Table
export class comment extends Model {
    @Column
    userName: string;

    @Column
    text: string;

    @ForeignKey(() => track)
    @Column
    trackId: number;

    @BelongsTo(() => track)
    track: track;

}