import FlexiRexImg from './img/FlexiRex.jpg';
import MoldeCorazonImg from './img/MoldeCorazon.jpg';
import MacetaAztecaImg from './img/MacetaAzteca.jpg';
import CilpPizzaImg from './img/ClipPizza.jpg';
import CargadorTeslaImg from './img/CargadorTesla.jpg';
import AbridorBotellasImg from './img/AbridorBotellas.jpg';

const data = [
    {
        id: '1',
        img: FlexiRexImg,
        nombre: "Flexi Rex",
        descripcion: "T-Rex flexible decorativo de 7cm de alto",
        precio: 700,
        category: "pla",
        stock: 20
    },
    {
        id: '2',
        img: MoldeCorazonImg,
        nombre: "Molde de corazón",
        descripcion: "Molde con forma de corazón para velas",
        precio: 500,
        category: "pla",
        stock: 12
    },
    {
        id: '3',
        img: MacetaAztecaImg,
        nombre: "Maceta azteca",
        descripcion: "Maceta multi nivel con forma de pirámide azteca",
        precio: 3000,
        category: "petg",
        stock: 6
    },
    {
        id: '4',
        img: CilpPizzaImg,
        nombre: "Clips con forma de pizza",
        descripcion: "8 Clips para papeles con forma de pizza",
        precio: 700,
        category: "petg",
        stock: 9
    },
    {
        id: '5',
        img: CargadorTeslaImg,
        nombre: "Cargador Tesla",
        descripcion: "Base para cargador con forma de super cargador tesla",
        precio: 850,
        category: "pla",
        stock: 15
    },
    {
        id: '6',
        img: AbridorBotellasImg,
        nombre: "Abridor de botellas con contador",
        descripcion: "Destapa botellas de vidrio con contador incluido",
        precio: 2000,
        category: "petg",
        stock: 8
    }
]

export default data;