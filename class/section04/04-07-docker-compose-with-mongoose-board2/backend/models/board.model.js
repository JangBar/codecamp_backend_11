import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
  writer : String,
  title : String,
  contents : String
})

export const Board = mongoose.model("Board",boardSchema) // 지금은 모델이라부름  DB 저장되면 ==> 컬렉션 