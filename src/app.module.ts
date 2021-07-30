import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TaskService } from './task/task.service';

@Module({
  imports: [TasksModule],
  providers: [TaskService],
})
export class AppModule {}
