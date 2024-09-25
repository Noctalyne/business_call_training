
import Navigation from "./Navigation";
import Choose from "./story/Choose";

export default function Template() {


  return (
    <div className="App">
      <header className="App-header">

        <Navigation />


        {/* <Formulaire/> */}

        <Choose index={0} />
        {/* <Choose index={1}/>
      <Choose index={2}/>
      <Choose index={3}/>
      <Choose index={4}/>
      <Choose index={5}/> */}
      </header>
    </div>

  )


}