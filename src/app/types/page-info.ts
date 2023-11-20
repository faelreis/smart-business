// types/page-info.ts
export type homeInfo = {
  homeInfo: HomePageData;
}

export type HomePageData = {
  pages: {
    createdAt: string;
    heroParagraph: string;
    heroTag: string;
    heroTitle: string;
    id: string;
    publishedAt: string;
    slug: string;
    updatedAt: string;
  }[];
  blogs: {
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
  }[];
};
