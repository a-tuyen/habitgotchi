DROP TABLE IF EXISTS challenge_categories CASCADE;

CREATE TABLE challenge_categories (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL
  
);

DROP TABLE IF EXISTS challenges CASCADE; 

CREATE TABLE challenges (
    id SERIAL PRIMARY KEY NOT NULL,
    description VARCHAR(255) NOT NULL,
    coins INTEGER NOT NULL,
    category_id INTEGER REFERENCES challenge_categories(id) ON DELETE CASCADE
  
);


DROP TABLE IF EXISTS user_challenges CASCADE; 

CREATE TABLE user_challenges (
    id SERIAL PRIMARY KEY NOT NULL,
    created_date DATE NOT NULL DEFAULT NOW(),
    completed  BOOLEAN DEFAULT FALSE,
    challenge_id  INTEGER REFERENCES challenges(id) ON DELETE CASCADE,
    user_id  INTEGER REFERENCES users(id) ON DELETE CASCADE
);


DROP TABLE IF EXISTS daily_challenges CASCADE; 


CREATE TABLE daily_challenges (
    id SERIAL PRIMARY KEY NOT NULL,
    step_goal INTEGER NOT NULL,
    water_goal INTEGER NOT NULL,
    active_min_goal INTEGER NOT NULL,
    coins INTEGER NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    created_date DATE NOT NULL DEFAULT NOW()
);