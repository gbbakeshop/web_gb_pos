import moment from 'moment';
import React from 'react'
import { useDispatch } from 'react-redux'
import { setYear } from '../../pages/administrator/dashboard/redux/dashboard-slice';

export default function YearSelectSection() {
    const dispatch = useDispatch()

    var currentYear = new Date().getFullYear();

    // Initialize an array to store the years
    var yearsArray = [];

    // Loop from 2023 to the current year + 1
    for (var year = 2023; year <= currentYear; year++) {
        yearsArray.push(year);
    }

    return (
        <div>
            <select
                onChange={(e) => dispatch(setYear(e.target.value))}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 mr-2">
                <option
                    disabled
                    selected>Choose Year...</option>
                {
                    yearsArray.map((res,i) => {
                        return <option key={i} value={res}>Year {res}</option>
                    })
                }

            </select>
        </div>
    )
}
