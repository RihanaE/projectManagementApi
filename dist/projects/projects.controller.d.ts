import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProgressDto } from './dto/update-progress.dto';
import { AddDeveloperDto } from './dto/add-developer.dto';
import { RemoveDeveloperDto } from './dto/remove-developer.dto';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    findAll(): Promise<import("./interface/project.interface").Project[]>;
    findOne(id: string): Promise<import("./interface/project.interface").Project>;
    create(createProjectDto: CreateProjectDto): Promise<import("./interface/project.interface").Project>;
    updateProgress(id: string, updateProgressDto: UpdateProgressDto): Promise<import("./interface/project.interface").Project>;
    addDeveloper(id: string, addDeveloperDto: AddDeveloperDto): Promise<import("./interface/project.interface").Project>;
    removeDeveloper(id: string, removeDeveloperDto: RemoveDeveloperDto): Promise<import("./interface/project.interface").Project>;
    remove(id: string): Promise<import("./interface/project.interface").Project>;
}
