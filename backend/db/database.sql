CREATE DATABASE gazdinet
DEFAULT CHARACTER SET utf8
COLLATE utf8_hungarian_ci;

CREATE TABLE animal(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    age INT,
    posted DATE,
    type VARCHAR(255),
    status tinyint
);

CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE,
    role VARCHAR(255),
    created_at timestamp
);

CREATE TABLE adopt(
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT FOREIGN KEY, 
    animal_id INT FOREIGN KEY,
    adopt_date DATE
);



alter table adopt
ADD FOREIGN KEY(user_id)
REFERENCES users(id);

alter TABLE adopt
ADD FOREIGN KEY (animal_id)
REFERENCES animals(id);
