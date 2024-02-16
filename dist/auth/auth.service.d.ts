import { JwtService } from '@nestjs/jwt';
import { AdminsService } from '../admins/admins.service';
import { CreateAdminDto } from '../admins/dto/create-admin.dto';
export declare class AuthService {
    private readonly jwtService;
    private readonly adminsService;
    constructor(jwtService: JwtService, adminsService: AdminsService);
    validateUser(payload: any): Promise<any>;
    login(user: any): Promise<any>;
    register(createAdminDto: CreateAdminDto): Promise<any>;
}
