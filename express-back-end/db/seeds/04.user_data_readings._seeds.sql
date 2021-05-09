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


INSERT INTO user_data_readings(calories,sleep,steps,water,created_date,user_id) VALUES(800,8,5000,10,'2021-05-01',1);
INSERT INTO user_data_readings(calories,sleep,steps,water,created_date,user_id) VALUES(780,8,5300,10,'2021-05-02',1);
INSERT INTO user_data_readings(calories,sleep,steps,water,created_date,user_id) VALUES(800,7,7000,10,'2021-05-03',1);
INSERT INTO user_data_readings(calories,sleep,steps,water,created_date,user_id) VALUES(720,8,8500,10,'2021-05-04',1);
INSERT INTO user_data_readings(calories,sleep,steps,water,created_date,user_id) VALUES(800,8,9200,10,'2021-05-05',1);
INSERT INTO user_data_readings(calories,sleep,steps,water,created_date,user_id) VALUES(800,6,2800,10,'2021-05-06',1);
INSERT INTO user_data_readings(calories,sleep,steps,water,created_date,user_id) VALUES(850,8,4500,10,'2021-05-07',1);
INSERT INTO user_data_readings(calories,sleep,steps,water,created_date,user_id) VALUES(730,8,8900,10,'2021-05-08',1);
INSERT INTO user_data_readings(calories,sleep,steps,water,created_date,user_id) VALUES(560,8,9000,10,'2021-05-09',1);
INSERT INTO user_data_readings(calories,sleep,steps,water,created_date,user_id) VALUES(890,8,15000,10,'2021-05-10',1);
INSERT INTO user_data_readings(calories,sleep,steps,water,created_date,user_id) VALUES(800,8,10000,10,'2021-05-11',1);
INSERT INTO user_data_readings(calories,sleep,steps,water,created_date,user_id) VALUES(720,8,3000,10,'2021-05-12',1);
INSERT INTO user_data_readings(calories,sleep,steps,water,created_date,user_id) VALUES(730,8,7500,10,'2021-05-13',1);
INSERT INTO user_data_readings(calories,sleep,steps,water,created_date,user_id) VALUES(800,6,6000,10,'2021-05-14',1);
INSERT INTO user_data_readings(calories,sleep,steps,water,created_date,user_id) VALUES(780,7,8000,10,'2021-05-15',1);