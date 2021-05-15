# SEI - Project Two - Quote Garden

My second dev project, a React app pair-coded with GA classmate Andrew Ogilvy in a 48-hour hackathon. 

# Deployment 
This app has been deployed with Netlify, click to view my [Quote Garden](https://quotes-garden.netlify.app/). 

# Getting Started
1. Access the source code via the 'Clone or download' button
2. In CLI, run `yarn` on the root level to install dependencies.
3. Run `yarn start` to run programs in your local environment.

# Goal and Timeframe:
Build a React application that consumes any public API in under 48 hours. 

# Technologies Used:
- React.js
- JavaScript (ES6)
- HTML5
- CSS
- [Quote Garden AP](https://pprathameshmore.github.io/QuoteGarden/) 
- [Unsplash API](https://unsplash.com/developers)
- Axios
- Insomnia REST Client
- Yarn
- react-router-dom

# Overview
This app has two main features:
1. A landing page which consists of a random quote which will change along with the background image at a setInterval. 

<img width="1431" alt="Screenshot 2021-05-10 at 19 12 20" src="https://user-images.githubusercontent.com/78035012/118381055-f0aa6c80-b5de-11eb-9516-3f975aa2370c.png">

2. A library of quotes which are filtered and sorted by genre.

<img width="1434" alt="Screenshot 2021-05-10 at 19 17 21" src="https://user-images.githubusercontent.com/78035012/118381061-f902a780-b5de-11eb-830f-67f3f9ed6ac0.png">

# Process
We started by searching for and exploring free APIs on the internet, eventually we settled on the Quote Garden. After hooking into the API with Insomnia REST Client to inspect the dataset, we soon settled on the idea of building a library of quotes using our preferred genres. For our landing page we decided we would showcase a random quote from one of these genres every 30 seconds. To improve on the feel and theme of this app I chose to use a collection of landscapes from Unsplash. This has been integrated onto the app and the interval for the changing background has been set to change at the same time as the quotes. 

# Fetching from the API 
In order to request the correct data, it was important to read through the Quote Garden documentation. We spent time testing the url endpoints using Insomnia.

<img width="1281" alt="Screenshot 2021-05-10 at 23 20 05" src="https://user-images.githubusercontent.com/78035012/118381098-4b43c880-b5df-11eb-90d7-0ef9b409e836.png">

Below is an excerpt of code from the homepage, where a new random quote is displayed every 30 seconds. 

```
const urlArray = ['https://quote-garden.herokuapp.com/api/v3/quotes?genre=motivational&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=happiness&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=time&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=inspirational&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=success&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=power&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=science&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=patience&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=friendship&limit=100']

  const randomArray = urlArray[Math.floor(Math.random() * urlArray.length)]

  const getQuote = () => {
    const getRandomQuote = async () => {
      const { data } = await axios.get(randomArray)
      const randomNumber = Math.floor(Math.random() * data.data.length)
      setQuotes(data.data[randomNumber])
    }
    getRandomQuote()
  }

  useEffect(() => {
    getQuote()
    setInterval(() => {
      getQuote()
    }, 30000)
  }, [])
```
In order for the random quote to be one from our chosen genres, each genre’s corresponding endpoint was added to the urlArray with a limit for the number of quotes set to 100. An endpoint and quote within the 100 results is chosen at random with the interval set to 30,000ms. 

The background is fetched using the chosen collection ID from unsplash.com.

```
const getBackground = () => {

    const getBackgroundData = async () => {
      const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${API_KEY}&collections=1376954`)
      setBackground(response.data.urls.regular)
    }
    getBackgroundData()
  }

  useEffect(() => {
    getBackground()
    setInterval(() => {
      getBackground()
    }, 30000)

  }, [])
```

The genre index page is rendered using a limit of only 15 results per page to make it easier to display on screen. 

```
const [quotes, setQuotes] = useState(null)
  const { genre } = useParams()
  console.log(useParams())

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes?genre=${genre}&limit=15&page=1`)
      setQuotes(data.data)
      console.log('HERE: ', data)
    }
    getData()
  }, [])
```

<img width="1432" alt="Screenshot 2021-05-10 at 23 37 07" src="https://user-images.githubusercontent.com/78035012/118381067-03bd3c80-b5df-11eb-8ad3-c709dde699bc.png">

# Wins
This was my first time using React and working with public APIs, very quickly realised the importance of documentation and the need to research the resources before integrating them into projects. 

It was also the first time I paid more attention to the styling of my work, dedicating a chunk of time to learn some new CSS to elevate the user experience. 

# Future Features
- Adding a profile page, where the quotes can be saved and accessed using local storage. 
- Make the app responsive and fully functioning on mobile and tablet. 
- Increasing the amount of quote genres displayed. 
- Allowing for a more customisable homepage, where the user is able to change and choose the background, or freeze a quote so it displays for a chosen period of time. 

# Key learnings
API requests, GitHub collaboration, React
