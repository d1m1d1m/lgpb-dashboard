import { BarChart, LineChart, ShoppingBasket } from "lucide-react";
import Section from "../components/Section";

const DashboardView = () => {
    return (
        <Section className="flex flex-col w-full">
            <h1 className="flex items-center font-amatic font-bold text-5xl mb-4">Dashboard</h1>
            
            <div className="h-full grid grid-cols-9 grid-rows-9 gap-4">
                <div className="col-span-3 row-span-3 flex flex-col border rounded-xl p-4">
                    <h2 className="text-xl uppercase flex items-center p-2 text-rose-800">
                        <span className="border-2 rounded-md p-2 bg-rose-50 border-rose-800 mr-4">
                            <LineChart/>
                        </span>
                        Chiffre du jour
                    </h2>

                    <span className="my-4 text-4xl font-bold">4040,65 €</span>
                    <span className="leading-none text-green-600">+ 20% par rapport à l'année dernière</span>
                </div>
                <div className="col-span-3 row-span-3 flex flex-col border rounded-xl p-4">
                    <h2 className="text-xl uppercase flex items-center p-2 text-rose-800">
                        <span className="border-2 rounded-md p-2 bg-rose-50 border-rose-800 mr-4">
                            <BarChart/>
                        </span>
                        Chiffre moyen
                    </h2>

                    <span className="my-4 text-4xl font-bold">3025,69 €</span>
                    <span className="leading-none text-red-600">-5% par rapport à l'année dernière</span>
                </div>
                <div className="col-span-3 row-span-3 flex flex-col border rounded-xl p-4">
                    <h2 className="text-xl uppercase flex items-center p-2 text-rose-800">
                        <span className="border-2 rounded-md p-2 bg-rose-50 border-rose-800 mr-4">
                            <ShoppingBasket/>
                        </span>
                        Panier moyen
                    </h2>

                    <span className="my-4 text-4xl font-bold">65,61 €</span>
                    <span className="leading-none text-orange-600">+/-0% par rapport à l'année dernière</span>
                </div>

                <div className="col-span-9 row-span-6 border rounded-xl p-4">
                    Graphique incroyable du chiffre d'affaire de l'entreprise !
                </div>
            </div>
        </Section>
    );
};

export default DashboardView;