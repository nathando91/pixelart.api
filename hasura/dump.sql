--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1 (Debian 16.1-1.pgdg120+1)
-- Dumped by pg_dump version 16.1 (Debian 16.1-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: hdb_catalog; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA hdb_catalog;


ALTER SCHEMA hdb_catalog OWNER TO postgres;

--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- Name: gen_hasura_uuid(); Type: FUNCTION; Schema: hdb_catalog; Owner: postgres
--

CREATE FUNCTION hdb_catalog.gen_hasura_uuid() RETURNS uuid
    LANGUAGE sql
    AS $$select gen_random_uuid()$$;


ALTER FUNCTION hdb_catalog.gen_hasura_uuid() OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: hdb_action_log; Type: TABLE; Schema: hdb_catalog; Owner: postgres
--

CREATE TABLE hdb_catalog.hdb_action_log (
    id uuid DEFAULT hdb_catalog.gen_hasura_uuid() NOT NULL,
    action_name text,
    input_payload jsonb NOT NULL,
    request_headers jsonb NOT NULL,
    session_variables jsonb NOT NULL,
    response_payload jsonb,
    errors jsonb,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    response_received_at timestamp with time zone,
    status text NOT NULL,
    CONSTRAINT hdb_action_log_status_check CHECK ((status = ANY (ARRAY['created'::text, 'processing'::text, 'completed'::text, 'error'::text])))
);


ALTER TABLE hdb_catalog.hdb_action_log OWNER TO postgres;

--
-- Name: hdb_cron_event_invocation_logs; Type: TABLE; Schema: hdb_catalog; Owner: postgres
--

CREATE TABLE hdb_catalog.hdb_cron_event_invocation_logs (
    id text DEFAULT hdb_catalog.gen_hasura_uuid() NOT NULL,
    event_id text,
    status integer,
    request json,
    response json,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE hdb_catalog.hdb_cron_event_invocation_logs OWNER TO postgres;

--
-- Name: hdb_cron_events; Type: TABLE; Schema: hdb_catalog; Owner: postgres
--

CREATE TABLE hdb_catalog.hdb_cron_events (
    id text DEFAULT hdb_catalog.gen_hasura_uuid() NOT NULL,
    trigger_name text NOT NULL,
    scheduled_time timestamp with time zone NOT NULL,
    status text DEFAULT 'scheduled'::text NOT NULL,
    tries integer DEFAULT 0 NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    next_retry_at timestamp with time zone,
    CONSTRAINT valid_status CHECK ((status = ANY (ARRAY['scheduled'::text, 'locked'::text, 'delivered'::text, 'error'::text, 'dead'::text])))
);


ALTER TABLE hdb_catalog.hdb_cron_events OWNER TO postgres;

--
-- Name: hdb_metadata; Type: TABLE; Schema: hdb_catalog; Owner: postgres
--

CREATE TABLE hdb_catalog.hdb_metadata (
    id integer NOT NULL,
    metadata json NOT NULL,
    resource_version integer DEFAULT 1 NOT NULL
);


ALTER TABLE hdb_catalog.hdb_metadata OWNER TO postgres;

--
-- Name: hdb_scheduled_event_invocation_logs; Type: TABLE; Schema: hdb_catalog; Owner: postgres
--

CREATE TABLE hdb_catalog.hdb_scheduled_event_invocation_logs (
    id text DEFAULT hdb_catalog.gen_hasura_uuid() NOT NULL,
    event_id text,
    status integer,
    request json,
    response json,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE hdb_catalog.hdb_scheduled_event_invocation_logs OWNER TO postgres;

--
-- Name: hdb_scheduled_events; Type: TABLE; Schema: hdb_catalog; Owner: postgres
--

CREATE TABLE hdb_catalog.hdb_scheduled_events (
    id text DEFAULT hdb_catalog.gen_hasura_uuid() NOT NULL,
    webhook_conf json NOT NULL,
    scheduled_time timestamp with time zone NOT NULL,
    retry_conf json,
    payload json,
    header_conf json,
    status text DEFAULT 'scheduled'::text NOT NULL,
    tries integer DEFAULT 0 NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    next_retry_at timestamp with time zone,
    comment text,
    CONSTRAINT valid_status CHECK ((status = ANY (ARRAY['scheduled'::text, 'locked'::text, 'delivered'::text, 'error'::text, 'dead'::text])))
);


ALTER TABLE hdb_catalog.hdb_scheduled_events OWNER TO postgres;

--
-- Name: hdb_schema_notifications; Type: TABLE; Schema: hdb_catalog; Owner: postgres
--

CREATE TABLE hdb_catalog.hdb_schema_notifications (
    id integer NOT NULL,
    notification json NOT NULL,
    resource_version integer DEFAULT 1 NOT NULL,
    instance_id uuid NOT NULL,
    updated_at timestamp with time zone DEFAULT now(),
    CONSTRAINT hdb_schema_notifications_id_check CHECK ((id = 1))
);


ALTER TABLE hdb_catalog.hdb_schema_notifications OWNER TO postgres;

--
-- Name: hdb_version; Type: TABLE; Schema: hdb_catalog; Owner: postgres
--

CREATE TABLE hdb_catalog.hdb_version (
    hasura_uuid uuid DEFAULT hdb_catalog.gen_hasura_uuid() NOT NULL,
    version text NOT NULL,
    upgraded_on timestamp with time zone NOT NULL,
    cli_state jsonb DEFAULT '{}'::jsonb NOT NULL,
    console_state jsonb DEFAULT '{}'::jsonb NOT NULL,
    ee_client_id text,
    ee_client_secret text
);


ALTER TABLE hdb_catalog.hdb_version OWNER TO postgres;

--
-- Name: enemies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.enemies (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(50) NOT NULL,
    health integer NOT NULL,
    attack integer NOT NULL,
    loot json
);


ALTER TABLE public.enemies OWNER TO postgres;

--
-- Name: items; Type: TABLE; Schema: public; Owner: postgres
--

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


ALTER TABLE public.items OWNER TO postgres;

--
-- Name: maps; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.maps (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(50) NOT NULL,
    width integer NOT NULL,
    height integer NOT NULL,
    description text
);


ALTER TABLE public.maps OWNER TO postgres;

--
-- Name: player_combat_logs; Type: TABLE; Schema: public; Owner: postgres
--

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


ALTER TABLE public.player_combat_logs OWNER TO postgres;

--
-- Name: player_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.player_items (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    player_id uuid,
    item_id uuid,
    quantity integer DEFAULT 1,
    equipped boolean DEFAULT false
);


ALTER TABLE public.player_items OWNER TO postgres;

--
-- Name: player_profiles; Type: TABLE; Schema: public; Owner: postgres
--

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


ALTER TABLE public.player_profiles OWNER TO postgres;

--
-- Name: player_quests; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.player_quests (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    player_id uuid,
    quest_id uuid,
    status character varying(20) DEFAULT 'in_progress'::character varying,
    progress json,
    CONSTRAINT player_quests_status_check CHECK (((status)::text = ANY ((ARRAY['in_progress'::character varying, 'completed'::character varying])::text[])))
);


ALTER TABLE public.player_quests OWNER TO postgres;

--
-- Name: quests; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.quests (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(100) NOT NULL,
    description text,
    reward json,
    requirements json
);


ALTER TABLE public.quests OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    username character varying(50) NOT NULL,
    password character varying(255) NOT NULL,
    email character varying(100),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: hdb_action_log; Type: TABLE DATA; Schema: hdb_catalog; Owner: postgres
--

COPY hdb_catalog.hdb_action_log (id, action_name, input_payload, request_headers, session_variables, response_payload, errors, created_at, response_received_at, status) FROM stdin;
\.


--
-- Data for Name: hdb_cron_event_invocation_logs; Type: TABLE DATA; Schema: hdb_catalog; Owner: postgres
--

COPY hdb_catalog.hdb_cron_event_invocation_logs (id, event_id, status, request, response, created_at) FROM stdin;
\.


--
-- Data for Name: hdb_cron_events; Type: TABLE DATA; Schema: hdb_catalog; Owner: postgres
--

COPY hdb_catalog.hdb_cron_events (id, trigger_name, scheduled_time, status, tries, created_at, next_retry_at) FROM stdin;
\.


--
-- Data for Name: hdb_metadata; Type: TABLE DATA; Schema: hdb_catalog; Owner: postgres
--

COPY hdb_catalog.hdb_metadata (id, metadata, resource_version) FROM stdin;
1	{"sources":[{"configuration":{"connection_info":{"database_url":{"from_env":"HASURA_GRAPHQL_DATABASE_URL"},"isolation_level":"read-committed","pool_settings":{"connection_lifetime":600,"idle_timeout":180,"max_connections":50,"retries":1},"use_prepared_statements":true}},"kind":"postgres","name":"default","tables":[{"array_relationships":[{"name":"player_combat_logs","using":{"foreign_key_constraint_on":{"column":"enemy_id","table":{"name":"player_combat_logs","schema":"public"}}}}],"table":{"name":"enemies","schema":"public"}},{"array_relationships":[{"name":"player_items","using":{"foreign_key_constraint_on":{"column":"item_id","table":{"name":"player_items","schema":"public"}}}}],"table":{"name":"items","schema":"public"}},{"table":{"name":"maps","schema":"public"}},{"object_relationships":[{"name":"enemy","using":{"foreign_key_constraint_on":"enemy_id"}},{"name":"player_profile","using":{"foreign_key_constraint_on":"player_id"}}],"table":{"name":"player_combat_logs","schema":"public"}},{"object_relationships":[{"name":"item","using":{"foreign_key_constraint_on":"item_id"}},{"name":"player_profile","using":{"foreign_key_constraint_on":"player_id"}}],"table":{"name":"player_items","schema":"public"}},{"array_relationships":[{"name":"player_combat_logs","using":{"foreign_key_constraint_on":{"column":"player_id","table":{"name":"player_combat_logs","schema":"public"}}}},{"name":"player_items","using":{"foreign_key_constraint_on":{"column":"player_id","table":{"name":"player_items","schema":"public"}}}},{"name":"player_quests","using":{"foreign_key_constraint_on":{"column":"player_id","table":{"name":"player_quests","schema":"public"}}}}],"object_relationships":[{"name":"user","using":{"foreign_key_constraint_on":"user_id"}}],"table":{"name":"player_profiles","schema":"public"}},{"object_relationships":[{"name":"player_profile","using":{"foreign_key_constraint_on":"player_id"}},{"name":"quest","using":{"foreign_key_constraint_on":"quest_id"}}],"table":{"name":"player_quests","schema":"public"}},{"array_relationships":[{"name":"player_quests","using":{"foreign_key_constraint_on":{"column":"quest_id","table":{"name":"player_quests","schema":"public"}}}}],"table":{"name":"quests","schema":"public"}},{"array_relationships":[{"name":"player_profiles","using":{"foreign_key_constraint_on":{"column":"user_id","table":{"name":"player_profiles","schema":"public"}}}}],"table":{"name":"users","schema":"public"}}]}],"version":3}	3
\.


--
-- Data for Name: hdb_scheduled_event_invocation_logs; Type: TABLE DATA; Schema: hdb_catalog; Owner: postgres
--

COPY hdb_catalog.hdb_scheduled_event_invocation_logs (id, event_id, status, request, response, created_at) FROM stdin;
\.


--
-- Data for Name: hdb_scheduled_events; Type: TABLE DATA; Schema: hdb_catalog; Owner: postgres
--

COPY hdb_catalog.hdb_scheduled_events (id, webhook_conf, scheduled_time, retry_conf, payload, header_conf, status, tries, created_at, next_retry_at, comment) FROM stdin;
\.


--
-- Data for Name: hdb_schema_notifications; Type: TABLE DATA; Schema: hdb_catalog; Owner: postgres
--

COPY hdb_catalog.hdb_schema_notifications (id, notification, resource_version, instance_id, updated_at) FROM stdin;
1	{"metadata":false,"remote_schemas":[],"sources":[],"data_connectors":[]}	3	8c2d872d-3439-4bcc-9b62-1d5d444a1143	2024-12-17 17:06:12.796219+00
\.


--
-- Data for Name: hdb_version; Type: TABLE DATA; Schema: hdb_catalog; Owner: postgres
--

COPY hdb_catalog.hdb_version (hasura_uuid, version, upgraded_on, cli_state, console_state, ee_client_id, ee_client_secret) FROM stdin;
d365c0b9-a8e0-4375-99bd-46dd233a559d	48	2024-12-15 10:09:45.423568+00	{"settings": {"migration_mode": "true"}, "migrations": {"default": {"1734455365574": false, "1734457570469": false}}, "isStateCopyCompleted": false}	{}	\N	\N
\.


--
-- Data for Name: enemies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.enemies (id, name, health, attack, loot) FROM stdin;
64668196-e136-4bf4-8934-0f793881f024	Goblin	30	5	{"gold": 10, "item_drop": "Health Potion"}
f802e8c5-8522-4f98-9c98-95f6b1790461	Dark Knight	100	20	{"gold": 50, "item_drop": "Steel Armor"}
353d431a-f41d-4fca-b502-4c46cbc74069	Forest Dragon	300	50	{"gold": 200, "item_drop": "Legendary Bow"}
\.


--
-- Data for Name: items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.items (id, name, description, type, effect, rarity) FROM stdin;
18f4d990-a390-448e-b4be-baf9b8fff104	Iron Sword	A basic sword with decent attack.	weapon	{"attack": 10}	common
4cbe7ff2-cd22-4a05-9586-51c92a05cf61	Health Potion	Restores 50 HP.	potion	{"heal": 50}	common
6db924f4-eb0e-4ce8-8419-86af5e33a994	Steel Armor	Provides strong defense.	armor	{"defense": 20}	rare
55e37812-63bd-4f54-b2b7-aafb7eda6ed7	Legendary Bow	A powerful bow with unmatched accuracy.	weapon	{"attack": 50}	legendary
\.


--
-- Data for Name: maps; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.maps (id, name, width, height, description) FROM stdin;
348b3789-e2b8-4512-a63b-d2502dee68a5	Forest of Trials	100	100	A dense forest filled with mysteries and treasures.
3c005fc4-05ed-4b13-8e45-c3321391c3c5	Cave of Shadows	50	50	A dark cave teeming with monsters and hidden loot.
\.


--
-- Data for Name: player_combat_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.player_combat_logs (id, player_id, enemy_id, result, damage_dealt, damage_taken, created_at) FROM stdin;
\.


--
-- Data for Name: player_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.player_items (id, player_id, item_id, quantity, equipped) FROM stdin;
4097b42b-9feb-4aad-9b06-0f4ad06ae2bd	e26edf60-a1a3-4467-83b4-7dda763c656c	18f4d990-a390-448e-b4be-baf9b8fff104	1	t
\.


--
-- Data for Name: player_profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.player_profiles (id, user_id, level, experience, health, max_health, gold, location_id) FROM stdin;
e26edf60-a1a3-4467-83b4-7dda763c656c	4b4485f6-867f-4899-9403-9f95bb3d3b42	1	0	100	100	0	348b3789-e2b8-4512-a63b-d2502dee68a5
\.


--
-- Data for Name: player_quests; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.player_quests (id, player_id, quest_id, status, progress) FROM stdin;
4cb72429-3a77-4c6f-a0bd-344c8ff7f774	e26edf60-a1a3-4467-83b4-7dda763c656c	ef693845-3897-417e-a11e-9b0fc0099a14	in_progress	\N
\.


--
-- Data for Name: quests; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.quests (id, name, description, reward, requirements) FROM stdin;
ef693845-3897-417e-a11e-9b0fc0099a14	Defeat the Goblins	Eliminate 5 goblins in the Forest of Trials.	{"experience": 100, "gold": 50, "item_reward": "Health Potion"}	{"enemy_kill": {"Goblin": 5}}
73c7b231-6ad5-487a-8d17-4748c5ba97fd	Slay the Forest Dragon	Defeat the mighty Forest Dragon to restore peace.	{"experience": 500, "gold": 300, "item_reward": "Legendary Bow"}	{"enemy_kill": {"Forest Dragon": 1}}
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, password, email, created_at, updated_at) FROM stdin;
4b4485f6-867f-4899-9403-9f95bb3d3b42	player1	hashed_password	player1@example.com	2024-12-17 17:07:02.254718	2024-12-17 17:07:02.254718
\.


--
-- Name: hdb_action_log hdb_action_log_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: postgres
--

ALTER TABLE ONLY hdb_catalog.hdb_action_log
    ADD CONSTRAINT hdb_action_log_pkey PRIMARY KEY (id);


--
-- Name: hdb_cron_event_invocation_logs hdb_cron_event_invocation_logs_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: postgres
--

ALTER TABLE ONLY hdb_catalog.hdb_cron_event_invocation_logs
    ADD CONSTRAINT hdb_cron_event_invocation_logs_pkey PRIMARY KEY (id);


--
-- Name: hdb_cron_events hdb_cron_events_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: postgres
--

ALTER TABLE ONLY hdb_catalog.hdb_cron_events
    ADD CONSTRAINT hdb_cron_events_pkey PRIMARY KEY (id);


--
-- Name: hdb_metadata hdb_metadata_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: postgres
--

ALTER TABLE ONLY hdb_catalog.hdb_metadata
    ADD CONSTRAINT hdb_metadata_pkey PRIMARY KEY (id);


--
-- Name: hdb_metadata hdb_metadata_resource_version_key; Type: CONSTRAINT; Schema: hdb_catalog; Owner: postgres
--

ALTER TABLE ONLY hdb_catalog.hdb_metadata
    ADD CONSTRAINT hdb_metadata_resource_version_key UNIQUE (resource_version);


--
-- Name: hdb_scheduled_event_invocation_logs hdb_scheduled_event_invocation_logs_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: postgres
--

ALTER TABLE ONLY hdb_catalog.hdb_scheduled_event_invocation_logs
    ADD CONSTRAINT hdb_scheduled_event_invocation_logs_pkey PRIMARY KEY (id);


--
-- Name: hdb_scheduled_events hdb_scheduled_events_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: postgres
--

ALTER TABLE ONLY hdb_catalog.hdb_scheduled_events
    ADD CONSTRAINT hdb_scheduled_events_pkey PRIMARY KEY (id);


--
-- Name: hdb_schema_notifications hdb_schema_notifications_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: postgres
--

ALTER TABLE ONLY hdb_catalog.hdb_schema_notifications
    ADD CONSTRAINT hdb_schema_notifications_pkey PRIMARY KEY (id);


--
-- Name: hdb_version hdb_version_pkey; Type: CONSTRAINT; Schema: hdb_catalog; Owner: postgres
--

ALTER TABLE ONLY hdb_catalog.hdb_version
    ADD CONSTRAINT hdb_version_pkey PRIMARY KEY (hasura_uuid);


--
-- Name: enemies enemies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enemies
    ADD CONSTRAINT enemies_pkey PRIMARY KEY (id);


--
-- Name: items items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.items
    ADD CONSTRAINT items_pkey PRIMARY KEY (id);


--
-- Name: maps maps_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.maps
    ADD CONSTRAINT maps_pkey PRIMARY KEY (id);


--
-- Name: player_combat_logs player_combat_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player_combat_logs
    ADD CONSTRAINT player_combat_logs_pkey PRIMARY KEY (id);


--
-- Name: player_items player_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player_items
    ADD CONSTRAINT player_items_pkey PRIMARY KEY (id);


--
-- Name: player_profiles player_profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player_profiles
    ADD CONSTRAINT player_profiles_pkey PRIMARY KEY (id);


--
-- Name: player_quests player_quests_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player_quests
    ADD CONSTRAINT player_quests_pkey PRIMARY KEY (id);


--
-- Name: quests quests_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quests
    ADD CONSTRAINT quests_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: hdb_cron_event_invocation_event_id; Type: INDEX; Schema: hdb_catalog; Owner: postgres
--

CREATE INDEX hdb_cron_event_invocation_event_id ON hdb_catalog.hdb_cron_event_invocation_logs USING btree (event_id);


--
-- Name: hdb_cron_event_status; Type: INDEX; Schema: hdb_catalog; Owner: postgres
--

CREATE INDEX hdb_cron_event_status ON hdb_catalog.hdb_cron_events USING btree (status);


--
-- Name: hdb_cron_events_unique_scheduled; Type: INDEX; Schema: hdb_catalog; Owner: postgres
--

CREATE UNIQUE INDEX hdb_cron_events_unique_scheduled ON hdb_catalog.hdb_cron_events USING btree (trigger_name, scheduled_time) WHERE (status = 'scheduled'::text);


--
-- Name: hdb_scheduled_event_status; Type: INDEX; Schema: hdb_catalog; Owner: postgres
--

CREATE INDEX hdb_scheduled_event_status ON hdb_catalog.hdb_scheduled_events USING btree (status);


--
-- Name: hdb_version_one_row; Type: INDEX; Schema: hdb_catalog; Owner: postgres
--

CREATE UNIQUE INDEX hdb_version_one_row ON hdb_catalog.hdb_version USING btree (((version IS NOT NULL)));


--
-- Name: hdb_cron_event_invocation_logs hdb_cron_event_invocation_logs_event_id_fkey; Type: FK CONSTRAINT; Schema: hdb_catalog; Owner: postgres
--

ALTER TABLE ONLY hdb_catalog.hdb_cron_event_invocation_logs
    ADD CONSTRAINT hdb_cron_event_invocation_logs_event_id_fkey FOREIGN KEY (event_id) REFERENCES hdb_catalog.hdb_cron_events(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: hdb_scheduled_event_invocation_logs hdb_scheduled_event_invocation_logs_event_id_fkey; Type: FK CONSTRAINT; Schema: hdb_catalog; Owner: postgres
--

ALTER TABLE ONLY hdb_catalog.hdb_scheduled_event_invocation_logs
    ADD CONSTRAINT hdb_scheduled_event_invocation_logs_event_id_fkey FOREIGN KEY (event_id) REFERENCES hdb_catalog.hdb_scheduled_events(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: player_combat_logs player_combat_logs_enemy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player_combat_logs
    ADD CONSTRAINT player_combat_logs_enemy_id_fkey FOREIGN KEY (enemy_id) REFERENCES public.enemies(id) ON DELETE CASCADE;


--
-- Name: player_combat_logs player_combat_logs_player_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player_combat_logs
    ADD CONSTRAINT player_combat_logs_player_id_fkey FOREIGN KEY (player_id) REFERENCES public.player_profiles(id) ON DELETE CASCADE;


--
-- Name: player_items player_items_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player_items
    ADD CONSTRAINT player_items_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.items(id) ON DELETE CASCADE;


--
-- Name: player_items player_items_player_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player_items
    ADD CONSTRAINT player_items_player_id_fkey FOREIGN KEY (player_id) REFERENCES public.player_profiles(id) ON DELETE CASCADE;


--
-- Name: player_profiles player_profiles_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player_profiles
    ADD CONSTRAINT player_profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: player_quests player_quests_player_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player_quests
    ADD CONSTRAINT player_quests_player_id_fkey FOREIGN KEY (player_id) REFERENCES public.player_profiles(id) ON DELETE CASCADE;


--
-- Name: player_quests player_quests_quest_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player_quests
    ADD CONSTRAINT player_quests_quest_id_fkey FOREIGN KEY (quest_id) REFERENCES public.quests(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

