import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Length,
  Model,
  PrimaryKey,
  Table
} from "sequelize-typescript"
import shortid from "shortid"

import Board from "./Board"
import CheckList from "./CheckList"

@Table
class Task extends Model {
  @PrimaryKey
  @Default(() => shortid.generate())
  @Column
  id!: string

  @Length({ min: 1, max: 30 })
  @AllowNull(false)
  @Column
  name!: string

  @Default(false)
  @Column
  isCompleted!: boolean

  @Column({ type: DataType.SMALLINT })
  order!: number

  @ForeignKey(() => Board)
  @Column
  boardId?: string

  @ForeignKey(() => CheckList)
  @Column
  checkListId?: string

  @BelongsTo(() => Board)
  board?: Board

  @BelongsTo(() => CheckList)
  checkList?: CheckList
}

export default Task
