import CompanyReducer from './companyReducer';
import PlaceReducer from './placeReducer';
import URLReducer from './urlReducer';
import {combineReducers} from 'redux';
import TitleReducer from './titleReducer';
import TweetReducer from './tweetReducer'
import DescriptionReducer from './descriptionReducer';

const rootReducer = combineReducers({
    company:CompanyReducer,
    title:TitleReducer,
    url:URLReducer,
    description:DescriptionReducer,
    Place:PlaceReducer,
    TweetReducer

});

export default rootReducer;