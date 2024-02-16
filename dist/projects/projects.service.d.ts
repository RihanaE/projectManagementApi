/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Project } from './interface/project.interface';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProgressDto } from './dto/update-progress.dto';
import { AddDeveloperDto } from './dto/add-developer.dto';
import { RemoveDeveloperDto } from './dto/remove-developer.dto';
export declare class ProjectsService {
    private readonly projectModel;
    constructor(projectModel: Model<Project>);
    findAll(): Promise<Project[]>;
    findOne(id: string): Promise<Project>;
    create(createProjectDto: CreateProjectDto): Promise<Project>;
    updateProgress(id: string, updateProgressDto: UpdateProgressDto): Promise<Project>;
    addDeveloper(id: string, addDeveloperDto: AddDeveloperDto): Promise<Project>;
    removeDeveloper(id: string, removeDeveloperDto: RemoveDeveloperDto): Promise<Project>;
    remove(id: string): Promise<Project>;
}
