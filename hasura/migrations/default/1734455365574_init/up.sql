SET check_function_bodies = false;
CREATE TABLE public.enemies (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(50) NOT NULL,
    health integer NOT NULL,
    attack integer NOT NULL,
    loot json
);
CREATE TABLE public.items (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(50) NOT NULL,
    description text,
    type character varying(20) NOT NULL,
    effect json,
    rarity character varying(20) NOT NULL,
    CONSTRAINT items_rarity_check CHECK (((rarity)::text = ANY ((ARRAY['common'::character varying, 'rare'::character varying, 'epic'::character varying, 'legendary'::character varying])::text[]))),
    CONSTRAINT items_type_check CHECK (((type)::text = ANY ((ARRAY['weapon'::character varying, 'armor'::character varying, 'potion'::character varying, 'misc'::character varying])::text[])))
);
CREATE TABLE public.maps (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(50) NOT NULL,
    width integer NOT NULL,
    height integer NOT NULL,
    description text
);
CREATE TABLE public.player_combat_logs (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    player_id uuid,
    enemy_id uuid,
    result character varying(20) NOT NULL,
    damage_dealt integer NOT NULL,
    damage_taken integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT player_combat_logs_result_check CHECK (((result)::text = ANY ((ARRAY['win'::character varying, 'lose'::character varying])::text[])))
);
CREATE TABLE public.player_items (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    player_id uuid,
    item_id uuid,
    quantity integer DEFAULT 1,
    equipped boolean DEFAULT false
);
CREATE TABLE public.player_profiles (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    user_id uuid,
    level integer DEFAULT 1,
    experience integer DEFAULT 0,
    health integer DEFAULT 100,
    max_health integer DEFAULT 100,
    gold integer DEFAULT 0,
    location_id uuid
);
CREATE TABLE public.player_quests (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    player_id uuid,
    quest_id uuid,
    status character varying(20) DEFAULT 'in_progress'::character varying,
    progress json,
    CONSTRAINT player_quests_status_check CHECK (((status)::text = ANY ((ARRAY['in_progress'::character varying, 'completed'::character varying])::text[])))
);
CREATE TABLE public.quests (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(100) NOT NULL,
    description text,
    reward json,
    requirements json
);
CREATE TABLE public.users (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    username character varying(50) NOT NULL,
    password character varying(255) NOT NULL,
    email character varying(100),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE ONLY public.enemies
    ADD CONSTRAINT enemies_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.items
    ADD CONSTRAINT items_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.maps
    ADD CONSTRAINT maps_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.player_combat_logs
    ADD CONSTRAINT player_combat_logs_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.player_items
    ADD CONSTRAINT player_items_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.player_profiles
    ADD CONSTRAINT player_profiles_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.player_quests
    ADD CONSTRAINT player_quests_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.quests
    ADD CONSTRAINT quests_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
ALTER TABLE ONLY public.player_combat_logs
    ADD CONSTRAINT player_combat_logs_enemy_id_fkey FOREIGN KEY (enemy_id) REFERENCES public.enemies(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.player_combat_logs
    ADD CONSTRAINT player_combat_logs_player_id_fkey FOREIGN KEY (player_id) REFERENCES public.player_profiles(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.player_items
    ADD CONSTRAINT player_items_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.items(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.player_items
    ADD CONSTRAINT player_items_player_id_fkey FOREIGN KEY (player_id) REFERENCES public.player_profiles(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.player_profiles
    ADD CONSTRAINT player_profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.player_quests
    ADD CONSTRAINT player_quests_player_id_fkey FOREIGN KEY (player_id) REFERENCES public.player_profiles(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.player_quests
    ADD CONSTRAINT player_quests_quest_id_fkey FOREIGN KEY (quest_id) REFERENCES public.quests(id) ON DELETE CASCADE;
