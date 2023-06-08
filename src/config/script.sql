CREATE SCHEMA `programacion_web` ;

CREATE TABLE `programacion_web`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` NVARCHAR(64) NULL,
  `apellido` NVARCHAR(64) NULL,
  `user` NVARCHAR(16) NULL,
  `password` NVARCHAR(64) NULL,
  `activo` TINYINT NULL,
  PRIMARY KEY (`id_usuario`));

  CREATE TABLE `programacion_web`.`tarea` (
  `id_tarea` INT NOT NULL AUTO_INCREMENT,
  `titulo` NVARCHAR(64) NOT NULL,
  `descripcion` NVARCHAR(64) NOT NULL,
  `id_usuario` INT NOT NULL,
  `estado` TINYINT NOT NULL,
  `fecha_creacion` DATE NOT NULL,
  `categoria` NVARCHAR(64) NOT NULL,
  PRIMARY KEY (`id_tarea`));