import React , {Component} from 'react'
import "./App.css"

class Map extends Component{

  state = {
    Amigos: [{
      nome: "Ana Beatriz",
      comida:"Estrogonof",
      profissão:"Musico"
    },{
      nome:"Anny",
      comida:"Carne Vermelha",
      profissão:"Professor"
    },{
      nome:"Gabriela",
      comida:"Espedinho de frango",
      profissão:"Advogado"
    },{
      nome:"Gabrielle",
      comida:"Macarrão",
      profissão:"Desenvolvedor"
    },{
      nome:"Marcos",
      comida:"Fricassê",
      profissão:"Pedagogo"
    },{
      nome:"Josiane",
      comida:"Arroz",
      profissão:"Telemarketing"
    }]
  }

  render(){
    return(
      <div>
        {this.state.Amigos.map((item) => (
          <div>
            <h1>Hello me chamo {item.nome}</h1>
            <ul>
            <h2>{item.comida}</h2>
            <p>{item.profissão}</p>
            </ul>
          </div>
        ))}

      </div>
    )
  }
}

export default Map