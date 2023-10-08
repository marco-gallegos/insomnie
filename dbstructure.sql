-- KISS
-- not thinked to handle millions of records just store our state so performance/structure is not a deal, simplicity its

-- considerations:
-- workspaces
-- collections
-- store urls
-- env variables

CREATE TABLE workspaces (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(250) NOT NULL,

    createdAt DATETIME NOT NULL default current_timestamp,
    updatedAt DATETIME NOT NULL default current_timestamp,
    -- soft deleted by default
    deletedAt DATETIME NOT NULL default current_timestamp
);

CREATE TABLE collections (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(250),
    workspace INTEGER NOT NULL,


    createdAt DATETIME NOT NULL default current_timestamp,
    updatedAt DATETIME NOT NULL default current_timestamp,
    -- soft deleted by default
    deletedAt DATETIME NOT NULL default current_timestamp
);

-- store every request
CREATE TABLE requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    path   VARCHAR(250) NOT NULL,
    type   VARCHAR(10) NOT NULL,
    headers   TEXT,
    body   TEXT,
    params TEXT,
    authentication_type VARCHAR(10),
    authentication_token VARCHAR(250),
    -- 1 is default collection on general workspace
    collection INTEGER NOT NULL DEFAULT 1,

    createdAt DATETIME NOT NULL default current_timestamp,
    updatedAt DATETIME NOT NULL default current_timestamp,
    -- soft deleted by default
    deletedAt DATETIME NOT NULL default current_timestamp
);


-- configuration is unique and global on every project
CREATE TABLE configuration (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url VARCHAR(250) NOT NULL,
    -- this potitentially could have a enum to suport graphql, soap. to support grpc we need a diferent codebase
    type VARCHAR(100) NOT NULL DEFAULT "rest",
    environment_variables TEXT
);


-- initial data on every migration db creation
INSERT INTO workspaces (
    name
) VALUES ( 'General' );

INSERT INTO collections (
    name,
    workspace
) VALUES ( 'Default', 1 )
