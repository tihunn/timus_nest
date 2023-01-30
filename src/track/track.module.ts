import {Module} from "@nestjs/common";
import {TrackService} from "./track.service";
import {TrackController} from "./track.controller";
import {trackProviders} from "./track.providers"
import {FileService} from "../file/file.service";


@Module({
    providers: [TrackService, ...trackProviders, FileService],
    controllers: [TrackController]
})
export class TrackModule {}