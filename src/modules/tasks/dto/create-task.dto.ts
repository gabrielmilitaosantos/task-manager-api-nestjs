import {
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { TaskStatus } from '../enums/task-status.enum';
import { Type } from 'class-transformer';

export class CreateTaskDto {
  @IsInt()
  userId: number; // Temporary

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(TaskStatus)
  status: TaskStatus = TaskStatus.PENDING;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  dueDate?: Date;
}
