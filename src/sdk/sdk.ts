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
  application_status: { input: any; output: any; }
  date: { input: string; output: string; }
  jsonb: { input: Record<string, any>; output: Record<string, any>; }
  numeric: { input: number; output: number; }
  position_level: { input: any; output: any; }
  position_type: { input: any; output: any; }
  timestamptz: { input: string; output: string; }
  uuid: { input: string; output: string; }
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
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
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

/** Boolean expression to compare columns of type "application_status". All fields are combined with logical 'AND'. */
export type Application_Status_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['application_status']['input']>;
  _gt?: InputMaybe<Scalars['application_status']['input']>;
  _gte?: InputMaybe<Scalars['application_status']['input']>;
  _in?: InputMaybe<Array<Scalars['application_status']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['application_status']['input']>;
  _lte?: InputMaybe<Scalars['application_status']['input']>;
  _neq?: InputMaybe<Scalars['application_status']['input']>;
  _nin?: InputMaybe<Array<Scalars['application_status']['input']>>;
};

/** columns and relationships of "candidates" */
export type Candidates = {
  __typename?: 'candidates';
  address?: Maybe<Scalars['String']['output']>;
  application_date?: Maybe<Scalars['timestamptz']['output']>;
  birth_date?: Maybe<Scalars['date']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  databases?: Maybe<Array<Scalars['String']['output']>>;
  email: Scalars['String']['output'];
  frameworks?: Maybe<Array<Scalars['String']['output']>>;
  full_name: Scalars['String']['output'];
  github_url?: Maybe<Scalars['String']['output']>;
  graduation_year?: Maybe<Scalars['Int']['output']>;
  id: Scalars['uuid']['output'];
  linkedin_url?: Maybe<Scalars['String']['output']>;
  major?: Maybe<Scalars['String']['output']>;
  other_skills?: Maybe<Array<Scalars['String']['output']>>;
  personal_projects?: Maybe<Scalars['jsonb']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  position_level: Scalars['position_level']['output'];
  position_type: Scalars['position_type']['output'];
  programming_languages?: Maybe<Array<Scalars['String']['output']>>;
  status?: Maybe<Scalars['application_status']['output']>;
  university?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  work_history?: Maybe<Scalars['jsonb']['output']>;
  years_of_experience?: Maybe<Scalars['numeric']['output']>;
};


/** columns and relationships of "candidates" */
export type CandidatesPersonal_ProjectsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "candidates" */
export type CandidatesWork_HistoryArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "candidates" */
export type Candidates_Aggregate = {
  __typename?: 'candidates_aggregate';
  aggregate?: Maybe<Candidates_Aggregate_Fields>;
  nodes: Array<Candidates>;
};

/** aggregate fields of "candidates" */
export type Candidates_Aggregate_Fields = {
  __typename?: 'candidates_aggregate_fields';
  avg?: Maybe<Candidates_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Candidates_Max_Fields>;
  min?: Maybe<Candidates_Min_Fields>;
  stddev?: Maybe<Candidates_Stddev_Fields>;
  stddev_pop?: Maybe<Candidates_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Candidates_Stddev_Samp_Fields>;
  sum?: Maybe<Candidates_Sum_Fields>;
  var_pop?: Maybe<Candidates_Var_Pop_Fields>;
  var_samp?: Maybe<Candidates_Var_Samp_Fields>;
  variance?: Maybe<Candidates_Variance_Fields>;
};


/** aggregate fields of "candidates" */
export type Candidates_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Candidates_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Candidates_Append_Input = {
  personal_projects?: InputMaybe<Scalars['jsonb']['input']>;
  work_history?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Candidates_Avg_Fields = {
  __typename?: 'candidates_avg_fields';
  graduation_year?: Maybe<Scalars['Float']['output']>;
  years_of_experience?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "candidates". All fields are combined with a logical 'AND'. */
export type Candidates_Bool_Exp = {
  _and?: InputMaybe<Array<Candidates_Bool_Exp>>;
  _not?: InputMaybe<Candidates_Bool_Exp>;
  _or?: InputMaybe<Array<Candidates_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  application_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  birth_date?: InputMaybe<Date_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  databases?: InputMaybe<String_Array_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  frameworks?: InputMaybe<String_Array_Comparison_Exp>;
  full_name?: InputMaybe<String_Comparison_Exp>;
  github_url?: InputMaybe<String_Comparison_Exp>;
  graduation_year?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  linkedin_url?: InputMaybe<String_Comparison_Exp>;
  major?: InputMaybe<String_Comparison_Exp>;
  other_skills?: InputMaybe<String_Array_Comparison_Exp>;
  personal_projects?: InputMaybe<Jsonb_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  position_level?: InputMaybe<Position_Level_Comparison_Exp>;
  position_type?: InputMaybe<Position_Type_Comparison_Exp>;
  programming_languages?: InputMaybe<String_Array_Comparison_Exp>;
  status?: InputMaybe<Application_Status_Comparison_Exp>;
  university?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  work_history?: InputMaybe<Jsonb_Comparison_Exp>;
  years_of_experience?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "candidates" */
export enum Candidates_Constraint {
  /** unique or primary key constraint on columns "email" */
  CandidatesEmailKey = 'candidates_email_key',
  /** unique or primary key constraint on columns "id" */
  CandidatesPkey = 'candidates_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Candidates_Delete_At_Path_Input = {
  personal_projects?: InputMaybe<Array<Scalars['String']['input']>>;
  work_history?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Candidates_Delete_Elem_Input = {
  personal_projects?: InputMaybe<Scalars['Int']['input']>;
  work_history?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Candidates_Delete_Key_Input = {
  personal_projects?: InputMaybe<Scalars['String']['input']>;
  work_history?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "candidates" */
export type Candidates_Inc_Input = {
  graduation_year?: InputMaybe<Scalars['Int']['input']>;
  years_of_experience?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "candidates" */
export type Candidates_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  application_date?: InputMaybe<Scalars['timestamptz']['input']>;
  birth_date?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  databases?: InputMaybe<Array<Scalars['String']['input']>>;
  email?: InputMaybe<Scalars['String']['input']>;
  frameworks?: InputMaybe<Array<Scalars['String']['input']>>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  github_url?: InputMaybe<Scalars['String']['input']>;
  graduation_year?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  linkedin_url?: InputMaybe<Scalars['String']['input']>;
  major?: InputMaybe<Scalars['String']['input']>;
  other_skills?: InputMaybe<Array<Scalars['String']['input']>>;
  personal_projects?: InputMaybe<Scalars['jsonb']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  position_level?: InputMaybe<Scalars['position_level']['input']>;
  position_type?: InputMaybe<Scalars['position_type']['input']>;
  programming_languages?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Scalars['application_status']['input']>;
  university?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  work_history?: InputMaybe<Scalars['jsonb']['input']>;
  years_of_experience?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Candidates_Max_Fields = {
  __typename?: 'candidates_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  application_date?: Maybe<Scalars['timestamptz']['output']>;
  birth_date?: Maybe<Scalars['date']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  databases?: Maybe<Array<Scalars['String']['output']>>;
  email?: Maybe<Scalars['String']['output']>;
  frameworks?: Maybe<Array<Scalars['String']['output']>>;
  full_name?: Maybe<Scalars['String']['output']>;
  github_url?: Maybe<Scalars['String']['output']>;
  graduation_year?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  linkedin_url?: Maybe<Scalars['String']['output']>;
  major?: Maybe<Scalars['String']['output']>;
  other_skills?: Maybe<Array<Scalars['String']['output']>>;
  phone?: Maybe<Scalars['String']['output']>;
  position_level?: Maybe<Scalars['position_level']['output']>;
  position_type?: Maybe<Scalars['position_type']['output']>;
  programming_languages?: Maybe<Array<Scalars['String']['output']>>;
  status?: Maybe<Scalars['application_status']['output']>;
  university?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  years_of_experience?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Candidates_Min_Fields = {
  __typename?: 'candidates_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  application_date?: Maybe<Scalars['timestamptz']['output']>;
  birth_date?: Maybe<Scalars['date']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  databases?: Maybe<Array<Scalars['String']['output']>>;
  email?: Maybe<Scalars['String']['output']>;
  frameworks?: Maybe<Array<Scalars['String']['output']>>;
  full_name?: Maybe<Scalars['String']['output']>;
  github_url?: Maybe<Scalars['String']['output']>;
  graduation_year?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  linkedin_url?: Maybe<Scalars['String']['output']>;
  major?: Maybe<Scalars['String']['output']>;
  other_skills?: Maybe<Array<Scalars['String']['output']>>;
  phone?: Maybe<Scalars['String']['output']>;
  position_level?: Maybe<Scalars['position_level']['output']>;
  position_type?: Maybe<Scalars['position_type']['output']>;
  programming_languages?: Maybe<Array<Scalars['String']['output']>>;
  status?: Maybe<Scalars['application_status']['output']>;
  university?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  years_of_experience?: Maybe<Scalars['numeric']['output']>;
};

/** response of any mutation on the table "candidates" */
export type Candidates_Mutation_Response = {
  __typename?: 'candidates_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Candidates>;
};

/** on_conflict condition type for table "candidates" */
export type Candidates_On_Conflict = {
  constraint: Candidates_Constraint;
  update_columns?: Array<Candidates_Update_Column>;
  where?: InputMaybe<Candidates_Bool_Exp>;
};

/** Ordering options when selecting data from "candidates". */
export type Candidates_Order_By = {
  address?: InputMaybe<Order_By>;
  application_date?: InputMaybe<Order_By>;
  birth_date?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  databases?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  frameworks?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  github_url?: InputMaybe<Order_By>;
  graduation_year?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  linkedin_url?: InputMaybe<Order_By>;
  major?: InputMaybe<Order_By>;
  other_skills?: InputMaybe<Order_By>;
  personal_projects?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  position_level?: InputMaybe<Order_By>;
  position_type?: InputMaybe<Order_By>;
  programming_languages?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  university?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  work_history?: InputMaybe<Order_By>;
  years_of_experience?: InputMaybe<Order_By>;
};

/** primary key columns input for table: candidates */
export type Candidates_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Candidates_Prepend_Input = {
  personal_projects?: InputMaybe<Scalars['jsonb']['input']>;
  work_history?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "candidates" */
export enum Candidates_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  ApplicationDate = 'application_date',
  /** column name */
  BirthDate = 'birth_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Databases = 'databases',
  /** column name */
  Email = 'email',
  /** column name */
  Frameworks = 'frameworks',
  /** column name */
  FullName = 'full_name',
  /** column name */
  GithubUrl = 'github_url',
  /** column name */
  GraduationYear = 'graduation_year',
  /** column name */
  Id = 'id',
  /** column name */
  LinkedinUrl = 'linkedin_url',
  /** column name */
  Major = 'major',
  /** column name */
  OtherSkills = 'other_skills',
  /** column name */
  PersonalProjects = 'personal_projects',
  /** column name */
  Phone = 'phone',
  /** column name */
  PositionLevel = 'position_level',
  /** column name */
  PositionType = 'position_type',
  /** column name */
  ProgrammingLanguages = 'programming_languages',
  /** column name */
  Status = 'status',
  /** column name */
  University = 'university',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkHistory = 'work_history',
  /** column name */
  YearsOfExperience = 'years_of_experience'
}

/** input type for updating data in table "candidates" */
export type Candidates_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  application_date?: InputMaybe<Scalars['timestamptz']['input']>;
  birth_date?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  databases?: InputMaybe<Array<Scalars['String']['input']>>;
  email?: InputMaybe<Scalars['String']['input']>;
  frameworks?: InputMaybe<Array<Scalars['String']['input']>>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  github_url?: InputMaybe<Scalars['String']['input']>;
  graduation_year?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  linkedin_url?: InputMaybe<Scalars['String']['input']>;
  major?: InputMaybe<Scalars['String']['input']>;
  other_skills?: InputMaybe<Array<Scalars['String']['input']>>;
  personal_projects?: InputMaybe<Scalars['jsonb']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  position_level?: InputMaybe<Scalars['position_level']['input']>;
  position_type?: InputMaybe<Scalars['position_type']['input']>;
  programming_languages?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Scalars['application_status']['input']>;
  university?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  work_history?: InputMaybe<Scalars['jsonb']['input']>;
  years_of_experience?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Candidates_Stddev_Fields = {
  __typename?: 'candidates_stddev_fields';
  graduation_year?: Maybe<Scalars['Float']['output']>;
  years_of_experience?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Candidates_Stddev_Pop_Fields = {
  __typename?: 'candidates_stddev_pop_fields';
  graduation_year?: Maybe<Scalars['Float']['output']>;
  years_of_experience?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Candidates_Stddev_Samp_Fields = {
  __typename?: 'candidates_stddev_samp_fields';
  graduation_year?: Maybe<Scalars['Float']['output']>;
  years_of_experience?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "candidates" */
export type Candidates_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Candidates_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Candidates_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  application_date?: InputMaybe<Scalars['timestamptz']['input']>;
  birth_date?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  databases?: InputMaybe<Array<Scalars['String']['input']>>;
  email?: InputMaybe<Scalars['String']['input']>;
  frameworks?: InputMaybe<Array<Scalars['String']['input']>>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  github_url?: InputMaybe<Scalars['String']['input']>;
  graduation_year?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  linkedin_url?: InputMaybe<Scalars['String']['input']>;
  major?: InputMaybe<Scalars['String']['input']>;
  other_skills?: InputMaybe<Array<Scalars['String']['input']>>;
  personal_projects?: InputMaybe<Scalars['jsonb']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  position_level?: InputMaybe<Scalars['position_level']['input']>;
  position_type?: InputMaybe<Scalars['position_type']['input']>;
  programming_languages?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Scalars['application_status']['input']>;
  university?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  work_history?: InputMaybe<Scalars['jsonb']['input']>;
  years_of_experience?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Candidates_Sum_Fields = {
  __typename?: 'candidates_sum_fields';
  graduation_year?: Maybe<Scalars['Int']['output']>;
  years_of_experience?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "candidates" */
export enum Candidates_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  ApplicationDate = 'application_date',
  /** column name */
  BirthDate = 'birth_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Databases = 'databases',
  /** column name */
  Email = 'email',
  /** column name */
  Frameworks = 'frameworks',
  /** column name */
  FullName = 'full_name',
  /** column name */
  GithubUrl = 'github_url',
  /** column name */
  GraduationYear = 'graduation_year',
  /** column name */
  Id = 'id',
  /** column name */
  LinkedinUrl = 'linkedin_url',
  /** column name */
  Major = 'major',
  /** column name */
  OtherSkills = 'other_skills',
  /** column name */
  PersonalProjects = 'personal_projects',
  /** column name */
  Phone = 'phone',
  /** column name */
  PositionLevel = 'position_level',
  /** column name */
  PositionType = 'position_type',
  /** column name */
  ProgrammingLanguages = 'programming_languages',
  /** column name */
  Status = 'status',
  /** column name */
  University = 'university',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkHistory = 'work_history',
  /** column name */
  YearsOfExperience = 'years_of_experience'
}

export type Candidates_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Candidates_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Candidates_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Candidates_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Candidates_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Candidates_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Candidates_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Candidates_Set_Input>;
  /** filter the rows which have to be updated */
  where: Candidates_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Candidates_Var_Pop_Fields = {
  __typename?: 'candidates_var_pop_fields';
  graduation_year?: Maybe<Scalars['Float']['output']>;
  years_of_experience?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Candidates_Var_Samp_Fields = {
  __typename?: 'candidates_var_samp_fields';
  graduation_year?: Maybe<Scalars['Float']['output']>;
  years_of_experience?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Candidates_Variance_Fields = {
  __typename?: 'candidates_variance_fields';
  graduation_year?: Maybe<Scalars['Float']['output']>;
  years_of_experience?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "candidates" */
  delete_candidates?: Maybe<Candidates_Mutation_Response>;
  /** delete single row from the table: "candidates" */
  delete_candidates_by_pk?: Maybe<Candidates>;
  /** insert data into the table: "candidates" */
  insert_candidates?: Maybe<Candidates_Mutation_Response>;
  /** insert a single row into the table: "candidates" */
  insert_candidates_one?: Maybe<Candidates>;
  /** update data of the table: "candidates" */
  update_candidates?: Maybe<Candidates_Mutation_Response>;
  /** update single row of the table: "candidates" */
  update_candidates_by_pk?: Maybe<Candidates>;
  /** update multiples rows of table: "candidates" */
  update_candidates_many?: Maybe<Array<Maybe<Candidates_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CandidatesArgs = {
  where: Candidates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Candidates_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_CandidatesArgs = {
  objects: Array<Candidates_Insert_Input>;
  on_conflict?: InputMaybe<Candidates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Candidates_OneArgs = {
  object: Candidates_Insert_Input;
  on_conflict?: InputMaybe<Candidates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CandidatesArgs = {
  _append?: InputMaybe<Candidates_Append_Input>;
  _delete_at_path?: InputMaybe<Candidates_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Candidates_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Candidates_Delete_Key_Input>;
  _inc?: InputMaybe<Candidates_Inc_Input>;
  _prepend?: InputMaybe<Candidates_Prepend_Input>;
  _set?: InputMaybe<Candidates_Set_Input>;
  where: Candidates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Candidates_By_PkArgs = {
  _append?: InputMaybe<Candidates_Append_Input>;
  _delete_at_path?: InputMaybe<Candidates_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Candidates_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Candidates_Delete_Key_Input>;
  _inc?: InputMaybe<Candidates_Inc_Input>;
  _prepend?: InputMaybe<Candidates_Prepend_Input>;
  _set?: InputMaybe<Candidates_Set_Input>;
  pk_columns: Candidates_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Candidates_ManyArgs = {
  updates: Array<Candidates_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
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

/** Boolean expression to compare columns of type "position_level". All fields are combined with logical 'AND'. */
export type Position_Level_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['position_level']['input']>;
  _gt?: InputMaybe<Scalars['position_level']['input']>;
  _gte?: InputMaybe<Scalars['position_level']['input']>;
  _in?: InputMaybe<Array<Scalars['position_level']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['position_level']['input']>;
  _lte?: InputMaybe<Scalars['position_level']['input']>;
  _neq?: InputMaybe<Scalars['position_level']['input']>;
  _nin?: InputMaybe<Array<Scalars['position_level']['input']>>;
};

/** Boolean expression to compare columns of type "position_type". All fields are combined with logical 'AND'. */
export type Position_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['position_type']['input']>;
  _gt?: InputMaybe<Scalars['position_type']['input']>;
  _gte?: InputMaybe<Scalars['position_type']['input']>;
  _in?: InputMaybe<Array<Scalars['position_type']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['position_type']['input']>;
  _lte?: InputMaybe<Scalars['position_type']['input']>;
  _neq?: InputMaybe<Scalars['position_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['position_type']['input']>>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "candidates" */
  candidates: Array<Candidates>;
  /** fetch aggregated fields from the table: "candidates" */
  candidates_aggregate: Candidates_Aggregate;
  /** fetch data from the table: "candidates" using primary key columns */
  candidates_by_pk?: Maybe<Candidates>;
};


export type Query_RootCandidatesArgs = {
  distinct_on?: InputMaybe<Array<Candidates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Candidates_Order_By>>;
  where?: InputMaybe<Candidates_Bool_Exp>;
};


export type Query_RootCandidates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Candidates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Candidates_Order_By>>;
  where?: InputMaybe<Candidates_Bool_Exp>;
};


export type Query_RootCandidates_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "candidates" */
  candidates: Array<Candidates>;
  /** fetch aggregated fields from the table: "candidates" */
  candidates_aggregate: Candidates_Aggregate;
  /** fetch data from the table: "candidates" using primary key columns */
  candidates_by_pk?: Maybe<Candidates>;
  /** fetch data from the table in a streaming manner: "candidates" */
  candidates_stream: Array<Candidates>;
};


export type Subscription_RootCandidatesArgs = {
  distinct_on?: InputMaybe<Array<Candidates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Candidates_Order_By>>;
  where?: InputMaybe<Candidates_Bool_Exp>;
};


export type Subscription_RootCandidates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Candidates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Candidates_Order_By>>;
  where?: InputMaybe<Candidates_Bool_Exp>;
};


export type Subscription_RootCandidates_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCandidates_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Candidates_Stream_Cursor_Input>>;
  where?: InputMaybe<Candidates_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
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

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { __typename?: 'query_root', candidates: Array<{ __typename?: 'candidates', email: string }> };


export const MyQueryDocument = gql`
    query MyQuery {
  candidates {
    email
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    MyQuery(variables?: MyQueryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MyQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MyQueryQuery>(MyQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MyQuery', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;