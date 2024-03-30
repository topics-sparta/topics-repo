import { Search } from 'lucide-react';
import { useState } from "react";

export const SearchFood = () => {
    const [formData, setFormData] = useState({
        food_search: ''
    });

    // Handle typing
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    // Handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Backend functionality for searching
            console.log('Search submitted for:', formData.food_search);

            // Clear the form
            setFormData({
                food_search: ''
            });
        } catch (error) {
            console.error("Error submitting form: ", error);
        }
    };

    return (
        <div className="flex items-center bg-[#D79C59] rounded-full w-1/2 shadow">
            <Search className="ml-4" color="#FFF7ED" size={20} />
            <form onSubmit={handleSubmit} className="flex-grow">
                <input
                    className="flex-grow p-2 bg-[#D79C59] text-[#FFF7ED] placeholder-[#FFF7ED] rounded-full w-full outline-none"
                    placeholder="Search for any foods..."
                    id="food_search"
                    name="food_search"
                    type="text"
                    value={formData.food_search}
                    onChange={handleChange}
                    required
                />
            </form>
        </div>
    );
};

export default SearchFood;
