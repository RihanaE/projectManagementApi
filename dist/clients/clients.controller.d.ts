import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    findAll(): Promise<import("./interfaces/client.interface").Client[]>;
    create(createClientDto: CreateClientDto): Promise<import("./interfaces/client.interface").Client>;
}
