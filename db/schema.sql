DROP DATABASE IF EXISTS spot_db;

CREATE DATABASE spot_db;
USE spot_db;

CREATE TABLE track (
    id INT auto_increment,
    name varchar(30),
    artist varchar(30),
    primary key (id)
);

create table playlists (
id int auto_increment,
playlistID varchar(30),

primary key (id)
);

SELECT * FROM playlists;

