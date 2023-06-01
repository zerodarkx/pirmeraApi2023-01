CREATE SCHEMA `programacion_web` ;

CREATE TABLE `programacion_web`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` NVARCHAR(64) NULL,
  `apellido` NVARCHAR(64) NULL,
  `user` NVARCHAR(16) NULL,
  `password` NVARCHAR(64) NULL,
  `activo` TINYINT NULL,
  PRIMARY KEY (`id_usuario`));