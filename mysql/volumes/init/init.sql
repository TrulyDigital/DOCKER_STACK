-- Asegura que el usuario 'trulydigital' pueda conectarse desde _gateway
CREATE USER IF NOT EXISTS 'trulydigital'@'_gateway' IDENTIFIED BY '..1opr0m3T0..';

-- Le otorga permisos (restringido a la base de datos creada automáticamente)
GRANT ALL PRIVILEGES ON trulydigital_blog.* TO 'trulydigital'@'_gateway' WITH GRANT OPTION;

-- Asegura el uso de mysql_native_password (solo si necesario para compatibilidad con clientes más antiguos)
ALTER USER 'trulydigital'@'_gateway' IDENTIFIED WITH mysql_native_password BY '..1opr0m3T0..';

-- Aplica los cambios
FLUSH PRIVILEGES;