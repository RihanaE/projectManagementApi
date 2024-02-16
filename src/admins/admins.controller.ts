// admins/admins.controller.ts
import { Controller, Get, Put, UseGuards, Body } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile() {
    return this.adminsService.getProfile();
  }

  @UseGuards(JwtAuthGuard)
  @Put('profile')
  updateProfile(@Body() updateAdminDto: UpdateAdminDto) {
    return this.adminsService.updateProfile(updateAdminDto);
  }
}
