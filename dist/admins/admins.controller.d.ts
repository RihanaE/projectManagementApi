import { AdminsService } from './admins.service';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminsController {
    private readonly adminsService;
    constructor(adminsService: AdminsService);
    profile(): Promise<import("./interface/admin.interface").Admin>;
    updateProfile(updateAdminDto: UpdateAdminDto): Promise<import("./interface/admin.interface").Admin>;
}
