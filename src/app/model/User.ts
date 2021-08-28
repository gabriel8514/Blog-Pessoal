// Nessa parte é vinculado com o meu user. 

import { Postagem } from "./Postagem"

export class user { // cria uma classe 
    public id: number 
    public nome: string 
    public usuario: string
    public senha: string
    public dataNascimento: Date 
    public foto: string
    public tipo: string 
    public postagem: Postagem[]
}