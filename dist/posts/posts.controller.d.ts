import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updatePostDto: UpdatePostDto): any;
    remove(id: string): any;
}
