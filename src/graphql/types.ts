import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql"
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] }
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } &
  { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: Date
  Time: Date
  DateTime: Date
  Void: void
}

export type Query = {
  __typename?: "Query"
  _?: Maybe<Scalars["Boolean"]>
  allBoards?: Maybe<Array<Board>>
  allTemplates?: Maybe<Array<Template>>
  allUsers?: Maybe<Array<User>>
  authorTemplates?: Maybe<Array<Template>>
  board?: Maybe<Board>
  boardTasks?: Maybe<Array<Task>>
  me: User
  tag?: Maybe<Tag>
  tagTasks?: Maybe<Array<Task>>
  task?: Maybe<Task>
  taskTags?: Maybe<Array<Tag>>
  template?: Maybe<Template>
  user?: Maybe<User>
  userBoards?: Maybe<Array<Board>>
  userTasks?: Maybe<Array<Task>>
}

export type QueryAuthorTemplatesArgs = {
  authorId: Scalars["ID"]
}

export type QueryBoardArgs = {
  id: Scalars["ID"]
}

export type QueryBoardTasksArgs = {
  boardId: Scalars["ID"]
}

export type QueryTagArgs = {
  id: Scalars["ID"]
}

export type QueryTagTasksArgs = {
  id: Scalars["ID"]
}

export type QueryTaskArgs = {
  id: Scalars["ID"]
}

export type QueryTaskTagsArgs = {
  taskId: Scalars["ID"]
}

export type QueryTemplateArgs = {
  id: Scalars["ID"]
}

export type QueryUserArgs = {
  id: Scalars["ID"]
}

export type QueryUserBoardsArgs = {
  userId?: Maybe<Scalars["ID"]>
}

export type Mutation = {
  __typename?: "Mutation"
  _?: Maybe<Scalars["Boolean"]>
  addBoard?: Maybe<Board>
  addTask?: Maybe<Task>
  addTemplate?: Maybe<Template>
  addUser?: Maybe<User>
  changePassword?: Maybe<Scalars["Void"]>
  deleteBoard?: Maybe<Scalars["Boolean"]>
  deleteTask?: Maybe<Scalars["Boolean"]>
  deleteTemplate?: Maybe<Scalars["Boolean"]>
  deleteUser?: Maybe<Scalars["Boolean"]>
  forgotPassword?: Maybe<Scalars["Void"]>
  login: User
  logout?: Maybe<Scalars["Void"]>
  register: User
  resetPassword?: Maybe<Scalars["Void"]>
  updateBoard?: Maybe<Board>
  updateTask?: Maybe<Task>
  updateTemplate?: Maybe<Template>
  updateUser?: Maybe<User>
}

export type MutationAddBoardArgs = {
  input: BoardInput
}

export type MutationAddTaskArgs = {
  boardId: Scalars["ID"]
  input: TaskInput
}

export type MutationAddTemplateArgs = {
  input: TemplateInput
}

export type MutationAddUserArgs = {
  input: UserInput
}

export type MutationChangePasswordArgs = {
  oldPassword: Scalars["String"]
  newPassword: Scalars["String"]
}

export type MutationDeleteBoardArgs = {
  id: Scalars["ID"]
}

export type MutationDeleteTaskArgs = {
  id: Scalars["ID"]
}

export type MutationDeleteTemplateArgs = {
  id: Scalars["ID"]
}

export type MutationDeleteUserArgs = {
  id: Scalars["ID"]
}

export type MutationForgotPasswordArgs = {
  email: Scalars["String"]
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type MutationResetPasswordArgs = {
  token: Scalars["String"]
  newPassword: Scalars["String"]
}

export type MutationUpdateBoardArgs = {
  id: Scalars["ID"]
  input: BoardInput
}

export type MutationUpdateTaskArgs = {
  id: Scalars["ID"]
  input: TaskInput
}

export type MutationUpdateTemplateArgs = {
  id: Scalars["ID"]
  input: TemplateInput
}

export type MutationUpdateUserArgs = {
  id: Scalars["ID"]
  input: UpdateInput
}

export type LoginInput = {
  identifier: Scalars["String"]
  password: Scalars["String"]
}

export type RegisterInput = {
  username: Scalars["String"]
  email: Scalars["String"]
  password: Scalars["String"]
}

export type BoardInput = {
  name: Scalars["String"]
  icon: Scalars["String"]
  isArchived: Scalars["Boolean"]
}

export type Board = {
  __typename?: "Board"
  id: Scalars["ID"]
  name: Scalars["String"]
  template?: Maybe<Template>
  tasks?: Maybe<Array<Task>>
  icon?: Maybe<Scalars["String"]>
  isArchived: Scalars["Boolean"]
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type Subscription = {
  __typename?: "Subscription"
  _?: Maybe<Scalars["Boolean"]>
}

export type Tag = {
  __typename?: "Tag"
  id: Scalars["ID"]
  name: Scalars["String"]
  color?: Maybe<Scalars["String"]>
}

export type TaskInput = {
  name: Scalars["String"]
  isCompleted: Scalars["Boolean"]
  startDate?: Maybe<Scalars["DateTime"]>
  endDate?: Maybe<Scalars["DateTime"]>
}

export type Task = {
  __typename?: "Task"
  id: Scalars["ID"]
  name: Scalars["String"]
  isCompleted: Scalars["Boolean"]
  startDate?: Maybe<Scalars["DateTime"]>
  endDate?: Maybe<Scalars["DateTime"]>
  board?: Maybe<Board>
  tags?: Maybe<Array<Tag>>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type TemplateInput = {
  name: Scalars["String"]
}

export type Template = {
  __typename?: "Template"
  id: Scalars["ID"]
  name: Scalars["String"]
  author?: Maybe<User>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export enum Role {
  User = "USER",
  Admin = "ADMIN"
}

export type UpdateInput = {
  username?: Maybe<Scalars["String"]>
}

export type UserInput = {
  username: Scalars["String"]
  email: Scalars["String"]
  password: Scalars["String"]
}

export type User = {
  __typename?: "User"
  id: Scalars["ID"]
  username: Scalars["String"]
  email: Scalars["String"]
  isActive: Scalars["Boolean"]
  role: Role
  boards: Array<Maybe<Board>>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}> = (
  obj: T,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>
  ID: ResolverTypeWrapper<Scalars["ID"]>
  Mutation: ResolverTypeWrapper<{}>
  String: ResolverTypeWrapper<Scalars["String"]>
  LoginInput: LoginInput
  RegisterInput: RegisterInput
  BoardInput: BoardInput
  Board: ResolverTypeWrapper<Board>
  Subscription: ResolverTypeWrapper<{}>
  Date: ResolverTypeWrapper<Scalars["Date"]>
  Time: ResolverTypeWrapper<Scalars["Time"]>
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>
  Void: ResolverTypeWrapper<Scalars["Void"]>
  Tag: ResolverTypeWrapper<Tag>
  TaskInput: TaskInput
  Task: ResolverTypeWrapper<Task>
  TemplateInput: TemplateInput
  Template: ResolverTypeWrapper<Template>
  Role: Role
  UpdateInput: UpdateInput
  UserInput: UserInput
  User: ResolverTypeWrapper<User>
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {}
  Boolean: Scalars["Boolean"]
  ID: Scalars["ID"]
  Mutation: {}
  String: Scalars["String"]
  LoginInput: LoginInput
  RegisterInput: RegisterInput
  BoardInput: BoardInput
  Board: Board
  Subscription: {}
  Date: Scalars["Date"]
  Time: Scalars["Time"]
  DateTime: Scalars["DateTime"]
  Void: Scalars["Void"]
  Tag: Tag
  TaskInput: TaskInput
  Task: Task
  TemplateInput: TemplateInput
  Template: Template
  UpdateInput: UpdateInput
  UserInput: UserInput
  User: User
}>

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  _?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>
  allBoards?: Resolver<Maybe<Array<ResolversTypes["Board"]>>, ParentType, ContextType>
  allTemplates?: Resolver<Maybe<Array<ResolversTypes["Template"]>>, ParentType, ContextType>
  allUsers?: Resolver<Maybe<Array<ResolversTypes["User"]>>, ParentType, ContextType>
  authorTemplates?: Resolver<
    Maybe<Array<ResolversTypes["Template"]>>,
    ParentType,
    ContextType,
    RequireFields<QueryAuthorTemplatesArgs, "authorId">
  >
  board?: Resolver<
    Maybe<ResolversTypes["Board"]>,
    ParentType,
    ContextType,
    RequireFields<QueryBoardArgs, "id">
  >
  boardTasks?: Resolver<
    Maybe<Array<ResolversTypes["Task"]>>,
    ParentType,
    ContextType,
    RequireFields<QueryBoardTasksArgs, "boardId">
  >
  me?: Resolver<ResolversTypes["User"], ParentType, ContextType>
  tag?: Resolver<
    Maybe<ResolversTypes["Tag"]>,
    ParentType,
    ContextType,
    RequireFields<QueryTagArgs, "id">
  >
  tagTasks?: Resolver<
    Maybe<Array<ResolversTypes["Task"]>>,
    ParentType,
    ContextType,
    RequireFields<QueryTagTasksArgs, "id">
  >
  task?: Resolver<
    Maybe<ResolversTypes["Task"]>,
    ParentType,
    ContextType,
    RequireFields<QueryTaskArgs, "id">
  >
  taskTags?: Resolver<
    Maybe<Array<ResolversTypes["Tag"]>>,
    ParentType,
    ContextType,
    RequireFields<QueryTaskTagsArgs, "taskId">
  >
  template?: Resolver<
    Maybe<ResolversTypes["Template"]>,
    ParentType,
    ContextType,
    RequireFields<QueryTemplateArgs, "id">
  >
  user?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, "id">
  >
  userBoards?: Resolver<
    Maybe<Array<ResolversTypes["Board"]>>,
    ParentType,
    ContextType,
    RequireFields<QueryUserBoardsArgs, never>
  >
  userTasks?: Resolver<Maybe<Array<ResolversTypes["Task"]>>, ParentType, ContextType>
}>

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = ResolversObject<{
  _?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>
  addBoard?: Resolver<
    Maybe<ResolversTypes["Board"]>,
    ParentType,
    ContextType,
    RequireFields<MutationAddBoardArgs, "input">
  >
  addTask?: Resolver<
    Maybe<ResolversTypes["Task"]>,
    ParentType,
    ContextType,
    RequireFields<MutationAddTaskArgs, "boardId" | "input">
  >
  addTemplate?: Resolver<
    Maybe<ResolversTypes["Template"]>,
    ParentType,
    ContextType,
    RequireFields<MutationAddTemplateArgs, "input">
  >
  addUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<MutationAddUserArgs, "input">
  >
  changePassword?: Resolver<
    Maybe<ResolversTypes["Void"]>,
    ParentType,
    ContextType,
    RequireFields<MutationChangePasswordArgs, "oldPassword" | "newPassword">
  >
  deleteBoard?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteBoardArgs, "id">
  >
  deleteTask?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteTaskArgs, "id">
  >
  deleteTemplate?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteTemplateArgs, "id">
  >
  deleteUser?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, "id">
  >
  forgotPassword?: Resolver<
    Maybe<ResolversTypes["Void"]>,
    ParentType,
    ContextType,
    RequireFields<MutationForgotPasswordArgs, "email">
  >
  login?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, "input">
  >
  logout?: Resolver<Maybe<ResolversTypes["Void"]>, ParentType, ContextType>
  register?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationRegisterArgs, "input">
  >
  resetPassword?: Resolver<
    Maybe<ResolversTypes["Void"]>,
    ParentType,
    ContextType,
    RequireFields<MutationResetPasswordArgs, "token" | "newPassword">
  >
  updateBoard?: Resolver<
    Maybe<ResolversTypes["Board"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateBoardArgs, "id" | "input">
  >
  updateTask?: Resolver<
    Maybe<ResolversTypes["Task"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateTaskArgs, "id" | "input">
  >
  updateTemplate?: Resolver<
    Maybe<ResolversTypes["Template"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateTemplateArgs, "id" | "input">
  >
  updateUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, "id" | "input">
  >
}>

export type BoardResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Board"] = ResolversParentTypes["Board"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  template?: Resolver<Maybe<ResolversTypes["Template"]>, ParentType, ContextType>
  tasks?: Resolver<Maybe<Array<ResolversTypes["Task"]>>, ParentType, ContextType>
  icon?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  isArchived?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}>

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Subscription"] = ResolversParentTypes["Subscription"]
> = ResolversObject<{
  _?: SubscriptionResolver<Maybe<ResolversTypes["Boolean"]>, "_", ParentType, ContextType>
}>

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date"
}

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["Time"], any> {
  name: "Time"
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime"
}

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["Void"], any> {
  name: "Void"
}

export type TagResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Tag"] = ResolversParentTypes["Tag"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  color?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}>

export type TaskResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Task"] = ResolversParentTypes["Task"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  isCompleted?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>
  startDate?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>
  endDate?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>
  board?: Resolver<Maybe<ResolversTypes["Board"]>, ParentType, ContextType>
  tags?: Resolver<Maybe<Array<ResolversTypes["Tag"]>>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}>

export type TemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Template"] = ResolversParentTypes["Template"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  author?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}>

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  isActive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>
  role?: Resolver<ResolversTypes["Role"], ParentType, ContextType>
  boards?: Resolver<Array<Maybe<ResolversTypes["Board"]>>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType>
}>

export type Resolvers<ContextType = any> = ResolversObject<{
  Query?: QueryResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Board?: BoardResolvers<ContextType>
  Subscription?: SubscriptionResolvers<ContextType>
  Date?: GraphQLScalarType
  Time?: GraphQLScalarType
  DateTime?: GraphQLScalarType
  Void?: GraphQLScalarType
  Tag?: TagResolvers<ContextType>
  Task?: TaskResolvers<ContextType>
  Template?: TemplateResolvers<ContextType>
  User?: UserResolvers<ContextType>
}>

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>
