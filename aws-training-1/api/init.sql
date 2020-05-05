CREATE DATABASE votes IF EXISTS ;

CREATE TABLE vote IF EXISTS
(
    id                   INT    NOT NULL,
    vote                 INT    NOT NULL,
    PRIMARY KEY (id)
);
