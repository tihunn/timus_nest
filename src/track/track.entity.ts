import {BelongsTo, Column, ForeignKey, HasMany, Model, Table} from 'sequelize-typescript';
import {comment} from "../comment/comment.entity";
import {album} from "../album/album.entity";

@Table
export class track extends Model {
    @Column
    name: string;

    @Column
    artist: string;

    @Column
    text: string;

    @Column
    listens: number;

    @Column
    picture: string;

    @Column
    audio: string;

    @HasMany(() => comment)
    comments: comment[]

    @ForeignKey(() => album)
    @Column
    AlbumId: number;

    @BelongsTo(() => album)
    album: album;

}