"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AdminsService = class AdminsService {
    constructor(adminModel) {
        this.adminModel = adminModel;
    }
    async getAdminByEmail(email) {
        return this.adminModel.findOne({ email }).exec();
    }
    async create(createAdminDto) {
        const createdAdmin = new this.adminModel(createAdminDto);
        return createdAdmin.save();
    }
    async getProfile() {
        const adminId = 'abc123';
        const admin = await this.adminModel.findById(adminId).exec();
        if (!admin) {
            throw new common_1.NotFoundException('Admin not found');
        }
        return admin;
    }
    async updateProfile(updateAdminDto) {
        const adminId = 'abc123';
        const updatedAdmin = await this.adminModel
            .findByIdAndUpdate(adminId, updateAdminDto, { new: true })
            .exec();
        if (!updatedAdmin) {
            throw new common_1.NotFoundException('Admin not found');
        }
        return updatedAdmin;
    }
    async getAdminById(adminId) {
        return this.adminModel.findById(adminId).exec();
    }
};
exports.AdminsService = AdminsService;
exports.AdminsService = AdminsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Admin')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AdminsService);
//# sourceMappingURL=admins.service.js.map