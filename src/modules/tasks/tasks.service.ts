import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import {UsersService} from "../users/users.service";

@Injectable()
export class TasksService {
  constructor(private usersService: UsersService) {}

  create(createTaskDto: CreateTaskDto) {
    // TODO: for the module B - update the dto with the id: number (no auth yet)
    // Test the connection between two services.
    // const user = this.usersService.findOne()
    return 'This action adds a new task';
  }

  findAll() {
    return 'This action returns all tasks';
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
