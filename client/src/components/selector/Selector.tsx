import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';



interface Country {
    name: string;
    code: string;
}

const Selector = () => {

    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const countries: Country[] = [
        { name: 'Работа', code: '1' },
        { name: 'Работа1', code: '2' },
        { name: 'Работа3', code: '3' },
        { name: 'Работа4', code: '41' },
        { name: 'Работа65', code: '5' },
        { name: 'Работа363', code: '7' },
        { name: 'Работа346', code: '8' },
        { name: 'Работа1111', code: '11' },
    ];

    const selectedCountryTemplate = (option: Country, props) => {
        if (option) {
            return (
                <div className="flex align-items-center bg-white">
                    <div >{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option: Country) => {
        return (
            <div className="flex align-items-center bg-white">
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <div className="p-2 rounded-md mb-1 flex justify-content-center">
            <Dropdown value={selectedCountry} onChange={(e: DropdownChangeEvent) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Выберите услугу" 
                filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full rounded-md" />
        </div>    
    )
}

export default Selector