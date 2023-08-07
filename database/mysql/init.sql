CREATE DATABASE  IF NOT EXISTS `sport5` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sport5`;


CREATE TABLE `sport5`.`teams` (
  `teamID` INT NOT NULL,
  `teamName` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NULL,
  `mainColor` VARCHAR(45) NULL,
  `secondaryColor` VARCHAR(45) NULL,
  `semel` VARCHAR(200) NULL,
  PRIMARY KEY (`teamID`));
INSERT INTO `sport5`.`teams` (`teamID`, `teamName`, `city`, `mainColor`, `secondaryColor`, `semel`) VALUES ('1', 'Macabi Tel Aviv', 'Tel Aviv', 'yellow', 'blue', 'dsacawe32q');
INSERT INTO `sport5`.`teams` (`teamID`, `teamName`, `city`, `mainColor`, `secondaryColor`, `semel`) VALUES ('2', 'Macabi Tel Aviv', 'Tel Aviv', 'yellow', 'blue', 'dsacawe32q');
INSERT INTO `sport5`.`teams` (`teamID`, `teamName`, `city`, `mainColor`, `secondaryColor`, `semel`) VALUES ('3', 'Macabi Tel Aviv', 'Tel Aviv', 'yellow', 'blue', 'dsacawe32q');
