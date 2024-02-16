// admins/admins.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './interface/admin.interface';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';

@Injectable()
export class AdminsService {
  constructor(@InjectModel('Admin') private readonly adminModel: Model<Admin>) {}


  async getAdminByEmail(email: string): Promise<Admin | null> {
    return this.adminModel.findOne({ email }).exec();
  }

  async create(createAdminDto: UpdateAdminDto): Promise<Admin> {
    const createdAdmin = new this.adminModel(createAdminDto);
    return createdAdmin.save();
  }

  async getProfile(): Promise<Admin> {
    const adminId = 'abc123'; 
    const admin = await this.adminModel.findById(adminId).exec();
    if (!admin) {
      throw new NotFoundException('Admin not found');
    }
    return admin;
  }

  async updateProfile(updateAdminDto: UpdateAdminDto): Promise<Admin> {
    const adminId = 'abc123'; 
    const updatedAdmin = await this.adminModel
      .findByIdAndUpdate(adminId, updateAdminDto, { new: true })
      .exec();
    if (!updatedAdmin) {
      throw new NotFoundException('Admin not found');
    }
    return updatedAdmin;
  }

  async getAdminById(adminId: string): Promise<Admin | null> {
    return this.adminModel.findById(adminId).exec();
  }
}
 