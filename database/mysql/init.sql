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


  -- CREATE TABLE `sport5`.`games` (
  -- `gameID` INT NOT NULL,
  -- `team_A_ID` INT NOT NULL,
  -- `team_B_ID` INT NOT NULL,
  -- `team_A_Score` VARCHAR(45) NULL,
  -- `team_B_Score` VARCHAR(45) NULL,
  -- `gameTime` VARCHAR(45) NULL,
  -- PRIMARY KEY (`gameID`));
  



INSERT INTO `sport5`.`teams` (`teamID`, `teamName`, `city`, `mainColor`, `secondaryColor`, `semel`) VALUES ('1', 'Macabi Tel Aviv', 'Tel Aviv', 'yellow', 'blue', 'dsavfsafdcawe32q');
INSERT INTO `sport5`.`teams` (`teamID`, `teamName`, `city`, `mainColor`, `secondaryColor`, `semel`) VALUES ('2', 'Hapoel Tel Aviv', 'Tel Aviv', 'red', 'white', 'dsacavsfavafSwe32q');
INSERT INTO `sport5`.`teams` (`teamID`, `teamName`, `city`, `mainColor`, `secondaryColor`, `semel`) VALUES ('3', 'Macabi Haifa', 'Haifa', 'green', 'white', 'dsacawfvbaetebfe32q');
