const { Schema, model} = require('mongoose')

const noteSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },

        note: {
            type: String
        },

        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }

    }
)

const Note = model('Note', noteSchema)
module.exports = Note