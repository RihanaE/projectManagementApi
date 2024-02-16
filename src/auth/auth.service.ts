// auth/auth.service.ts
import { Injectable, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminsService } from '../admins/admins.service';
import { CreateAdminDto } from '../admins/dto/create-admin.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService, private readonly adminsService: AdminsService) {}

  async validateUser(payload: any): Promise<any> {
    const user = await this.adminsService.getAdminById(payload.sub);
    return user || null;
  }

  async login(user: any): Promise<any> {
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(createAdminDto: CreateAdminDto): Promise<any> {
    // Check if the email is already registered
    const existingAdmin = await this.adminsService.getAdminByEmail(createAdminDto.email);
    if (existingAdmin) {
      throw new ConflictException('Email is already registered');
    }

    // Create a new admin
    const newAdmin = await this.adminsService.create(createAdminDto);

    // You can customize the response based on your needs
    return {
      message: 'Admin registered successfully',
      admin: newAdmin,
    };
  }
}
