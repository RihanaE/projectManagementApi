"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const auth_module_1 = require("./auth/auth.module");
const developers_module_1 = require("./developers/developers.module");
const projects_module_1 = require("./projects/projects.module");
const admins_module_1 = require("./admins/admins.module");
const clients_module_1 = require("./clients/clients.module");
const developer_schema_1 = require("./developers/developer.schema");
const project_schema_1 = require("./projects/project.schema");
const admin_schema_1 = require("./admins/admin.schema");
const client_schema_1 = require("./clients/client.schema");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot(process.env.DB_URI),
            projects_module_1.ProjectsModule,
            mongoose_1.MongooseModule.forFeature([
                { name: 'Developer', schema: developer_schema_1.DeveloperSchema },
                { name: 'Project', schema: project_schema_1.ProjectSchema },
                { name: 'Admin', schema: admin_schema_1.AdminSchema },
                { name: 'Client', schema: client_schema_1.ClientSchema },
            ]),
            auth_module_1.AuthModule,
            developers_module_1.DevelopersModule,
            projects_module_1.ProjectsModule,
            admins_module_1.AdminsModule,
            clients_module_1.ClientsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map