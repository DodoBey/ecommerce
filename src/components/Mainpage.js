import React, { Component, MainComp } from 'react'; 



const click =(e)=> {
    e.preventDefault();
    console.log(e);
}

export class Mainpage extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         name : [this.props.product[0].name]
    //     }
    // }
    render() {
        console.log(this.props.product);
        
        return (
          <>
            {/* Navigation button */}
            <div className="category-container">
                <h2 className="category">Categories</h2>

                <ul>
                    <li>
                        <a href="" className="green" onClick={click}>ELECTRONIC</a>
        
                    </li>

                    <li>
                        <a href="" className= "blue" onClick={click}>CLOTHING</a>
                    </li>

                    <li>
                        <a href="" className= "green" onClick={click}>BOOKS</a>
                    </li>

                    <li>
                        <a href="" className= "blue" onClick={click}>HOME</a>
                    </li>

                    <li>
                        <a href="" className= "green" onClick={click}>GROCERY</a>
                    </li>

                    <li>
                        <a href="" className= "blue" onClick={click}>SPORTS</a>
                    </li>
                </ul>

                <div className="popular-container">
                
                    <h2 className="popular">Popular</h2>  

                    <ul>
                        <li>
                            <a href="" className= "pop-items" onClick={click}>
                                <img className="popularimage" src= {"https://source.unsplash.com/1600x900/?grocery"} alt="image" />
                                <br></br>
                                <p className="pop-category">Categories</p>
                                <p className="name">Name</p>
                                <p className="price">$...</p>
                            </a>
                        </li>
                        <li>
                            <a href="" className= "pop-items" onClick={click}>
                                <img className="popularimage" src= {"https://source.unsplash.com/1600x900/?grocery"} alt="image" />
                                <br></br>
                                <p className="pop-category">Categories</p>
                                <p className="name">Name</p>
                                <p className="price">$...</p>
                            </a>
                        </li>
                        <li>
                            <a href="" className= "pop-items" onClick={click}>
                                <img className="popularimage" src= {"https://source.unsplash.com/1600x900/?grocery"} alt="image" />
                                <br></br>
                                <p className="pop-category">Categories</p>
                                <p className="name">Name</p>
                                <p className="price">$...</p>
                            </a>
                        </li>
                        <li>
                            <a href="" className= "pop-items" onClick={click}>
                                <img className="popularimage" src= {"https://source.unsplash.com/1600x900/?grocery"} alt="image" />
                                <br></br>
                                <p className="pop-category">Categories</p>
                                <p className="name">Name</p>
                                <p className="price">$...</p>
                            </a>
                        </li>
                        <li>
                            <a href="" className= "pop-items" onClick={click}>
                                <img className="popularimage" src= {"https://source.unsplash.com/1600x900/?grocery"} alt="image" />
                                <br></br>
                                <p className="pop-category">Categories</p>
                                <p className="name">Name</p>
                                <p className="price">$...</p>
                            </a>
                        </li>
                        <li>
                            <a href="" className= "pop-items" onClick={click}>
                                <img className="popularimage" src= {"https://source.unsplash.com/1600x900/?grocery"} alt="image" />
                                <br></br>
                                <p className="pop-category">Categories</p>
                                <p className="name">Name</p>
                                <p className="price">$...</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
           
          </>

        ); 
    }
}

export default Mainpage; 

