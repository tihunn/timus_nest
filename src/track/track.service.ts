import {Inject, Injectable} from "@nestjs/common";
import {track} from "./track.entity";
import {CreateTrackDto} from "./dto/createTrackDto";
import {FileService, FileType} from "../file/file.service";
import {Op, where} from "sequelize";
import {query} from "express";


@Injectable()
export class TrackService {
    constructor(
        @Inject('TRACK_REPOSITORY')
        private trackModel: typeof track,
        private fileService: FileService
    ) {
    }

    async findAll(page = 1, limit = 10): Promise<{ count, rows }> {
        const offset = page * limit - limit
        return this.trackModel.findAndCountAll({offset, limit})
    }

    async findQuery(name = "", page = 1, limit = 10): Promise<{ count, rows }> {
        const offset = page * limit - limit
        return this.trackModel.findAndCountAll({
            where: {
                name: {[Op.iRegexp]: name}
            }, offset, limit
        })

    }

    findOne(id: string): Promise<track> {
        return this.trackModel.findByPk(id)
    }

    async delete(id: string): Promise<string> {
        const track = await this.findOne(id)
        await track.destroy()
        return `Track with id: ${id} deleted`
    }

    async create(dto: CreateTrackDto, picture, audio): Promise<track> {
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio)
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture)
        return await this.trackModel.create({...dto, listens: 0, audio: audioPath, picture: picturePath})
    }

    async listen(id: string) {
        const track = await this.trackModel.findByPk(id)
        track.listens += 1
        track.save()
    }
}
