-- CreateTable
CREATE TABLE "sessions" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "specialClasses" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "hour" TEXT NOT NULL,

    CONSTRAINT "specialClasses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "weight" DECIMAL NOT NULL,
    "height" DECIMAL NOT NULL,
    "objective" TEXT NOT NULL,
    "comments" TEXT,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weeklyClasses" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "weeklyClasses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weeklySchedules" (
    "id" SERIAL NOT NULL,
    "weeklyClassId" INTEGER NOT NULL,
    "weekday" TEXT NOT NULL,
    "hour" TEXT NOT NULL,

    CONSTRAINT "weeklySchedules_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sessions_token_key" ON "sessions"("token");

-- CreateIndex
CREATE UNIQUE INDEX "students_name_key" ON "students"("name");

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "specialClasses" ADD CONSTRAINT "specialClasses_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "specialClasses" ADD CONSTRAINT "specialClasses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "weeklyClasses" ADD CONSTRAINT "weeklyClasses_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "weeklyClasses" ADD CONSTRAINT "weeklyClasses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "weeklySchedules" ADD CONSTRAINT "weeklySchedules_weeklyClassId_fkey" FOREIGN KEY ("weeklyClassId") REFERENCES "weeklyClasses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
