import {comment} from "./comment.entity";


export const commentProviders = [
    {
        provide: 'COMMENT_REPOSITORY',
        useValue: comment,
    },
];