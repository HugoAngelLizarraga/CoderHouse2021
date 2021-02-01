import React from 'react'
import './Footer.css'

function Footer(){
    return(
        <div className="footerarea">
             <div className="footerarea__top">
                 <p>Back to top</p>
             </div>
             <div className="footerarea__links">
                <div className="footerarea__linkarea">
                <span>Conócenos</span>
                <span>Blog</span>
                <span>Acerca de Nosotros</span>
                 

                </div>
                <div className="footerarea__linkarea">
                <span>Gana Dinero con Nosotros</span>
                <span>Vender productos</span>
                <span>Vender aplicaciones</span>
                <span>Anuncia tus Productos</span>
                
                </div>
                <div className="footerarea__linkarea">
                <span>Productos de Pago</span>
                <span>Compra con Puntos</span>
                <span>Convertidor de Moneda</span>
                 
                </div>
                <div className="footerarea__linkarea">
                <span>Podemos Ayudarte</span>
                <span>Tu Cuenta</span>
                <span>Tus Pedidos</span>
                <span>Tarifas de Envío y Políticas</span>
                <span>Devoluciones y Reemplazos</span>
                <span>Administrar Contenido y Dispositivos</span>
                
                </div>
             </div>
        </div>
    )
}
export default Footer;