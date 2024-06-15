import CardContainerBox from "./CardContainerBox";
// import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import FakeShimmer from "./FakeShimmer";


const AppBody=()=>{

  const [listOfResto, setlistOfRestro] =useState([]);
  const [filteredrestro, setFilteredRestraurant]=useState([]);
  const [searchText, setSearchText] =useState("");

  console.log("body rendered");
  let listOfRestocards =[
    {
      "info": {
        "id": "71872",
        "name": "LunchBox - Meals and Thalis",
        "cloudinaryImageId": "fb3enuojckiszvafryo3",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Punjabi",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 3.3,
        "avgRatingString": "4.3",
        "sla": {
          "deliveryTime": 17,
        }
      }
    },
    {
      "info": {
        "id": "648994",
        "name": "FNP Cakes By Ferns N Petals",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/17/2afed692-d67f-436e-8e21-0d9ffe6f32b9_648994.jpg",
        "locality": "Sakore Nagar",
        "areaName": "Viman Nagar",
        "costForTwo": "₹499 for two",
        "cuisines": [
          "Desserts",
          "Bakery",
          "Sweets",
          "Ice Cream",
          "Beverages",
          "North Indian",
          "Chinese"
        ],
        "avgRating": 4.4,
        "parentId": "339638",
        "avgRatingString": "4.4",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 0.9,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "0.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-09 00:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/fnp-cakes-by-ferns-n-petals-sakore-nagar-viman-nagar-pune-648994",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "27806",
        "name": "Natural Ice Cream",
        "cloudinaryImageId": "jzzrlap0b4mcagd2jqxh",
        "locality": "Meera Nagar",
        "areaName": "Koregaon Park",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "2093",
        "avgRatingString": "4.7",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 4.8,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-08 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
              "description": "Delivery!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/natural-ice-cream-meera-nagar-koregaon-park-pune-27806",
        "type": "WEBLINK"
      }
    },
  ];


  useEffect(()=>{
fetchData();
  },[]);

  const fetchData =async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5698535009578&lng=73.91504030674696&collection=114041&tags=layout_Festive_Event1&sortBy=&filters=&type=rcv2&offset=0&page_type=null ");

    const json = await data.json();
    console.log(json);
    //optional chaining
    setlistOfRestro(json.data.cards[0].card.card.info[0].stackedDetails.favRestaurantInfoCard.restaurants);
    setFilteredRestraurant(json.data.cards[0].card.card.info[0].stackedDetails.favRestaurantInfoCard.restaurants);
  }
  if(listOfResto.length=== 0){
    return <FakeShimmer/>
  }



  return listOfResto.length=== 0? <FakeShimmer/>:(
    <div className ="body">
    <div className="filter">
    <div className ="search-container">
        <input type="text" className="search-bar" value ={searchText} onChange={(e)=>{ setSearchText(e.target.value)
        // console.log(setSearchText)

        }}
        />
        <button onClick={()=>{
         const filteredrestro= listOfResto.filter((res)=>
          res.info.name.toLowerCase().includes(searchText.toLowerCase())
         
          );
          console.log(filteredrestro)
          setFilteredRestraurant(filteredrestro)
//filter the restro and udate the ui
// console.log(searchText);
        }}>search</button>
        </div>
      <button className="filter-btn" onClick={()=>{
            let filtered =listOfResto.filter((res)=>
              res.info.avgRating>4);
            setlistOfRestro(filtered)
            console.log(listOfResto);
            console.log(filtered);
            


      }}>Top Rated Restro</button>
    </div>
    <div className="card-container">
     {filteredrestro.map((restaurant)=>(
     <CardContainerBox key={restaurant.info.id} resData ={restaurant} />
    ))}
    </div>
    </div>
  )
}

export default AppBody;