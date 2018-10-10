DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS nutrition CASCADE;
DROP TABLE IF EXISTS exercise CASCADE;
DROP TABLE IF EXISTS fit_plan;
DROP TABLE IF EXISTS nutri_plan;

CREATE TABLE IF NOT EXISTS users(
	user_id SERIAL PRIMARY KEY,
	user_name VARCHAR(30),
	email VARCHAR,
	password VARCHAR,
	gender VARCHAR(20),
	age INTEGER,
	height INTEGER,
	weight INTEGER,
	calories_target INTEGER
);

CREATE TABLE IF NOT EXISTS nutrition(
	food_id SERIAL PRIMARY KEY,
	food_name VARCHAR,
	food_type VARCHAR,
	food_calories TEXT,
	portion VARCHAR
);

CREATE TABLE IF NOT EXISTS exercise(
	exercise_id SERIAL PRIMARY KEY,
	exercise_name VARCHAR,
	exercise_type VARCHAR,
	exercise_img VARCHAR,
	exercise_major_muscle_group VARCHAR,
	exercise_minor_muscle_group VARCHAR,
	exercise_notes TEXT
);

CREATE TABLE IF NOT EXISTS nutri_plan(
	nutri_plan_id SERIAL PRIMARY KEY,
	nutri_plan_name VARCHAR,
	nutri_plan_description TEXT,
	user_id INTEGER REFERENCES users(user_id),
	food_id INTEGER REFERENCES nutrition(food_id),
	created_date TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS fit_plan(
	fit_plan_id SERIAL PRIMARY KEY,
	fit_plan_name VARCHAR,
	fit_plan_description TEXT,
	user_id INTEGER REFERENCES users(user_id),
	exercise_id INTEGER REFERENCES nutrition(food_id),
	created_date TIMESTAMPTZ
);
