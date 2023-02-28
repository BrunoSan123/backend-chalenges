import { Module } from '@nestjs/common';
import { UserService } from './use_cases/user.service';

@Module({
  providers: [UserService]
})
export class UserModule {}
