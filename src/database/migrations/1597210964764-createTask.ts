import { MigrationInterface, QueryRunner } from 'typeorm'

export class createTask1597210964764 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tasks" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, 
      "collocation" integer NOT NULL,
      "frame_id" uuid NOT NULL,
       PRIMARY KEY ("id"), 
       FOREIGN KEY ("frame_id") REFERENCES frames("id"))`
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "tasks"')
  }
}
