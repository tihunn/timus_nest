import {album} from "./album.entity";


export const albumProviders = [
    {
        provide: 'ALBUM_REPOSITORY',
        useValue: album,
    },
];