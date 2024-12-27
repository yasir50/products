import './App.css'
import Card from "./Card"
import { Data } from "./data";

function App() {

  return (
    <>
      <div className="row">
        {Data ? (
          Data.map((e, i) => (
            <div className="col" key={i}>
              <Card
                id={e.id}
                title={e.title.slice(0, 20)}
                price={e.price}
                desc={e.description.slice(0, 100)}
                cate={e.category}
                img={e.image}
                rating={e.rating.rate}
              />
            </div>
          ))
        ) : (
          <h1>Data not Found</h1>
        )}
      </div>
    </>
  );
}

export default App
