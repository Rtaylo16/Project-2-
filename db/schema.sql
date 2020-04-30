CREATE database spot_db;
use spot_db;

create table login (
    id INT auto_increment,
    username varchar(30),
    password varchar(30),
    primary key (id)
)