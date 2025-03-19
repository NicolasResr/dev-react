export default function Js(props) {

    let brand = {
        name: 'Suporte',
        founded: 2023,
        city:'São Paulo'
    }

    const {city} = brand
    
    return <h1>nome do malandro: {city} {props.age}</h1>
}