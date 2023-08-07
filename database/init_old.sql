

CREATE DATABASE IF NOT EXISTS sport5;
USE sport5;

DROP TABLE IF EXISTS teams;


START TRANSACTION;

CREATE TABLE `sport5`.`teams` (
  `teamID` INT NOT NULL,
  `teamName` VARCHAR(45) NOT NULL,
  `noy` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NULL,
  `mainColor` VARCHAR(45) NULL,
  `secondaryColor` VARCHAR(45) NULL,
  `semel` VARCHAR(200) NULL,
  PRIMARY KEY (`teamID`));



INSERT INTO `sport5`.`teams` (`teamID`, `teamName`,`noy`, `city`, `mainColor`, `secondaryColor`, `semel`) VALUES ('1', 'Macabi Tel Aviv', 'Tel Aviv', 'Tel Aviv', 'yellow', 'blue', 'dsacawe32q');
INSERT INTO `sport5`.`teams` (`teamID`, `teamName`,`noy`, `city`, `mainColor`, `secondaryColor`, `semel`) VALUES ('1', 'Macabi Tel Aviv', 'Tel Aviv', 'Tel Aviv', 'yellow', 'blue', 'dsacawe32q');
INSERT INTO `sport5`.`teams` (`teamID`, `teamName`,`noy`, `city`, `mainColor`, `secondaryColor`, `semel`) VALUES ('1', 'Macabi Tel Aviv', 'Tel Aviv', 'Tel Aviv', 'yellow', 'blue', 'dsacawe32q');
INSERT INTO `sport5`.`teams` (`teamID`, `teamName`,`noy`, `city`, `mainColor`, `secondaryColor`, `semel`) VALUES ('1', 'Macabi Tel Aviv', 'Tel Aviv', 'Tel Aviv', 'yellow', 'blue', 'dsacawe32q');
INSERT INTO `sport5`.`teams` (`teamID`, `teamName`,`noy`, `city`, `mainColor`, `secondaryColor`, `semel`) VALUES ('1', 'Macabi Tel Aviv', 'Tel Aviv', 'Tel Aviv', 'yellow', 'blue', 'dsacawe32q');
