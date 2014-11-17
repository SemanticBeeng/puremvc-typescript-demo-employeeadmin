package controllers.common

import java.io.File

import play.api.{Play, Routes}
import play.api.cache.Cached
import play.api.mvc.{Action, Controller}
import play.api.Play.current

/**
 *
 */
trait JsRouteGenerator[T] extends Controller {

  /** resolve "any" into the corresponding HTML page URI */
  protected def getURI(any: String): String = any match {
    case "main" => "/public/html/main.html"
    case "detail" => "/public/html/detail.html"
    case _ => "error"
  }


  /** load an HTML page from public/html */
  def loadWebComponentHTML(module: String, webc: String) = Action {
    val projectRoot: File = Play.current.path
    val file = new File(projectRoot.getAbsolutePath + getURI("app/modules/" + module + "/" + webc + ".html"))
    if (file.exists())
      Ok(scala.io.Source.fromFile(file.getCanonicalPath).mkString).as("text/html")
    else
      NotFound
  }


  /**
   * Retrieves all routes via reflection.
   * http://stackoverflow.com/questions/12012703/less-verbose-way-of-generating-play-2s-javascript-router
   * @todo If you have controllers in multiple packages, you need to add each package here.
   */
  private def buildRouteCache = {
    //println(play.api.Play.current.path)

    val controllers = jsRouteClass.getFields.map(_.get(null))

    controllers.flatMap { controller =>
      if (controller.getClass.getName.endsWith("WebJarAssets"))
        None
      else {
        println(controller.toString)
        controller.getClass.getDeclaredMethods.map { action =>
          println(action.toString)
          action.invoke(controller).asInstanceOf[play.core.Router.JavascriptReverseRoute]
        }
      }
    }
  }

  /**
   * Returns the JavaScript router that the client can use for "type-safe" routes.
   * Uses browser caching; set duration (in seconds) according to your release cycle.
   * @param varName The name of the global variable, defaults to `jsRoutes`
   */
  def jsRoutes(varName: String = "jsRoutes") = Cached(_ => "jsRoutes", duration = 86400) {
    Action { implicit request =>
      Ok(Routes.javascriptRouter(varName)(buildRouteCache: _*)).as(JAVASCRIPT)
    }
  }

    def jsRouteClass: Class[T] = ???

}
