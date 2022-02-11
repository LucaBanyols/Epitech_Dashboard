import React, { useState, useEffect } from "react";
import WeatherApp from "./WeatherApp";
import PokemonApp from "./PokemonApp";
import PokemonTypeApp from "./PokemonTypeApp";
import ExchangeApp from "./ExchangeApp";
import GoogleMapApp from "./GoogleMapApp";
import AnimeDBApp from "./AnimeDBApp.js"
import CurrencyApp from "./CurrencyApp";
import BreakingBadApp from "./BreakingBadApp";
import WikiApp from "./WikiApp";

function PrivateHome(props) {

  const [printWeatherApp, changePrintWeatherApp] = useState(false);

  const switchPrintWeatherApp = (e) => {

    e.preventDefault();

    !printWeatherApp ? changePrintWeatherApp(true) : changePrintWeatherApp(false);
  }

  const [printPokemonApp, changePrintPokemonApp] = useState(false);

  const switchPrintPokemonApp = (e) => {

    e.preventDefault();

    !printPokemonApp ? changePrintPokemonApp(true) : changePrintPokemonApp(false);
  }

  const [printExchangeApp, changePrintExchangeApp] = useState(false);

  const switchPrintExchangeApp = (e) => {

    e.preventDefault();

    !printExchangeApp ? changePrintExchangeApp(true) : changePrintExchangeApp(false);
  }

  const [printGoogleMapApp, changePrintGoogleMapApp] = useState(false);

  const switchPrintGoogleMapApp = (e) => {

    e.preventDefault();

    !printGoogleMapApp ? changePrintGoogleMapApp(true) : changePrintGoogleMapApp(false);
  }

  const [printAnimeDBApp, changePrintAnimeDBApp] = useState(false);

  const switchPrintAnimeDBApp = (e) => {

    e.preventDefault();

    !printAnimeDBApp ? changePrintAnimeDBApp(true) : changePrintAnimeDBApp(false);
  }

  const [printCurrencyApp, changePrintCurrencyApp] = useState(false);

  const switchPrintCurrencyApp = (e) => {

    e.preventDefault();

    !printCurrencyApp ? changePrintCurrencyApp(true) : changePrintCurrencyApp(false);
  }

  const [printBreakingBadApp, changePrintBreakingBadApp] = useState(false);

  const switchPrintBreakingBadApp = (e) => {

    e.preventDefault();

    !printBreakingBadApp ? changePrintBreakingBadApp(true) : changePrintBreakingBadApp(false);
  }

  const [printWikiApp, changePrintWikiApp] = useState(false);

  const switchPrintWikiApp = (e) => {

    e.preventDefault();

    !printWikiApp ? changePrintWikiApp(true) : changePrintWikiApp(false);
  }

  function componentDidMount() {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <br />
      <div className="border cards text-light py-4 my-4">
        <h5 className="text-center display-6">Click to show or to hide any widgets</h5>
        <br />
        <div className="row px-4 py-2">
          <div className="col-3">
            {printWeatherApp === true ?
              <button onClick={switchPrintWeatherApp} className="btn btn-primary btn-block my-2">Weather</button>
              :
              <button onClick={switchPrintWeatherApp} className="btn btn-secondary btn-block my-2">Weather</button>}
          </div>
          <div className="col-3">
            {printPokemonApp === true ?
              <button onClick={switchPrintPokemonApp} className="btn btn-primary btn-block my-2">Pokemon</button>
              :
              <button onClick={switchPrintPokemonApp} className="btn btn-secondary btn-block my-2">Pokemon</button>}
          </div>
          <div className="col-3">
            {printCurrencyApp === true ?
              <button onClick={switchPrintCurrencyApp} className="btn btn-primary btn-block my-2">Crypto</button>
              :
              <button onClick={switchPrintCurrencyApp} className="btn btn-secondary btn-block my-2">Crypto</button>}
          </div>
          <div className="col-3">
            {printGoogleMapApp === true ?
              <button onClick={switchPrintGoogleMapApp} className="btn btn-primary btn-block my-2">Google Map</button>
              :
              <button onClick={switchPrintGoogleMapApp} className="btn btn-secondary btn-block my-2">Google Map</button>}
          </div>
          <div className="col-3">
            {printAnimeDBApp === true ?
              <button onClick={switchPrintAnimeDBApp} className="btn btn-primary btn-block my-2">Anime</button>
              :
              <button onClick={switchPrintAnimeDBApp} className="btn btn-secondary btn-block my-2">Anime</button>}
          </div>
          <div className="col-3">
            {printExchangeApp === true ?
              <button onClick={switchPrintExchangeApp} className="btn btn-primary btn-block my-2">Currency</button>
              :
              <button onClick={switchPrintExchangeApp} className="btn btn-secondary btn-block my-2">Currency</button>}
          </div>
          <div className="col-3">
            {printBreakingBadApp === true ?
              <button onClick={switchPrintBreakingBadApp} className="btn btn-primary btn-block my-2">Breaking Bad</button>
              :
              <button onClick={switchPrintBreakingBadApp} className="btn btn-secondary btn-block my-2">Breaking Bad</button>}
          </div>
          <div className="col-3">
            {printWikiApp === true ?
              <button onClick={switchPrintWikiApp} className="btn btn-primary btn-block my-2">Wiki</button>
              :
              <button onClick={switchPrintWikiApp} className="btn btn-secondary btn-block my-2">Wiki</button>}
          </div>
        </div>
      </div>
      <main className="flexbox">
        {printWeatherApp === true ? <WeatherApp /> : null}
        {printWeatherApp === true ? <br /> : null}
        {printPokemonApp === true ? <PokemonApp /> : null}
        {printPokemonApp === true ? <PokemonTypeApp /> : null}
        {printPokemonApp === true ? <br /> : null}
        {printCurrencyApp === true ? <CurrencyApp /> : null}
        {printCurrencyApp === true ? <br /> : null}
        {printGoogleMapApp === true ? <GoogleMapApp /> : null}
        {printGoogleMapApp === true ? <br /> : null}
        {printAnimeDBApp === true ? <AnimeDBApp /> : null}
        {printAnimeDBApp === true ? <br /> : null}
        {printExchangeApp === true ? <ExchangeApp /> : null}
        {printExchangeApp === true ? <br /> : null}
        {printBreakingBadApp === true ? <BreakingBadApp /> : null}
        {printBreakingBadApp === true ? <br /> : null}
        {printWikiApp === true ? <WikiApp /> : null}
        {printWikiApp === true ? <br /> : null}
        <div>
        <button onClick={componentDidMount} className="btn rounded-circle btn-primary my-2 btn-block btn-lg rounded-lg btn-outline-light" style={{
          position: "fixed",
          right: 100,
          bottom: 20,
          }}>
            ⬆
        </button>
        </div>
      </main>
    </>
  );
}

export default PrivateHome;