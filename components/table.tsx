const Table = ({ tableHeader, tableData }: { tableHeader:Array<string | number>, tableData: Array<Array<string | number>>}) => {
    return (
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead>
                                <tr>
                                    {
                                        tableHeader.map((header, index: number) => (
                                            <th key={index} scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                                                {header}
                                            </th>
                                        ))
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tableData.map((data, index: number) => (
                                        <tr key={index} className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
                                            {
                                                data.map((d, i: number) => (
                                                    <td key={i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                        {d}
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Table;