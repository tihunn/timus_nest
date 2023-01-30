import {track} from "./track.entity";


export const trackProviders = [
    {
        provide: 'TRACK_REPOSITORY',
        useValue: track,
    },
];