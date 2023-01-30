import {Inject, Injectable} from "@nestjs/common";
import {comment} from "./comment.entity";
import {CreateCommentDto} from "./dto/createCommentDto";
import {track} from "../track/track.entity";

@Injectable()
export class CommentService {
    constructor(
        @Inject('COMMENT_REPOSITORY')
        private commentModel: typeof comment,
    ) {}

    async createComment(dto: CreateCommentDto): Promise<comment> {
        return await this.commentModel.create({...dto})
    }

    async findAll(): Promise<comment[]> {
        return await this.commentModel.findAll()
    }

    findOne(id: string): Promise<comment> {
        return this.commentModel.findByPk(id)
    }

    async delete(id: string): Promise<string> {
        const track = await this.findOne(id)
        await track.destroy()
        return `Comment with id: ${id} deleted`
    }

}