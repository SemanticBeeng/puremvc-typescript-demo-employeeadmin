package modules.common

import play.api._
import play.api.cache._
import play.api.mvc._
import play.api.Play.current

/**
 *
 */
trait JsRouteGenerator[C] extends Controller {

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

  protected def jsRouteClass: Class[C] = null

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

}
