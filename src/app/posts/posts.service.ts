import { Post } from './posts.model';

export class PostsService {
  private posts: Post[] = [];

  getPosts() {
    return [...this.posts];
  }
}
