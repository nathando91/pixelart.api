-- First, drop dependent objects
DROP VIEW IF EXISTS upcoming_interviews;
DROP VIEW IF EXISTS active_applications;
DROP TABLE IF EXISTS interview_schedules;
DROP TABLE IF EXISTS candidates;
DROP FUNCTION IF EXISTS search_candidates;
DROP FUNCTION IF EXISTS update_updated_at_column;
DROP TYPE IF EXISTS application_status;
DROP TYPE IF EXISTS position_type;
DROP TYPE IF EXISTS position_level;
DROP TYPE IF EXISTS english_level;

-- Create ENUMs
CREATE TYPE application_status AS ENUM (
    'new',
    'reviewing',
    'interviewed',
    'rejected',
    'accepted'
);

CREATE TYPE position_type AS ENUM (
    'frontend',
    'backend',
    'fullstack',
    'devops',
    'mobile'
);

CREATE TYPE position_level AS ENUM (
    'intern',
    'fresher',
    'junior',
    'middle',
    'senior'
);

CREATE TYPE english_level AS ENUM (
    'beginner',
    'intermediate',
    'upper_intermediate',
    'advanced',
    'proficient'
);

-- Create candidates table
CREATE TABLE candidates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    -- Basic Information
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20),
    birth_date DATE,
    address TEXT,
    
    -- Application Information
    position_type position_type NOT NULL,
    position_level position_level NOT NULL,
    application_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    status application_status DEFAULT 'new',
    
    -- Education
    university VARCHAR(255),
    major VARCHAR(255),
    graduation_year INTEGER,
    
    -- Technical Skills
    programming_languages TEXT[],
    frameworks TEXT[],
    databases TEXT[],
    other_skills TEXT[],
    
    -- Experience
    years_of_experience DECIMAL(3,1) DEFAULT 0,
    work_history JSONB,
    
    -- Projects
    personal_projects JSONB,
    
    -- Online Presence
    github_url TEXT,
    linkedin_url TEXT
);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_candidates_updated_at
    BEFORE UPDATE ON candidates
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Create views
CREATE VIEW active_applications AS
SELECT 
    id,
    full_name,
    email,
    phone,
    position_type,
    position_level,
    years_of_experience,
    application_date,
    status
FROM candidates
WHERE status IN ('new', 'reviewing', 'interviewed')
ORDER BY application_date DESC;

-- Insert data for Nguyen Van Thuc
INSERT INTO candidates (
    full_name,
    email,
    phone,
    address,
    position_type,
    position_level,
    university,
    major,
    graduation_year,
    programming_languages,
    frameworks,
    databases,
    years_of_experience,
    work_history,
    personal_projects,
    linkedin_url
) VALUES (
    'Nguyễn Văn Thức',
    'thucskin@gmail.com',
    '0969794458',
    'Hải Châu - Đà Nẵng',
    'frontend',
    'fresher',
    'FPT Polytechnic College',
    'Software Applications',
    2023,
    ARRAY['Java', 'NodeJS', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'SASS'],
    ARRAY['Spring Boot', 'Express', 'NestJS', 'TypeORM', 'ReactJS', 'NextJS', 'VueJS', 'NuxtJS', 'Bootstrap', 'Tailwind'],
    ARRAY['SQL Server', 'MySQL', 'MongoDB', 'PostgreSQL'],
    1.0,
    jsonb_build_object(
        'companies', jsonb_build_array(
            jsonb_build_object(
                'company_name', 'Laco Joint Stock Company',
                'position', 'Fresher',
                'start_date', '2024-04-11',
                'end_date', '2024-07-10',
                'description', 'Laco – Local service app development using VueJS/NuxtJS. Worked on site admin features including user management, roles, permissions, brands, location revenues, statistics, authentication.'
            )
        )
    ),
    jsonb_build_array(
        jsonb_build_object(
            'name', 'Medical Appointment Booking Website',
            'duration', 'June 2023 - September 2023',
            'team_size', 1,
            'description', 'Online Appointment Booking, Patient Information Management, Appointment Confirmation, Edit and Cancel Appointments, Physician Directory Management, Search Functionality',
            'technologies', ARRAY['NodeJS', 'Express', 'MySQL', 'ReactJS', 'Bootstrap5', 'SASS'],
            'demo_url', 'https://www.youtube.com/watch?v=fT74FyEHlWU'
        ),
        jsonb_build_object(
            'name', 'ShopNow E-commerce Website',
            'duration', 'December 2022 - February 2023',
            'team_size', 1,
            'description', 'E-commerce platform with product search, order management, user authentication, and admin dashboard',
            'technologies', ARRAY['Java Spring Boot', 'SQL Server', 'Angular', 'Bootstrap5'],
            'demo_url', 'https://www.youtube.com/watch?v=9PJy_2lt59w'
        )
    ),
    'https://www.facebook.com/ThucSkin/'
);