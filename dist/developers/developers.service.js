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
exports.DevelopersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let DevelopersService = class DevelopersService {
    constructor(developerModel) {
        this.developerModel = developerModel;
    }
    async findAll() {
        return this.developerModel.find().exec();
    }
    async findOne(id) {
        return this.developerModel.findById(id).exec();
    }
    async create(createDeveloperDto) {
        const createdDeveloper = new this.developerModel(createDeveloperDto);
        return createdDeveloper.save();
    }
    async update(id, updateDeveloperDto) {
        return this.developerModel.findByIdAndUpdate(id, updateDeveloperDto, { new: true }).exec();
    }
    async remove(id) {
        return this.developerModel.findByIdAndDelete(id).exec();
    }
    async removeProjectFromDeveloper(developerId, projectId) {
        return this.developerModel.findByIdAndUpdate(developerId, { $pull: { projects: projectId } }, { new: true }).exec();
    }
};
exports.DevelopersService = DevelopersService;
exports.DevelopersService = DevelopersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Developer')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DevelopersService);
//# sourceMappingURL=developers.service.js.map