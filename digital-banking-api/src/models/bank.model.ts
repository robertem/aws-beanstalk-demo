import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class Bank extends Model {

    @PrimaryKey
    @Column
    public id!: string;

    @Column
    public name!: string;

}