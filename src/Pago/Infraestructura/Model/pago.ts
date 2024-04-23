import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName:"Tarjetas",
    timestamps:false
})
class PagoModel extends Model{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true
    })
    public id_tarjeta!:number

    @Column({
        type:DataType.STRING(15),
        allowNull:false
    })
    public beneficiario!:string

    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    public noTarjeta!:number

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    public cvv!:string
}

export default PagoModel;