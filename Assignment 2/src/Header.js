import Card from "./Card";

// function Header(props){

//     let name="Sumedh";

//     return(

//         // <div>
//         // <h1> Header Component</h1>
//         // <h1>Hello, {name}</h1>
//         // <h1>Age {props.age}</h1>
//         // </div>
//         <div></div>
//     )

// }

function Header(){

    const cards=[
        {
            title:"Dal Tadaka",
            subt:"Main Course",
            desc:"Yellow lentils tempered in cumin and flavoured with garlic.",
            image:"https://www.cookwithmanali.com/wp-content/uploads/2014/08/Dal-Tadka-500x500.jpg"
        },
        {
            title:"Curd Rice",
            subt:"Rice",
            desc:"Curd rice is nothing but curd (yogurt) mixed with cooked rice, herbs and then tempered.",
            image:"https://www.cookwithmanali.com/wp-content/uploads/2015/01/Curd-Rice-South-Indian-500x500.jpg"
        },
        {
            title:"Paneer Biriyani",
            subt:"Veg Biriyani",
            desc:"Paneer biryani is a mildly spiced and delicately flavored dum cooked, traditional biryani recipe.",
            image:"https://i1.wp.com/dashsikkim.com/wp-content/uploads/2021/04/Instant-Pot-Paneer-Biryani-e1619856604225.jpg?fit=660%2C660&ssl=1"
        },
        {
            title:"Butter Nan",
            subt:"Breads",
            desc:"Healthy and soft whole wheat butter naan made without tandoor.",
            image:"https://i0.wp.com/dashsikkim.com/wp-content/uploads/2021/03/Soft-Homemade-Naan-e1617216823923.jpg?fit=660%2C660&ssl=1"
        },
        {
            title:"Lassi",
            subt:"Beverages",
            desc:"Healthy and soft whole wheat butter naan made without tandoor.",
            image:"https://thumbs.dreamstime.com/b/yogurt-ayran-lassi-fresh-plain-homemade-yougurt-youghurt-kefir-glass-herbs-over-gray-background-copy-space-probiotic-116473674.jpg"
        },
        {
            title:"Chole Bhature",
            subt:"Poori & Bhature",
            desc:"Chole stands for a spiced tangy chickpea curry and Bhatura is a soft and fluffy fried leavened bread.",
            image:"http://recipetreasure.com/wp-content/uploads/2014/01/chole-bhature-recipe-treasure.jpg"
        },
       
    ]
    return (
        <div>
            <h1 style={{marginLeft:"15%"}}>Menu Card</h1>
            <div className="container-full">

                
                {
                    cards.map((card1,index)=>(

                        <Card key={index} title={card1.title} subt={card1.subt} desc={card1.desc} image={card1.image} />

                    ))
                }
            </div>

        </div>
    )

}




export default Header;
