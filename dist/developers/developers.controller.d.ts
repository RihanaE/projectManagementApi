import { DevelopersService } from './developers.service';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
export declare class DevelopersController {
    private readonly developersService;
    constructor(developersService: DevelopersService);
    findAll(): Promise<import("./interface/developer.interface").Developer[]>;
    findOne(id: string): Promise<import("./interface/developer.interface").Developer>;
    create(createDeveloperDto: CreateDeveloperDto): Promise<import("./interface/developer.interface").Developer>;
    update(id: string, updateDeveloperDto: UpdateDeveloperDto): Promise<import("./interface/developer.interface").Developer>;
    remove(id: string): Promise<import("./interface/developer.interface").Developer>;
}
