DROP DATABASE IF EXISTS spot_db;

CREATE DATABASE spot_db;
USE spot_db;

CREATE TABLE login (
    id INT auto_increment,
    username varchar(30),
    password varchar(30),
    primary key (id)
);

create table playlists (
id int auto_increment,
playlistID varchar(30),

primary key (id)
);

