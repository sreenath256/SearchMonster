import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/cardList/Card";
import axios from "axios";
import SearchBox from "./Components/searchBox/SearchBox";

// class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       monster : [],
//       filterArray:[],
//       flag:true
//     }
//   };

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json()).then((users=>{
//       this.setState({monster : users})
//     }))
//   }
//   render(){
//     let search;
//     const handleChange = (e)=>{
//       search = e.target.value.toLowerCase();
//       this.setState({flag : false})

//       const filteredMonster = this.state.monster.filter((monster)=>{
//         return monster.name.toLowerCase().includes(search)
//       });
//       this.setState(()=>{
//         return{filterArray:filteredMonster}
//       })

//     }

//     return(
//       <div>
//         <Toasty/>
//         <ToastContainer

//         />
//         <input type="text" className='search-box' placeholder='Search Name' onChange={handleChange}/>
//        {
//         this.state.flag===true?
//         this.state.monster.map((obj,index)=>{
//           return <h2 key={index}>{index+1} {obj.name}</h2>
//         })
//         :
//         this.state.filterArray.map((obj,index)=>{
//           return <h2 key={index}>{index+1} {obj.name}</h2>
//         })
//        }
//       </div>
//     )

// }
// }

const App = () => {
  const [monster, setMonster] = useState([]);
  const [filterArray, setFilterArray] = useState([]);
  const [heading,setHeading]=useState('');

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setMonster(response.data);
      setFilterArray(response.data);
    });
  }, []);

  const handleChange = (e) => {
    let search = e.target.value.toLowerCase();
    const filteredMonster = monster.filter((obj) => {
      return obj.name.toLowerCase().includes(search);
    });
    setFilterArray(filteredMonster);
  };

  const setTitle=(e)=>{
    let search=e.target.value.toLowerCase();
    setHeading(search)

  }

  return (
    <div className="min-h-screen  w-full bg-blue-400 flex flex-col items-center">
      <h1 className="text-6xl mt-6 mb-3 font-Heading">{heading}</h1>

      <SearchBox placeHolder="Search monster..." onChange={handleChange} />
      <SearchBox placeHolder="Enter title..." onChange={setTitle} />
      
      <div className=" flex flex-wrap justify-center">
        {filterArray.map((obj, index) => {
          return (
            <Card
              key={index}
              name={obj.name}
              email={obj.username}
              username={obj.email}
              image={`https://robohash.org/${obj.id}?set=set2`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
