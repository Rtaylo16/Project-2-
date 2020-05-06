DROP DATABASE IF EXISTS spot_db;

CREATE DATABASE spot_db;


CREATE TABLE track (
    id INT auto_increment,
    name varchar(30),
    artist varchar(30),
    album varchar(30),
    primary key (id)
);

create table search (
 id INT auto_increment,
    searchName varchar(30),
    searchArtist varchar(30),
    searchAlbum varchar(30),
    primary key (id)
);

create table playlists (
id int auto_increment,
playlistID varchar(30) NOT NULL,
primary key (id)
);
USE spot_db;
SELECT * FROM track;
SELECT * FROM search;
SELECT * FROM playlists;



