
INSERT INTO challenge_categories (name) VALUES ('Low Intensity');
INSERT INTO challenge_categories (name) VALUES ('Medium Intensity');
INSERT INTO challenge_categories (name) VALUES ('High Intensity');


INSERT INTO challenges (description, coins) VALUES ('Your buddy is feeling blue, take them for a 500 step walk to brighten their day', 100, 1);
INSERT INTO challenges (description, coins) VALUES ('Your buddy brought you a gift of new shoes! Walk 600 steps to break them in', 200, 1);
INSERT INTO challenges (description, coins) VALUES ("You've volunteered to model with you buddy. Walk the 200 step runway with your best model face on", 100, 1);
INSERT INTO challenges (description, coins) VALUES ('Your buddy is challenging you to a game of "Leap Frog"! Jump 30 times to win!', 100, 2);
INSERT INTO challenges (description, coins) VALUES ('Teach your buddy a new workout move! Do 30 jumping jacks to demonstrate', 200, 2);
INSERT INTO challenges (description, coins) VALUES ("You're stuck in a pile of slime! Run on the spot for 5 minutes to break free", 100, 3);
INSERT INTO challenges (description, coins) VALUES ('A herd of buffalo are stampeding towards you! Do 10 minutes of Active Zone Minutes to outrun them', 200, 3);


INSERT INTO user_challenges (created_date, challenge_id, user_id) VALUES (2021-04-03, TRUE, 1, 1);
INSERT INTO user_challenges (created_date, challenge_id, user_id) VALUES (2021-04-08, TRUE, 2, 1);
INSERT INTO user_challenges (created_date, challenge_id, user_id) VALUES (2021-04-10, TRUE, 3, 1);
INSERT INTO user_challenges (created_date, challenge_id, user_id) VALUES (2021-04-14, TRUE, 4, 1);
INSERT INTO user_challenges (created_date, challenge_id, user_id) VALUES (2021-04-20, TRUE, 5, 1);
INSERT INTO user_challenges (created_date, challenge_id, user_id) VALUES (2021-04-30, TRUE, 6, 1);
INSERT INTO user_challenges (created_date, challenge_id, user_id) VALUES (NOW(), 7, 1);


INSERT INTO daily_challenges (step_goal, water_goal, active_min_goal, coins, user_id) VALUES (6000, 8, 10, 200, 1, NOW());
INSERT INTO daily_challenges (step_goal, water_goal, active_min_goal, coins, user_id) VALUES (8000, 8, 20, 200, 1, NOW());
INSERT INTO daily_challenges (step_goal, water_goal, active_min_goal, coins, user_id) VALUES (10000, 8, 30, 200, 1, NOW());
