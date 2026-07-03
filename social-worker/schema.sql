-- MedCore Jamiyat (social) — D1 schema
CREATE TABLE IF NOT EXISTS users (
  id       TEXT PRIMARY KEY,      -- provider-based stable id (google:sub / tg:id)
  email    TEXT,
  name     TEXT NOT NULL,
  avatar   TEXT,                  -- external URL (Google picture / tg photo)
  bio      TEXT DEFAULT '',
  created  INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS follows (
  follower_id TEXT NOT NULL,
  target_id   TEXT NOT NULL,
  created     INTEGER NOT NULL,
  PRIMARY KEY (follower_id, target_id)
);
CREATE INDEX IF NOT EXISTS idx_follows_target ON follows(target_id);

CREATE TABLE IF NOT EXISTS posts (
  id       TEXT PRIMARY KEY,
  author_id TEXT NOT NULL,
  type     TEXT NOT NULL,         -- 'video' | 'material'
  title    TEXT NOT NULL,
  descr    TEXT DEFAULT '',
  yt_id    TEXT,                  -- YouTube video id (video)
  link     TEXT,                  -- external material link (material)
  thumb    TEXT,                  -- thumbnail url
  tag      TEXT DEFAULT '',       -- optional subject tag
  created  INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_posts_author ON posts(author_id);
CREATE INDEX IF NOT EXISTS idx_posts_created ON posts(created);

CREATE TABLE IF NOT EXISTS likes (
  user_id TEXT NOT NULL,
  post_id TEXT NOT NULL,
  created INTEGER NOT NULL,
  PRIMARY KEY (user_id, post_id)
);
CREATE INDEX IF NOT EXISTS idx_likes_post ON likes(post_id);

CREATE TABLE IF NOT EXISTS comments (
  id       TEXT PRIMARY KEY,
  post_id  TEXT NOT NULL,
  author_id TEXT NOT NULL,
  text     TEXT NOT NULL,
  created  INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_comments_post ON comments(post_id);

CREATE TABLE IF NOT EXISTS messages (
  id      TEXT PRIMARY KEY,
  from_id TEXT NOT NULL,
  to_id   TEXT NOT NULL,
  text    TEXT NOT NULL,
  created INTEGER NOT NULL,
  seen    INTEGER DEFAULT 0
);
CREATE INDEX IF NOT EXISTS idx_msg_pair ON messages(from_id, to_id, created);
CREATE INDEX IF NOT EXISTS idx_msg_to ON messages(to_id, seen);
