declare const _default: (import("../types").WithIndex<{
    Query?: import("../types").WithIndex<{
        _?: import("../types").ResolverFn<import("../types").Maybe<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>>, {}, any, {}> | import("../types").LegacyStitchingResolver<import("../types").Maybe<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>>, {}, any, {}> | import("../types").NewStitchingResolver<import("../types").Maybe<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>>, {}, any, {}> | undefined;
        allBoards?: import("../types").ResolverFn<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").Board>[]>, {}, any, {}> | import("../types").LegacyStitchingResolver<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").Board>[]>, {}, any, {}> | import("../types").NewStitchingResolver<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").Board>[]>, {}, any, {}> | undefined;
        allUsers?: import("../types").ResolverFn<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").User>[]>, {}, any, {}> | import("../types").LegacyStitchingResolver<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").User>[]>, {}, any, {}> | import("../types").NewStitchingResolver<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").User>[]>, {}, any, {}> | undefined;
        board?: import("../types").ResolverFn<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").Board>>, {}, any, import("../types").RequireFields<import("../types").QueryBoardArgs, "id">> | import("../types").LegacyStitchingResolver<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").Board>>, {}, any, import("../types").RequireFields<import("../types").QueryBoardArgs, "id">> | import("../types").NewStitchingResolver<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").Board>>, {}, any, import("../types").RequireFields<import("../types").QueryBoardArgs, "id">> | undefined;
        user?: import("../types").ResolverFn<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").User>>, {}, any, import("../types").RequireFields<import("../types").QueryUserArgs, "id">> | import("../types").LegacyStitchingResolver<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").User>>, {}, any, import("../types").RequireFields<import("../types").QueryUserArgs, "id">> | import("../types").NewStitchingResolver<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").User>>, {}, any, import("../types").RequireFields<import("../types").QueryUserArgs, "id">> | undefined;
        userBoards?: import("../types").ResolverFn<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").Board>[]>, {}, any, {}> | import("../types").LegacyStitchingResolver<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").Board>[]>, {}, any, {}> | import("../types").NewStitchingResolver<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").Board>[]>, {}, any, {}> | undefined;
    }> | undefined;
    Mutation?: import("../types").WithIndex<{
        _?: import("../types").ResolverFn<import("../types").Maybe<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>>, {}, any, {}> | import("../types").LegacyStitchingResolver<import("../types").Maybe<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>>, {}, any, {}> | import("../types").NewStitchingResolver<import("../types").Maybe<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>>, {}, any, {}> | undefined;
        addBoard?: import("../types").ResolverFn<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").Board>>, {}, any, import("../types").RequireFields<import("../types").MutationAddBoardArgs, "input">> | import("../types").LegacyStitchingResolver<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").Board>>, {}, any, import("../types").RequireFields<import("../types").MutationAddBoardArgs, "input">> | import("../types").NewStitchingResolver<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").Board>>, {}, any, import("../types").RequireFields<import("../types").MutationAddBoardArgs, "input">> | undefined;
        addUser?: import("../types").ResolverFn<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").User>>, {}, any, import("../types").RequireFields<import("../types").MutationAddUserArgs, "input">> | import("../types").LegacyStitchingResolver<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").User>>, {}, any, import("../types").RequireFields<import("../types").MutationAddUserArgs, "input">> | import("../types").NewStitchingResolver<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").User>>, {}, any, import("../types").RequireFields<import("../types").MutationAddUserArgs, "input">> | undefined;
        deleteBoard?: import("../types").ResolverFn<import("../types").Maybe<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>>, {}, any, import("../types").RequireFields<import("../types").MutationDeleteBoardArgs, "id">> | import("../types").LegacyStitchingResolver<import("../types").Maybe<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>>, {}, any, import("../types").RequireFields<import("../types").MutationDeleteBoardArgs, "id">> | import("../types").NewStitchingResolver<import("../types").Maybe<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>>, {}, any, import("../types").RequireFields<import("../types").MutationDeleteBoardArgs, "id">> | undefined;
        deleteUser?: import("../types").ResolverFn<import("../types").Maybe<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>>, {}, any, import("../types").RequireFields<import("../types").MutationDeleteUserArgs, "id">> | import("../types").LegacyStitchingResolver<import("../types").Maybe<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>>, {}, any, import("../types").RequireFields<import("../types").MutationDeleteUserArgs, "id">> | import("../types").NewStitchingResolver<import("../types").Maybe<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>>, {}, any, import("../types").RequireFields<import("../types").MutationDeleteUserArgs, "id">> | undefined;
        updateBoard?: import("../types").ResolverFn<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").Board>>, {}, any, import("../types").RequireFields<import("../types").MutationUpdateBoardArgs, "id" | "input">> | import("../types").LegacyStitchingResolver<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").Board>>, {}, any, import("../types").RequireFields<import("../types").MutationUpdateBoardArgs, "id" | "input">> | import("../types").NewStitchingResolver<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").Board>>, {}, any, import("../types").RequireFields<import("../types").MutationUpdateBoardArgs, "id" | "input">> | undefined;
        updateUser?: import("../types").ResolverFn<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").User>>, {}, any, import("../types").RequireFields<import("../types").MutationUpdateUserArgs, "id" | "input">> | import("../types").LegacyStitchingResolver<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").User>>, {}, any, import("../types").RequireFields<import("../types").MutationUpdateUserArgs, "id" | "input">> | import("../types").NewStitchingResolver<import("../types").Maybe<import("../types").ResolverTypeWrapper<import("../types").User>>, {}, any, import("../types").RequireFields<import("../types").MutationUpdateUserArgs, "id" | "input">> | undefined;
    }> | undefined;
    Board?: import("../types").WithIndex<{
        id?: import("../types").ResolverFn<import("../types").ResolverTypeWrapper<string>, import("../types").Board, any, {}> | import("../types").LegacyStitchingResolver<import("../types").ResolverTypeWrapper<string>, import("../types").Board, any, {}> | import("../types").NewStitchingResolver<import("../types").ResolverTypeWrapper<string>, import("../types").Board, any, {}> | undefined;
        name?: import("../types").ResolverFn<import("../types").ResolverTypeWrapper<string>, import("../types").Board, any, {}> | import("../types").LegacyStitchingResolver<import("../types").ResolverTypeWrapper<string>, import("../types").Board, any, {}> | import("../types").NewStitchingResolver<import("../types").ResolverTypeWrapper<string>, import("../types").Board, any, {}> | undefined;
        icon?: import("../types").ResolverFn<import("../types").Maybe<import("../types").ResolverTypeWrapper<string>>, import("../types").Board, any, {}> | import("../types").LegacyStitchingResolver<import("../types").Maybe<import("../types").ResolverTypeWrapper<string>>, import("../types").Board, any, {}> | import("../types").NewStitchingResolver<import("../types").Maybe<import("../types").ResolverTypeWrapper<string>>, import("../types").Board, any, {}> | undefined;
        isArchived?: import("../types").ResolverFn<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>, import("../types").Board, any, {}> | import("../types").LegacyStitchingResolver<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>, import("../types").Board, any, {}> | import("../types").NewStitchingResolver<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>, import("../types").Board, any, {}> | undefined;
        createdAt?: import("../types").ResolverFn<any, import("../types").Board, any, {}> | import("../types").LegacyStitchingResolver<any, import("../types").Board, any, {}> | import("../types").NewStitchingResolver<any, import("../types").Board, any, {}> | undefined;
        updatedAt?: import("../types").ResolverFn<any, import("../types").Board, any, {}> | import("../types").LegacyStitchingResolver<any, import("../types").Board, any, {}> | import("../types").NewStitchingResolver<any, import("../types").Board, any, {}> | undefined;
        __isTypeOf?: import("../types").IsTypeOfResolverFn<import("../types").Board> | undefined;
    }> | undefined;
    Subscription?: import("../types").WithIndex<{
        _?: import("../types").SubscriptionSubscriberObject<import("../types").Maybe<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>>, "_", {}, any, {}> | import("../types").SubscriptionResolverObject<import("../types").Maybe<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>>, {}, any, {}> | ((...args: any[]) => import("../types").SubscriptionObject<import("../types").Maybe<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>>, "_", {}, any, {}>) | undefined;
    }> | undefined;
    Date?: import("graphql").GraphQLScalarType | undefined;
    Time?: import("graphql").GraphQLScalarType | undefined;
    DateTime?: import("graphql").GraphQLScalarType | undefined;
    User?: import("../types").WithIndex<{
        id?: import("../types").ResolverFn<import("../types").ResolverTypeWrapper<string>, import("../types").User, any, {}> | import("../types").LegacyStitchingResolver<import("../types").ResolverTypeWrapper<string>, import("../types").User, any, {}> | import("../types").NewStitchingResolver<import("../types").ResolverTypeWrapper<string>, import("../types").User, any, {}> | undefined;
        username?: import("../types").ResolverFn<import("../types").ResolverTypeWrapper<string>, import("../types").User, any, {}> | import("../types").LegacyStitchingResolver<import("../types").ResolverTypeWrapper<string>, import("../types").User, any, {}> | import("../types").NewStitchingResolver<import("../types").ResolverTypeWrapper<string>, import("../types").User, any, {}> | undefined;
        email?: import("../types").ResolverFn<import("../types").ResolverTypeWrapper<string>, import("../types").User, any, {}> | import("../types").LegacyStitchingResolver<import("../types").ResolverTypeWrapper<string>, import("../types").User, any, {}> | import("../types").NewStitchingResolver<import("../types").ResolverTypeWrapper<string>, import("../types").User, any, {}> | undefined;
        isActive?: import("../types").ResolverFn<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>, import("../types").User, any, {}> | import("../types").LegacyStitchingResolver<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>, import("../types").User, any, {}> | import("../types").NewStitchingResolver<import("graphql/jsutils/PromiseOrValue").PromiseOrValue<boolean>, import("../types").User, any, {}> | undefined;
        role?: import("../types").ResolverFn<import("../types").Role, import("../types").User, any, {}> | import("../types").LegacyStitchingResolver<import("../types").Role, import("../types").User, any, {}> | import("../types").NewStitchingResolver<import("../types").Role, import("../types").User, any, {}> | undefined;
        createdAt?: import("../types").ResolverFn<any, import("../types").User, any, {}> | import("../types").LegacyStitchingResolver<any, import("../types").User, any, {}> | import("../types").NewStitchingResolver<any, import("../types").User, any, {}> | undefined;
        updatedAt?: import("../types").ResolverFn<any, import("../types").User, any, {}> | import("../types").LegacyStitchingResolver<any, import("../types").User, any, {}> | import("../types").NewStitchingResolver<any, import("../types").User, any, {}> | undefined;
        __isTypeOf?: import("../types").IsTypeOfResolverFn<import("../types").User> | undefined;
    }> | undefined;
}> | {
    Date: import("graphql").GraphQLScalarType;
    Time: import("graphql").GraphQLScalarType;
    DateTime: import("graphql").GraphQLScalarType;
})[];
export default _default;