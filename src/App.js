import React , {Component} from 'react'
import "./App.css"

class Map extends Component{

  state = {
    Amigos: [{
      nome: "Ana Beatriz",
      comida:"Estrogonof",
      profissiçao:"Musico"
    },{
      nome:"Anny",
      comida:"Carne Vermelha",
      profissiçao:"Professor"
    },{
      nome:"Gabriela",
      comida:"Espedinho de frango",
      profissiçao:"Advogado"
    },{
      nome:"Gabrielle",
      comida:"Macarrão",
      profissiçao:"Desenvolvedor"
    },{
      nome:"Marcos",
      comida:"Fricassê",
      profissiçao:"Pedagogo"
    },{
      nome:"Josiane",
      comida:"Arroz",
      profissiçao:"Telemarketing"
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
            <p>{item.profissiçao}</p>
            </ul>
          </div>
        ))}

      </div>
    )
  }
}

export default Map