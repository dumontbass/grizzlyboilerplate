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
    @Produces(MediaType.APPLICATION_JSON)
    public String findAll() {


        return "jkhkjhkjhkjhkj";
    }

    


}








