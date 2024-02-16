import { AuthService } from './auth.service';
import { AdminRegisterDto } from './dto/admin-register.dto';
import { AdminLoginDto } from './dto/admin-login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(adminRegisterDto: AdminRegisterDto): Promise<any>;
    login(adminLoginDto: AdminLoginDto): Promise<any>;
    profile(req: any): Promise<any>;
}
