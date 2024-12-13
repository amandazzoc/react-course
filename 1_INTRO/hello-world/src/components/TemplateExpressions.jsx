const TemplateExpressions = () => {

const name = "Matheus"
const data = {
    age: 31,
    job: "Programmer"
}

    return (
        <div>
            <h1>Olá {name}, seja bem vindo!</h1>
            <p>Você atua como: {data.job}</p>
        </div>
    )
}

export default TemplateExpressions