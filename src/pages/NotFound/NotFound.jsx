import Card from "../../components/Card/Card"
import './NotFound.css';
export default function NotFound() {
    return (
        <div className="notfound-background">
            <Card styles={['notfound-card']}>
                <h1>Not Found - 404 </h1>
                <p>La ventana buscada no existe. Verifica las rutas de la dirección URL</p>
            </Card>
        </div>
    )
}