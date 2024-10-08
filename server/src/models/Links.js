import { Schema, model } from 'mongoose';
import { handleSaveError, runValidatorAtUpdate } from './hooks.js';

const linkSchema = new Schema(
  {
    platform: {
      type: Object,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false },
);

linkSchema.post('save', handleSaveError);

linkSchema.pre('findOneAndUpdate', runValidatorAtUpdate);

linkSchema.post('findOneAndUpdate', handleSaveError);

const Link = model('link', linkSchema);

export default Link;
