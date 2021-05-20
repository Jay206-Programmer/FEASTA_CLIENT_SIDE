import {useState,useEffect} from 'react';
import axios from 'axios';
import Layout from '../component/Layout';

export default function Menu() {
  const [admin_id, setadmin_id] = useState("-1");
  const [category_id, setcategory_id] = useState("-1");
  const [user_id, setuser_id] = useState("-1");
  
  const [table, settable] = useState([]);
  const [cate, setcate] = useState([]);
  const [canteen, setcanteen] = useState([]);
  const [cart, setcart] = useState([]);

  // const [data,setdata] = useState();
  

// //Selected category
// const selectedData = async ()=>{
//   await axios.get('https://feasta-postgres.herokuapp.com/menu/get_item/',{
//         params: {
//           category_id:category_id,
//           admin_id:admin_id
//         }
//       }).then((requests)=>{
//         console.log(requests.data);
//         settable([]);
//         requests.data.data.map((data,key)=>{
//           settable((category_id ? data : settable(table=>[...table,data])));
//           console.log(table)
//       })
//       }).catch((ress)=>{
//         alert("Table "+ress);
//       }) 
// }

async function canteenData(){
  const requests = await axios.get('https://feasta-postgres.herokuapp.com/canteens/');
  // Setting Category Array
  setcanteen([])
  requests.data.data.map((data,key)=>{
      setcanteen(canteen=>[...canteen,data]);
    });
  
  
    // console.log(canteen)
}

function cartData(item){
  // Setting Category Array
  
  setcart([...cart,item]);
  
  localStorage.setItem("cart",cart);
                
  console.log(cart)
}

async function catData(adm_id){
  const requests = await axios.get('https://feasta-postgres.herokuapp.com/menu/get_category',{
  params: {
      admin_id:adm_id
  }
  });
  // Setting Category Array
  setcate([])
  requests.data.data.map((data,key)=>{
      setcate(cate=>[...cate,data]);
    });
    
    // console.log(cate)
}

async function tabData(adm_id, cat_id = "-1") {
  const requests = await axios.get('https://feasta-postgres.herokuapp.com/menu/get_item/',{
  params: {
      admin_id:adm_id,
      category_id: cat_id
  }
  });
  settable([])
  requests.data.data.map((data,key)=>{
      settable(table=>[...table,data]);
      //console.log(cate)
  });
}


// ? Setting Category Data
useEffect(()=>{
  
  // var adm_id = localStorage.getItem("client_admin_id")?JSON.parse(localStorage.getItem("client_admin_id")).admin_id:"-1"
  // setadmin_id(adm_id.toString())
  
  if(admin_id != "-1"){
    catData(admin_id.toString());
    // console.log(admin_id)
}
},[admin_id])


// ? Setting Category Data
useEffect(()=>{
  
  if(admin_id != "-1"){
  tabData(admin_id.toString(),category_id);
}
},[admin_id,category_id])


// ? Setting User Id
useEffect(() => {
  var usr_id = localStorage.getItem("user_id")?JSON.parse(localStorage.getItem("user_id")).user_id:"-1"
  
  // var cart_data = localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]
  
  setuser_id(usr_id.toString())
  
  canteenData()

}, [])


    return (
      <Layout>
        <div>
          <div className="mt-4 mb-4 pt-3 pb-3 container shadow-lg">
            <div className="row ">
              <div className="col-sm-12 col-md-12 col-lg-12 text-center">
              <div className="heading-title text-center">
                <h2>Select Canteen</h2>
                <hr/>
                </div>
              {canteen.map((data)=>{
                  return(<>
                  <button style={{width:"90%",height:"50px"}} className="btn btn-lg shadow-lg mb-2 mt-2 align-content-center" id="v-pills-settings-tab" value={data.admin_id} onClick={()=>{setadmin_id(data.admin_id)}} >
                    {data.canteen_name}
                  </button>
                  <br/>
                  </>)
                  })}
              </div>
            </div>
          </div>
          {/* Start Menu */}
      {(admin_id!="-1")?(
      <div className="menu-box">
        <div className="pt-4 pb-4 container shadow-lg">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="heading-title text-center">
                <h2>Special Menu</h2>
                <p> Delicious items just waiting for you...</p>
              </div>
            </div>
            <hr/>
          </div>
          <div className="row inner-menu-box">
            <div className="col-3">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button style={{outline:'none',border:'0'}} className="nav-link shadow-lg" id="v-pills-settings-tab" value=" " onClick={()=>{setcategory_id("-1")} } >All</button>
                {cate.map((data)=>{
                  return(<button style={{outline:'none',border:'0'}} className="mt-2 nav-link shadow-lg" id="v-pills-settings-tab" value={data.category_id} onClick={()=>{setcategory_id(data.category_id)}} >{data.category_name}</button>)
                })}
              </div>
            </div>
            <div className="col-9">
              <div className="tab-content" id="v-pills-tabContent">
                {(table.length!=0)?(<div className="tz-gallery tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <div className="row">
                  {table?table.map((data)=>{
                      return(
                        <div className="col-sm-6 col-md-4 col-lg-4 special-grid dinner">
                        <button className="btn btn-primary mb-1" style={{zIndex:"9999999",width:"100%",color:"black"}} value={data} onClick={()=>{cartData(data) ;console.log(data)}}>+</button>
                        <div className="lightbox gallery-single fix">
                        <img src={data.image_path} className="img-fluid shadow-lg" alt="Image" />
                          <div className="why-text">
                            <h4>{data.item_name}</h4>
                            <p>{data.item_desc}</p>
                            <h5> Rs.{data.price}</h5>
                          </div>
                        </div>
                      </div>
                      )
                      }):""}
                  </div>
                </div>
                ):"No Data Available"}
              </div>
            </div>
          </div>
        </div>
      </div>
      ):""}
      {/* End Menu */}
        </div>
      </Layout>
    )
}

