import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatingRelationsWithTTableRealStateCategoriesAddresses1682515163312 implements MigrationInterface {
    name = 'CreatingRelationsWithTTableRealStateCategoriesAddresses1682515163312'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "street" character varying(45) NOT NULL, "zipCode" character varying(8) NOT NULL, "number" character varying(8), "city" character varying(20) NOT NULL, "state" character varying(2) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "real_state" ("id" SERIAL NOT NULL, "sold" boolean NOT NULL DEFAULT false, "value" numeric(10,2) NOT NULL, "size" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addressId" integer, CONSTRAINT "REL_05088449764d42ca807c1b09fc" UNIQUE ("addressId"), CONSTRAINT "PK_4af22f76f0e9ac2fffe2e89e42f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD CONSTRAINT "FK_05088449764d42ca807c1b09fc1" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" DROP CONSTRAINT "FK_05088449764d42ca807c1b09fc1"`);
        await queryRunner.query(`DROP TABLE "real_state"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
