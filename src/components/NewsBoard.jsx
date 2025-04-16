import './Components.css'
import ActualNewsCards from './ActualNewsCards'
import { useState, useEffect } from 'react'
import myApiKey from '../../Api'
import previous from './previous.png'
import next from './next.png'
import SearchSection from './SearchSection'

const NewsBoard = (props) => {
  

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);


  async function fetchNews() {
    let url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${myApiKey}&page=${page}&pagesize=20`
    // let url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&apikey=` + myApiKey;

       let request = await fetch(url);
       let response = await request.json();
       setArticles(response.articles)
      }
 
       
    useEffect(() =>{
      fetchNews();
    }, [props.category]);

    async function handleNext(){
      setPage(page+1);

      console.log(page)

      let url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${myApiKey}&page=${page}&pagesize=20`
      // let url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&apikey=` + myApiKey;
  
         let request = await fetch(url);
         let response = await request.json();
         setArticles(response.articles)
         
    }

    async function handlePrevious(){
      setPage(page-1)
      console.log(page)
      let url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${myApiKey}&page=${page}&pagesize=20`
      // let url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&apikey=` + myApiKey;
  
         let request = await fetch(url);
         let response = await request.json();
         setArticles(response.articles)
    }

  return (
    <>
    <SearchSection/>
    <div className='newsBoardContainer'>
    <div className='newsBoard'>
        <h1>Top Headlines from all over the world</h1>
        <h2>No need to go to differnt places, the news of all categories from all over the world is available for you</h2>
        <div className="newsCards">
            {articles.map((news, index) =>{
                return <ActualNewsCards key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            }
            )}
        </div>
        <div className="buttons">
          <button className="previous" onClick={handlePrevious}><img src={previous} alt=""/></button>
          <button className="Next" onClick={handleNext}><img src={next} alt="" /></button>
        </div>

    </div>
    </div>
    <footer>
      2025 - update news update you
    </footer>
    </>
  )
}

export default NewsBoard
