-- Creates one database per microservice, mirroring the RDS setup in AWS.
-- Runs once when the postgres container is first initialised.

CREATE DATABASE auth_db;
CREATE DATABASE project_db;
CREATE DATABASE testcase_db;
CREATE DATABASE testrun_db;
