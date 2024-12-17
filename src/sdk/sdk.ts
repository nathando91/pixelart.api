import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { gql } from 'graphql-request';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  json: { input: any; output: any; }
  timestamp: { input: string; output: string; }
  uuid: { input: string; output: string; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "enemies" */
export type Enemies = {
  __typename?: 'enemies';
  attack: Scalars['Int']['output'];
  health: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  loot?: Maybe<Scalars['json']['output']>;
  name: Scalars['String']['output'];
  /** An array relationship */
  player_combat_logs: Array<Player_Combat_Logs>;
  /** An aggregate relationship */
  player_combat_logs_aggregate: Player_Combat_Logs_Aggregate;
};


/** columns and relationships of "enemies" */
export type EnemiesLootArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "enemies" */
export type EnemiesPlayer_Combat_LogsArgs = {
  distinct_on?: InputMaybe<Array<Player_Combat_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Combat_Logs_Order_By>>;
  where?: InputMaybe<Player_Combat_Logs_Bool_Exp>;
};


/** columns and relationships of "enemies" */
export type EnemiesPlayer_Combat_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Combat_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Combat_Logs_Order_By>>;
  where?: InputMaybe<Player_Combat_Logs_Bool_Exp>;
};

/** aggregated selection of "enemies" */
export type Enemies_Aggregate = {
  __typename?: 'enemies_aggregate';
  aggregate?: Maybe<Enemies_Aggregate_Fields>;
  nodes: Array<Enemies>;
};

/** aggregate fields of "enemies" */
export type Enemies_Aggregate_Fields = {
  __typename?: 'enemies_aggregate_fields';
  avg?: Maybe<Enemies_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Enemies_Max_Fields>;
  min?: Maybe<Enemies_Min_Fields>;
  stddev?: Maybe<Enemies_Stddev_Fields>;
  stddev_pop?: Maybe<Enemies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Enemies_Stddev_Samp_Fields>;
  sum?: Maybe<Enemies_Sum_Fields>;
  var_pop?: Maybe<Enemies_Var_Pop_Fields>;
  var_samp?: Maybe<Enemies_Var_Samp_Fields>;
  variance?: Maybe<Enemies_Variance_Fields>;
};


/** aggregate fields of "enemies" */
export type Enemies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Enemies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Enemies_Avg_Fields = {
  __typename?: 'enemies_avg_fields';
  attack?: Maybe<Scalars['Float']['output']>;
  health?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "enemies". All fields are combined with a logical 'AND'. */
export type Enemies_Bool_Exp = {
  _and?: InputMaybe<Array<Enemies_Bool_Exp>>;
  _not?: InputMaybe<Enemies_Bool_Exp>;
  _or?: InputMaybe<Array<Enemies_Bool_Exp>>;
  attack?: InputMaybe<Int_Comparison_Exp>;
  health?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  loot?: InputMaybe<Json_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  player_combat_logs?: InputMaybe<Player_Combat_Logs_Bool_Exp>;
  player_combat_logs_aggregate?: InputMaybe<Player_Combat_Logs_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "enemies" */
export enum Enemies_Constraint {
  /** unique or primary key constraint on columns "id" */
  EnemiesPkey = 'enemies_pkey'
}

/** input type for incrementing numeric columns in table "enemies" */
export type Enemies_Inc_Input = {
  attack?: InputMaybe<Scalars['Int']['input']>;
  health?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "enemies" */
export type Enemies_Insert_Input = {
  attack?: InputMaybe<Scalars['Int']['input']>;
  health?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  loot?: InputMaybe<Scalars['json']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  player_combat_logs?: InputMaybe<Player_Combat_Logs_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Enemies_Max_Fields = {
  __typename?: 'enemies_max_fields';
  attack?: Maybe<Scalars['Int']['output']>;
  health?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Enemies_Min_Fields = {
  __typename?: 'enemies_min_fields';
  attack?: Maybe<Scalars['Int']['output']>;
  health?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "enemies" */
export type Enemies_Mutation_Response = {
  __typename?: 'enemies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Enemies>;
};

/** input type for inserting object relation for remote table "enemies" */
export type Enemies_Obj_Rel_Insert_Input = {
  data: Enemies_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Enemies_On_Conflict>;
};

/** on_conflict condition type for table "enemies" */
export type Enemies_On_Conflict = {
  constraint: Enemies_Constraint;
  update_columns?: Array<Enemies_Update_Column>;
  where?: InputMaybe<Enemies_Bool_Exp>;
};

/** Ordering options when selecting data from "enemies". */
export type Enemies_Order_By = {
  attack?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  loot?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  player_combat_logs_aggregate?: InputMaybe<Player_Combat_Logs_Aggregate_Order_By>;
};

/** primary key columns input for table: enemies */
export type Enemies_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "enemies" */
export enum Enemies_Select_Column {
  /** column name */
  Attack = 'attack',
  /** column name */
  Health = 'health',
  /** column name */
  Id = 'id',
  /** column name */
  Loot = 'loot',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "enemies" */
export type Enemies_Set_Input = {
  attack?: InputMaybe<Scalars['Int']['input']>;
  health?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  loot?: InputMaybe<Scalars['json']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Enemies_Stddev_Fields = {
  __typename?: 'enemies_stddev_fields';
  attack?: Maybe<Scalars['Float']['output']>;
  health?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Enemies_Stddev_Pop_Fields = {
  __typename?: 'enemies_stddev_pop_fields';
  attack?: Maybe<Scalars['Float']['output']>;
  health?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Enemies_Stddev_Samp_Fields = {
  __typename?: 'enemies_stddev_samp_fields';
  attack?: Maybe<Scalars['Float']['output']>;
  health?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "enemies" */
export type Enemies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Enemies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Enemies_Stream_Cursor_Value_Input = {
  attack?: InputMaybe<Scalars['Int']['input']>;
  health?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  loot?: InputMaybe<Scalars['json']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Enemies_Sum_Fields = {
  __typename?: 'enemies_sum_fields';
  attack?: Maybe<Scalars['Int']['output']>;
  health?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "enemies" */
export enum Enemies_Update_Column {
  /** column name */
  Attack = 'attack',
  /** column name */
  Health = 'health',
  /** column name */
  Id = 'id',
  /** column name */
  Loot = 'loot',
  /** column name */
  Name = 'name'
}

export type Enemies_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Enemies_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Enemies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Enemies_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Enemies_Var_Pop_Fields = {
  __typename?: 'enemies_var_pop_fields';
  attack?: Maybe<Scalars['Float']['output']>;
  health?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Enemies_Var_Samp_Fields = {
  __typename?: 'enemies_var_samp_fields';
  attack?: Maybe<Scalars['Float']['output']>;
  health?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Enemies_Variance_Fields = {
  __typename?: 'enemies_variance_fields';
  attack?: Maybe<Scalars['Float']['output']>;
  health?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "items" */
export type Items = {
  __typename?: 'items';
  description?: Maybe<Scalars['String']['output']>;
  effect?: Maybe<Scalars['json']['output']>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  player_items: Array<Player_Items>;
  /** An aggregate relationship */
  player_items_aggregate: Player_Items_Aggregate;
  rarity: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


/** columns and relationships of "items" */
export type ItemsEffectArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "items" */
export type ItemsPlayer_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Player_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Items_Order_By>>;
  where?: InputMaybe<Player_Items_Bool_Exp>;
};


/** columns and relationships of "items" */
export type ItemsPlayer_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Items_Order_By>>;
  where?: InputMaybe<Player_Items_Bool_Exp>;
};

/** aggregated selection of "items" */
export type Items_Aggregate = {
  __typename?: 'items_aggregate';
  aggregate?: Maybe<Items_Aggregate_Fields>;
  nodes: Array<Items>;
};

/** aggregate fields of "items" */
export type Items_Aggregate_Fields = {
  __typename?: 'items_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Items_Max_Fields>;
  min?: Maybe<Items_Min_Fields>;
};


/** aggregate fields of "items" */
export type Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "items". All fields are combined with a logical 'AND'. */
export type Items_Bool_Exp = {
  _and?: InputMaybe<Array<Items_Bool_Exp>>;
  _not?: InputMaybe<Items_Bool_Exp>;
  _or?: InputMaybe<Array<Items_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  effect?: InputMaybe<Json_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  player_items?: InputMaybe<Player_Items_Bool_Exp>;
  player_items_aggregate?: InputMaybe<Player_Items_Aggregate_Bool_Exp>;
  rarity?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "items" */
export enum Items_Constraint {
  /** unique or primary key constraint on columns "id" */
  ItemsPkey = 'items_pkey'
}

/** input type for inserting data into table "items" */
export type Items_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  effect?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  player_items?: InputMaybe<Player_Items_Arr_Rel_Insert_Input>;
  rarity?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Items_Max_Fields = {
  __typename?: 'items_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rarity?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Items_Min_Fields = {
  __typename?: 'items_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rarity?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "items" */
export type Items_Mutation_Response = {
  __typename?: 'items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Items>;
};

/** input type for inserting object relation for remote table "items" */
export type Items_Obj_Rel_Insert_Input = {
  data: Items_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Items_On_Conflict>;
};

/** on_conflict condition type for table "items" */
export type Items_On_Conflict = {
  constraint: Items_Constraint;
  update_columns?: Array<Items_Update_Column>;
  where?: InputMaybe<Items_Bool_Exp>;
};

/** Ordering options when selecting data from "items". */
export type Items_Order_By = {
  description?: InputMaybe<Order_By>;
  effect?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  player_items_aggregate?: InputMaybe<Player_Items_Aggregate_Order_By>;
  rarity?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: items */
export type Items_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "items" */
export enum Items_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Effect = 'effect',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Rarity = 'rarity',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "items" */
export type Items_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  effect?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rarity?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "items" */
export type Items_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Items_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Items_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  effect?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rarity?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "items" */
export enum Items_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Effect = 'effect',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Rarity = 'rarity',
  /** column name */
  Type = 'type'
}

export type Items_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Items_Set_Input>;
  /** filter the rows which have to be updated */
  where: Items_Bool_Exp;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']['input']>;
  _gt?: InputMaybe<Scalars['json']['input']>;
  _gte?: InputMaybe<Scalars['json']['input']>;
  _in?: InputMaybe<Array<Scalars['json']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['json']['input']>;
  _lte?: InputMaybe<Scalars['json']['input']>;
  _neq?: InputMaybe<Scalars['json']['input']>;
  _nin?: InputMaybe<Array<Scalars['json']['input']>>;
};

/** columns and relationships of "maps" */
export type Maps = {
  __typename?: 'maps';
  description?: Maybe<Scalars['String']['output']>;
  height: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

/** aggregated selection of "maps" */
export type Maps_Aggregate = {
  __typename?: 'maps_aggregate';
  aggregate?: Maybe<Maps_Aggregate_Fields>;
  nodes: Array<Maps>;
};

/** aggregate fields of "maps" */
export type Maps_Aggregate_Fields = {
  __typename?: 'maps_aggregate_fields';
  avg?: Maybe<Maps_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Maps_Max_Fields>;
  min?: Maybe<Maps_Min_Fields>;
  stddev?: Maybe<Maps_Stddev_Fields>;
  stddev_pop?: Maybe<Maps_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Maps_Stddev_Samp_Fields>;
  sum?: Maybe<Maps_Sum_Fields>;
  var_pop?: Maybe<Maps_Var_Pop_Fields>;
  var_samp?: Maybe<Maps_Var_Samp_Fields>;
  variance?: Maybe<Maps_Variance_Fields>;
};


/** aggregate fields of "maps" */
export type Maps_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Maps_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Maps_Avg_Fields = {
  __typename?: 'maps_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "maps". All fields are combined with a logical 'AND'. */
export type Maps_Bool_Exp = {
  _and?: InputMaybe<Array<Maps_Bool_Exp>>;
  _not?: InputMaybe<Maps_Bool_Exp>;
  _or?: InputMaybe<Array<Maps_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  width?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "maps" */
export enum Maps_Constraint {
  /** unique or primary key constraint on columns "id" */
  MapsPkey = 'maps_pkey'
}

/** input type for incrementing numeric columns in table "maps" */
export type Maps_Inc_Input = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "maps" */
export type Maps_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Maps_Max_Fields = {
  __typename?: 'maps_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Maps_Min_Fields = {
  __typename?: 'maps_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "maps" */
export type Maps_Mutation_Response = {
  __typename?: 'maps_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Maps>;
};

/** on_conflict condition type for table "maps" */
export type Maps_On_Conflict = {
  constraint: Maps_Constraint;
  update_columns?: Array<Maps_Update_Column>;
  where?: InputMaybe<Maps_Bool_Exp>;
};

/** Ordering options when selecting data from "maps". */
export type Maps_Order_By = {
  description?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** primary key columns input for table: maps */
export type Maps_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "maps" */
export enum Maps_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Width = 'width'
}

/** input type for updating data in table "maps" */
export type Maps_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Maps_Stddev_Fields = {
  __typename?: 'maps_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Maps_Stddev_Pop_Fields = {
  __typename?: 'maps_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Maps_Stddev_Samp_Fields = {
  __typename?: 'maps_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "maps" */
export type Maps_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Maps_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Maps_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Maps_Sum_Fields = {
  __typename?: 'maps_sum_fields';
  height?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "maps" */
export enum Maps_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Width = 'width'
}

export type Maps_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Maps_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Maps_Set_Input>;
  /** filter the rows which have to be updated */
  where: Maps_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Maps_Var_Pop_Fields = {
  __typename?: 'maps_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Maps_Var_Samp_Fields = {
  __typename?: 'maps_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Maps_Variance_Fields = {
  __typename?: 'maps_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "enemies" */
  delete_enemies?: Maybe<Enemies_Mutation_Response>;
  /** delete single row from the table: "enemies" */
  delete_enemies_by_pk?: Maybe<Enemies>;
  /** delete data from the table: "items" */
  delete_items?: Maybe<Items_Mutation_Response>;
  /** delete single row from the table: "items" */
  delete_items_by_pk?: Maybe<Items>;
  /** delete data from the table: "maps" */
  delete_maps?: Maybe<Maps_Mutation_Response>;
  /** delete single row from the table: "maps" */
  delete_maps_by_pk?: Maybe<Maps>;
  /** delete data from the table: "player_combat_logs" */
  delete_player_combat_logs?: Maybe<Player_Combat_Logs_Mutation_Response>;
  /** delete single row from the table: "player_combat_logs" */
  delete_player_combat_logs_by_pk?: Maybe<Player_Combat_Logs>;
  /** delete data from the table: "player_items" */
  delete_player_items?: Maybe<Player_Items_Mutation_Response>;
  /** delete single row from the table: "player_items" */
  delete_player_items_by_pk?: Maybe<Player_Items>;
  /** delete data from the table: "player_profiles" */
  delete_player_profiles?: Maybe<Player_Profiles_Mutation_Response>;
  /** delete single row from the table: "player_profiles" */
  delete_player_profiles_by_pk?: Maybe<Player_Profiles>;
  /** delete data from the table: "player_quests" */
  delete_player_quests?: Maybe<Player_Quests_Mutation_Response>;
  /** delete single row from the table: "player_quests" */
  delete_player_quests_by_pk?: Maybe<Player_Quests>;
  /** delete data from the table: "quests" */
  delete_quests?: Maybe<Quests_Mutation_Response>;
  /** delete single row from the table: "quests" */
  delete_quests_by_pk?: Maybe<Quests>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "enemies" */
  insert_enemies?: Maybe<Enemies_Mutation_Response>;
  /** insert a single row into the table: "enemies" */
  insert_enemies_one?: Maybe<Enemies>;
  /** insert data into the table: "items" */
  insert_items?: Maybe<Items_Mutation_Response>;
  /** insert a single row into the table: "items" */
  insert_items_one?: Maybe<Items>;
  /** insert data into the table: "maps" */
  insert_maps?: Maybe<Maps_Mutation_Response>;
  /** insert a single row into the table: "maps" */
  insert_maps_one?: Maybe<Maps>;
  /** insert data into the table: "player_combat_logs" */
  insert_player_combat_logs?: Maybe<Player_Combat_Logs_Mutation_Response>;
  /** insert a single row into the table: "player_combat_logs" */
  insert_player_combat_logs_one?: Maybe<Player_Combat_Logs>;
  /** insert data into the table: "player_items" */
  insert_player_items?: Maybe<Player_Items_Mutation_Response>;
  /** insert a single row into the table: "player_items" */
  insert_player_items_one?: Maybe<Player_Items>;
  /** insert data into the table: "player_profiles" */
  insert_player_profiles?: Maybe<Player_Profiles_Mutation_Response>;
  /** insert a single row into the table: "player_profiles" */
  insert_player_profiles_one?: Maybe<Player_Profiles>;
  /** insert data into the table: "player_quests" */
  insert_player_quests?: Maybe<Player_Quests_Mutation_Response>;
  /** insert a single row into the table: "player_quests" */
  insert_player_quests_one?: Maybe<Player_Quests>;
  /** insert data into the table: "quests" */
  insert_quests?: Maybe<Quests_Mutation_Response>;
  /** insert a single row into the table: "quests" */
  insert_quests_one?: Maybe<Quests>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "enemies" */
  update_enemies?: Maybe<Enemies_Mutation_Response>;
  /** update single row of the table: "enemies" */
  update_enemies_by_pk?: Maybe<Enemies>;
  /** update multiples rows of table: "enemies" */
  update_enemies_many?: Maybe<Array<Maybe<Enemies_Mutation_Response>>>;
  /** update data of the table: "items" */
  update_items?: Maybe<Items_Mutation_Response>;
  /** update single row of the table: "items" */
  update_items_by_pk?: Maybe<Items>;
  /** update multiples rows of table: "items" */
  update_items_many?: Maybe<Array<Maybe<Items_Mutation_Response>>>;
  /** update data of the table: "maps" */
  update_maps?: Maybe<Maps_Mutation_Response>;
  /** update single row of the table: "maps" */
  update_maps_by_pk?: Maybe<Maps>;
  /** update multiples rows of table: "maps" */
  update_maps_many?: Maybe<Array<Maybe<Maps_Mutation_Response>>>;
  /** update data of the table: "player_combat_logs" */
  update_player_combat_logs?: Maybe<Player_Combat_Logs_Mutation_Response>;
  /** update single row of the table: "player_combat_logs" */
  update_player_combat_logs_by_pk?: Maybe<Player_Combat_Logs>;
  /** update multiples rows of table: "player_combat_logs" */
  update_player_combat_logs_many?: Maybe<Array<Maybe<Player_Combat_Logs_Mutation_Response>>>;
  /** update data of the table: "player_items" */
  update_player_items?: Maybe<Player_Items_Mutation_Response>;
  /** update single row of the table: "player_items" */
  update_player_items_by_pk?: Maybe<Player_Items>;
  /** update multiples rows of table: "player_items" */
  update_player_items_many?: Maybe<Array<Maybe<Player_Items_Mutation_Response>>>;
  /** update data of the table: "player_profiles" */
  update_player_profiles?: Maybe<Player_Profiles_Mutation_Response>;
  /** update single row of the table: "player_profiles" */
  update_player_profiles_by_pk?: Maybe<Player_Profiles>;
  /** update multiples rows of table: "player_profiles" */
  update_player_profiles_many?: Maybe<Array<Maybe<Player_Profiles_Mutation_Response>>>;
  /** update data of the table: "player_quests" */
  update_player_quests?: Maybe<Player_Quests_Mutation_Response>;
  /** update single row of the table: "player_quests" */
  update_player_quests_by_pk?: Maybe<Player_Quests>;
  /** update multiples rows of table: "player_quests" */
  update_player_quests_many?: Maybe<Array<Maybe<Player_Quests_Mutation_Response>>>;
  /** update data of the table: "quests" */
  update_quests?: Maybe<Quests_Mutation_Response>;
  /** update single row of the table: "quests" */
  update_quests_by_pk?: Maybe<Quests>;
  /** update multiples rows of table: "quests" */
  update_quests_many?: Maybe<Array<Maybe<Quests_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_EnemiesArgs = {
  where: Enemies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Enemies_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ItemsArgs = {
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Items_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MapsArgs = {
  where: Maps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Maps_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Player_Combat_LogsArgs = {
  where: Player_Combat_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Player_Combat_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Player_ItemsArgs = {
  where: Player_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Player_Items_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Player_ProfilesArgs = {
  where: Player_Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Player_Profiles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Player_QuestsArgs = {
  where: Player_Quests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Player_Quests_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_QuestsArgs = {
  where: Quests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quests_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_EnemiesArgs = {
  objects: Array<Enemies_Insert_Input>;
  on_conflict?: InputMaybe<Enemies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Enemies_OneArgs = {
  object: Enemies_Insert_Input;
  on_conflict?: InputMaybe<Enemies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ItemsArgs = {
  objects: Array<Items_Insert_Input>;
  on_conflict?: InputMaybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Items_OneArgs = {
  object: Items_Insert_Input;
  on_conflict?: InputMaybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MapsArgs = {
  objects: Array<Maps_Insert_Input>;
  on_conflict?: InputMaybe<Maps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Maps_OneArgs = {
  object: Maps_Insert_Input;
  on_conflict?: InputMaybe<Maps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Player_Combat_LogsArgs = {
  objects: Array<Player_Combat_Logs_Insert_Input>;
  on_conflict?: InputMaybe<Player_Combat_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Player_Combat_Logs_OneArgs = {
  object: Player_Combat_Logs_Insert_Input;
  on_conflict?: InputMaybe<Player_Combat_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Player_ItemsArgs = {
  objects: Array<Player_Items_Insert_Input>;
  on_conflict?: InputMaybe<Player_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Player_Items_OneArgs = {
  object: Player_Items_Insert_Input;
  on_conflict?: InputMaybe<Player_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Player_ProfilesArgs = {
  objects: Array<Player_Profiles_Insert_Input>;
  on_conflict?: InputMaybe<Player_Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Player_Profiles_OneArgs = {
  object: Player_Profiles_Insert_Input;
  on_conflict?: InputMaybe<Player_Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Player_QuestsArgs = {
  objects: Array<Player_Quests_Insert_Input>;
  on_conflict?: InputMaybe<Player_Quests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Player_Quests_OneArgs = {
  object: Player_Quests_Insert_Input;
  on_conflict?: InputMaybe<Player_Quests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestsArgs = {
  objects: Array<Quests_Insert_Input>;
  on_conflict?: InputMaybe<Quests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quests_OneArgs = {
  object: Quests_Insert_Input;
  on_conflict?: InputMaybe<Quests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_EnemiesArgs = {
  _inc?: InputMaybe<Enemies_Inc_Input>;
  _set?: InputMaybe<Enemies_Set_Input>;
  where: Enemies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Enemies_By_PkArgs = {
  _inc?: InputMaybe<Enemies_Inc_Input>;
  _set?: InputMaybe<Enemies_Set_Input>;
  pk_columns: Enemies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Enemies_ManyArgs = {
  updates: Array<Enemies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ItemsArgs = {
  _set?: InputMaybe<Items_Set_Input>;
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Items_By_PkArgs = {
  _set?: InputMaybe<Items_Set_Input>;
  pk_columns: Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Items_ManyArgs = {
  updates: Array<Items_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MapsArgs = {
  _inc?: InputMaybe<Maps_Inc_Input>;
  _set?: InputMaybe<Maps_Set_Input>;
  where: Maps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Maps_By_PkArgs = {
  _inc?: InputMaybe<Maps_Inc_Input>;
  _set?: InputMaybe<Maps_Set_Input>;
  pk_columns: Maps_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Maps_ManyArgs = {
  updates: Array<Maps_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Player_Combat_LogsArgs = {
  _inc?: InputMaybe<Player_Combat_Logs_Inc_Input>;
  _set?: InputMaybe<Player_Combat_Logs_Set_Input>;
  where: Player_Combat_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Player_Combat_Logs_By_PkArgs = {
  _inc?: InputMaybe<Player_Combat_Logs_Inc_Input>;
  _set?: InputMaybe<Player_Combat_Logs_Set_Input>;
  pk_columns: Player_Combat_Logs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Player_Combat_Logs_ManyArgs = {
  updates: Array<Player_Combat_Logs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Player_ItemsArgs = {
  _inc?: InputMaybe<Player_Items_Inc_Input>;
  _set?: InputMaybe<Player_Items_Set_Input>;
  where: Player_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Player_Items_By_PkArgs = {
  _inc?: InputMaybe<Player_Items_Inc_Input>;
  _set?: InputMaybe<Player_Items_Set_Input>;
  pk_columns: Player_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Player_Items_ManyArgs = {
  updates: Array<Player_Items_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Player_ProfilesArgs = {
  _inc?: InputMaybe<Player_Profiles_Inc_Input>;
  _set?: InputMaybe<Player_Profiles_Set_Input>;
  where: Player_Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Player_Profiles_By_PkArgs = {
  _inc?: InputMaybe<Player_Profiles_Inc_Input>;
  _set?: InputMaybe<Player_Profiles_Set_Input>;
  pk_columns: Player_Profiles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Player_Profiles_ManyArgs = {
  updates: Array<Player_Profiles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Player_QuestsArgs = {
  _set?: InputMaybe<Player_Quests_Set_Input>;
  where: Player_Quests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Player_Quests_By_PkArgs = {
  _set?: InputMaybe<Player_Quests_Set_Input>;
  pk_columns: Player_Quests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Player_Quests_ManyArgs = {
  updates: Array<Player_Quests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_QuestsArgs = {
  _set?: InputMaybe<Quests_Set_Input>;
  where: Quests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quests_By_PkArgs = {
  _set?: InputMaybe<Quests_Set_Input>;
  pk_columns: Quests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Quests_ManyArgs = {
  updates: Array<Quests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "player_combat_logs" */
export type Player_Combat_Logs = {
  __typename?: 'player_combat_logs';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  damage_dealt: Scalars['Int']['output'];
  damage_taken: Scalars['Int']['output'];
  /** An object relationship */
  enemy?: Maybe<Enemies>;
  enemy_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  player_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  player_profile?: Maybe<Player_Profiles>;
  result: Scalars['String']['output'];
};

/** aggregated selection of "player_combat_logs" */
export type Player_Combat_Logs_Aggregate = {
  __typename?: 'player_combat_logs_aggregate';
  aggregate?: Maybe<Player_Combat_Logs_Aggregate_Fields>;
  nodes: Array<Player_Combat_Logs>;
};

export type Player_Combat_Logs_Aggregate_Bool_Exp = {
  count?: InputMaybe<Player_Combat_Logs_Aggregate_Bool_Exp_Count>;
};

export type Player_Combat_Logs_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Player_Combat_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Player_Combat_Logs_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "player_combat_logs" */
export type Player_Combat_Logs_Aggregate_Fields = {
  __typename?: 'player_combat_logs_aggregate_fields';
  avg?: Maybe<Player_Combat_Logs_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Player_Combat_Logs_Max_Fields>;
  min?: Maybe<Player_Combat_Logs_Min_Fields>;
  stddev?: Maybe<Player_Combat_Logs_Stddev_Fields>;
  stddev_pop?: Maybe<Player_Combat_Logs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Player_Combat_Logs_Stddev_Samp_Fields>;
  sum?: Maybe<Player_Combat_Logs_Sum_Fields>;
  var_pop?: Maybe<Player_Combat_Logs_Var_Pop_Fields>;
  var_samp?: Maybe<Player_Combat_Logs_Var_Samp_Fields>;
  variance?: Maybe<Player_Combat_Logs_Variance_Fields>;
};


/** aggregate fields of "player_combat_logs" */
export type Player_Combat_Logs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Player_Combat_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "player_combat_logs" */
export type Player_Combat_Logs_Aggregate_Order_By = {
  avg?: InputMaybe<Player_Combat_Logs_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Player_Combat_Logs_Max_Order_By>;
  min?: InputMaybe<Player_Combat_Logs_Min_Order_By>;
  stddev?: InputMaybe<Player_Combat_Logs_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Player_Combat_Logs_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Player_Combat_Logs_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Player_Combat_Logs_Sum_Order_By>;
  var_pop?: InputMaybe<Player_Combat_Logs_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Player_Combat_Logs_Var_Samp_Order_By>;
  variance?: InputMaybe<Player_Combat_Logs_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "player_combat_logs" */
export type Player_Combat_Logs_Arr_Rel_Insert_Input = {
  data: Array<Player_Combat_Logs_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Player_Combat_Logs_On_Conflict>;
};

/** aggregate avg on columns */
export type Player_Combat_Logs_Avg_Fields = {
  __typename?: 'player_combat_logs_avg_fields';
  damage_dealt?: Maybe<Scalars['Float']['output']>;
  damage_taken?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "player_combat_logs" */
export type Player_Combat_Logs_Avg_Order_By = {
  damage_dealt?: InputMaybe<Order_By>;
  damage_taken?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "player_combat_logs". All fields are combined with a logical 'AND'. */
export type Player_Combat_Logs_Bool_Exp = {
  _and?: InputMaybe<Array<Player_Combat_Logs_Bool_Exp>>;
  _not?: InputMaybe<Player_Combat_Logs_Bool_Exp>;
  _or?: InputMaybe<Array<Player_Combat_Logs_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  damage_dealt?: InputMaybe<Int_Comparison_Exp>;
  damage_taken?: InputMaybe<Int_Comparison_Exp>;
  enemy?: InputMaybe<Enemies_Bool_Exp>;
  enemy_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  player_id?: InputMaybe<Uuid_Comparison_Exp>;
  player_profile?: InputMaybe<Player_Profiles_Bool_Exp>;
  result?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "player_combat_logs" */
export enum Player_Combat_Logs_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlayerCombatLogsPkey = 'player_combat_logs_pkey'
}

/** input type for incrementing numeric columns in table "player_combat_logs" */
export type Player_Combat_Logs_Inc_Input = {
  damage_dealt?: InputMaybe<Scalars['Int']['input']>;
  damage_taken?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "player_combat_logs" */
export type Player_Combat_Logs_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  damage_dealt?: InputMaybe<Scalars['Int']['input']>;
  damage_taken?: InputMaybe<Scalars['Int']['input']>;
  enemy?: InputMaybe<Enemies_Obj_Rel_Insert_Input>;
  enemy_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  player_id?: InputMaybe<Scalars['uuid']['input']>;
  player_profile?: InputMaybe<Player_Profiles_Obj_Rel_Insert_Input>;
  result?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Player_Combat_Logs_Max_Fields = {
  __typename?: 'player_combat_logs_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  damage_dealt?: Maybe<Scalars['Int']['output']>;
  damage_taken?: Maybe<Scalars['Int']['output']>;
  enemy_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  player_id?: Maybe<Scalars['uuid']['output']>;
  result?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "player_combat_logs" */
export type Player_Combat_Logs_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  damage_dealt?: InputMaybe<Order_By>;
  damage_taken?: InputMaybe<Order_By>;
  enemy_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Player_Combat_Logs_Min_Fields = {
  __typename?: 'player_combat_logs_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  damage_dealt?: Maybe<Scalars['Int']['output']>;
  damage_taken?: Maybe<Scalars['Int']['output']>;
  enemy_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  player_id?: Maybe<Scalars['uuid']['output']>;
  result?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "player_combat_logs" */
export type Player_Combat_Logs_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  damage_dealt?: InputMaybe<Order_By>;
  damage_taken?: InputMaybe<Order_By>;
  enemy_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "player_combat_logs" */
export type Player_Combat_Logs_Mutation_Response = {
  __typename?: 'player_combat_logs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Player_Combat_Logs>;
};

/** on_conflict condition type for table "player_combat_logs" */
export type Player_Combat_Logs_On_Conflict = {
  constraint: Player_Combat_Logs_Constraint;
  update_columns?: Array<Player_Combat_Logs_Update_Column>;
  where?: InputMaybe<Player_Combat_Logs_Bool_Exp>;
};

/** Ordering options when selecting data from "player_combat_logs". */
export type Player_Combat_Logs_Order_By = {
  created_at?: InputMaybe<Order_By>;
  damage_dealt?: InputMaybe<Order_By>;
  damage_taken?: InputMaybe<Order_By>;
  enemy?: InputMaybe<Enemies_Order_By>;
  enemy_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  player_profile?: InputMaybe<Player_Profiles_Order_By>;
  result?: InputMaybe<Order_By>;
};

/** primary key columns input for table: player_combat_logs */
export type Player_Combat_Logs_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "player_combat_logs" */
export enum Player_Combat_Logs_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DamageDealt = 'damage_dealt',
  /** column name */
  DamageTaken = 'damage_taken',
  /** column name */
  EnemyId = 'enemy_id',
  /** column name */
  Id = 'id',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  Result = 'result'
}

/** input type for updating data in table "player_combat_logs" */
export type Player_Combat_Logs_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  damage_dealt?: InputMaybe<Scalars['Int']['input']>;
  damage_taken?: InputMaybe<Scalars['Int']['input']>;
  enemy_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  player_id?: InputMaybe<Scalars['uuid']['input']>;
  result?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Player_Combat_Logs_Stddev_Fields = {
  __typename?: 'player_combat_logs_stddev_fields';
  damage_dealt?: Maybe<Scalars['Float']['output']>;
  damage_taken?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "player_combat_logs" */
export type Player_Combat_Logs_Stddev_Order_By = {
  damage_dealt?: InputMaybe<Order_By>;
  damage_taken?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Player_Combat_Logs_Stddev_Pop_Fields = {
  __typename?: 'player_combat_logs_stddev_pop_fields';
  damage_dealt?: Maybe<Scalars['Float']['output']>;
  damage_taken?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "player_combat_logs" */
export type Player_Combat_Logs_Stddev_Pop_Order_By = {
  damage_dealt?: InputMaybe<Order_By>;
  damage_taken?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Player_Combat_Logs_Stddev_Samp_Fields = {
  __typename?: 'player_combat_logs_stddev_samp_fields';
  damage_dealt?: Maybe<Scalars['Float']['output']>;
  damage_taken?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "player_combat_logs" */
export type Player_Combat_Logs_Stddev_Samp_Order_By = {
  damage_dealt?: InputMaybe<Order_By>;
  damage_taken?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "player_combat_logs" */
export type Player_Combat_Logs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Player_Combat_Logs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Player_Combat_Logs_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  damage_dealt?: InputMaybe<Scalars['Int']['input']>;
  damage_taken?: InputMaybe<Scalars['Int']['input']>;
  enemy_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  player_id?: InputMaybe<Scalars['uuid']['input']>;
  result?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Player_Combat_Logs_Sum_Fields = {
  __typename?: 'player_combat_logs_sum_fields';
  damage_dealt?: Maybe<Scalars['Int']['output']>;
  damage_taken?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "player_combat_logs" */
export type Player_Combat_Logs_Sum_Order_By = {
  damage_dealt?: InputMaybe<Order_By>;
  damage_taken?: InputMaybe<Order_By>;
};

/** update columns of table "player_combat_logs" */
export enum Player_Combat_Logs_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DamageDealt = 'damage_dealt',
  /** column name */
  DamageTaken = 'damage_taken',
  /** column name */
  EnemyId = 'enemy_id',
  /** column name */
  Id = 'id',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  Result = 'result'
}

export type Player_Combat_Logs_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Player_Combat_Logs_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Player_Combat_Logs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Player_Combat_Logs_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Player_Combat_Logs_Var_Pop_Fields = {
  __typename?: 'player_combat_logs_var_pop_fields';
  damage_dealt?: Maybe<Scalars['Float']['output']>;
  damage_taken?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "player_combat_logs" */
export type Player_Combat_Logs_Var_Pop_Order_By = {
  damage_dealt?: InputMaybe<Order_By>;
  damage_taken?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Player_Combat_Logs_Var_Samp_Fields = {
  __typename?: 'player_combat_logs_var_samp_fields';
  damage_dealt?: Maybe<Scalars['Float']['output']>;
  damage_taken?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "player_combat_logs" */
export type Player_Combat_Logs_Var_Samp_Order_By = {
  damage_dealt?: InputMaybe<Order_By>;
  damage_taken?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Player_Combat_Logs_Variance_Fields = {
  __typename?: 'player_combat_logs_variance_fields';
  damage_dealt?: Maybe<Scalars['Float']['output']>;
  damage_taken?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "player_combat_logs" */
export type Player_Combat_Logs_Variance_Order_By = {
  damage_dealt?: InputMaybe<Order_By>;
  damage_taken?: InputMaybe<Order_By>;
};

/** columns and relationships of "player_items" */
export type Player_Items = {
  __typename?: 'player_items';
  equipped?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  item?: Maybe<Items>;
  item_id?: Maybe<Scalars['uuid']['output']>;
  player_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  player_profile?: Maybe<Player_Profiles>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "player_items" */
export type Player_Items_Aggregate = {
  __typename?: 'player_items_aggregate';
  aggregate?: Maybe<Player_Items_Aggregate_Fields>;
  nodes: Array<Player_Items>;
};

export type Player_Items_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Player_Items_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Player_Items_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Player_Items_Aggregate_Bool_Exp_Count>;
};

export type Player_Items_Aggregate_Bool_Exp_Bool_And = {
  arguments: Player_Items_Select_Column_Player_Items_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Player_Items_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Player_Items_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Player_Items_Select_Column_Player_Items_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Player_Items_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Player_Items_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Player_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Player_Items_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "player_items" */
export type Player_Items_Aggregate_Fields = {
  __typename?: 'player_items_aggregate_fields';
  avg?: Maybe<Player_Items_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Player_Items_Max_Fields>;
  min?: Maybe<Player_Items_Min_Fields>;
  stddev?: Maybe<Player_Items_Stddev_Fields>;
  stddev_pop?: Maybe<Player_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Player_Items_Stddev_Samp_Fields>;
  sum?: Maybe<Player_Items_Sum_Fields>;
  var_pop?: Maybe<Player_Items_Var_Pop_Fields>;
  var_samp?: Maybe<Player_Items_Var_Samp_Fields>;
  variance?: Maybe<Player_Items_Variance_Fields>;
};


/** aggregate fields of "player_items" */
export type Player_Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Player_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "player_items" */
export type Player_Items_Aggregate_Order_By = {
  avg?: InputMaybe<Player_Items_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Player_Items_Max_Order_By>;
  min?: InputMaybe<Player_Items_Min_Order_By>;
  stddev?: InputMaybe<Player_Items_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Player_Items_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Player_Items_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Player_Items_Sum_Order_By>;
  var_pop?: InputMaybe<Player_Items_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Player_Items_Var_Samp_Order_By>;
  variance?: InputMaybe<Player_Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "player_items" */
export type Player_Items_Arr_Rel_Insert_Input = {
  data: Array<Player_Items_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Player_Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Player_Items_Avg_Fields = {
  __typename?: 'player_items_avg_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "player_items" */
export type Player_Items_Avg_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "player_items". All fields are combined with a logical 'AND'. */
export type Player_Items_Bool_Exp = {
  _and?: InputMaybe<Array<Player_Items_Bool_Exp>>;
  _not?: InputMaybe<Player_Items_Bool_Exp>;
  _or?: InputMaybe<Array<Player_Items_Bool_Exp>>;
  equipped?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  item?: InputMaybe<Items_Bool_Exp>;
  item_id?: InputMaybe<Uuid_Comparison_Exp>;
  player_id?: InputMaybe<Uuid_Comparison_Exp>;
  player_profile?: InputMaybe<Player_Profiles_Bool_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "player_items" */
export enum Player_Items_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlayerItemsPkey = 'player_items_pkey'
}

/** input type for incrementing numeric columns in table "player_items" */
export type Player_Items_Inc_Input = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "player_items" */
export type Player_Items_Insert_Input = {
  equipped?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  item?: InputMaybe<Items_Obj_Rel_Insert_Input>;
  item_id?: InputMaybe<Scalars['uuid']['input']>;
  player_id?: InputMaybe<Scalars['uuid']['input']>;
  player_profile?: InputMaybe<Player_Profiles_Obj_Rel_Insert_Input>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Player_Items_Max_Fields = {
  __typename?: 'player_items_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  item_id?: Maybe<Scalars['uuid']['output']>;
  player_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "player_items" */
export type Player_Items_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Player_Items_Min_Fields = {
  __typename?: 'player_items_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  item_id?: Maybe<Scalars['uuid']['output']>;
  player_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "player_items" */
export type Player_Items_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "player_items" */
export type Player_Items_Mutation_Response = {
  __typename?: 'player_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Player_Items>;
};

/** on_conflict condition type for table "player_items" */
export type Player_Items_On_Conflict = {
  constraint: Player_Items_Constraint;
  update_columns?: Array<Player_Items_Update_Column>;
  where?: InputMaybe<Player_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "player_items". */
export type Player_Items_Order_By = {
  equipped?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item?: InputMaybe<Items_Order_By>;
  item_id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  player_profile?: InputMaybe<Player_Profiles_Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** primary key columns input for table: player_items */
export type Player_Items_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "player_items" */
export enum Player_Items_Select_Column {
  /** column name */
  Equipped = 'equipped',
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  Quantity = 'quantity'
}

/** select "player_items_aggregate_bool_exp_bool_and_arguments_columns" columns of table "player_items" */
export enum Player_Items_Select_Column_Player_Items_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Equipped = 'equipped'
}

/** select "player_items_aggregate_bool_exp_bool_or_arguments_columns" columns of table "player_items" */
export enum Player_Items_Select_Column_Player_Items_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Equipped = 'equipped'
}

/** input type for updating data in table "player_items" */
export type Player_Items_Set_Input = {
  equipped?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  item_id?: InputMaybe<Scalars['uuid']['input']>;
  player_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Player_Items_Stddev_Fields = {
  __typename?: 'player_items_stddev_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "player_items" */
export type Player_Items_Stddev_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Player_Items_Stddev_Pop_Fields = {
  __typename?: 'player_items_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "player_items" */
export type Player_Items_Stddev_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Player_Items_Stddev_Samp_Fields = {
  __typename?: 'player_items_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "player_items" */
export type Player_Items_Stddev_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "player_items" */
export type Player_Items_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Player_Items_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Player_Items_Stream_Cursor_Value_Input = {
  equipped?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  item_id?: InputMaybe<Scalars['uuid']['input']>;
  player_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Player_Items_Sum_Fields = {
  __typename?: 'player_items_sum_fields';
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "player_items" */
export type Player_Items_Sum_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "player_items" */
export enum Player_Items_Update_Column {
  /** column name */
  Equipped = 'equipped',
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  Quantity = 'quantity'
}

export type Player_Items_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Player_Items_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Player_Items_Set_Input>;
  /** filter the rows which have to be updated */
  where: Player_Items_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Player_Items_Var_Pop_Fields = {
  __typename?: 'player_items_var_pop_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "player_items" */
export type Player_Items_Var_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Player_Items_Var_Samp_Fields = {
  __typename?: 'player_items_var_samp_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "player_items" */
export type Player_Items_Var_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Player_Items_Variance_Fields = {
  __typename?: 'player_items_variance_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "player_items" */
export type Player_Items_Variance_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** columns and relationships of "player_profiles" */
export type Player_Profiles = {
  __typename?: 'player_profiles';
  experience?: Maybe<Scalars['Int']['output']>;
  gold?: Maybe<Scalars['Int']['output']>;
  health?: Maybe<Scalars['Int']['output']>;
  id: Scalars['uuid']['output'];
  level?: Maybe<Scalars['Int']['output']>;
  location_id?: Maybe<Scalars['uuid']['output']>;
  max_health?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  player_combat_logs: Array<Player_Combat_Logs>;
  /** An aggregate relationship */
  player_combat_logs_aggregate: Player_Combat_Logs_Aggregate;
  /** An array relationship */
  player_items: Array<Player_Items>;
  /** An aggregate relationship */
  player_items_aggregate: Player_Items_Aggregate;
  /** An array relationship */
  player_quests: Array<Player_Quests>;
  /** An aggregate relationship */
  player_quests_aggregate: Player_Quests_Aggregate;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "player_profiles" */
export type Player_ProfilesPlayer_Combat_LogsArgs = {
  distinct_on?: InputMaybe<Array<Player_Combat_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Combat_Logs_Order_By>>;
  where?: InputMaybe<Player_Combat_Logs_Bool_Exp>;
};


/** columns and relationships of "player_profiles" */
export type Player_ProfilesPlayer_Combat_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Combat_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Combat_Logs_Order_By>>;
  where?: InputMaybe<Player_Combat_Logs_Bool_Exp>;
};


/** columns and relationships of "player_profiles" */
export type Player_ProfilesPlayer_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Player_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Items_Order_By>>;
  where?: InputMaybe<Player_Items_Bool_Exp>;
};


/** columns and relationships of "player_profiles" */
export type Player_ProfilesPlayer_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Items_Order_By>>;
  where?: InputMaybe<Player_Items_Bool_Exp>;
};


/** columns and relationships of "player_profiles" */
export type Player_ProfilesPlayer_QuestsArgs = {
  distinct_on?: InputMaybe<Array<Player_Quests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Quests_Order_By>>;
  where?: InputMaybe<Player_Quests_Bool_Exp>;
};


/** columns and relationships of "player_profiles" */
export type Player_ProfilesPlayer_Quests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Quests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Quests_Order_By>>;
  where?: InputMaybe<Player_Quests_Bool_Exp>;
};

/** aggregated selection of "player_profiles" */
export type Player_Profiles_Aggregate = {
  __typename?: 'player_profiles_aggregate';
  aggregate?: Maybe<Player_Profiles_Aggregate_Fields>;
  nodes: Array<Player_Profiles>;
};

export type Player_Profiles_Aggregate_Bool_Exp = {
  count?: InputMaybe<Player_Profiles_Aggregate_Bool_Exp_Count>;
};

export type Player_Profiles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Player_Profiles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Player_Profiles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "player_profiles" */
export type Player_Profiles_Aggregate_Fields = {
  __typename?: 'player_profiles_aggregate_fields';
  avg?: Maybe<Player_Profiles_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Player_Profiles_Max_Fields>;
  min?: Maybe<Player_Profiles_Min_Fields>;
  stddev?: Maybe<Player_Profiles_Stddev_Fields>;
  stddev_pop?: Maybe<Player_Profiles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Player_Profiles_Stddev_Samp_Fields>;
  sum?: Maybe<Player_Profiles_Sum_Fields>;
  var_pop?: Maybe<Player_Profiles_Var_Pop_Fields>;
  var_samp?: Maybe<Player_Profiles_Var_Samp_Fields>;
  variance?: Maybe<Player_Profiles_Variance_Fields>;
};


/** aggregate fields of "player_profiles" */
export type Player_Profiles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Player_Profiles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "player_profiles" */
export type Player_Profiles_Aggregate_Order_By = {
  avg?: InputMaybe<Player_Profiles_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Player_Profiles_Max_Order_By>;
  min?: InputMaybe<Player_Profiles_Min_Order_By>;
  stddev?: InputMaybe<Player_Profiles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Player_Profiles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Player_Profiles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Player_Profiles_Sum_Order_By>;
  var_pop?: InputMaybe<Player_Profiles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Player_Profiles_Var_Samp_Order_By>;
  variance?: InputMaybe<Player_Profiles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "player_profiles" */
export type Player_Profiles_Arr_Rel_Insert_Input = {
  data: Array<Player_Profiles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Player_Profiles_On_Conflict>;
};

/** aggregate avg on columns */
export type Player_Profiles_Avg_Fields = {
  __typename?: 'player_profiles_avg_fields';
  experience?: Maybe<Scalars['Float']['output']>;
  gold?: Maybe<Scalars['Float']['output']>;
  health?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  max_health?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "player_profiles" */
export type Player_Profiles_Avg_Order_By = {
  experience?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  max_health?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "player_profiles". All fields are combined with a logical 'AND'. */
export type Player_Profiles_Bool_Exp = {
  _and?: InputMaybe<Array<Player_Profiles_Bool_Exp>>;
  _not?: InputMaybe<Player_Profiles_Bool_Exp>;
  _or?: InputMaybe<Array<Player_Profiles_Bool_Exp>>;
  experience?: InputMaybe<Int_Comparison_Exp>;
  gold?: InputMaybe<Int_Comparison_Exp>;
  health?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  level?: InputMaybe<Int_Comparison_Exp>;
  location_id?: InputMaybe<Uuid_Comparison_Exp>;
  max_health?: InputMaybe<Int_Comparison_Exp>;
  player_combat_logs?: InputMaybe<Player_Combat_Logs_Bool_Exp>;
  player_combat_logs_aggregate?: InputMaybe<Player_Combat_Logs_Aggregate_Bool_Exp>;
  player_items?: InputMaybe<Player_Items_Bool_Exp>;
  player_items_aggregate?: InputMaybe<Player_Items_Aggregate_Bool_Exp>;
  player_quests?: InputMaybe<Player_Quests_Bool_Exp>;
  player_quests_aggregate?: InputMaybe<Player_Quests_Aggregate_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "player_profiles" */
export enum Player_Profiles_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlayerProfilesPkey = 'player_profiles_pkey'
}

/** input type for incrementing numeric columns in table "player_profiles" */
export type Player_Profiles_Inc_Input = {
  experience?: InputMaybe<Scalars['Int']['input']>;
  gold?: InputMaybe<Scalars['Int']['input']>;
  health?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  max_health?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "player_profiles" */
export type Player_Profiles_Insert_Input = {
  experience?: InputMaybe<Scalars['Int']['input']>;
  gold?: InputMaybe<Scalars['Int']['input']>;
  health?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  location_id?: InputMaybe<Scalars['uuid']['input']>;
  max_health?: InputMaybe<Scalars['Int']['input']>;
  player_combat_logs?: InputMaybe<Player_Combat_Logs_Arr_Rel_Insert_Input>;
  player_items?: InputMaybe<Player_Items_Arr_Rel_Insert_Input>;
  player_quests?: InputMaybe<Player_Quests_Arr_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Player_Profiles_Max_Fields = {
  __typename?: 'player_profiles_max_fields';
  experience?: Maybe<Scalars['Int']['output']>;
  gold?: Maybe<Scalars['Int']['output']>;
  health?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  location_id?: Maybe<Scalars['uuid']['output']>;
  max_health?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "player_profiles" */
export type Player_Profiles_Max_Order_By = {
  experience?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  max_health?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Player_Profiles_Min_Fields = {
  __typename?: 'player_profiles_min_fields';
  experience?: Maybe<Scalars['Int']['output']>;
  gold?: Maybe<Scalars['Int']['output']>;
  health?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  location_id?: Maybe<Scalars['uuid']['output']>;
  max_health?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "player_profiles" */
export type Player_Profiles_Min_Order_By = {
  experience?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  max_health?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "player_profiles" */
export type Player_Profiles_Mutation_Response = {
  __typename?: 'player_profiles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Player_Profiles>;
};

/** input type for inserting object relation for remote table "player_profiles" */
export type Player_Profiles_Obj_Rel_Insert_Input = {
  data: Player_Profiles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Player_Profiles_On_Conflict>;
};

/** on_conflict condition type for table "player_profiles" */
export type Player_Profiles_On_Conflict = {
  constraint: Player_Profiles_Constraint;
  update_columns?: Array<Player_Profiles_Update_Column>;
  where?: InputMaybe<Player_Profiles_Bool_Exp>;
};

/** Ordering options when selecting data from "player_profiles". */
export type Player_Profiles_Order_By = {
  experience?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  max_health?: InputMaybe<Order_By>;
  player_combat_logs_aggregate?: InputMaybe<Player_Combat_Logs_Aggregate_Order_By>;
  player_items_aggregate?: InputMaybe<Player_Items_Aggregate_Order_By>;
  player_quests_aggregate?: InputMaybe<Player_Quests_Aggregate_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: player_profiles */
export type Player_Profiles_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "player_profiles" */
export enum Player_Profiles_Select_Column {
  /** column name */
  Experience = 'experience',
  /** column name */
  Gold = 'gold',
  /** column name */
  Health = 'health',
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  MaxHealth = 'max_health',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "player_profiles" */
export type Player_Profiles_Set_Input = {
  experience?: InputMaybe<Scalars['Int']['input']>;
  gold?: InputMaybe<Scalars['Int']['input']>;
  health?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  location_id?: InputMaybe<Scalars['uuid']['input']>;
  max_health?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Player_Profiles_Stddev_Fields = {
  __typename?: 'player_profiles_stddev_fields';
  experience?: Maybe<Scalars['Float']['output']>;
  gold?: Maybe<Scalars['Float']['output']>;
  health?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  max_health?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "player_profiles" */
export type Player_Profiles_Stddev_Order_By = {
  experience?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  max_health?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Player_Profiles_Stddev_Pop_Fields = {
  __typename?: 'player_profiles_stddev_pop_fields';
  experience?: Maybe<Scalars['Float']['output']>;
  gold?: Maybe<Scalars['Float']['output']>;
  health?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  max_health?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "player_profiles" */
export type Player_Profiles_Stddev_Pop_Order_By = {
  experience?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  max_health?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Player_Profiles_Stddev_Samp_Fields = {
  __typename?: 'player_profiles_stddev_samp_fields';
  experience?: Maybe<Scalars['Float']['output']>;
  gold?: Maybe<Scalars['Float']['output']>;
  health?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  max_health?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "player_profiles" */
export type Player_Profiles_Stddev_Samp_Order_By = {
  experience?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  max_health?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "player_profiles" */
export type Player_Profiles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Player_Profiles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Player_Profiles_Stream_Cursor_Value_Input = {
  experience?: InputMaybe<Scalars['Int']['input']>;
  gold?: InputMaybe<Scalars['Int']['input']>;
  health?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  location_id?: InputMaybe<Scalars['uuid']['input']>;
  max_health?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Player_Profiles_Sum_Fields = {
  __typename?: 'player_profiles_sum_fields';
  experience?: Maybe<Scalars['Int']['output']>;
  gold?: Maybe<Scalars['Int']['output']>;
  health?: Maybe<Scalars['Int']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  max_health?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "player_profiles" */
export type Player_Profiles_Sum_Order_By = {
  experience?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  max_health?: InputMaybe<Order_By>;
};

/** update columns of table "player_profiles" */
export enum Player_Profiles_Update_Column {
  /** column name */
  Experience = 'experience',
  /** column name */
  Gold = 'gold',
  /** column name */
  Health = 'health',
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  MaxHealth = 'max_health',
  /** column name */
  UserId = 'user_id'
}

export type Player_Profiles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Player_Profiles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Player_Profiles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Player_Profiles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Player_Profiles_Var_Pop_Fields = {
  __typename?: 'player_profiles_var_pop_fields';
  experience?: Maybe<Scalars['Float']['output']>;
  gold?: Maybe<Scalars['Float']['output']>;
  health?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  max_health?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "player_profiles" */
export type Player_Profiles_Var_Pop_Order_By = {
  experience?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  max_health?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Player_Profiles_Var_Samp_Fields = {
  __typename?: 'player_profiles_var_samp_fields';
  experience?: Maybe<Scalars['Float']['output']>;
  gold?: Maybe<Scalars['Float']['output']>;
  health?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  max_health?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "player_profiles" */
export type Player_Profiles_Var_Samp_Order_By = {
  experience?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  max_health?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Player_Profiles_Variance_Fields = {
  __typename?: 'player_profiles_variance_fields';
  experience?: Maybe<Scalars['Float']['output']>;
  gold?: Maybe<Scalars['Float']['output']>;
  health?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  max_health?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "player_profiles" */
export type Player_Profiles_Variance_Order_By = {
  experience?: InputMaybe<Order_By>;
  gold?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  max_health?: InputMaybe<Order_By>;
};

/** columns and relationships of "player_quests" */
export type Player_Quests = {
  __typename?: 'player_quests';
  id: Scalars['uuid']['output'];
  player_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  player_profile?: Maybe<Player_Profiles>;
  progress?: Maybe<Scalars['json']['output']>;
  /** An object relationship */
  quest?: Maybe<Quests>;
  quest_id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "player_quests" */
export type Player_QuestsProgressArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "player_quests" */
export type Player_Quests_Aggregate = {
  __typename?: 'player_quests_aggregate';
  aggregate?: Maybe<Player_Quests_Aggregate_Fields>;
  nodes: Array<Player_Quests>;
};

export type Player_Quests_Aggregate_Bool_Exp = {
  count?: InputMaybe<Player_Quests_Aggregate_Bool_Exp_Count>;
};

export type Player_Quests_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Player_Quests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Player_Quests_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "player_quests" */
export type Player_Quests_Aggregate_Fields = {
  __typename?: 'player_quests_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Player_Quests_Max_Fields>;
  min?: Maybe<Player_Quests_Min_Fields>;
};


/** aggregate fields of "player_quests" */
export type Player_Quests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Player_Quests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "player_quests" */
export type Player_Quests_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Player_Quests_Max_Order_By>;
  min?: InputMaybe<Player_Quests_Min_Order_By>;
};

/** input type for inserting array relation for remote table "player_quests" */
export type Player_Quests_Arr_Rel_Insert_Input = {
  data: Array<Player_Quests_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Player_Quests_On_Conflict>;
};

/** Boolean expression to filter rows from the table "player_quests". All fields are combined with a logical 'AND'. */
export type Player_Quests_Bool_Exp = {
  _and?: InputMaybe<Array<Player_Quests_Bool_Exp>>;
  _not?: InputMaybe<Player_Quests_Bool_Exp>;
  _or?: InputMaybe<Array<Player_Quests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  player_id?: InputMaybe<Uuid_Comparison_Exp>;
  player_profile?: InputMaybe<Player_Profiles_Bool_Exp>;
  progress?: InputMaybe<Json_Comparison_Exp>;
  quest?: InputMaybe<Quests_Bool_Exp>;
  quest_id?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "player_quests" */
export enum Player_Quests_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlayerQuestsPkey = 'player_quests_pkey'
}

/** input type for inserting data into table "player_quests" */
export type Player_Quests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  player_id?: InputMaybe<Scalars['uuid']['input']>;
  player_profile?: InputMaybe<Player_Profiles_Obj_Rel_Insert_Input>;
  progress?: InputMaybe<Scalars['json']['input']>;
  quest?: InputMaybe<Quests_Obj_Rel_Insert_Input>;
  quest_id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Player_Quests_Max_Fields = {
  __typename?: 'player_quests_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  player_id?: Maybe<Scalars['uuid']['output']>;
  quest_id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "player_quests" */
export type Player_Quests_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  quest_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Player_Quests_Min_Fields = {
  __typename?: 'player_quests_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  player_id?: Maybe<Scalars['uuid']['output']>;
  quest_id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "player_quests" */
export type Player_Quests_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  quest_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "player_quests" */
export type Player_Quests_Mutation_Response = {
  __typename?: 'player_quests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Player_Quests>;
};

/** on_conflict condition type for table "player_quests" */
export type Player_Quests_On_Conflict = {
  constraint: Player_Quests_Constraint;
  update_columns?: Array<Player_Quests_Update_Column>;
  where?: InputMaybe<Player_Quests_Bool_Exp>;
};

/** Ordering options when selecting data from "player_quests". */
export type Player_Quests_Order_By = {
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  player_profile?: InputMaybe<Player_Profiles_Order_By>;
  progress?: InputMaybe<Order_By>;
  quest?: InputMaybe<Quests_Order_By>;
  quest_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: player_quests */
export type Player_Quests_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "player_quests" */
export enum Player_Quests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  Progress = 'progress',
  /** column name */
  QuestId = 'quest_id',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "player_quests" */
export type Player_Quests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  player_id?: InputMaybe<Scalars['uuid']['input']>;
  progress?: InputMaybe<Scalars['json']['input']>;
  quest_id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "player_quests" */
export type Player_Quests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Player_Quests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Player_Quests_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  player_id?: InputMaybe<Scalars['uuid']['input']>;
  progress?: InputMaybe<Scalars['json']['input']>;
  quest_id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "player_quests" */
export enum Player_Quests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  Progress = 'progress',
  /** column name */
  QuestId = 'quest_id',
  /** column name */
  Status = 'status'
}

export type Player_Quests_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Player_Quests_Set_Input>;
  /** filter the rows which have to be updated */
  where: Player_Quests_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "enemies" */
  enemies: Array<Enemies>;
  /** fetch aggregated fields from the table: "enemies" */
  enemies_aggregate: Enemies_Aggregate;
  /** fetch data from the table: "enemies" using primary key columns */
  enemies_by_pk?: Maybe<Enemies>;
  /** fetch data from the table: "items" */
  items: Array<Items>;
  /** fetch aggregated fields from the table: "items" */
  items_aggregate: Items_Aggregate;
  /** fetch data from the table: "items" using primary key columns */
  items_by_pk?: Maybe<Items>;
  /** fetch data from the table: "maps" */
  maps: Array<Maps>;
  /** fetch aggregated fields from the table: "maps" */
  maps_aggregate: Maps_Aggregate;
  /** fetch data from the table: "maps" using primary key columns */
  maps_by_pk?: Maybe<Maps>;
  /** An array relationship */
  player_combat_logs: Array<Player_Combat_Logs>;
  /** An aggregate relationship */
  player_combat_logs_aggregate: Player_Combat_Logs_Aggregate;
  /** fetch data from the table: "player_combat_logs" using primary key columns */
  player_combat_logs_by_pk?: Maybe<Player_Combat_Logs>;
  /** An array relationship */
  player_items: Array<Player_Items>;
  /** An aggregate relationship */
  player_items_aggregate: Player_Items_Aggregate;
  /** fetch data from the table: "player_items" using primary key columns */
  player_items_by_pk?: Maybe<Player_Items>;
  /** An array relationship */
  player_profiles: Array<Player_Profiles>;
  /** An aggregate relationship */
  player_profiles_aggregate: Player_Profiles_Aggregate;
  /** fetch data from the table: "player_profiles" using primary key columns */
  player_profiles_by_pk?: Maybe<Player_Profiles>;
  /** An array relationship */
  player_quests: Array<Player_Quests>;
  /** An aggregate relationship */
  player_quests_aggregate: Player_Quests_Aggregate;
  /** fetch data from the table: "player_quests" using primary key columns */
  player_quests_by_pk?: Maybe<Player_Quests>;
  /** fetch data from the table: "quests" */
  quests: Array<Quests>;
  /** fetch aggregated fields from the table: "quests" */
  quests_aggregate: Quests_Aggregate;
  /** fetch data from the table: "quests" using primary key columns */
  quests_by_pk?: Maybe<Quests>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootEnemiesArgs = {
  distinct_on?: InputMaybe<Array<Enemies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Enemies_Order_By>>;
  where?: InputMaybe<Enemies_Bool_Exp>;
};


export type Query_RootEnemies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Enemies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Enemies_Order_By>>;
  where?: InputMaybe<Enemies_Bool_Exp>;
};


export type Query_RootEnemies_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootItemsArgs = {
  distinct_on?: InputMaybe<Array<Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Items_Order_By>>;
  where?: InputMaybe<Items_Bool_Exp>;
};


export type Query_RootItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Items_Order_By>>;
  where?: InputMaybe<Items_Bool_Exp>;
};


export type Query_RootItems_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMapsArgs = {
  distinct_on?: InputMaybe<Array<Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Maps_Order_By>>;
  where?: InputMaybe<Maps_Bool_Exp>;
};


export type Query_RootMaps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Maps_Order_By>>;
  where?: InputMaybe<Maps_Bool_Exp>;
};


export type Query_RootMaps_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPlayer_Combat_LogsArgs = {
  distinct_on?: InputMaybe<Array<Player_Combat_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Combat_Logs_Order_By>>;
  where?: InputMaybe<Player_Combat_Logs_Bool_Exp>;
};


export type Query_RootPlayer_Combat_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Combat_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Combat_Logs_Order_By>>;
  where?: InputMaybe<Player_Combat_Logs_Bool_Exp>;
};


export type Query_RootPlayer_Combat_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPlayer_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Player_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Items_Order_By>>;
  where?: InputMaybe<Player_Items_Bool_Exp>;
};


export type Query_RootPlayer_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Items_Order_By>>;
  where?: InputMaybe<Player_Items_Bool_Exp>;
};


export type Query_RootPlayer_Items_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPlayer_ProfilesArgs = {
  distinct_on?: InputMaybe<Array<Player_Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Profiles_Order_By>>;
  where?: InputMaybe<Player_Profiles_Bool_Exp>;
};


export type Query_RootPlayer_Profiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Profiles_Order_By>>;
  where?: InputMaybe<Player_Profiles_Bool_Exp>;
};


export type Query_RootPlayer_Profiles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPlayer_QuestsArgs = {
  distinct_on?: InputMaybe<Array<Player_Quests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Quests_Order_By>>;
  where?: InputMaybe<Player_Quests_Bool_Exp>;
};


export type Query_RootPlayer_Quests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Quests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Quests_Order_By>>;
  where?: InputMaybe<Player_Quests_Bool_Exp>;
};


export type Query_RootPlayer_Quests_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootQuestsArgs = {
  distinct_on?: InputMaybe<Array<Quests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Quests_Order_By>>;
  where?: InputMaybe<Quests_Bool_Exp>;
};


export type Query_RootQuests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Quests_Order_By>>;
  where?: InputMaybe<Quests_Bool_Exp>;
};


export type Query_RootQuests_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "quests" */
export type Quests = {
  __typename?: 'quests';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  player_quests: Array<Player_Quests>;
  /** An aggregate relationship */
  player_quests_aggregate: Player_Quests_Aggregate;
  requirements?: Maybe<Scalars['json']['output']>;
  reward?: Maybe<Scalars['json']['output']>;
};


/** columns and relationships of "quests" */
export type QuestsPlayer_QuestsArgs = {
  distinct_on?: InputMaybe<Array<Player_Quests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Quests_Order_By>>;
  where?: InputMaybe<Player_Quests_Bool_Exp>;
};


/** columns and relationships of "quests" */
export type QuestsPlayer_Quests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Quests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Quests_Order_By>>;
  where?: InputMaybe<Player_Quests_Bool_Exp>;
};


/** columns and relationships of "quests" */
export type QuestsRequirementsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "quests" */
export type QuestsRewardArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "quests" */
export type Quests_Aggregate = {
  __typename?: 'quests_aggregate';
  aggregate?: Maybe<Quests_Aggregate_Fields>;
  nodes: Array<Quests>;
};

/** aggregate fields of "quests" */
export type Quests_Aggregate_Fields = {
  __typename?: 'quests_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Quests_Max_Fields>;
  min?: Maybe<Quests_Min_Fields>;
};


/** aggregate fields of "quests" */
export type Quests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Quests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "quests". All fields are combined with a logical 'AND'. */
export type Quests_Bool_Exp = {
  _and?: InputMaybe<Array<Quests_Bool_Exp>>;
  _not?: InputMaybe<Quests_Bool_Exp>;
  _or?: InputMaybe<Array<Quests_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  player_quests?: InputMaybe<Player_Quests_Bool_Exp>;
  player_quests_aggregate?: InputMaybe<Player_Quests_Aggregate_Bool_Exp>;
  requirements?: InputMaybe<Json_Comparison_Exp>;
  reward?: InputMaybe<Json_Comparison_Exp>;
};

/** unique or primary key constraints on table "quests" */
export enum Quests_Constraint {
  /** unique or primary key constraint on columns "id" */
  QuestsPkey = 'quests_pkey'
}

/** input type for inserting data into table "quests" */
export type Quests_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  player_quests?: InputMaybe<Player_Quests_Arr_Rel_Insert_Input>;
  requirements?: InputMaybe<Scalars['json']['input']>;
  reward?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate max on columns */
export type Quests_Max_Fields = {
  __typename?: 'quests_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Quests_Min_Fields = {
  __typename?: 'quests_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "quests" */
export type Quests_Mutation_Response = {
  __typename?: 'quests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Quests>;
};

/** input type for inserting object relation for remote table "quests" */
export type Quests_Obj_Rel_Insert_Input = {
  data: Quests_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Quests_On_Conflict>;
};

/** on_conflict condition type for table "quests" */
export type Quests_On_Conflict = {
  constraint: Quests_Constraint;
  update_columns?: Array<Quests_Update_Column>;
  where?: InputMaybe<Quests_Bool_Exp>;
};

/** Ordering options when selecting data from "quests". */
export type Quests_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  player_quests_aggregate?: InputMaybe<Player_Quests_Aggregate_Order_By>;
  requirements?: InputMaybe<Order_By>;
  reward?: InputMaybe<Order_By>;
};

/** primary key columns input for table: quests */
export type Quests_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "quests" */
export enum Quests_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Requirements = 'requirements',
  /** column name */
  Reward = 'reward'
}

/** input type for updating data in table "quests" */
export type Quests_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  requirements?: InputMaybe<Scalars['json']['input']>;
  reward?: InputMaybe<Scalars['json']['input']>;
};

/** Streaming cursor of the table "quests" */
export type Quests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Quests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Quests_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  requirements?: InputMaybe<Scalars['json']['input']>;
  reward?: InputMaybe<Scalars['json']['input']>;
};

/** update columns of table "quests" */
export enum Quests_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Requirements = 'requirements',
  /** column name */
  Reward = 'reward'
}

export type Quests_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Quests_Set_Input>;
  /** filter the rows which have to be updated */
  where: Quests_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "enemies" */
  enemies: Array<Enemies>;
  /** fetch aggregated fields from the table: "enemies" */
  enemies_aggregate: Enemies_Aggregate;
  /** fetch data from the table: "enemies" using primary key columns */
  enemies_by_pk?: Maybe<Enemies>;
  /** fetch data from the table in a streaming manner: "enemies" */
  enemies_stream: Array<Enemies>;
  /** fetch data from the table: "items" */
  items: Array<Items>;
  /** fetch aggregated fields from the table: "items" */
  items_aggregate: Items_Aggregate;
  /** fetch data from the table: "items" using primary key columns */
  items_by_pk?: Maybe<Items>;
  /** fetch data from the table in a streaming manner: "items" */
  items_stream: Array<Items>;
  /** fetch data from the table: "maps" */
  maps: Array<Maps>;
  /** fetch aggregated fields from the table: "maps" */
  maps_aggregate: Maps_Aggregate;
  /** fetch data from the table: "maps" using primary key columns */
  maps_by_pk?: Maybe<Maps>;
  /** fetch data from the table in a streaming manner: "maps" */
  maps_stream: Array<Maps>;
  /** An array relationship */
  player_combat_logs: Array<Player_Combat_Logs>;
  /** An aggregate relationship */
  player_combat_logs_aggregate: Player_Combat_Logs_Aggregate;
  /** fetch data from the table: "player_combat_logs" using primary key columns */
  player_combat_logs_by_pk?: Maybe<Player_Combat_Logs>;
  /** fetch data from the table in a streaming manner: "player_combat_logs" */
  player_combat_logs_stream: Array<Player_Combat_Logs>;
  /** An array relationship */
  player_items: Array<Player_Items>;
  /** An aggregate relationship */
  player_items_aggregate: Player_Items_Aggregate;
  /** fetch data from the table: "player_items" using primary key columns */
  player_items_by_pk?: Maybe<Player_Items>;
  /** fetch data from the table in a streaming manner: "player_items" */
  player_items_stream: Array<Player_Items>;
  /** An array relationship */
  player_profiles: Array<Player_Profiles>;
  /** An aggregate relationship */
  player_profiles_aggregate: Player_Profiles_Aggregate;
  /** fetch data from the table: "player_profiles" using primary key columns */
  player_profiles_by_pk?: Maybe<Player_Profiles>;
  /** fetch data from the table in a streaming manner: "player_profiles" */
  player_profiles_stream: Array<Player_Profiles>;
  /** An array relationship */
  player_quests: Array<Player_Quests>;
  /** An aggregate relationship */
  player_quests_aggregate: Player_Quests_Aggregate;
  /** fetch data from the table: "player_quests" using primary key columns */
  player_quests_by_pk?: Maybe<Player_Quests>;
  /** fetch data from the table in a streaming manner: "player_quests" */
  player_quests_stream: Array<Player_Quests>;
  /** fetch data from the table: "quests" */
  quests: Array<Quests>;
  /** fetch aggregated fields from the table: "quests" */
  quests_aggregate: Quests_Aggregate;
  /** fetch data from the table: "quests" using primary key columns */
  quests_by_pk?: Maybe<Quests>;
  /** fetch data from the table in a streaming manner: "quests" */
  quests_stream: Array<Quests>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootEnemiesArgs = {
  distinct_on?: InputMaybe<Array<Enemies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Enemies_Order_By>>;
  where?: InputMaybe<Enemies_Bool_Exp>;
};


export type Subscription_RootEnemies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Enemies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Enemies_Order_By>>;
  where?: InputMaybe<Enemies_Bool_Exp>;
};


export type Subscription_RootEnemies_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootEnemies_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Enemies_Stream_Cursor_Input>>;
  where?: InputMaybe<Enemies_Bool_Exp>;
};


export type Subscription_RootItemsArgs = {
  distinct_on?: InputMaybe<Array<Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Items_Order_By>>;
  where?: InputMaybe<Items_Bool_Exp>;
};


export type Subscription_RootItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Items_Order_By>>;
  where?: InputMaybe<Items_Bool_Exp>;
};


export type Subscription_RootItems_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootItems_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Items_Stream_Cursor_Input>>;
  where?: InputMaybe<Items_Bool_Exp>;
};


export type Subscription_RootMapsArgs = {
  distinct_on?: InputMaybe<Array<Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Maps_Order_By>>;
  where?: InputMaybe<Maps_Bool_Exp>;
};


export type Subscription_RootMaps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Maps_Order_By>>;
  where?: InputMaybe<Maps_Bool_Exp>;
};


export type Subscription_RootMaps_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMaps_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Maps_Stream_Cursor_Input>>;
  where?: InputMaybe<Maps_Bool_Exp>;
};


export type Subscription_RootPlayer_Combat_LogsArgs = {
  distinct_on?: InputMaybe<Array<Player_Combat_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Combat_Logs_Order_By>>;
  where?: InputMaybe<Player_Combat_Logs_Bool_Exp>;
};


export type Subscription_RootPlayer_Combat_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Combat_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Combat_Logs_Order_By>>;
  where?: InputMaybe<Player_Combat_Logs_Bool_Exp>;
};


export type Subscription_RootPlayer_Combat_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPlayer_Combat_Logs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Player_Combat_Logs_Stream_Cursor_Input>>;
  where?: InputMaybe<Player_Combat_Logs_Bool_Exp>;
};


export type Subscription_RootPlayer_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Player_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Items_Order_By>>;
  where?: InputMaybe<Player_Items_Bool_Exp>;
};


export type Subscription_RootPlayer_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Items_Order_By>>;
  where?: InputMaybe<Player_Items_Bool_Exp>;
};


export type Subscription_RootPlayer_Items_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPlayer_Items_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Player_Items_Stream_Cursor_Input>>;
  where?: InputMaybe<Player_Items_Bool_Exp>;
};


export type Subscription_RootPlayer_ProfilesArgs = {
  distinct_on?: InputMaybe<Array<Player_Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Profiles_Order_By>>;
  where?: InputMaybe<Player_Profiles_Bool_Exp>;
};


export type Subscription_RootPlayer_Profiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Profiles_Order_By>>;
  where?: InputMaybe<Player_Profiles_Bool_Exp>;
};


export type Subscription_RootPlayer_Profiles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPlayer_Profiles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Player_Profiles_Stream_Cursor_Input>>;
  where?: InputMaybe<Player_Profiles_Bool_Exp>;
};


export type Subscription_RootPlayer_QuestsArgs = {
  distinct_on?: InputMaybe<Array<Player_Quests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Quests_Order_By>>;
  where?: InputMaybe<Player_Quests_Bool_Exp>;
};


export type Subscription_RootPlayer_Quests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Quests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Quests_Order_By>>;
  where?: InputMaybe<Player_Quests_Bool_Exp>;
};


export type Subscription_RootPlayer_Quests_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPlayer_Quests_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Player_Quests_Stream_Cursor_Input>>;
  where?: InputMaybe<Player_Quests_Bool_Exp>;
};


export type Subscription_RootQuestsArgs = {
  distinct_on?: InputMaybe<Array<Quests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Quests_Order_By>>;
  where?: InputMaybe<Quests_Bool_Exp>;
};


export type Subscription_RootQuests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Quests_Order_By>>;
  where?: InputMaybe<Quests_Bool_Exp>;
};


export type Subscription_RootQuests_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootQuests_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Quests_Stream_Cursor_Input>>;
  where?: InputMaybe<Quests_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  password: Scalars['String']['output'];
  /** An array relationship */
  player_profiles: Array<Player_Profiles>;
  /** An aggregate relationship */
  player_profiles_aggregate: Player_Profiles_Aggregate;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  username: Scalars['String']['output'];
};


/** columns and relationships of "users" */
export type UsersPlayer_ProfilesArgs = {
  distinct_on?: InputMaybe<Array<Player_Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Profiles_Order_By>>;
  where?: InputMaybe<Player_Profiles_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPlayer_Profiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Profiles_Order_By>>;
  where?: InputMaybe<Player_Profiles_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  player_profiles?: InputMaybe<Player_Profiles_Bool_Exp>;
  player_profiles_aggregate?: InputMaybe<Player_Profiles_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "username" */
  UsersUsernameKey = 'users_username_key'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  player_profiles?: InputMaybe<Player_Profiles_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  player_profiles_aggregate?: InputMaybe<Player_Profiles_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetUsersQueryVariables = Exact<{
  where?: InputMaybe<Users_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', username: string, updated_at?: string | null, password: string, id: string, email?: string | null, created_at?: string | null }> };

export type InsertUserMutationVariables = Exact<{
  object?: InputMaybe<Users_Insert_Input>;
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', username: string, updated_at?: string | null, password: string, id: string, email?: string | null, created_at?: string | null } | null };


export const GetUsersDocument = gql`
    query GetUsers($where: users_bool_exp = {}, $limit: Int = 10) {
  users(where: $where, limit: $limit) {
    username
    updated_at
    password
    id
    email
    created_at
  }
}
    `;
export const InsertUserDocument = gql`
    mutation InsertUser($object: users_insert_input = {}) {
  insert_users_one(object: $object) {
    username
    updated_at
    password
    id
    email
    created_at
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetUsers(variables?: GetUsersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsersQuery>(GetUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUsers', 'query');
    },
    InsertUser(variables?: InsertUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertUserMutation>(InsertUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'InsertUser', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;