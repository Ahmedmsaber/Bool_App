import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './quotes.css'
const Quotes = () => {
    
    useEffect(() => {
        newQuote()
    }, []);

    const [quote, setQuote] = useState({"q":{"quote":"Keep going no one help you in your fail","author":"Bool App"}});
    const newQuote = async ()=>{

        await axios.get("http://127.0.0.1:8000/api/v1/quotes/random").then((res)=>{
            console.log(res)
            setQuote(res.data)
        })
    }
    
    return (
        <div className='quotes'>
            <div className="quote">
                <div className="quote-body">
                    <i className="fa fa-quote-left"></i>
                    <p>
                        {quote['q']['quote']}
                    </p>
                    <i className="fa fa-quote-right"></i>
                </div>
                <div className="quote-author">
                    <p>-{quote['q']['author']}</p>
                </div>
            </div>
            <div className="new">
                <button onClick={newQuote}>New Quote</button>
            </div>
        </div>
    );
}

export default Quotes;
