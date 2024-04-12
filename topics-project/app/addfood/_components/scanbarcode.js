import { ScanBarcode } from 'lucide-react';

export const ScanBarcode_ = () => {
    return (
        <button
            className="bg-[#D79C59]/20 hover:bg-[#D79C59] hover:bg-opacity-20 text-[#4C220A] 
                         py-4 rounded-lg flex flex-col items-center justify-center space-y-2 
                         shadow-lg transition-all duration-300 ease-in-out w-1/5"
            onClick={() => console.log("Navigation to barcode screen")}
        >
            <div className="bg-[#D79C59] p-2 rounded-full">
                <ScanBarcode color="#FFF7ED" size={24} />
            </div>
            <span className="text-xl">Scan Barcode</span>
        </button>
    )
}

export default ScanBarcode_;
