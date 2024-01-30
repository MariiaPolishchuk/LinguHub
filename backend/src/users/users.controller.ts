import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/enums/role.enum';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers() {
    return this.usersService.getAll();
  }

  @Get('premium-data')
  @Roles(Role.PREMIUM_USER)
  async getPremiumData() {
    return 'Premium data';
  }
}
