var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLDate = require('graphql-date');
var BookModel = require('../models/Book');

var bookType = new GraphQLObjectType({
    name: 'book',
    fields: function () {
        return {
            _id: {
                type: GraphQLString
            },
            isbn: {
                type: GraphQLString 
            },
            title: {
                type: GraphQLString
            },
            author: {
                type: GraphQLString
            },
            description: {
                type: GraphQLString
            },
            published_year: {
                type: GraphQLInt
            },
            publisher: {
                type: GraphQLString
            },
            updated_date: {
                type: GraphQLDate
            }
        }
    }
});