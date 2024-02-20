import { useState } from "react"
import {TiArrowSortedDown, TiArrowSortedUp,TiArrowUnsorted} from "react-icons/ti";
import { useMediaQuery } from "@react-hook/media-query";
import TableMobile from "./table-mobile";




export default function Table({head,body,searchable}) {

    const isMobile = useMediaQuery('(max-width:800px)');



    const [sorting,setSorting] = useState(false);
    const [search,setSearch] = useState('');
    const filteredData = body && body.filter(
        items => items.some(item => item.toString().toLocaleLowerCase('TR').includes(search.toLocaleLowerCase('TR')))
    ).sort((a,b) => {
        if (sorting?.orderBy === 'asc') {
            return a[sorting.key].toString().localeCompare(b[sorting.key])
        }
        if (sorting?.orderBy === 'desc') {
            return b[sorting.key].toString().localeCompare(a[sorting.key])
        }
    }) //some,en az bir elemanın koşulu sağlayıp sağlamadığını kontrol eder.




  if (!body || body?.length === 0 ) {
    return (
        <div className="p-4 text-center text-2xl font-semibold text-slate-400">
            Gösterilecek veri bulunmuyor.
        </div>
    )
  }  




  return (
    <>
    <div className="w-full border rounded p-4">
    {searchable && (
        <div className="py-2" > 
            <input type="text" className="rounded bg-slate-400 pl-2 py-1 outline-none text-slate-700 
            placeholder-slate-300" 
            value={search}
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)} />

            {sorting && (
                <button className="h-10 px-4 border-red-500 text-white" onClick={() => setSorting(false)}>Sıralamayı iptal et</button>
            )}
        </div>
    )}

    {isMobile && <TableMobile head={head} body={filteredData}/>}
    {!isMobile && (
        <table className="w-full bg-slate-300">
        <thead className="bg-slate-500 ">
            <tr>
                {head.map((h,key) => (
                   <th width={h.width} className="text-left text-md text-white font-semibold p-3" key={key}>
                    <div className="flex items-center gap-x-2">
                    {h.name}
                    {h.sortable && (
                        <button onClick={() => {
                            if (sorting?.key ===key) {
                                setSorting({
                                    key:key,
                                    orderBy:sorting.orderBy === 'asc' ? 'desc' : 'asc'
                                })
                            }else{
                                setSorting({
                                    key:key,
                                    orderBy:'asc'
                                })
                            }
                        }}>
                            {sorting?.key !== key && <TiArrowUnsorted />}
                            {sorting?.key === key && (
                              sorting?.orderBy === 'asc' ? <TiArrowSortedDown /> : <TiArrowSortedUp />
                            )}
                        </button>
                    )}
                    </div>

                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {filteredData && filteredData.map(items => (
                <tr className="group">
                    {items.map(item => (
                        <td className="p-3 text-sm text-left group-hover:bg-slate-400 rounded
                         group-hover:cursor-pointer group-hover:text-white">{Array.isArray(item) ? 
                        <div className="flex items-center gap-2">
                            {item}
                        </div> : item
                        }</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
    )}

    
    {filteredData && filteredData.length === 0 && (
                <div className="text-center w-full bg-slate-300 font-semibold text-2xl p-2">
                    Herhangi bir veri bulunamadı
                </div>
            )}
    </div>

     
    </>
  )
}
