import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class Channel extends Model {

    @PrimaryKey
    @Column
    public id!: string;

    @Column
    public name!: string;

    @Column
    public description?: string;

}