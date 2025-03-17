-- Oracle XE Version 18.4.0


/*

  Crear usuario
  DEFAULT TABLESPACE users → Usa el tablespace predeterminado.
  TEMPORARY TABLESPACE temp → Usa un espacio temporal.
  QUOTA UNLIMITED ON users → Permite al usuario usar espacio en el tablespace.

*/
CREATE USER poc IDENTIFIED BY "P0c523011alex"
DEFAULT TABLESPACE users
TEMPORARY TABLESPACE temp
QUOTA UNLIMITED ON users;

/*

  El usuario puede crear objetos en su esquema
  CONNECT → Permite conexión a la base de datos.
  RESOURCE → Permite crear objetos como tablas, vistas, índices y procedimientos.

*/
GRANT CONNECT, RESOURCE TO poc;

/*
  Permisos adicionales
*/
GRANT CREATE SESSION TO poc;            -- Permitir conexión a la base
GRANT CREATE TABLE TO poc;              -- Crear tablas
GRANT CREATE VIEW TO poc;               -- Crear vistas
GRANT CREATE PROCEDURE TO poc;          -- Crear procedimientos almacenados
GRANT CREATE SEQUENCE TO poc;           -- Crear secuencias
GRANT CREATE TRIGGER TO poc;            -- Crear triggers
GRANT CREATE SYNONYM TO poc;            -- Crear sinónimos
GRANT CREATE TYPE TO poc;               -- Crear tipos personalizados
GRANT CREATE MATERIALIZED VIEW TO poc;  -- Crear vistas materializadas

/*
  Verificar los permisos del usario
*/
SELECT * FROM USER_SYS_PRIVS WHERE USERNAME = 'poc';
SELECT * FROM USER_ROLE_PRIVS WHERE USERNAME = 'poc';
SELECT * FROM USER_TAB_PRIVS WHERE GRANTEE = 'poc';
