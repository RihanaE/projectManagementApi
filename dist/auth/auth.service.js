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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const admins_service_1 = require("../admins/admins.service");
let AuthService = class AuthService {
    constructor(jwtService, adminsService) {
        this.jwtService = jwtService;
        this.adminsService = adminsService;
    }
    async validateUser(payload) {
        const user = await this.adminsService.getAdminById(payload.sub);
        return user || null;
    }
    async login(user) {
        const payload = { sub: user.id, username: user.username };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async register(createAdminDto) {
        const existingAdmin = await this.adminsService.getAdminByEmail(createAdminDto.email);
        if (existingAdmin) {
            throw new common_1.ConflictException('Email is already registered');
        }
        const newAdmin = await this.adminsService.create(createAdminDto);
        return {
            message: 'Admin registered successfully',
            admin: newAdmin,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService, admins_service_1.AdminsService])
], AuthService);
//# sourceMappingURL=auth.service.js.map