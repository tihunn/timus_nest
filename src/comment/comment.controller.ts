import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {CommentService} from "./comment.service";
import {CreateCommentDto} from "./dto/createCommentDto";



@Controller("/comment")
export class CommentController {
    constructor(private commentService: CommentService) {
    }

    @Post()
    createComment(@Body() dto: CreateCommentDto) {
        return this.commentService.createComment(dto)
    }


    @Get()
    getAll() {
        return this.commentService.findAll()
    }

    @Delete(":id")
    delete(@Param("id") id: string) {
        return this.commentService.delete(id)
    }

}