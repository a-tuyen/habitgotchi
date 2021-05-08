
DROP TABLE IF EXISTS user_data_readings CASCADE; 

CREATE TABLE user_data_readings (
    id SERIAL PRIMARY KEY NOT NULL,
    calories INTEGER NOT NULL ,
    sleep  INTEGER NOT NULL,
    steps INTEGER NOT NULL,
    water  INTEGER NOT NULL,
    created_date DATE NOT NULL DEFAULT NOW() ,
    user_id  INTEGER REFERENCES users(id) ON DELETE CASCADE
  
);
