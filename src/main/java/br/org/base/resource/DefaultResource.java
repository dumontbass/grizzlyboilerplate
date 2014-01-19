package br.org.base.resource;


import br.org.base.log.SFLogger;

import br.org.base.server.BarServer;
import com.mongodb.MongoException;
import net.vz.mongodb.jackson.JacksonDBCollection;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Singleton;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.Date;
import java.util.List;


/**
 * Created with IntelliJ IDEA.
 * User: guilherme
 * Date: 9/27/13
 * Time: 3:40 PM
 * To change this template use File | Settings | File Templates.
 */

@Singleton
@Path("cardapios")
public class DefaultResource {

   

    

    @GET
    @Produces(MediaType.TEXT_HTML)
    public String findAll() {

        String a = "<svg xmlns=\"http://www.w3.org/2000/svg\" "+
    "xmlns:xlink=\"http://www.w3.org/1999/xlink\"> "+
    
    "<rect x=\"10\" y=\"10\" height=\"110\" width=\"110\" "+
         "style=\"stroke:#ff0000; fill: #0000ff\"> "+
     
        "<animateTransform "+
            "attributeName=\"transform\" "+
            "begin=\"0s\" "+
            "dur=\"12s\" "+
            "type=\"rotate\" "+
            "from=\"0 60 60\" "+
            "to=\"360 60 60\" "+
            "repeatCount=\"indefinite\"  "+
        "/> "+
    "</rect> "+

    "<rect x=\"20\" y=\"20\" height=\"110\" width=\"110\" "+
         "style=\"stroke:#aa0000; fill: #cc0000\"> "+
     
        "<animateTransform "+
            "attributeName=\"transform\" "+
            "begin=\"5s\" "+
            "dur=\"8s\" "+
            "type=\"rotate\" "+
            "from=\"360 60 60\" "+
            "to=\"0 60 60\" "+
            "repeatCount=\"indefinite\"  "+
        "/> "+
    "</rect> "+

"</svg>";


       


        return a;
    }

    


}








