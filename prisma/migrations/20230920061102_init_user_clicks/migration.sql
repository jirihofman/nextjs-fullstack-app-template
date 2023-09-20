-- CreateTable
CREATE TABLE "user_clicks" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_clicks_pkey" PRIMARY KEY ("id")
);
