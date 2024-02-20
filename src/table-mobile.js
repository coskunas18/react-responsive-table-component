

export default function TableMobile({head,body}) {
  return (
    <div className="text-white rounded">
        {body.map((items,key) => (
          <section className="border-b">
            {items.map((item,key) => (
                <div className="text-sm flex items-center gap-x-6">
                    <h6 className="min-w-[90px] font-semibold">{head[key].name}:</h6>
                 {Array.isArray(item) ? (
                    <div className="flex gap-x-2">
                        {item}
                    </div>
                    ) : item}
                </div>
            ))}
          </section>
        ))}
    </div>
  )
}
