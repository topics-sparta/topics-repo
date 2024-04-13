import { Flame } from 'lucide-react';

export const AddCustomFood = ({ router }) => {
    return (
        <button
            className="bg-[#D79C59]/20 hover:bg-[#D79C59] hover:bg-opacity-20 text-[#4C220A]
            py-4 rounded-lg flex flex-col items-center justify-center space-y-2
            shadow-lg transition-all duration-300 ease-in-out flex-shrink lg:w-[300px] min-w-[160px]"
  
            onClick={() => router.push("/customfoods")}
        >
            <div className="bg-[#D79C59] p-2 rounded-full">
                <Flame color="#FFF7ED" size={24} />
            </div>
            <span className="text-xl">Add Custom Food</span>
        </button>
    )
}

export default AddCustomFood;
