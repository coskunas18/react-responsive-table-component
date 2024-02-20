import Table from "./table";
function App() {

  const users = [
    {
      name:'Coşkun',
      surname:'Demirel',
      email:'coskun.4901@gmail.com',
      age:25,
    },
    {
      name:'Nuran',
      surname:'Demirel',
      email:'nuran.demir@gmail.com',
      age:52,
    },
    {
      name:'Faruk',
      surname:'Demirel',
      email:'faruk.demir@gmail.com',
      age:51,
    },
    {
      name:'Ceylin',
      surname:'Demirel',
      email:'ceylin.4901@gmail.com',
      age:15,
    }
  ]

  return (
    <div className="h-screen bg-slate-800 p-5">
       <Table
       searchable={true}
       head={[
        {name:'Ad-Soyad',sortable:true},
        {name:'E-post'},
        {name:'Yaş',sortable:true},
        {name:'İşlemler',width:200}
      ]}
       body={users && users.map(user => [
        user.name+' '+user.surname ,
        user.email,
        user.age,
        [
           <>
              <button className="bg-blue-500 h-8 px-4 items-center text-white rounded">Düzenle</button>
              <button className="bg-red-500 h-8 px-4 items-center text-white rounded">Sil</button>
           </>
        ]
       ])}
       />
    </div>
  );
}

export default App;
