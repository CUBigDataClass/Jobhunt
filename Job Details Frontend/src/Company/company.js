import React, { Component} from 'react';
import './company.css'
import { Rating } from 'semantic-ui-react'
import connect from "react-redux/es/connect/connect";
import CompanyNews from './companynews';
import WikiInfo from '../Place/wikiinfo'
import TweetList from './tweetlist';
import SentimentalAnalysis from './analysis';





class Company extends Component 
{
    constructor(props) {
        super(props);
    }
    

    render()
    {

        let companyName = this.props.company;
        console.log(companyName)
    return(
    <div className="company-container">
        <div className="top-row">
        <div className="company-heading">
    <h1>{companyName}</h1>
        </div>
            </div>
            <div className="company-elements">
                <div className="company-details">
                <WikiInfo topic={companyName} length={570} />
                </div>
                <div className="stock-graph-body">
                <SentimentalAnalysis company={companyName} />
                </div>
                <div className="company-news-body">
                    <div className="local-company-news">
                <CompanyNews name={companyName} /></div>
                
                </div>
                <div className="company-tweet-body">
                <TweetList company={companyName}/>
                </div>

            </div>
        

        </div>
    
        
)}


}


const mapStateToProps = (state, ownProps) => {
    return {
        company: state.company
    }
}

export default connect(mapStateToProps)(Company);