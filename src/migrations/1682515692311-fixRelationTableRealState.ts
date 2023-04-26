import { MigrationInterface, QueryRunner } from "typeorm";

export class FixRelationTableRealState1682515692311 implements MigrationInterface {
    name = 'FixRelationTableRealState1682515692311'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" ADD "categoryId" integer`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD CONSTRAINT "FK_a9490420a41bd06f69da8d4e946" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" DROP CONSTRAINT "FK_a9490420a41bd06f69da8d4e946"`);
        await queryRunner.query(`ALTER TABLE "real_state" DROP COLUMN "categoryId"`);
    }

}
