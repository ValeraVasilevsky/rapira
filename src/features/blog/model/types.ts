export interface FilterListItem {
  text: string;
  value: string;
}

export interface BlogCard {
  id: string;
  image: string;
  createdAt: Date;
  tags: FilterListItem[];
  title: string;
  body: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
}

export interface BlogCardResponse extends Omit<BlogCard, 'tags'> {
  tags: string[];
}
