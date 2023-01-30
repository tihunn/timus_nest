import {Inject, Injectable} from "@nestjs/common";
import {album} from "./album.entity";

@Injectable()
export class AlbumService {
    constructor(
        @Inject('ALBUM_REPOSITORY')
        private albumModel: typeof album,
    ) {
    }


}