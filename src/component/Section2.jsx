const Frame2 =() =>{ 
    return(
        <>
        <div className="container">
        <div className="textHolder">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div>
            <button>Shop Now</button>
            <button style={{ background: 'white', color: 'black', border: '1px solid black'}}>Category</button>
            </div>
            <p>Also Available On</p>
            <div className="logoholder" >
                <img className="shortlogo" src="/img/flipcart.png" alt="flipcart"/>
                <img className="shortlogo" src="/img/amazon.png" alt="amazon"/>
            </div>
            
        </div>
        <div>
            <img style={{height : '70vh' }} src="/img/shoe.png" alt="shoe"/>
        </div>

        </div>
        
        </>

    );

};
export default Frame2;