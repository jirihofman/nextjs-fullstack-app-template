/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    // See: https://github.com/nextauthjs/adapters/blob/canary/packages/typeorm-legacy/tests/mysql/schema.sql
    // Not the latest though.
    // See the latest at: https://github.com/nextauthjs/adapters/blob/main/packages/typeorm-legacy/src/entities.ts
    await knex.schema.raw(`
CREATE TABLE users (
  id varchar(36) NOT NULL,
  name varchar(255) DEFAULT NULL,
  email varchar(255) DEFAULT NULL,
  image varchar(255) DEFAULT NULL,
  emailVerified varchar(255) DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY IDX_97672ac88f789774dd47f7c8be (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`);
    await knex.schema.raw(`
CREATE TABLE accounts (
  id varchar(36) NOT NULL,
  userId varchar(255) NOT NULL,
  type varchar(255) NOT NULL,
  provider varchar(255) NOT NULL,
  providerAccountId varchar(255) NOT NULL,
  expires_at bigint DEFAULT NULL,
  token_type varchar(255) DEFAULT NULL,
  scope varchar(255) DEFAULT NULL,
  id_token text DEFAULT NULL,
  session_state varchar(255) DEFAULT NULL,
  refresh_token text DEFAULT NULL,
  access_token text DEFAULT NULL,
  PRIMARY KEY (id),
  KEY FK_3aa23c0a6d107393e8b40e3e2a6 (userId),
  CONSTRAINT FK_3aa23c0a6d107393e8b40e3e2a6 FOREIGN KEY (userId) REFERENCES users (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`);
    await knex.schema.raw(`
CREATE TABLE sessions (
  id varchar(36) NOT NULL,
  sessionToken varchar(255) NOT NULL,
  userId varchar(255) NOT NULL,
  expires varchar(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY IDX_8b5e2ec52e335c0fe16d7ec358 (sessionToken),
  KEY FK_57de40bc620f456c7311aa3a1e6 (userId),
  CONSTRAINT FK_57de40bc620f456c7311aa3a1e6 FOREIGN KEY (userId) REFERENCES users (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`);
    await knex.schema.raw(`
CREATE TABLE verification_tokens (
  id varchar(36) NOT NULL,
  token varchar(255) NOT NULL,
  identifier varchar(255) NOT NULL,
  expires varchar(255) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.raw('drop table if exists accounts;');
    await knex.raw('drop table if exists sessions;');
    await knex.raw('drop table if exists verification_tokens;');
    await knex.raw('update gamebook set user_id = null where user_id is not null');
    await knex.raw('ALTER TABLE gamebook DROP FOREIGN KEY gamebook_FK');
    await knex.raw('drop table if exists users;');
};
