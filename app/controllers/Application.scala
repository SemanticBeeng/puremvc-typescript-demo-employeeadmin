package controllers

import java.io.File

import modules.common.JsRouteGenerator
import play.api.Play
import play.api.mvc.{Controller, Action}

object Application extends Controller with JsRouteGenerator {

  def index = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  /** resolve "any" into the corresponding HTML page URI */
  def getURI(any: String): String = any match {
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

  import controllers.routes.javascript

  override def jsRouteClass: Class[javascript] = {
    classOf[javascript]
  }

}
