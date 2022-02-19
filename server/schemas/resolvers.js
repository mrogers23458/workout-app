const { AuthenticationError } = require('apollo-server-express');
const { User, Note} = require ("../models")
const { signToken } = require('../utils/auth.js')
const resolvers = {
    Query: {
        users: async () => {
            const users = User.find().populate({path:'posts', populate:{path: 'comments', populate:'commentorId'}}).populate('comments')
            return users
        },

        user: async(parent, {id} ) => {
            const user = User.findOne({ _id: id }).populate({path:'posts', populate:{path: 'comments', populate:'commentorId'}}).populate({path: 'comments', populate:{path: 'postId'}})
            return user
        }
    },

    Mutation: {

        login: async (parent, {username, password}) => {
            console.log(username, password)
            const user = await User.findOne({ username: username});
            console.log(user)
            if (!user) {
                throw new AuthenticationError('No account with this e-mail found')
                
            }

            console.log(password)
            const checkPass = await user.isCorrectPassword(password)

            if (!checkPass) {
                throw new AuthenticationError('Incorrect Password test test test')
            }

            const token = signToken(user)
            console.log(token)
            return { token, user }
        }
    }
}

module.exports = resolvers