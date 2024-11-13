import { Card } from "@/components";

  export const Horarios = () => {
  
    return (
        <div className="pt-10 px-10 py-5 bg-red-500 text-center  w-full">
            <h1 className="text-5xl font-medium">HORARIOS</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card 
                    iconName="FaClock"
                    titulo="DOMINGO"
                    subtitle="Reunion General"
                    descripcion="Hora: 10:00 AM"
                />
                <Card 
                    iconName="FaClock"
                    titulo="LUNES"
                    subtitle="Discipulado Congregacional"
                    descripcion="Hora: 06:30 PM"
                />
                <Card 
                    iconName="FaClock"
                    titulo="MIERCOLES"
                    subtitle="Miercoles de Conquista"
                    descripcion="Hora: 07:00 PM"
                />
            </div>
        </div>
    );
  };
  