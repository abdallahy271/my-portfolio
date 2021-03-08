package com.google.sps.servlets;
import com.google.gson.Gson;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /get-quotes URL. Try running a server and navigating to /hello! */
@WebServlet("/get-quotes")
public class HelloWorldServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String[] quotes = {
"Call me Ishmael. <i> Herman Melville, Moby-Dick (1851)</i>",

 "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. <i> Jane Austen, Pride and Prejudice (1813)</i>",

 "A screaming comes across the sky. <i>Thomas Pynchon, Gravity's Rainbow (1973)</i>",

"Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice. <i> Gabriel García Márquez, One Hundred Years of Solitude (1967; trans. Gregory Rabassa)</i>",

"Lolita, light of my life, fire of my loins.  <i>Vladimir Nabokov, Lolita (1955)</i>",

"Happy families are all alike; every unhappy family is unhappy in its own way. <i> Leo Tolstoy, Anna Karenina (1877; trans. Constance Garnett)</i>",

"riverrun, past Eve and Adam's, from swerve of shore to bend of bay, brings us by a commodius vicus of recirculation back to Howth Castle and Environs. <i>James Joyce, Finnegans Wake (1939)</i>",

"It was a bright cold day in April, and the clocks were striking thirteen. <i>George Orwell, 1984 (1949)</i>",

"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair. <i>Charles Dickens, A Tale of Two Cities (1859)</i>",

"I am an invisible man. <i> Ralph Ellison, Invisible Man (1952) </i>",

"The Miss Lonelyhearts of the New York Post-Dispatch (Are you in trouble? Do you need advice? Write to Miss Lonelyhearts and she will help you) sat at his desk and stared at a piece of white cardboard. <i>Nathanael West, Miss Lonelyhearts (1933)</i>",

"You don't know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain't no matter. <i>Mark Twain, Adventures of Huckleberry Finn (1885)</i>",

"Someone must have slandered Josef K., for one morning, without having done anything truly wrong, he was arrested. <i>Franz Kafka, The Trial (1925; trans. Breon Mitchell)</i>",

"You are about to begin reading Italo Calvino's new novel, If on a winter's night a traveler. <i>Italo Calvino, If on a winter's night a traveler (1979; trans. William Weaver)</i>",

"The sun shone, having no alternative, on the nothing new. <i>Samuel Beckett, Murphy (1938)</i>",

"If you really want to hear about it, the first thing you'll probably want to know is where I was born, and what my lousy childhood was like, and how my parents were occupied and all before they had me, and all that David Copperfield kind of crap, but I don't feel like going into it, if you want to know the truth. <i>J. D. Salinger, The Catcher in the Rye (1951)</i>",

"Once upon a time and a very good time it was there was a moocow coming down along the road and this moocow that was coming down along the road met a nicens little boy named baby tuckoo. <i>James Joyce, A Portrait of the Artist as a Young Man (1916)</i>",

"This is the saddest story I have ever heard. <i>Ford Madox Ford, The Good Soldier (1915)</i>"
    };

    String json = convertToJsonUsingGson(quotes);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);

    }

    private String convertToJsonUsingGson(String[] quotes) {
    Gson gson = new Gson();
    String json = gson.toJson(quotes);
    return json;
  }

}
