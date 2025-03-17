-- Oracle XE Version 18.4.0



/*
  Consultar y eliminar función de verificación de contraseñas
*/
ALTER PROFILE DEFAULT LIMIT PASSWORD_VERIFY_FUNCTION NULL;
SELECT * FROM dba_profiles WHERE resource_name LIKE 'PASSWORD%';

/*
  Crear un rol administrativo
*/
CREATE ROLE admin_role;

/*
  Asignar permisos administrativos al rol sin acceso a datos
*/
GRANT CREATE USER, ALTER USER, DROP USER TO admin_role;
GRANT CREATE TABLESPACE, ALTER TABLESPACE, DROP TABLESPACE TO admin_role;
GRANT CREATE SESSION TO admin_role;

/*
  Crear un usuario administrador
*/
CREATE USER awesomelab IDENTIFIED BY "DragonBallDaima4202";
GRANT admin_role TO awesomelab;

/*
  Permitir conexiones remotas del nuevo usuario admin
*/
ALTER USER awesomelab ACCOUNT UNLOCK;
ALTER USER awesomelab IDENTIFIED BY "DragonBallDaima4202";
