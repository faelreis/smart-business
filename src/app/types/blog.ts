export type Blog = {
    author: string;
    date: string;
    description: string;
    type: string;
    thumbnail: {
        url: string;
    };
    authorProfile: {
        url: string;
    };
};