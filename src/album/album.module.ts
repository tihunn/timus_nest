import {Module} from "@nestjs/common";
import {DatabaseModule} from "../database/database.module";
import {AlbumService} from "./album.service";
import {albumProviders} from "./album.providers";


@Module({
    imports: [ DatabaseModule ],
    providers: [AlbumService, ...albumProviders],
})
export class AlbumModule {}