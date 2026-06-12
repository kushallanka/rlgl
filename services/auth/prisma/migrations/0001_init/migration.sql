CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "role" TEXT NOT NULL DEFAULT 'TESTER',
    "systemPermissions" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "RefreshToken" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "hash" TEXT NOT NULL,
    "revoked" BOOLEAN NOT NULL DEFAULT false,
    "expiresAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "ProjectRole" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "ProjectPermission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,
    "action" TEXT NOT NULL,
    CONSTRAINT "ProjectPermission_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "ProjectRole" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "ProjectUserRole" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,
    CONSTRAINT "ProjectUserRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ProjectUserRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "ProjectRole" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "IdempotencyKey" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "endpoint" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "statusCode" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "RefreshToken_hash_key" ON "RefreshToken"("hash");
CREATE UNIQUE INDEX "ProjectRole_projectId_name_key" ON "ProjectRole"("projectId", "name");
CREATE UNIQUE INDEX "ProjectPermission_roleId_action_key" ON "ProjectPermission"("roleId", "action");
CREATE UNIQUE INDEX "ProjectUserRole_projectId_userId_roleId_key" ON "ProjectUserRole"("projectId", "userId", "roleId");
CREATE UNIQUE INDEX "IdempotencyKey_key_service_key" ON "IdempotencyKey"("key", "service");
