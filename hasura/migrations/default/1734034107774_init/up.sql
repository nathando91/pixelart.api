SET check_function_bodies = false;
CREATE TYPE public.application_status AS ENUM (
    'new',
    'reviewing',
    'interviewed',
    'rejected',
    'accepted'
);
CREATE TYPE public.english_level AS ENUM (
    'beginner',
    'intermediate',
    'upper_intermediate',
    'advanced',
    'proficient'
);
CREATE TYPE public.position_level AS ENUM (
    'intern',
    'fresher',
    'junior',
    'middle',
    'senior'
);
CREATE TYPE public.position_type AS ENUM (
    'frontend',
    'backend',
    'fullstack',
    'devops',
    'mobile'
);
CREATE FUNCTION public.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;
CREATE TABLE public.candidates (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    full_name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    phone character varying(20),
    birth_date date,
    address text,
    position_type public.position_type NOT NULL,
    position_level public.position_level NOT NULL,
    application_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    status public.application_status DEFAULT 'new'::public.application_status,
    university character varying(255),
    major character varying(255),
    graduation_year integer,
    programming_languages text[],
    frameworks text[],
    databases text[],
    other_skills text[],
    years_of_experience numeric(3,1) DEFAULT 0,
    work_history jsonb,
    personal_projects jsonb,
    github_url text,
    linkedin_url text
);
ALTER TABLE ONLY public.candidates
    ADD CONSTRAINT candidates_email_key UNIQUE (email);
ALTER TABLE ONLY public.candidates
    ADD CONSTRAINT candidates_pkey PRIMARY KEY (id);
