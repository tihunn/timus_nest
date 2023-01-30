import {Module} from "@nestjs/common";
import {commentProviders} from "./comment.propviders";
import {CommentService} from "./comment.service";
import {CommentController} from "./comment.controller";


@Module({
    providers: [CommentService, ...commentProviders],
    controllers: [CommentController]
})
export class CommentModule {}