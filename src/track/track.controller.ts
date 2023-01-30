import {Body, Controller, Delete, Get, Param, Post, Query, UploadedFiles, UseInterceptors} from "@nestjs/common";
import {TrackService} from "./track.service";
import {CreateTrackDto} from "./dto/createTrackDto";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {query} from "express";


@Controller("/track")
export class TrackController {
    constructor(private trackService: TrackService) {}

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        {name: "picture", maxCount: 1},
        {name: "audio", maxCount: 1}
    ]))
    create(@UploadedFiles() files, @Body() dto: CreateTrackDto) {
        const {picture, audio} = files
        return this.trackService.create(dto, picture[0], audio[0])
    }

    @Get()
    getAll(
        @Query("page") page: number,
        @Query("limit") limit: number
    ) {
        return this.trackService.findAll(page, limit)
    }

    @Get("/search")
    search(
        @Query("name") name: string,
        @Query("page") page: number,
        @Query("limit") limit: number
    ) {
        return this.trackService.findQuery(name, page, limit)
    }

    @Get(":id")
    getOne(@Param("id") id: string) {
        return this.trackService.findOne(id)
    }

    @Delete(":id")
    delete(@Param("id") id: string) {
        return this.trackService.delete(id)
    }

    @Post("/listen/:id")
    listen(@Param("id") id: string) {
        return this.trackService.listen(id)
    }

}