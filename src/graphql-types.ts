export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Cursor: any;
  Date: any;
  Datetime: any;
  JSON: any;
  Time: any;
  UUID: any;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  neq?: InputMaybe<Scalars['BigInt']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<Scalars['Boolean']>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<Scalars['Date']>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']>;
  gt?: InputMaybe<Scalars['Datetime']>;
  gte?: InputMaybe<Scalars['Datetime']>;
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  lt?: InputMaybe<Scalars['Datetime']>;
  lte?: InputMaybe<Scalars['Datetime']>;
  neq?: InputMaybe<Scalars['Datetime']>;
};

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
};

/** Boolean expression comparing fields on type "JSON" */
export type JsonFilter = {
  eq?: InputMaybe<Scalars['JSON']>;
  neq?: InputMaybe<Scalars['JSON']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the collection */
  deleteFromtasksCollection: TasksDeleteResponse;
  /** Adds one or more `tasksInsertResponse` records to the collection */
  insertIntotasksCollection?: Maybe<TasksInsertResponse>;
  /** Updates zero or more records in the collection */
  updatetasksCollection: TasksUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromtasksCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<TasksFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntotasksCollectionArgs = {
  objects: Array<TasksInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdatetasksCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<TasksFilter>;
  set: TasksUpdateInput;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `tasks` */
  tasksCollection?: Maybe<TasksConnection>;
};


/** The root type for querying data */
export type QueryTasksCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<TasksFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<Scalars['Time']>>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  neq?: InputMaybe<Scalars['Time']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<Scalars['UUID']>>;
  neq?: InputMaybe<Scalars['UUID']>;
};

export type Tasks = {
  __typename?: 'tasks';
  completed?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['Datetime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  title?: Maybe<Scalars['String']>;
};

export type TasksConnection = {
  __typename?: 'tasksConnection';
  edges: Array<TasksEdge>;
  pageInfo: PageInfo;
};

export type TasksDeleteResponse = {
  __typename?: 'tasksDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Tasks>;
};

export type TasksEdge = {
  __typename?: 'tasksEdge';
  cursor: Scalars['String'];
  node: Tasks;
};

export type TasksFilter = {
  completed?: InputMaybe<BooleanFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TasksInsertInput = {
  completed?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TasksInsertResponse = {
  __typename?: 'tasksInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Tasks>;
};

export type TasksOrderBy = {
  completed?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
};

export type TasksUpdateInput = {
  completed?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TasksUpdateResponse = {
  __typename?: 'tasksUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Tasks>;
};

export type CreateTaskMutationMutationVariables = Exact<{
  tasks: Array<TasksInsertInput> | TasksInsertInput;
}>;


export type CreateTaskMutationMutation = { __typename?: 'Mutation', insertIntotasksCollection?: { __typename?: 'tasksInsertResponse', records: Array<{ __typename?: 'tasks', id: any, title?: string | null, description?: string | null, completed?: boolean | null }> } | null };

export type UpdateTaskMutationMutationVariables = Exact<{
  id: Scalars['UUID'];
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  completed?: InputMaybe<Scalars['Boolean']>;
}>;


export type UpdateTaskMutationMutation = { __typename?: 'Mutation', updatetasksCollection: { __typename?: 'tasksUpdateResponse', affectedCount: number, records: Array<{ __typename?: 'tasks', id: any, title?: string | null, description?: string | null, completed?: boolean | null }> } };

export type DeleteTaskMutationMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type DeleteTaskMutationMutation = { __typename?: 'Mutation', deleteFromtasksCollection: { __typename?: 'tasksDeleteResponse', records: Array<{ __typename?: 'tasks', id: any }> } };

export type TasksCollectionQueryQueryVariables = Exact<{
  filter?: InputMaybe<TasksFilter>;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['Cursor']>;
}>;


export type TasksCollectionQueryQuery = { __typename?: 'Query', tasksCollection?: { __typename?: 'tasksConnection', edges: Array<{ __typename?: 'tasksEdge', cursor: string, node: { __typename?: 'tasks', id: any, title?: string | null, completed?: boolean | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } | null };
