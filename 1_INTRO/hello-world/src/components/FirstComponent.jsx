import MyComponent from "./MyComponent"

const FirstComponent = () => {
    return (
        <>
            {/* Comentário sobre meu primeiro componente */}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent />
        </>
    )
}
export default FirstComponent