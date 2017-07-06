DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

DROP TABLE IF EXISTS `book`;

CREATE TABLE `book` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `isbn` varchar(20) NOT NULL,
  `category_id` int(10) NOT NULL,
  `name` varchar(30) NOT NULL,
  `author` varchar(30) NOT NULL,
  `publish_date` date,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

ALTER TABLE `book` ADD CONSTRAINT `fk_category_book` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

INSERT INTO `category`(`name`) VALUES('Java');
INSERT INTO `category`(`name`) VALUES('Spring');
INSERT INTO `category`(`name`) VALUES('Data Structures');

INSERT INTO `book` (`isbn`, `name`, `author`, `publish_date`, `category_id`) VALUES ('978-86-7555-308-3', 'Thinking In Java', 'Bruce Eckel', '2007-01-01', 1);
INSERT INTO `book` (`isbn`, `name`, `author`, `publish_date`, `category_id`) VALUES ('978-46-7353-511-4', 'Spring In Action', 'Craig Walls', '2014-01-01', 2);