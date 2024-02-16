// admins/admin.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Admin extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  contactInfo: string;

  @Prop({ required: true, unique: true })
  email: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
