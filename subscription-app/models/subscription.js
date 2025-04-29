const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    plan: {
        type: String,
        required: true,
        immutable: true // Plan cannot be changed
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'cancelled'],
        default: 'active'
    },
    notes: {
        type: String,
        maxlength: 500
    }
});

module.exports = mongoose.model('Subscription', subscriptionSchema);