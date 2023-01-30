import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {CommentModule} from "./comment/comment.module";
import {DatabaseModule} from "./database/database.module";
import {FileModule} from "./file/file.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from "path";



@Module({
    imports: [
        ServeStaticModule.forRoot({
           rootPath: path.resolve(__dirname, "static")
        }),
        TrackModule,
        CommentModule,
        DatabaseModule,
        FileModule]
})
export class AppModule {}