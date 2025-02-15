import { useEffect, useState } from "react";

function Football() {
    const [equipos, setEquipos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/equipos/")
            .then((response) => response.json())  
            .then((data) => {
                console.log("Respuesta de la API:", data);
                setEquipos(Array.isArray(data) ? data : data.equipos || []);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error al obtener los equipos:", error);
                setIsLoading(false);
            });
    }, []);

    console.log("Estado equipos:", equipos); // \U0001f440 Ver si el estado cambia

    return (
        <div>
            {isLoading ? (
                <p>Cargando...</p>
            ) : (
                <ul className="grid grid-cols-3 gap-x-10 md:grid-cols-10 gap-6">
                    {equipos.length > 0 ? (
                        equipos.map((equipo, index) => (
                            <a href="" key={index} className="border w-[120px] flex justify-center items-center p-5 pl-5 rounded-lg shadow-sm shadow-gray-500/50 border-gray-500 bg-neutral-800 focus:bg-neutral-900">
                                {/*<p>{equipo.nombre}</p>*/}
                                
                                <img src={equipo.escudo} width="50" /> 
                                
                                
                            </a>
                        ))
                    ) : (
                        <p>No hay equipos disponibles</p>
                    )}
                </ul>

            )}
        </div>
    );
}

export default Football;
