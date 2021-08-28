import { Tema } from "./Tema"
import { user } from "./User"

export class Postagem{
    public id: number
    public titulo: string 
    public texto: string
    public date: Date
    public usuario: user
    public tema: Tema
}