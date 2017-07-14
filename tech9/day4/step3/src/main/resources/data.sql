INSERT INTO `category`(`name`) VALUES('Java');
INSERT INTO `category`(`name`) VALUES('Spring');
INSERT INTO `category`(`name`) VALUES('Data Structures');

INSERT INTO `book` (`isbn`, `title`, `author`, `publish_date`, `category_id`) VALUES ('9788675553083', 'Thinking In Java', 'Bruce Eckel', '2007-01-01', 1);
INSERT INTO `book` (`isbn`, `title`, `author`, `publish_date`, `category_id`) VALUES ('9784673535114', 'Spring In Action', 'Craig Walls', '2014-01-01', 2);

INSERT INTO `library`.`role`(`type`) VALUES ('ROLE_ADMIN');
INSERT INTO `library`.`role`(`type`) VALUES ('ROLE_USER');

INSERT INTO `library`.`library_user`(`password`,`username`) VALUES ('user','user');
INSERT INTO `library`.`library_user`(`password`,`username`) VALUES ('admin','admin');

INSERT INTO `library`.`library_user_roles`(`user_id`,`role_id`)VALUES(1, 1);
INSERT INTO `library`.`library_user_roles`(`user_id`,`role_id`)VALUES(1, 2);
INSERT INTO `library`.`library_user_roles`(`user_id`,`role_id`)VALUES(2, 2);
