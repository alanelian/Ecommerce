import { useState } from "react";
import Swal from "sweetalert2";
import '../css/Form.css'

const Form = ({ completoDatos }) => {
    const [name, setName] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [telefono, setTelefono] = useState("");
    const [localidad, setLocalidad] = useState("");
    const [direccion, setDireccion] = useState("");

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'white',
        customClass: {
            popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        background: "#dc3545",
        color: "white"
    })

    const validate = (event) => {
        event.preventDefault()
        if (!name || !telefono || !email || !emailConfirm || !localidad || !direccion || !apellido) {
            Toast.fire({
                icon: 'warning',
                title: 'Complete los datos'
            })
        } else if (email !== emailConfirm) {
            Toast.fire({
                icon: 'question',
                title: 'Los email no coinciden',
                background: "#87adbd"
            })
        } else {
            completoDatos(name, telefono, email, emailConfirm, localidad, direccion, apellido)
        }
    }
    return (
        <form>
            <h2>Complete los datos para generar la orden de compra</h2>
            <div className="container">
                <div className="row">
                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                    <input type="text" name="nombre" id="nombre" className="form-control" value={name} onChange={(event) => setName(event.target.value)} required />
                    <label htmlFor="apellido" className="form-label">Apellido:</label>
                    <input type="text" name="apellido" id="apellido" className="form-control" value={apellido} onChange={(event) => setApellido(event.target.value)} required />
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="text" name="email" id="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} required />
                    <label htmlFor="emailConfirm" className="form-label">Confirmar email:</label>
                    <input type="text" name="emailConfirm" id="emailConfirm" className="form-control" value={emailConfirm} onChange={(event) => setEmailConfirm(event.target.value)} required />
                    <label htmlFor="telefono" className="form-label">Telefono:</label>
                    <input type="text" name="telefono" id="telefono" className="form-control" value={telefono} onChange={(event) => setTelefono(event.target.value)} required maxLength="11" />
                    <label htmlFor="localidad" className="form-label">Localidad:</label>
                    <input type="text" name="localidad" id="localidad" className="form-control" value={localidad} onChange={(event) => setLocalidad(event.target.value)} required />
                    <label htmlFor="direccion" className="form-label">Direccion:</label>
                    <input type="text" name="direccion" id="direccion" className="form-control" value={direccion} onChange={(event) => setDireccion(event.target.value)} required />
                </div>
                {
                    validate
                        ? <button onClick={validate} className="btn btn-success confirmarDatos">Confirmar datos personales</button>
                        : null
                }
            </div>
        </form>
    )
}

export default Form;