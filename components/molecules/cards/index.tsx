import { IconName } from "@/app/assets/iconsMaps";
import { Icon } from "@/components/atoms";

interface Props {
    iconName: IconName;
    titulo: String;
    subtitle: String;
    descripcion: String;

  }

export const Card = ({ iconName,titulo,subtitle, descripcion   }: Props) => {

    return (
        <div className="max-w-full p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-center">
                <Icon 
                    className="w-6 h-6 text-gray-400 dark:text-gray-300"
                    name={iconName}
                />
            </div>
            <h5 className="pt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{titulo}</h5>
 
            <p className="font-normal text-gray-500 dark:text-gray-400">{subtitle}</p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{descripcion}</p>
        </div>
    );
};
