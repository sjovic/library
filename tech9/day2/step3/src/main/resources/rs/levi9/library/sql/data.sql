INSERT INTO `category`(`name`) VALUES('Java');
INSERT INTO `category`(`name`) VALUES('Spring');
INSERT INTO `category`(`name`) VALUES('Data Structures');

INSERT INTO `book` (`isbn`, `name`, `author`, `publish_date`, `number_of_pages`, `category_id`)
    VALUES ('978-86-7555-308-3', 'Thinking In Java', 'Bruce Eckel', '2007-01-01', 1177, 1);
INSERT INTO `book` (`isbn`, `name`, `author`, `publish_date`, `number_of_pages`, `category_id`)
    VALUES ('978-46-7353-511-4', 'Spring In Action', 'Craig Walls', '2014-01-01', 483, 2);
