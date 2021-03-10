package main.java.com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

  @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        String paramName = request.getParameter("name");
 
        String paramMail = request.getParameter("email");

        String paramMessage = request.getParameter("message");

        String paramNum = request.getParameter("number");
 
        System.out.println(paramName + " submitted: '" + paramMail + "' as email, " + paramNum + " as number, and '" + paramMessage + "' as a message");

        response.getWriter().println("<b> Your name is " + paramName + "<b>");
        response.getWriter().println("<p> Your Email is " + paramMail + "<p>");
        response.getWriter().println("<p> Your number is " + paramNum + "<p>");
        response.getWriter().println("<p> Your message is " + paramMessage + "<p>");
        response.getWriter().println("<h3> Dear " + paramName + ", Your Message has been submitted!" + "<h3>");
                
    }
        }