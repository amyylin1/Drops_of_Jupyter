
CREATE TABLE "Individual" (
    "ID" 		VARCHAR(12)   	NOT NULL,
    "Age" 		INT   			NOT NULL,
    "Gender" 	INT   			NOT NULL,
    "Race" 		INT   			NOT NULL,
    "Education" INT   			NOT NULL,
    "Region" 	INT   			NOT NULL,
    CONSTRAINT "pk_Individual" PRIMARY KEY ("ID")
);

CREATE TABLE "General_Health_Status" (
    "ID" 		VARCHAR(12)   	NOT NULL,
    "Diabetes" 	VARCHAR(5)   	NOT NULL,
    "Weight" 	INT   			NOT NULL,
    "BMI" 		VARCHAR(100)   	NOT NULL,
    CONSTRAINT "pk_General_Health_Status" PRIMARY KEY ("ID")
);

CREATE TABLE "Gender" (
    "GCode" 	INT   			NOT NULL,
    "Gender" 	VARCHAR(20)   	NOT NULL,
    CONSTRAINT "pk_Gender" PRIMARY KEY ("GCode")
);

CREATE TABLE "Race" (
    "Rcode" 	INT   			NOT NULL,
    "Race" 		VARCHAR(35)   	NOT NULL,
    CONSTRAINT "pk_Race" PRIMARY KEY ("Rcode")
);

CREATE TABLE "Education" (
    "Ecode" 	INT   			NOT NULL,
    "Education" VARCHAR(120)   	NOT NULL,
    CONSTRAINT "pk_Education" PRIMARY KEY ("Ecode")
);

CREATE TABLE "Region" (
    "Region_Code" 	INT   			NOT NULL,
    "Region" 		VARCHAR(9)   	NOT NULL,
    CONSTRAINT "pk_Region" PRIMARY KEY ("Region_Code")
);

ALTER TABLE "Individual" ADD CONSTRAINT "fk_Individual_Gender" FOREIGN KEY("Gender")
REFERENCES "Gender" ("GCode");

ALTER TABLE "Individual" ADD CONSTRAINT "fk_Individual_Race" FOREIGN KEY("Race")
REFERENCES "Race" ("Rcode");

ALTER TABLE "Individual" ADD CONSTRAINT "fk_Individual_Education" FOREIGN KEY("Education")
REFERENCES "Education" ("Ecode");

ALTER TABLE "Individual" ADD CONSTRAINT "fk_Individual_Region" FOREIGN KEY("Region")
REFERENCES "Region" ("Region_Code");

ALTER TABLE "General_Health_Status" ADD CONSTRAINT "fk_General_Health_Status_ID" FOREIGN KEY("ID")
REFERENCES "Individual" ("ID");

