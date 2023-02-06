import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './boards.service';
import { CreateBoardInput } from './dto/creat-board.input';
import { Board } from './entities/board.entity';

@Resolver()
export class BoardsResolver {
  constructor(
    private readonly boardsService: BoardsService, //
  ) {}

  @Query(() => [Board], { nullable: true })
  fetchBoards(): Board[] {
    return this.boardsService.findAll();
  }
  @Mutation(() => String)
  createBoard(
    // @Args({ name: 'writer', nullable: true }) writer: string,
    // @Args({ name: 'title', nullable: true }) title: string,
    // @Args({ name: 'contents', nullable: true }) contents: string,
    @Args('CreateBoardInput') createBoardInput: CreateBoardInput,
  ): string {
    return this.boardsService.create({ createBoardInput });
  }
}
