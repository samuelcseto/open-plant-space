-- CreateTable
CREATE TABLE "ExternalFactor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "MachineExternalFactor" (
    "machineId" INTEGER NOT NULL,
    "factorId" INTEGER NOT NULL,
    "isProducer" BOOLEAN NOT NULL,
    "isSensitive" BOOLEAN NOT NULL,
    "intensity" INTEGER,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,

    PRIMARY KEY ("machineId", "factorId"),
    CONSTRAINT "MachineExternalFactor_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "Machine" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MachineExternalFactor_factorId_fkey" FOREIGN KEY ("factorId") REFERENCES "ExternalFactor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MachineExternalFactor_factorId_fkey" FOREIGN KEY ("factorId") REFERENCES "ExternalFactor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
