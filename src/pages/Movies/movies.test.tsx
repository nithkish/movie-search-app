import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Movies from "./Movies";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { BASE_URL } from "../../constants/api";

const testData = {
  data: {
    results: [
      {
        title: "A New Hope",
        episode_id: 4,
        opening_crawl:
          "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
        director: "George Lucas",
        release_date: "1977-05-25",
      },
      {
        title: "The Empire Strikes Back",
        episode_id: 5,
        opening_crawl:
          "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
        director: "Irvin Kershner",
        release_date: "1980-05-17",
      },
      {
        title: "Return of the Jedi",
        episode_id: 6,
        opening_crawl:
          "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...",
        director: "Richard Marquand",
        release_date: "1983-05-25",
      },
      {
        title: "The Phantom Menace",
        episode_id: 1,
        opening_crawl:
          "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....",
        director: "George Lucas",
        release_date: "1999-05-19",
      },
      {
        title: "Attack of the Clones",
        episode_id: 2,
        opening_crawl:
          "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
        director: "George Lucas",
        release_date: "2002-05-16",
      },
      {
        title: "Revenge of the Sith",
        episode_id: 3,
        opening_crawl:
          "War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....",
        director: "George Lucas",
        release_date: "2005-05-19",
      },
    ],
  },
};

describe("Movies", () => {
  let mock;
  beforeAll(() => {
    mock = new MockAdapter(axios);
    mock.onGet(`${BASE_URL}films/format=json`).reply(200, testData);
  });
  it("renders without crashing ", () => {
    const { container } = render(
      <Provider store={store}>
        <Movies />
      </Provider>
    );
    const movies = container.getElementsByTagName("main");
    expect(movies[0]).toBeInTheDocument();
  });
  it("displays movie list properly and no movie selected message is displayed", () => {
    const { container } = render(
      <Provider store={store}>
        <Movies />
      </Provider>
    );
    const movieList = container.getElementsByClassName("movie-bar");
    expect(movieList.length).toBe(6);
    const title = screen.getByText("A New Hope");
    expect(title).toBeInTheDocument();
    expect(screen.getByText("No Movie Selected")).toBeInTheDocument();
  });
  it("on Click of movie item, displays summary and default message removed", () => {
    const { container } = render(
      <Provider store={store}>
        <Movies />
      </Provider>
    );
    const movieList = container.getElementsByClassName("movie-bar");
    expect(screen.getAllByText("A New Hope").length).toBe(1);
    fireEvent.click(movieList[0]);
    expect(screen.getByText("No Movie Selected")).not.toBeInTheDocument();
    expect(screen.getAllByText("A New Hope").length).toBe(2);
    expect(screen.getByText("Directed By: George Lucas")).toBeInTheDocument();
  });
  it("on search only matching list should be displayed", () => {
    const { container } = render(
      <Provider store={store}>
        <Movies />
      </Provider>
    );
    const movieList = container.getElementsByClassName("movie-bar");
    expect(movieList.length).toBe(6);
    const input = screen.getByTestId("searchTerm");
    fireEvent.change(input, {target:{value:"Return"}});
    expect(container.getElementsByClassName("movie-bar").length).toBe(1);
  });
  it("no match shows error message", () => {
    render(
      <Provider store={store}>
        <Movies />
      </Provider>
    );
    expect(screen.queryByTestId("error")).not.toBeInTheDocument();
    const input = screen.getByTestId("searchTerm");
    fireEvent.change(input, {target:{value:"iop"}});
    expect(screen.queryByTestId("error")).toBeInTheDocument();
  });
  it("sort by episode and year ", () => {
    const {container}=render(
      <Provider store={store}>
        <Movies />
      </Provider>
    );
    const input = screen.getByTestId("searchTerm");
    fireEvent.change(input, {target:{value:""}});
    const sort = container.getElementsByClassName("sort");
    const episode = container.getElementsByClassName("episode");
    expect(episode[0].innerHTML).toBe("Episode 4")
    fireEvent.mouseOver(sort[0]);
    const episodeButton =screen.getByText("Episode");
    fireEvent.click(episodeButton);
    expect(container.getElementsByClassName("episode")[0]).toBe("Episode 1");
    expect(container.getElementsByClassName("date")[0]).toBe("1999-05-19");
    const year =screen.getByText("Year");
    fireEvent.click(year);
    expect(container.getElementsByClassName("date")[0]).toBe("1977-05-25");
  });
});
