import mongoose, {Schema, ObjectId} from 'mongoose';
import { ViewGroup } from '../libs/enum/view.enum';

const viewSchema = new Schema (
    {
        viewGroup: {
            type: String,
            enum: ViewGroup,
            required: true,
        },

        memberId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Member",
        },

        viewREfId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model('View', viewSchema );