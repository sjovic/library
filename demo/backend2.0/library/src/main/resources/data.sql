
INSERT INTO `newlibrary`.`category`(`name`) VALUES('Java');
INSERT INTO `newlibrary`.`category`(`name`) VALUES('Spring');
INSERT INTO `newlibrary`.`category`(`name`) VALUES('Data Structures');

INSERT INTO `newlibrary`.`book` (`isbn`, `title`, `author`, `publish_date`, `category_id`) VALUES ('9788675553083', 'Thinking In Java', 'Bruce Eckel', '2007-01-01', 1);
INSERT INTO `newlibrary`.`book` (`isbn`, `title`, `author`, `publish_date`, `category_id`) VALUES ('9784673535114', 'Spring In Action', 'Craig Walls', '2014-01-01', 2);

INSERT INTO `newlibrary`.`role`(`role`) VALUES ('ADMIN_ROLE');
INSERT INTO `newlibrary`.`role`(`role`) VALUES ( 'USER_ROLE');

INSERT INTO `newlibrary`.`user`(`password`,`username`) VALUES ( '$2a$10$EA0CfDnAXK/zgGUJ3EAxS.vcrJVILZv8Yg8eZ3zAxCYZRS2u7qjaG','admin');
INSERT INTO `newlibrary`.`user`(`password`,`username`) VALUES ( '$2a$10$8pC3Vj/fRnxr3CHLAkJoxeNtabfb8I3AXN0MQa5j7/VKMNDJQXIP6','user');

INSERT INTO `newlibrary`.`user_role`(`user_id`,`role_id`)VALUES(1, 1);
INSERT INTO `newlibrary`.`user_role`(`user_id`,`role_id`)VALUES(1, 2);
INSERT INTO `newlibrary`.`user_role`(`user_id`,`role_id`)VALUES(2, 2);